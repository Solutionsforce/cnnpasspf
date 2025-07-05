// Aguarda o DOM estar totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos do DOM
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const searchBtn = document.querySelector('.search-btn');
    const googleBtn = document.querySelector('.google-btn');
    
    // Funcionalidade do menu hambúrguer
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Anima as linhas do hambúrguer
            const lines = this.querySelectorAll('.hamburger-line');
            if (isExpanded) {
                // Menu fechando - volta ao estado normal
                lines[0].style.transform = 'rotate(0deg) translateY(0px)';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'rotate(0deg) translateY(0px)';
            } else {
                // Menu abrindo - transforma em X
                lines[0].style.transform = 'rotate(45deg) translateY(6px)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'rotate(-45deg) translateY(-6px)';
            }
        });
    }
    
    // Funcionalidade do botão de busca
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            // Aqui você pode implementar a funcionalidade de busca
            console.log('Botão de busca clicado');
            
            // Exemplo: abrir modal de busca ou redirecionar
            // Por enquanto, apenas um alerta
            const searchTerm = prompt('Digite o termo de busca:');
            if (searchTerm && searchTerm.trim()) {
                console.log('Buscando por:', searchTerm);
                // Aqui você implementaria a lógica de busca real
                alert(`Buscando por: "${searchTerm}"`);
            }
        });
    }
    
    // Funcionalidade do botão Google
    if (googleBtn) {
        googleBtn.addEventListener('click', function() {
            // Aqui você pode implementar a integração com Google
            console.log('Botão Google clicado');
            
            // Exemplo: abrir Google em nova aba
            window.open('https://www.google.com', '_blank');
        });
    }
    
    // Fechar menu mobile ao clicar em um link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu .nav-link');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Fecha o menu mobile
            const collapse = new bootstrap.Collapse(mobileMenu, {
                hide: true
            });
        });
    });
    
    // Fechar menu mobile ao clicar fora dele
    document.addEventListener('click', function(event) {
        const isMenuOpen = mobileMenu && mobileMenu.classList.contains('show');
        const isClickInsideMenu = mobileMenu && mobileMenu.contains(event.target);
        const isClickOnToggler = hamburgerMenu && hamburgerMenu.contains(event.target);
        
        if (isMenuOpen && !isClickInsideMenu && !isClickOnToggler) {
            const collapse = new bootstrap.Collapse(mobileMenu, {
                hide: true
            });
        }
    });
    
    // Smooth scroll para links internos (se houver)
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Adiciona efeito de loading ao clicar em links
    const allLinks = document.querySelectorAll('a:not([href^="#"]):not([target="_blank"])');
    allLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Adiciona classe de loading se necessário
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 200);
        });
    });
    
    // Função para detectar scroll e adicionar efeitos ao header
    let lastScrollTop = 0;
    const header = document.querySelector('.cnn-header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Adiciona sombra ao header quando há scroll
        if (scrollTop > 10) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);
    
    // Adiciona suporte a teclado para elementos interativos
    const interactiveElements = document.querySelectorAll('.hamburger-menu, .search-btn, .google-btn');
    interactiveElements.forEach(element => {
        element.addEventListener('keydown', function(e) {
            // Enter ou Espaço ativam o elemento
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    console.log('CNN Brasil Header - JavaScript carregado com sucesso!');
});

// Função para verificar se o usuário foi selecionado (definida globalmente)
function checkSelection() {
    // Redireciona diretamente para o portal de seleção do iFood
    window.open('https://ifood.portal-selecao.com/', '_blank');
}

// Função utilitária para debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Função para redimensionamento responsivo
const handleResize = debounce(function() {
    // Ajustes responsivos se necessários
    const width = window.innerWidth;
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Fecha menu mobile em telas maiores
    if (width > 768 && mobileMenu && mobileMenu.classList.contains('show')) {
        const collapse = new bootstrap.Collapse(mobileMenu, {
            hide: true
        });
    }
}, 250);

window.addEventListener('resize', handleResize);
