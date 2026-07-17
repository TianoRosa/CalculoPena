---
name: dosimetria-penal
description: >
  Skill especializada em análise técnica da dosimetria da pena em sentenças criminais brasileiras,
  com verificação de legalidade em todas as fases do sistema trifásico (art. 68 CP), regime inicial,
  substituição por penas restritivas, sursis, detração e concurso de crimes. Use esta skill sempre que
  Cristiano apresentar uma sentença condenatória para análise — seja como texto colado na conversa ou
  como arquivo PDF —, ou quando mencionar: dosimetria, pena-base, agravantes, atenuantes, causas de
  aumento, causas de diminuição, regime inicial, substituição, concurso de crimes, bis in idem,
  ilegalidade na sentença, recurso de apelação ou embargos fundados em pena. Acionar também com os
  comandos /dosimetria, /sentenca, /pena, /trifasico ou /regime.
---

# Skill: Análise de Dosimetria Penal

## Objetivo

Realizar análise técnico-jurídica completa da dosimetria da pena aplicada em sentença condenatória,
verificando a legalidade de cada fase do cálculo, identificando vícios, excessos e omissões,
e produzindo relatório estruturado pronto para uso defensivo em recurso.

---

## ETAPA 0 — LEITURA DO MATERIAL

### Se o input for texto colado na conversa:
Extrair diretamente os dados dosimétricos do texto apresentado.

### Se o input for PDF:
Instruir o usuário a fazer upload do arquivo. Após o upload, ler o PDF e extrair:
- Tipo penal imputado (artigo, caput ou parágrafo, qualificadoras, causas de aumento)
- Pena abstrata mínima e máxima cominada
- Todas as circunstâncias judiciais analisadas (art. 59 CP)
- Agravantes e atenuantes reconhecidas
- Causas de aumento e diminuição aplicadas (frações utilizadas)
- Pena final fixada
- Regime inicial estabelecido
- Decisão sobre substituição por PRD ou sursis
- Decisão sobre detração, se houver

Se qualquer dado estiver ausente ou ilegível no material, sinalizar ao usuário antes de prosseguir.

---

## ETAPA 1 — INVENTÁRIO DA SENTENÇA

Montar tabela-resumo com todos os elementos extraídos:

| Campo | Valor identificado na sentença |
|---|---|
| Tipo penal | |
| Pena abstrata mín./máx. | |
| Pena-base fixada | |
| Circunstâncias judiciais desfavoráveis | |
| Circunstâncias judiciais favoráveis | |
| Agravantes reconhecidas | |
| Atenuantes reconhecidas | |
| Causas de diminuição (fração) | |
| Causas de aumento (fração) | |
| Pena intermediária | |
| Pena definitiva | |
| Regime inicial | |
| Substituição / Sursis | |
| Concurso de crimes | |

---

## ETAPA 2 — ANÁLISE DO SISTEMA TRIFÁSICO (art. 68 CP)

### 2.1 PRIMEIRA FASE — PENA-BASE (arts. 59 e 68 CP)

**Verificações obrigatórias:**

a) **Quantum da pena-base**
- A pena-base deve estar entre o mínimo e o máximo abstrato cominado ao tipo.
- Verificar se cada fração de exasperação é proporcional e fundamentada.
- Denunciar se a pena-base coincide com o mínimo legal sem fundamentação (ausência de motivação concreta — art. 93, IX, CF/88).
- Denunciar se a pena-base supera o mínimo sem indicação de circunstâncias concretas desfavoráveis.

b) **Análise de cada circunstância judicial (art. 59 CP)**

Para cada uma das 8 vetoriais, verificar:

| Vetorial | Utilizada negativamente? | Fundamento concreto? | Vício identificado |
|---|---|---|---|
| Culpabilidade | | | |
| Antecedentes | | | |
| Conduta social | | | |
| Personalidade | | | |
| Motivos do crime | | | |
| Circunstâncias do crime | | | |
| Consequências do crime | | | |
| Comportamento da vítima | | | |

**Vícios típicos a verificar na 1ª fase:**

- **Bis in idem:** circunstância que já é elementar do tipo ou qualificadora sendo usada como vetorial negativa. Verificar com base em: STJ, HC 598.886/SC; STF, HC 94.620/SP; Súmula 241 STJ.
- **Maus antecedentes indevidos:** inquéritos e processos em andamento não podem fundamentar antecedentes desfavoráveis (STF, RE 591.054/SC — repercussão geral; Súmula 444 STJ).
- **Reincidência na 1ª fase:** reincidência é agravante da 2ª fase e não pode ser usada também como circunstância judicial (STJ, AgRg no AREsp 1.620.610/SP).
- **Fundamentação abstrata:** uso de expressões genéricas como "crime grave", "personalidade voltada para o crime" sem base em fato concreto dos autos (STJ, HC 310.901/SP).
- **Valoração da conduta social e personalidade sem laudo:** ausência de perícia ou prova específica (STJ, HC 167.597/SP).
- **Consequências inerentes ao tipo:** dano à vítima em crime patrimonial como consequência negativa — bis in idem (STJ, REsp 1.409.692/RS).

---

### 2.2 SEGUNDA FASE — AGRAVANTES E ATENUANTES (arts. 61-66 CP)

**Verificações obrigatórias:**

a) A fração utilizada não pode ser fixada (o CP não estabelece quantum mínimo ou máximo), mas deve ser proporcional e fundamentada. Referência: STJ, EREsp 1.836.556/SP — fração de 1/6 como parâmetro orientador não vinculante.

b) **Atenuante da confissão (art. 65, III, d, CP):**
- Verificar se houve confissão total ou parcial e se foi computada.
- Confissão utilizada para condenar deve obrigatoriamente atenuar a pena (STJ, Súmula 545).
- Se confissão qualificada (com excludente alegada): verificar jurisprudência divergente — STJ, EREsp 1.416.247/GO.

c) **Menoridade relativa (art. 65, I, CP):**
- Réu menor de 21 anos na data do fato: atenuante obrigatória, prevalece sobre agravante de reincidência (STJ, Súmula 241).

d) **Agravantes vedadas:**
- Qualificadoras não podem ser também agravantes genéricas.
- Agravante de "motivo torpe" em homicídio qualificado pelo mesmo motivo: bis in idem.
- Agravante de "contra mulher" quando já incide feminicídio qualificador: verificar bis in idem.

e) **Limite da atenuante:**
- Atenuante não pode reduzir a pena abaixo do mínimo legal — Súmula 231 STJ.
- Verificar se o julgador aplicou corretamente esse limite.

---

### 2.3 TERCEIRA FASE — CAUSAS DE AUMENTO E DIMINUIÇÃO

**Verificações obrigatórias:**

a) **Fração aplicada dentro dos limites legais?**
- Verificar se a fração está no intervalo previsto pelo tipo (ex.: art. 40 Lei 11.343/06 — 1/6 a 2/3).
- Verificar se a fundamentação da fração escolhida é concreta ou abstrata.

b) **Concurso de causas de aumento (art. 68, parágrafo único, CP):**
- Havendo mais de uma causa de aumento na parte especial, o juiz pode limitar-se a uma só, aplicando a que mais aumente. Verificar se houve cumulação indevida.

c) **Causa de diminuição do tráfico privilegiado (art. 33, §4º, Lei 11.343/06):**
- Verificar se o réu preenche os requisitos (primário, bons antecedentes, não integrante de organização criminosa, não dedicado habitualmente ao crime).
- Verificar se o indeferimento está fundamentado em prova concreta.
- Fração mínima de 1/6: verificar proporcionalidade (STJ, HC 438.043/SP).

d) **Tentativa (art. 14, II, CP):**
- A redução deve ser de 1/3 a 2/3 conforme o iter criminis percorrido. Verificar se a fração é fundamentada no grau de execução.

e) **Arrependimento posterior (art. 16 CP):**
- Verificar se foi reconhecido e se a fração é proporcional à celeridade e eficiência da reparação.

---

## ETAPA 3 — REGIME INICIAL (art. 33 CP e art. 59, III, CP)

**Tabela de verificação:**

| Pena definitiva | Réu primário | Regime legal | Regime fixado | Compatível? |
|---|---|---|---|---|
| Até 4 anos | Primário | Aberto (regra) | | |
| 4 a 8 anos | Primário | Semiaberto (regra) | | |
| Acima de 8 anos | Qualquer | Fechado (obrigatório) | | |
| Qualquer | Reincidente | Semiaberto/Fechado | | |

**Verificações obrigatórias:**

- Regime mais gravoso sem fundamentação concreta: inconstitucional — STF, HC 111.840/ES (regime inicial fechado em crimes hediondos sem fundamentação).
- Pena inferior a 4 anos: regime fechado exige fundamentação concreta na sentença (STJ, Súmula 440).
- Crimes hediondos: vedação ao regime integralmente fechado foi declarada inconstitucional (STF, HC 82.959/SP — pleno); regime inicial pode ser fechado com fundamentação concreta.
- Reincidente com pena até 4 anos: regime semiaberto como regra (STJ, Súmula 269).

---

## ETAPA 4 — SUBSTITUIÇÃO POR PENAS RESTRITIVAS DE DIREITOS (art. 44 CP)

**Requisitos cumulativos a verificar:**

| Requisito | Presente? | Fundamento da sentença | Vício? |
|---|---|---|---|
| Pena privativa ≤ 4 anos (ou crime culposo) | | | |
| Crime sem violência ou grave ameaça (salvo culposo) | | | |
| Réu não reincidente em crime doloso | | | |
| Circunstâncias indicam suficiência da substituição (art. 44, III) | | | |

**Verificações obrigatórias:**

- Se todos os requisitos estão preenchidos e a substituição foi negada: nulidade por ausência de fundamentação (STJ, HC 297.033/SP).
- Reincidente não reincidente específico: o §3º do art. 44 admite substituição se socialmente recomendável.
- Duas substituições: pena superior a 1 ano admite duas PRDs cumulativamente (art. 44, §2º CP).

---

## ETAPA 5 — SUSPENSÃO CONDICIONAL DA PENA (SURSIS) (art. 77 CP)

**Verificações obrigatórias:**

- Pena não superior a 2 anos: cabível sursis (4 anos se réu maior de 70 anos ou por razões de saúde).
- Réu não reincidente em crime doloso.
- Circunstâncias do art. 59 favoráveis à presunção de não reincidência.
- Se cabível e não concedido: verificar se há fundamentação concreta para a negativa.

---

## ETAPA 6 — DETRAÇÃO (art. 42 CP)

- Verificar se o réu ficou preso preventivamente durante o processo.
- Verificar se o tempo de prisão provisória foi computado na pena definitiva.
- Verificar se há prisão administrativa ou internação manicomial a computar.
- Ausência de detração quando cabível: vício sanável mas que pode impactar o regime e o prazo para benefícios executórios.

---

## ETAPA 7 — CONCURSO DE CRIMES (arts. 69, 70, 71 CP)

**Se houver concurso, verificar:**

a) **Concurso material (art. 69 CP):**
- Cumulação correta das penas de cada crime.
- Limite do art. 75 CP (40 anos).

b) **Concurso formal (art. 70 CP):**
- Uma só ação/omissão com dois ou mais resultados.
- Aumento de 1/6 até metade sobre a pena do crime mais grave.
- Concurso formal impróprio (desígnios autônomos): penas somadas — verificar se o juiz classificou corretamente.
- Regra da exasperação não pode superar a soma do concurso material (parágrafo único do art. 70 CP).

c) **Crime continuado (art. 71 CP):**
- Mesma espécie de crime, condições semelhantes de tempo, lugar e modo de execução.
- Aumento de 1/6 a 2/3 sobre a pena do crime mais grave (ou idêntica, se iguais).
- Crime continuado qualificado (parágrafo único): vítimas diferentes, violência ou grave ameaça — aumento até o triplo.
- Verificar se o juiz fundamentou a fração de aumento no número de infrações (STJ, Súmula 659: fração pelo número de crimes).

---

## ETAPA 8 — RELATÓRIO FINAL DE DOSIMETRIA

Produzir relatório estruturado com as seguintes seções:

### RELATÓRIO DE ANÁLISE DOSIMÉTRICA
**Processo:** [número]
**Réu:** [nome]
**Crime:** [tipificação]

---

#### I. SÍNTESE DA DOSIMETRIA APLICADA
Reproduzir o cálculo realizado pelo juiz de forma esquemática.

#### II. CONFORMIDADE LEGAL — ANÁLISE POR FASE

Para cada fase, concluir com:
- ✅ REGULAR — se a fase está dentro da legalidade
- ⚠️ IRREGULAR — se há vício sanável ou questionável
- ❌ ILEGAL — se há nulidade ou violação expressa de lei ou súmula

#### III. VÍCIOS IDENTIFICADOS
Listar cada vício com:
- Fase em que ocorre
- Descrição técnica do vício
- Norma ou precedente violado (com citação de fonte oficial)
- Impacto potencial na pena (redução estimada em dias/meses/anos)

#### IV. PENA ALTERNATIVA (CÁLCULO DEFENSIVO)
Recalcular a pena como deveria ter sido fixada, aplicando as correções identificadas.
Apresentar:
- Pena-base sugerida (com fundamentação)
- Pena intermediária
- Pena definitiva
- Regime sugerido
- Substituição / Sursis (se cabível)

#### V. TESES DEFENSIVAS PRIORITÁRIAS
Listar as teses em ordem de relevância para o recurso, indicando:
- Tipo de vício (error in judicando / error in procedendo)
- Fundamento legal e jurisprudencial
- Efeito pretendido no recurso

#### VI. BLOCO PARA RAZÕES DE RECURSO
Redigir parágrafo técnico para inserção direta nas razões de apelação ou embargos de declaração,
no estilo Aury Lopes Jr. / Ruy Barbosa, formatado conforme o padrão do escritório Rosa Advogados.

---

## REFERÊNCIAS JURISPRUDENCIAIS FUNDAMENTAIS

Consultar `/references/jurisprudencia-dosimetria.md` para lista completa de precedentes por tema.

---

## NOTAS DE OPERAÇÃO

- Nunca emitir conclusão de "regularidade total" sem verificar todas as 8 etapas.
- Sempre citar a fonte oficial (STF, STJ, CP, CPP) — nunca Jusbrasil.
- Se o material fornecido for incompleto, solicitar os dados faltantes antes de prosseguir.
- O relatório será produzido em português jurídico formal, padrão Rosa Advogados.
- Não usar travessão (–) em nenhum trecho produzido.
- Aplicar bloco de Design Thinking e Legal Design ao final, conforme padrão do escritório.
