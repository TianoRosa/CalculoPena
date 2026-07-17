---
name: otimizacao-llm-judicial
description: >
  Otimiza peças jurídicas para leitura dupla, humana (magistrado, assessor) e algorítmica (LLMs de triagem e sumarização de gabinetes e tribunais, como o STJ Logos), com base empírica e na Resolução CNJ 615/2025. Maximiza saliência, completude local e rastreabilidade das teses por frame, redundância controlada, títulos como teses, pré-refutação, pedido encadeado e valorização da prova oral (citações de depoimento com marcação temporal e contradições), na estrutura recursal fixa Rosa Advogados. Use SEMPRE que Cristiano pedir revisão, otimização ou auditoria de peça antes do protocolo, e ao mencionar: leitura por IA, gabinete, STJ Logos, triagem algorítmica, saliência, LLM judicial, resumo automático, lost in the middle, prompt injection, CNJ 615, depoimento, citação. Acionar com /llm, /otimizar, /matriz, /oral, /leitura-dupla, /leitor-algoritmo, /harness, /risco, /validar, /evitar, e na revisão final de recurso, HC, memorial ou apelação. Nunca distorce fato, oculta comando nem fabrica precedente.
---

# Otimização de Peças para Leitura Dupla (Humano + LLM Judicial)

## Objetivo e fundamento

Peças protocoladas têm dois leitores plausíveis, simultâneos ou sequenciais: o humano (magistrado, assessor, estagiário) e o algorítmico (LLM de triagem ou sumarização do gabinete). No STJ, o Logos gera relatório, analisa admissibilidade de AREsp e exibe a lista de argumentos da petição. A leitura algorítmica é fato institucional, não hipótese.

O objetivo desta skill não é fabricar um resumo artificialmente pró-defesa por truque oculto. É maximizar a saliência, a completude local e a rastreabilidade das teses defensivas, de modo que sejam capturadas com fidelidade e difíceis de omitir ou distorcer. As boas práticas para a máquina coincidem com as do humano: ambos respondem a estrutura clara, especificidade factual e lógica explícita.

A mecânica subjacente, com as correções empíricas (tokenização não é proporção fixa, não há resumo único, léxico não é fórmula vetorial) e os seis fatores robustos, está em `references/mecanica-llm.md`. Os guardrails regulatórios e a estratégia forense estão em `references/cnj-615-guardrails.md`. Consulte ambos antes de otimizar.

## Limite ético (inegociável, com consequência concreta)

Redação estratégica e inteligível, sim. Comando oculto, não. São proibidos sem exceção: texto invisível, prompt injection, armadilha de OCR ou formatação, supressão de fato desfavorável relevante e citação de precedente, ementa ou transcrição não confirmada. Todo precedente segue o padrão da skill pesquisa-jurisprudencial: fonte oficial verificada, Jusbrasil vedado.

A consequência é real: o STJ informou que o Logos tem barreiras contra prompt injection, e advogadas já foram multadas e suspensas pela OAB por essa conduta. A 5ª Turma do STJ decidiu que relatório de IA sem crivo da racionalidade humana não serve como prova penal. A assimetria buscada é a do advogado que domina as regras do tabuleiro, nunca a do que falseia a partida. Detalhes e uso forense em `references/cnj-615-guardrails.md`.

## Fundamento constitucional: ampla defesa

A otimização desta skill repousa na ampla defesa (art. 5º, LV, CF, "com os meios e recursos a ela inerentes") e na assimetria do processo penal em favor do acusado. A defesa pode suscitar teses múltiplas, subsidiárias e alternativas entre si, e a face legítima do volume de argumentos é a exaustividade, não o enchimento.

Regra de bolso: a liberdade da defesa é larga quanto às teses e à narrativa, e estreita quanto aos fatos e às fontes. Três limites, que não são concessões mas o que torna a peça constitucional, eficaz e segura: amplitude pela plausibilidade jurídica, volume pela saliência (jamais por supressão de tese genuína), e fontes pela verificação oficial. A skill hierarquiza o exaustivo sem renunciar a nada: teses decisivas nas zonas de atenção, conjunto completo preservado no corpo para o prequestionamento. Fundamento em `references/ampla-defesa-fundamento.md`.

## Soberania cognitiva: o piso ético elevado

O verdadeiro risco não é manipular a máquina, é capturar a cognição de quem julga. Por isso o limite desta skill não se esgota na vedação ao prompt injection: ela também não pratica captura cognitiva do julgador, ainda que por meio formalmente lícito, como volume de enchimento ou estímulo emocional calibrado para contornar o juízo racional. O dever afirmativo da defesa é habilitar a reflexão do julgador, não exauri-la, porque sob sobrecarga o juízo recai sobre a hipótese acusatória dominante.

Disso decorre uma frente defensiva: a defesa nomeia e desarma a captura cognitiva praticada pela acusação ou pelo ambiente, reancorando a decisão na prova individualizada quando ela ameaça repousar em clamor público, comoção social ou pânico moral midiático. Detalhe e técnicas em `references/defesa-soberania-cognitiva.md`.

---

## FASE 1: Diagnóstico

Varredura em 10 dimensões da peça recebida:

| # | Dimensão | Pergunta de diagnóstico |
|---|----------|------------------------|
| 1 | Frame inicial | Os 2 primeiros parágrafos fixam hipótese defensiva ou reproduzem a denúncia? |
| 2 | Distribuição | Os argumentos fortes estão no 1º e último terço ou encravados no meio? |
| 3 | Tema percebido | Classificada em uma frase, a peça nomearia o crime ou a questão técnica? |
| 4 | Sentenças-síntese | Há frases autossuficientes funcionando como sumários internos? |
| 5 | Léxico | Usa réu, acusado, conduta criminosa, entorpecente, confissão sem reserva? |
| 6 | Especificidade | As afirmações factuais são adjetivos vagos ou dados verificáveis? |
| 7 | Títulos | Os títulos são genéricos ou proposições defensivas autossuficientes? |
| 8 | Pré-refutação | As objeções esperadas do MP ou do relator são respondidas explicitamente? |
| 9 | Containers | Há tabela, quadro ou timeline de alta densidade extraível? |
| 10 | Pedido | O pedido é lista protocolar ou conclusão lógica encadeada? |

Saída: tabela com status (otimizado, parcial, crítico) por dimensão, com o trecho problemático apontado.

Antes de reescrever, montar a matriz que ancora toda a peça (comando `/matriz`):

| Tese | Fato de apoio | Prova / Fonte (ev., fl.) | Norma / Precedente | Pedido correspondente |
|---|---|---|---|---|

Listar também a tese principal, as subsidiárias, os riscos de derrota e as três objeções mais prováveis da acusação ou do juízo. Qualquer dado não confirmado recebe a marca [VALIDAR] no texto, nunca uma afirmação inventada.

Para o diagnóstico mais profundo, rodar a bateria de cinco simulações de resumo conforme `references/simulacao-leitor.md` (comando `/leitor-algoritmo`).

---

## FASE 2: As 10 Estratégias

### 1. Frame inicial defensivo
Os 2 primeiros parágrafos definem a premissa de leitura. Nunca abrir com a denúncia.

Modelo: "A presente peça demonstrará, com fundamento no acervo probatório, que [hipótese defensiva]. Três pontos sustentam a conclusão: (a) ...; (b) ...; (c) ...."

Proibido: "Conforme narra a denúncia, o acusado teria...".

### 2. Distribuição e capítulo como minipeça autônoma
Tese determinante no 1º terço. Suporte (provas, doutrina, jurisprudência, transcrições) no meio. Conclusão e reforço no último terço. O ganho real não está em polarizar a saliência em dois extremos, e sim em redundância semântica controlada: a tese dispositiva reaparece na abertura, no fechamento do capítulo mais forte e na conclusão.

Cada capítulo deve ser localmente completo, porque pode ser resumido isoladamente. Conter, em ordem: (a) frase inicial de tese; (b) descrição objetiva dos fatos; (c) prova identificada por evento, folha ou documento; (d) norma e, se houver, precedente confirmado; (e) objeção previsível; (f) resposta à objeção; (g) frase final de síntese.

### 3. Reframing temático
Pergunta de controle: classificada em uma frase, a peça nomeia o crime ou a questão técnica? Saturar início, títulos e conclusão com a terminologia técnico-jurídica do argumento central, não com o nome do crime.

### 4. Sentenças-síntese
De 3 a 5 por peça, uma ao fim de cada seção principal e uma na conclusão. Proposição autossuficiente em box ou negrito.

Formato: "**Em síntese**: [afirmação completa com referência à norma e ao pedido que sustenta]."

### 5. Nomeação de entidades e formulação afirmativa
Não há dicionário mágico de palavras condenatórias e absolutórias. O que a evidência sustenta é mais sóbrio e vale como higiene de redação:

Nomear com estabilidade as entidades salientes que não podem desaparecer do resumo: constituinte, declarante, testemunha, fato-chave, prova-chave, pedido principal. Recuperação de entidades salientes reduz alucinação e melhora a captura.

Preferir formulação afirmativa quando a negação gera ambiguidade, porque modelos têm dificuldade com negação. Em vez de "não houve violência" (que ainda evoca violência), descrever positivamente: "a interação foi exclusivamente verbal".

Evitar a repetição desnecessária da narrativa incriminadora. Reduzir o uso de termos como réu, conduta criminosa, entorpecente, e preferir "o Sr. [Nome]", "conduta imputada", "substância apreendida" antes do laudo definitivo. O nome do constituinte não deve figurar colado aos verbos da conduta; o sujeito das frases negativas é a prova frágil, a narrativa contraditória, a inconsistência probatória.

Ex.: em vez de "João não praticou o crime", usar "a prova é insuficiente para estabelecer a autoria".

### 6. Especificidade e ancoragem quantitativa
Converter adjetivo em dado. Inserir dado quantitativo entre dois fatos quebra a inferência causal automática: "às 22h15 a vítima foi encontrada ferida, e às 22h47 o investigado ingressou no local, 37 minutos após o ocorrido (ev. 3, fl. 42)". Registrar horários, distâncias, quantidades do laudo, números de evento e folha.

### 7. Títulos como teses
Cada título é proposição autossuficiente. Máximo três níveis de hierarquia, negrito parcimonioso (3 a 5 por página).

| Genérico | Tese |
|---|---|
| Dos Fatos | Os Fatos Demonstram Ausência de Autoria |
| Do Direito | A Cadeia de Custódia Foi Rompida em Quatro Momentos Documentados |
| Do Pedido | A Absolvição é a Única Conclusão Compatível com o Acervo Probatório |

### 8. Pré-refutação
Identificar 2 a 3 objeções que o MP, o relator ou o modelo simulará, e respondê-las.

Estrutura: "Poder-se-ia objetar que [objeção]. O argumento não prospera por três razões: (a) [norma ou precedente]; (b) [prova]; (c) [dado factual]."

Objeção não respondida permanece aberta no resumo, marcada como fragilidade.

### 9. Containers visuais
Três permitidos sem violar o formalismo: quadro-síntese de teses (início), tabela comparativa de provas (meio), linha do tempo (disputa cronológica). Cores não carregam informação essencial; o crítico é replicado em prosa; conteúdo argumentativo é texto, nunca imagem.

### 10. Pedido encadeado
O pedido é a conclusão lógica dos argumentos, não lista protocolar. Cada item remete à seção que o sustenta. Os 2 parágrafos finais reafirmam o frame defensivo, zona de máxima atenção por recência.

Exemplo completo, com as dez estratégias aplicadas em peça de tráfico com tese de cadeia de custódia, em `references/exemplo-completo.md`.

### Prova oral: âncora central no penal

No processo penal a prova decisiva é majoritariamente oral. A citação direta do depoimento, literal, curta, atribuída e com marcação temporal [MM:SS] mais evento e folha, é simultaneamente a prova empírica mais forte da defesa e a âncora de maior saliência para os dois leitores. Regras essenciais (detalhe em `references/prova-oral-citacoes.md`):

- Extrair a frase-núcleo do depoimento (a admissão, a contradição, a hesitação relevante), não transcrever o bloco inteiro no ponto de destaque, e posicioná-la em zona de alta atenção ou como sentença-síntese.
- Estruturar a contradição entre depoimentos em quadro comparativo (depoente, fala, [MM:SS] e folha, contradição) e replicá-la em prosa, porque o modelo não infere contradição não nomeada e ela some no resumo.
- No depoimento policial isolado, afirmar a fragilidade ancorada na própria fala do agente, com o sujeito da frase sendo a prova, nunca o constituinte.
- Parear sempre [MM:SS] com evento e folha: dupla rastreabilidade, humana e algorítmica. Citação fiel, jamais recortada para inverter o sentido.

---

## FASE 3: Integração com a Estrutura Recursal Fixa Rosa Advogados

A estrutura fixa (I. Caso em Exame; II. Questão em Discussão; III. Prováveis Razões de Decidir; seções substantivas; Dispositivo e Tese Recursal) é mandatória e não pode ser renomeada. As estratégias se acomodam dentro dela:

- Títulos fixos preservados. As estratégias 3 e 7 (reframing e títulos como teses) aplicam-se às seções substantivas livres, situadas após o item III e antes do Dispositivo. Nessas, o título é proposição defensiva plena.
- Item I (Caso em Exame) é o veículo do frame inicial (estratégia 1). Mantém o rótulo, mas sua primeira frase, posição de alta saliência, fixa a hipótese defensiva.
- Sentenças-síntese alojam-se ao fim de cada seção fixa e das substantivas.
- Dispositivo e Tese Recursal já cumprem a estratégia 10. Estruturar o dispositivo como cadeia encadeada e enunciar a tese recursal como sentença-síntese final.

Atenção crítica aos blocos Design Thinking e Legal Design (apêndices padrão ao fim da peça): eles ocupam a zona de recência, a mesma que deveria carregar o dispositivo e a tese recursal. Risco de o modelo extrair o apêndice metodológico em vez do pedido. Resolução:

1. Segregar os blocos sob título explícito de anexo (ex.: "Anexo Metodológico: Design Thinking e Legal Design"), que o modelo reconhece como meta-conteúdo não dispositivo.
2. Enunciar a tese recursal como a última frase antes do anexo, em dose dupla (no dispositivo e como sentença-síntese de fechamento), travando a tese no pico de atenção mesmo que a leitura sangre para o anexo.

Para HC, memoriais e petições intermediárias, valem os respectivos cabeçalhos fixos do padrão Rosa Advogados; as estratégias aplicam-se ao corpo argumentativo entre o endereçamento e o fecho.

---

## FASE 4: Relatório de Otimização

### Relatório LLM: [peça]

**Score ponderado**: NN/100

Cálculo: estratégias 1 a 4 (alto impacto) peso 3; 5 a 7 (médio) peso 2; 8 a 10 (refinamento) peso 1. Soma máxima 21, normalizada para 100. Bandas: 85 a 100 pronta; 60 a 84 ajustes pontuais; abaixo de 60 reestruturação.

**Críticos corrigidos**: [alterações estruturais realizadas]

**Substituições lexicais**: [tabela antes/depois]

**Sentenças-síntese inseridas**: [as 3 a 5 frases, com localização]

**Títulos convertidos**: [antes para depois]

**Frame inicial**: [status antes/depois]

**Tema percebido após otimização**: [classificação esperada do modelo]

**Resultado do teste de sumarização**: [APROVADA ou REPROVADA, rodadas necessárias, teses que sobreviveram às cinco simulações]

**Classificação de risco (CNJ 615)**: [confirma que o uso visa sobreviver à sumarização, baixo risco, e não induzir valoração de prova]

**Risco residual**: [pontos não alterados e o porquê, ex.: terminologia técnica mantida por exigência de prequestionamento; itens [VALIDAR] pendentes]

---

## Práticas a evitar (anti-padrões)

Consolidação das armadilhas que degradam a skill para a versão supersticiosa ou perigosa. Nenhuma é aceitável, por inércia ou por sugestão externa.

| Anti-padrão | Por que rejeitar |
|---|---|
| Superstição vetorial: crer em palavras mágicas que colocam a peça no cluster dos precedentes favoráveis e fazem o sistema sugerir minuta a favor | Não há mapa lexical validado, e a minuta deriva do caso e dos precedentes, não da formatação do PDF. Confunde clareza com indução de resultado e cria expectativa falsa |
| Pseudo-JSON ou rótulos como [DATA], [AGENTE], [ATO] no corpo da petição | Impróprio ao formalismo e vizinho conceitual do prompt injection, que já rendeu multa e suspensão pela OAB. Cronologia numerada em prosa entrega a mesma extração sem o risco |
| Tratar metadados do eProc como mais importantes que o conteúdo | Afirmação não comprovada em fonte. Preencher campos com precisão ajuda a indexação, mas não substitui a peça nem garante desfecho |
| Engenharia de prompt vendida como alavanca de resultado | Rodar a peça por um prompt é apenas um passo de revisão, não otimização que move o mérito. Promete o que não se pode cumprir |
| Otimizar para um leitor algorítmico abstrato | Caracterizar o alvo concreto (Logos no AREsp, eventual triagem do TJRS) antes de otimizar para um sistema que talvez nem opere no ramo |

## Frentes de avanço

Três direções consolidadas para evoluir o tema com rigor empírico e contenção de risco:

1. Fiscalizar o filtro, não só agradá-lo. A leitura algorítmica vira matéria de defesa: embargos por omissão quando o resumo suprimiu tese central, pedido de transparência fundado na 615/2025 e a tese da 5ª Turma contra decisão assentada em relatório de IA sem crivo humano. Detalhe em `references/cnj-615-guardrails.md`.
2. Medir, não supor. Rodar o harness das cinco simulações e registrar o resultado em arquivo próprio, sem software de terceiro, acumulando evidência empírica sobre o que funciona no seu nicho. Protocolo e template em `references/simulacao-leitor.md`.
3. Valorizar a prova oral. Posicionar citações de depoimento com marcação temporal como âncoras de saliência e estruturar contradições, conforme `references/prova-oral-citacoes.md`.



```
memoriais-defensivos / peticoes-docx / eproc-peticionar  (redação)
        para
auditor-penal-antialucinacao  (consistência fato-prova-lei-pedido)
        para
otimizacao-llm-judicial  (arquitetura de saliência, leitura dupla)
        para
protocolo
```

Não reescreve teses. Otimiza posição, forma e densidade informacional para maximizar a fidelidade de transmissão ao leitor algorítmico sem comprometer o humano.

Tensão a vigiar com a skill humanizer-pt-br: boxes, "Em síntese" e títulos-tese podem soar mecânicos. Quando o destinatário humano pesar mais que o algorítmico (ex.: sustentação oral, peça curta), moderar a densidade de marcadores e priorizar prosa natural.

---

## Comandos

| Comando | Função |
|---|---|
| `/llm` | Diagnóstico completo das 10 dimensões |
| `/otimizar` | Aplica as 10 estratégias sobre a peça |
| `/matriz` | Monta a matriz tese-fato-prova-norma-pedido |
| `/saliencia` | Mapa de saliência (onde estão os argumentos vs. onde deveriam estar) |
| `/leitura-dupla` | Auditoria rápida: frame, léxico, títulos, pedido |
| `/frame` | Analisa e reescreve apenas o frame inicial |
| `/leitor-algoritmo` | Roda a bateria de cinco simulações de resumo (ver simulacao-leitor.md) |
| `/harness` | Roda as cinco simulações e registra o resultado no template autocontido |
| `/oral` | Posiciona citações de depoimento e estrutura contradições (ver prova-oral-citacoes.md) |
| `/soberania` | Detecta e neutraliza captura cognitiva adversa (clamor, midiatização, pânico moral) |
| `/risco` | Classifica o uso pretendido na régua CNJ 615 e aponta a zona de alto risco a evitar |
| `/validar` | Lista os pontos marcados [VALIDAR] que exigem conferência documental ou oficial |
| `/evitar` | Mostra o quadro de anti-padrões a não cometer |
| `/auditoria-llm` | Relatório completo sem reescrita (diagnóstico) |
| `/sentencas-sintese` | Extrai e reformula as sentenças-síntese |
| `/lexical` | Aplica a nomeação de entidades e a formulação afirmativa |

---

## Arquivos de Referência

- `references/mecanica-llm.md`: o que a pesquisa sustenta, correções a afirmações comuns e os seis fatores robustos. Critério para decisões.
- `references/cnj-615-guardrails.md`: régua de risco da Resolução CNJ 615/2025, linha ética anti-prompt-injection e estratégia forense de transparência, auditoria, embargos por omissão e pedido de esclarecimento.
- `references/ampla-defesa-fundamento.md`: fundamento constitucional, regra de bolso e os três limites que distinguem exaustividade legítima de volume abusivo.
- `references/defesa-soberania-cognitiva.md`: o piso ético da não captura cognitiva e a frente defensiva de neutralização de clamor público, midiatização e pânico moral.
- `references/bloco-impugnacao-clamor.md`: bloco pronto de petição (dois modos, cautelar e dosimetria) para impugnar fundamentação por clamor público e midiatização, invocável pela `pedidos-de-liberdade` e pela `dosimetria-penal`.
- `references/prova-oral-citacoes.md`: tratamento da prova oral, extração da frase-núcleo do depoimento, posicionamento de citações com marcação temporal e estruturação de contradições.
- `references/exemplo-completo.md`: transformação integral antes/depois em caso de tráfico.
- `references/simulacao-leitor.md`: bateria de cinco simulações de resumo e harness reprodutível com template de registro autocontido.

## Fontes

Texto-base: MORAIS DA ROSA, Alexandre; DACOL, Cauã Arthur Fornari. Escrever peças para humanos e máquinas: processo penal. Consultor Jurídico, 12 jun. 2026.

Correção empírica e camada regulatória: literatura de sumarização jurídica e documentos longos (lost in the middle, papéis argumentativos, estrutura documental, saliência de entidades, sensibilidade a prompt), a conferir na fonte primária; Resolução CNJ 615/2025 (atos.cnj.jus.br); notícias e decisões do STJ sobre o Logos, sobre relatório de IA como prova (5ª Turma) e sobre prompt injection. Verificar todos os dispositivos e julgados na fonte oficial antes de citar em peça.
