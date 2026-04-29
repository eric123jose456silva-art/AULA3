/* ==========================================
   GERENCIADOR DE APRESENTAÇÃO
   Encontro 4: Requisitos Funcionais
   ========================================== */

class ApresentacaoRF {
    constructor() {
        this.slideAtual = 1;
        this.totalSlides = 0;
        this.inicializar();
    }

    /**
     * Inicializa a apresentação
     */
    inicializar() {
        this.totalSlides = document.querySelectorAll('.slide').length;
        this.atualizarInterface();
        this.configurarEventos();
        this.restaurarSlide();
        Utils.log(`Apresentação inicializada com ${this.totalSlides} slides`, 'success');
    }

    /**
     * Configura event listeners
     */
    configurarEventos() {
        // Botões de navegação
        const btnAnterior = document.getElementById('prevBtn');
        const btnProximo = document.getElementById('nextBtn');

        if (btnAnterior) {
            btnAnterior.addEventListener('click', () => this.mudarSlide(-1));
        }
        if (btnProximo) {
            btnProximo.addEventListener('click', () => this.mudarSlide(1));
        }

        // Teclado
        document.addEventListener('keydown', (evento) => {
            if (evento.key === 'ArrowLeft') this.mudarSlide(-1);
            if (evento.key === 'ArrowRight') this.mudarSlide(1);
        });

        // Suporte a swipe em mobile
        let touchStart = 0;
        document.addEventListener('touchstart', (e) => {
            touchStart = e.changedTouches[0].screenX;
        });

        document.addEventListener('touchend', (e) => {
            const touchEnd = e.changedTouches[0].screenX;
            if (touchStart - touchEnd > 50) this.mudarSlide(1);
            if (touchEnd - touchStart > 50) this.mudarSlide(-1);
        });

        // Botão de download PDF
        const btnPDF = document.getElementById('downloadPDFBtn');
        if (btnPDF) {
            btnPDF.addEventListener('click', () => this.exportarPDF());
        }

        // Botão de PPTX
        const btnPPTX = document.getElementById('downloadPPTXBtn');
        if (btnPPTX) {
            btnPPTX.addEventListener('click', () => this.mostrarAviso());
        }
    }

    /**
     * Muda para um slide específico
     * @param {number} direcao
     */
    mudarSlide(direcao) {
        this.slideAtual += direcao;

        if (this.slideAtual > this.totalSlides) {
            this.slideAtual = this.totalSlides;
        }
        if (this.slideAtual < 1) {
            this.slideAtual = 1;
        }

        this.mostrarSlide(this.slideAtual);
        this.salvarSlide();
    }

    /**
     * Mostra um slide específico
     * @param {number} numero
     */
    mostrarSlide(numero) {
        const slides = document.querySelectorAll('.slide');
        slides.forEach(slide => slide.classList.remove('active'));

        if (slides[numero - 1]) {
            slides[numero - 1].classList.add('active');
        }

        this.atualizarInterface();
        Utils.log(`Slide ${numero} exibido`, 'info');
    }

    /**
     * Atualiza interface (botões e contador)
     */
    atualizarInterface() {
        const btnAnterior = document.getElementById('prevBtn');
        const btnProximo = document.getElementById('nextBtn');
        const slideCounter = document.getElementById('currentSlide');

        if (btnAnterior) {
            btnAnterior.disabled = this.slideAtual === 1;
        }
        if (btnProximo) {
            btnProximo.disabled = this.slideAtual === this.totalSlides;
        }
        if (slideCounter) {
            slideCounter.textContent = this.slideAtual;
        }
    }

    /**
     * Exporta apresentação para PDF
     */
    exportarPDF() {
        const nomeArquivo = 'Apresentacao_RF_Encontro4';
        
        // Verifica se html2pdf está carregado
        if (typeof html2pdf === 'undefined') {
            Notificacoes.erro('Biblioteca PDF não carregada. Tente novamente.');
            return;
        }

        Notificacoes.info('Gerando PDF... Aguarde alguns segundos.');

        try {
            const slides = document.querySelectorAll('.slide');
            let html = '<div style="page-break-after: always;">';

            slides.forEach((slide, index) => {
                html += `<div>${slide.innerHTML}</div>`;
                if (index < slides.length - 1) {
                    html += '<div style="page-break-after: always;"></div>';
                }
            });

            html += '</div>';

            const opt = {
                margin: [10, 10, 10, 10],
                filename: `${nomeArquivo}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, logging: false },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
            };

            html2pdf().set(opt).from(html).save();
            Notificacoes.sucesso('PDF gerado com sucesso!');
            Utils.log('PDF exportado com sucesso', 'success');
        } catch (erro) {
            Utils.log(`Erro ao exportar PDF: ${erro}`, 'error');
            Notificacoes.erro('Erro ao gerar PDF. Tente Print → Salvar como PDF.');
        }
    }

    /**
     * Mostra aviso para PPTX
     */
    mostrarAviso() {
        alert('Funcionalidade PPTX disponível em breve.\n\nAlternativa: Use Print (Ctrl+P) → Salvar como PDF e converta usando Smallpdf.com');
        Utils.log('Usuário consultou sobre PPTX', 'info');
    }

    /**
     * Salva slide atual no localStorage
     */
    salvarSlide() {
        Storage.salvar('slideAtual', this.slideAtual);
    }

    /**
     * Restaura slide anterior do localStorage
     */
    restaurarSlide() {
        const slideAnterior = Storage.recuperar('slideAtual');
        if (slideAnterior && slideAnterior > 0 && slideAnterior <= this.totalSlides) {
            this.slideAtual = slideAnterior;
            this.mostrarSlide(this.slideAtual);
        }
    }

    /**
     * Vai para um slide específico
     * @param {number} numero
     */
    irParaSlide(numero) {
        if (numero > 0 && numero <= this.totalSlides) {
            this.slideAtual = numero;
            this.mostrarSlide(numero);
        }
    }

    /**
     * Inicia apresentação em tela cheia (se disponível)
     */
    telaCheia() {
        const container = document.querySelector('.slide-container');
        if (!container) return;

        if (container.requestFullscreen) {
            container.requestFullscreen();
            Utils.log('Apresentação em tela cheia', 'info');
        } else if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen();
        }
    }
}

// Inicializa apresentação quando a página carrega
window.addEventListener('DOMContentLoaded', () => {
    window.apresentacao = new ApresentacaoRF();
});
