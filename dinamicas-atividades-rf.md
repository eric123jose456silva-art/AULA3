# 🎮 DINÂMICAS E ATIVIDADES INTERATIVAS - Encontro 4 (RF)

## Introdução

Conjunto de 10 dinâmicas testadas para os 6 módulos do Encontro 4. Cada atividade dura 10-30 minutos e engaja os alunos ativamente.

**Objetivo:** Transformar aula expositiva em experiência imersiva.

---

## MÓDULO 1: A Transição Crítica (30 min total)

### Dinâmica 1.1: "Juiz de Requisitos" (15 min)

**Objetivo:** Alunos identificam se uma frase é RN ou RF

**Material:**
- Cartões com 10 frases impressas (ou projetadas)

**Execução:**
1. Divida turma em 2 times: "Time RN" vs "Time RF"
2. Leia cada frase em voz alta
3. Equipe levanta a mão se acerta a categoria
4. Ponto para acerto, desconto para erro

**Frases para Testar:**
```
1. "Maximizar satisfação do cliente" → RN (estratégia)
2. "O sistema deve processar pagamento em < 3s" → RF (ação)
3. "Aumentar receita em 25%" → RN (meta de negócio)
4. "Validar CPF com algoritmo oficial" → RF (função)
5. "Reduzir fraude bancária" → RN (resultado esperado)
6. "Notificar cliente via email em caso de acesso suspeito" → RF (ação)
7. "Garantir conformidade regulatória BACEN" → RN (objetivo)
8. "Gerar relatório de vendas em PDF" → RF (entrega)
9. "Oferecer experiência mobile superior" → RN (promessa)
10. "Sincronizar dados offline-first" → RF (requisito)
```

**Resultado Esperado:** Alunos consolidam diferença RN/RF com diversão.

**Variação:** Mostre frase vaga e peça para TIME RF transformar em versão profissional.

---

### Dinâmica 1.2: "Pescaria de Requisitos" (15 min)

**Objetivo:** Alunos extraem requisitos de descrições de negócio

**Material:**
- Texto de 1 página descrevendo um negócio
- Folha de anotações

**Execução:**
1. Distribua texto: "Uma startup de delivery de comida quer um app"
2. Alunos têm 10 min para extrair: RNs (negócio) e RFs iniciais (funções)
3. Voluntários compartilham descobertas
4. Professor consolida lista completa

**Exemplo de Texto:**
```
"TechFood é uma startup que quer revolucionar delivery de comida
em São Paulo. Precisam de um aplicativo onde clientes pedem comidas
de restaurantes parceiros, rastreiam em tempo real e pagam com
segurança. O grande diferencial é garantir entrega em 30 min ou
grátis. Também precisam de um painel para restaurantes gerenciarem
pedidos na cozinha de forma eficiente. A startup quer estar pronta
para vender com 15 restaurantes no mês 1 e 100 no mês 6."
```

**RNs Esperados:**
- Permitir pedidos online rápidos e seguros
- Garantir entrega rápida (30 min)
- Diferenciar com experiência superior
- Escalar rapidamente

**RFs Esperados:**
- Cliente seleciona restaurante
- Cliente monta pedido de produtos
- Cliente paga com cartão/PIX
- Sistema rastreia entrega em mapa
- Restaurante recebe pedido na cozinha
- etc.

**Variação Dificuldade:**
- Fácil: Texto simples, projeto comum (e-commerce)
- Médio: Texto com negócio inovador (app de saúde)
- Difícil: Texto contraditório e ambíguo (teste de análise)

---

## MÓDULO 2: Anatomia do Requisito (50 min total)

### Dinâmica 2.1: "Montador de Requisitos" (20 min)

**Objetivo:** Alunos montem RFs usando blocos [Ator]+[Dever]+[Ação]+[Objeto]+[Condição]

**Material:**
- Cartões com 5 blocos soltos de cada tipo
- Painel/tábua branca

**Execução:**
1. Divida turma em 3-4 grupos
2. Cada grupo recebe um envelope com cartões embaralhados
3. Desafio: Montar 5 RFs diferentes (uma por rodada)
4. Professor lê em voz alta, turma vota se está correto
5. Grupo com mais corretas vence

**Blocos para Montar:**
```
ATORES: [O cliente] [O gerente] [O sistema] [O cozinheiro]
DEVER: [deve] [pode] [não deve]
AÇÃO: [validar] [calcular] [registrar] [notificar] [sincronizar]
OBJETO: [CPF] [preço total] [estoque] [pedido] [transação]
CONDIÇÃO: [em < 1s] [com 99.9% precisão] [em tempo real] [se saldo ≥ 0]
```

**Exemplos de RFs Válidos:**
```
✅ O cliente + deve + validar + CPF + em < 1s
✅ O gerente + pode + registrar + desconto + manualmente
✅ O sistema + não deve + processar + transação + se saldo < 0
```

**Resultado:** Alunos internalizam estrutura VRNCR.

---

### Dinâmica 2.2: "Tribunal de Requisitos" (20 min)

**Objetivo:** Turma avalia se RFs estão bem escritos

**Material:**
- 8 RFs impressos (alguns bons, alguns ruins)

**Execução:**
1. Professor é "juiz", alunos são "jurados"
2. Leia RF em voz alta
3. Jurados votam: Aprovado (🟢) ou Rejeitado (🔴)
4. Maioria decide. Se rejeitado, pede para grupo reescrever
5. Discuta motivos de rejeição

**RFs para Julgamento:**
```
1. "O sistema deve ser rápido" → 🔴 (vago)
2. "O cliente deve validar CPF com precisão" → 🔴 (sem métrica)
3. "O sistema deve processar transação em < 500ms" → 🟢 (específico)
4. "Melhorar experiência do usuário" → 🔴 (muito genérico)
5. "O gerente deve receber relatório com vendas do mês" → 🟡 (falta frequência)
6. "O cliente deve buscar produto e receber 5-20 resultados em ≤ 1s" → 🟢 (perfeito)
7. "Integração com banco de dados" → 🔴 (muito técnico, sem ator)
8. "O cozinheiro deve marcar prato como pronto na tela" → 🟡 (falta tempo/feedback)
```

**Resultado:** Critério crítico de qualidade é internalizado.

---

### Dinâmica 2.3: "Reescrita em Tempo Real" (10 min)

**Objetivo:** Praticar transformação de RF ruim em bom

**Material:**
- Projetor, alunos chamados um por um

**Execução:**
1. Professor projeta RF ruim
2. Chama aluno voluntário à frente
3. Aluno tem 60s para reescrever (pode usar ajuda da turma)
4. Turma vota se reescrita é aceitável
5. Próximo aluno, próximo RF

**RFs para Reescrever:**
```
1. "Criar página de login"
   → Reescrita: "O usuário deve fazer login com email/senha validado contra BD em ≤ 1s com tentativas limitadas a 5/15min"

2. "Relatório de vendas"
   → Reescrita: "O gerente deve exportar relatório de vendas em Excel com colunas: data, produto, quantidade, valor, margem, filtro por período em até 10s"

3. "Sincronização de dados"
   → Reescrita: "O sistema deve sincronizar dados entre web e app mobile com latência ≤ 5s usando replicação eventual consistente"
```

---

## MÓDULO 3: Categorização de RFs (40 min total)

### Dinâmica 3.1: "Sorteio de Categorias" (25 min)

**Objetivo:** Alunos classificam RFs em D/P/I/S

**Material:**
- 20 RFs impressos (5 de cada categoria)
- Envelopes/pastas coloridas (D=Azul, P=Vermelho, I=Verde, S=Amarelo)

**Execução:**
1. Cada aluno sorteia 1 RF
2. Tem 2 minutos para classificar em D/P/I/S e justificar
3. Coloca no envelope correto
4. Professor revisa categorias ao fim
5. Acerto = 1 ponto. Equipes se rivalizam

**RFs para Classificar (Exemplo):**
```
D (Dados):
- RF.001: Armazenar produtos com SKU, preço, estoque
- RF.002: Registrar histórico de transações com timestamp

P (Processamento):
- RF.003: Calcular desconto aplicando cupom válido
- RF.004: Detectar fraude com IA em tempo real

I (Interface):
- RF.005: Atualizar carrinho em tempo real
- RF.006: Notificar cliente sobre status pedido

S (Saída):
- RF.007: Gerar relatório de vendas em PDF
- RF.008: Enviar fatura por email mensal
```

**Resultado:** Categorias são consolidadas com fluidez.

---

### Dinâmica 3.2: "Puzzle de Categorias" (15 min)

**Objetivo:** Alunos conectam RFs em D/P/I/S para formar um fluxo completo

**Material:**
- Tabuleiro com 4 seções (D/P/I/S)
- Cartões de RFs para montar sequência

**Execução:**
1. Grupos recebem cartões embaralhados
2. Desafio: Montar sequência lógica de um fluxo (ex: pedido)
3. Exemplo correto:
   ```
   D: Armazenar dados de cliente
   ↓
   I: Cliente preenche formulário
   ↓
   P: Sistema valida e calcula
   ↓
   S: Sistema gera pedido em PDF
   ```
4. Primeiro grupo correto vence

**Resultado:** Alunos veem integração entre categorias.

---

## MÓDULO 4: MoSCoW na Prática (60 min total)

### Dinâmica 4.1: "Jogo do Orçamento" (35 min)

**Objetivo:** Alunos vivenciam priorização com pressão de recursos

**Cenário:**
```
Projeto: App de Delivery
Equipe: 5 devs, 2 meses, R$200k de orçamento
Requisitos: 40 RFs propostos

CRISE: Cliente quer 75% dos RFs em 1 mês com R$100k

PERGUNTA: O que fazer?
```

**Material:**
- 40 cartões com RFs diferentes
- Tabela com estimativas (1 dia, 3 dias, 1 semana por RF)
- Quadro branco para planejamento

**Execução:**
1. Divide turma em "Equipes de Projeto"
2. Cada equipe recebe todos 40 RFs com estimativa
3. Desafio: Decidir quais fazer em 1 mês
4. Deve categor em M/S/C/W e justificar cortes
5. Apresentam plano (5 min/equipe)
6. Turma vota qual plano é mais realista

**RFs para Gerenciar (Exemplo):**
```
RF.001: Login com email/senha (1 dia) → MUST
RF.002: Autenticação 2FA (3 dias) → SHOULD
RF.003: Login social (2 dias) → COULD
RF.004: Restaurante busca pedidos (2 dias) → MUST
RF.005: Cozinha painel interativo (1 semana) → SHOULD
RF.006: Chat cliente-gerenciador (1 semana) → COULD
RF.007: Pagamento PIX (3 dias) → MUST
RF.008: Paypal integração (2 dias) → COULD
...total 40 RFs
```

**Resultado Esperado:**
- Equipes cortam COULD
- Negociam SHOULD
- Mantêm MUST
- Aprendem realismo de priorização

**Debrief (10 min):**
- Qual equipe foi mais realista?
- Por que alguns MUST foram cortados (erro)?
- Como converter WON'T para próxima fase?

---

### Dinâmica 4.2: "Debate: MUST vs SHOULD" (15 min)

**Objetivo:** Alunos argumentam por que RF é Must ou Should

**Material:**
- 5 RFs ambíguos

**Execução:**
1. Divide turma em 2 lados: "Time MUST" vs "Time SHOULD"
2. Professor apresenta RF ambíguo
3. Cada time tem 1 min para argumentar sua posição
4. Turma vota qual convenceu mais
5. Professor revela resposta correta

**RFs Ambíguos:**
```
1. "Notificação push de pedido pronto"
   Time MUST: Sem aviso, cliente não pega no tempo → entrega fica cara
   Time SHOULD: Pode usar SMS ou email, redundância
   RESPOSTA: MUST (experiência core, diferencial)

2. "App dark mode"
   Team MUST: Usuários querem para usar à noite
   Time SHOULD: Acessibilidade nice-to-have
   RESPOSTA: SHOULD (bom ter, mas não é viabilidade)

3. "Autofill de endereço por CEP"
   Time MUST: Sem isso, checkout complexo, abandono alto
   Team SHOULD: Usuário pode digitar manualmente
   RESPOSTA: MUST (reduz atrito → ROI comprovado)
```

**Resultado:** Alunos internalizam critérios de decisão.

---

### Dinâmica 4.3: "Simulação de Crise" (10 min)

**Objetivo:** Praticar cortes em cenário de crise real

**Execução Rápida:**
1. Cenário: "Prazo encurtou 50%. O que cortamos?"
2. Turma em roda
3. Cada aluno sugere 1 requisito para cortar (COULD, depois SHOULD)
4. Maioria decide
5. Aprende dinâmica real de negociação

---

## MÓDULO 5: Rastreabilidade (50 min total)

### Dinâmica 5.1: "Caça ao Órfão" (20 min)

**Objetivo:** Alunos identificam RFs sem RN pai (órfãos)

**Material:**
- Tabela com 30 RFs (alguns com RN, alguns sem)
- Caneta colorida

**Execução:**
1. Distribua tabela para grupos
2. Desafio: Encontrar RFs órfãos em < 10 min
3. Marcar em vermelho RFs sem RN pai
4. Grupo que encontra mais sem erro vence

**Tabela Exemplo:**
```
RF.001 ← RN.001 ✅ (linkado)
RF.002 ← RN.001 ✅
RF.003 ← ??? ❌ (ÓRFÃO!)
RF.004 ← RN.002 ✅
RF.005 ← ??? ❌ (ÓRFÃO!)
... (mais 25)
```

**Pergunta Debrief:**
- Por que RF órfão é problema?
- Quem pediu RF.003? → Resposta esperada: "Ninguém! É feature creep"

**Resultado:** Conceito de rastreabilidade é claro.

---

### Dinâmica 5.2: "Corrente de Negócio" (20 min)

**Objetivo:** Alunos montam corrente RN → RF → Código

**Material:**
- Cartões em 3 cores (RN azul, RF verde, Código laranja)
- Barbante/fita adesiva

**Execução:**
1. Grupos recebem cartões misturados
2. Desafio: Montar correntes corretas (1 RN → vários RFs → Códigos)
3. Pode usar barbante para "ligar" fisicamente
4. Primeiro grupo com 3 correntes corretas vence

**Exemplo Corrente Correta:**
```
RN.001: "Aumentar conversão"
  ↓
RF.001: Cliente preenche CPF com validação
  ↓
Código: validarCPF() com algoritmo oficial
  
  ↓
RF.002: Autofill endereço por CEP
  ↓
Código: axios.get("/cep/{cep}") integrando API
```

**Resultado:** Alunos veem conexão estratégica.

---

### Dinâmica 5.3: "Matriz de Rastreabilidade" (10 min)

**Objetivo:** Praticar leitura de matriz para cobertura

**Material:**
- Matriz 5x5 impressa (5 RNs, 5+ RFs)

**Execução:**
1. Mostre matriz na tela
2. Pergunte:
   - "RN.01 tem quantos RFs?" → Aluno responde: 3
   - "Qual RF não tem RN?" → Aluno encontra órfão
   - "Qual RN está 100% coberta?" → Aluno verifica
3. Faça 10 perguntas, equipes competem

**Resultado:** Alunos usam matriz como ferramenta.

---

## MÓDULO 6: Laboratório Prático (120 min total)

### Dinâmica 6.1: "Workshop Facilitado de RFs" (90 min)

**Objetivo:** Grupos criam planilha de RF para projeto real

**Fases:**

#### Fase 1: Contexto (10 min)
- Professor apresenta cenário real (ex: app de restaurante)
- Grupos discutem: Qual o negócio? Quem usa? Por quê?

#### Fase 2: Identificar RNs (15 min)
- Grupos listam 3-5 RNs estratégicos
- Exemplo:
  ```
  RN.001: Aumentar receita com vendas online
  RN.002: Reduzir desperdício com gestão estoque
  RN.003: Acelerar atendimento com integração
  ```

#### Fase 3: Criar RFs (40 min)
- Por cada RN, grupo cria 3-5 RFs
- Usa anatomia [Ator]+[Dever]+[Ação]+[Objeto]+[Condição]
- Professor circula oferecendo feedback em tempo real
- Exemplo:
  ```
  RN.001 gera RFs:
  RF.001: Cliente registra conta com email validado
  RF.002: Cliente visualiza cardápio com fotos/preços
  RF.003: Cliente monta pedido com cálculo automático
  RF.004: Cliente paga com cartão validado em < 3s
  RF.005: Cliente recebe confirmação por WhatsApp
  ```

#### Fase 4: Categorizar (15 min)
- Classificar cada RF em D/P/I/S
- Exemplo:
  ```
  RF.001 → I (Interface - formulário)
  RF.002 → S (Saída - apresentação dados)
  RF.003 → P (Processamento - lógica)
  RF.004 → P (Processamento - transação)
  RF.005 → I (Interface - notificação)
  ```

#### Fase 5: Priorizar (15 min)
- Atribuir MoSCoW com justificativa
- Debate: "Por que RF.005 é Should e não Must?"
- Maioria decide

#### Fase 6: Entregar (5 min)
- Grupos entregam planilha no formato padrão
- Impresso ou Google Sheets

**Resultado:** Alunos têm artefato real de entrega.

---

### Dinâmica 6.2: "Revisão de Pares" (20 min)

**Objetivo:** Grupos avaliam trabalho uns dos outros

**Execução:**
1. Cada grupo recebe planilha de outro grupo
2. Usa checklist de 8 critérios (slide 20)
3. Marca: ✅ (passou), ⚠️ (revisar), ❌ (falhou)
4. Grupos fazem feedback construtivo
5. Ajustes finais (se houver tempo)

**Resultado:** Aprendizagem peer-to-peer.

---

### Dinâmica 6.3: "Pitch de Projeto" (10 min)

**Objetivo:** Grupos apresentam trabalho em 2 min

**Execução:**
1. Cada grupo tem exatamente 2 minutos
2. Deve mencionar:
   - O negócio (1 frase)
   - 3 RNs principais
   - Quantidade de RFs criados
   - Maior desafio encontrado
3. Turma aplaude, professor dá feedback

**Resultado:** Consolidação e celebração.

---

## 🎁 BÔNUS: Atividades Complementares

### Atividade Extra 1: "Telegram dos Requisitos" (5 min quebra-gelo)

**Objetivo:** Aquecimento divertido no início da aula

**Execução:**
1. Professor escolhe frase ambígua: "O sistema deve processar dados"
2. Passa para aluno 1, que reescreve
3. Aluno 1 passa para aluno 2, que reescreve
4. Continua por 10 rodadas
5. Resultado final é comparado com original
6. Gargalhadas garantidas, conceito fixado

---

### Atividade Extra 2: "Quiz de Rastreabilidade" (10 min)

**Objetivo:** Gamify conhecimento com quiz em real-time

**Ferramenta:** Kahoot.com ou Quizizz.com

**Perguntas Exemplo:**
```
1. Quantas RNs este RF deveria ter, no máximo?
   a) 1  ← CORRETO (Um pai)
   b) 3
   c) Múltiplas

2. O que fazer com RF órfão?
   a) Manter, é criatividade
   b) Questionar se realmente é necessário ← CORRETO
   c) Descartar automaticamente

3. RN sobre "experiência rápida" gera qual RF?
   a) "Sistema deve ser rápido"
   b) "Sistema processa em < 500ms com 99.9% uptime" ← CORRETO
   c) Ambas
```

---

### Atividade Extra 3: "Viagem no Tempo (Antes/Depois)" (15 min)

**Objetivo:** Alunos veem impacto de requisito mal escrito

**Cenário:**
```
ANTES: RF mal escrito: "Melhorar relatório"
→ Dev faz relatório sem gráficos (acha que é o bastante)
→ Cliente quer gráficos, refaz tudo, custo +R$5k
→ Atraso 2 semanas

DEPOIS: RF profissional: "Gerente exporta relatório em Excel com tabelas, 3 gráficos de evolução, filtro por período, em até 10s"
→ Dev sabe exatamente o que fazer
→ 1ª versão aceita sem ajustes
→ Entrega no prazo, dentro orçamento
```

**Execução:**
1. Dramatize os dois cenários
2. Aponte diferença de escrita de RF
3. Pergunte: "Qual RF foi culpado? O requisito ruim, não o dev"

---

## 📋 CHECKLIST: Sua Aula de Encontro 4

- ☑ Preparou apresentação HTML? (testar abrir em navegador)
- ☑ Imprimiu exemplos de RFs? (distribuir em sala)
- ☑ Tem cartões/envelopes para dinâmicas? (impressos ou artesanais)
- ☑ Projetor testado? (controle remoto com bateria)
- ☑ Tempo estimado por dinâmica? (20+50+40+60+50+120 = 340 min ≈ 5.5h com pausas)
- ☑ Grupos definidos? (3-4 pessoas idealmente)
- ☑ Critério de avaliação claro? (planilha com 8 critérios)
- ☑ Prêmio/incentivo para grupos? (reconhecimento, ponto extra)

---

## 🎯 Indicadores de Sucesso

**Ao final do Encontro 4:**
- ✅ 80%+ dos alunos conseguem escrever RF profissional
- ✅ 70%+ conseguem categorizar em D/P/I/S
- ✅ 85%+ conseguem priorizar com MoSCoW com justificativa
- ✅ 75%+ conseguem ligar RF a RN pai
- ✅ Engajamento médio: 4.0/5.0 em avaliação

**Se não atingiu:**
- Alunos tiveram dúvida? → Leve para próximo encontro
- Dinâmicas caras em tempo? → Use aula seguinte para lab extra
- Grupo fraco se desempenho? → Ofereça reforço individual

---

**Documento Versão:** 1.5  
**Atualizado:** Abril 2026  
**Para:** Facilitadores do ENCONTRO 4
