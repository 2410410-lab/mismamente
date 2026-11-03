/**
 * mismamente/js/communities.js
 * Gestión del Catálogo de Comunidades Escolares, Filtros por Categoría,
 * Buscador en Tiempo Real e Interfaz de Demostración de Chat.
 */

class CommunitiesEngine {
  constructor() {
    this.currentCategoryFilter = 'todas';
    this.currentSearchTerm = '';
  }

  init() {
    this.renderCommunities();
  }

  renderCommunities() {
    const grid = document.getElementById('communities-grid-target');
    if (!grid) return;

    // Filtrar comunidades por categoría y por término de búsqueda
    const filtered = COMMUNITIES_DATA.filter(comm => {
      const matchesCategory = this.currentCategoryFilter === 'todas' || 
                              comm.category.toLowerCase() === this.currentCategoryFilter.toLowerCase();
      
      const search = this.currentSearchTerm.toLowerCase();
      const matchesSearch = comm.name.toLowerCase().includes(search) ||
                            comm.description.toLowerCase().includes(search) ||
                            comm.interests.some(i => i.toLowerCase().includes(search));

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 30px; color: var(--text-muted);">
          🔍 No se encontraron comunidades que coincidan con los criterios de búsqueda.
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(comm => `
      <article class="community-card">
        <span class="comm-category-badge">${comm.category}</span>
        <h3 class="comm-title">${comm.name}</h3>
        <p class="comm-desc">${comm.description}</p>
        <div class="comm-families-tag">
          <strong>Familias afines:</strong> ${comm.families.join(', ')}
        </div>
        <button class="btn-card-action" onclick="communitiesEngine.openChatModal('${comm.name}')">
          Ver Actividades y Chat
        </button>
      </article>
    `).join('');
  }

  handleSearch(term) {
    this.currentSearchTerm = term;
    this.renderCommunities();
  }

  filterByCategory(category, btnElement) {
    this.currentCategoryFilter = category;
    
    // Actualizar clase activa en los botones
    const buttons = document.querySelectorAll('.filter-buttons-group .filter-btn');
    buttons.forEach(b => b.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    this.renderCommunities();
  }

  // MODAL DE CHAT (DEMOSTRACIÓN UI)
  openChatModal(commName) {
    const modal = document.getElementById('chat-modal');
    const title = document.getElementById('chat-modal-title');
    const container = document.getElementById('chat-messages-container');

    if (!modal || !title || !container) return;

    title.textContent = `Chat: ${commName}`;
    container.innerHTML = `
      <div class="chat-msg">
        <strong>Moderador Escolar:</strong> ¡Bienvenidos a la comunidad de ${commName}! Recuerden mantener un trato respetuoso.
      </div>
      <div class="chat-msg">
        <strong>Estudiante Demo:</strong> ¡Hola! ¿Cuándo es la próxima reunión presencial?
      </div>
    `;

    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
  }

  closeChatModal() {
    const modal = document.getElementById('chat-modal');
    if (modal) {
      modal.hidden = true;
      modal.setAttribute('aria-hidden', 'true');
    }
  }

  sendDemoMessage() {
    const input = document.getElementById('chat-input-field');
    const container = document.getElementById('chat-messages-container');

    if (!input || !container || input.value.trim() === '') return;

    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg user';
    userMsg.innerHTML = `<strong>Tú (Invitado):</strong> ${input.value.trim()}`;
    
    container.appendChild(userMsg);
    input.value = '';
    container.scrollTop = container.scrollHeight;
  }
}

// Instancia global
const communitiesEngine = new CommunitiesEngine();