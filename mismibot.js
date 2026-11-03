/**
 * mismamente/js/mismibot.js
 * Primera etapa: chatbot local con respuestas preparadas.
 * No llama a una API ni requiere claves secretas.
 */
(() => {
  "use strict";

  const panel = document.getElementById("mismibot-panel");
  const toggle = document.getElementById("mismibot-toggle");
  const close = document.getElementById("mismibot-close");
  const form = document.getElementById("mismibot-form");
  const input = document.getElementById("mismibot-input");
  const messages = document.getElementById("mismibot-messages");

  if (!panel || !toggle || !close || !form || !input || !messages) return;

  function openChat() {
    panel.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    input.focus();
  }
  function closeChat() {
    panel.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.focus();
  }
  function addMessage(text, sender) {
    const item = document.createElement("div");
    item.className = `mismibot-message ${sender}`;
    item.textContent = text;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
  }
  function normalize(text) {
    return text.toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function animalReply(question) {
    if (typeof ANIMAL_FAMILIES === "undefined") return "";
    const q = normalize(question);
    const entries = Object.values(ANIMAL_FAMILIES);
    const animal = entries.find(a => {
      const name = normalize(a.name || "");
      const id = normalize(a.id || "");
      const shortName = name.replace(/^familia\s+/, "");
      return (shortName && q.includes(shortName)) || (id && q.includes(id.replace(/_/g, " ")));
    });

    if (animal) {
      return `${animal.name} 🐾\n${animal.tagline}\n\n${animal.description}\n\nFortalezas: ${(animal.strengths || []).join(", ")}.\nIntereses: ${(animal.interests || []).join(", ")}.`;
    }

    if (/\b(animales|familias|tipos de personalidad|resultados)\b/.test(q)) {
      return "Mismamente tiene ocho familias animales. Cada una representa una combinación simbólica de características, fortalezas e intereses. Si ya hiciste el test, dime el nombre de tu familia animal y te cuento más.";
    }
    return "";
  }

  function getReply(question) {
    const q = normalize(question);
    const aboutAnimal = animalReply(question);
    if (aboutAnimal) return aboutAnimal;

    if (/\b(hola|buenas|holi|hey)\b/.test(q)) {
      return "¡Holaaa! 💗 Soy MismiBot. Puedo explicarte las familias animales, el test o las comunidades de Mismamente.";
    }
    if (/\b(test|cuestionario|preguntas|resultado)\b/.test(q)) {
      return "El test te ayuda a explorar tus preferencias y tu forma de convivir. Contesta con sinceridad: no hay respuestas buenas ni malas. Al terminar, revisa la familia animal que te salió y sus características.";
    }
    if (/\b(comunidad|comunidades|amigos|conocer gente|intereses)\b/.test(q)) {
      return "Las comunidades de Mismamente te ayudan a encontrar estudiantes con intereses parecidos. Puedes explorar Música, Arte, Videojuegos, Deportes y Cine desde la sección COMUNIDADES.";
    }
    if (/\b(que puedes hacer|que sabes|ayuda|ayudar)\b/.test(q)) {
      return "Por ahora puedo responder preguntas básicas sobre el test, las familias animales y las comunidades. Por ejemplo, escribe: «¿Qué significa la familia Mapache?»";
    }
    if (/\b(gracias|muchas gracias)\b/.test(q)) {
      return "¡De nada! 💗 Aquí estoy para ayudarte a conocer mejor Mismamente.";
    }
    return "Todavía estoy aprendiendo y esta versión funciona con respuestas preparadas, así que no entiendo todas las preguntas. Prueba preguntarme por el test, las comunidades o una familia animal, por ejemplo: «Háblame de la familia Mapache».";
  }

  toggle.addEventListener("click", () => panel.hidden ? openChat() : closeChat());
  close.addEventListener("click", closeChat);
  form.addEventListener("submit", event => {
    event.preventDefault();
    const question = input.value.trim();
    if (!question) return;
    addMessage(question, "user");
    input.value = "";
    addMessage(getReply(question), "bot");
    input.focus();
  });
})();
