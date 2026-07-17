---
name: audiencias-criminais
description: >
  Skill de análise técnico-jurídica de audiências criminais para memoriais e apelações. Acione
  sempre que Cristiano mencionar: audiência criminal, depoimento, testemunha, NotebookLM, memorial
  defensivo, transcrição, análise probatória, contradição entre depoimentos, depoimento de policial,
  reconhecimento de pessoas, nulidade processual, linguagem corporal de testemunha, vídeo de audiência,
  marcação temporal, apelação baseada em prova oral, extração de áudio ou transcrição jurídica. Acione
  com: /triagem, /depoentes, /contradicoes, /policiais, /memoriais, /nulidades, /falas, /video,
  /corporal, /apelacao, /resumo ou /citacoes. Cobre: orientação para análise de vídeo, extração de áudio (Convertio,
  Gladia, Whisper), transcrição com marcação temporal [MM:SS], linguagem corporal, contradições,
  nulidades (art. 226 CPP, arts. 158-A-F CPP, HC 598.886/SC/STJ), blocos prontos para memoriais e
  apelação, banco de citações diretas com marcação temporal prontas para inserção em peças, Design Thinking e Legal Design.
---

# Analisador de Audiências Criminais para Memoriais Defensivos e Apelação

Skill de Cristiano da Rosa — Rosa Advogados | OAB/RS 78.652

---

## FASE 0 — ROTEAMENTO POR TIPO DE MATERIAL

Ao receber material para análise, identificar o formato e rotear conforme abaixo. O tipo de fonte não altera a estrutura da análise; altera apenas a etapa de preparação antes da análise.

| Formato recebido | Ação |
|---|---|
| Arquivo de vídeo (.mp4, .avi, .mkv, .mov etc.) | Executar FASE 0-A (extração de áudio + transcrição) |
| Arquivo de áudio (.mp3, .wav, .m4a etc.) | Executar FASE 0-A a partir da Etapa 2 (transcrição) |
| Arquivo SRT (.srt) | Processar diretamente; marcação temporal já disponível no formato [MM:SS] |
| Arquivo TXT ou texto colado | Processar diretamente; verificar se há marcação temporal e registrar grau de confiabilidade |
| Arquivo PDF | Extrair texto e processar como TXT |
| Observações livres do advogado sem transcrição | Processar com grau de confiabilidade **baixo** (sinalizar limitações na Seção I) |
| Ata de audiência (texto formal) | Processar diretamente; grau de confiabilidade **médio** (linguagem resumida, não literal) |

**Princípio central:** o formato da fonte não muda o que a skill faz com o conteúdo. O material é sempre tratado como conjunto de falas de depoentes a serem analisadas. A marcação temporal `[MM:SS]` é usada quando disponível; quando ausente, registrar a limitação na Seção I e prosseguir com a análise sem bloquear a execução.

---

## FASE 0-A — MATERIAL EM VÍDEO OU ÁUDIO (quando a fonte for audiovisual)

Quando o usuário enviar ou mencionar um arquivo de vídeo (.mp4, .avi, .mkv, .mov etc.) ou áudio (.mp3, .wav), o conteúdo precisa ser convertido em texto antes da análise. Orientar o fluxo abaixo.

### Etapa 1 — Extração do áudio

Indicar ao usuário uma das ferramentas abaixo para converter o vídeo em áudio MP3:

- **Convertio** — https://convertio.co/pt/mp4-mp3/ (conversão online, sem instalação)
- **Online Audio Converter** — https://www.online-audio-converter.com/pt/ (alternativa gratuita)
- **VLC Media Player** — conversão local, preserva qualidade máxima (recomendado para audiências longas)

Após extrair o áudio, prosseguir para a Etapa 2.

### Etapa 2 — Transcrição do áudio

Indicar ao usuário uma das ferramentas abaixo para gerar a transcrição com marcação temporal:

- **Gladia.io** — https://gladia.io/transcription (alta precisão, marcação por palavra, suporta português)
- **Whisper (LabLab)** — https://whisper.lablab.ai (gratuito, open-source, boa precisão em pt-BR)
- **NotebookLM (Google)** — upload do vídeo ou áudio diretamente, com prompt estruturado (ver Fase 0-B)

**Instrução ao usuário:** Solicitar que a transcrição inclua:
- Identificação do falante quando possível
- Marcação temporal no formato [MM:SS] ao início de cada bloco de fala
- Sinalização de trechos inaudíveis como [INAUDÍVEL - MM:SS]

Após obter a transcrição, retornar à skill para análise estruturada.

### Etapa 3 — Relatório de observações do vídeo

Mesmo sem transcrição textual, o usuário pode enviar observações diretamente sobre o vídeo.
Nesse caso, receber e estruturar conforme o cabeçalho da Fase 0-B e prosseguir para análise,
sinalizando o grau de confiabilidade como **baixo** (observações livres sem transcrição literal).

---

## FASE 0-B — EXTRAÇÃO NO NOTEBOOKLM (quando há vídeo ou áudio no NotebookLM)

Se o usuário usar o NotebookLM para extrair o conteúdo da audiência, orientar com o seguinte prompt:

```
Analise o vídeo/áudio desta audiência criminal com foco técnico-jurídico e produza um relatório
estruturado com as seguintes seções:

1. RESUMO NARRATIVO OBJETIVO
   - Relato cronológico e conciso dos principais acontecimentos.
   - Identifique cada parte que falou (vítima, réu, testemunha, magistrado, MP, defesa).
   - Marque o tempo [MM:SS] de cada evento ou bloco de fala relevante.
   - Indique se a audiência ocorreu de forma presencial ou remota.

2. TRANSCRIÇÃO SELETIVA DE DIÁLOGOS COM VALOR PROBATÓRIO
   - Reproduza fielmente os trechos mais relevantes, priorizando: reconhecimento de pessoas,
     autoria do fato, dinâmica dos acontecimentos, perguntas sugestivas, respostas evasivas.
   - Para cada trecho transcrito, insira a marcação temporal precisa: [MM:SS].
   - Sinalize trechos inaudíveis como [INAUDÍVEL - MM:SS].

3. ANÁLISE DE LINGUAGEM CORPORAL
   - Descreva comportamentos visíveis que indiquem:
     * Contradição entre discurso verbal e corporal (gestos, postura, direção do olhar)
     * Nervosismo, evasão ou incerteza (hesitações, pausas atípicas, tom oscilante)
     * Coerência, segurança ou espontaneidade
     * Pressão externa, intimidação ou direcionamento
   - Relacione cada observação ao depoente e ao tempo do vídeo.

4. ANÁLISE JURÍDICA TÉCNICA
   - Identifique indícios de: reconhecimento pessoal viciado (art. 226 CPP);
     perguntas sugestivas não repelidas; cerceamento do contraditório; ausência de
     cadeia de custódia; depoimentos induzidos; nulidades formais ou materiais.

5. FICHA POR DEPOENTE
   Para cada depoente:
   - Nome completo
   - Tipo: vítima / testemunha / policial civil / policial militar / réu / informante / perito / outro
   - Quem arrolou: acusação / defesa / juízo
   - Perguntas e respostas relevantes (ordem cronológica com marcação temporal)
   - Trechos literais mais relevantes
   - Resumo por blocos temáticos
   - Pontos de dúvida ou trechos inaudíveis

6. REGISTRO PROCESSUAL
   - Documentos ou objetos mencionados
   - Decisões do juiz durante a audiência
   - Incidentes processuais registrados
   - Falhas técnicas da gravação (cortes, áudio ininteligível, edição evidente)
```

Após extrair, organizar o material neste cabeçalho antes de enviar para análise:

```
PROCESSO:
ACUSADO:
TIPO PENAL (ex: art. 157 CP — Roubo):
FASE PROCESSUAL (instrução / memoriais / apelação):
DATA DA AUDIÊNCIA:
VÍDEO DE REFERÊNCIA:
FONTE DO TEXTO: NotebookLM / Gladia / Whisper / Observações livres
GRAU DE FIDELIDADE: alto (transcrição literal) / médio (resumo estruturado) / baixo (resumo genérico)
TESE DEFENSIVA INICIAL:
OBSERVAÇÕES DO ADVOGADO:

MATERIAL EXTRAÍDO:
[cole aqui]
```

---

## COMANDOS RÁPIDOS

| Comando | Função |
|---|---|
| `/triagem` | Triagem inicial: depoentes, pontos favoráveis, prejudiciais, contradições e nulidades |
| `/depoentes` | Ficha individual de cada depoente |
| `/contradicoes` | Quadro comparativo de contradições internas e externas |
| `/policiais` | Análise específica dos depoimentos de policiais e agentes do Estado |
| `/memoriais` | Blocos prontos para memorial defensivo (fase de instrução) |
| `/apelacao` | Blocos prontos para apelação criminal (teses, preliminares, mérito) |
| `/nulidades` | Extração de nulidades processuais e probatórias com base normativa |
| `/falas` | Listagem das falas mais relevantes com marcação temporal, separando literal / resumo / inferência |
| `/video` | Orientação completa para extração de áudio, transcrição e envio do material para análise |
| `/corporal` | Análise de linguagem corporal a partir de observações do usuário sobre o vídeo |
| `/resumo` | Resumo narrativo cronológico objetivo da audiência |
| `/citacoes` | Banco de citações diretas com marcação temporal, prontas para inserção em memoriais, apelações e outras peças |

Quando um comando for recebido sem material, solicitar o texto ou as observações da audiência antes de prosseguir.

---

## ANÁLISE COMPLETA — ESTRUTURA OBRIGATÓRIA

Quando o usuário enviar material para análise sem comando específico, executar a estrutura completa abaixo.

### I. IDENTIFICAÇÃO DO MATERIAL

- Processo
- Acusado
- Tipo penal
- Fase processual
- Vídeo ou arquivo de referência (se informado)
- **Formato do material:** vídeo / áudio / SRT / TXT / PDF / ata / texto colado / observações livres
- Fonte e grau de confiabilidade: **alto** (transcrição literal com marcação temporal), **médio** (resumo estruturado ou ata formal), **baixo** (observações livres ou resumo genérico)
- Limitações da análise decorrentes da fonte

### II. RESUMO NARRATIVO CRONOLÓGICO

Relato objetivo e cronológico dos principais acontecimentos da audiência, com identificação de cada parte
que falou e marcação temporal quando disponível ([MM:SS]). Indicar se a audiência foi presencial ou remota.

### III. MAPA DOS DEPOENTES

Para cada depoente, ficha individual:

| Campo | Conteúdo |
|---|---|
| Nome | |
| Qualidade processual | vítima / testemunha / policial civil / policial militar / réu / informante / perito |
| Relação com o acusado | |
| Arrolado por | acusação / defesa / juízo / não informado |
| Resumo objetivo | |
| Pontos favoráveis à defesa | |
| Pontos prejudiciais | |
| Falas literais relevantes (com marcação temporal [MM:SS] se disponível) | |
| Trechos a conferir na fonte (material audiovisual, ata ou texto original) | |

### IV. ANÁLISE INDIVIDUAL DOS DEPOIMENTOS

Para cada depoente:

- Coerência interna
- Nível de detalhamento (específico ou genérico)
- Espontaneidade ou dependência de perguntas sugestivas
- Contradições internas
- Contradições com outros depoimentos
- Contradições com documentos dos autos
- Lacunas relevantes
- Fragilidade probatória
- Utilidade defensiva

### V. ANÁLISE DE LINGUAGEM CORPORAL *(somente quando há vídeo ou observações do usuário)*

**Atenção:** Esta seção somente é produzida quando há vídeo disponível para o usuário ou quando o
usuário relata observações comportamentais a partir do vídeo. Sem essa base, a seção é suprimida.

Para cada depoente observado, registrar:

| Campo | Conteúdo |
|---|---|
| Depoente | |
| Marcação temporal [MM:SS] (se disponível) | |
| Comportamento observado | |
| Possível interpretação | |
| Relevância defensiva | |

Padrões a identificar:
- **Evasão ocular:** olhar para baixo, desviar o olhar ao responder perguntas diretas
- **Hesitação antes de afirmar autoria:** pausa atípica, interjeição, reformulação
- **Tom de voz diferenciado:** firme nas perguntas da acusação, inseguro nas da defesa
- **Contradição verbal-corporal:** gestos que negam o que a fala afirma
- **Nervosismo excessivo:** movimentos repetitivos, toque ao rosto, instabilidade postural
- **Espontaneidade:** coerência entre expressão facial, tom e conteúdo verbal
- **Sinais de pressão ou intimidação:** olhares para terceiros antes de responder, silêncio prolongado

Cada observação deve indicar a marcação temporal disponível, o depoente e a relevância defensiva potencial.

### VI. QUADRO COMPARATIVO DE CONTRADIÇÕES

| Tema | Depoente A / Tempo | Depoente B / Tempo | Divergência | Relevância jurídica | Uso nos memoriais | Força defensiva |
|---|---|---|---|---|---|---|

Força defensiva: **baixa / média / alta**

### VII. ANÁLISE DE POLICIAIS E AGENTES DO ESTADO

Aplicar sempre que houver policial civil, militar, guarda municipal ou qualquer agente público:

- Relato concreto ou genérico (narrativa padronizada entre agentes = possível conluio narrativo)
- Fundadas razões prévias à abordagem (ausência: nulidade da busca)
- Divergências internas entre os agentes
- Omissão de protocolo
- Verificar: abordagem, busca pessoal, busca domiciliar, reconhecimento, apreensão, cadeia de custódia, flagrante
- Risco de: testemunho de reforço, contaminação probatória, reconstrução posterior dos fatos
- Linguagem corporal: comportamento evasivo, narrativa memorizada, desconforto nas perguntas da defesa

### VIII. MATRIZ DE NULIDADES E TESES DEFENSIVAS

Verificar sistematicamente, conforme o caso:

**Nulidades formais (vícios objetivos):**
- Reconhecimento pessoal sem observância do art. 226 CPP (HC 598.886/SC/STJ e Tema Repetitivo 1.258/STJ)
- Ausência de identificação formal dos presentes
- Interrupção indevida da inquirição da defesa
- Falta de correspondência com o termo de audiência
- Gravação parcial, editada ou com corte abrupto

**Nulidades materiais (vícios de conteúdo):**
- Prova ilícita (art. 157 CPP)
- Violação de domicílio (art. 5º, XI CF)
- Ausência de fundadas razões para abordagem ou busca
- Quebra da cadeia de custódia (arts. 158-A a 158-F CPP)
- Testemunho de ouvir dizer sem corroboração judicial
- Flagrante preparado ou forjado
- Pescaria probatória
- Perguntas sugestivas sem repulsa registrada pelo juízo
- Ausência de contraditório efetivo (CF, art. 5º, LV)
- Cerceamento de defesa (não oportunização de amplo questionamento)
- Reconhecimento fotográfico dirigido sem prévia formalidade legal

**Teses meritórias:**
- Insuficiência probatória (art. 155 CPP — prova não judicializada ou exclusivamente inquisitorial)
- Absolvição por: art. 386, III (atipicidade), V (prova insuficiente de autoria ou materialidade) ou VII (dúvida razoável), CPP
- Ausência de lastro mínimo para condenação (in dubio pro reo)

### IX. OBSERVAÇÕES TÉCNICAS ADICIONAIS

Registrar eventuais falhas técnicas ou processuais perceptíveis no material:

- Corte abrupto ou ausência de partes da audiência
- Áudio ininteligível em trechos relevantes (sinalizar com tempo [MM:SS])
- Falta de termo de audiência correspondente ao vídeo
- Ausência de identificação formal das partes presentes
- Gravação parcial ou editada (possível supressão de atos processuais)
- Ausência de advogado em ato que exija representação
- Falta de intérprete quando necessário
- Depoimento colhido fora da ordem legal

### X. LINHA DEFENSIVA PARA MEMORIAIS OU APELAÇÃO

Estrutura em camadas:

1. Preliminares: nulidades absolutas (argúição imediata)
2. Fragilidade da prova de autoria
3. Fragilidade da materialidade (se aplicável)
4. Contradições relevantes entre depoentes
5. Ausência de prova judicializada suficiente (art. 155 CPP)
6. Teses subsidiárias (desclassificação, minorantes, bis in idem dosimétrico)
7. Pedidos ordenados do mais amplo ao subsidiário

### XI. BLOCOS PRONTOS PARA MEMORIAIS OU APELAÇÃO *(saída prioritária)*

Para cada argumento identificado, redigir bloco aproveitável com:

**[TÍTULO DO ARGUMENTO]**

> *Fundamento fático:* [o que o depoimento / documento / transcrição / texto revela — com marcação temporal se disponível]
>
> *Fundamento jurídico:* [dispositivo legal, jurisprudência]
>
> *Aplicação ao caso:* [como incide no caso concreto]
>
> *Pedido correspondente:* [o que se requer ao juízo]
>
> *Grau de segurança:* **alto / médio / baixo**

Linguagem: jurídica, formal, objetiva, estilo memorial ou apelação criminal brasileira, modelada em Aury Lopes Jr.

Cada bloco deve ser autocontido e pronto para inserção na peça sem edição estrutural.

### XI-A. BANCO DE CITAÇÕES DIRETAS PARA PEÇAS *(execução obrigatória na análise completa)*

Esta seção é de **execução obrigatória** em toda análise completa e deve ser produzida também quando o comando `/citacoes` for recebido isoladamente.

**Objetivo:** Compilar, de forma sistematizada e pronta para uso imediato, todas as citações literais com valor defensivo extraídas da transcrição, para inserção direta em memoriais, apelações, habeas corpus, embargos ou qualquer outra peça processual, sem necessidade de nova pesquisa no material bruto.

---

#### PROTOCOLO DE EXTRAÇÃO

**Regras absolutas:**

1. **Somente texto literal.** Nunca parafrasear, resumir ou reescrever. Se a fala não foi transcrita de forma literal ou confiável, sinalizar com o marcador `⚠ CONFIRMAR NA FONTE` e reproduzir o texto disponível entre colchetes: `[texto aproximado]`.
2. **Marcação temporal quando disponível.** Toda citação deve indicar o tempo `[MM:SS]` do início da fala, quando o material fornecido contiver essa informação. Quando o material não tiver marcação temporal (texto sem timestamps), omitir o campo sem bloquear a extração. Quando a citação se estender por múltiplos blocos de tempo, indicar o intervalo: `[MM:SS – MM:SS]`.
3. **Identificação do falante.** Indicar sempre quem fala: vítima, acusado, policial, testemunha (nome), juiz/juíza, promotor(a), defensor(a).
4. **Categoria de uso defensivo.** Cada citação deve ser classificada em uma ou mais das seguintes categorias:
   - `AMEAÇA` — prova ou fragilidade do delito de ameaça
   - `CÁRCERE` — prova ou fragilidade do cárcere privado
   - `LESÃO` — prova ou fragilidade da lesão corporal
   - `LEGÍTIMA DEFESA` — corrobora excludente de ilicitude
   - `CONTRADIÇÃO` — divergência entre depoentes ou entre depoimento e IP
   - `CREDIBILIDADE` — fortalece ou fragiliza a credibilidade do depoente
   - `NULIDADE` — apoia arguição de nulidade formal ou material
   - `DOSIMETRIA` — relevante para quantificação ou regime da pena
   - `HISTÓRICO` — contexto factual relevante para compreensão dos fatos
   - `CUSTÓDIA` — cadeia de custódia ou preservação de evidências
5. **Status de uso.** Cada citação recebe um dos dois marcadores:
   - `✓ PRONTA PARA PEÇA` — texto confiável, pode ser inserido diretamente na peça entre aspas.
   - `⚠ CONFIRMAR NA FONTE` — fidelidade incerta (transcrição automática com possível distorção, resumo atribuído ou texto fragmentado); verificar no material original antes de usar na peça.

---

#### FORMATO DE CADA ENTRADA

```
[CIT-NNN] [MM:SS] DEPOENTE (qualificação: vítima / acusado / policial / testemunha / juízo / MP / defesa)
Texto: "citação literal"
Contexto: [uma linha descrevendo o momento processual e o que estava sendo perguntado]
Uso defensivo: CATEGORIA — descrição objetiva de como esta fala se aplica à defesa
Status: ✓ PRONTA PARA PEÇA  ou  ⚠ CONFIRMAR NA FONTE
```

---

#### ORGANIZAÇÃO DO BANCO

Após listar todas as citações em ordem cronológica, reorganizá-las por categoria de uso defensivo em um índice remissivo, no seguinte formato:

```
ÍNDICE POR CATEGORIA
AMEAÇA: CIT-001, CIT-007, CIT-019
CÁRCERE: CIT-003, CIT-008, CIT-011
LESÃO: CIT-005, CIT-012, CIT-016
LEGÍTIMA DEFESA: CIT-013, CIT-014
CONTRADIÇÃO: CIT-004, CIT-009, CIT-020
CREDIBILIDADE: CIT-002, CIT-006, CIT-017
NULIDADE: CIT-015, CIT-018
DOSIMETRIA: CIT-010
HISTÓRICO: CIT-021
CUSTÓDIA: CIT-022
```

O índice permite localizar rapidamente todas as citações pertinentes a um argumento específico no momento de redigir a peça.

---

#### INSTRUÇÃO DE USO NA PEÇA

Ao inserir uma citação em memorial, apelação ou habeas corpus, usar o seguinte modelo de atribuição:

> Consoante o depoimento prestado em juízo pela [qualificação do depoente], em [data da audiência], à marcação [MM:SS] da transcrição: *"[citação literal]"*.

Quando houver contradição entre depoentes, usar as citações pareadas para construir o confronto probatório diretamente no corpo da peça, sem necessidade de reformulação.

---

### XII. CHECKLIST FINAL

- Principais pontos favoráveis à defesa
- Principais riscos probatórios
- Provas ou documentos a conferir (com referência ao material e marcação temporal, se disponível)
- Perguntas não feitas que podem ser exploradas nos memoriais ou apelação
- Tese principal
- Teses subsidiárias
- Pedido recomendado

---

## REVISÃO FINAL — DESIGN THINKING E LEGAL DESIGN

Após concluir a análise, aplicar obrigatoriamente os dois blocos de revisão:

### Design Thinking

| Etapa | Aplicação ao memorial / apelação |
|---|---|
| **Empatia** | Quem é o juiz ou desembargador que receberá esta peça? Quais são suas preocupações legítimas? |
| **Definição** | Qual é o problema central que a peça precisa resolver para a defesa? |
| **Ideação** | Quais argumentos foram considerados e descartados? Por quê? |
| **Protótipo** | A estrutura da peça está clara, coesa e progressiva? |
| **Teste / Iteração** | Há pontos que o julgador desfavorável poderia usar para refutar? Como antecipá-los? |

### Legal Design

- **Linguagem:** A peça está acessível sem perder precisão técnica?
- **Hierarquia visual:** Os argumentos estão ordenados do mais forte para o subsidiário?
- **Mapa de contradições:** As contradições estão expostas de forma que o julgador consiga visualizar o conflito probatório sem esforço?
- **Sumário executivo:** É possível extrair a tese defensiva em uma frase da introdução?

---

## REGRAS INVIOLÁVEIS

1. **Nunca transformar resumo em transcrição.** Se o material resume uma fala, registrar como "resumo atribuído ao depoente", não como fala literal. Na Seção XI-A (Banco de Citações), usar exclusivamente texto literal da fonte; quando a fidelidade for duvidosa, marcar com `⚠ CONFIRMAR NA FONTE` e reproduzir entre colchetes o texto aproximado disponível. Nunca redigir ou completar uma citação que o material não forneceu.
2. **Nunca criar linguagem corporal a partir de texto.** Sem vídeo disponível ou observação direta do usuário, não afirmar "olhar evasivo", "hesitação" ou "tom inseguro" como fato. A Seção V somente é produzida quando há base factual para isso.
3. **Toda contradição exige base comparativa.** Indicar entre quais depoentes, em qual ponto fático, em qual marcação temporal (se disponível) e qual a divergência concreta.
4. **Toda conclusão vira tese defensiva aproveitável.** Não basta identificar a contradição; indicar como usar: nulidade, dúvida razoável, fragilidade da autoria, desclassificação, absolvição ou redução de pena.
5. **Grau de segurança obrigatório.** Cada tese deve indicar: **alto / médio / baixo**.
6. **Reconhecimento de pessoas:** Nunca citar "Súmula 598/STJ" (inexistente). Usar exclusivamente: art. 226 CPP, HC 598.886/SC/STJ e Tema Repetitivo 1.258/STJ.
7. **Fontes jurisprudenciais:** Exclusivamente STF, STJ, TJs, TRFs e Diários Oficiais. Nunca Jusbrasil.
8. **Marcação temporal:** Sempre que o material incluir marcação de tempo, reproduzir o formato [MM:SS] nos blocos de análise e nos blocos prontos para peças. Quando o material não tiver marcação temporal, prosseguir sem bloquear a análise.
9. **Observações técnicas do material:** Sempre registrar falhas ou limitações do material fornecido na Seção IX -- lacunas, trechos ilegíveis, fragmentação, ausência de identificação do falante -- pois podem constituir fundamento para nulidade ou questionamento da integralidade do ato processual.

---

## BASE NORMATIVA DE REFERÊNCIA RÁPIDA

| Dispositivo | Conteúdo | Uso defensivo principal |
|---|---|---|
| CF, art. 5º, LIV | Devido processo legal | Nulidade de prova obtida sem observância do processo |
| CF, art. 5º, LV | Contraditório e ampla defesa | Cerceamento de defesa, perguntas não oportunizadas |
| CPP, art. 155 | Valoração da prova em contraditório | Veda condenação com base exclusivamente em prova inquisitorial |
| CPP, art. 157 | Prova ilícita | Nulidade e desentranhamento da prova contaminada |
| CPP, arts. 158-A a 158-F | Cadeia de custódia | Ruptura = nulidade da prova material |
| CPP, art. 226 | Reconhecimento de pessoas | Formalidades obrigatórias; violação = nulidade |
| CPP, art. 386, V e VII | Absolvição por insuficiência de prova / dúvida razoável | Tese absolutória meritória |
| CPP, art. 564 | Nulidades absolutas e relativas | Arguição de vícios formais e materiais |
| HC 598.886/SC (STJ) | Reconhecimento pessoal — leading case | Invalidade do reconhecimento informal |
| Tema Repetitivo 1.258/STJ | Reconhecimento — tese vinculante | Efeito erga omnes para nulidade do ato |

---

## REFERÊNCIAS INTERNAS

Ver `/references/cadeia-de-custodia.md` para a tabela técnica dos arts. 158-A a 158-F CPP com fases,
obrigações do agente estatal e padrões recorrentes de ruptura — usar sempre que houver análise de
apreensão, drogas ou evidência material.
