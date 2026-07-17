---
name: pedidos-de-liberdade
description: >
  Skill de análise e redação de pedidos de liberdade no processo penal brasileiro: relaxamento,
  liberdade provisória, revogação de preventiva, HC repressivo e preventivo, salvo-conduto,
  prisão domiciliar, prisão temporária e substituição por cautelares. Acionar com /liberdade,
  /hc, /preventiva, /flagrante, /relaxamento, /revogacao, /cautelar, /soltura, /prisao,
  /temporaria, /domiciliar, /salvo-conduto, /hc-preventivo. Acionar também ao mencionar:
  audiência de custódia, ingresso domiciliar, denúncia anônima, copy-paste de decisão,
  art. 312 CPP, art. 315 §2º CPP, art. 316 §único CPP, revisão periódica de preventiva,
  mãe presa, gestante presa, idoso preso, enfermo preso, excesso de prazo, RESE contra prisão,
  prisão ilegal, prisão como ultima ratio, ou qualquer situação em que a liberdade do acusado
  esteja em discussão — mesmo sem terminologia exata.
---

# Skill — Pedidos de Liberdade (Processo Penal Brasileiro)

## Protocolo de Execução

Ao ser acionada, esta skill executa sequencialmente as etapas abaixo.
**Não pular etapas. Não confirmar antes de executar. Produzir a peça completa ao final.**
Se algum dado estiver ausente, assumir a hipótese mais favorável à defesa e sinalizar
a lacuna no bloco de observações finais.

---

## ETAPA 0 — COLETA E TRIAGEM DE DADOS

Verificar se os dados abaixo foram fornecidos. Se não, solicitar TODOS de uma vez:

| Campo | Observação |
|---|---|
| Tipo de prisão | flagrante / preventiva / temporária / definitiva |
| Data da prisão | DD/MM/AAAA |
| Fundamentação da decisão judicial | transcrever ou resumir |
| Fatos imputados | narrativa do caso |
| Tipificação penal | artigo(s) e lei(s) |
| Audiência de custódia | realizada / não realizada / data |
| Primariedade | sim / não |
| Residência fixa | sim / não / endereço |
| Ocupação lícita | sim / não / qual |
| Antecedentes criminais | sim / não / quais |
| Provas existentes | descrever ou indicar ausência |
| Circunstâncias da abordagem | ex: ingresso domiciliar, denúncia anônima |
| Ilegalidades processuais identificadas | se houver |
| Fase/andamento processual | IP / ação penal / instrução / etc. |
| Tribunal destinatário | TJRS / STJ / STF ou juízo de 1º grau |
| Vulnerabilidades pessoais | gestante / mãe / idoso / enfermo / pai único |

---

## ETAPA 1 — CLASSIFICAÇÃO JURÍDICA DO PEDIDO

Identificar automaticamente o(s) instrumento(s) cabíveis, com hierarquia de urgência:

### Matriz de Classificação

| Situação | Instrumento Principal | Fundamento |
|---|---|---|
| Prisão em flagrante ilegal | Relaxamento | art. 5º, LXV, CF; art. 310, I, CPP |
| Flagrante legal sem necessidade de preventiva | Liberdade provisória c/c cautelares | art. 310, III, CPP |
| Preventiva sem fundamento legal | Revogação | art. 316, CPP |
| Preventiva com ilegalidade flagrante | Habeas Corpus repressivo | art. 5º, LXVIII, CF |
| Risco iminente de prisão ainda não efetivada | HC preventivo / salvo-conduto | art. 5º, LXVIII, CF |
| Qualquer prisão com constrangimento ilegal | Habeas Corpus | art. 5º, LXVIII, CF |
| Preventiva desproporcional | Substituição por cautelares | art. 319, CPP |
| Prisão temporária com prazo expirado | Relaxamento por excesso de prazo | Lei 7.960/89, arts. 2º e 3º |
| Réu idoso / gestante / mãe / enfermo / pai único | Prisão domiciliar | arts. 317–318, CPP; HC 143.641/STF |
| Decisão que denega liberdade provisória | RESE | art. 581, V, CPP |

**Regra:** quando houver ilegalidade formal ou material, preferir HC concomitante ao pedido
ordinário para garantir cognição célere.

**Saída desta etapa:** declarar expressamente qual(is) instrumento(s) será(ão) utilizado(s)
e o motivo da escolha.

---

## ETAPA 2 — ANÁLISE DA LEGALIDADE DA PRISÃO

### 2.1 Legalidade Formal

Verificar:
- Existência e validade do mandado (se preventiva/temporária)
- Requisitos do art. 302 CPP (flagrante: próprio, impróprio, ficto/presumido)
- Lavratura e apresentação do APF (art. 304 CPP)
- Comunicação ao juiz em 24h (art. 306 CPP)
- Audiência de custódia em 24h (Res. CNJ 213/2015; art. 310, caput, CPP — L. 13.964/2019)
- Competência da autoridade policial/judicial

### 2.2 Legalidade Material

Verificar:
- Justa causa (prova da materialidade + indícios de autoria)
- Tipicidade da conduta; possibilidade de atipicidade ou excludente aparente
- Prova do crime e indícios suficientes de autoria (art. 312 §1º CPP)

### 2.3 Teses de Nulidade — Verificação Automática

Para cada item, indicar "PRESENTE", "AUSENTE" ou "VERIFICAR":

| Tese | Fundamento |
|---|---|
| Ingresso domiciliar sem mandado ou consentimento válido | art. 5º, XI, CF; Tema 280/STF (ARE 1.042.075/RG); HC 598.886/SC STJ |
| Denúncia anônima não corroborada por diligências | STJ: RHC 83.501, HC 512.047 |
| Ausência / ruptura da cadeia de custódia | arts. 158-A a 158-F CPP; HC 598.886 STJ |
| Prova ilícita e teoria dos frutos da árvore envenenada | art. 157 CPP; art. 5º, LVI, CF |
| Flagrante preparado / provocado | Súmula 145/STF |
| Ausência de audiência de custódia | Res. CNJ 213/2015; art. 310 CPP |
| Nulidade do auto de prisão em flagrante | arts. 304–306 CPP |
| Decisão fundamentada por cópia (copy-paste) | art. 315 §2º CPP (L. 13.964/2019) — NULIDADE ABSOLUTA |
| Preventiva sem revisão a cada 90 dias | art. 316 §único CPP — constrangimento ilegal automático |

Para ilegalidades PRESENTES: desenvolver argumentação completa com jurisprudência oficial.

---

## ETAPA 3 — ANÁLISE DA PRISÃO PREVENTIVA (QUANDO APLICÁVEL)

### 3.1 Garantia da Ordem Pública

Checklist de fundamentação indevida — verificar se a decisão usa:
- [ ] Gravidade abstrata do crime
- [ ] Clamor público ou repercussão midiática
- [ ] Periculosidade presumida
- [ ] Reiteração criminosa sem base fática concreta
- [ ] Copy-paste de decreto anterior (art. 315 §2º CPP — NULIDADE)
- [ ] Ausência de contemporaneidade (art. 312 §2º CPP — fato deve ser recente)

Se qualquer item acima for identificado: **TESE DE NULIDADE POR FUNDAMENTAÇÃO GENÉRICA.**

### 3.2 Conveniência da Instrução / Aplicação da Lei Penal

Verificar risco real e concreto (não abstrato) de: destruição de provas, ameaça a testemunhas,
fuga do distrito da culpa, vínculos internacionais, patrimônio no exterior.

### 3.3 Contemporaneidade — OBRIGATÓRIO (art. 312 §2º CPP)

Verificar se os fatos motivadores são contemporâneos.
Precedente: STJ, HC 590.039/SP — ausência de contemporaneidade invalida a preventiva.

### 3.4 Revisão Periódica — OBRIGATÓRIO (art. 316 §único CPP)

**Verificar obrigatoriamente:** o juiz revisou a necessidade da preventiva a cada 90 dias?
Se não houver revisão documentada dentro do prazo: **CONSTRANGIMENTO ILEGAL AUTÔNOMO**,
independente de outros fundamentos. Funda HC imediato com pedido liminar.

---

## ETAPA 3-A — PRISÃO TEMPORÁRIA (QUANDO APLICÁVEL — Lei 7.960/89)

Regime jurídico próprio — aplicar quando a prisão for decretada com base na Lei 7.960/89:

### Prazos Máximos

| Tipo de Crime | Prazo Inicial | Prorrogação | Total Máximo |
|---|---|---|---|
| Crimes comuns do art. 1º, Lei 7.960/89 | 5 dias | + 5 dias | 10 dias |
| Crimes hediondos e equiparados (Lei 8.072/90) | 30 dias | + 30 dias | 60 dias |

**Verificar:** a prorrogação foi decretada antes do término do prazo inicial? Houve nova
fundamentação autônoma ou simples renovação automática (ilegal)?

### Cabimento — Triplo Requisito Alternativo (art. 1º, Lei 7.960/89)

Verificar se a decretação fundamentou ao menos um dos incisos:
- I: imprescindível para investigações do IP
- II: imputado sem residência fixa ou sem identificação certa
- III: indícios de autoria/participação nos crimes do art. 1º, III

**Tese:** a prisão temporária decretada sem indicação de qualquer dos três requisitos
alternativos é ilegal e enseja relaxamento imediato.

### Conversão em Preventiva

A conversão automática de temporária em preventiva ao término do prazo é ilegal — exige
nova decisão com fundamentação autônoma nos termos do art. 312 CPP.
Precedente: STJ, HC 558.247/SP.

---

## ETAPA 3-B — HC PREVENTIVO / SALVO-CONDUTO (QUANDO APLICÁVEL)

Cabível quando: (a) há mandado de prisão expedido ainda não cumprido; (b) há risco iminente
e concreto de prisão sem justa causa; (c) cliente será ouvido e há risco de prisão em flagrante
ou preventiva decretada na audiência.

### Estrutura específica do HC preventivo

1. Demonstrar o risco concreto e iminente de constrangimento ilegal
2. Indicar a ilegalidade que tornaria a prisão iminente ilegítima
3. Requerer salvo-conduto com efeito imediato (liminar) para que o paciente não seja preso
4. Pedir ao final a confirmação do writ com declaração de ilegalidade da prisão futura

**Distinção:** o HC preventivo não exige prisão consumada — exige apenas ameaça concreta
à liberdade de locomoção (art. 5º, LXVIII, CF, parte final).

---

## ETAPA 4 — PRISÃO DOMICILIAR (QUANDO APLICÁVEL — arts. 317–318 CPP)

Verificar obrigatoriamente a presença de qualquer das hipóteses do art. 318 CPP:

| Hipótese | Fundamento | Precedente |
|---|---|---|
| Maior de 80 anos | art. 318, I, CPP | STJ, HC 512.285 |
| Extremamente debilitado por doença grave | art. 318, II, CPP | STJ, RHC 97.876 |
| Gestante | art. 318, IV, CPP | HC 143.641/STF |
| Mulher com filho até 12 anos incompletos | art. 318, V, CPP | HC 143.641/STF |
| Homem, pai único responsável por filho até 12 anos | art. 318, VI, CPP | STJ, HC 500.499 |
| Pessoa com deficiência sob dependência do preso | art. 318, III, CPP | STJ, HC 471.386 |

**HC 143.641/STF:** substituição de preventiva por domiciliar para todas as mulheres presas
com filhos de até 12 anos ou deficientes, salvo crimes com violência ou grave ameaça.
Precedente de força expansiva — aplicar sempre que houver enquadramento.

---

## ETAPA 5 — CONDIÇÕES PESSOAIS FAVORÁVEIS (SUBJETIVAS)

Construir quadro favorável com base nos dados fornecidos:

| Condição | Status | Valor Jurídico |
|---|---|---|
| Primariedade | | Nega periculosidade e reiteração |
| Residência fixa | | Nega risco de fuga |
| Ocupação lícita | | Demonstra responsabilidade social |
| Bons antecedentes | | Nega personalidade voltada ao crime |
| Vínculos familiares | | Nega fuga e demonstra enraizamento |

**Jurisprudência obrigatória:**
- Ultima ratio: STF, HC 187.371/SP; STJ, RHC 136.708
- Presunção de inocência: art. 5º, LVII, CF; art. 8.2, CADH; STF, ADC 43/44/54
- Condições favoráveis afastam preventiva: STJ, HC 612.874; HC 571.592

---

## ETAPA 6 — MEDIDAS CAUTELARES DIVERSAS DA PRISÃO (art. 319 CPP)

| Medida | Artigo | Indicação |
|---|---|---|
| Comparecimento periódico em juízo | 319, I | Padrão — sempre incluir |
| Proibição de acesso a lugares | 319, II | Quando há vítima/local específico |
| Proibição de contato com pessoas | 319, III | Risco a testemunhas/vítima |
| Proibição de ausentar-se da cidade | 319, IV | Risco de fuga |
| Recolhimento domiciliar noturno | 319, V | Vínculo familiar/emprego |
| Suspensão de função pública | 319, VI | Servidores públicos |
| Internação provisória | 319, VII | Inimputáveis/semi-imputáveis |
| Fiança | 319, VIII | Quando cabível e adequada |
| Monitoração eletrônica | 319, IX | Substituta eficaz para casos de médio risco |

**Fundamento:** proporcionalidade (necessidade, adequação, proporcionalidade em sentido
estrito). STF, HC 191.474; STJ, RHC 140.516.

---

## ETAPA 7 — JURISPRUDÊNCIA OBRIGATÓRIA (FONTES EXCLUSIVAMENTE OFICIAIS)

### STF
- **Tema 280/RG (ARE 1.042.075):** ingresso domiciliar exige fundadas razões, mandado ou consentimento
- **Súmula Vinculante 11:** uso de algemas
- **ADC 43/44/54:** presunção de inocência até o trânsito em julgado
- **HC 187.371/SP:** fundamentação genérica não sustenta preventiva
- **HC 143.988/ES:** ausência de contemporaneidade invalida preventiva
- **HC 143.641:** prisão domiciliar para mães com filhos até 12 anos

### STJ
- **Súmula 444:** vedação de agravamento pela só gravidade abstrata
- **HC 598.886/SC:** cadeia de custódia e ingresso domiciliar ilegal
- **RHC 83.501:** denúncia anônima exige corroboração
- **HC 590.039/SP:** contemporaneidade como requisito da preventiva
- **HC 558.247/SP:** ilegalidade da conversão automática de temporária em preventiva
- **RHC 136.708:** condições pessoais favoráveis e ultima ratio
- **HC 612.874:** primariedade e residência fixa como fundamentos para revogação

### Legislação de Referência
- art. 5º, XI, LV, LVI, LVII, LXV, LXVIII, CF
- arts. 282, 310, 312, 312 §1º, 312 §2º, 313, 315, 315 §2º, 316, 316 §único, 317, 318, 319, 321 CPP
- arts. 158-A a 158-F CPP
- Res. CNJ 213/2015; Lei 7.960/89; Lei 8.072/90 art. 2º §4º; Lei 13.964/2019

---

## ETAPA 8 — ANÁLISE JURIMÉTRICA E ALINHAMENTO TJRS

### 8.1 Grau de Viabilidade

| Nível | Critério |
|---|---|
| **ALTO** | Ilegalidade formal ou material clara; copy-paste (art. 315 §2º); sem revisão em 90 dias (art. 316 §único); sem audiência de custódia; ingresso domiciliar sem mandado; hipótese de domiciliar não aplicada |
| **MÉDIO** | Condições pessoais favoráveis sem ilegalidade evidente; preventiva desproporcional com fundamentação mínima |
| **BAIXO** | Crime grave, réu reincidente, fundamentação concreta, provas sólidas sem nulidades |

### 8.2 Padrões TJRS por Câmara Criminal

- **3ª Câmara Criminal:** linha mais garantista; receptiva a teses de nulidade processual e cadeia de custódia
- **1ª e 2ª Câmaras:** postura mais conservadora em tráfico e roubo
- **Tendência pós-Pacote Anticrime:** TJRS tem aplicado o art. 315 §2º com rigor crescente; HC 143.641 tem sido expandido além do enunciado literal

### 8.3 Risco Processual

- Risco de nova preventiva após concessão da liberdade
- Risco de cautelares mais gravosas
- Risco de não concessão de efeito suspensivo

---

## ETAPA 9 — CAMINHO RECURSAL PÓS-NEGATIVA

Se o pedido for negado, acionar automaticamente a via recursal adequada:

| Decisão negada | Recurso cabível | Prazo | Fundamento |
|---|---|---|---|
| Liberdade provisória negada pelo juiz | RESE | 5 dias | art. 581, V, CPP |
| HC negado pelo TJRS | HC no STJ | Imediato | art. 105, I, c, CF |
| Liminar de HC negada no TJRS | Agravo Regimental | RITJRS | Imediato |
| HC negado pelo STJ | HC no STF | Imediato | art. 102, I, i, CF |
| Liminar negada no STJ | Agravo Regimental | 5 dias | art. 258 RISTJ |

**Regra de ouro:** HC não tem prazo — pode ser impetrado a qualquer tempo enquanto
subsistir o constrangimento ilegal. RESE tem prazo preclusivo de 5 dias (art. 586 CPP).

---

## ETAPA 10 — ESTRUTURAÇÃO DA PEÇA E REVISÃO FINAL

### 10.1 Estrutura Fixa

```
I.   CASO EM EXAME
II.  QUESTÃO EM DISCUSSÃO
III. RAZÕES DE DECIDIR
     A. [Ilegalidades formais, se houver]
     B. [Ilegalidades materiais, se houver]
     C. [Ausência dos requisitos do art. 312 CPP, se preventiva]
     D. [Condições pessoais favoráveis]
     E. [Proporcionalidade — cautelares como alternativa]
IV.  DISPOSITIVO E TESE JURÍDICA
```

### 10.2 Tese Defensiva Central

```
TESE PRINCIPAL: [Uma frase objetiva que sintetiza o fundamento central]

TESES SUBSIDIÁRIAS (em ordem de força):
1. [Tese subsidiária mais forte]
2. [Segunda subsidiária]
3. [Terceira subsidiária, se houver]

ESTRATÉGIA DE REFORÇO:
[Como as teses se complementam e se reforçam mutuamente]
```

### 10.3 Padrão de Formatação Rosa Advogados

- Times New Roman ou Arial 12pt; corpo justificado; recuo 2,5cm
- Espaçamento 1,5; 0pt entre parágrafos; margens ABNT (sup 3 / inf 2 / esq 3 / dir 2)
- Títulos: negrito, caixa alta, centralizado, sem recuo
- Assinatura: CRISTIANO DA ROSA / Advogado — OAB/RS 78.652 / (51) 98122-0776

### 10.4 Cabeçalho HC (ordem obrigatória)

1. Endereçamento ao TJRS (ou STJ/STF)
2. Processo de origem
3. Paciente qualificado em parágrafo único
4. Impetrante: CRISTIANO DA ROSA, Advogado, OAB/RS 78.652, Av. Protásio Alves, 654, Ed. Normandie, loja 02, Porto Alegre/RS, 90410-004, tel. 51 981220776
5. Autoridade coatora
6. Título: HABEAS CORPUS COM PEDIDO LIMINAR

### 10.5 Design Thinking e Legal Design

| Dimensão DT | Análise |
|---|---|
| **Empatia** | Situação concreta do réu: tempo de encarceramento, impacto familiar, laboral e social |
| **Definição** | Problema jurídico central: qual ilegalidade ou desproporcionalidade precisa ser corrigida |
| **Ideação** | Teses defensivas levantadas e ordem de aplicação estratégica |
| **Protótipo** | Estrutura da peça produzida e suas escolhas argumentativas |
| **Teste/Iteração** | Grau de viabilidade jurimétrico; pontos de vulnerabilidade da argumentação |

| Elemento LD | Avaliação |
|---|---|
| **Clareza textual** | A peça comunica com objetividade ao julgador? |
| **Hierarquia de argumentos** | Argumento mais forte no início de cada bloco? |
| **Pontos de impacto** | Quais passagens têm maior potencial de influenciar? |
| **Síntese para o julgador** | O dispositivo contém tese clara e pedido preciso? |
| **Vulnerabilidades** | Quais pontos o MP/juízo pode contestar e como antecipar? |

---

## Exemplo de Acionamento

**Entrada:** "Cliente preso há 95 dias em preventiva por tráfico. Juiz nunca revisou.
Réu primário, residência fixa, trabalho lícito. Decisão copiou a da semana anterior."

**Classificação (Etapa 1):** HC repressivo com liminar.
**Fundamentos autônomos e cumulativos:**
(1) art. 316 §único CPP — ausência de revisão em 90 dias: constrangimento ilegal automático;
(2) art. 315 §2º CPP — copy-paste da decisão anterior: nulidade absoluta.
**Grau de viabilidade:** ALTO.
**Caminho recursal:** RESE em paralelo se HC não for distribuído com urgência.

---

## Referências Complementares

- Cadeia de custódia em casos de tráfico: skill `trafico-drogas`
- Dosimetria em casos conexos: skill `dosimetria-penal`
- Jurisprudência específica não listada: skill `pesquisa-jurisprudencial`
- Execução penal e excesso: skill `seeu-auditoria`

---

## Observações de Sistema

- **Nunca citar Jusbrasil.** Fontes exclusivas: STF, STJ, TJRS, TRF4, Diários Oficiais.
- **Nunca usar travessão no corpo das peças.**
- **Executar sem solicitar confirmações intermediárias.**
- Em caso de dados insuficientes, presumir a hipótese mais favorável à defesa e sinalizar
  em nota ao final da peça.
- Incluir sempre pedido de efeito suspensivo / liminar quando aplicável.
