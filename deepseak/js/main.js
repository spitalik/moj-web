// ==================== MAIN APPLICATION ====================
class GameHub {
    constructor() {
        this.currentCategory = 'all';
        this.currentSort = 'popular';
        this.displayCount = 15;
        this.allGames = gamesData;
        this.filteredGames = [...this.allGames];
        
        this.init();
    }

    init() {
        this.cacheDom();
        this.createParticles();
        this.bindEvents();
        this.renderGames();
        this.setupLanguageListener();
    }

    cacheDom() {
        this.searchInput = document.getElementById('searchInput');
        this.clearSearch = document.getElementById('clearSearch');
        this.gamesGrid = document.getElementById('gamesGrid');
        this.loadMoreBtn = document.getElementById('loadMoreBtn');
        this.loadMoreContainer = document.getElementById('loadMoreContainer');
        this.remainingCount = document.getElementById('remainingCount');
        this.noResults = document.getElementById('noResults');
        this.langToggle = document.getElementById('langToggle');
        this.langDropdown = document.getElementById('langDropdown');
        this.langSearch = document.getElementById('langSearch');
        this.themeToggle = document.getElementById('themeToggle');
        this.gameModal = document.getElementById('gameModal');
        this.modalContent = document.getElementById('modalContent');
        this.modalClose = document.getElementById('modalClose');
    }

    createParticles() {
        const container = document.getElementById('particles');
        if (!container) return;

        const colors = ['#6366f1', '#8b5cf6', '#d946ef', '#06b6d4', '#10b981'];
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 6 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
            particle.style.animationDelay = Math.random() * 10 + 's';
            
            container.appendChild(particle);
        }
    }

    bindEvents() {
        // Search
        this.searchInput.addEventListener('input', () => this.handleSearch());
        this.clearSearch.addEventListener('click', () => this.clearSearchInput());
        
        // Categories
        document.getElementById('categories').addEventListener('click', (e) => {
            const pill = e.target.closest('.category-pill');
            if (!pill) return;
            
            document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            
            this.currentCategory = pill.dataset.category;
            this.displayCount = 15;
            this.filterAndRender();
        });
        
        // Sort
        document.querySelectorAll('.sort-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentSort = btn.dataset.sort;
                this.filterAndRender();
            });
        });
        
        // Load more
        this.loadMoreBtn.addEventListener('click', () => {
            this.displayCount += 15;
            this.renderGames();
        });
        
        // Language
        this.langToggle.addEventListener('click', () => this.toggleLangDropdown());
        this.langDropdown.querySelectorAll('.lang-option').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                langManager.setLanguage(lang);
                this.toggleLangDropdown();
            });
        });
        this.langSearch.addEventListener('input', (e) => this.filterLanguages(e.target.value));
        
        // Close dropdown on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-selector')) {
                this.langDropdown.classList.remove('show');
                this.langToggle.classList.remove('active');
            }
        });
        
        // Theme
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        
        // Modal
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.gameModal.addEventListener('click', (e) => {
            if (e.target === this.gameModal) this.closeModal();
        });
        
        // Keyboard
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });
    }

    setupLanguageListener() {
        document.addEventListener('languageChanged', (e) => {
            this.filterAndRender();
        });
    }

    handleSearch() {
        const query = this.searchInput.value.trim();
        if (query.length > 0) {
            this.clearSearch.classList.add('visible');
        } else {
            this.clearSearch.classList.remove('visible');
        }
        this.displayCount = 15;
        this.filterAndRender();
    }

    clearSearchInput() {
        this.searchInput.value = '';
        this.clearSearch.classList.remove('visible');
        this.displayCount = 15;
        this.filterAndRender();
        this.searchInput.focus();
    }

    filterAndRender() {
        let games = [...this.allGames];
        
        // Filter by search
        const query = this.searchInput.value.trim().toLowerCase();
        if (query) {
            games = games.filter(game => 
                game.title.toLowerCase().includes(query) ||
                game.category.toLowerCase().includes(query)
            );
        }
        
        // Filter by category
        if (this.currentCategory !== 'all') {
            games = games.filter(game => game.category === this.currentCategory);
        }
        
        // Sort
        switch (this.currentSort) {
            case 'popular':
                games.sort((a, b) => b.plays - a.plays);
                break;
            case 'newest':
                games.sort((a, b) => b.id - a.id);
                break;
            case 'name':
                games.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'rating':
                games.sort((a, b) => b.rating - a.rating);
                break;
        }
        
        this.filteredGames = games;
        this.renderGames();
    }

    renderGames() {
        const gamesToShow = this.filteredGames.slice(0, this.displayCount);
        const remaining = this.filteredGames.length - this.displayCount;
        
        // Clear grid
        this.gamesGrid.innerHTML = '';
        
        if (gamesToShow.length === 0) {
            this.noResults.classList.remove('hidden');
            this.loadMoreContainer.classList.add('hidden');
        } else {
            this.noResults.classList.add('hidden');
            
            gamesToShow.forEach((game, index) => {
                const card = this.createGameCard(game, index);
                this.gamesGrid.appendChild(card);
            });
            
            if (remaining > 0) {
                this.loadMoreContainer.classList.remove('hidden');
                this.remainingCount.textContent = remaining;
            } else {
                this.loadMoreContainer.classList.add('hidden');
            }
        }
    }

    createGameCard(game, index) {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.style.animationDelay = (index * 0.05) + 's';
        card.dataset.gameId = game.id;
        
        card.innerHTML = `
            <div class="game-card-image">
                ${game.badge ? `<span class="game-card-badge" data-translate="${game.badge === 'new' ? 'new_game' : 'popular_game'}">${game.badge === 'new' ? 'NEW' : 'POPULAR'}</span>` : ''}
                <span class="game-icon-display">${game.icon}</span>
            </div>
            <div class="game-card-info">
                <h3 class="game-card-title">${game.title}</h3>
                <span class="game-card-category">${langManager.translate('category_' + game.category)}</span>
                <div class="game-card-rating">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <span>${game.rating}</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => this.openGame(game));
        
        return card;
    }

    openGame(game) {
        const gameUrl = getGameUrl(game);
        const lang = langManager.currentLang;
        
        // Build the full URL with language parameter
        const url = `${gameUrl}?lang=${lang}`;
        
        // Show modal with iframe
        this.modalContent.innerHTML = `
            <div class="modal-game-container">
                <div class="modal-game-header">
                    <h3>${game.title}</h3>
                    <span class="modal-game-category">${langManager.translate('category_' + game.category)}</span>
                </div>
                <iframe 
                    src="${url}" 
                    class="game-iframe" 
                    data-game-frame="true"
                    allowfullscreen
                    scrolling="no"
                ></iframe>
            </div>
        `;
        
        this.gameModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Add modal game styles dynamically
        const style = document.createElement('style');
        style.id = 'modal-game-styles';
        style.textContent = `
            .modal-game-container {
                width: 100%;
                min-height: 70vh;
                display: flex;
                flex-direction: column;
            }
            .modal-game-header {
                padding: 16px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid var(--border-color);
            }
            .modal-game-header h3 {
                font-size: 1.1rem;
                font-weight: 600;
            }
            .modal-game-category {
                font-size: 0.75rem;
                color: var(--text-tertiary);
                text-transform: uppercase;
            }
            .game-iframe {
                width: 100%;
                height: 65vh;
                border: none;
                border-radius: 0 0 var(--radius-2xl) var(--radius-2xl);
                background: var(--bg-primary);
            }
            @media (max-width: 480px) {
                .game-iframe {
                    height: 55vh;
                }
            }
        `;
        document.head.appendChild(style);
    }

    closeModal() {
        this.gameModal.classList.remove('show');
        document.body.style.overflow = '';
        
        // Clean up
        setTimeout(() => {
            this.modalContent.innerHTML = '';
            const style = document.getElementById('modal-game-styles');
            if (style) style.remove();
        }, 300);
    }

    toggleLangDropdown() {
        const isOpen = this.langDropdown.classList.contains('show');
        if (isOpen) {
            this.langDropdown.classList.remove('show');
            this.langToggle.classList.remove('active');
        } else {
            this.langDropdown.classList.add('show');
            this.langToggle.classList.add('active');
            if (this.langSearch) this.langSearch.value = '';
            this.filterLanguages('');
        }
    }

    filterLanguages(query) {
        const options = this.langDropdown.querySelectorAll('.lang-option');
        const q = query.toLowerCase().trim();
        
        options.forEach(option => {
            const text = option.textContent.toLowerCase();
            if (q === '' || text.includes(q)) {
                option.style.display = 'flex';
            } else {
                option.style.display = 'none';
            }
        });
    }

    toggleTheme() {
        const html = document.documentElement;
        const current = html.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', next);
        
        try {
            localStorage.setItem('gamehub_theme', next);
        } catch(e) {}
    }
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    // Restore theme
    try {
        const savedTheme = localStorage.getItem('gamehub_theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    } catch(e) {}
    
    // Initialize app
    const app = new GameHub();
    
    // Handle back button for modal
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.modalOpen) {
            app.closeModal();
        }
    });
});

// Service Worker Registration for PWA (optional)
if ('serviceWorker' in navigator) {
    // Uncomment to enable PWA
    // navigator.serviceWorker.register('/sw.js');
}