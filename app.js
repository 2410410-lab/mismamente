/**
 * mismamente/js/app.js
 * Coordinador principal de la aplicación: Control de rutas/secciones SPA,
 * Carrusel interactivo de la portada, carga de bloques y gestión global.
 */

class AppController {
  constructor() {
    this.currentAnimalCarouselIndex = 0;
    this.lastResult = null;
  }

  init() {
    // Inicializar sub-motores
    testEngine.init();
    communitiesEngine.init();

    // Renderizar vistas iniciales
    this.renderAnimalShowcase();
    this.renderWeeklyChallenges();
    this.renderDemoProfiles();
  }

  // NAVEGACIÓN ENTRE VISTAS (SPA)
  navigateTo(sectionId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => sec.classList.remove('active'));

    const targetSec = document.getElementById(`sec-${sectionId}`);
    if (targetSec) {
      targetSec.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Actualizar estado activo en botones de navegación
    const navButtons = document.querySelectorAll('.main-nav .nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));

    const activeNavBtn = document.getElementById(`btn-nav-${sectionId}`);
    if (activeNavBtn) {
      activeNavBtn.classList.add('active');
    }
  }

  scrollToSection(elementId) {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // CARRUSEL DE ANIMALES EN INICIO
  renderAnimalShowcase() {
    const target = document.getElementById('animal-showcase-target');
    const keys = Object.keys(ANIMAL_FAMILIES);
    if (!target || keys.length === 0) return;

    const currentKey = keys[this.currentAnimalCarouselIndex];
    const family = ANIMAL_FAMILIES[currentKey];

    target.innerHTML = `
      <div class="animal-card-mini">
        <div class="animal-svg-wrapper">
          ${family.svg}
        </div>
        <div class="animal-name-tag">${family.name}</div>
        <p style="font-size: 0.88rem; color: var(--text-muted); font-weight:600;">"${family.tagline}"</p>
      </div>
    `;
  }

  nextAnimalCard() {
    const total = Object.keys(ANIMAL_FAMILIES).length;
    this.currentAnimalCarouselIndex = (this.currentAnimalCarouselIndex + 1) % total;
    this.renderAnimalShowcase();
  }

  prevAnimalCard() {
    const total = Object.keys(ANIMAL_FAMILIES).length;
    this.currentAnimalCarouselIndex = (this.currentAnimalCarouselIndex - 1 + total) % total;
    this.renderAnimalShowcase();
  }

  // RENDERIZAR TABLÓN DE RETOS SEMANALES
  renderWeeklyChallenges() {
    const target = document.getElementById('retos-container');
    if (!target) return;

    target.innerHTML = WEEKLY_CHALLENGES.map(r => `
      <div class="reto-card-item">
        <div class="reto-header-row">
          <span class="reto-title">${r.title}</span>
          <span class="reto-tag">${r.status}</span>
        </div>
        <div class="reto-body">${r.instructions}</div>
        <div style="font-size: 0.78rem; color: #856404; margin-top: 4px;">💡 <em>${r.coexistenceTip}</em></div>
        <div class="reto-families">Participan: ${r.participatingFamilies.join(', ')}</div>
      </div>
    `).join('');
  }

  // RENDERIZAR PERFILES DE AFINIDAD DE DEMOSTRACIÓN
  renderDemoProfiles() {
    const target = document.getElementById('personas-container');
    if (!target) return;

    target.innerHTML = DEMO_PROFILES.map(p => `
      <div class="persona-card">
        <div class="persona-family">${p.family}</div>
        <div style="font-size:0.75rem; color:#64748b; font-weight:600;">${p.alias}</div>
        <div class="persona-interests">Gustos: ${p.sharedInterests.join(', ')}</div>
      </div>
    `).join('');
  }

  showLastResultOrAlert() {
    if (this.lastResult) {
      this.navigateTo('resultados');
    } else {
      alert("Aún no has completado el test de personalidad. Haz clic en 'Comenzar test' para descubrir tu familia animal.");
      this.navigateTo('test');
    }
  }
}

// Inicialización cuando el DOM esté listo
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new AppController();
  app.init();
});