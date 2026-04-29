/* ==========================================
   GERENCIADOR DE INFOGRÁFICO
   Encontro 4: Requisitos Funcionais
   ========================================== */

class InfograficoRF {
    constructor() {
        this.inicializar();
    }

    /**
     * Inicializa o infográfico
     */
    inicializar() {
        this.configurarEventos();
        this.aplicarAnimacoes();
        Utils.log('Infográfico inicializado', 'success');
    }

    /**
     * Configura event listeners
     */
    configurarEventos() {
        // Botão de impressão
        const btnImprimir = document.getElementById('printBtn');
        if (btnImprimir) {
            btnImprimir.addEventListener('click', () => this.imprimir());
        }

        // Copiar conteúdo dos cards
        document.querySelectorAll('.infografico-card').forEach((card) => {
            card.addEventListener('click', () => {
                this.mostrarTooltip(card, 'Clique em Print para imprimir');
            });
        });

        // Scroll suave
        document.querySelectorAll('a[href^="#"]').forEach((link) => {
            link.addEventListener('click', (evento) => {
                evento.preventDefault();
                const alvo = document.querySelector(link.getAttribute('href'));
                if (alvo) {
                    alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    /**
     * Aplica animações aos cards
     */
    aplicarAnimacoes() {
        const cards = document.querySelectorAll('.infografico-card');
        
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            cards.forEach((card) => {
                observer.observe(card);
            });
        } else {
            // Fallback para navegadores antigos
            cards.forEach((card) => {
                card.classList.add('fade-in');
            });
        }

        Utils.log(`${cards.length} cards animados`, 'info');
    }

    /**
     * Imprime o infográfico
     */
    imprimir() {
        try {
            window.print();
            Utils.log('Impressão iniciada', 'info');
        } catch (erro) {
            Utils.log(`Erro ao imprimir: ${erro}`, 'error');
            Notificacoes.erro('Erro ao imprimir. Tente Ctrl+P');
        }
    }

    /**
     * Mostra tooltip
     * @param {HTMLElement} elemento
     * @param {string} mensagem
     */
    mostrarTooltip(elemento, mensagem) {
        const tooltip = Utils.criarElemento(
            'div',
            'tooltip',
            mensagem
        );

        tooltip.style.position = 'absolute';
        tooltip.style.background = '#667eea';
        tooltip.style.color = 'white';
        tooltip.style.padding = '8px 12px';
        tooltip.style.borderRadius = '6px';
        tooltip.style.fontSize = '0.85em';
        tooltip.style.zIndex = '1000';
        tooltip.style.top = (elemento.offsetTop - 40) + 'px';
        tooltip.style.left = (elemento.offsetLeft + 10) + 'px';

        elemento.parentElement.appendChild(tooltip);

        setTimeout(() => {
            tooltip.remove();
        }, 2000);
    }

    /**
     * Exporta infográfico como imagem
     */
    exportarComoImagem() {
        if (typeof html2canvas === 'undefined') {
            Notificacoes.erro('Biblioteca de captura não carregada');
            return;
        }

        const container = document.querySelector('.infografico-container');
        
        Notificacoes.info('Gerando imagem... Aguarde.');

        html2canvas(container, {
            allowTaint: true,
            useCORS: true,
            scale: 2
        }).then((canvas) => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'infografico_rf.png';
            link.click();
            Notificacoes.sucesso('Imagem exportada com sucesso!');
            Utils.log('Imagem exportada', 'success');
        }).catch((erro) => {
            Utils.log(`Erro ao exportar imagem: ${erro}`, 'error');
            Notificacoes.erro('Erro ao exportar imagem');
        });
    }

    /**
     * Copia texto para clipboard
     * @param {string} texto
     */
    copiarParaClipboard(texto) {
        navigator.clipboard.writeText(texto).then(() => {
            Notificacoes.sucesso('Copiado para clipboard!');
            Utils.log('Texto copiado', 'success');
        }).catch(() => {
            // Fallback para navegadores mais antigos
            const textarea = document.createElement('textarea');
            textarea.value = texto;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            Notificacoes.sucesso('Copiado para clipboard!');
        });
    }

    /**
     * Busca conteúdo no infográfico
     * @param {string} termo
     */
    buscar(termo) {
        if (!termo || termo.length < 2) {
            Notificacoes.aviso('Digite pelo menos 2 caracteres');
            return;
        }

        const cards = document.querySelectorAll('.infografico-card');
        let encontrados = 0;

        cards.forEach((card) => {
            const conteudo = card.textContent.toLowerCase();
            if (conteudo.includes(termo.toLowerCase())) {
                card.style.display = 'block';
                card.classList.add('highlight');
                encontrados++;
            } else {
                card.style.display = 'none';
                card.classList.remove('highlight');
            }
        });

        if (encontrados === 0) {
            Notificacoes.aviso(`Nenhum resultado para "${termo}"`);
        } else {
            Notificacoes.info(`${encontrados} resultado(s) encontrado(s)`);
        }

        Utils.log(`Busca por "${termo}": ${encontrados} resultados`, 'info');
    }

    /**
     * Reset da busca
     */
    resetarBusca() {
        document.querySelectorAll('.infografico-card').forEach((card) => {
            card.style.display = 'block';
            card.classList.remove('highlight');
        });
        Utils.log('Busca resetada', 'info');
    }

    /**
     * Tema escuro (dark mode)
     */
    ativarTemaEscuro() {
        document.body.style.background = '#1e1e1e';
        document.body.style.color = '#fff';
        
        document.querySelectorAll('.infografico-card').forEach((card) => {
            card.style.background = '#2d2d2d';
            card.style.color = '#fff';
        });

        Storage.salvar('temaEscuro', true);
        Notificacoes.sucesso('Tema escuro ativado');
        Utils.log('Tema escuro ativado', 'info');
    }

    /**
     * Tema claro (light mode)
     */
    ativarTemaClaro() {
        document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        document.body.style.color = '#333';
        
        document.querySelectorAll('.infografico-card').forEach((card) => {
            card.style.background = '#fff';
            card.style.color = '#333';
        });

        Storage.salvar('temaEscuro', false);
        Notificacoes.sucesso('Tema claro ativado');
        Utils.log('Tema claro ativado', 'info');
    }

    /**
     * Restaura tema salvo
     */
    restaurarTema() {
        const temaEscuro = Storage.recuperar('temaEscuro');
        if (temaEscuro) {
            this.ativarTemaEscuro();
        }
    }
}

// Inicializa infográfico quando a página carrega
window.addEventListener('DOMContentLoaded', () => {
    window.infografico = new InfograficoRF();
    window.infografico.restaurarTema();
});
