---
name: discurso-juridico
description: >
  Analise de discurso juridico em decisoes, acordaos e pareceres do MP no processo penal
  brasileiro, com foco em marcadores de defesa social ("ordem publica", "clamor social",
  "credibilidade da Justica", "periculosidade", "risco a coletividade" etc). Diagnostica se
  cada marcador e fato concreto/individualizado ou retorica abstrata, e reencaminha os
  desfavoraveis para o terreno da legalidade estrita (concretude, contemporaneidade,
  proporcionalidade, cautelares), gerando tabela de conversao, teses hierarquizadas e
  paragrafos prontos. Use ao analisar decisao com linguagem de defesa social, fundamentacao
  aparente/generica, copy-paste de decisao ou retorica punitivista. Acionar com /discurso,
  /marcadores, /defesa-social, /reencaminhamento, /diagnostico-discursivo. Nao decide o
  instrumento cabivel — entrega o resultado a skill pedidos-de-liberdade, que classifica o
  instrumento e redige a peca final.
---

# Skill — Análise de Discurso Jurídico (Marcadores de Defesa Social)

## Propósito

Esta skill aplica ao processo penal a lente da Criminologia Cultural que orienta a pesquisa
acadêmica de Cristiano: decisões e manifestações acusatórias não são apenas atos jurídicos,
são também textos que mobilizam um repertório discursivo de defesa social para legitimar a
exceção (prisão, indeferimento de liberdade, agravamento de pena). A tarefa desta skill é
tornar esse repertório visível, técnico e mensurável — e convertê-lo em munição defensiva.

**Regra de ouro:** não basta dizer que um marcador é "genérico". É preciso perguntar qual fato
concreto, atual e individualizado sustenta o perigo alegado. Sem essa ponte, o argumento
permanece doutrinário; com essa ponte, ele vira tese de ilegalidade.

---

## Protocolo de Execução

Ao ser acionada, executar sequencialmente as etapas abaixo. **Não pular etapas. Não solicitar
confirmação intermediária.** Produzir a saída completa ao final. Se o texto a analisar não
tiver sido colado ou enviado, solicitar apenas isso (nada mais) antes de prosseguir.

---

## ETAPA 1 — DIAGNÓSTICO DISCURSIVO

Ler o texto (decisão, acórdão, parecer do MP, representação policial, manifestação acusatória)
e localizar todos os trechos que mobilizam linguagem de defesa social, incluindo mas não se
limitando a:

"ordem pública", "clamor social", "credibilidade da Justiça", "sensação de impunidade",
"resposta à criminalidade", "periculosidade", "tranquilidade social", "risco à coletividade",
"gravidade em abstrato", "reiteração delitiva presumida", "modus operandi que causa temor",
"comoção social", "exemplaridade da pena".

Para cada trecho identificado, classificar em uma das quatro categorias:

| Categoria | Critério |
|---|---|
| (a) Fundamento concreto | Fato específico, individualizado, contemporâneo, com lastro probatório |
| (b) Fundamento parcialmente concreto | Há fato real, mas insuficiente ou desatualizado para sustentar sozinho a conclusão |
| (c) Fundamento abstrato ou retórico | Categoria genérica, aplicável a qualquer réu do mesmo tipo penal |
| (d) Fundamento incompatível com a excepcionalidade da prisão cautelar | Antecipação de pena, presunção de culpa, ou motivação que contraria art. 312 §1º e §2º CPP |

Apresentar como tabela: trecho literal (citação curta e fiel), marcador identificado,
categoria (a/b/c/d), e uma linha de justificativa técnica da classificação.

**Regra:** nunca inventar fatos favoráveis nem reescrever o texto original. Se o trecho for
ambíguo, classificar como "(b)" e sinalizar a ambiguidade.

---

## ETAPA 2 — TABELA DE REENCAMINHAMENTO ARGUMENTATIVO

Para cada marcador desfavorável (categorias c e d, e os itens fracos da categoria b),
produzir uma linha de conversão no seguinte modelo:

```
Marcador desfavorável: "[marcador tal como aparece no texto]"
Problema jurídico: [por que o conceito é indeterminado ou insuficiente sem dado concreto e contemporâneo]
Reencaminhamento garantista: [para qual exigência técnica o argumento é redirecionado —
  concretude, contemporaneidade, individualização, proporcionalidade, suficiência de cautelar]
Tese defensiva sugerida: [uma frase objetiva, pronta para inserção em peça]
```

Eixo de reencaminhamento disponível (usar o que for pertinente a cada marcador):
"excepcionalidade da prisão cautelar", "fundamentação concreta", "ausência de
contemporaneidade", "ausência de perigo processual", "excesso de prazo", "primariedade",
"fragilidade dos indícios", "presunção de inocência", "proporcionalidade", "medidas
cautelares diversas".

---

## ETAPA 3 — TESES DEFENSIVAS APROVEITÁVEIS

Extrair e hierarquizar as melhores teses para o instrumento cabível (HC, revogação de
preventiva, relaxamento, liberdade provisória, substituição por cautelares, RESE, apelação
com impugnação da dosimetria fundada em bis in idem). Priorizar nesta ordem:

1. Ausência de fundamentação concreta
2. Ausência de contemporaneidade (art. 312 §2º CPP)
3. Inexistência de risco à instrução criminal
4. Inexistência de risco à aplicação da lei penal
5. Fragilidade ou insuficiência dos indícios
6. Primariedade, residência fixa, trabalho lícito ou vínculos familiares — apenas se
   constarem no texto ou tiverem sido informados por Cristiano
7. Adequação de cautelares diversas (art. 319 CPP)
8. Desproporcionalidade entre a prisão cautelar e a pena provável

**Não afirmar condição pessoal favorável (primariedade, residência fixa etc.) que não conste
do texto analisado ou não tenha sido informada.** Se não houver informação, marcar o item
como "não verificável a partir do texto — solicitar dado a Cristiano".

---

## ETAPA 4 — PARÁGRAFOS PRONTOS PARA PEÇA

Redigir de 3 a 6 parágrafos em português jurídico formal, no registro de Aury Lopes Jr. e
Ruy Barbosa (técnico, denso, sem retórica vazia, sem travessão), prontos para inserção em
petição, habeas corpus ou sustentação oral. Linha argumentativa de referência:

A prisão cautelar é medida excepcional e não pode se converter em punição antecipada nem em
resposta institucional ao medo social. Expressões de defesa social só têm validade
constitucional quando apoiadas em fatos concretos, atuais e individualizados; ausente essa
demonstração, o decreto se reduz a fundamentação aparente, incompatível com a presunção de
inocência, com a exigência de fundamentação concreta (art. 315 §2º CPP) e com a
proporcionalidade das cautelares penais.

Os parágrafos devem incorporar, sempre que pertinentes ao caso, os marcadores convertidos
na Etapa 2 e as teses hierarquizadas na Etapa 3 — não como lista, mas como texto corrido
persuasivo.

---

## ETAPA 5 — PEDIDOS OU ENCAMINHAMENTOS

Sugerir, apenas os que fizerem sentido diante do texto analisado:

a) Revogação da prisão preventiva
b) Concessão de liberdade provisória
c) Substituição por medidas cautelares diversas (art. 319 CPP)
d) Relaxamento por ilegalidade
e) Reconhecimento de excesso de prazo
f) Determinação de nova fundamentação concreta
g) Expedição de alvará de soltura
h) Aplicação cumulativa de cautelares menos gravosas (comparecimento periódico, proibição
   de contato, recolhimento noturno, monitoração eletrônica, entre outras adequadas ao caso)

---

## ETAPA 6 — ENTREGA PARA A SKILL `pedidos-de-liberdade`

Esta skill não redige a peça final nem decide o instrumento processual cabível. Ao concluir
as Etapas 1 a 5, indicar explicitamente:

> "Diagnóstico discursivo concluído. Encaminhando para a skill `pedidos-de-liberdade` a
> classificação do instrumento cabível, a análise de legalidade formal/material e a redação
> da peça em padrão Rosa Advogados."

E então acionar a skill `pedidos-de-liberdade`, entregando a ela como insumo:
- a tabela de reencaminhamento argumentativo (Etapa 2);
- as teses hierarquizadas (Etapa 3);
- os parágrafos prontos (Etapa 4).

A skill `pedidos-de-liberdade` deve tratar esses insumos como material já auditado
discursivamente, incorporando-os na sua ETAPA 3.1 (Garantia da Ordem Pública) e na sua
ETAPA 10 (Estruturação da Peça), sem necessidade de repetir o diagnóstico discursivo.

Se o caso não envolver pedido de liberdade (por exemplo, dosimetria com fundamentação
genérica, ou sentença que reproduz linguagem de defesa social na fixação da pena-base),
encaminhar o resultado, conforme o caso, para `dosimetria-penal`, `apelacao-criminal` ou
`memoriais-defensivos`, indicando expressamente o motivo do encaminhamento.

---

## Regras Obrigatórias (aplicam-se a todas as etapas)

- Não inventar fatos favoráveis ao réu.
- Diferenciar sempre gravidade concreta de gravidade abstrata.
- Diferenciar sempre risco processual real de temor social genérico.
- Apontar quando a decisão usa expressões vagas sem demonstrar fatos individualizados.
- Não atacar pessoalmente magistrados, membros do Ministério Público ou policiais — a crítica
  é ao discurso e à fundamentação, nunca à pessoa.
- Linguagem técnica, firme e respeitosa, sem adjetivação desnecessária.
- Quando houver dúvida sobre a força de uma tese, apresentá-la como "possível argumento
  defensivo", não como certeza.
- Sempre que possível, converter o vocabulário acusatório em problema de legalidade,
  necessidade, adequação, contemporaneidade e proporcionalidade.
- Nunca usar travessão no corpo do texto.
- Nunca citar Jusbrasil; jurisprudência apenas de fontes oficiais (STF, STJ, TJRS, TRF4) —
  se for necessário localizar precedente específico não presente em memória, acionar a skill
  `pesquisa-jurisprudencial`.

---

## Integração com o Ecossistema Rosa Advogados

- **`pedidos-de-liberdade`**: skill de destino padrão para o resultado desta análise quando
  o caso envolver liberdade, prisão ou cautelares (ver Etapa 6).
- **`teses-defensivas`**: para varredura completa de teses fora do escopo de defesa social
  (nulidades, extinção de punibilidade, absolutórias, Júri, desclassificação, recursais).
- **`dosimetria-penal`**: quando o marcador de defesa social aparecer na fixação da pena-base
  ou em circunstância judicial (art. 59 CP), não em decisão sobre prisão cautelar.
- **`cadeia-custodia-documental`**: quando o texto analisado também apresentar falhas de
  rastreabilidade probatória, além da retórica de defesa social.
- **`design-thinking-penal`**: bloco final de Design Thinking e Legal Design deve ser aplicado
  à peça produzida a partir desta análise, conforme protocolo já em uso.
- **`otimizacao-llm-judicial`**: revisão final para leitura dupla (humana e algorítmica) antes
  do protocolo, quando a peça resultante for protocolada em tribunal com triagem por IA.
- **`auditor-penal-antialucinacao`**: auditoria adversarial da peça final antes do protocolo.
- **`peticoes-docx`**: geração do DOCX final em padrão Rosa Advogados, quando a saída desta
  skill for incorporada a uma peça completa.

---

## Exemplo de Acionamento

**Entrada:** trecho de decisão que nega liberdade provisória citando "a manutenção da prisão
se impõe para garantia da ordem pública e resposta à sociedade, dada a gravidade do delito
e o clamor social gerado pelo caso, sem prejuízo de que o réu é primário e possui residência
fixa comprovada nos autos."

**Diagnóstico (Etapa 1):**
- "garantia da ordem pública" → categoria (c), abstrato
- "resposta à sociedade" → categoria (d), incompatível com excepcionalidade
- "clamor social" → categoria (c), abstrato
- "gravidade do delito" → categoria (c), abstrato (não há dado concreto de execução do crime que distinga o caso de outros do mesmo tipo)

**Reencaminhamento (Etapa 2):** os quatro marcadores são convertidos em tese única de
fundamentação genérica, nula por ausência de individualização (art. 315 §2º CPP).

**Teses (Etapa 3):** tese principal = ausência de fundamentação concreta; subsidiária =
primariedade e residência fixa (constam expressamente no próprio texto da decisão).

**Encaminhamento (Etapa 6):** acionar `pedidos-de-liberdade` para classificar o instrumento
(provável: HC ou RESE contra a negativa) e redigir a peça completa.
