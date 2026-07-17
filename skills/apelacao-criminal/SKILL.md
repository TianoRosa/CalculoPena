---
name: apelacao-criminal
description: >
  Skill especializada na elaboração de Apelações Criminais completas para o escritório Rosa Advogados (Cristiano da Rosa, OAB/RS 78.652), com pipeline analítico em seis etapas sobre os documentos do processo. Use SEMPRE que Cristiano solicitar apelação criminal, razões recursais, contrarrazões, ou mencionar sentença condenatória a impugnar. Acionar com /apelacao, /razoes, /recurso, /sentenca, /impugnacao, /condenou, /apelou, /tjrs. Acionar também ao mencionar: apelação criminal, pena confirmada, recurso contra sentença, desconstruir sentença, dosimetria equivocada, autoria não comprovada, prova ilícita na sentença, contrarrazões. Integra diagnostico-processual, teses-defensivas, dosimetria-penal, cadeia-custodia-documental, audiencias-criminais, pesquisa-jurisprudencial, otimizacao-llm-judicial, auditor-penal-antialucinacao e peticoes-docx. Gera DOCX com padrão Rosa Advogados.
---

# Skill: Apelação Criminal — Rosa Advogados

## Visão Geral

Esta skill produz Apelações Criminais completas, construídas sobre os documentos do processo, prontas para protocolo no eProc/TJRS. Não resume o processo. Desconstruye a sentença recorrida.

Toda conclusão decorre exclusivamente das provas existentes nos autos. Nunca inventar fatos. Nunca atribuir documento inexistente ao processo. Toda afirmação vinculada a documento, depoimento ou prova identificados por evento, folha e data.

---

## 0. PRÉ-VÔOO: O QUE RECEBER ANTES DE COMEÇAR

Antes de qualquer análise, verificar se há na conversa atual:

- [ ] Sentença recorrida (obrigatória)
- [ ] Pronúncia / absolvição sumária (se Júri)
- [ ] Transcrições ou vídeos de audiência
- [ ] Diagnóstico processual (skill `diagnostico-processual`)
- [ ] Laudos periciais
- [ ] Inquérito policial / APF
- [ ] Denúncia / aditamentos
- [ ] Memoriais das partes
- [ ] Interceptações / extrações digitais
- [ ] Decisões interlocutórias (prisão, indeferimento de provas, nulidades)
- [ ] Recursos anteriores e sua sorte

Se a sentença não foi fornecida, solicitá-la antes de prosseguir. Os demais documentos são incrementais: trabalhar com o que há e sinalizar o que está faltando.

**Hierarquia interna dos documentos:**
1. Sentença (epicentro da impugnação)
2. Prova produzida em audiência (depoimentos, perícias, reconhecimentos)
3. Documentos técnicos (laudos, extrações, interceptações)
4. Denúncia
5. Inquérito policial (não é prova — fonte apenas de contradições)

---

## 1. PRIMEIRA ETAPA: LEITURA COMPLETA E DIAGNÓSTICO INTERNO

Antes de escrever qualquer linha da apelação, produzir internamente:

### 1.1 Linha do Tempo Processual

```
FATOS → INVESTIGAÇÃO → FLAGRANTE/BO → IP → DENÚNCIA → INSTRUÇÃO → SENTENÇA
```

Identificar datas críticas (prisão, comunicação ao MP, audiências, prolação da sentença) para verificação de prazos e eventuais nulidades temporais.

### 1.2 Quadro Probatório

| Categoria | Provas identificadas |
|---|---|
| Favoráveis à defesa | |
| Desfavoráveis | |
| Neutras | |
| Ilícitas (art. 157 CPP) | |
| Ilícitas por derivação (teoria dos frutos) | |
| Contraditórias entre si | |
| Inexistentes (sentença afirma, prova não consta) | |
| Ignoradas pela sentença | |

### 1.3 Tabela de Depoentes

Para cada testemunha, policial, perito, ofendido e réu:

| Campo | Conteúdo |
|---|---|
| Quem é | função / vínculo com o caso |
| O que afirmou | síntese objetiva |
| O que negou | negações relevantes |
| Contradições | interna / entre depoentes |
| Mudanças de versão | IP vs. juízo |
| Credibilidade | elementos objetivos |
| Valor probatório | como a sentença usou |

### 1.4 Interrogatório

Separar: admissões / negações / explicações / incoerências / elementos confirmados / elementos desmentidos pela prova técnica.

### 1.5 Desmembramento da Sentença

Copiar literalmente cada trecho relevante da sentença antes de impugná-lo. Identificar:

- Fundamentos jurídicos utilizados
- Fundamentos fáticos (o que o juiz afirma ter acontecido)
- Provas citadas como fundamento
- Provas ignoradas completamente
- Presunções não demonstradas
- Inferências não ancoradas em prova
- Argumentos genéricos / padronizados
- Inversão do ônus da prova
- Uso de elemento do inquérito como prova
- Contradições internas na fundamentação
- Fundamentação aparente (art. 93, IX, CF — vício de motivação)

---

## 2. SEGUNDA ETAPA: AUDITORIA DA SENTENÇA

Verificar automaticamente violação de:

**CPP:**
- art. 155 (vedação de prova exclusivamente inquisitorial)
- art. 156 (ônus da prova)
- art. 157 (prova ilícita)
- arts. 158-A a 158-F (cadeia de custódia)
- art. 226 (reconhecimento de pessoas)
- art. 381 (requisitos da sentença)
- art. 386 (hipóteses absolutórias)
- art. 387 (requisitos da parte condenatória)

**Constituição Federal:**
- art. 5º, LIV (devido processo legal)
- art. 5º, LV (contraditório e ampla defesa)
- art. 5º, LVI (inadmissibilidade de prova ilícita)
- art. 5º, LVII (presunção de inocência)
- art. 93, IX (motivação das decisões)

**Direito Internacional:**
- CADH, arts. 8º e 25 (garantias judiciais)
- PIDCP, art. 14

Ao final desta etapa, produzir internamente um **mapa de vulnerabilidades da sentença**, em ordem de gravidade.

---

## 3. TERCEIRA ETAPA: IDENTIFICAÇÃO DAS TESES

Varredura exaustiva. Toda tese identificada deve ser registrada, mesmo que depois seja hierarquizada como subsidiária. Incluir obrigatoriamente:

### Nulidades processuais
- Nulidade absoluta / relativa
- Prova ilícita e derivada (teoria dos frutos)
- Violação domiciliar sem mandado (art. 5º, XI, CF)
- Quebra da cadeia de custódia (arts. 158-A a 158-F CPP)
- Reconhecimento inválido (art. 226 CPP / HC 598.886/STJ)
- Interceptação ilegal
- Extração digital sem integridade (hash ausente)
- Cerceamento de defesa (indeferimento de provas)
- Violação do contraditório

### Mérito
- Insuficiência probatória / in dubio pro reo
- Quebra da presunção de inocência
- Prova exclusivamente policial
- Erro de autoria
- Ausência de materialidade
- Ausência de dolo
- Erro de tipo / erro de proibição
- Crime impossível
- Excludentes de ilicitude (legítima defesa, estado de necessidade, estrito cumprimento, exercício regular)
- Excludentes de culpabilidade (inexigibilidade, coação, embriaguez)
- Atipicidade (princípio da insignificância, adequação social)

### Desclassificação / redução
- Desclassificação para tipo menos grave
- Tentativa (iter criminis não completado)
- Participação de menor importância
- Consunção / absorção
- Continuidade delitiva em vez de concurso material
- Concurso formal em vez de material

### Dosimetria
- Bis in idem (circunstância inerente ao tipo)
- Pena-base acima do mínimo sem fundamentação concreta
- Agravante sem suporte fático
- Atenuante não aplicada (menoridade, confissão, primariedade, reparação)
- Causa de aumento indevida
- Causa de diminuição não aplicada (tráfico privilegiado, tentativa sub-rogada)
- Regime mais gravoso do que o necessário
- Substituição negada indevidamente
- Sursis não concedido sem fundamento
- Indenização mínima sem base probatória
- Perdimento desproporcional

**Acionamento obrigatório:** ao identificar teses, acionar a skill `teses-defensivas` para varredura complementar pelas 6 camadas (A a F) e a skill `dosimetria-penal` para a análise trifásica.

---

## 4. QUARTA ETAPA: TEORIA DOS JOGOS

Avaliar:

| Argumento | Prob. de convencimento | Risco de rejeição | Ordem |
|---|---|---|---|
| [Tese principal] | alta / média / baixa | baixo / médio / alto | 1º |
| [Tese subsidiária 1] | | | 2º |
| ... | | | |

Perguntas obrigatórias antes de ordenar:
1. Qual argumento, se acolhido, produz o melhor resultado para o cliente?
2. Qual argumento contamina positivamente os demais se aceito?
3. Qual argumento tende a fragilizar o conjunto se posto em primeiro plano?
4. Há teses incompatíveis entre si que precisam ser isoladas como subsidiárias expressas?
5. Qual é o padrão decisório da 8ª Câmara Criminal do TJRS (ou câmara competente) para esse tipo de caso?

---

## 5. QUINTA ETAPA: PESQUISA JURISPRUDENCIAL

Acionar obrigatoriamente a skill `pesquisa-jurisprudencial`.

Prioridade:
1. STF (Plenário, temas com repercussão geral)
2. STJ (recursos repetitivos, Temas, Súmulas, Informativo)
3. TJRS (câmara competente, padrão decisório local)
4. TRF4 (quando envolver crime federal)

Critérios:
- Dar preferência a precedentes dos últimos cinco anos
- Quando houver precedente posterior à sentença, priorizá-lo
- Nunca utilizar precedentes superados por overruling
- Nunca citar Jusbrasil
- Todo precedente com link oficial verificado durante a sessão

---

## 6. SEXTA ETAPA: PRODUÇÃO DA APELAÇÃO

### 6.1 Estrutura Obrigatória Rosa Advogados

```
[ENDEREÇAMENTO]

[PROCESSO DE ORIGEM + QUALIFICAÇÃO DO APELANTE]

APELAÇÃO CRIMINAL

I. ADMISSIBILIDADE
   1.1 Cabimento (art. 593, I, CPP)
   1.2 Tempestividade
   1.3 Legitimidade

II. SÍNTESE PROCESSUAL
   2.1 Fatos imputados
   2.2 Sentença recorrida (síntese objetiva, com transcrição dos trechos centrais)

III. QUESTÃO EM DISCUSSÃO
   [Uma ou duas frases: "Discute-se se..."]

IV. RAZÕES RECURSAIS
   [Um capítulo por tese, com numeração própria]
   [Capítulos em ordem de força: principal → subsidiário → dosimetria]

V. PREQUESTIONAMENTO

VI. EFEITO SUSPENSIVO [quando aplicável]

VII. DISPOSITIVO E TESE RECURSAL
   [Pedidos principais]
   [Pedidos subsidiários, em ordem de alternatividade]

[FECHO + DATA + ASSINATURA]
```

### 6.2 Modelo de Capítulo por Tese

Cada capítulo deve ser localmente completo e funcionar como miniapelação autônoma:

```
[TÍTULO EM MAIÚSCULAS NEGRITO — PROPOSIÇÃO DEFENSIVA AUTOSSUFICIENTE]

Parágrafo de abertura: frase-tese que nomeia a violação e anuncia a conclusão.

Subtópico: fatos — o que os autos demonstram (com referência a evento/folha/data).

Subtópico: o que a sentença afirma (transcrição literal do trecho impugnado).

Subtópico: a violação — por que o afirmado pela sentença é juridicamente incorreto.

Doutrina: paráfrase atribuída (nunca aspas longas de Aury Lopes Jr. ou outros).

Jurisprudência: precedentes com link oficial verificado.

Objeção previsível do MP ou relator: respondida explicitamente.

Frase-síntese: conclusão do capítulo que retoma a tese.
```

### 6.3 Padrão de Citação de Prova Oral

Aplicar o mesmo protocolo da skill `memoriais-defensivos`, Seção 5:

```
"[transcrição literal da fala]"
([Depoente], Evento [N] dos autos — [MM:SS])
```

Toda afirmação probatória relevante ancorada em citação literal. A tese se constrói em torno do que foi efetivamente dito, não o contrário.

### 6.4 Prequestionamento

Seção obrigatória. Listar expressamente:
- Dispositivos constitucionais debatidos (art. 5º, incisos pertinentes; art. 93, IX)
- Artigos do CPP e do CP discutidos
- Súmulas e Temas invocados
- Convenções internacionais
- Identificação explícita de controvérsia sobre interpretação de lei federal (para REsp) e constitucional (para RE)

### 6.5 Pedido Encadeado

O pedido não é lista protocolar. É a conclusão lógica encadeada das razões:

```
a) Preliminarmente, o reconhecimento da nulidade [X] e a consequente [absolvição / 
   anulação do processo / desentranhamento da prova];

b) No mérito, a absolvição do Apelante com fundamento no art. 386, [inciso], do CPP, 
   por [razão principal];

c) Subsidiariamente, a desclassificação para [tipo penal], com adequação da pena ao 
   novo enquadramento;

d) Subsidiariamente, a redução da pena [com especificação], a fixação do regime [X] 
   e a substituição por penas restritivas de direitos, ou, alternativamente, o sursis;

e) Em qualquer hipótese, o prequestionamento dos dispositivos elencados na Seção V.
```

---

## 7. REVISÃO FINAL OBRIGATÓRIA

Antes de finalizar, percorrer o checklist:

- [ ] Todos os fundamentos da sentença foram enfrentados capítulo a capítulo?
- [ ] Nenhuma tese relevante foi omitida?
- [ ] Teses incompatíveis estão isoladas como subsidiárias expressas?
- [ ] Todos os pedidos possuem fundamento legal indicado?
- [ ] Prequestionamento completo?
- [ ] Efeito suspensivo requerido onde aplicável?
- [ ] Coerência lógica, cronológica e probatória entre capítulos?
- [ ] Toda jurisprudência com link oficial verificado?
- [ ] Nenhum precedente inventado ou atribuído erroneamente?
- [ ] Nenhum fato atribuído aos autos sem referência a documento específico?

Acionar a skill `auditor-penal-antialucinacao` para revisão adversarial antes do protocolo.

Acionar a skill `otimizacao-llm-judicial` para otimização de dupla leitura (humano + LLM judicial).

---

## 8. RELATÓRIO ESTRATÉGICO FINAL

Ao final de toda apelação, entregar obrigatoriamente:

```
RELATÓRIO ESTRATÉGICO DA APELAÇÃO

1. TESES PRINCIPAIS (em ordem de força)
   [Tese] — fundamento — probabilidade qualitativa (alta/média/baixa) — justificativa

2. TESES SUBSIDIÁRIAS
   [idem]

3. PONTOS FORTES DA DEFESA
   [com referência específica ao acervo probatório]

4. PONTOS VULNERÁVEIS
   [com sugestão de mitigação]

5. RISCOS PROCESSUAIS
   [Súmula 7 STJ, repercussão geral, prescrição, questão de admissibilidade]

6. PROVIDÊNCIAS RECOMENDADAS ANTES DO PROTOCOLO
   [documentos a juntar, diligências pendentes, embargos de declaração cabíveis]

7. AVALIAÇÃO DE EMBARGOS DE DECLARAÇÃO
   [verificar se cabe EDcl contra a sentença antes da apelação, para fins de prequestionamento]
```

---

## 9. FORMATAÇÃO DO DOCUMENTO

### Endereçamento

```
EGRÉGIO TRIBUNAL DE JUSTIÇA DO ESTADO DO RIO GRANDE DO SUL
[Nº CÂMARA CRIMINAL]
```

ou, antes do juízo de admissibilidade:

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA [Nª VARA] CRIMINAL
DA COMARCA DE [CIDADE]/RS
```

### Padrão de Cabeçalho

Seguir o padrão `peticoes-docx` (triple-column header, teal headings, margens ABNT, Arial 12pt).

### Assinatura Final

```
Porto Alegre, [dia] de [mês] de [ano].

________________________

CRISTIANO DA ROSA
Advogado – OAB/RS 78.652
(51) 981220776
```

### Geração DOCX

Se o usuário solicitar arquivo Word, ler o SKILL.md da skill `peticoes-docx` antes de gerar. Aplicar obrigatoriamente o estilo "1 - Citação" em todos os blocos de prova oral transcritos.

---

## 10. REGRAS DE ESTILO

- Proibido: travessão (– ou —). Substituir por vírgula, ponto e vírgula ou dois pontos.
- Tom: técnico-denso, inspirado em Aury Lopes Jr. e Ruy Barbosa. Sem retórica vazia.
- Nunca citar Aury Lopes Jr. com aspas longas. Parafrasear e atribuir.
- Jurisprudência: exclusivamente STF, STJ, TJRS, TRFs, Diários Oficiais. Nunca Jusbrasil.
- Nunca iniciar o corpo da apelação com a narrativa da denúncia. Frame inicial defensivo obrigatório.
- Toda afirmação de fato vinculada a evento, folha ou documento identificado.
- Título de cada capítulo deve ser uma proposição defensiva autossuficiente, não um tema genérico.

### Fórmulas recorrentes de alta carga retórica

- "A sentença recorrida condenou sem prova. Esta apelação demonstrará por quê."
- "A condenação penal exige prova acima de qualquer dúvida razoável. O que os autos revelam é precisamente o contrário."
- "O Estado não pode se beneficiar probatoriamente de uma ilicitude que ele próprio produziu."
- "Condenar [réu] com base exclusivamente em [elemento], sem prova judicial produzida sob contraditório, é transformar o processo penal em mero referendo da investigação policial."
- "Persistindo a dúvida razoável, a conclusão constitucionalmente exigida é a absolvição, pois o processo penal não condena por verossimilhança, mas por prova segura."

---

## 11. INTEGRAÇÃO COM O ECOSSISTEMA ROSA ADVOGADOS

| Momento | Skill a acionar |
|---|---|
| Antes de começar | `diagnostico-processual` |
| Identificação de teses | `teses-defensivas` |
| Dosimetria | `dosimetria-penal` |
| Prova de drogas / custódia | `cadeia-custodia-documental` e `trafico-drogas` |
| Análise de audiências e depoimentos | `audiencias-criminais` |
| Pesquisa de precedentes | `pesquisa-jurisprudencial` |
| Revisão adversarial | `auditor-penal-antialucinacao` |
| Otimização para IA do tribunal | `otimizacao-llm-judicial` |
| Pedido de liberdade recursal | `pedidos-de-liberdade` |
| Admissibilidade de REsp/RE | `admissibilidade-recursal` |
| Geração do DOCX | `peticoes-docx` |
| Protocolo no eProc | `eproc-peticionar` |

### Sobre Embargos de Declaração

Avaliar sempre, ao final de qualquer decisão de segundo grau:
- Há omissão, contradição, obscuridade ou erro material?
- O prequestionamento ficou incompleto?
- EDcl é necessário antes de REsp/RE?

Acionar a skill `admissibilidade-recursal` para auditoria das 11 barreiras antes de qualquer recurso às instâncias superiores.

---

## 12. COMANDOS RÁPIDOS

| Comando | Ação |
|---|---|
| `/apelacao` | Iniciar pipeline completo |
| `/diagnostico` | Apenas Etapa 1 (leitura e diagnóstico) |
| `/teses` | Apenas Etapa 3 (identificação de teses) |
| `/jogos` | Apenas Etapa 4 (teoria dos jogos) |
| `/pesquisa` | Apenas Etapa 5 (jurisprudência) |
| `/redigir` | Apenas Etapa 6 (produção da peça) |
| `/relatorio` | Apenas Relatório Estratégico Final |
| `/edcl` | Avaliar cabimento de Embargos de Declaração |
| `/efeito` | Redigir pedido de efeito suspensivo |
| `/contrarrazoes` | Redigir Contrarrazões de Apelação |
