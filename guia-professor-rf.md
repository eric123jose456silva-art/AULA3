# 📚 ENCONTRO 4: Requisitos Funcionais (RF) - Guia do Professor

## 🎯 Visão Geral da Apresentação

**Duração Total:** 4 horas  
**Slides:** 20 slides estruturados em 6 módulos  
**Formato:** HTML interativo com PDF exportável  

---

## 📋 Estrutura da Apresentação

### **MÓDULO 1: A Transição Crítica (Slides 1-3) - 30 minutos**

**Objetivo:** Consolidar a diferença entre RN (Porquê) e RF (O Quê)

#### Slide 1 - Título
- Introdução impactante
- Contextualizar a importância de RFs para o projeto

#### Slides 2-3 - Exemplos Comparativos
- **Exemplo 1 - Banco:** RN sobre fraude → RF sobre validação em tempo real
- **Exemplo 2 - E-commerce:** RN sobre conversão → RF sobre autofill de CEP
- **Exemplo 3 - Saúde:** RN sobre continuidade de cuidado → RF sobre sincronização

**Dica Didática:** Use estes exemplos para estabelecer que SEM uma RN clara, não existe RF justificado.

---

### **MÓDULO 2: Anatomia do Requisito de Ouro (Slides 4-7) - 50 minutos**

**Objetivo:** Ensinar a estrutura técnica que torna um RF testável

#### Slide 4 - Estrutura Básica
```
[Ator] + [Dever de Sistema] + [Ação] + [Objeto] + [Condição de Sucesso]
```

**Atividade Interativa (5 min):**
Peça aos alunos que identifiquem cada elemento num RF lido em voz alta.

#### Slide 5 - Decomposição
Tabela decompondo cada elemento com exemplos práticos.

#### Slide 6 - Transformação (Antes vs Depois)
**Dinâmica de Reescrita:**
1. Mostre um requisito ruim
2. Peça aos alunos: "O que está faltando?"
3. Construa juntos a versão profissional

#### Slide 7 - Critérios de Ouro
Os 5 critérios VRNCR (Verificável, Rastreável, Não-ambíguo, Completo, Realizável)

**Pergunta Provocativa:** "Se mostro este RF para 5 devs diferentes, eles escrevem o mesmo código?"

---

### **MÓDULO 3: Categorização de RFs (Slides 8-10) - 40 minutos**

**Objetivo:** Treinar a classificação de RFs

#### Slide 8 - Requisitos de Dados (D)
- Foco: estrutura, armazenamento, acesso
- Exemplo: "Armazenar dados de clientes em tabela normalizada"

#### Slide 9 - Requisitos de Processamento (P) e Interface (I)
- Processamento: lógica de negócio
- Interface: interação usuário-sistema
- Exemplo P: "Calcular frete automaticamente"
- Exemplo I: "Carrinho atualizar em tempo real"

#### Slide 10 - Requisitos de Saída (S)
- Foco: relatórios, exportações, comunicações
- Exemplo: "Relatório diário de vendas em PDF"

**Exercício em Grupo (15 min):**
Distribua 10 requisitos misturados. Grupos classificam em D/P/I/S. Discuta divergências.

---

### **MÓDULO 4: MoSCoW na Prática (Slides 11-14) - 60 minutos**

**Objetivo:** Entender priorização além da sigla

#### Slide 11 - Fundamentos
- MUST: viabilidade do projeto
- SHOULD: valor importante
- COULD: nice-to-have
- WON'T: explicitamente descartado

**Dinâmica "Peso das Letras":**
Mostre um projeto real com 30 requisitos. Pergunte:
"Se cortarmos 50% do prazo, o que sacrificamos?"
Guie para a resposta: COULD → SHOULD → WON'T (nunca MUST)

#### Slide 12 - Impacto Financeiro
Tabela mostrando risco, prazo e orçamento por categoria.

**Caso Real:** Um projeto que começou com 80% MUST e fracassou. Por quê?

#### Slide 13 - Árvore de Decisão
Guia passo a passo para categorizações difíceis.

#### Slide 14 - Cenário de Crise
Situação: prazo cortado de 6 para 3 meses. O que fazer?

**Simulação (20 min):**
Divida a turma em 2 grupos: "Equipe Otimista" (defende todos RFs) vs "Equipe Realista" (propõe cortes). Debate!

---

### **MÓDULO 5: Rastreabilidade Obrigatória (Slides 15-17) - 50 minutos**

**Objetivo:** Eliminar requisitos órfãos e conectar negócio → código

#### Slide 15 - Fundamento
A corrente: RN01 → RF01 → Código

**Por que falta rastreabilidade?**
- Requisitos que ninguém pediu (feature creep)
- Dificuldade em justificar mudanças
- Impossível validar se projeto atende ao negócio

#### Slide 16 - Sistema de Numeração
```
RN.01.02 → RF.01.02 (ligação 1:1)
```

Tabela com exemplos incluindo RF órfão (sem RN).

**Atividade:** Dado um lote de RFs, os alunos identificam órfãos.

#### Slide 17 - Matriz de Rastreabilidade
Ferramenta de gestão: mostra cobertura % de cada RN por RFs.

**Insight:** Uma RN sem RFs associados também é problema. Por quê?

---

### **MÓDULO 6: Oficina de Laboratório (Slides 18-20) - 60 minutos PRÁTICA**

**Objetivo:** Aplicar aprendizado em projeto real

#### Slide 18 - Introdução
Estrutura da atividade prática em 2 horas.

#### Slide 19 - Estrutura da Planilha
Colunas obrigatórias:
- ID (RF.MOD.###)
- RN Pai
- Título (< 10 palavras)
- Descrição Técnica (anatomia completa)
- Categoria (D/P/I/S)
- MoSCoW (M/S/C/W)
- Critério de Teste
- Complexidade (Baixa/Média/Alta)

#### Slide 20 - Checklist e Critério de Aprovação
8 critérios de qualidade que devem ser cumpridos.

---

## 🚀 Como Usar a Apresentação

### Abrir em Navegador
```
Duplo clique em: apresentacao-rf.html
```

### Navegação
- **Botões:** Anterior / Próximo
- **Teclado:** Setas esquerda/direita
- **Indicador:** Slide X / 20

### Exportar para PDF
1. Clique botão "📥 Download PDF"
2. Aguarde processamento (~10s)
3. Arquivo salvo: `Apresentacao_RF_Encontro4.pdf`

### Customizar
Editar em qualquer editor de texto. Principais seções:
- **HTML:** Conteúdo dos slides (procure `<div class="slide">`)
- **CSS:** Estilos (procure `<style>`)
- **JavaScript:** Navegação e export (procure `<script>`)

---

## 📝 Guia da Atividade Prática (Laboratório)

### Cenário Recomendado: Sistema de Gestão de Pedidos (Restaurante)

**Contexto:** Um restaurante quer um sistema web/mobile para:
1. Clientes: fazer pedidos online
2. Gerenciador: gerenciar estoque
3. Chef: receber pedidos na cozinha

### Fases da Atividade

#### **Fase 1: Identificar RNs (15 min)**
Grupos discutem: "Por que este sistema precisa existir?"

**Exemplos de RNs:**
- RN.01: Aumentar vendas em 30% permitindo pedidos offline
- RN.02: Reduzir desperdício monitorando estoque
- RN.03: Acelerar atendimento com sistema integrado

#### **Fase 2: Criar RFs de Cada RN (45 min)**
Para cada RN, gerar 3-5 RFs.

**Exemplo para RN.01:**
```
RF.01.01: O cliente deve criar conta com email/CPF validado em < 30s
RF.01.02: O cliente deve visualizar menu com fotos, preços e disponibilidade em tempo real
RF.01.03: O cliente deve adicionar/remover itens do carrinho com preço atualizado dinamicamente
RF.01.04: O cliente deve pagar com múltiplos métodos (débito, crédito, PIX)
RF.01.05: O cliente deve receber confirmação do pedido via WhatsApp
```

#### **Fase 3: Categorizar (15 min)**
Classificar cada RF em D/P/I/S

```
RF.01.01 → I (Interface - login)
RF.01.02 → S (Saída - apresentação de menu)
RF.01.03 → P (Processamento - cálculo do carrinho)
RF.01.04 → P (Processamento - transação)
```

#### **Fase 4: Priorizar MoSCoW (15 min)**
Debate: O que é essencial para MVP (v1)?

```
RF.01.01 → M (sem login, falha)
RF.01.02 → M (sem menu, falha)
RF.01.03 → M (sem carrinho, falha)
RF.01.04 → M (sem pagamento, falha)
RF.01.05 → S (notificação importante mas não inviabiliza)
```

#### **Fase 5: Rastreabilidade (15 min)**
Ligar cada RF a uma RN, criar planilha.

#### **Fase 6: Revisão de Qualidade (15 min)**
Aplicar checklist dos 8 critérios.

---

## ⚠️ Erros Comuns para Evitar

| Erro | Correção |
|------|----------|
| "O sistema deve ser rápido" | "O sistema deve processar requisição em ≤ 500ms" |
| RF sem RN asociada | Questionar: "Quem pediu isso? Por quê?" |
| Muitos MUST | Renegociar escopo ou prazo |
| RF duplicados | Consolidar e usar um ID único |
| Teste ambíguo | Resultado deve ser: passou (✅) ou falhou (❌), nunca talvez |

---

## 💡 Dicas de Facilitação

1. **Legalize a ambiguidade no início**
   - "Não temos respostas perfeitas no primeiro dia"
   - Iteração é normal

2. **Use exemplos reais do mercado**
   - Alunos entendem melhor com Uber, Nubank, Netflix

3. **Faça revisão de pares**
   - Grupo A revisa planilha do Grupo B
   - Aprende vendo erros dos outros

4. **Reteção é importante**
   - Fim do dia: "Qual foi o maior aprendizado?"
   - Forma mental os conceitos

5. **Conecte ao projeto final da disciplina**
   - "Seus RFs aqui virão código no Encontro 8"

---

## 📊 Métricas de Sucesso

Ao fim do Encontro 4, alunos devem:
- ✅ Identificar RNs em descrições vagas
- ✅ Escrever RF usando anatomia completa
- ✅ Categorizar RF em D/P/I/S
- ✅ Priorizar com MoSCoW com justificativa
- ✅ Ligar RF a RN pai
- ✅ Identificar requisito órfão
- ✅ Reconhecer RF testável vs ambíguo

---

## 🎁 Recursos Adicionais

**Arquivos Gerados:**
- `apresentacao-rf.html` - Apresentação interativa
- `guia-professor-rf.md` - Este arquivo
- `planilha-laboratorio-rf.xlsx` - Template de entrega (criar separadamente)

**Leitura Recomendada:**
- SOMMERVILLE, Ian. Engenharia de Software. Cap. 4
- ROBERTSON, S. & ROBERTSON, J. Mastering the Requirements Process.

---

**Última atualização:** Abril 2026  
**Versão:** 1.0 - Encontro 4
