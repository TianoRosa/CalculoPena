# Base de Dados — Predição por Câmara Criminal do TJRS

Este arquivo é a base de conhecimento estruturada usada pela skill `predicao-camaras-tjrs`. Contém três blocos: (1) divisão de competência por Regimento Interno, (2) sinal defensivo por cluster com base em estudo empírico datado, (3) composição de desembargadores por Câmara.

**Data de referência dos dados empíricos: estudo sobre aplicação do HC coletivo 143.641/SP, recorte até 19/04/2022.** Este estudo tem mais de quatro anos. Trate todo número deste arquivo como ponto de partida histórico, nunca como estatística atual. Antes de entregar qualquer predição a Cristiano, verificar se há dado mais recente disponível (ver Etapa 3 do SKILL.md).

---

## 1. Competência por Regimento Interno do TJRS (Câmaras Criminais)

**Fonte oficial**: Resolução nº 01/98 do TJRS (Órgão Especial, sessão de 27/04/1998, publicada no D.J. em 30/04/1998), "Dispõe sobre a composição e competência dos Órgãos do Tribunal de Justiça", art. 7º (formação dos Grupos Criminais) e art. 12 (competência material das Câmaras Criminais). Texto consolidado até 04/06/2018 disponível em: https://www.direitohd.com/res0198tjrs (fonte extraída do site oficial do TJRS: http://www.tjrs.jus.br/publicacoes/publ_adm_xml/documento1.php?cc=2607&ct=3&ap=1998&np=1&sp=1). Compilações não oficiais indicam ainda o art. 29 do Regimento Interno do TJRS tratando do mesmo tema em redação consolidada mais recente — **verificar o texto vigente diretamente no Regimento Interno publicado no site oficial do TJRS antes de citar em petição**, pois a Resolução 01/98 já sofreu alterações por resoluções e atos posteriores (ex.: Res. 01/2012-OE revogou o parágrafo único do art. 12).

Grupos criminais formados em pares (art. 7º): **1ª+2ª** (1º Grupo), **3ª+4ª** (2º Grupo), **5ª+6ª** (3º Grupo), **7ª+8ª** (4º Grupo).

Competência material (art. 12):

| Câmara | Cluster de competência (redação do art. 12) |
|---|---|
| 1ª, 2ª, 3ª Câmaras | Crimes dolosos e culposos contra a pessoa; crimes de entorpecentes (atual Lei 11.343/2006); crime da Lei de Armas; crimes de trânsito; crimes contra a honra |
| 4ª Câmara | Competência originária para infrações de Prefeitos; competência recursal para crimes de responsabilidade/funcionais de ex-prefeitos, crimes contra incolumidade pública, crimes contra Administração Pública, parcelamento de solo urbano, crimes contra ordem tributária, abuso de autoridade, crimes contra economia popular/consumidor, crimes ambientais, crimes contra licitações, crimes contra fé pública, crimes falimentares, crimes contra propriedade intelectual, crimes da Lei de Armas |
| 5ª, 6ª, 7ª, 8ª Câmaras | Crimes contra os costumes (atual dignidade sexual); crimes contra o patrimônio; demais infrações penais |

**Nota de verificação obrigatória**: a competência regimental pode ser alterada por resolução do TJRS. Confirmar a divisão vigente no Regimento Interno publicado no site oficial do TJRS antes de usar este dado em peça, especialmente se o último acesso registrado na sessão for anterior à data atual.

---

## 2. Sinal defensivo preliminar por cluster

### Cluster Pessoa / Drogas / Honra

| Câmara | Sinal defensivo | Confiança | Leitura prática |
|---|---|---|---|
| 3ª | Mais favorável | Médio | Melhor sinal para HC, drogas, maternidade, vulnerabilidade social, teses constitucionais |
| 2ª | Intermediária-favorável | Médio | Boa zona para liberdade quando há excesso de prazo, ausência de violência, primariedade ou fragilidade concreta da prisão |
| 1ª | Mais restritiva no recorte disponível | Médio | Exige peça muito técnica com ilegalidade objetiva; menor rendimento para tese humanitária genérica |

### Cluster Matéria Especializada

| Câmara | Sinal defensivo | Confiança | Leitura prática |
|---|---|---|---|
| 4ª | Técnica/variável | Baixo-médio | Sem comparação direta ampla; boa para nulidades, prova ilícita, busca/apreensão, armas, crimes funcionais e teses técnico-constitucionais. Predição deve ser feita mais pelo relator e pela tese do que por uma ideia genérica de "solta muito/pouco" |

### Cluster Patrimônio / Sexual / Trânsito / Demais

| Câmara | Sinal defensivo | Confiança | Leitura prática |
|---|---|---|---|
| 5ª | Restritiva em crimes violentos; razoável em furto/vulnerabilidade | Médio | Ruim para roubo, latrocínio, extorsão e sexual; melhor em furto, baixa ofensividade, pedidos humanitários |
| 6ª | Média/incerta | Baixo | Necessária mineração recente; não classificar como boa nem ruim sem recorte por relator |
| 7ª | Média, com algum sinal humanitário | Baixo | Possível espaço em execução, cautelares e casos sem violência; ainda exige base quantitativa recente |
| 8ª | Tendencialmente mais rígida, sobretudo em sexual/vulnerável | Baixo-médio | Zona de maior dificuldade defensiva, especialmente com vítima vulnerável ou crime patrimonial grave |

---

## 3. Dado empírico de origem (HC coletivo 143.641/SP no TJRS)

**Fonte verificada**: SILVA DE SOUZA, Leandro Mateus; MARTINS, Fernanda. "Maternidade Livre: a aplicabilidade do HC Coletivo 143.641/SP pelo Tribunal de Justiça do Rio Grande do Sul – TJRS". *Revista de Estudos Empíricos em Direito*, v. 11, 2024. DOI: https://doi.org/10.19092/reed.v11.886. Artigo disponível em https://reedrevista.org/reed/article/view/886 (PDF: https://revistareed.emnuvens.com.br/reed/article/download/886/506/5371). Publicação revisada por pares, acesso aberto (CC-BY 4.0). Autora Fernanda Martins é doutora em Ciências Criminais pela PUC/RS e professora adjunta na UFSM.

Metodologia declarada pelas autoras: busca de jurisprudência no sítio eletrônico do TJRS com a palavra-chave "HC Coletivo 143641" (sem aspas), filtrada para as oito Câmaras Criminais, com objeto de busca na ementa das decisões. Data de corte do levantamento: 19 de abril de 2022.

Estudo com 142 acórdãos das oito Câmaras Criminais (recorte até 19/04/2022), sobre prisão domiciliar de gestantes, mães e responsáveis por crianças ou pessoas com deficiência.

- Resultado geral: 42% de concessões, 58% de denegações, com forte presença de casos de tráfico.
- **3ª Câmara**: em tráfico, 16 concessões x 3 denegações. Descrita como mais alinhada ao HC coletivo 143.641/STF.
- **2ª Câmara**: em tráfico, 19 concessões x 16 denegações (posição intermediária).
- **1ª Câmara**: 69% das decisões negaram substituição por domiciliar no universo geral; em tráfico, 14 concessões x 21 denegações.
- **5ª Câmara**: 10/10 casos de roubo, latrocínio, extorsão ou crime sexual foram denegados; em furto, 5 concessões x 4 denegações (mais equilibrado).
- **4ª, 6ª, 7ª, 8ª Câmaras**: amostra pequena — apenas 2 concessões em 11 acórdãos no conjunto. Tratar como indício, não como conclusão.

**Uso em peça**: este artigo pode ser citado como referência doutrinária/empírica secundária (nunca como jurisprudência em si, nem como estatística oficial do TJRS), sempre identificando-o como estudo acadêmico com recorte temporal específico (até 04/2022) e universo amostral limitado (142 acórdãos, tema restrito a prisão domiciliar por maternidade/responsabilidade parental). Não usar os percentuais como se fossem taxa de concessão vigente da Câmara para qualquer tipo de pedido — o estudo cobre apenas o recorte de HC coletivo 143.641/SP.

**Estudos correlatos para eventual ampliação da base** (mesma linha metodológica, outros tribunais — não usar para inferir dado do TJRS, apenas como referência de método ou contraste):
- CASTRO, Bruna Azevedo de; OLIVEIRA, Caio Cezar Maia de. "Prisão domiciliar de mulheres mães e gestantes: o impacto do precedente firmado pelo STF no HC nº 143.641-SP sobre as decisões do TJPR". Estudo com 247 decisões do TJ do Paraná. Disponível em: https://reedrevista.org/reed/article/download/967/555/6364
- Estudo sobre aplicação do HC 143.641 no TJSP, com conclusão de que o indeferimento se tornou regra. Disponível em: https://www.academia.edu/42752676/

---

## 4. Composição de desembargadores por Câmara (referência histórica — verificar atualização)

**Atenção crítica**: composição de tribunal muda com aposentadorias, promoções e remanejamentos. Este bloco reflete o estado registrado na página institucional do TJRS na época da pesquisa original. Nunca afirmar a Cristiano que um desembargador integra hoje determinada Câmara sem verificação na sessão atual (página oficial do TJRS). Se não verificado, apresentar como "composição de referência, requer confirmação".

| Câmara | Desembargadores (referência histórica) |
|---|---|
| 1ª | José Conrado Kurtz de Souza, Régis Montenegro Barbosa, Marco Aurélio Martins Xavier, Ulysses Fonseca Louzada |
| 2ª | Rosaura Borba, Sandro Luz Portal, Márcia Kern, Elaine Maria Canto da Fonseca |
| 3ª | Rinez da Trindade, José Guilherme Giacomuzzi, José Luiz John dos Santos, David Medina da Silva, Marcio Schlee Gomes |
| 4ª | Rogério Gesta Leal, Julio Cesar Finger, Jayme Weingartner Neto, Gisele Anne Vieira de Azambuja |
| 5ª | Vanderlei Tremeia Kubiak, Joni Victoria Simões, Maria de Lourdes Galvão Braccini de Gonzalez |
| 6ª | João Batista Marques Tovo, Ícaro Osório, Lizete Sebben, Sérgio Achutti Blattes |
| 7ª | Luiz Mello Guimarães, Volcir Antonio Casal, José Ricardo Coutinho Silva, João Pedro de Freitas Xavier |
| 8ª | Naele Ochoa Piazzeta, Fabianne Breton Baisch, Isabel de Borba Lucas, Vanessa Gastal de Magalhães, Cleciana Guarda Lara Pech |

---

## 5. Matriz de estratégia por tipo de caso

| Tipo de caso | Melhor aposta preliminar | Pior cenário preliminar | Estratégia defensiva recomendada |
|---|---|---|---|
| Tráfico sem violência, primário, pequena/média quantidade | 3ª > 2ª > 1ª | 1ª | HC com falta de fundamentação concreta, Tema 1.258/STJ, Tema 977/STF, cadeia de custódia, primariedade, cautelares |
| Tráfico com maternidade/filhos menores | 3ª muito acima | 1ª | HC 143.641/STF, Estatuto da Primeira Infância, art. 318 CPP, prova documental da criança, ausência de violência |
| Homicídio/júri | 3ª/2ª, dependendo do relator | 1ª mais difícil | Excesso de linguagem, ausência de indícios mínimos, excesso de prazo, contemporaneidade, pronúncia contaminada |
| Furto, receptação simples, patrimônio sem violência | 5ª pode ser aproveitável | 8ª/6ª incertas | Insignificância, atipicidade material, regime, substituição, confissão, restituição, vulnerabilidade social |
| Roubo, latrocínio, extorsão | Todas difíceis; 5ª sinal restritivo | 5ª/8ª | Evitar tese abstrata de liberdade; focar nulidade, reconhecimento pessoal, prova frágil, dosimetria, regime |
| Crimes sexuais | Zona mais rígida, especialmente 8ª | 8ª | Contradição objetiva, prova pericial, palavra da vítima quando isolada, nulidades, dosimetria |
| Armas | 4ª | Sem par comparativo | Busca pessoal/domiciliar, ausência de potencialidade, cadeia de custódia, posse compartilhada, dolo, prova pericial |
| Execução penal | Relator pesa mais que Câmara | Variável | Agravo objetivo: cálculo, datas, requisito objetivo/subjetivo, falta grave, proporcionalidade |

---

## 6. Ranking defensivo provisório (favorabilidade geral, referência histórica)

1. 3ª Câmara — melhor sinal no cluster drogas/pessoa
2. 2ª Câmara — favorável/intermediária, sobretudo em HC bem instruído
3. 4ª Câmara — técnica, dependente do relator e da tese; não comparável diretamente
4. 7ª Câmara — incerta, com algum espaço em teses humanitárias/executórias
5. 6ª Câmara — média/incerta; precisa mineração recente
6. 5ª Câmara — restritiva em violência/sexual; melhor em furto
7. 1ª Câmara — mais restritiva no recorte drogas/maternidade
8. 8ª Câmara — presumidamente mais difícil em sexual/vulnerável e patrimônio grave

## 7. Lacuna de fonte empírica — clusters Matéria Especializada e Patrimônio/Sexual/Trânsito

Busca realizada não localizou, até a data desta pesquisa, estudo acadêmico revisado por pares ou levantamento jurimétrico público que quantifique taxa de concessão/denegação especificamente para as Câmaras do cluster de Matéria Especializada (4ª) ou do cluster Patrimônio/Sexual/Trânsito (5ª a 8ª) do TJRS, nos moldes do que existe para o cluster Pessoa/Drogas/Honra (seção 3).

O que foi localizado e pode servir de referência metodológica (não de dado direto sobre o TJRS):

- **ABJ (Associação Brasileira de Jurimetria)** mantém observatório "Variabilidade das decisões nas Câmaras de Direito Criminal" — mas o estudo publicado cobre o **TJSP**, não o TJRS. Útil como modelo de metodologia caso Cristiano queira encomendar ou construir estudo equivalente para o TJRS. Ver: https://abj.org.br/pesquisas/camaras-2/
- Estudos sobre HC 143.641/SP em outros tribunais (TJPR, TJSP) seguem a mesma metodologia da seção 3, mas não substituem dado do TJRS para os clusters de patrimônio/sexual.
- Há dissertação de mestrado na PUCRS sobre discurso e atuação em Câmaras Criminais do TJRS ("O poder de punir o outro e o sentido do castigo provisório: atuações, textos e discursos em câmaras criminais do TJRS", disponível em https://tede2.pucrs.br/tede2/handle/tede/4704) — é análise de discurso, não levantamento quantitativo de taxa de concessão; pode ter valor qualitativo para entender o raciocínio decisório de determinadas Câmaras, mas não gera percentual comparável ao da seção 3. Verificar o texto completo antes de citar, pois não foi lido integralmente nesta pesquisa.

**Consequência prática**: para tráfico/pessoa/honra (1ª-3ª Câmaras), a skill dispõe de lastro empírico publicado. Para os demais clusters, o sinal apresentado nas seções 2 e 5 é **inferência estrutural** (baseada em competência regimental, natureza do bem jurídico tutelado e prática processual observada, não em contagem de acórdãos publicada) — deve ser tratado com confiança mais baixa e sempre comunicado como tal a Cristiano. A via mais promissora para preencher essa lacuna com dado vivo é a API Pública do DataJud (ver seção 8), combinada ou não com registro manual complementar no NocoDB.

## 8. API Pública do DataJud/CNJ — via de automação para a base própria

**Fonte oficial**: API Pública do DataJud, mantida pelo CNJ, instituída pela Resolução CNJ nº 331/2020 e regulamentada pela Portaria CNJ nº 160/2020. Documentação: https://datajud-wiki.cnj.jus.br/api-publica/. Chave pública de acesso (pode ser alterada pelo CNJ): https://datajud-wiki.cnj.jus.br/api-publica/acesso.

**Endpoint do TJRS**: `https://api-publica.datajud.cnj.jus.br/api_publica_tjrs/_search` (método POST, header `Authorization: APIKey [chave pública vigente]`).

Retorna metadados processuais estruturados: classe processual (conforme Tabela Processual Unificada — TPU), órgão julgador, assuntos, grau, data de ajuizamento, e lista de movimentações com código e data. **Não retorna o inteiro teor da decisão** nem, de forma direta e padronizada, o relator ou o resultado de mérito — isso precisa ser inferido a partir dos códigos de movimento da TPU (ex.: códigos correspondentes a "concessão da ordem", "denegação", "provimento", "improvimento").

**Uso recomendado para preencher a lacuna da seção 7**: consultar a API filtrando por `orgaoJulgador` (cada uma das oito Câmaras Criminais do TJRS) e `classe` (Habeas Corpus, Apelação Criminal, Recurso em Sentido Estrito, Agravo em Execução Penal), extrair os códigos de movimento de resultado e agregar por Câmara, construindo uma Taxa de Concessão Defensiva própria e viva — mais confiável que os estudos acadêmicos com recorte antigo (seção 3) e sem a lacuna dos clusters 4ª/5ª-8ª (seção 7).

**Limitações a considerar antes de usar como base de decisão**:
- Processos em segredo de justiça (boa parte de HC e execução penal) não aparecem na API.
- Mapeamento de código de movimento → resultado de mérito exige trabalho de curadoria e pode gerar falso positivo/negativo se a Câmara usar códigos de movimento genéricos.
- Relatoria nem sempre vem identificada de forma direta e uniforme nos metadados — pode ser necessário cruzar com consulta processual individual (site do TJRS) para casos relevantes.
- Há relato de usuários (comunidade TabNews, 2023) de movimentações desatualizadas especificamente na consulta ao TJRS — recomendável validar amostra antes de tratar como fonte definitiva.
- Termo de Uso da API (https://datajud-wiki.cnj.jus.br/api-publica/termo-uso) deve ser respeitado quanto à finalidade de uso dos dados.

**Consequência prática**: esta API é o caminho tecnicamente mais viável para transformar a "Construção de base própria" (ver SKILL.md) de tarefa manual em pipeline semiautomatizado, mas ainda exige validação humana do mapeamento de resultado antes de qualquer número ser tratado como Taxa de Concessão Defensiva confiável.
