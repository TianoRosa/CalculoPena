---
name: admissibilidade-recursal
description: |
  Auditoria prévia de admissibilidade de REsp, RE, AREsp, AgRg e AgInt. Verifica 11 barreiras: prequestionamento (Súmulas 282/356/STF), Súmula 284/STF, Súmula 7/STJ, Súmula 83/STJ, Súmula 182/STJ, Súmula 281/STF, repercussão geral (Temas 181/339/660/STF), divergência jurisprudencial, fundamentação autônoma não atacada, distinção entre negativa de seguimento e inadmissão, e prazo de AREsp não interrompido por embargos de declaração contra inadmissibilidade. Usar SEMPRE antes de protocolar recurso extraordinário, especial ou agravo. Acionar com /admissibilidade, /resp, /re, /aresp, /agr, /prequestionamento, /barreiras, /nao-conhecimento. Acionar também ao mencionar: STJ, STF, Súmula 7, Súmula 83, Súmula 182, Súmula 281, Súmula 284, reexame de prova, divergência jurisprudencial, Vice-Presidência, repercussão geral, não admitido, não conhecido, negativa de seguimento, recurso especial, recurso extraordinário, juízo de admissibilidade, prazo de agravo.
---

# Skill: Auditoria de Admissibilidade Recursal

## Objetivo

Realizar auditoria técnica completa de recursos extraordinários e especiais **antes do protocolo**, identificando cada barreira de admissibilidade e entregando argumentação pronta para superá-la ou ajustando a peça para evitá-la.

Esta skill foi construída a partir de casos reais de não conhecimento identificados no escritório (RE e REsp no Proc. 8008818-63.2025.8.21.0001/RS; AREsp 3056876/RS com clientes de Cristiano não conhecidos por falha em impugnar especificamente todos os fundamentos).

---

## Pipeline Obrigatório

Execute sempre nesta ordem:

### ETAPA 1 — Inventário da Decisão Recorrida

Antes de qualquer análise, extraia e liste:

1. **Tribunal de origem** e câmara/turma que proferiu o acórdão
2. **Data do acórdão** e dos embargos de declaração (se houver)
3. **Dispositivos legais e constitucionais** mencionados no acórdão
4. **Dispositivos legais e constitucionais** que a defesa pretende invocar
5. **Fundamentos do acórdão** que serão atacados (liste exaustivamente)
6. Se há **decisão de inadmissibilidade** do tribunal de origem já proferida, liste **todos os fundamentos** dela (cada um será auditado individualmente)

> Se o recurso for um AREsp ou AgRg/AgInt: a decisão de inadmissibilidade é um dispositivo único e indivisível. Todos os seus fundamentos precisam ser impugnados especificamente.

---

### ETAPA 2 — Checklist de Admissibilidade (11 Barreiras)

Aplique cada barreira ao caso concreto e emita diagnóstico: **RISCO / SUPERADO / INAPLICÁVEL**

#### BARREIRA 1 — Prequestionamento (Súmulas 282 e 356/STF)

**Regra**: O dispositivo constitucional ou legal invocado deve ter sido debatido e enfrentado expressamente no acórdão recorrido ou nos embargos de declaração.

**Verificações obrigatórias**:
- [ ] Cada artigo invocado pela defesa foi ventilado no acórdão?
- [ ] Se não ventilado, foram opostos embargos de declaração com indicação expressa dos artigos omitidos?
- [ ] Os embargos foram rejeitados sem enfrentamento? → Prequestionamento ficto pelo art. 1.025 do CPC (verificar se o STJ aceita no caso concreto — no STF, o prequestionamento ficto NÃO é aceito)
- [ ] O prequestionamento é explícito (artigo mencionado e ratio aplicada) ou implícito (matéria tratada sem menção ao artigo)?

**Atenção**: O STF não admite prequestionamento implícito. O STJ admite, mas com restrições. Verificar a jurisprudência específica da turma competente.

**Remédio**: Se ausente → opor embargos de declaração antes do recurso excepcional, com indicação expressa de cada artigo cuja omissão se aponta. Incluir no corpo dos embargos a frase: "Opõem-se os presentes embargos de declaração com a finalidade de prequestionar os arts. X, Y e Z da Constituição Federal / da lei federal, imprescindíveis ao cabimento do recurso especial/extraordinário".

---

#### BARREIRA 2 — Súmula 284/STF (Deficiência de Fundamentação na Alínea c)

**Regra**: O recurso extraordinário interposto com base na alínea c do art. 102, III, CF exige que o recorrente indique expressamente qual lei ou ato de governo local foi contestado em face da Constituição Federal e foi julgado válido pela decisão recorrida.

**Verificações**:
- [ ] O recurso está fundado na alínea c?
- [ ] Há indicação expressa de qual lei ou ato de governo local foi contestado?
- [ ] Há indicação de que essa lei/ato foi julgado válido pela decisão recorrida?

**Remédio**: Identificar no acórdão recorrido o ato normativo local (decreto, portaria, lei estadual/municipal) e enunciar expressamente no preâmbulo do RE: "O acórdão recorrido julgou válida a [lei/decreto/portaria X], do Estado/Município Y, contestada em face dos arts. W e Z da Constituição Federal".

---

#### BARREIRA 3 — Súmula 7/STJ (Reexame Fático-Probatório)

**Regra**: O recurso especial não admite revisão do conjunto fático-probatório fixado pelas instâncias ordinárias.

**Verificações**:
- [ ] A tese defensiva depende de afirmar que os fatos foram mal apreciados?
- [ ] A pretensão é reclassificar provas que o tribunal valorou de certa forma?
- [ ] A argumentação inclui expressões como "a prova demonstra", "as testemunhas disseram", "o laudo comprova"?

**Remédio**: Reformular a tese como **questão de direito**, não de fato. Em vez de "a prova testemunhal comprova o trabalho", argumentar "a interpretação dada ao art. 126 da LEP é inconstitucional por exigir requisito formal não previsto em lei". Separar com precisão cirúrgica o que é fixação de fato (intocável) do que é qualificação jurídica do fato (impugnável).

**Atenção**: A Súmula 7 também impede o conhecimento do recurso pela alínea c (divergência jurisprudencial), quando a identidade entre o caso paradigma e o caso recorrido depende de constatação fática.

---

#### BARREIRA 4 — Súmula 83/STJ (Jurisprudência Consolidada no Mesmo Sentido)

**Regra**: Não se conhece do recurso especial quando a orientação do STJ se firmou no mesmo sentido da decisão recorrida.

**Verificações**:
- [ ] Existe jurisprudência consolidada do STJ no mesmo sentido do acórdão recorrido?
- [ ] As súmulas do STJ encampam a tese do acórdão?
- [ ] A jurisprudência favorável à defesa é minoritária ou de turmas específicas?

**Remédio**: Se a Súmula 83 for previsível, atacar frontalmente a superação do entendimento ou a distinção do caso concreto. Demonstrar que o precedente paradigma diverge factualmente do caso. Fundamentar com julgados mais recentes que sinalizem virada jurisprudencial.

**Atenção**: A Súmula 83 se aplica tanto à alínea a quanto à alínea c. Paradigmas de habeas corpus, mandado de segurança ou recurso ordinário não são aptos a demonstrar divergência jurisprudencial para fins de REsp pela alínea c.

---

#### BARREIRA 5 — Impugnação Específica de Todos os Fundamentos (Súmula 182/STJ)

**Esta é a barreira mais frequentemente violada e a que gerou o não conhecimento do AREsp 3056876/RS.**

**Regra**: A decisão de inadmissibilidade do REsp não é formada por capítulos autônomos, mas por um único dispositivo. O AREsp deve impugnar **todos e cada um** dos fundamentos da decisão agravada, de forma individualizada, concreta e pormenorizada.

**Verificações**:
- [ ] Listou TODOS os fundamentos da decisão de inadmissibilidade?
- [ ] Cada fundamento tem um bloco argumentativo próprio e específico no AREsp?
- [ ] Nenhum fundamento foi deixado sem resposta, ainda que parecesse secundário?
- [ ] A impugnação vai além da mera citação do enunciado, demonstrando sua inaplicabilidade ao caso?

**Protocolo de impugnação**:
Para cada fundamento da decisão de inadmissibilidade, escrever um item numerado com:
(i) Identificação do fundamento tal como enunciado na decisão
(ii) Por que esse fundamento específico não se aplica ao caso
(iii) Precedente do próprio STJ afastando o fundamento naquele contexto

**Exemplo de erro fatal** (extraído de caso real): A decisão de inadmissibilidade aplicou Súmula 83/STJ (art. 155 CPP), Súmula 7/STJ e ausência de afronta ao art. 619 CPP. O AREsp impugnou a Súmula 7 e o art. 619 CPP, mas **deixou de atacar** a Súmula 83 quanto ao art. 155 CPP. Resultado: não conhecimento.

---

#### BARREIRA 6 — Repercussão Geral (RE)

**Regra**: O recorrente deve alegar formal e fundamentadamente a existência de repercussão geral, demonstrando que a questão ultrapassa o interesse subjetivo das partes (art. 102, §3º, CF; art. 1.035 do CPC).

**Verificações**:
- [ ] Há capítulo específico de repercussão geral?
- [ ] A alegação vai além do caso concreto, demonstrando impacto jurídico, social ou econômico amplo?
- [ ] O tema tem correspondente no Plenário Virtual do STF (verificar)?

---

#### BARREIRA 7 — Divergência Jurisprudencial (Alínea c, art. 105, III, CF)

**Regra**: Exige demonstração de similitude fática entre o caso recorrido e o paradigma, e divergência de interpretação jurídica.

**Verificações**:
- [ ] Os paradigmas são de REsp ou AREsp (não HC, MS, RO)?
- [ ] Há cotejo analítico entre o caso recorrido e os paradigmas?
- [ ] A divergência é de interpretação jurídica, não de apreciação fática?
- [ ] Os paradigmas não foram superados por julgamento posterior?

**Remédio**: Incluir seção de "Demonstração do Dissídio Jurisprudencial" com transcrição dos trechos relevantes do paradigma e do acórdão recorrido, seguida de análise comparativa explícita.

---

#### BARREIRA 8 — Fundamentação Autônoma não Impugnada

**Regra**: Se o acórdão recorrido se sustenta em mais de um fundamento independente, é necessário impugnar todos. Se um fundamento autônomo não for atacado e for suficiente para manter o resultado, o recurso não será provido ainda que os demais sejam superados.

**Verificações**:
- [ ] O acórdão tem múltiplos fundamentos?
- [ ] Cada fundamento, isoladamente, sustenta o resultado?
- [ ] Todos foram atacados?

#### BARREIRA 9 — Súmula 281/STF (Exaurimento de Instância no STJ)

**Regra**: Não cabe RE contra decisão monocrática de ministro do STJ quando ainda é cabível o agravo regimental (AgRg) ou agravo interno (AgInt) dirigido ao colegiado do próprio tribunal. O art. 102, III, da CF exige "causa decidida em única ou última instância".

**Verificações**:
- [ ] O acórdão recorrido é de órgão colegiado do STJ (turma, seção, corte especial) ou é decisão monocrática de relator?
- [ ] Se for decisão monocrática, já foi interposto AgRg/AgInt e o colegiado manteve a decisão?

**Atenção**: O STF já aplicou multa e elevou honorários ao confirmar a inadmissibilidade do RE interposto contra decisão monocrática do STJ sem exaurimento de instância. O erro aqui é grave e tem consequências processuais além do não conhecimento.

---

#### BARREIRA 10 — Identificação do Resultado da Vice-Presidência e Recurso Cabível

**Esta barreira evita erro grosseiro irreversível de fungibilidade.**

O juízo de admissibilidade do RE/REsp na Vice-Presidência do TJRS (ou do STJ para o RE) pode gerar quatro resultados distintos, cada um com recurso específico e insubstituível:

| Resultado | Fundamento | Recurso Cabível | Erro Grosseiro |
|-----------|-----------|-----------------|----------------|
| **Negativa de seguimento** | Repercussão geral negada ou tese fixada em RG contrária | Agravo interno (cível) ou Agravo regimental (penal) — art. 1.030, §2º, CPC | Interpor AREsp |
| **Devolução para retratação** | Acórdão contrário a tese de RG — art. 1.030, II, CPC | Irrecorrível | — |
| **Suspensão** | Tema com RG reconhecida sem decisão de mérito — art. 1.030, III, CPC | Agravo interno ou regimental | — |
| **Inadmissão** | Pressupostos recursais não preenchidos — art. 1.030, §1º, CPC | AREsp — art. 1.042 do CPC | Interpor AgInt/AgRg |

**Verificação obrigatória**:
- [ ] Identificar qual dos quatro resultados foi produzido pela Vice-Presidência
- [ ] Certificar que o recurso interposto é o correspondente ao resultado, não a outro

**Atenção**: O STJ já contabilizou, entre março e setembro de 2023, 726 agravos em recurso extraordinário interpostos equivocadamente contra decisões de negativa de seguimento (que admitem apenas AgInt/AgRg). Por ser erro grosseiro, não se aplica o princípio da fungibilidade (RHC 159.548/STJ; HC 217.182/STF).

---

#### BARREIRA 11 — Prazo do AREsp: Embargos de Declaração Contra Decisão de Inadmissibilidade Não Interrompem

**Esta barreira evita a intempestividade do AREsp por equívoco sobre efeito interruptivo.**

**Regra**: Os embargos de declaração opostos contra a decisão de inadmissibilidade do REsp ou RE proferida pela Vice-Presidência do tribunal de origem **não interrompem** o prazo para interposição do AREsp (ou do ARE). O AREsp é o único recurso cabível contra a decisão de inadmissibilidade, e seu prazo corre imediatamente a partir da intimação da decisão de inadmissibilidade, independentemente de embargos opostos.

Fundamento: Corte Especial do STJ — AgInt nos EAREsp 1.653.277/RJ; AgInt no MS 25.013/DF; AgInt no AREsp 1.477.958/RS.

**Exceção**: Os embargos de declaração geram efeito interruptivo apenas se a decisão de inadmissibilidade for tão genérica que impossibilite ao recorrente identificar os motivos do indeferimento.

**Verificações**:
- [ ] A decisão de inadmissibilidade já foi proferida?
- [ ] Foram opostos embargos de declaração contra ela?
- [ ] Se sim, o prazo do AREsp foi contado a partir da intimação da decisão de inadmissibilidade, não do acórdão dos embargos?
- [ ] A decisão de inadmissibilidade era suficientemente clara para identificar seus fundamentos? (Se sim, os embargos não interromperam o prazo.)

**Remédio**: Ao receber a decisão de inadmissibilidade, calcular imediatamente o prazo do AREsp a partir dessa data. Interpor o AREsp no prazo original. Embargos de declaração contra a inadmissibilidade só devem ser opostos se a decisão for de tal modo genérica que impossibilite a impugnação específica dos fundamentos — e mesmo assim, não confiar no efeito interruptivo sem verificar o caso concreto na jurisprudência atualizada da Corte Especial.

---

#### BARREIRA ESPECIAL (apenas RE) — Temas de Repercussão Geral do STF que Vedam o RE

Aplicar quando o recurso for RE. Verificar se a questão debatida se enquadra em algum dos seguintes temas consolidados do STF:

**Tema 181/STF**: Se o recurso anterior da parte (REsp, AREsp, AgRg) não ultrapassou a barreira da admissibilidade no STJ, o RE não terá repercussão geral — mesmo que pretenda discutir o mérito. Isso ocorre porque o STF precisaria antes discutir a admissibilidade do recurso anterior, o que exige análise de legislação infraconstitucional.

> Impacto prático: 82% dos REs apreciados pela Vice-Presidência do STJ são negados por aplicação de temas de RG. Apenas os Temas 181 e 339 respondem por 45% dessas negativas.

**Tema 339/STF**: A exigência constitucional de fundamentação (art. 93, IX, CF) não impõe análise pormenorizada de cada alegação ou prova. Se o acórdão recorrido foi fundado de forma suficiente, não há violação ao art. 93, IX.

**Tema 660/STF**: Alegações de ofensa ao contraditório, ampla defesa, devido processo legal, coisa julgada e ato jurídico perfeito têm natureza reflexa quando dependem de análise infraconstitucional. O RE fundado exclusivamente nesses argumentos será negado.

**Verificações adicionais para RE**:
- [ ] A questão constitucional surgiu no julgamento do STJ ou já estava no acórdão do tribunal de origem? (Se no tribunal de origem, o RE deveria ter sido interposto lá, junto com o REsp — art. 1.029 do CPC)
- [ ] O RE ataca o acórdão do STJ, não o acórdão do tribunal de origem? (As razões devem se voltar ao julgamento do STJ)
- [ ] A questão tem tema de RG reconhecido e pendente no STF? (Caso em que a Vice-Presidência pode suspender o RE — art. 1.030, III, CPC)

---

### ETAPA 3 — Relatório de Diagnóstico

Apresentar tabela com:

| # | Barreira | Status | Providência |
|---|----------|--------|-------------|
| 1 | Prequestionamento | RISCO/SUPERADO/INAPLICÁVEL | ... |
| 2 | Súmula 284/STF (alínea c) | | |
| 3 | Súmula 7/STJ (reexame fático) | | |
| 4 | Súmula 83/STJ (jurisprudência consolidada) | | |
| 5 | Súmula 182/STJ (impugnação incompleta) | | |
| 6 | Repercussão geral | | |
| 7 | Divergência jurisprudencial | | |
| 8 | Fundamentação autônoma não atacada | | |
| 9 | Súmula 281/STF (exaurimento de instância) | | |
| 10 | Resultado da Vice-Presidência e recurso cabível | | |
| 11 | Prazo do AREsp (embargos sem efeito interruptivo) | | |
| E | Temas STF 181/339/660 (apenas RE) | | |

Após a tabela: **Prognóstico de admissibilidade** com escala de risco (ALTO / MÉDIO / BAIXO) e providências prioritárias antes do protocolo.

---

### ETAPA 4 — Redação dos Blocos Corretivos

Para cada barreira em status RISCO, redigir o bloco argumentativo correspondente pronto para inserção na peça.

Estrutura de cada bloco:
```
[BARREIRA X — TÍTULO]
[Fundamento da decisão agravada/recorrida tal como enunciado]
[Impugnação específica: inaplicabilidade ao caso]
[Precedente do STJ/STF afastando o fundamento]
[Conclusão: barreira superada]
```

---

### ETAPA 5 — Checklist Pré-Protocolo

Antes de assinar e protocolar, confirmar:

- [ ] Todos os artigos invocados foram prequestionados?
- [ ] Os embargos de declaração foram opostos se necessário (e com indicação expressa dos artigos)?
- [ ] Todos os fundamentos da decisão de inadmissibilidade foram impugnados individualmente?
- [ ] O dissídio jurisprudencial usa paradigmas de REsp/AREsp (não HC/MS/RO)?
- [ ] A tese foi reformulada como questão jurídica (não fática)?
- [ ] O recurso alega repercussão geral (se RE)?
- [ ] Todos os fundamentos autônomos do acórdão foram atacados?
- [ ] A fundamentação da alínea c indica expressamente a lei/ato de governo local?
- [ ] A decisão recorrida é de órgão colegiado (não monocrática) — Súmula 281/STF?
- [ ] O tipo de resultado da Vice-Presidência foi identificado (negativa de seguimento vs inadmissão)?
- [ ] O recurso interposto corresponde ao resultado (AgInt/AgRg para negativa de seguimento; AREsp para inadmissão)?
- [ ] O prazo do AREsp foi calculado a partir da intimação da decisão de inadmissibilidade, não de embargos opostos contra ela?
- [ ] Se RE: as razões atacam o acórdão do STJ, não o acórdão do tribunal de origem?
- [ ] Se RE: a questão não se enquadra nos Temas 181, 339 ou 660 do STF?

---

## Referências Normativas Centrais

- Súmulas 281, 282, 356 e 284 do STF
- Súmulas 7, 83 e 182 do STJ
- Temas de Repercussão Geral do STF: 181 (RE após inadmissão no STJ), 339 (fundamentação suficiente), 660 (violação reflexa ao devido processo legal)
- Art. 102, III, alíneas a, b, c e d, da CF/88 (competência do STF)
- Art. 105, III, alíneas a, b e c, da CF/88 (competência do STJ)
- Art. 1.025 do CPC (prequestionamento ficto)
- Art. 1.026 do CPC (efeito interruptivo dos embargos de declaração — inaplicável à decisão de inadmissibilidade)
- Art. 1.029 do CPC (interposição simultânea de REsp e RE)
- Art. 1.030, I a III e §2º, do CPC (resultados do juízo de admissibilidade e recursos cabíveis)
- Art. 1.030, §1º e art. 1.042 do CPC (AREsp contra inadmissão)
- Art. 932, III, do CPC (impugnação específica)
- Art. 253, parágrafo único, I, do RISTJ
- EAREsp 746.775/PR (unicidade da decisão de inadmissibilidade — Corte Especial/STJ)
- AgInt nos EAREsp 1.653.277/RJ (embargos sem efeito interruptivo — Corte Especial/STJ)

---

## Referências de Casos Concretos

Consultar `/references/casos-reais.md` para análise detalhada dos não conhecimentos identificados no escritório e os erros específicos cometidos em cada recurso.

---

## Notas de Aplicação

Esta skill deve ser acionada **antes da redação final** do REsp, RE, AREsp ou AgRg/AgInt. Não é ferramenta de revisão tardia — é protocolo de arquitetura do recurso.

Para redação completa das peças, integrar com a skill `/eproc-peticionar` (formatação e protocolo) e `/auditor-penal-antialucinacao` (revisão adversarial final).
