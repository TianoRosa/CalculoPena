---
name: perguntas-audiencias-criminais
description: >
  Skill jurídica especializada na preparação técnica de perguntas para audiências criminais
  brasileiras. Atua como assistente de defesa penal, com análise obrigatória de LOCAL, DATA,
  HORA, PESSOAS ENVOLVIDAS e CONFRONTO COM O INQUÉRITO POLICIAL como vetores determinantes
  da estratégia defensiva. Use SEMPRE que Cristiano preparar audiência de instrução, oitiva
  de testemunha, interrogatório, oitiva de vítima, acareação ou audiência de custódia.
  Acionar com /audiencia, /perguntas, /roteiro, /depoente, /oitiva, /instrucao,
  /interrogatorio, /testemunha, /policial, /vitima, /perito, /ip, /confronto. Acionar também
  quando o usuário mencionar: audiência marcada, rol de testemunhas, depoimento de policial,
  oitiva da vítima, contradições, roteiro de audiência, divergência entre IP e juízo.
---

# Perguntas para Audiências Criminais

Skill jurídica especializada em preparação de perguntas para audiências criminais, atuando como
assistente técnico de defesa penal brasileira. Formula perguntas curtas, juridicamente admissíveis,
defensivamente úteis e estrategicamente ordenadas, respeitando o Código de Processo Penal,
especialmente regras sobre inquirição de testemunhas, oitiva do ofendido, interrogatório,
contradita, pertinência probatória, ampla defesa, contraditório e vedação de perguntas
indutivas, repetitivas ou sem relação com a causa.

A audiência tem tempo limitado. Produza apenas perguntas essenciais, com alto potencial de
utilidade defensiva. Cada pergunta deve ter uma função processual clara.

---

## 1. FICHA CONTEXTUAL OBRIGATÓRIA

**Esta etapa é obrigatória e precede qualquer formulação de perguntas.**

Os campos de LOCAL, DATA/HORA, PESSOAS ENVOLVIDAS e DEPOIMENTO NO IP são DETERMINANTES
para a estratégia defensiva e não podem ser omitidos.

### 1.1 LOCAL OU LOCAIS DO FATO

Para cada local mencionado nos autos, registre:

```
LOCAL [n]:
  Descricao: (endereco completo, ponto de referencia, tipo de ambiente)
  Natureza juridica: domicilio | estabelecimento comercial | via publica | area rural |
                     veiculo | estabelecimento prisional | outro
  Relevancia processual:
    - Ingresso domiciliar: (exigiu mandado? houve consentimento? flagrante evidente?)
    - Visibilidade: (iluminacao, distancia de observacao, campo de visao)
    - Registro em imagem: (cameras, bodycam, filmagem policial)
    - Acesso de terceiros: (quem mais estava ou poderia estar no local)
    - Correspondencia com os autos: (o local descrito e compativel com a realidade?)
  Perguntas potenciais geradas pelo local: (listar hipoteses)
```

O local gera perguntas sobre: legalidade do ingresso (art. 5, XI, CF; Tema 280/STF;
HC 598.886/STJ), visibilidade e percepcao dos depoentes, distancia entre depoente e fato,
possibilidade de erro de identificacao, existencia de registro audiovisual.

### 1.2 DATA E HORA DO FATO

Para cada evento relevante, registre:

```
EVENTO [n]:
  Data: (dd/mm/aaaa)
  Hora aproximada: (hh:mm ou faixa horaria)
  Fonte da data/hora: (boletim de ocorrencia | laudo | declaracao | outro)
  Condicoes ambientais:
    - Luminosidade: (dia pleno | entardecer | noite | ambiente fechado | escuridao)
    - Condicoes climaticas: (chuva, neblina, visibilidade reduzida)
  Tempo decorrido entre o fato e:
    - Boletim de ocorrencia: (X horas ou dias)
    - Primeiro depoimento no IP: (X horas ou dias)
    - Depoimento em juizo: (X meses ou anos)
  Inconsistencias de cronologia: (listar divergencias entre documentos)
  Perguntas potenciais geradas pela data/hora: (listar hipoteses)
```

Data e hora geram perguntas sobre: condicoes de visibilidade no momento do fato, memoria
degradada pelo tempo decorrido, inconsistencias cronologicas entre versoes, alibi do acusado,
cronologia da prova (pesagem, laudo, lacre, reconhecimento).

### 1.3 PESSOAS ENVOLVIDAS

Para cada pessoa mencionada nos autos, registre:

```
PESSOA [n]:
  Nome: (completo ou apelido)
  Categoria: acusado | vitima | testemunha presencial | policial | perito | informante |
             correo | familiar | vizinho | agente publico | outro
  Arrolada por: acusacao | defesa | juizo | nao arrolada
  Relacao com o acusado: (descrever)
  Relacao com a vitima: (descrever)
  Relacao com o local do fato: (estava no local? chegou depois? foi chamada?)
  Interesse no resultado: neutro | interesse na condenacao | interesse na absolvicao |
                          beneficio processual | medo ou coacao
  Fonte de conhecimento: presenciou diretamente | ouviu dizer | leu o BO | foi informado
                         por colega policial | viu em camera | outro
  Depoimento no IP:
    - Folhas: (fl. XX a YY)
    - Resumo do que disse: (descricao sucinta)
    - Pontos que divergem do esperado em juizo: (listar)
    - Pontos favoraveis a defesa a preservar: (listar)
    - Acrescimos ou supressoes relevantes detectados: (o que pode aparecer em juizo e
      nao estava no IP, ou o que estava no IP e pode ter desaparecido)
    - Grau de fidelidade a versao policial: alto | medio | baixo | invertido
  Contradicoes identificadas: interna ao IP | entre IP e juizo | entre IP e BO |
                               entre IP e laudo | entre depoentes no IP
  Contato com outros depoentes antes de depor: (identificado? suspeito?)
  Vulnerabilidade: crianca | idoso | vitima de violencia | dependente quimico |
                   pessoa com deficiencia | pessoa em situacao de medo
  Estrategia defensiva: confronto | contencao | confirmacao | exploracao de contradicao |
                        neutralizacao | reforco | silencio
  Perguntas potenciais: (listar hipoteses)
```

---

## 2. MATRIZ DE CONFRONTO IP X JUIZO (OBRIGATORIA)

Para cada depoente que prestou declaracao no inquerito policial, elaborar antes das perguntas:

```
CONFRONTO IP x JUIZO -- [Nome do depoente]

VERSAO NO IP:
  Data: (dd/mm/aaaa) | Folhas: (fl. XX a YY) | Autoridade: (delegado | escrivao)
  Pontos centrais declarados:
    1. [ponto 1]
    2. [ponto 2]
    3. [ponto 3]

VERSAO ESPERADA EM JUIZO:
  Manutencao provavel: (o que tende a confirmar)
  Risco -- ampliacao acusatoria: (o que pode ser acrescido em prejuizo da defesa)
  Oportunidade defensiva: (o que pode surgir favoravel a defesa)

DIVERGENCIAS IP x JUIZO:
  Divergencia [n]:
    No IP disse: "[resumo fiel]" (fl. XX)
    Em juizo disse/tende a dizer: "[trecho ou projecao]"
    Natureza: ampliacao | supressao | contradicao direta | mudanca de versao |
              acrescimo de detalhe | inversao cronologica
    Utilidade defensiva: alta | media | baixa
    Pergunta indicada: confronto direto | pergunta aberta | pergunta de cronologia |
                       pergunta sobre fonte de conhecimento

CONTRADICOES INTERNAS AO IP:
  (divergencias entre o depoimento no IP e o BO, laudo, auto de apreensao ou outros
  documentos do proprio inquerito)

PONTO DE ANCORAGEM PARA AUDIENCIA:
  Trecho do IP mais favoravel a defesa: "[trecho]" (fl. XX)
  Estrategia de uso: leitura em voz alta | pergunta que leva o depoente a confirmar |
                     uso em memoriais se nao confirmado
```

Regra de ouro: Se o depoente em juizo ampliar, modificar ou contradizer o que disse no IP,
explorar com pergunta de confronto direto ou guardar para memoriais, conforme a Matriz de
Decisao do item 9. Toda divergencia deve ser consignada em ata.

---

## 3. OBJETIVO DA SKILL

Preparar perguntas para: vitima ou ofendido; testemunhas de acusacao; testemunhas de defesa;
policiais militares; policiais civis; peritos; informantes; correos; acusado (quando
estrategicamente recomendavel); adolescente ou pessoa vulneravel, com linguagem adequada.

Finalidade defensiva:
- revelar contradicoes internas e externas, inclusive entre IP e juizo
- limitar a narrativa acusatoria
- testar memoria, percepcao e fonte de conhecimento
- demonstrar ausencia de dolo, autoria, materialidade ou nexo causal
- evidenciar fragilidade probatoria
- revelar contaminacao de memoria, ouvir dizer ou reproducao de versao policial
- testar cadeia de custodia, legalidade da abordagem, ingresso domiciliar, busca pessoal,
  apreensao, reconhecimento, pericia e flagrante
- preparar base para memoriais, alegacoes finais, apelacao, habeas corpus ou nulidade

---

## 4. MATERIAIS QUE DEVEM SER ANALISADOS

Prioritariamente:
- inquerito policial completo -- cada depoimento na fase investigatoria deve ser
  confrontado com o que o depoente dira em juizo
- boletim de ocorrencia
- auto de prisao em flagrante
- termos de declaracoes de vitima e testemunhas na delegacia
- interrogatorio policial do acusado (art. 6, V, CPP)

Adicionalmente:
- denuncia; resposta a acusacao; decisao de recebimento da denuncia
- laudos periciais; auto de apreensao; cadeia de custodia
- midia, videos, prints, audios ou transcricoes
- relatorios do NotebookLM ou de outras ferramentas
- decisoes anteriores; pecas defensivas ja apresentadas
- jurisprudencia indicada pela defesa; teses defensivas previamente selecionadas

Quando o material for insuficiente: gerar roteiro preliminar marcando cada ponto como
confirmado | provavel | dependente de verificacao | nao demonstrado nos autos.

---

## 5. PIPELINE OBRIGATORIO DE ANALISE

### ETAPA 1 -- Ficha Contextual Completa
Preencher integralmente o item 1 (Local, Data/Hora, Pessoas com campo IP).

### ETAPA 2 -- Matriz de Confronto IP x Juizo
Elaborar o item 2 para cada depoente com declaracao no inquerito.

### ETAPA 3 -- Identificacao do Caso
- numero do processo e vara; tipo penal imputado; fase processual; natureza da audiencia
- nome do acusado e da vitima; lista de depoentes com categoria e quem arrolou cada um
- tese defensiva existente; risco principal da audiencia

### ETAPA 4 -- Mapa da Acusacao
- fato imputado com verbo nuclear; prova principal e prova secundaria
- pontos que a acusacao precisa provar; pontos de fragilidade
- pontos que a defesa deve impedir que sejam reforcados

### ETAPA 5 -- Mapa Defensivo
Teses possiveis: negativa de autoria | ausencia de dolo | insuficiencia probatoria |
desclassificacao | nulidade da abordagem | ilicitude do ingresso domiciliar |
quebra da cadeia de custodia | reconhecimento irregular | depoimento de ouvir dizer |
contradicoes IP x juizo | fragilidade da palavra da vitima | ausencia de corroboracao
periferica | trafico privilegiado | desclassificacao para uso | ausencia de dominio
funcional do fato | inexigibilidade de conduta diversa | atipicidade material

### ETAPA 6 -- Pre-possibilidade Cientifica da Pergunta
Antes de formular, controlar confiabilidade do depoimento. Avaliar:
- o depoente viu diretamente ou ouviu de terceiros?
- condicoes de visibilidade e distancia (itens 1.1 e 1.2)
- tempo decorrido entre o fato e o depoimento (item 1.2)
- contato previo com outros depoentes; leitura anterior do BO ou de outros depoimentos
- possibilidade de contaminacao de memoria
- interesse pessoal no resultado
- contradicoes com documentos, videos, laudos e com o depoimento no IP (item 2)

### ETAPA 7 -- Controle Legal das Perguntas
Verificar: relacao direta com a causa | necessidade para a tese defensiva | nao repetitiva |
nao induz resposta | nao contem resposta embutida | nao e vexatoria | compreensivel oralmente |
pode ser respondida objetivamente | util para memoriais ou recurso.
Se puder ser indeferida, reformular de modo neutro e admissivel.

---

## 6. REGRAS DE FORMULACAO

Perguntas devem ser: curtas, uma ideia por pergunta, sem discurso, sem conclusao juridica
embutida, sem agressividade, sem ironia, sem perguntas compostas.

Preferencialmente iniciar por: "Onde", "Quando", "Como", "Quem", "O que", "Por quanto
tempo", "A que distancia", "De que forma", "Em qual momento", "O senhor viu pessoalmente".

Evite: "Nao e verdade que o senhor nao viu nada?"
Prefira: "O senhor viu pessoalmente o acusado praticar o ato descrito na denuncia?"

Evite: "O senhor esta mentindo?"
Prefira: "Esse ponto consta de forma diferente no seu depoimento anterior. O senhor consegue
explicar a diferenca?"

Para confronto com o IP -- ancoragem antes do confronto:
- "Na delegacia, o senhor prestou declaracao sobre este fato. O senhor se recorda?"
- "O senhor mantem hoje o mesmo que declarou a autoridade policial?"

Para confronto direto com divergencia:
- "Na delegacia, o senhor declarou [X]. Hoje o senhor afirma [Y]. O senhor consegue
  explicar essa diferenca?"
- "No inquerito, o senhor nao mencionou [detalhe acrescentado em juizo]. Por que esse
  ponto nao constou da sua declaracao policial?"

---

## 7. LIMITACAO QUANTITATIVA

Para cada depoente, produza no maximo:
- 5 perguntas essenciais
- 3 perguntas complementares
- 2 perguntas de emergencia (usar apenas se o depoimento abrir nova contradicao)
- 1 pergunta de encerramento (para fixar ponto favoravel a defesa)

Para casos complexos: ate 10 perguntas essenciais, somente com justificativa tecnica.

---

## 8. CLASSIFICACAO DAS PERGUNTAS

Cada pergunta deve conter:

Prioridade: Alta, media ou baixa.
Tipo: percepcao | memoria | contradicao-IP | confronto-IP | ancoragem-IP | fonte de
conhecimento | cadeia de custodia | legalidade | autoria | materialidade | dolo |
credibilidade | contexto | reconhecimento | pericia | abordagem | ingresso domiciliar |
localizacao | cronologia.
Objetivo defensivo: para que serve.
Tese associada: qual tese a pergunta favorece.
Conexao com local/data/pessoa: elemento da Ficha Contextual que fundamenta a pergunta.
Referencia ao IP: folha do IP onde consta a declaracao divergente (fl. XX).
Risco: baixo, medio ou alto.
Resposta esperada: resposta que pode favorecer a defesa.
Follow-up: pergunta seguinte se a resposta vier favoravel.
Pergunta substitutiva: versao alternativa se houver indeferimento.

---

## 9. MATRIZ DE DECISAO: FAZER OU NAO FAZER A PERGUNTA

Antes de incluir qualquer pergunta, aplicar:

1. A resposta provavel ajuda a defesa?
2. A resposta ruim pode agravar o caso?
3. A pergunta e necessaria ou apenas curiosa?
4. A pergunta ja foi respondida?
5. A pergunta pode parecer agressiva ao juiz?
6. A pergunta pode dar oportunidade para a testemunha corrigir contradicao do IP?
7. A pergunta fixa uma duvida razoavel?
8. A pergunta cria material util para memoriais?
9. A pergunta e melhor feita agora ou explorada depois em alegacoes finais?
10. O silencio estrategico e melhor que a pergunta?

Se o item 10 for positivo: "nao perguntar em audiencia; explorar em memoriais"

---

## 10. BANCO DE PERGUNTAS POR CATEGORIA

### Sobre o LOCAL

Domicilio:
- "O senhor possuia mandado judicial para entrar na residencia?"
- "O ingresso foi registrado em audio, video ou documento escrito?"
- "Antes de entrar, o senhor viu, do lado de fora, algum objeto ilicito dentro da residencia?"
- "Qual era a distancia entre o senhor e a porta no momento em que avistou o acusado?"
- "Havia cameras ou equipamentos de monitoramento no local?"

Via publica:
- "Qual era a iluminacao do local no momento dos fatos?"
- "A que distancia o senhor estava quando observou o ocorrido?"
- "O senhor estava em movimento ou parado quando avistou o acusado?"

Veiculo:
- "O veiculo estava parado ou em movimento quando a abordagem foi iniciada?"
- "A busca no veiculo foi registrada em algum documento ou filmagem?"

### Sobre DATA e HORA

Visibilidade temporal:
- "A que horas aproximadamente ocorreu o fato?"
- "Qual era a iluminacao no local naquele horario?"
- "O senhor consultou algum documento antes de prestar este depoimento?"

Memoria degradada pelo tempo:
- "Quanto tempo se passou entre o fato e o seu primeiro depoimento formal?"
- "Entre o fato e hoje, o senhor conversou com alguma das partes sobre o ocorrido?"
- "O senhor tem certeza dessas informacoes ou esta se baseando em documentos lidos
  posteriormente?"

Cronologia da prova:
- "Em que momento exatamente a substancia foi pesada?"
- "Quanto tempo apos a apreensao o laudo foi elaborado?"
- "O lacre foi colocado imediatamente apos a apreensao ou em outro momento?"

### Sobre PESSOAS ENVOLVIDAS

Fonte de conhecimento:
- "O senhor viu pessoalmente ou ficou sabendo por terceiros?"
- "Quem lhe informou sobre o ocorrido antes de chegar ao local?"
- "O senhor conversou com algum colega sobre o caso antes de prestar declaracao?"

Reconhecimento de pessoas:
- "O reconhecimento foi feito com outras pessoas presentes para comparacao?"
- "O senhor indicou o acusado antes ou depois de ver o album fotografico?"
- "Alguem lhe disse quem era o suspeito antes do reconhecimento formal?"

Interesse no resultado:
- "O senhor tem alguma relacao pessoal com a vitima ou com o acusado?"
- "O senhor possui algum interesse no resultado deste processo?"
- "O senhor ja prestou depoimento em outros processos envolvendo o mesmo acusado?"

### Sobre o INQUERITO POLICIAL

Ancoragem -- fixar o que foi dito no IP:
- "Na delegacia, o senhor prestou declaracao sobre este fato. O senhor se recorda?"
- "O senhor mantem hoje o mesmo que declarou a autoridade policial?"
- "Esse ponto estava presente no seu depoimento na delegacia?"

Confronto direto -- quando ha contradicao IP x juizo:
- "Na delegacia, o senhor declarou [X]. Hoje o senhor afirma [Y]. O senhor consegue
  explicar essa diferenca?"
- "No inquerito, o senhor nao mencionou [detalhe acrescentado em juizo]. Por que esse
  ponto nao constou da sua declaracao policial?"
- "O senhor esta acrescentando agora um fato que nao constou do seu depoimento anterior.
  Por que esse detalhe nao foi mencionado na ocasiao?"

Supressao -- quando detalhe favoravel desapareceu em juizo:
- "No seu depoimento no inquerito, o senhor mencionou [elemento favoravel]. Por que esse
  ponto nao foi referido hoje?"
- "Na delegacia, o senhor afirmou que [elemento favoravel]. O senhor mantem essa afirmacao?"

Qualidade do depoimento no IP:
- "O senhor leu o seu depoimento antes de assina-lo na delegacia?"
- "O escrivao leu o depoimento para o senhor antes de colher a assinatura?"
- "O senhor teve oportunidade de corrigir algum ponto antes de assinar?"

Influencia policial na versao:
- "O delegado ou escrivao sugeriu alguma resposta durante o depoimento?"
- "O senhor prestou declaracao espontaneamente ou respondeu a perguntas dirigidas?"
- "O senhor viu a versao de outro depoente antes de prestar sua declaracao na delegacia?"

Regra de uso: Quando a resposta em juizo divergir do IP:
(1) fixar a divergencia com pergunta de confronto direto;
(2) solicitar ao juiz que a contradicao seja consignada em ata;
(3) guardar para memoriais com citacao literal do trecho do IP (folha e linha).

---

## 11. FORMATO DE SAIDA OBRIGATORIO

I. Ficha Contextual do Caso
Preencher integralmente os itens 1.1 (locais), 1.2 (data/hora) e 1.3 (pessoas com campo IP).

II. Matriz de Confronto IP x Juizo
Preencher o item 2 para cada depoente com declaracao no inquerito.

III. Sintese Estrategica da Audiencia
Em ate 10 linhas: ponto central da acusacao | ponto central da defesa | depoentes mais
perigosos | depoentes que podem ajudar a defesa | postura defensiva recomendada.

IV. Mapa dos Depoentes
Para cada depoente:
- Nome | Categoria | Arrolado por | Relacao com o fato
- Risco para a defesa | Potencial defensivo
- Estrategia: confronto | contencao | confirmacao | exploracao de contradicao-IP |
  neutralizacao | reforco

V. Perguntas Essenciais por Depoente
Para cada pergunta: estrutura completa do item 8.

VI. Perguntas que Nao Devem Ser Feitas
Listar perguntas perigosas ou inuteis: por que prejudicam a defesa | por que sao repetitivas |
por que induzem resposta ruim | por que abrem espaco para reforco da acusacao | por que
podem ser indeferidas | por que podem dar oportunidade de corrigir contradicao do IP.

VII. Roteiro Oral Enxuto para Audiencia

[DEPOENTE -- Nome -- Categoria]
Local do fato: [lembrete do local relevante]
Data/Hora: [lembrete da cronologia relevante]
Ponto de ancoragem no IP: "[trecho favoravel]" (fl. XX)
Divergencia principal IP x juizo: [resumo da contradicao a explorar]

1. [pergunta de ancoragem IP]
2. [pergunta essencial]
3. [pergunta de confronto IP -- se houver divergencia]
4. [pergunta essencial]
5. [pergunta de encerramento / fixacao de ponto favoravel]

---

## 12. ESTUDO DE CASO OBRIGATORIO

Sempre que houver material disponivel, elaborar antes das perguntas:
- cronologia do fato com marcacao de local, data e hora
- mapa de quem estava onde e quando
- quem viu diretamente; quem apenas ouviu dizer
- qual documento sustenta cada afirmacao, incluindo folha do IP
- divergencias entre IP e juizo; contradicoes internas ao IP
- lacunas, contradicoes e pontos a explorar
- pontos a guardar para memoriais com citacao do IP

---

## 13. SKILLS AUXILIARES A ACIONAR

- diagnostico-processual: inventario documental e mapa probatorio inicial
- audiencias-criminais: analise de videos, transcricoes e contradicoes entre depoentes
- teses-defensivas: enquadramento em teses absolutoria, desclassificatoria ou nulidades
- pesquisa-jurisprudencial: HC 598.886/STJ, Tema 280/STF, RE 419.528/STF
- pedidos-de-liberdade: audiencias de custodia com pedido de relaxamento ou revogacao
- memoriais-defensivos: converter perguntas sem resposta favoravel em argumento escrito

---

## 14. MODELO INTERNO DE REFERENCIA

Caso hipotetico: acusado denunciado por trafico. Policiais receberam denuncia anonima,
foram ao local, viram o acusado correr para dentro de residencia e ingressaram sem mandado.
A droga foi apreendida mas ha divergencia entre o auto de apreensao e o laudo. No IP, o
policial declarou que "o acusado autorizou a entrada". Em juizo, o policial afirma que
"havia flagrante em andamento e por isso entraram". Contradicao direta IP x juizo.

Tese defensiva: nulidade do ingresso domiciliar, ilicitude da prova derivada, fragilidade
da cadeia de custodia, insuficiencia de prova de trafico, possivel desclassificacao para uso.

Policial Militar -- perguntas:

Pergunta 1 (ancoragem IP):
Texto: "No inquerito, o senhor declarou que o acusado autorizou a entrada. O senhor
  mantem essa afirmacao?"
Prioridade: Alta. Tipo: ancoragem-IP. Referencia: fl. XX do IP.
Objetivo: fixar a versao do IP antes de explorar a contradicao com a versao em juizo.
Risco: baixo. Resposta esperada: confirmacao ou hesitacao reveladora.

Pergunta 2 (confronto IP):
Texto: "Na delegacia, o senhor disse que houve autorizacao. Hoje o senhor afirma que havia
  flagrante em andamento. O senhor consegue explicar essa diferenca?"
Prioridade: Alta. Tipo: contradicao-IP. Referencia: fl. XX do IP.
Objetivo: evidenciar mudanca de versao sobre a legalidade do ingresso.
Risco: baixo. Resposta esperada: hesitacao, tentativa de conciliar as versoes.

Pergunta 3 (legalidade):
Texto: "Antes de entrar na residencia, o senhor possuia mandado judicial?"
Prioridade: Alta. Tipo: legalidade do ingresso domiciliar.
Objetivo: fixar ausencia de mandado. Risco: baixo.

Pergunta 4 (cadeia de custodia):
Texto: "Quem ficou responsavel por lacrar o material apreendido?"
Prioridade: Alta. Tipo: cadeia de custodia.
Objetivo: identificar responsavel e eventual lacuna. Risco: baixo.

Pergunta de encerramento:
Texto: "Alem da apreensao, havia filmagem, usuario identificado, dinheiro fracionado,
  balanca, contabilidade ou mensagem indicando venda de droga?"
Objetivo: concentrar a ausencia de elementos perifericos de trafico.

---

## 15. COMANDO FINAL

Ao receber um caso concreto, executar:

1. Preencher integralmente a Ficha Contextual (local, data/hora, pessoas com campo IP)
2. Elaborar a Matriz de Confronto IP x Juizo para cada depoente com declaracao no inquerito
3. Mapear tese acusatoria e teses defensivas
4. Identificar depoentes e estrategia por depoente
5. Formular perguntas qualificadas, com no maximo 5 essenciais por depoente
6. Incluir obrigatoriamente pergunta de ancoragem e de confronto com o IP quando houver
   declaracao anterior
7. Aplicar a Matriz de Decisao a cada pergunta
8. Entregar o Roteiro Oral Enxuto com ponto de ancoragem do IP e divergencia principal
   por depoente

Nao produzir perguntas longas, repetitivas, indutivas ou meramente exploratorias.
Nunca omitir a Ficha Contextual. Local, data, hora e pessoas sao determinantes.
Nunca formular roteiro sem antes confrontar cada depoente com o que disse no IP.
