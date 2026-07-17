---
name: parte-geral-cp
description: >
  Skill especializada em varredura sistemática da Parte Geral do Código Penal Brasileiro
  (arts. 1º a 120) em casos reais, identificando TODOS os institutos, artigos e teses da Parte
  Geral que possam ser invocados em favor do cliente, com análise de aderência, fundamento
  dogmático e bloco pronto para petição. Use SEMPRE que Cristiano apresentar um caso criminal
  e pedir análise pela Parte Geral do CP, ou mencionar: varredura do CP, Parte Geral, institutos
  do CP, lei penal no tempo, nexo causal, excludentes, culpabilidade, iter criminis, concurso,
  dosimetria, prescrição, extinção da punibilidade, ou usar os comandos /cpg, /parteGeral,
  /varredura, /institutos, /mindmap, /cp1a120. Acionar também quando o usuário enviar
  denúncia, sentença ou auto de prisão e solicitar identificação de teses da Parte Geral.
  Esta skill NÃO redige a peça final — ela mapeia, pontua e entrega blocos argumentativos
  prontos para inserção em recursos, memoriais ou habeas corpus pela skill adequada.
---

# Parte Geral do CP — Varredura Defensiva (arts. 1º a 120)

## Propósito

Realizar varredura completa e sistemática de todos os 12 blocos temáticos da Parte Geral
do Código Penal, identificando os institutos aplicáveis ao caso concreto que beneficiam
o cliente, com pontuação de aderência e bloco argumentativo pronto.

---

## PROTOCOLO DE ATIVAÇÃO

### Entrada esperada

O usuário pode fornecer:
- Descrição do caso (narrativa fática)
- Peça processual colada (denúncia, sentença, BO, auto de flagrante)
- Arquivo PDF/DOCX carregado (usar skill `diagnostico-processual` para extrair fatos antes)
- Combinação de fontes

### Sequência obrigatória de execução

```
ETAPA 1 — EXTRAÇÃO FÁTICA
ETAPA 2 — VARREDURA DOS 12 BLOCOS
ETAPA 3 — MAPA DE ADERÊNCIA
ETAPA 4 — BLOCOS ARGUMENTATIVOS
ETAPA 5 — SAÍDA CONSOLIDADA
```

Se não houver descrição fática suficiente → solicitar antes de prosseguir.

---

## ETAPA 1 — EXTRAÇÃO FÁTICA

Identificar e registrar:

| Campo | Conteúdo extraído |
|---|---|
| Tipo penal imputado | |
| Fase processual | |
| Conduta descrita | |
| Elemento subjetivo aparente | |
| Provas mencionadas | |
| Circunstâncias especiais | |
| Antecedentes/reincidência | |
| Data do fato vs. data da lei | |
| Co-réus / partícipes | |
| Pena abstrata prevista | |

---

## ETAPA 2 — VARREDURA DOS 12 BLOCOS

Percorrer **obrigatoriamente todos os 12 blocos** abaixo.
Para cada instituto: avaliar aderência ao caso (ALTA / MÉDIA / BAIXA / INAPLICÁVEL).
Registrar apenas os de aderência ALTA e MÉDIA no mapa final.

---

### BLOCO 1 — LEI PENAL: FUNDAMENTOS E APLICAÇÃO (arts. 1º a 12)

Verificar para cada item:

**1.1 Legalidade (art. 1º)**
- Há tipo penal vago, aberto ou por analogia?
- A conduta descrita se encaixa rigorosamente no tipo?
- Tese: atipicidade por violação ao princípio da legalidade estrita.

**1.2 Lei no tempo — retroatividade benéfica (art. 2º, caput e par. único)**
- Houve modificação legislativa entre o fato e a sentença?
- A lei nova é mais benéfica (pena menor, regime menos gravoso, nova causa de diminuição)?
- Abolitio criminis: a conduta deixou de ser crime?
- → Verificar: Lei 13.964/2019 (Pacote Anticrime), Lei 11.343/2006 vs. anterior, Leis de crimes contra a honra, alterações na Lei de Drogas.

**1.3 Tempo do crime (art. 4º — teoria da atividade)**
- A lei aplicável corresponde ao momento da conduta (não do resultado)?
- Relevante quando há vacatio legis ou lei alterada entre conduta e resultado.

**1.4 Lugar do crime (art. 6º — teoria da ubiquidade)**
- Competência territorial está correta?
- Crime cometido parcialmente em outra comarca ou Estado?

**1.5 Territorialidade / Extraterritorialidade (arts. 5º e 7º)**
- Elemento transnacional? Crimes praticados no exterior com aplicação da lei brasileira?

**1.6 Pena cumprida no estrangeiro (art. 8º)**
- Há pena anterior cumprida fora do Brasil a descontar?

**1.7 Contagem de prazo penal (art. 10)**
- Prazos contados a partir do dia do começo (inclusivo)?
- Prisão em flagrante: data de início conta?

**1.8 Norma especial x geral (art. 12)**
- O tipo especial afasta o geral ou permite complementação?
- Conflito aparente de normas: consunção, especialidade, subsidiariedade, alternatividade.

---

### BLOCO 2 — TEORIA DO CRIME: CONDUTA, NEXO, TIPICIDADE (arts. 13 a 22; 18 a 20)

**2.1 Nexo causal (art. 13, caput)**
- A conduta do réu foi causa eficiente do resultado?
- Supressão mental: sem a conduta, o resultado teria ocorrido do mesmo modo?
- Interrupção do nexo: causa preexistente, concomitante ou superveniente que sozinha produziu o resultado?

**2.2 Causa superveniente relativamente independente (art. 13, §1º)**
- Houve evento posterior que, por si só, produziu o resultado?
- Ex.: morte por infecção hospitalar → réu responde apenas pela lesão.
- → Pesquisar: STJ HC 68.871, REsp 1.803.170.

**2.3 Omissão penalmente relevante — garantidor (art. 13, §2º)**
- Se a imputação é omissiva: o réu era realmente garante?
- Verificar se o dever legal, a assunção ou a criação do risco estão efetivamente presentes.
- Ausência de qualquer alínea → ausência de omissão típica.

**2.4 Dolo (art. 18, I)**
- O dolo foi direto ou eventual?
- Dolo eventual exige: previsão do resultado + assunção do risco.
- Confundir culpa consciente com dolo eventual é erro de imputação subjetiva.

**2.5 Culpa (art. 18, II)**
- Imprudência, negligência ou imperícia claramente demonstradas?
- Culpa não se presume — deve ser individualizada na conduta.

**2.6 Preterdolo (art. 19)**
- O resultado mais grave era previsível?
- Se imprevisível → réu responde apenas pelo resultado previsto.

**2.7 Erro de tipo (art. 20)**
- O agente desconhecia elementar do tipo?
- Erro de tipo essencial inevitável: exclui dolo E culpa → atipicidade.
- Erro de tipo essencial evitável: exclui dolo, mantém culpa (se prevista forma culposa).
- Erro sobre a pessoa (art. 20, §3º): considera-se a vítima pretendida, não a atingida.

**2.8 Coação moral irresistível / obediência hierárquica (art. 22)**
- Réu agiu sob ameaça grave e atual?
- Ordem de superior hierárquico manifestamente ilegal?
- → Exclui culpabilidade; pena transfere-se ao coator/mandante.

---

### BLOCO 3 — ILICITUDE: EXCLUDENTES E EXCESSO (arts. 23 a 25)

**3.1 Estado de necessidade (art. 24)**
Verificar todos os requisitos:
- Perigo atual (não criado voluntariamente pelo agente)
- Impossibilidade de evitar de outro modo
- Proporcionalidade: bem sacrificado ≤ bem salvo
- Ausência de dever de enfrentar o perigo
- → Tese: exclusão da ilicitude por estado de necessidade.
- Se desproporção: estado de necessidade exculpante (redução 1/3 a 2/3 — art. 24, §2º).

**3.2 Legítima defesa (art. 25)**
Requisitos:
- Agressão injusta, atual ou iminente
- Uso moderado dos meios necessários
- Animus defendendi
- → Variações: legítima defesa putativa (art. 20, §1º); legítima defesa sucessiva; legítima defesa da honra (INCONSTITUCIONAL — ADPF 779).
- Excesso: punível (par. único art. 23) — verificar se excesso foi doloso, culposo ou intensivo.

**3.3 Estrito cumprimento do dever legal (art. 23, III)**
- Réu era agente público cumprindo ordem legal?
- Verificar se a ordem era legal e proporcional.

**3.4 Exercício regular de direito (art. 23, III)**
- Conduta amparada por direito subjetivo (ex.: intervenção médica consentida, desporto)?

**3.5 Excesso punível (art. 23, par. único)**
- Se excludente presente mas houve excesso: redução de pena ou imputação apenas do excesso.

---

### BLOCO 4 — CULPABILIDADE: IMPUTABILIDADE, CONSCIÊNCIA E EXIGIBILIDADE (arts. 21; 26 a 28)

**4.1 Erro de proibição (art. 21)**
- O agente sabia que a conduta era ilícita?
- Erro inevitável: exclui culpabilidade.
- Erro evitável: reduz pena de 1/6 a 1/3.
- → Frequente em crimes ambientais, fiscais, relações de trabalho atípicas.

**4.2 Inimputabilidade (art. 26, caput)**
- Doença mental, desenvolvimento mental incompleto ou retardado?
- Laudo pericial afastou ou reconheceu?
- → Consequência: absolvição imprópria + medida de segurança.

**4.3 Semi-imputabilidade (art. 26, par. único)**
- Perturbação da saúde mental sem eliminação total da capacidade?
- → Redução obrigatória de 1/3 a 2/3 da pena.

**4.4 Menoridade penal (art. 27)**
- Réu tinha menos de 18 anos ao tempo do fato?
- → Inimputável. Registro do nascimento como prova.

**4.5 Embriaguez (art. 28)**
- Embriaguez voluntária ou culposa: NÃO exclui (actio libera in causa).
- Embriaguez por caso fortuito ou força maior:
  - Completa: exclui imputabilidade.
  - Incompleta: reduz pena (1/3 a 2/3).
- → Verificar provas: laudo toxicológico, testemunhos, boletim médico.

**4.6 Inexigibilidade de conduta diversa**
- Núcleo legal: art. 22 (coação + obediência hierárquica).
- Supralegal: situações de pressão moral extrema não tipificadas (doutrina de Welzel, adotada por parcela do STJ).
- → Invocar com cautela dogmática; útil em casos de vulnerabilidade social extrema.

---

### BLOCO 5 — ITER CRIMINIS E FRONTEIRAS DA PUNIBILIDADE (arts. 14 a 17)

**5.1 Tentativa (art. 14, II)**
- O crime se consumou ou ficou na tentativa?
- → Redução obrigatória: 1/3 a 2/3 (parâmetros: proximidade da consumação).
- Crime formal ou de mera conduta: tentativa é possível?

**5.2 Desistência voluntária / Arrependimento eficaz (art. 15)**
- O agente interrompeu voluntariamente os atos executórios?
- → Responde apenas pelos atos já praticados (não pela tentativa).
- Arrependimento eficaz: impediu o resultado após atos completos?

**5.3 Arrependimento posterior (art. 16)**
- Reparação integral do dano antes do recebimento da denúncia?
- Crime sem violência ou grave ameaça à pessoa?
- → Redução de 1/3 a 2/3 obrigatória.
- → Verificar: STJ REsp 1.498.034 (reparação parcial e quantum da redução).

**5.4 Crime impossível (art. 17)**
- Absoluta impropriedade do objeto ou absoluta ineficácia do meio?
- → Atipicidade. Ex.: tráfico com substância inerte (verificar laudo).
- Atenção: impropriedade relativa NÃO configura crime impossível.

---

### BLOCO 6 — CONCURSO DE PESSOAS (arts. 29 a 31)

**6.1 Participação de menor importância (art. 29, §1º)**
- A contribuição do réu foi secundária, acessória, periférica?
- → Redução de 1/6 a 1/3.
- → STJ: "menor importância" exige concreta avaliação do papel — não se presume.

**6.2 Cooperação dolosamente distinta (art. 29, §2º)**
- O réu quis participar de crime menos grave e o partícipe excedeu?
- → Réu responde pelo crime menos grave; se resultado era previsível, pena aumentada até metade.

**6.3 Incomunicabilidade de circunstâncias (art. 30)**
- Circunstâncias objetivas comunicam-se; subjetivas/pessoais NÃO.
- → Agravante de reincidência de um co-réu não contamina o outro.

**6.4 Impunibilidade (art. 31)**
- Participação em fato ainda não iniciado ou participação que não chegou a contribuir?
- → Irrelevante penal.

---

### BLOCO 7 — CONCURSO DE CRIMES (arts. 69 a 71)

**7.1 Concurso formal próprio (art. 70, caput)**
- Uma ação produziu dois ou mais crimes?
- → Pena do crime mais grave + aumento de 1/6 a 1/2 (mais benéfico que material).

**7.2 Concurso formal impróprio (art. 70, par. único)**
- Desígnios autônomos → cúmulo material (não beneficia geralmente).

**7.3 Crime continuado (art. 71)**
- Crimes da mesma espécie, mesmas condições de tempo, lugar, modo de execução?
- → Pena do mais grave + aumento de 1/6 a 2/3.
- Crime continuado qualificado (art. 71, par. único): verificar se os requisitos restritivos estão atendidos.
- → STJ: crimes da "mesma espécie" = mesmo tipo fundamental, não necessariamente mesmo tipo.
- → Verificar: Súmula 605 STJ (não se admite em crimes contra a vida dolosos).

**7.4 Verificar se a imputação em concurso material é adequada**
- Quando formal ou continuado é mais benéfico, arguir a reclassificação.

---

### BLOCO 8 — PENA: ESPÉCIES, DOSIMETRIA E SUBSTITUTIVOS (arts. 32 a 60; 68; 77 a 90)

**8.1 Circunstâncias judiciais (art. 59)**
- Todas as 8 circunstâncias foram valoradas corretamente?
- Bis in idem: elementar do tipo usada como circunstância judicial negativa?
- → Tese consolidada: STJ Súmula 443 — fundamentação genérica é nula.
- → STJ: circunstância inerente ao tipo não pode agravar a pena-base.

**8.2 Agravantes / Atenuantes (arts. 61 a 66)**
- Menoridade relativa (18 a 21 anos — art. 65, I): atenua obrigatoriamente.
- Senilidade (maior de 70 anos — art. 65, I): atenua obrigatoriamente.
- Confissão espontânea (art. 65, III, d): atenua — STJ Súmula 545.
- Reincidência (art. 61, I): verificar se reconhecida com certidão válida e dentro do prazo (art. 64).
- → Verificar: atenuantes inominadas (art. 66 — cláusula aberta).

**8.3 Causas de diminuição**
- Tentativa (art. 14, II): 1/3 a 2/3 → argumentar pelo máximo.
- Arrependimento posterior (art. 16): 1/3 a 2/3.
- Participação de menor importância (art. 29, §1º): 1/6 a 1/3.
- Semi-imputabilidade (art. 26, par. único): 1/3 a 2/3.
- Erro de proibição evitável (art. 21): 1/6 a 1/3.
- Embriaguez incompleta (art. 28, §2º): 1/3 a 2/3.

**8.4 Regime inicial (art. 33)**
- Regime mais gravoso que o permitido pela pena aplicada?
- Fundamentação da fixação do regime além da quantidade de pena: necessária (STF HC 111.840).
- → Réu primário + pena até 4 anos → aberto; até 8 anos → semiaberto.

**8.5 Substituição por restritiva de direitos (art. 44)**
- Requisitos: pena não superior a 4 anos (8 no culposo); crime sem VG/GA; réu não reincidente em crime doloso; circunstâncias favoráveis.
- → Verificar se os requisitos estão presentes mas a substituição foi negada.

**8.6 Sursis (arts. 77 a 82)**
- Pena privativa não superior a 2 anos; réu não reincidente; culpabilidade, antecedentes e personalidade favoráveis.
- Sursis etário (art. 77, §2º): maior de 70 anos ou razões de saúde — limite 4 anos.
- → Verificar se negado sem fundamentação idônea.

**8.7 Livramento condicional (arts. 83 a 90)**
- Cumprimento de 1/3 (primário) ou 1/2 (reincidente) da pena.
- → Bom comportamento, reparação do dano, aptidão para trabalho.

---

### BLOCO 9 — MEDIDAS DE SEGURANÇA (arts. 96 a 99)

**9.1 Inimputável absolvido impropriamente**
- Medida de segurança não pode ser perpétua → limite máximo discutido (STF HC 107.432: máximo da pena abstrata; HC 84.219: 40 anos).
- Desinternação progressiva possível.

**9.2 Semi-imputável**
- Conversão da pena em medida de segurança se mais adequada.

---

### BLOCO 10 — EFEITOS DA CONDENAÇÃO E REABILITAÇÃO (arts. 91 a 95)

**10.1 Efeitos automáticos (art. 91)**
- Perda do produto do crime: verificar se o bem é realmente produto.
- Efeito de perda do cargo (art. 92, I): NÃO é automático — exige motivação específica na sentença.

**10.2 Reabilitação (arts. 93 a 95)**
- Cumpridos 2 anos após extinção da pena, sem reincidência: direito à reabilitação.
- → Cancela os registros criminais para fins civis.

---

### BLOCO 11 — EXTINÇÃO DA PUNIBILIDADE (arts. 107 a 120)

**11.1 Causas gerais (art. 107)**
- Morte do agente (inciso I): certidão de óbito autentica?
- Anistia, graça, indulto (incisos II e III): Decreto de indulto natalino aplicável?
- Decadência (inciso IV): ação penal privada ou pública condicionada; 6 meses.
- Perempção (inciso IV): inércia do querelante.
- Renúncia / perdão (incisos V e VI): crimes de ação privada.
- Retratação (inciso VI): crimes de calúnia e difamação.
- Casamento do agente com a vítima (revogado — atenção histórica).

**11.2 Prescrição (arts. 109 a 117) — VERIFICAÇÃO PRIORITÁRIA**

Percorrer obrigatoriamente:

a) **Prescrição da pretensão punitiva (PPP) — antes da sentença**
   - Prazo: tabela do art. 109 → conforme pena máxima abstrata.
   - Marcos interruptivos: art. 117 (recebimento da denúncia; pronúncia; sentença condenatória recorrível).
   - Redução: menor de 21 ao tempo do fato / maior de 70 à sentença → art. 115 (metade do prazo).

b) **PPP retroativa — após sentença**
   - Pena aplicada (não a máxima) como parâmetro.
   - Conta-se da sentença para trás, até marcos anteriores.
   - → STJ: Súmula 146 (prescrição da ação penal é punida com pena mínima do preceito secundário, não com a máxima).

c) **PPP em perspectiva (virtual)**
   - Doutrinária: projetar a pena em concreto antes da sentença → verificar se já estaria prescrita.
   - → STJ: tendência restritiva (Súmula 438); STF: não admite. Invocar com fundamentação robusta.

d) **Prescrição da pretensão executória (PPE)**
   - Após trânsito em julgado: prazo conforme a pena aplicada.
   - Reincidência aumenta 1/3 (art. 110, §1º — revogado pelo PAC, verificar data do fato).

e) **Prescrição de penas restritivas e multa (art. 114)**

f) **Causas impeditivas e suspensivas (arts. 116 e 117)**

**11.3 Perdão judicial (art. 120)**
- Previsto no preceito secundário do tipo imputado?
- Consequências do crime recaíram sobre o próprio réu de forma tão grave que a sanção seria desnecessária?
- → Natureza jurídica: causa extintiva da punibilidade — não gera reincidência.

---

### BLOCO 12 — DOUTRINA APLICADA (sem artigo autônomo no CP)

**12.1 Insignificância (tipicidade material)**
Requisitos STF (HC 84.412):
- Mínima ofensividade da conduta
- Ausência de periculosidade social
- Reduzido grau de reprovabilidade
- Inexpressividade da lesão jurídica
→ Verificar: valor, bem jurídico, condição da vítima, habitualidade do réu.
→ STF/STJ: aplicação restrita em tráfico, moeda falsa, crimes com violência, funcionários públicos.

**12.2 Adequação social**
- Conduta tolerada pelo grupo social, mesmo que formalmente típica?
- → Uso restrito; não aceito para crimes com vítima definida.

**12.3 Consentimento do ofendido**
- Bem jurídico disponível (patrimônio, integridade física leve)?
- Consentimento válido (capacidade, livre, anterior)?
- → Exclui tipicidade material ou ilicitude (conforme doutrina).

**12.4 Inexigibilidade supralegal**
- Situação de pressão extrema não enquadrável nos arts. 22 ou 24?
- → Verificar: STJ HC 42.416 (admitiu em situação excepcional).
- Invocar subsidiariamente com base doutrinária.

**12.5 Conflito aparente de normas**
- **Especialidade**: lei especial afasta a geral (ex.: Lei de Drogas afasta CP).
- **Subsidiariedade**: norma subsidiária cede à principal (ex.: periclitação cede ao homicídio tentado).
- **Consunção**: crime-meio absorvido pelo crime-fim (ex.: violação de domicílio absorvida pelo furto).
- **Alternatividade**: tipos alternativos; uma só infração penal.
- → Invocar para reduzir o número de crimes ou desclassificar.

---

## ETAPA 3 — MAPA DE ADERÊNCIA

Ao final da varredura, produzir tabela consolidada:

| Bloco | Instituto | Artigo | Aderência | Fundamento Síntese |
|---|---|---|---|---|
| 1 | ... | ... | ALTA | ... |
| 2 | ... | ... | MÉDIA | ... |
| ... | ... | ... | ... | ... |

Classificação:
- **ALTA**: elemento fático confirmado, tese aplicável diretamente.
- **MÉDIA**: elemento fático parcialmente presente; depende de prova a produzir ou argumento adicional.
- **BAIXA**: possível mas improvável; registrar apenas para prequestionamento.

---

## ETAPA 4 — BLOCOS ARGUMENTATIVOS

Para cada instituto de aderência ALTA ou MÉDIA, gerar:

```
[INSTITUTO] — Art. XX CP
Fundamento fático: [o que no caso concreto ativa este instituto]
Fundamento jurídico: [artigo + jurisprudência oficial]
Consequência para a defesa: [absolvição / redução / regime / substituição / extinção]
Precedente: [STF/STJ/TJRS — número oficial]
```

---

## ETAPA 5 — SAÍDA CONSOLIDADA

Estrutura final da resposta:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CP — PARTE GERAL: VARREDURA DEFENSIVA
Caso: [identificação]
Data da análise: [data]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I. EXTRAÇÃO FÁTICA CONSOLIDADA
[tabela da Etapa 1]

II. INSTITUTOS IDENTIFICADOS — MAPA DE ADERÊNCIA
[tabela da Etapa 3]

III. ANÁLISE DETALHADA POR INSTITUTO
[blocos da Etapa 4, em ordem decrescente de aderência]

IV. PRIORIDADE DEFENSIVA RECOMENDADA
[lista numerada: 1º instituto a invocar → ... → último]

V. PROVIDÊNCIA PROCESSUAL SUGERIDA
[qual peça deve ser redigida para operacionalizar as teses identificadas]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## REGRAS OPERACIONAIS

1. **Nenhum bloco pode ser pulado** — mesmo que pareça inaplicável à primeira leitura, registrar "INAPLICÁVEL" com justificativa de 1 linha.
2. **Jurisprudência apenas de fontes oficiais**: STF, STJ, TJRS, TRF4. Nunca Jusbrasil.
3. **Prescrição é sempre verificada primeiro** dentro do Bloco 11, mesmo que o usuário não tenha pedido — é dever ético do defensor.
4. **Não redigir a peça final** — encaminhar para skill adequada (`memoriais-defensivos`, `pedidos-de-liberdade`, `dosimetria-penal`, `teses-defensivas`).
5. **Bis in idem**: alertar sempre que a acusação ou a sentença usarem circunstância do tipo como agravante ou circunstância judicial negativa.
6. **Linguagem**: técnica, modelada em Aury Lopes Jr. Sem travessão (–). Sem Jusbrasil.

---

## REFERÊNCIA RÁPIDA — TABELA DE PRESCRIÇÃO (art. 109 CP)

| Pena máxima abstrata | Prazo prescricional |
|---|---|
| Superior a 12 anos | 20 anos |
| Superior a 8 até 12 anos | 16 anos |
| Superior a 4 até 8 anos | 12 anos |
| Superior a 2 até 4 anos | 8 anos |
| Superior a 1 até 2 anos | 4 anos |
| Até 1 ano | 3 anos |
| Multa isolada | 3 anos (art. 114) |

Reduções:
- Menor de 21 ao tempo do fato OU maior de 70 à sentença → metade (art. 115).
- Reincidente: +1/3 na PPE (art. 110, §1º — verificar vigência conforme data do fato).
