---
name: predicao-camaras-tjrs
description: "Predição de favorabilidade defensiva por Câmara Criminal do TJRS (e por relator, quando houver dado), a partir do perfil do caso: cluster de competência, tipo penal, violência/grave ameaça, vulnerabilidade, primariedade, tipo de pedido. Combina competência do Regimento Interno, sinal empírico histórico (estudo do HC coletivo 143.641/SP) e matriz de estratégia por tipo de caso, com verificação obrigatória de dado atual antes de concluir. Use SEMPRE que Cristiano perguntar qual Câmara é mais favorável, quais as chances no TJRS, se uma Câmara é garantista ou restritiva, quem tende a conceder ou negar, qual desembargador deve relatar, ou pedir prognóstico de HC, RSE, apelação, agravo em execução ou revisão criminal antes da distribuição ou julgamento. Acionar com /predicao, /camara, /desembargador, /distribuicao, /sorteio, /qual-camara, /favoravel, /relator, /chances, /prognostico, /ranking-camaras. Acionar também ao mencionar sinal defensivo, taxa de concessão, probabilidade de HC ou jogo processual no TJRS."
---

# PREDIÇÃO DE FAVORABILIDADE POR CÂMARA CRIMINAL DO TJRS — Rosa Advogados

Skill de apoio à decisão estratégica que estima, a partir do perfil do caso, qual Câmara Criminal do TJRS (e, quando houver dado confiável, qual relator) tende a oferecer melhor ou pior sinal defensivo. Não é oráculo: é ferramenta de gestão de risco processual, dentro da lógica de minimax que orienta o trabalho de Cristiano — minimizar o risco de erro estrutural, maximizar a previsibilidade do resultado.

Integra-se com `pesquisa-jurisprudencial` (verificação e atualização de dados), `design-thinking-penal` (teoria dos jogos e estratégia), `teses-defensivas` e `admissibilidade-recursal-agravos` (adequação da via recursal ao órgão competente).

---

## PROTOCOLO DE CONFIABILIDADE (OBRIGATÓRIO)

1. **Nunca inventar** placar, percentual, nome de desembargador ou julgado que não conste da base de referência ou de fonte oficial verificada nesta sessão.
2. **A base em `references/tjrs-camaras-criminais.md` é histórica** (estudo com recorte até 19/04/2022 e composição de Câmaras de referência antiga). A fonte do estudo empírico está integralmente citada no arquivo (SILVA DE SOUZA & MARTINS, 2024, Revista de Estudos Empíricos em Direito, DOI 10.19092/reed.v11.886) e pode ser referida a Cristiano quando ele pedir a fonte. Trate todo número dela como ponto de partida, nunca como estatística vigente, e restrita ao recorte de prisão domiciliar por maternidade/responsabilidade parental (HC coletivo 143.641/SP) — não extrapolar para outros tipos de pedido sem ressalva.
3. **Antes de entregar predição final**, verificar com `pesquisa-jurisprudencial` ou busca em fontes oficiais (TJRS, site institucional, jurisprudência publicada) se há dado mais recente sobre a Câmara, o cluster ou o relator em questão. Se não houver tempo ou dado disponível, declarar expressamente que a predição usa base histórica desatualizada.
4. **Composição de Câmara muda.** Nunca afirmar que um desembargador integra hoje determinada Câmara sem checar a página oficial do TJRS na sessão atual.
5. **Jusbrasil é vedado.** Fontes: TJRS oficial, STF, STJ, Diário da Justiça Eletrônico.
6. Toda predição entregue deve indicar o **grau de confiança** (alto/médio/baixo) e a **data-base do dado** que a sustenta.

---

## ETAPA 1 — PERFIL DO CASO

Extrair ou perguntar (não travar o fluxo se algo faltar; assumir e declarar a lacuna):

- Tipo penal (tráfico, homicídio, roubo, furto, crime sexual, arma, execução penal etc.)
- Existência de violência ou grave ameaça
- Vulnerabilidade (gestante, mãe/responsável por criança ou pessoa com deficiência, idoso, doente, réu primário)
- Quantidade/prova material (relevante em drogas)
- Tipo de pedido (HC preventivo/repressivo, RSE, apelação, agravo em execução, revisão criminal)
- Fase processual e se já há distribuição/relator sorteado

---

## ETAPA 2 — MAPEAMENTO DE COMPETÊNCIA

Consultar `references/tjrs-camaras-criminais.md`, seção 1, para identificar o cluster de competência (1ª-3ª / 4ª / 5ª-8ª) e qual(is) Câmara(s) podem julgar o caso, conforme o Regimento Interno do TJRS. Confirmar se a divisão regimental permanece vigente antes de afirmar a Cristiano.

---

## ETAPA 3 — VERIFICAÇÃO DE DADO ATUAL

Antes de aplicar o sinal histórico da base de referência, tentar atualizar:

- Buscar decisões recentes (2024-2026) da(s) Câmara(s) relevante(s) no cluster identificado, no mesmo tipo de caso, em fontes oficiais.
- Se disponível, consultar a **API Pública do DataJud** (endpoint TJRS: `https://api-publica.datajud.cnj.jus.br/api_publica_tjrs/_search`, ver `references/tjrs-camaras-criminais.md` seção 8) para checar volume e movimentação recente por Câmara/classe processual — útil especialmente para os clusters sem estudo acadêmico publicado (Matéria Especializada e Patrimônio/Sexual/Trânsito).
- Se Cristiano já tiver planilha própria de acompanhamento (NocoDB ou similar) com placar por Câmara/relator, priorizar esse dado sobre a base histórica.
- Se nada de mais recente for encontrado, prosseguir com a base histórica, sinalizando isso explicitamente no resultado.

---

## ETAPA 4 — PREDIÇÃO E SAÍDA

Entregar sempre neste formato:

### 4.1 Tabela de sinal por Câmara (cluster aplicável)

| Câmara | Sinal defensivo | Confiança | Leitura prática | Data-base do dado |
|---|---|---|---|---|

### 4.2 Ranking provisório de favorabilidade

Ordenar as Câmaras do cluster aplicável da mais à menos favorável, com uma linha de justificativa cada.

### 4.3 Estratégia recomendada

Usar a matriz da seção 5 de `references/tjrs-camaras-criminais.md` como ponto de partida, ajustando ao tipo penal e pedido específico do caso de Cristiano. Regra geral do jogo processual:

- Câmaras/relatores com sinal restritivo → pedido fundado em **ilegalidade verificável objetiva** (prova documental, contradição de audiência, trecho da decisão atacada, precedente vinculante), evitando apelo humanitário genérico.
- Câmaras/relatores com sinal mais favorável → pode-se combinar **tese técnica com narrativa humanitária**, dado maior abertura a proporcionalidade e leitura constitucional.

### 4.4 Fórmula de leitura (não substitui análise qualitativa)

```
Probabilidade defensiva = Câmara + relator + classe processual + tipo penal
  + violência/grave ameaça + existência de vulnerável + primariedade
  + quantidade/prova material + tese processual objetiva
  + contemporaneidade da prisão
```

Usar como checklist mental, não como cálculo numérico real — não há base estatística suficiente para atribuir pesos.

---

## ETAPA 5 — RESSALVA FINAL (SEMPRE INCLUIR)

Toda entrega desta skill deve terminar com aviso de que:

- É modelo preditivo, não juízo definitivo nem garantia de resultado.
- A predição não substitui a solidez da tese jurídica; em Câmaras restritivas, redobrar o rigor técnico.
- O ideal é migrar de predição por estudo antigo para predição por base própria: planilha com acórdãos recentes (Câmara, relator, classe, crime, resultado, fundamento, placar), permitindo calcular uma Taxa de Concessão Defensiva própria, segmentada por tipo de recurso (HC, RSE, apelação, agravo em execução, revisão criminal).

---

## CONSTRUÇÃO DE BASE PRÓPRIA (quando solicitado)

Se Cristiano quiser estruturar o próximo passo mencionado na análise original — uma base de dados própria de acompanhamento —, há duas vias, combináveis:

1. **Manual**: tabela no NocoDB com colunas: `data do acórdão`, `câmara`, `relator`, `classe processual`, `tipo penal`, `resultado (concedido/negado/parcial)`, `fundamento central`, `placar (votos)`, `existência de vulnerabilidade`, `tipo de pedido`.
2. **Semiautomatizada**: consulta à API Pública do DataJud (endpoint TJRS, ver `references/tjrs-camaras-criminais.md` seção 8), filtrando por órgão julgador e classe processual, extraindo movimentações e mapeando os códigos da Tabela Processual Unificada para inferir resultado. Exige curadoria humana do mapeamento de código de movimento antes de tratar como Taxa de Concessão Defensiva confiável — a API não expõe o inteiro teor da decisão nem o relator de forma sempre padronizada.

Isso permite, com o tempo, recalcular a matriz de sinal com dados vivos em vez de depender apenas da base histórica deste arquivo, inclusive preenchendo a lacuna dos clusters Matéria Especializada e Patrimônio/Sexual/Trânsito (seção 7 do arquivo de referência), para os quais não há estudo acadêmico publicado equivalente ao da seção 3.

Quando essa base própria existir e for atualizada, ela deve prevalecer sobre `references/tjrs-camaras-criminais.md` para qualquer predição futura.
