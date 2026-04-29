# ⚡ COLA DO PROFESSOR - Encontro 4 (RF) - CHEAT SHEET

**Imprima este documento e tenha à mão durante a aula!**

---

## 🎯 ANATOMIA DE RF (Cole no Quadro)

```
[Ator] + [Dever] + [Ação] + [Objeto] + [Condição de Sucesso]

Exemplo: O cliente + deve + validar + CPF + em < 1s
```

---

## 📊 4 CATEGORIAS (Memorize)

| D | Dados | O QUÊ armazenar |
| P | Processamento | COMO transformar |
| I | Interface | COMO interagir |
| S | Saída | QUE informação entrega |

---

## 🏆 MoSCoW (Proporções)

- **M (MUST):** 30-40% (viabilidade básica)
- **S (SHOULD):** 30-40% (importante)
- **C (COULD):** 10-20% (nice-to-have)
- **W (WON'T):** Descartado (futuro)

**⚠️ Se MUST > 50%, projeto em risco!**

---

## ✅ 5 CRITÉRIOS DE OURO (VRNCR)

1. **V**erificável: Pode testar?
2. **R**astreável: Tem RN pai?
3. **N**ão-ambíguo: Todos entendem igual?
4. **C**ompleto: Tem todos 5 elementos?
5. **R**ealizável: Técnicamente possível?

---

## 🔴 SINAIS DE ALERTA (RF Ruim)

- ❌ "deve ser rápido" → Vago
- ❌ "melhorar UX" → Genérico
- ❌ "integração com BD" → Técnico sem ator
- ❌ "gerenciar vendas" → Grande demais
- ❌ Sem RN pai → ÓRFÃO (feature creep)

---

## 🟢 SINAIS DE OURO (RF Bom)

- ✅ [Ator] identificado (cliente, admin, sistema)
- ✅ Verbo específico (calcular, validar, enviar, não apenas "fazer")
- ✅ Métrica/Condição testável (≤ 500ms, 99.9%, binário)
- ✅ Ligado a RN pai
- ✅ Resultado: Passou ✅ ou Falhou ❌

---

## 📋 RASTREABILIDADE (Padrão)

```
RN.01.001 → "Aumentar receita"
├─ RF.01.001: Validar cliente
├─ RF.01.002: Processar pagamento
└─ RF.01.003: Confirmar pedido

NUNCA: RF sem RN!
```

---

## ⏱️ AGENDA RÁPIDA (4 Horas)

| Tempo | O Quê | Dinâmica |
|-------|-------|---------|
| 0:00-0:30 | Slides 1-3 + RN vs RF | Juiz de Requisitos |
| 0:30-1:00 | Slides 4-7 + Anatomia | Montador de Req |
| 1:00-1:30 | Slides 8-10 + Categorias | Sorteio D/P/I/S |
| 1:30-2:00 | Reescrita em Tempo Real | Prática |
| 2:00-2:45 | Slides 11-14 + MoSCoW | Jogo do Orçamento |
| 2:45-3:00 | Debate MUST vs SHOULD | 5 RFs ambíguos |
| 3:00-3:20 | Slides 15-17 + Rastrea | Caça ao Órfão |
| 3:20-4:00 | Slides 18-20 + LABO | Workshop RFs |

---

## 🎮 TOP 3 DINÂMICAS MAIS Eficazes

1. **Jogo do Orçamento** (Módulo 4): Vivência real de pressão/trade-offs
2. **Tribunal de Requisitos** (Módulo 2): Alunos julgam RFs
3. **Workshop Laboratório** (Módulo 6): Criam artefato real

---

## 💡 DICAS DE FACILITAÇÃO

### Para Manter Atenção
- Mude de posição a cada 15 min (não fique parado)
- Faça perguntas retóricas ("Como vocês fariam?")
- Use exemplos com empresas conhecidas (Uber, Netflix)
- Dramatize erros (scene acting funciona!)

### Para Corrigir Desvios
- RF muito vago? Pergunte: "Como um QA testa isso?"
- Aluno desengajado? Chame-o para ler RF em voz alta
- Tempo curto? Corte Debate MUST/SHOULD (deixe para próxima)

### Para Consolidar
- Fim de cada módulo: resumo de 1 frase
- Fim da aula: "Qual foi seu maior aprendizado?" (rodinha)

---

## 🎁 PERGUNTAS POWER (Faça na Aula)

1. **RN ou RF?** "Aumentar satisfação do cliente" → RN
2. **Falta o quê?** "Processamento rápido" → Métrica (< 500ms)
3. **Categoria?** "Cliente preenche CPF" → Interface (I)
4. **MoSCoW?** "Notificação de promoção" → Should (importante, não crítica)
5. **Órfão?** "Dashboard customizável" → Sem RN? → Corta!

---

## 📝 CHECKLIST FINAL (Planilha)

Aluno entrega planilha com:

- [ ] 15-20 RFs
- [ ] Cada um [Ator]+[Dever]+[Ação]+[Objeto]+[Condição]
- [ ] Categoria D/P/I/S
- [ ] MoSCoW com justificativa
- [ ] Ligado a RN pai
- [ ] Critério de teste binário
- [ ] ≥ 70% passou em todos critérios = APROVADO

---

## 🚨 CENÁRIOS DE CRISE (Como Resolver)

| Problema | Solução |
|----------|---------|
| Aluno acha RF "muito técnico" | Mostre que QA precisa desta precisão |
| Turma não entende D/P/I/S | Faça Dinâmica 3.1 + crie novo exemplo |
| Tempo está curto | Pule Debate MUST/SHOULD, vá direto lab |
| RF muito grande (parecido com RN) | Pergunte: "Posso dividir em 3 menores?" |
| Aluno defende RF vago | Peça: "Me mostre como testa isso!" |

---

## 🎯 FINAL DA AULA (Encerramento - 5 min)

Faça esta roda rápida:

1. "Ninguém fala nada, todos escrevem em papel: qual foi o maior aprendizado?"
2. Voluntários compartilham (máx 1 min cada)
3. Você consolida com frase impactante:

> _"Requisitos bem escritos não são luxo de perfeccionista. São economia de tempo, dinheiro e sanidade do dev. Um RF vago custa 10x mais que um bem escrito."_

4. Recolha planilhas, cite próximo encontro

---

## 📊 CRITÉRIO MÍNIMO DE APROVAÇÃO

```
RF bem escrito = Passou se:

✅ Teste binário?     (Passou/Falhou, não talvez)
✅ Ator identificado?  (Cliente, admin, sistema)
✅ Tem RN pai?        (Rastreável)
✅ Categoria D/P/I/S?  (Classificado)
✅ MoSCoW?            (Priorizado)

NOTA = (Critérios Cumpridos / 5) × 10
MÍNIMO: 7,0
```

---

## 🔗 LIGAÇÃO ENTRE ENCONTROS

- **Encontro 3:** RN1, RN2, RN3 criadas
- **Encontro 4:** ← VOCÊ AQUI (transforma RN em RF)
- **Encontro 5:** Análise de conflitos entre RFs
- **Encontro 6:** Casos de Uso (detalhe maior)
- **Encontro 7:** Testes (validação de RFs)
- **Encontro 8+:** Código (implementa RFs)

---

## 🎁 FRASES QUE FUNCIONAM (Memorize)

1. _"Um RF vago custa 10x mais no futuro"_
2. _"Se 5 devs diferentes entendem diferente, RF está vago"_
3. _"RF sem RN é feature creep - alguém pediu? Quem?"_
4. _"MUST > 50%? Seu projeto vai sofrer"_
5. _"Teste em 3 segundos: RF é testável? Se não, está vago"_

Use estas frases em momentos-chave para criar impacto!

---

## 📚 REFERÊNCIAS RÁPIDAS

- **VRNCR:** 5 critérios de ouro (Verificável, Rastreável, etc)
- **D/P/I/S:** 4 categorias (Dados, Processamento, Interface, Saída)
- **M/S/C/W:** 4 prioridades MoSCoW
- **[Ator]+[Dever]+[Ação]+[Objeto]+[Condição]:** Anatomia RF

---

## 📱 ÚLTIMA DICA

**Se alguém pergunta:** _"Professor, mas e se não souber como categorizar?"_

**Responda:** _"Ótima pergunta! Vamos usar teste: este RF resolve problema de dados, processamento, interface ou saída? Pense em cada uma."_

Força a reflexão = aprendizado maior.

---

**Boa aula! Você vai arrasar! 🚀**

---

**Cola Versão:** 1.0  
**Impressa?** ☐ SIM ☐ NÃO (Imprima agora!)  
**Data de Uso:** __/__/2026
