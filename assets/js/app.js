/* ==========================================
   FUNCIONALIDADES COMUNS
   Encontro 4: Requisitos Funcionais
   ========================================== */

/**
 * Utilitários gerais
 */
const Utils = {
    /**
     * Formata data para formato brasileiro
     * @param {Date} date
     * @returns {string}
     */
    formatarData: (date) => {
        return new Date(date).toLocaleDateString('pt-BR');
    },

    /**
     * Cria elemento HTML com classe
     * @param {string} tag
     * @param {string} className
     * @param {string} content
     * @returns {HTMLElement}
     */
    criarElemento: (tag, className = '', content = '') => {
        const elemento = document.createElement(tag);
        if (className) elemento.className = className;
        if (content) elemento.innerHTML = content;
        return elemento;
    },

    /**
     * Adiciona classe se condição verdadeira
     * @param {HTMLElement} elemento
     * @param {string} classe
     * @param {boolean} condicao
     */
    toggleClass: (elemento, classe, condicao) => {
        if (condicao) {
            elemento.classList.add(classe);
        } else {
            elemento.classList.remove(classe);
        }
    },

    /**
     * Log com timestamp
     * @param {string} mensagem
     * @param {string} tipo
     */
    log: (mensagem, tipo = 'info') => {
        const timestamp = new Date().toLocaleTimeString('pt-BR');
        console.log(`[${timestamp}] ${tipo.toUpperCase()}: ${mensagem}`);
    }
};

/**
 * Gerenciador de Armazenamento Local
 */
const Storage = {
    /**
     * Salva dados no localStorage
     * @param {string} chave
     * @param {any} dados
     */
    salvar: (chave, dados) => {
        try {
            localStorage.setItem(chave, JSON.stringify(dados));
            Utils.log(`Dados salvos: ${chave}`, 'success');
        } catch (erro) {
            Utils.log(`Erro ao salvar: ${erro}`, 'error');
        }
    },

    /**
     * Recupera dados do localStorage
     * @param {string} chave
     * @returns {any}
     */
    recuperar: (chave) => {
        try {
            const dados = localStorage.getItem(chave);
            return dados ? JSON.parse(dados) : null;
        } catch (erro) {
            Utils.log(`Erro ao recuperar: ${erro}`, 'error');
            return null;
        }
    },

    /**
     * Remove dados do localStorage
     * @param {string} chave
     */
    remover: (chave) => {
        localStorage.removeItem(chave);
        Utils.log(`Dados removidos: ${chave}`, 'success');
    },

    /**
     * Limpa todo o localStorage
     */
    limpar: () => {
        localStorage.clear();
        Utils.log('LocalStorage limpo', 'success');
    }
};

/**
 * Gerenciador de Download
 */
const Download = {
    /**
     * Download de conteúdo HTML como PDF
     * @param {string} elementoId
     * @param {string} nomeArquivo
     */
    paraHTML2PDF: async (elementoId, nomeArquivo) => {
        const elemento = document.getElementById(elementoId);
        if (!elemento) {
            Utils.log(`Elemento ${elementoId} não encontrado`, 'error');
            return;
        }

        try {
            const opt = {
                margin: 10,
                filename: `${nomeArquivo}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            if (typeof html2pdf !== 'undefined') {
                html2pdf().set(opt).from(elemento).save();
                Utils.log(`PDF gerado: ${nomeArquivo}`, 'success');
            } else {
                Utils.log('Biblioteca html2pdf não carregada', 'error');
            }
        } catch (erro) {
            Utils.log(`Erro ao gerar PDF: ${erro}`, 'error');
        }
    },

    /**
     * Download de arquivo de texto
     * @param {string} conteudo
     * @param {string} nomeArquivo
     * @param {string} tipo
     */
    paraArquivo: (conteudo, nomeArquivo, tipo = 'text/plain') => {
        try {
            const blob = new Blob([conteudo], { type: tipo });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = nomeArquivo;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            Utils.log(`Arquivo baixado: ${nomeArquivo}`, 'success');
        } catch (erro) {
            Utils.log(`Erro ao baixar arquivo: ${erro}`, 'error');
        }
    }
};

/**
 * Gerenciador de Notificações
 */
const Notificacoes = {
    /**
     * Exibe notificação
     * @param {string} mensagem
     * @param {string} tipo
     * @param {number} duracao
     */
    exibir: (mensagem, tipo = 'info', duracao = 3000) => {
        const container = document.getElementById('notification-container') || 
                         document.body;
        
        const notificacao = Utils.criarElemento(
            'div',
            `alert alert-${tipo}`,
            mensagem
        );
        
        notificacao.style.position = 'fixed';
        notificacao.style.top = '20px';
        notificacao.style.right = '20px';
        notificacao.style.zIndex = '9999';
        notificacao.style.minWidth = '300px';
        
        container.appendChild(notificacao);
        
        setTimeout(() => {
            notificacao.remove();
        }, duracao);
    },

    sucesso: (mensagem, duracao = 3000) => {
        Notificacoes.exibir(mensagem, 'success', duracao);
    },

    erro: (mensagem, duracao = 3000) => {
        Notificacoes.exibir(mensagem, 'danger', duracao);
    },

    aviso: (mensagem, duracao = 3000) => {
        Notificacoes.exibir(mensagem, 'warning', duracao);
    },

    info: (mensagem, duracao = 3000) => {
        Notificacoes.exibir(mensagem, 'info', duracao);
    }
};

/**
 * Inicialização do App
 */
window.addEventListener('DOMContentLoaded', () => {
    Utils.log('Aplicação carregada com sucesso', 'success');
});

/**
 * Tratamento de Erros Global
 */
window.addEventListener('error', (evento) => {
    Utils.log(`Erro: ${evento.error}`, 'error');
    Notificacoes.erro(`Erro: ${evento.error.message}`);
});

/**
 * Tratamento de Promises não capturadas
 */
window.addEventListener('unhandledrejection', (evento) => {
    Utils.log(`Promise rejeitada: ${evento.reason}`, 'error');
    Notificacoes.erro(`Erro: ${evento.reason}`);
});
