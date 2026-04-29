# 📋 TEMPLATE DE ENTREGA - Laboratório RF (Encontro 4)

## Instruções de Uso

Este documento é um **TEMPLATE** que deve ser convertido para Excel (.xlsx) ou Google Sheets para uso prático.

**Colunas Obrigatórias:**

| Coluna | Tipo | Exemplo | Validação |
|--------|------|---------|-----------|
| **ID RF** | Texto | RF.01.001 | Único, formato RF.MOD.### |
| **RN Pai** | Texto | RN.01.001 | Deve existir RN correspondente |
| **Título RF** | Texto | Validar CPF do Cliente | Máx 10 palavras |
| **Descrição Técnica** | Texto Longo | O cliente deve validar CPF com algoritmo oficial em ≤ 1s | Estrutura: [Ator]+[Dever]+[Ação]+[Objeto]+[Condição] |
| **Categoria** | List (D/P/I/S) | P | D=Dados, P=Processamento, I=Interface, S=Saída |
| **MoSCoW** | List (M/S/C/W) | M | M=Must, S=Should, C=Could, W=Won't |
| **Critério Teste** | Texto | CPF válido → Passou; CPF inválido → Rejeitou | Resultado binário: Passou ou Falhou |
| **Complexidade** | List | Baixa | Baixa/Média/Alta |
| **RN Pai - Descrição** | Texto | Aumentar segurança nas transações | Referência só, não editar |

---

## EXEMPLO COMPLETO: Sistema de Restaurante Online

### **Requisitos de Negócio (RNs) Base**

| ID | Descrição |
|----|-----------|
| RN.01.001 | Aumentar vendas em 30% com pedidos online |
| RN.01.002 | Reduzir desperdício monitorando estoque em tempo real |
| RN.01.003 | Acelerar atendimento integrando cozinha e caixa |

---

### **Tabela de RFs - SEÇÃO MÓDULO 1: Vendas**

| ID RF | RN Pai | Título RF | Descrição Técnica | Categoria | MoSCoW | Critério Teste | Complexidade |
|-------|--------|-----------|-------------------|-----------|--------|-----------------|--------------|
| RF.01.001 | RN.01.001 | Registrar novo cliente | O sistema deve registrar cliente com email, CPF, nome, endereço validando duplicação em < 1s | D | M | Email único? CPF válido? Insere em BD? | Baixa |
| RF.01.002 | RN.01.001 | Listar cardápio online | O gerente deve publicar itens do cardápio com foto, descrição, preço, categoria, disponibilidade em status real | S | M | Foto carrega? Preço mostra? Status reflete mudanças? | Média |
| RF.01.003 | RN.01.001 | Gerenciar carrinho | O cliente deve adicionar/remover itens, atualizar quantidade com cálculo automático de total e desconto em tempo real | P | M | Total correto? Desconto aplicado? UI atualiza? | Média |
| RF.01.004 | RN.01.001 | Processar pagamento | O sistema deve integrar gateway de pagamento validando cartão, CPF, limite em conformidade PCI-DSS com resposta em < 5s | P | M | Transação autorizada? Falha trata erro? Comprovante gerado? | Alta |
| RF.01.005 | RN.01.001 | Notificar pedido confirmado | O sistema deve enviar confirmação de pedido via WhatsApp com ID, items, valor, tempo estimado em até 30s após confirmação | I | S | Mensagem envia? Contém todas infos? Tempo respeitado? | Média |
| RF.01.006 | RN.01.001 | Gerar cupom | O gerente deve exportar cupom fiscal em PDF com número NFe, itens, impostos conforme modelo SEFAZ | S | S | PDF gerado? Dados corretos? Impressão funciona? | Média |
| RF.01.007 | RN.01.001 | Histórico de pedidos | O cliente deve visualizar histórico de pedidos anteriores com filtro por data, status, valor permitindo reordernar em 1 clique | I | S | Lista mostra? Filtro funciona? Reorder cria novo pedido? | Baixa |

---

### **Tabela de RFs - SEÇÃO MÓDULO 2: Gestão de Estoque**

| ID RF | RN Pai | Título RF | Descrição Técnica | Categoria | MoSCoW | Critério Teste | Complexidade |
|-------|--------|-----------|-------------------|-----------|--------|-----------------|--------------|
| RF.02.001 | RN.01.002 | Consultar disponibilidade | O cliente deve ver status "disponível/indisponível/fim de semana" de cada item em tempo real com atualização a cada venda | D | M | Status correto? Atualiza em tempo real? Sincroniza com estoque? | Média |
| RF.02.002 | RN.01.002 | Atualizar estoque | O gerente deve decrementar estoque automaticamente quando pedido é confirmado, invalidando item se quantidade ≤ 0 | P | M | Estoque decresce? Item bloqueia com 0? Log registra mudanças? | Média |
| RF.02.003 | RN.01.002 | Alertar baixa quantidade | O sistema deve notificar gerente via email quando estoque de item cai abaixo de threshold definido | P | S | Email envia? Threshold customizável? Não reenvia se já alertou? | Baixa |
| RF.02.004 | RN.01.002 | Relatório consumo semanal | O gerente deve receber relatório automático toda segunda com itens mais vendidos, menos vendidos, margem por item | S | S | Relatório gera? Dados corretos? Sent via email? | Média |

---

### **Tabela de RFs - SEÇÃO MÓDULO 3: Integração Cozinha**

| ID RF | RN Pai | Título RF | Descrição Técnica | Categoria | MoSCoW | Critério Teste | Complexidade |
|-------|--------|-----------|-------------------|-----------|--------|-----------------|--------------|
| RF.03.001 | RN.01.003 | Enviar pedido para cozinha | O sistema deve enviar pedido confirmado para painel na cozinha com itens, observações, tempo estimado em ordem FIFO | I | M | Pedido aparece na cozinha? Ordem respeitada? Infos completas? | Média |
| RF.03.002 | RN.01.003 | Marcar item pronto | O cozinheiro deve marcar item como "pronto" no painel, notificando caixa automaticamente para chamar cliente/entregar | I | M | Status muda? Caixa notificado? Cliente chamado? | Baixa |
| RF.03.003 | RN.01.003 | Estimar tempo entrega | O sistema deve calcular tempo de entrega somando preparo de todos itens + tempo de saída em ± 10 minutos | P | S | Fórmula correta? Tempo realistico? UI mostra estimativa? | Média |
| RF.03.004 | RN.01.003 | Cancelar pedido na cozinha | O caixa deve cancelar pedido até o momento que cozinheiro marca "iniciado", desbloqueando itens do estoque | I | M | Cancela antes de "iniciado"? Estoque restaurado? Log registra? | Baixa |

---

## 📊 ANÁLISE DA TABELA ACIMA

### Cobertura por MoSCoW
- **MUST (M):** 9 RFs (64%) - Mínimo viável para MVP
- **SHOULD (S):** 5 RFs (36%) - Agregam valor importante
- **COULD (C):** 0 RFs - Nenhum nice-to-have nesta rodada
- **WON'T (W):** 0 RFs - Nada descartado explicitamente (não aparecer na tabela = WON'T implícito)

**Análise:** Proporção equilibrada. MUST é 60-65% conforme recomendação.

### Cobertura por Categoria
- **Dados (D):** 2 RFs (14%)
- **Processamento (P):** 5 RFs (36%) - Lógica pesada, complexidade alta
- **Interface (I):** 5 RFs (36%) - UX e interação
- **Saída (S):** 2 RFs (14%) - Relatórios e notificações

**Análise:** Bem distribuído. P e I dominam (esperado em app web).

### Rastreabilidade
- **RN.01.001:** Coberta por RF.01.001 → RF.01.007 ✅
- **RN.01.002:** Coberta por RF.02.001 → RF.02.004 ✅
- **RN.01.003:** Coberta por RF.03.001 → RF.03.004 ✅

**Análise:** 100% de cobertura. Sem RFs órfãos. ✅

### Complexidade
- **Baixa:** 5 RFs (36%)
- **Média:** 8 RFs (57%)
- **Alta:** 1 RF (7%)

**Análise:** Distribuição realista. Alta complexidade (pagamento) exigirá mais testes.

---

## ✅ CHECKLIST DE QUALIDADE APLICADO

| Critério | Status | Observação |
|----------|--------|-----------|
| ☑ Cada RF tem ator identificado? | ✅ Sim | Cliente, Gerente, Cozinheiro, Sistema |
| ☑ Nenhuma palavra vaga? | ✅ Sim | Evitei "rápido", "bom", "melhor" |
| ☑ Cada RF é testável? | ✅ Sim | Todos têm critério binário Passou/Falhou |
| ☑ Todo RF tem RN pai? | ✅ Sim | Rastreabilidade 100% |
| ☑ MoSCoW consensuado? | ✅ Sim | MUST é viável para MVP |
| ☑ RFs categorizados D/P/I/S? | ✅ Sim | Todos classificados |
| ☑ Conflitos identificados? | ⚠️ Talvez | Ver análise abaixo |
| ☑ Pelo menos 5 MUST? | ✅ Sim | 9 MUSTs identificados |

---

## ⚠️ POTENCIAIS CONFLITOS IDENTIFICADOS

| Conflito | RFs Envolvidos | Solução |
|----------|---|----------|
| Timing de notificação | RF.01.005 (30s) vs RF.02.003 (email) | Define prioridade: WhatsApp é tempo real, email é batch |
| Cancelamento tardio | RF.03.004 restringe cancelo após "iniciado" mas RF.01.005 já notificou cliente | Adicionar feedback visual: "Pedido em preparo - cancelamento não permitido" |
| Estoque em tempo real | RF.02.001 vs RF.02.002 - risco de race condition | Usar transação BD com lock pessimista |

---

## 🎓 PRÓXIMOS PASSOS

1. **Validação:** Apresente esta tabela ao cliente/PO do projeto
2. **Refinamento:** Solicite feedback em cada RF
3. **Estimativa:** Time de dev estima esforço por RF (T-shirt: P/M/G)
4. **Planning:** Agende sprints baseado em MoSCoW e estimativas
5. **Rastreabilidade:** Mantenha este documento linkado em todo ciclo de vida (Teste, Entrega, Manutenção)

---

## 💾 COMO USAR ESTE TEMPLATE

### Opção 1: Google Sheets
1. Copie a tabela acima
2. Abra Google Sheets → `sheets.google.com`
3. Cola e formata como necessário
4. Share com equipe
5. Use para rastrear em tempo real

### Opção 2: Excel
1. Abra Excel
2. Recrie estrutura de colunas
3. Use Data Validation para D/P/I/S e M/S/C/W
4. Crie Dashboard com gráficos de cobertura
5. Salve em OneDrive para sincronização

### Opção 3: Ferramentas Especializadas
- **Jira:** Crie epics (RNs) e stories/tasks (RFs)
- **Azure DevOps:** Use PBIs (Product Backlog Items)
- **RequisiteLy:** Ferramenta opensource de rastreabilidade

---

**Template Version:** 1.0  
**Criado:** Abril 2026  
**Para:** ENCONTRO 4 - Engenharia de Requisitos
