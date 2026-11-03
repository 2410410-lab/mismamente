/**
 * mismamente/js/test.js
 * Lógica de ejecución del Test de Personalidad: Selección de opciones,
 * navegación entre preguntas, validación de estado y cálculo de afinidad.
 */

class TestEngine {
  constructor() {
    this.currentQuestionIndex = 0;
    this.userAnswers = {}; // Mapeo: questionId -> optionIndex
    this.animalScores = {
      gallina: 0,
      mapache: 0,
      gato_naranja: 0,
      unicornio: 0,
      rana: 0,
      pinguino: 0,
      gato_rosa: 0,
      panda: 0
    };
  }

  // Inicializa el test
  init() {
    this.currentQuestionIndex = 0;
    this.userAnswers = {};
    this.resetScores();
    this.renderQuestion();
  }

  resetScores() {
    for (let key in this.animalScores) {
      this.animalScores[key] = 0;
    }
  }

  renderQuestion() {
    const questionCard = document.getElementById('question-card-target');
    const qData = TEST_QUESTIONS[this.currentQuestionIndex];

    if (!questionCard || !qData) return;

    // Ocultar mensaje de validación previo
    this.hideValidationMsg();

    // Actualizar indicador de progreso
    const total = TEST_QUESTIONS.length;
    const currentNum = this.currentQuestionIndex + 1;
    const percent = Math.round((currentNum / total) * 100);

    document.getElementById('test-progress-text').textContent = `Pregunta ${currentNum} de ${total}`;
    document.getElementById('test-progress-percent').textContent = `${percent}%`;
    document.getElementById('progress-fill').style.width = `${percent}%`;

    // Renderizar HTML de la pregunta y sus opciones
    const selectedOptIndex = this.userAnswers[qData.id];

    let optionsHtml = qData.options.map((opt, idx) => {
      const isSelected = selectedOptIndex === idx ? 'selected' : '';
      const isChecked = selectedOptIndex === idx ? 'checked' : '';
      return `
        <li class="option-item ${isSelected}" onclick="testEngine.selectOption(${qData.id}, ${idx})">
          <input type="radio" id="opt-${idx}" name="q-${qData.id}" class="option-radio" value="${idx}" ${isChecked}>
          <label for="opt-${idx}" class="option-label">${opt.text}</label>
        </li>
      `;
    }).join('');

    questionCard.innerHTML = `
      <h3 class="question-text">${qData.question}</h3>
      <ul class="options-list">
        ${optionsHtml}
      </ul>
    `;

    // Estado del botón "Anterior"
    const btnPrev = document.getElementById('btn-test-prev');
    if (btnPrev) {
      btnPrev.disabled = this.currentQuestionIndex === 0;
      btnPrev.style.opacity = this.currentQuestionIndex === 0 ? '0.5' : '1';
    }
  }

  selectOption(questionId, optionIndex) {
    this.userAnswers[questionId] = optionIndex;
    this.hideValidationMsg();
    this.renderQuestion(); // Re-renderizar para actualizar clases visuales
  }

  nextQuestion() {
    const qData = TEST_QUESTIONS[this.currentQuestionIndex];
    // Validación: la pregunta actual debe responderse para avanzar
    if (this.userAnswers[qData.id] === undefined) {
      this.showValidationMsg();
      return;
    }

    if (this.currentQuestionIndex < TEST_QUESTIONS.length - 1) {
      this.currentQuestionIndex++;
      this.renderQuestion();
    } else {
      // Fin del cuestionario -> Calcular y mostrar resultado
      this.calculateResult();
    }
  }

  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.renderQuestion();
    }
  }

  restartTest() {
    if (confirm("¿Deseas reiniciar el cuestionario? Se borrarán tus respuestas actuales.")) {
      this.init();
    }
  }

  showValidationMsg() {
    const msg = document.getElementById('test-validation-msg');
    if (msg) msg.hidden = false;
  }

  hideValidationMsg() {
    const msg = document.getElementById('test-validation-msg');
    if (msg) msg.hidden = true;
  }

  // CÁLCULO REAL DE AFINIDAD
  calculateResult() {
    this.resetScores();

    // Sumar puntos según matriz
    TEST_QUESTIONS.forEach(q => {
      const selectedIndex = this.userAnswers[q.id];
      if (selectedIndex !== undefined) {
        const option = q.options[selectedIndex];
        for (let animalId in option.scores) {
          if (this.animalScores[animalId] !== undefined) {
            this.animalScores[animalId] += option.scores[animalId];
          }
        }
      }
    });

    // Ordenar familias de mayor a menor puntuación
    const sortedAnimals = Object.keys(this.animalScores).sort((a, b) => {
      return this.animalScores[b] - this.animalScores[a];
    });

    const winningAnimalId = sortedAnimals[0];
    const winningScore = this.animalScores[winningAnimalId];
    const runnerUpAnimalId = sortedAnimals[1];
    const runnerUpScore = this.animalScores[runnerUpAnimalId];

    // Verificar si hay empate o fuerte afinidad secundaria
    const isTie = winningScore === runnerUpScore;

    this.renderResultsView(winningAnimalId, runnerUpAnimalId, isTie);
  }

  renderResultsView(primaryId, secondaryId, isTie) {
    const primaryFamily = ANIMAL_FAMILIES[primaryId];
    const secondaryFamily = ANIMAL_FAMILIES[secondaryId];
    const target = document.getElementById('result-display-target');

    if (!target || !primaryFamily) return;

    // Guardar resultado global en la app
    app.lastResult = primaryFamily;

    // Buscar comunidades recomendadas asociadas
    const recommendedComms = COMMUNITIES_DATA.filter(c => 
      c.families.includes(primaryFamily.name) || c.families.includes(secondaryFamily.name)
    );

    let commsHtml = recommendedComms.map(c => `
      <li><strong>${c.name}</strong> (${c.category})</li>
    `).join('');

    target.innerHTML = `
      <p class="result-header-subtitle">¡Tu test ha finalizado exitosamente!</p>
      <h2 class="result-animal-title">${primaryFamily.name}</h2>
      
      <div class="result-svg-box">
        ${primaryFamily.svg}
      </div>

      <p class="result-desc">${primaryFamily.description}</p>

      ${isTie ? `
        <div class="test-disclaimer" style="margin-bottom:20px;">
          ⚖️ <strong>Resultado Afín Secundario:</strong> Tus respuestas mostraron una afinidad igualmente alta con la <strong>${secondaryFamily.name}</strong>. Ambas reflejan tus preferencias de convivencia.
        </div>
      ` : ''}

      <div class="result-details-grid">
        <div class="result-box-item">
          <h4>🌟 Tus Fortalezas Principales</h4>
          <ul>
            ${primaryFamily.strengths.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>

        <div class="result-box-item">
          <h4>💡 Intereses Frecuentes</h4>
          <ul>
            ${primaryFamily.interests.map(i => `<li>${i}</li>`).join('')}
          </ul>
        </div>

        <div class="result-box-item">
          <h4>📊 Explicación de tus Puntuaciones</h4>
          <p>Obtuviste <strong>${this.animalScores[primaryId]} puntos</strong> para la ${primaryFamily.name}. Tus selecciones sobre actividades escolares, ambiente de estudio y trabajo en equipo coincidieron con el perfil de este animal.</p>
        </div>

        <div class="result-box-item">
          <h4>🚀 Comunidades Recomendadas</h4>
          <ul>
            ${commsHtml.length > 0 ? commsHtml : '<li>Comunidad General de Convivencia</li>'}
          </ul>
        </div>
      </div>

      <div class="result-actions">
        <button class="btn-primary" onclick="app.navigateTo('comunidades')">Explorar Comunidades</button>
        <button class="btn-secondary" onclick="testEngine.restartTest()">Repetir el Test</button>
        <button class="btn-secondary" onclick="app.navigateTo('inicio')">Regresar al Inicio</button>
      </div>
    `;

    // Cambiar a la vista de resultados
    app.navigateTo('resultados');
  }
}

// Instancia global
const testEngine = new TestEngine();