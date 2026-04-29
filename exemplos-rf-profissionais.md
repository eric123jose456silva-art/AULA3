# 🏆 EXEMPLOS PROFISSIONAIS DE REQUISITOS FUNCIONAIS (RF)

## Introdução

Este documento contém **30+ exemplos reais** de RFs bem escritos, organizados por domínio e categoria. Use como referência durante o Encontro 4.

---

## 📱 DOMÍNIO 1: APLICATIVO DE BANCO (App Bancário)

### RNs Base
- **RN.BK.001:** Permitir transações 24/7 com máxima segurança
- **RN.BK.002:** Oferecer experiência mobile simplificada
- **RN.BK.003:** Garantir conformidade regulatória (BACEN)

### RFs Categorizados

#### Categoria D - Dados
```
RF.BK.D.001: O sistema deve armazenar extratos de até 24 meses
com segurança AES-256 em banco de dados redundado (RPO ≤ 5min)

RF.BK.D.002: O sistema deve manter histórico de transações
com campos: ID único, data/hora, valor, tipo, status, hash verificação
```

#### Categoria P - Processamento
```
RF.BK.P.001: O cliente deve transferir valores entre contas próprias
com cálculo automático de tarifa + validação de saldo
em tempo real com confirmação em < 3 segundos

RF.BK.P.002: O sistema deve detectar fraude analisando padrão
de transações do cliente com IA em tempo real, bloqueando
operações suspeitas com confiança > 95% e taxa falso-positivo < 2%

RF.BK.P.003: O sistema deve aplicar limite de saque diário
configurável por cliente com validação em cada transação
bloqueando se quantidade exceder limite
```

#### Categoria I - Interface
```
RF.BK.I.001: O cliente deve visualizar saldo em conta corrente
com atualização automática a cada transação confirmada

RF.BK.I.002: O cliente deve receber notificação push em
tempo real para transações > R$1000 ou tentativas de acesso
anormal em até 5 segundos após ocorrência
```

#### Categoria S - Saída
```
RF.BK.S.001: O gerente deve exportar relatório de compliance
diário em formato XML para BACEN com todas transações,
assinado digitalmente em até 2 horas após fim do dia útil

RF.BK.S.002: O cliente deve receber extrato mensal em PDF
por email no primeiro dia útil com resumo de movimentações,
tarifas, juros detalhado por data/valor/tipo
```

---

## 🛒 DOMÍNIO 2: E-COMMERCE (Plataforma de Vendas)

### RNs Base
- **RN.EC.001:** Aumentar conversão reduzindo atrito no checkout
- **RN.EC.002:** Maximizar retenção com programa de fidelidade
- **RN.EC.003:** Garantir satisfação com rastreamento de pedido

### RFs Categorizados

#### Categoria D - Dados
```
RF.EC.D.001: O sistema deve catalogar produtos com campos:
SKU único, descrição, preço base, estoque atual, categoria,
fornecedor, data criação com validação de entrada de dados

RF.EC.D.002: O sistema deve armazenar histórico de preços
mantendo versões anteriores com data de mudança para análise
de elasticidade e trending
```

#### Categoria P - Processamento
```
RF.EC.P.001: O sistema deve calcular frete automaticamente
baseado em CEP destino + peso volume usando API transportadora
(Sedex, PAC, Loggi) com opção manual em < 2 segundos

RF.EC.P.002: O sistema deve aplicar cupom de desconto validando:
código existe, ainda é válido, quantidade restante > 0,
cliente elegível (primeira compra/valor mínimo) com feedback
em < 500ms

RF.EC.P.003: O sistema deve reservar estoque no momento
da compra bloqueando quantidade por 10 minutos, liberando
se não confirmar pagamento em 600 segundos
```

#### Categoria I - Interface
```
RF.EC.I.001: O cliente deve adicionar/remover produtos no
carrinho com atualização imediata de subtotal, frete e total
sem recarregar página (AJAX/Real-time)

RF.EC.I.002: O cliente deve visualizar sugestões de produtos
relacionados (recomendação) baseado em histórico browsing
e compras anteriores com exibição de até 5 itens

RF.EC.I.003: O cliente deve realizar checkout em máximo
3 cliques: revisar carrinho → endereço → pagamento
com persistência de dados entre abas
```

#### Categoria S - Saída
```
RF.EC.S.001: O vendedor deve gerar relatório de vendas
diário em Excel com colunas: data, cliente, produto, qtd,
valor unitário, desconto, frete, total com filtro por período

RF.EC.S.002: O cliente deve receber confirmação de pedido
por email em < 1 minuto com: número pedido, items comprados,
preço final, data entrega estimada, link rastreamento

RF.EC.S.003: O cliente deve receber SMS/email em cada
mudança de status: pedido processado, enviado, em trânsito,
entregue com data/hora e opção de redirecionar
```

---

## 🏥 DOMÍNIO 3: APP DE SAÚDE (Telemedicina)

### RNs Base
- **RN.HD.001:** Garantir acesso 24/7 a cuidado médico
- **RN.HD.002:** Manter histórico médico centralizado e seguro
- **RN.HD.003:** Garantir conformidade HIPAA/LGPD

### RFs Categorizados

#### Categoria D - Dados
```
RF.HD.D.001: O sistema deve armazenar prontuário eletrônico com
campos: paciente ID, data criação, alergias, medicações atuais,
condições crônicas, histórico cirurgias com criptografia end-to-end

RF.HD.D.002: O sistema deve sincronizar prontuário do paciente
entre dispositivos (smartphone, tablet, web) com latência ≤ 5s
usando replicação eventual consistente
```

#### Categoria P - Processamento
```
RF.HD.P.001: O médico deve prescrever medicação digital
selecionando de base de medicamentos (Anvisa) com validação
de interações medicamentosas mostrando avisos de risco alto

RF.HD.P.002: O sistema deve agendar consulta validando
disponibilidade do médico, especialidade requerida, convênio
do paciente com confirmação por email em < 10s

RF.HD.P.003: O sistema deve calcular índice de massa corporal
automaticamente a partir de peso/altura informados pelo paciente
com categorização (normal, sobrepeso, obeso) para alertar
```

#### Categoria I - Interface
```
RF.HD.I.001: O paciente deve visualizar histórico de consultas
anteriores com filtro por especialidade, data, médico permitindo
revisar prescrições e notas clínicas com visualização estruturada

RF.HD.I.002: O médico deve aceitar/recusar solicitação de consulta
via aplicação com notificação em tempo real, podendo adicionar
observação de motivo recusa

RF.HD.I.003: O paciente deve enviar foto de sintoma/ferimento
com compressão automática (< 2MB) durante consulta via chat
de videochamada criptografada
```

#### Categoria S - Saída
```
RF.HD.S.001: O paciente deve exportar histórico médico completo
em PDF com formatação profissional, assinado digitalmente para
compartilhamento com segundo médico/consultor

RF.HD.S.002: O sistema deve gerar relatório para médico
mostrando padrão de atendimentos: especialidades mais consultadas,
taxas cancelamento, pacientes recorrentes com dados agregados

RF.HD.S.003: O sistema deve enviar lembretes de medicação via
notificação push em horários definidos pelo médico (máx 4x/dia)
com histórico de adesão do paciente
```

---

## 🏠 DOMÍNIO 4: SISTEMA DE GESTÃO PREDIAL

### RNs Base
- **RN.GP.001:** Automatizar manutenção preventiva
- **RN.GP.002:** Controlar acesso de visitantes
- **RN.GP.003:** Otimizar consumo de água/energia

### RFs Categorizados

#### Categoria D - Dados
```
RF.GP.D.001: O sistema deve registrar cada imóvel com:
endereço completo, unidade proprietário, metragem, ano construção,
equipamentos instalados (ar, elevador, bomba), data última
manutenção em campos estruturados

RF.GP.D.002: O sistema deve manter log de acessos com:
morador ID, data/hora entrada/saída, visitor (se houver),
autorização requerida com retenção de 12 meses
```

#### Categoria P - Processamento
```
RF.GP.P.001: O sistema deve gerar ordem de serviço
automaticamente quando equipamento atingir tempo de manutenção
preventiva prevista, agendando técnico com notificação

RF.GP.P.002: O sistema deve calcular consumo de água/energia
por unidade comparando com mês anterior, alertando se aumento
> 30% para investigação de vazamento/consumo anormal

RF.GP.P.003: O gestor deve autorizar acesso de visitante
por QR code temporário válido apenas para data/hora agendada
com bloqueio automático ao expirar
```

#### Categoria I - Interface
```
RF.GP.I.001: O morador deve solicitar manutenção via app
selecionando problema (hidráulica, elétrica, estrutura) com
anexo de foto, recebendo posição na fila de atendimento

RF.GP.I.002: O porteiro deve visualizar tela de check-in
de visitantes com foto, horário autorizado, unidade destino
com validação visual código QR

RF.GP.I.003: O morador deve visualizar fatura de condomínio
com discriminação: taxa base, água, energia, serviços extras,
totalizadores com opção para parcelar em até 12x
```

#### Categoria S - Saída
```
RF.GP.S.001: O síndico deve receber relatório mensal com:
inadimplência, solicitações manutenção abertas/fechadas,
média tempo resposta, variação consumo por unidade em PDF

RF.GP.S.002: O sistema deve enviar fatura de condomínio
por email em PDF no dia 1 de cada mês com código boleto
e link para pagamento online com desconto de 5%

RF.GP.S.003: O gestor deve exportar log de acessos em
formato CSV para auditoria de segurança com timestamp
de cada entrada/saída registrada
```

---

## 🎓 DOMÍNIO 5: SISTEMA ACADÊMICO (Gestão Escolar)

### RNs Base
- **RN.AC.001:** Automatizar processo de matrícula e cronograma
- **RN.AC.002:** Facilitar comunicação escola-família
- **RN.AC.003:** Acompanhar desempenho acadêmico em tempo real

### RFs Categorizados

#### Categoria D - Dados
```
RF.AC.D.001: O sistema deve registrar aluno com campos:
matrícula única, nome, data nascimento, responsáveis,
endereço, telefone, histórico escolar anterior estruturado
em banco de dados relacional com índices de busca

RF.AC.D.002: O sistema deve armazenar boletim com notas
de cada disciplina por bimestre com fórmula de cálculo
média mantendo histórico de mudanças com data/usuário
```

#### Categoria P - Processamento
```
RF.AC.P.001: O sistema deve calcular média automática
aplicando pesos configuráveis (prova 40%, trabalho 30%,
participação 30%) gerando boletim em tempo real

RF.AC.P.002: O sistema deve gerar relatório de desempenho
identificando alunos em risco (média < 6) ou destaque (> 9)
para intervenção pedagógica com sugestões

RF.AC.P.003: O coordenador deve matrícula aluno validando:
vaga disponível na série, pré-requisitos cumpridos, pré-inscrição
confirmada com geração automática de cronograma
```

#### Categoria I - Interface
```
RF.AC.I.001: O professor deve registrar notas em formulário
por disciplina com validação de intervalo (0-10) salvando
em tempo real com histórico de alterações

RF.AC.I.002: O aluno deve visualizar boletim atualizado
mostrando notas por disciplina, média, comparativo bimestral
com gráfico de evolução

RF.AC.I.003: O responsável deve receber notificação de
frequência quando aluno atingir 15 faltas em disciplina
com link para justificação de ausências
```

#### Categoria S - Saída
```
RF.AC.S.001: O sistema deve emitir boletim em PDF oficial
com notas, médias, situação (aprovado/reprovado) assinado
digitalmente enviado via email para responsável

RF.AC.S.002: O diretor deve gerar relatório anual com:
aprovação/reprovação por série, evasão, notas médias por
disciplina, ranking desempenho em Excel

RF.AC.S.003: O coordenador deve exportar cronograma
de aulas em iCal para sincronização com calendários
pessoais de alunos/professores
```

---

## 🎯 ANTI-PADRÕES: O QUE NÃO FAZER

### ❌ EXEMPLO 1: Requisito Vago
```
❌ RUIM: "O sistema deve ter busca rápida"
Problemas: "rápida" é subjetivo. 100ms é rápido? 1s?
           Não há critério de teste.

✅ BOM: "O usuário deve buscar produto por nome com
         resultados em ≤ 500ms contendo tipo amostra (min 10 itens)"
```

### ❌ EXEMPLO 2: Requisito Técnico Sem Negócio
```
❌ RUIM: "Implementar arquitetura microserviços"
Problemas: Isso é decisão arquitetural, não requisito.
           Não está ligado a RN.

✅ BOM: "O sistema deve processar picos de 10.000 req/s
         durante Black Friday mantendo disponibilidade ≥ 99.9%"
          (A solução pode ser microserviços, ou cache, ou outra)
```

### ❌ EXEMPLO 3: Requisito Duplicado
```
❌ RUIM: 
RF.001: Autenticar usuário com email e senha
RF.002: Fazer login do usuário com email e senha
RF.003: Validar credenciais do usuário

Problemas: 3 IDs para mesma funcionalidade.
           Confunde priorização e rastreabilidade.

✅ BOM:
RF.001: O usuário deve autenticar com email + senha
        validando contra BD com hash bcrypt em ≤ 500ms
```

### ❌ EXEMPLO 4: Requisito Muito Grande
```
❌ RUIM: "O sistema deve gerenciar vendas completo"
Problemas: Enorme, impossível testar, impossível estimar.

✅ BOM:
RF.001: Cliente cria pedido adicionando itens ao carrinho
RF.002: Cliente confirma endereço de entrega
RF.003: Cliente seleciona forma de pagamento
RF.004: Sistema processa pagamento com gateway
RF.005: Sistema gera confirmação pedido em PDF
```

---

## 📊 TABELA COMPARATIVA: BOA vs MÁ REDAÇÃO

| Aspecto | ❌ Mau | ✅ Bom |
|---------|--------|--------|
| **Ator** | "O sistema deve..." | "O cliente/admin/sistema deve..." |
| **Verbo** | pode, deve, é preciso | deve, pode, não deve (específicos) |
| **Ação** | processar, fazer, executar (vago) | calcular, validar, registrar, enviar (preciso) |
| **Objeto** | dados, informações | cliente, pedido, transação (concreto) |
| **Condição** | em tempo real, rápido | em < 500ms, com 99.9% precisão |
| **Resultado** | Ambíguo | Binário: Passou ou Falhou |

---

## 🔗 RELACIONAMENTO RN → RF

### Exemplo Completo: Banco

```
RN.001: "Permitir transações seguras 24/7"
├─ RF.001: Autenticar usuário com 2FA
├─ RF.002: Validar transação contra regras fraude
├─ RF.003: Encriptar dados em trânsito com TLS 1.3
├─ RF.004: Manter log auditoria com timestamp
└─ RF.005: Gerar relatório conformidade regulatória

RN.002: "Oferecer mobile experience superior"
├─ RF.006: Carregar app em < 3s em 3G
├─ RF.007: Sincronizar dados offline-first
├─ RF.008: Orientação responsiva (portrait/landscape)
└─ RF.009: Suportar biometria (Face ID/Fingerprint)

RN.003: "Reduzir fraude"
├─ RF.002: Validar transação contra regras (duplicado acima)
├─ RF.010: Analisar geolocalização para padrão anômalo
└─ RF.011: Bloquear transação suspeita com SMS alerta
```

**Análise:**
- RF.002 atende 2 RNs (transversal, comum)
- Cada RN tem 3-5 RFs (cobertura completa)
- Todo RF tem RN pai (sem órfãos)

---

## 💾 COMO USAR ESTE DOCUMENTO

### Para Alunos
1. Procure seu domínio de interesse
2. Estude exemplos de RFs bem escritos
3. Adapte para seu projeto do Encontro 4
4. Use estrutura [Ator]+[Dever]+[Ação]+[Objeto]+[Condição]

### Para Professores
1. Use exemplos em aula para exemplificar
2. Mostre anti-padrões para consolidar aprendizado
3. Pergunte: "Por que este RF é melhor que aquele?"
4. Peça aos alunos: "Reescreva este RF vago em versão profissional"

### Para Mentores/Code Review
1. Use tabela comparativa para revisar RFs de alunos
2. Identifique padrões de erro
3. Refatore RFs juntos iterativamente

---

## 📚 REFERÊNCIAS

**Livros Recomendados:**
- Robertson, S. & Robertson, J. *Mastering the Requirements Process* (3ª ed)
- Sommerville, I. *Software Engineering* (Cap. 4: Requirements Engineering)
- Wiegers, K. *Software Requirements* (2ª ed)

**Normas/Padrões:**
- IEEE 830-1998: Recommended Practice for Software Requirements Specifications
- ISO/IEC/IEEE 29148:2018: Systems and software engineering — Life cycle processes

---

**Documento Versão:** 2.0  
**Atualizado:** Abril 2026  
**Para:** ENCONTRO 4 - Engenharia de Requisitos (DESV SENAI)
