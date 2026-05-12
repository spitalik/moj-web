// js/main.js - OPRAVENÁ VERZIA
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
        const c = document.getElementById('particles');
        if (!c) return;
        const colors = ['#6366f1', '#8b5cf6', '#d946ef', '#06b6d4', '#10b981'];
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.classList.add('particle');
            const s = Math.random() * 6 + 2;
            p.style.width = s + 'px';
            p.style.height = s + 'px';
            p.style.left = Math.random() * 100 + '%';
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            p.style.animationDuration = (Math.random() * 15 + 10) + 's';
            p.style.animationDelay = Math.random() * 10 + 's';
            c.appendChild(p);
        }
    }

    bindEvents() {
        // Search
        this.searchInput.addEventListener('input', () => this.handleSearch());
        this.clearSearch.addEventListener('click', () => this.clearSearchInput());

        // Categories
        const categoriesEl = document.getElementById('categories');
        if (categoriesEl) {
            categoriesEl.addEventListener('click', (e) => {
                const pill = e.target.closest('.category-pill');
                if (!pill) return;
                document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                this.currentCategory = pill.dataset.category;
                this.displayCount = 15;
                this.filterAndRender();
            });
        }

        // Sort buttons
        document.querySelectorAll('.sort-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentSort = btn.dataset.sort;
                this.filterAndRender();
            });
        });

        // Load more
        if (this.loadMoreBtn) {
            this.loadMoreBtn.addEventListener('click', () => {
                this.displayCount += 15;
                this.renderGames();
            });
        }

        // Language toggle
        if (this.langToggle) {
            this.langToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleLangDropdown();
            });
        }

        // Close language dropdown on outside click
        document.addEventListener('click', (e) => {
            if (this.langDropdown && !e.target.closest('#langToggle') && !e.target.closest('#langDropdown')) {
                this.langDropdown.classList.remove('show');
                this.langToggle?.classList.remove('active');
            }
        });

        // Language selection
        if (this.langDropdown) {
            // Delegovaný event - dôležité, lebo tlačidlá sa generujú dynamicky
            this.langDropdown.addEventListener('click', (e) => {
                const opt = e.target.closest('.lang-option');
                if (opt) {
                    const lang = opt.dataset.lang;
                    langManager.setLanguage(lang);
                    this.toggleLangDropdown();
                    this.filterAndRender();
                }
            });
        }

        // Language search
        if (this.langSearch) {
            this.langSearch.addEventListener('input', (e) => {
                const q = e.target.value.toLowerCase();
                if (this.langDropdown) {
                    this.langDropdown.querySelectorAll('.lang-option').forEach(o => {
                        o.style.display = o.textContent.toLowerCase().includes(q) ? 'flex' : 'none';
                    });
                }
            });
        }

        // Theme toggle
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Modal close button
        if (this.modalClose) {
            this.modalClose.addEventListener('click', () => this.closeModal());
        }

        // Close modal on overlay click
        if (this.gameModal) {
            this.gameModal.addEventListener('click', (e) => {
                if (e.target === this.gameModal) {
                    this.closeModal();
                }
            });
        }

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.gameModal?.classList.contains('show')) {
                this.closeModal();
            }
        });
    }

    handleSearch() {
        const q = this.searchInput?.value.trim() || '';
        if (this.clearSearch) {
            this.clearSearch.classList.toggle('visible', q.length > 0);
        }
        this.displayCount = 15;
        this.filterAndRender();
    }

    clearSearchInput() {
        if (this.searchInput) {
            this.searchInput.value = '';
        }
        if (this.clearSearch) {
            this.clearSearch.classList.remove('visible');
        }
        this.displayCount = 15;
        this.filterAndRender();
        this.searchInput?.focus();
    }

    filterAndRender() {
        let games = [...this.allGames];
        const q = this.searchInput?.value.trim().toLowerCase() || '';

        if (q) {
            games = games.filter(g =>
                g.title.toLowerCase().includes(q) ||
                g.category.toLowerCase().includes(q)
            );
        }

        if (this.currentCategory !== 'all') {
            games = games.filter(g => g.category === this.currentCategory);
        }

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
        if (!this.gamesGrid) {
            console.error('gamesGrid element not found!');
            return;
        }

        const games = this.filteredGames.slice(0, this.displayCount);
        const rem = this.filteredGames.length - this.displayCount;

        this.gamesGrid.innerHTML = '';

        if (games.length === 0) {
            if (this.noResults) this.noResults.classList.remove('hidden');
            if (this.loadMoreContainer) this.loadMoreContainer.classList.add('hidden');
        } else {
            if (this.noResults) this.noResults.classList.add('hidden');

            games.forEach((g, i) => {
                const card = document.createElement('div');
                card.className = 'game-card';
                card.style.animationDelay = (i * 0.05) + 's';
                card.setAttribute('data-game-id', g.id);

                const badgeHTML = g.badge
                    ? `<span class="game-card-badge">${g.badge === 'new' ? 'NEW' : 'POPULAR'}</span>`
                    : '';

                card.innerHTML = `
                    <div class="game-card-image">
                        ${badgeHTML}
                        <span class="game-icon-display">${g.icon}</span>
                    </div>
                    <div class="game-card-info">
                        <h3 class="game-card-title">${g.title}</h3>
                        <span class="game-card-category">${langManager.translate('category_' + g.category)}</span>
                        <div class="game-card-rating">
                            <span>⭐</span>
                            <span>${g.rating}</span>
                        </div>
                    </div>
                `;

                // HLAVNÁ OPRAVA - priamy event listener
                card.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Kliknutá hra:', g.title, g.id);
                    this.openGame(g);
                });

                // Touch event pre mobil
                card.addEventListener('touchend', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Touch hra:', g.title, g.id);
                    this.openGame(g);
                });

                this.gamesGrid.appendChild(card);
            });

            if (rem > 0) {
                if (this.loadMoreContainer) this.loadMoreContainer.classList.remove('hidden');
                if (this.remainingCount) this.remainingCount.textContent = rem;
            } else {
                if (this.loadMoreContainer) this.loadMoreContainer.classList.add('hidden');
            }
        }
    }

    openGame(game) {
        console.log('openGame called for:', game.title, game.id);
        
        if (!this.gameModal || !this.modalContent) {
            console.error('Modal elements not found!');
            // Fallback: otvor hru v novom okne
            const url = `${getGameUrl(game)}?lang=${langManager.currentLang}`;
            window.open(url, '_blank');
            return;
        }

        const url = `${getGameUrl(game)}?lang=${langManager.currentLang}`;

        this.modalContent.innerHTML = `
            <div class="modal-game-container">
                <div class="modal-game-header">
                    <h3>${game.title}</h3>
                    <span class="modal-game-category">${langManager.translate('category_' + game.category)}</span>
                </div>
                <div class="modal-game-iframe-wrapper">
                    <iframe 
                        src="${url}" 
                        class="game-iframe" 
                        data-game-frame="true" 
                        allowfullscreen 
                        scrolling="no"
                        style="width:100%;height:65vh;border:none;background:#0a0a2a;"
                    ></iframe>
                </div>
                <div class="modal-game-footer">
                    <span>🎮 ${game.title}</span>
                    <span>⭐ ${game.rating}</span>
                </div>
            </div>
        `;

        // Pridaj štýly ak neexistujú
        if (!document.getElementById('modal-game-styles')) {
            const style = document.createElement('style');
            style.id = 'modal-game-styles';
            style.textContent = `
                .modal-game-container {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }
                .modal-game-header {
                    padding: 16px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid var(--border-color);
                    color: var(--text-primary);
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
                .modal-game-iframe-wrapper {
                    flex: 1;
                    min-height: 60vh;
                }
                .game-iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                    background: #0a0a2a;
                }
                .modal-game-footer {
                    padding: 10px 16px;
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.8rem;
                    color: var(--text-tertiary);
                    border-top: 1px solid var(--border-color);
                }
                @media (max-width: 480px) {
                    .game-iframe {
                        height: 55vh;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        // Zobraz modál
        this.gameModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        console.log('Modal should be visible now');
    }

    closeModal() {
        if (this.gameModal) {
            this.gameModal.classList.remove('show');
        }
        document.body.style.overflow = '';
        
        // Vyčisti obsah po zatvorení
        setTimeout(() => {
            if (this.modalContent) {
                this.modalContent.innerHTML = '';
            }
        }, 300);
    }

    toggleLangDropdown() {
        if (!this.langDropdown || !this.langToggle) return;
        
        const isOpen = this.langDropdown.classList.contains('show');
        if (isOpen) {
            this.langDropdown.classList.remove('show');
            this.langToggle.classList.remove('active');
        } else {
            this.langDropdown.classList.add('show');
            this.langToggle.classList.add('active');
            if (this.langSearch) this.langSearch.value = '';
            // Zobraz všetky možnosti
            this.langDropdown.querySelectorAll('.lang-option').forEach(o => {
                o.style.display = 'flex';
            });
        }
    }

    toggleTheme() {
        const html = document.documentElement;
        const current = html.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', next);
        try {
            localStorage.setItem('gamehub_theme', next);
        } catch (e) {}
    }
}

// ==================== INICIALIZÁCIA ====================
document.addEventListener('DOMContentLoaded', () => {
    // Obnov tému
    try {
        const savedTheme = localStorage.getItem('gamehub_theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    } catch (e) {}

    // Spusti aplikáciu
    const app = new GameHub();
    
    // Debug - vypíš stav
    console.log('GameHub initialized');
    console.log('Modal element:', document.getElementById('gameModal'));
    console.log('Games grid:', document.getElementById('gamesGrid'));
    console.log('Total games:', gamesData.length);
});