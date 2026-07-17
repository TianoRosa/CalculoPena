---
name: memoriais-defensivos
description: >
  Skill especializada na redação de Memoriais Defensivos (Alegações Finais por Memoriais) em processos criminais brasileiros, conforme os padrões documentais, estruturais, estilísticos e de formatação de Cristiano da Rosa (OAB/RS 78.652). Use esta skill sempre que for solicitada a elaboração de memoriais, alegações finais escritas, memoriais defensivos, ou quando o usuário mencionar art. 403 §3º CPP, peça de memoriais, ou usar os comandos /memoriais, /alegacoes, /memorial, /finais. Aplica automaticamente estrutura secional correta conforme o tipo de crime (tráfico, homicídio, receptação, crime sexual), inclui cadeia de custódia para casos de droga, e gera DOCX com formatação exata do escritório. Acionar também quando o usuário enviar autos, inquérito ou sentença de primeiro grau solicitando alegações finais.
---

# Skill: Memoriais Defensivos — Rosa Advogados

## Visão Geral

Esta skill produz Memoriais Defensivos completos, prontos para protocolo, nos padrões documentais de Cristiano da Rosa. Gera DOCX com formatação ABNT/escritório ou texto estruturado para revisão.

Antes de redigir, sempre verificar se há diagnóstico processual ou transcrições de audiência disponíveis na conversa. Se existirem, aproveitá-los como base. Se não houver dados suficientes, solicitar ao usuário: tipo de crime, réu, vara/comarca, número do processo, e principais provas/teses.

---

## 1. FORMATAÇÃO PADRÃO DO DOCUMENTO

### Margens e Tipografia
- Papel: A4 — margens ABNT: superior 3cm, inferior 2cm, esquerda 3cm, direita 2cm
- Fonte: Times New Roman ou Arial 12pt
- Corpo: justificado, recuo de primeira linha 2,5cm, espaçamento 1,5
- Espaçamento entre parágrafos: 0pt
- Títulos de seção: maiúsculas, negrito, centralizados, sem recuo
- Assinatura: centralizada, sem recuo, espaçamento simples, 0pt

### Cabeçalho do Escritório (padrão 29/04/2026)

Toda peça produzida com letterhead deve incluir:

```
Av. Protásio Alves, 654 - Rio Branco   |   Porto Alegre - RS, 90410-004
COND. EDIF. NORMANDIE / LOJA 02 (calçada)
·. Rosa Advogados .·
www.cristianorosa.net   |   (51) 81220776
[linha separadora horizontal]
```

### Tabela de Abertura (obrigatória)

Toda petição de memoriais abre com tabela de dois campos horizontais:

| Campo esquerdo | Campo direito |
|---|---|
| `Processo nº [número completo com dígitos e /RS]` | `[NOME DO RÉU EM MAIÚSCULA NEGRITO], já qualificado nos autos do processo em epígrafe, vem/vêm respeitosamente perante Vossa Excelência, por intermédio de seu procurador firmatário, nos termos do art. 403, § 3º, do Código de Processo Penal, apresentar:` |

**Regras da tabela:**
- Se dois ou mais réus: "já qualificados... vêm... apresentar"
- O conteúdo do campo direito deve ser formatado em bloco único, sem recuo, corpo 12pt

### Endereçamento da Peça

Padrão: `EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA [Nª VARA] CRIMINAL [DO FORO CENTRAL] DA COMARCA DE [CIDADE]/RS`

Variações:
- Magistrada: `EXCELENTÍSSIMA SENHORA DOUTORA JUÍZA DE DIREITO`
- Júri: `EXCELENTÍSSIMO SENHOR DOUTOR JUIZ JUÍZO DA VARA JUDICIAL DA COMARCA DE [CIDADE]`
- JTGE: adicionar `E JTGE` após `CRIMINAL`

### Título da Peça

Centralizado, negrito, maiúsculas, logo após a tabela:

```
MEMORIAIS DEFENSIVOS
```
ou
```
MEMORIAIS
```
ou
```
ALEGAÇÕES FINAIS POR MEMORIAIS
```

### Parágrafo de Retificação (quando MP apresentou memoriais antes)

> "Com fundamento no art. 403, § 3º, do Código de Processo Penal, pelas razões que seguem. Retifica-se o relatório apresentado pelo digno Ministério Público, eis que refere a realidade do histórico processual, acrescentando tão somente que, apresentados os memoriais acusatórios, vieram os autos para que a defesa em seu turno apresente suas alegações por escrito. Eis o breve relatório."

### Assinatura Final

```
Nestes termos,
Pede deferimento.

Porto Alegre, [dia] de [mês] de [ano].


________________________

CRISTIANO DA ROSA
Advogado – OAB/RS 78.652
```

---

## 2. ESTRUTURAS SECIONAIS POR TIPO DE CASO

### ESTRUTURA A — Tráfico de Drogas / Crimes com Prova Digital (mais elaborada)

Usar quando há: cadeia de custódia comprometida, ingresso domiciliar sem mandado, provas telemáticas, ou múltiplos réus com situações distintas.

```
[SUMÁRIO opcional, se peça > 15 laudas]

I. SÍNTESE DOS FATOS

PRELIMINAR [se houver nulidade processual]

II – DO DIREITO
  1. [Tese principal — nulidade ou materialidade]
  2. [Cadeia de custódia — arts. 158-A a 158-F CPP]
  3. [Autoria / individualização de conduta por réu]
  4. [Tese subsidiária / desclassificação]
  5. [Tese adicional se necessário]
  6. Da dúvida razoável como limite constitucional
  7. PREQUESTIONAMENTO

8. PEDIDOS [letra a), b), c)...]
```

### ESTRUTURA B — Tráfico / Organização Criminosa (padrão clássico)

```
I. RELATÓRIO

II. DOS FATOS
[questões em discussão como lista com "Discute-se se..."]

III. DIREITO
  III.1. [Subtema]
  III.2. [Subtema]
  ...

V. DISPOSITIVO E TESE RECURSAL

VI. PEDIDOS [letras a), b), c)...]
```

### ESTRUTURA C — Homicídio / Crimes do Tribunal do Júri

```
[Sumário com numeração]

I. SÍNTESE DOS FATOS

II – DO DIREITO
  1. Da Negativa de Autoria e do Princípio do In Dubio Pro Reo
  2. Ausência de Provas Materiais
  3. Depoimentos Contraditórios
  4. [teses específicas do caso]
  ...
  [N]. ANÁLISE JURÍDICA E PEDIDO DE IMPRONÚNCIA [ou absolvição]

III PEDIDO [letras]
```

### ESTRUTURA D — Receptação / Crimes Patrimoniais

```
[Relatório]
[Sumário]

1 PRELIMINAR
  A. [Nulidade 1]
  B. [Nulidade 2]
  [Teoria dos Frutos da Árvore Envenenada]

2 O MÉRITO PROPRIAMENTE DITO
  2.1 MATERIALIDADE
  2.3 AUTORIA
  2.4 PRODUÇÃO DA PROVA
    2.4.1 Depoimento de [Testemunha 1]
    2.4.2 Depoimento de [Testemunha 2]
    ...
  2.6 Síntese da prova oral [tabela comparativa]

3 TESE DEFENSIVA
  3.1 TESE A. [Principal]
  3.2 TESE B. [Subsidiária]
  3.3 DOSIMETRIA [se necessário]

5 PEDIDOS
```

### ESTRUTURA E — Crimes Sexuais / Violência Doméstica

```
[Abertura]

[Análise do Laudo Psicológico / Pericial]
[Possíveis Influências Externas na Narrativa]
[Do Contexto Probatório — cronologia de eventos]

[Teses defensivas específicas]
[Denunciação Caluniosa / Interesse na Ação — se aplicável]

PEDIDOS
```

---

## 3. PADRÕES DE CONTEÚDO POR SEÇÃO

### I. RELATÓRIO / SÍNTESE DOS FATOS

Estrutura: (a) imputação resumida; (b) o que a acusação sustenta; (c) o que a instrução revelou em sentido contrário; (d) síntese do problema central.

Não é neutro — já orienta a narrativa defensiva. Deve destacar lacunas da acusação desde o primeiro parágrafo.

### II. DOS FATOS / QUESTÕES EM DISCUSSÃO

Quando presente, listar as questões com a fórmula:
> "Discute-se se [questão jurídica ou fática objetiva]."

Cada questão deve ser autônoma e corresponder a um fundamento de absolvição ou desclassificação.

### Seção de DIREITO (argumentação)

Padrão por subtópico:
1. Título descritivo em negrito (ex: "Da Quebra da Cadeia de Custódia da Prova Telemática")
2. Base normativa (artigos do CPP, CP, leis especiais)
3. Fato concreto do caso
4. Jurisprudência (STF, STJ, TJRS — nunca Jusbrasil)
5. Conclusão parcial

### PREQUESTIONAMENTO

> "Para fins de eventual interposição recursal, requer-se o prequestionamento expresso dos arts. [lista completa], [da Constituição Federal / do CPP / da Lei X]."

### PEDIDOS

Formato letrado a), b), c)... sempre do principal ao subsidiário.

Padrão de encerramento de cada pedido de absolvição:
> "...com fundamento no art. 386, inciso [II/III/V/VII], do Código de Processo Penal"

Incluir sempre: pedido subsidiário de tráfico privilegiado (§ 4º, art. 33) em casos de droga; pedido de prequestionamento de dispositivos específicos.

---

## 4. TABELA DE CADEIA DE CUSTÓDIA (art. 158-B CPP)

Usar obrigatoriamente em casos de tráfico de drogas ou quando há prova digital/telemática. Inserir na seção de Direito dedicada à cadeia de custódia.

| Fase (art. 158-B, CPP) | Exigência Legal | Status no Caso | Consequência Jurídica |
|---|---|---|---|
| Fixação (inciso III) | Registro do estado original do vestígio | [PRESENTE / AUSENTE — descrever] | [consequência] |
| Isolamento (inciso II) | Preservação contra contaminação ou alteração | [PRESENTE / VIOLADO — descrever] | [consequência] |
| Coleta e identificação do coletor (inciso IV) | Agente identificado com certeza | [PRESENTE / INCERTO — descrever] | [consequência] |
| Acondicionamento (inciso V) | Recipiente idôneo, identificado e lacrado | [PRESENTE / AUSENTE — descrever] | [consequência] |
| Rastreabilidade do envio ao IGP | Totalidade ou amostra representativa | [status] | [consequência] |

---

## 5. PROTOCOLO DE CITAÇÃO DIRETA DA PROVA ORAL

Esta é uma das marcas técnicas mais importantes dos memoriais do escritório. Citações diretas, extraídas literalmente da transcrição da audiência e ancoralizadas pelo instante exato da fala, cumprem função probatória e retórica insubstituível: demonstram ao julgador que o argumento defensivo está ancorado no que foi efetivamente dito sob o crivo do contraditório, e não numa construção argumentativa autônoma do advogado.

**Regra geral:** toda afirmação relevante de testemunha, policial, perito, vítima ou do próprio acusado que suporte uma tese defensiva deve ser reproduzida em citação direta, com marcação temporal precisa, formatada no estilo "1 - Citação" do padrão DOCX do escritório.

### 5.1 Formato Padrão de Citação

O formato canônico de citação direta de prova oral nos memoriais é:

```
"[transcrição literal da fala, preservando coloquialismos e vacilações]"
([Depoente], Evento [N] dos autos — [MM:SS])
```

Exemplos concretos:

> "Eu vi o rapaz correr, mas não vi nada na mão dele."
> (Testemunha Fulano de Tal, Evento 188 dos autos — 04:32)

> "A droga já tava separada quando a gente chegou, não foi o flagrado que separou."
> (Soldado PM X, Evento 188_VIDEO3.mp4 — 11:47)

> "Não me recordo se ele tava junto quando a gente entrou."
> (Delegado Y, audiência de instrução — 08:15)

### 5.2 Variações de Fonte e Referência

| Tipo de fonte | Referência no texto |
|---|---|
| Vídeo do eProc | `Evento [N]_VIDEO[M].mp4 dos autos — [MM:SS]` |
| Áudio extraído | `Evento [N] dos autos (arquivo de áudio) — [MM:SS]` |
| Transcrição literal juntada | `Evento [N] dos autos (transcrição, fl. [X]) — [MM:SS]` |
| Audiência em arquivo único | `Audiência de instrução de [data] — [MM:SS]` |
| Ata de audiência / termo | `Termo de audiência de [data] (fl. [X])` |

### 5.3 Aplicação no Estilo DOCX "1 - Citação"

No documento DOCX, toda citação direta de prova oral usa obrigatoriamente o estilo **"1 - Citação"**:

- Arial 10pt
- Recuo esquerdo: 6,24 cm (3535 DXA)
- Primeira linha: 2,5 cm (1417 DXA)
- Espaçamento: simples
- Espaço antes/depois: 0pt

A linha de atribuição (depoente + evento + marcação temporal) vem logo abaixo, em parágrafo separado com o mesmo estilo "1 - Citação", em itálico:

```javascript
// Bloco de citação direta no DOCX — padrão obrigatório
citacaoDireta("Eu vi o rapaz correr, mas não vi nada na mão dele."),
citacaoAtribuicao("Testemunha Fulano de Tal, Evento 188 dos autos — 04:32"),
```

Onde `citacaoDireta()` e `citacaoAtribuicao()` são funções auxiliares que aplicam o estilo "1-Citacao" conforme definido na skill `peticoes-docx`.

### 5.4 Quantidade e Densidade

Não há limitação de quantidade. Usar e abusar de citações diretas. Cada tópico de análise probatória deve conter ao menos uma citação literal do depoente principal daquela tese. Tópicos com contradições internas de um mesmo depoente devem trazer duas citações em sequência, exibindo a contradição sem comentário intermediário desnecessário.

**Padrão argumentativo recomendado por subtópico:**

```
[Argumento narrativo em parágrafo normal]

"[citação direta — primeira fala relevante]"
(Depoente X, Evento N — MM:SS)

"[citação direta — segunda fala, se contradição ou reforço]"
(Depoente X, Evento N — MM:SS)

[Conclusão parcial sobre o que as falas revelam para a tese defensiva]
```

### 5.5 Tabela-Síntese da Prova Oral (quando aplicável)

Em memoriais com três ou mais depoentes analisados, inserir tabela-síntese antes dos pedidos:

| Depoente | Função | Fala Central (Evento — MM:SS) | Impacto Defensivo |
|---|---|---|---|
| [Nome] | Testemunha de acusação | "[trecho literal]" (Evt. N — MM:SS) | Contradiz o auto de prisão |
| [Nome] | Policial militar | "[trecho literal]" (Evt. N — MM:SS) | Confirma ausência de flagrância |
| [Nome] | Réu | "[trecho literal]" (Evt. N — MM:SS) | Corrobora negativa de autoria |

---

## 6. REGRAS DE ESTILO OBRIGATÓRIAS

- Proibido: travessão (–). Usar vírgulas ou ponto e vírgula.
- Jurisprudência: citar apenas STF, STJ, TJRS, TRFs, Diários Oficiais. Nunca Jusbrasil.
- Tom: técnico-denso, inspirado em Aury Lopes Jr. e Ruy Barbosa. Sem concessões retóricas vazias.
- **Citações diretas da prova oral: obrigatórias sempre que disponível transcrição ou vídeo. Ver Seção 5 completa.**
- Qualificação do réu: nunca deixar campos em branco. Omitir campos indisponíveis completamente.
- Plural de réus: adaptar verbos e pronomes em toda a peça.
- Nunca citar Aury Lopes Jr. com aspas longas — parafrasear e atribuir.

### Fórmulas recorrentes de alta carga retórica

- "A condenação penal exige prova acima de qualquer dúvida razoável."
- "Condenar [réu], nessas condições, equivaleria a admitir responsabilidade penal por contexto, por ambiência ou por proximidade."
- "O Estado não pode se beneficiar probatoriamente de uma entrada que não demonstrou, previamente, base constitucional idônea."
- "Persistindo a dúvida razoável, a conclusão constitucionalmente exigida é a absolvição, pois o processo penal não condena por verossimilhança, mas por prova segura."
- "A dúvida não é incômodo lateral. Ela é limite ético e constitucional da jurisdição penal."

---

## 8. GERAÇÃO EM DOCX

Se o usuário solicitar arquivo Word, ler o SKILL.md da skill `peticoes-docx` (`/mnt/skills/user/peticoes-docx/SKILL.md`) antes de gerar. Aplicar obrigatoriamente o estilo **"1 - Citação"** em todos os blocos de prova oral transcritos.

Configurações do documento DOCX:
- Tamanho: A4 (11906 x 16838 DXA)
- Margens: top 1701, bottom 1134, left 1701, right 1134 (aprox. ABNT em DXA)
- Fonte padrão: Arial 12pt (24 half-points)
- Espaçamento entre linhas: 360 (1,5)
- Parágrafo spacing: 0 before/after
- Indent primeira linha: 720 DXA (2,5cm aprox.)
- Tabela de abertura: dois campos, sem bordas visíveis ou borda simples cinza
- Títulos de seção: negrito, maiúsculas, centralizado, sem indent
- Assinatura: centralizado, espaçamento simples, fonte 12pt

---

## 7. WORKFLOW DE PRODUÇÃO

1. **Coletar dados**: tipo de crime, número do processo, vara/comarca, réu(s), fatos principais, provas produzidas, depoimentos relevantes, teses defensivas já identificadas.
2. **Selecionar estrutura**: A, B, C, D ou E conforme tipo de crime e complexidade.
3. **Verificar se há transcrições ou diagnóstico**: aproveitar material disponível na conversa. Se existirem vídeos, áudios ou transcrições de audiência, **extrair todas as falas relevantes com marcação temporal antes de redigir**.
4. **Mapear as citações diretas disponíveis**: antes de escrever o corpo argumentativo, listar internamente as falas mais poderosas de cada depoente, com referência ao evento e ao instante exato. Essas citações devem estruturar a argumentação, não o contrário: a tese se constrói em torno do que foi dito, não o que foi dito é encaixado na tese pronta.
5. **Redigir seção a seção**: relatório → preliminares → direito (teses em ordem: principal, subsidiária, dosimetria) → prequestionamento → pedidos. **Intercalar citações diretas em cada subtópico probatório** conforme Seção 5.
6. **Revisar com bloco Design Thinking** (ao final):
   - Empatia: a peça comunica claramente para o juiz?
   - Definição: as teses estão bem delimitadas?
   - Ideação: há teses adicionais não exploradas?
   - Protótipo: estrutura visual favorece leitura?
   - Teste/Iteração: prequestionamento completo? Pedidos subsidiários incluídos?
7. **Legal Design**: hierarquia visual adequada; tabelas onde cabível; linguagem ajustada ao juízo destinatário.
8. **Gerar DOCX** se solicitado (ler skill peticoes-docx antes; aplicar estilo "1 - Citação" em todos os blocos de prova oral).

---

## 9. TESES RECORRENTES POR TIPO DE CRIME

### Tráfico de Drogas
- Nulidade do ingresso domiciliar sem mandado (art. 5º, XI, CF)
- Quebra da cadeia de custódia (arts. 158-A a 158-F CPP)
- Flagrante preparado (Súmula 145/STF)
- Ausência de individualização de conduta por réu
- Reconhecimento indevido sem art. 226 CPP
- Prova telemática sem hash / sem demonstração de integridade
- Tráfico privilegiado (§ 4º, art. 33, Lei 11.343/06)
- Desclassificação para uso pessoal (art. 28) — dependente químico

### Homicídio / Júri
- Negativa de autoria + in dubio pro reo na pronúncia (art. 414 CPP)
- Depoimentos contraditórios / testemunho de "ouvi dizer"
- Ausência de prova material vinculando o réu
- Legítima defesa / estado de necessidade (quando cabível)
- Impronúncia (art. 414 CPP) / desclassificação

### Receptação / Crimes Patrimoniais
- Ausência de dolo (ciência da origem ilícita)
- Desclassificação para receptação culposa (art. 180, §3º, CP)
- Flagrante preparado (Súmula 145/STF)
- Violação domiciliar + teoria dos frutos da árvore envenenada

### Crimes Sexuais
- Análise da credibilidade do relato (variações, influências externas)
- Interesse na ação (motivação do ofendido ou responsável)
- Ausência de prova material autônoma
- Denunciação caluniosa como contexto
- Movimentações financeiras suspeitas como contaminação narrativa

---

## Referências internas

- Para análise detalhada de teses: ver skill `teses-defensivas`
- Para análise de dosimetria: ver skill `dosimetria-penal`
- Para análise de prova oral de audiências: ver skill `audiencias-criminais`
- Para diagnóstico inicial do processo: ver skill `diagnostico-processual`
