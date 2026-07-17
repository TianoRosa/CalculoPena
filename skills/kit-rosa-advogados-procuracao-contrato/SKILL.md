---
name: kit-rosa-advogados-procuracao-contrato
description: "Gera Kit Rosa Advogados: Procuracao, Contrato Advocaticio e Declaracao de Hipossuficiencia em DOCX e PDF com cabecalho logo/endereco/QR. Acionar com /kit /onboarding /contrato /honorarios /admissao. Coleta dados do cliente, executa questionario financeiro interativo, suprime blocos ausentes (diligencia, mensalidade, exito, TJ, STJ/STF). Foro Porto Alegre e prazo 30 dias sao automaticos."
---

# Skill — Kit de Onboarding — Rosa Advogados

## Protocolo de Execução

**FLUXO OBRIGATÓRIO:** Etapas 1 → 2 → 3 → 4 → 5. Não pular etapas.

---

## ETAPA 1 — COLETA DE DADOS DO CLIENTE

### 1.1 Aceitar dados em qualquer formato
- Digitados diretamente
- PDF de contrato/procuração anterior (extrair via pdftotext)
- Foto de RG, CNH ou certidão (OCR visual)

### 1.2 Campos do cliente

| Campo | Obrigatório? | Regra |
|---|---|---|
| Nome completo | SIM | MAIÚSCULAS no documento |
| Nacionalidade | NÃO | Suprimir se ausente |
| Estado civil | NÃO | Suprimir se ausente |
| Profissão | NÃO | Suprimir se ausente |
| Filiação | NÃO | Suprimir se ausente |
| Data de nascimento | NÃO | Formato: DD de mês de AAAA |
| RG | NÃO | Suprimir se ausente |
| CPF | SIM | Formato: XXX.XXX.XXX-XX |
| Endereço completo | NÃO | Suprimir se ausente |
| É pessoa jurídica? | NÃO | Se PJ: razão social + CNPJ + representante legal |

**REGRA ABSOLUTA:** Campo sem dado = campo SUPRIMIDO do documento. Nunca escrever "a informar", "não informado" ou deixar em branco.

### 1.3 Dados fixos dos contratados (NUNCA alterar)

```
CRISTIANO DA ROSA, brasileiro, solteiro, advogado,
OAB/RS 78.652, CPF 892.093.540-87

MARIA ISABEL DA ROSA, brasileira, solteira, advogada,
OAB/RS 118.352, CPF 016.645.660-95

Av. Protásio Alves, nº 654, bairro Rio Branco, Porto Alegre/RS, CEP 90410-004
```

Por padrão incluir ambos. Se Cristiano indicar "apenas Cristiano" ou "apenas Isabel", adaptar.

### 1.4 Valores fixos automáticos (NUNCA perguntar)

| Campo | Valor fixo |
|---|---|
| Prazo de inadimplência | 30 (trinta) dias |
| Foro eleito | Porto Alegre/RS |
| Juros por atraso | 1% ao mês + multa de 2% |
| Honorários sucumbenciais | exclusivamente da parte adversa |

---

## ETAPA 2 — QUESTIONÁRIO FINANCEIRO INTERATIVO

Verificar se os dados financeiros já foram fornecidos. Se incompletos, conduzir o
questionário em dois blocos usando `ask_user_input_v0` para as questões binárias.

### Bloco A — Perguntas textuais (fazer em uma mensagem só)

```
Para gerar o contrato preciso de mais algumas informações:

1. Qual é o objeto da contratação? (descreva as demanda(s) que serão ajuizadas)
2. Quantas ações estão inclusas?
3. Qual o valor total dos honorários iniciais? (ex: R$ 3.400,00)
4. O pagamento é à vista ou parcelado?
   — Se parcelado: número de parcelas e valor de cada uma.
```

### Bloco B — Perguntas binárias com ask_user_input_v0

Após receber o Bloco A, usar a ferramenta `ask_user_input_v0` com as perguntas abaixo.
Fazer todas de uma vez (máximo 3 por chamada; se necessário, dividir em duas chamadas).

**Chamada 1 (3 perguntas simultâneas):**
```
Pergunta 1: "Existe pagamento de diligência inicial?"
  Opções: ["Sim — informarei o valor", "Não"]

Pergunta 2: "Existe mensalidade permanente durante o processo?"
  Opções: ["Sim — informarei o valor", "Não"]

Pergunta 3: "Existe percentual de êxito?"
  Opções: ["Sim — informarei o percentual", "Não"]
```

**Chamada 2 (2 perguntas simultâneas):**
```
Pergunta 1: "Os honorários incluem recurso ao Tribunal de Justiça?"
  Opções: ["Sim, TJ incluído", "Não, TJ não incluído"]

Pergunta 2: "Recursos a Tribunais Superiores (STJ/STF) são cobrados à parte?"
  Opções: ["Sim — informarei o valor adicional", "Não"]
```

Para cada "Sim" que exija valor, solicitar o número em seguida (texto livre).

### Mapa de supressão contratual

| Condição | Bloco no contrato | Regra |
|---|---|---|
| Diligência = Não | Parágrafo de diligência | SUPRIMIR completamente |
| Mensalidade = Não | Cláusula c) e seus parágrafos | SUPRIMIR completamente |
| Êxito = Não | Cláusula b) + Parágrafo quarto | SUPRIMIR completamente |
| TJ incluído = Sim | Parágrafo terceiro (TJ incluído) | INCLUIR |
| TJ incluído = Não | Parágrafo terceiro | SUPRIMIR completamente |
| Recursos superiores = Sim | Parágrafo de recursos STJ/STF | INCLUIR com valor |
| Recursos superiores = Não | Parágrafo de recursos STJ/STF | SUPRIMIR completamente |

---

## ETAPA 3 — VERIFICAÇÃO DE DEPENDÊNCIAS

```bash
# 1. Instalar docx se necessário
npm list -g docx 2>/dev/null | grep -q docx || npm install -g docx

# 2. Preparar assets
mkdir -p /tmp/kit_assets
cp /mnt/skills/user/kit-rosa-advogados-procuracao-contrato/assets/logo_rosa.png /tmp/kit_assets/
cp /mnt/skills/user/kit-rosa-advogados-procuracao-contrato/assets/qrcode_rosa.jpg /tmp/kit_assets/
```

---

## ETAPA 4 — GERAÇÃO DOS TRÊS DOCUMENTOS

### 4.1 Constantes e funções utilitárias (incluir em TODOS os scripts)

```javascript
const { Document, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, ImageRun, PageNumber, AlignmentType,
        BorderStyle, WidthType, NumberFormat, Packer } = require('docx');
const fs = require('fs');

// --- Constantes de página ---
const PAGE_W = 11906, PAGE_H = 16838;
const M_TOP = 1701, M_BOT = 1134, M_LEFT = 1701, M_RIGHT = 1134;
const CONTENT_W = PAGE_W - M_LEFT - M_RIGHT; // 9071 DXA
const FONT = "Arial";
const SIZE_BODY = 24;   // 12pt
const SIZE_HDR  = 16;   // 8pt
const LINE_15   = { line: 360, lineRule: "auto", before: 0, after: 0 };
const LINE_10   = { line: 240, lineRule: "auto", before: 0, after: 0 };
const TEAL      = "2E74B5";
const cm = v => Math.round(v * 1440 / 2.54);
const BORDA_NULA = {
  top:    { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  left:   { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  right:  { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
};

// --- Buffers de assets ---
const logoBuffer = fs.readFileSync('/tmp/kit_assets/logo_rosa.png');
const qrBuffer   = fs.existsSync('/tmp/kit_assets/qrcode_rosa.jpg')
                   ? fs.readFileSync('/tmp/kit_assets/qrcode_rosa.jpg') : null;

// --- Parágrafos utilitários ---
function pCorpo(texto, bold = false) {
  return new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: LINE_15,
    indent: { firstLine: cm(3.25) },
    children: [new TextRun({ text: texto, font: FONT, size: SIZE_BODY, bold })]
  });
}
function pCentro(texto, bold = false, color = "000000") {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: LINE_15,
    children: [new TextRun({ text: texto, font: FONT, size: SIZE_BODY, bold, color })]
  });
}
function pTitulo(texto) { return pCentro(texto, true, TEAL); }
function pSemRecuo(texto, bold = false) {
  return new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: LINE_15,
    children: [new TextRun({ text: texto, font: FONT, size: SIZE_BODY, bold })]
  });
}
function esp() {
  return new Paragraph({
    spacing: LINE_10,
    children: [new TextRun({ text: "", font: FONT, size: SIZE_BODY })]
  });
}
function hrLine() {
  return new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 1 } },
    spacing: { ...LINE_10, before: 0, after: 120 },
    children: [new TextRun({ text: "", font: FONT, size: SIZE_HDR })]
  });
}

// --- Cabeçalho tríplice Rosa Advogados ---
function criarCabecalho() {
  const colLogoW = cm(2.0);
  const colEndW  = cm(8.0);
  const colRosaW = CONTENT_W - colLogoW - colEndW;

  const cellLogo = new TableCell({
    borders: BORDA_NULA,
    width: { size: colLogoW, type: WidthType.DXA },
    margins: { top: 0, bottom: 0, left: 0, right: 80 },
    children: [new Paragraph({
      spacing: LINE_10,
      children: [new ImageRun({
        data: logoBuffer,
        transformation: { width: 55, height: 55 },
        type: "png"
      })]
    })]
  });

  const cellEnd = new TableCell({
    borders: BORDA_NULA,
    width: { size: colEndW, type: WidthType.DXA },
    margins: { top: 0, bottom: 0, left: 80, right: 80 },
    children: [
      new Paragraph({ spacing: LINE_10, children: [new TextRun({
        text: "Av. Protásio Alves, 654 - Rio Branco         , Porto Alegre - RS, 90410-004",
        font: FONT, size: SIZE_HDR
      })] }),
      new Paragraph({ spacing: LINE_10, children: [new TextRun({
        text: "COND. EDIF. NORMANDIE / LOJA 02 (calcada)",
        font: FONT, size: SIZE_HDR
      })] }),
    ]
  });

  const cellRightChildren = [
    new Paragraph({ alignment: AlignmentType.RIGHT, spacing: LINE_10,
      children: [new TextRun({ text: ".·. Rosa Advogados.·.", font: FONT, size: SIZE_HDR, bold: true })] }),
    new Paragraph({ alignment: AlignmentType.RIGHT, spacing: LINE_10,
      children: [new TextRun({ text: "www.cristianorosa.net", font: FONT, size: SIZE_HDR, color: "0563C1" })] }),
    new Paragraph({ alignment: AlignmentType.RIGHT, spacing: LINE_10,
      children: [new TextRun({ text: "(51) 81220776", font: FONT, size: SIZE_HDR })] }),
  ];
  if (qrBuffer) {
    cellRightChildren.push(new Paragraph({ alignment: AlignmentType.RIGHT, spacing: LINE_10,
      children: [new ImageRun({ data: qrBuffer, transformation: { width: 40, height: 40 }, type: "jpg" })] }));
  }

  const cellRosa = new TableCell({
    borders: BORDA_NULA,
    width: { size: colRosaW, type: WidthType.DXA },
    margins: { top: 0, bottom: 0, left: 80, right: 0 },
    children: cellRightChildren
  });

  return new Header({
    children: [
      new Table({
        width: { size: CONTENT_W, type: WidthType.DXA },
        columnWidths: [colLogoW, colEndW, colRosaW],
        rows: [new TableRow({ children: [cellLogo, cellEnd, cellRosa] })]
      }),
      hrLine()
    ]
  });
}

// --- Rodapé com número de página ---
function criarRodape() {
  return new Footer({
    children: [new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: LINE_10,
      children: [new TextRun({
        children: ["Pagina ", PageNumber.CURRENT],
        font: FONT, size: 20
      })]
    })]
  });
}

// --- Propriedades de seção padrão ---
function secaoProps() {
  return {
    page: {
      size: { width: PAGE_W, height: PAGE_H },
      margin: { top: M_TOP, bottom: M_BOT, left: M_LEFT, right: M_RIGHT },
      pageNumbers: { start: 1, formatType: NumberFormat.DECIMAL }
    }
  };
}
```

---

### 4.2 DOCUMENTO 1 — PROCURAÇÃO

**Nome do arquivo:** `Procuracao_SOBRENOME.docx`

```javascript
// Script: gerar_procuracao.js
// [incluir constantes e funções utilitárias da seção 4.1]

// --- Dados do cliente (preencher dinamicamente) ---
const C = {
  nome:         "JUAREZ OLAVO FAGUNDES DA ROSA",  // MAIÚSCULAS
  nacionalidade:"brasileiro",    // suprimir se ausente
  estadoCivil:  "solteiro",      // suprimir se ausente
  profissao:    "",              // suprimir se ausente
  filiacao:     "",              // suprimir se ausente
  dataNasc:     "",              // suprimir se ausente
  rg:           "",              // suprimir se ausente
  cpf:          "384.637.410-53",
  endereco:     "Rua Jaguari, no 385, Bairro Sumare, Alvorada/RS, CEP 94824-210",
};

// --- Qualificação dinâmica (incluir apenas campos presentes) ---
function qualificacaoOutorgante(c) {
  const partes = [];
  if (c.nacionalidade) partes.push(c.nacionalidade);
  if (c.estadoCivil)   partes.push(c.estadoCivil);
  if (c.profissao)     partes.push(c.profissao);
  if (c.filiacao)      partes.push(`filho(a) de ${c.filiacao}`);
  if (c.dataNasc)      partes.push(`nascido(a) em ${c.dataNasc}`);
  if (c.rg)            partes.push(`portador(a) do RG no ${c.rg}`);
  partes.push(`inscrito(a) no CPF sob o no ${c.cpf}`);
  if (c.endereco)      partes.push(`residente e domiciliado(a) na ${c.endereco}`);
  return partes.join(", ");
}

const DATA_ATUAL = "15 de maio de 2026"; // substituir pela data real do dia

const poderes = [
  "assinar declaracao de hipossuficiencia economica",
  "confessar", "dar quitacao", "desistir", "firmar compromisso",
  "receber", "receber citacao", "reconhecer a procedencia do pedido",
  "renunciar ao direito sobre o qual se funda a acao", "transigir",
  "substabelecer com ou sem reserva de poderes",
  "propor acoes, defender interesses, firmar acordos, requerer medidas judiciais e extrajudiciais, receber citacoes e intimacoes, apresentar documentos e praticar todos os atos necessarios ao fiel cumprimento deste mandato"
].join("; ");

const conteudo = [
  esp(),
  pCentro("PROCURACAO", true),
  esp(),
  pSemRecuo(`OUTORGANTE: ${C.nome}, ${qualificacaoOutorgante(C)}.`, true),
  esp(),
  pSemRecuo(
    "OUTORGADOS: MARIA ISABEL DA ROSA, brasileira, solteira, advogada, " +
    "inscrita na OAB/RS sob o no 118.352, CPF sob o no 016.645.660-95, " +
    "e CRISTIANO DA ROSA, brasileiro, solteiro, advogado, inscrito na " +
    "OAB/RS sob o no 78.652, CPF sob o no 892.093.540-87, ambos com " +
    "endereco profissional na Av. Protasio Alves, no 654, bairro Rio Branco, " +
    "Porto Alegre/RS, CEP 90410-004.",
    true
  ),
  esp(),
  pCorpo(
    "Pelo presente instrumento particular, o OUTORGANTE nomeia e constitui " +
    "seus bastantes procuradores os advogados acima qualificados, conferindo-lhes " +
    "poderes da clausula ad judicia et extra, para o foro em geral, com os " +
    "poderes especiais de: " + poderes + "."
  ),
  esp(),
  new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: LINE_15,
    children: [new TextRun({ text: `Porto Alegre, ${DATA_ATUAL}.`, font: FONT, size: SIZE_BODY })]
  }),
  esp(), esp(), esp(),
  pCentro("______________________________", false),
  pCentro(C.nome, true),
  pCentro(`CPF ${C.cpf}`, false),
];

const doc = new Document({
  sections: [{
    properties: secaoProps(),
    headers: { default: criarCabecalho() },
    footers: { default: criarRodape() },
    children: conteudo
  }]
});

Packer.toBuffer(doc).then(buf => {
  const nome = "Procuracao_" + C.nome.split(" ").slice(-1)[0] + ".docx";
  fs.writeFileSync("/home/claude/" + nome, buf);
  console.log("Gerado: " + nome);
});
```

---

### 4.3 DOCUMENTO 2 — CONTRATO DE PRESTAÇÃO DE SERVIÇOS ADVOCATÍCIOS

**Nome do arquivo:** `Contrato_SOBRENOME.docx`

**REGRA ABSOLUTA DE SUPRESSÃO:** Cada bloco condicional abaixo deve ser incluído
SOMENTE se a condição for verdadeira. Se falso, o bloco inteiro NÃO EXISTE no array
de parágrafos. Nunca gerar parágrafo com texto condicional vazio ou placeholder.

```javascript
// Script: gerar_contrato.js
// [incluir constantes e funções utilitárias da seção 4.1]

// --- Dados financeiros (preencher conforme questionário) ---
const H = {
  objeto: "acao revisional de contrato de financiamento bancario vinculada a acao de busca e apreensao e acao de fraude para restituicao de valores",
  numAcoes: 2,
  // Honorários iniciais
  valorTotal: "3.400,00",
  valorTotalExtenso: "tres mil e quatrocentos reais",
  avista: false,         // true = à vista; false = parcelado
  dataAvista: "",        // preencher se avista = true
  numParcelas: 8,
  numParcelasExtenso: "oito",
  valorParcela: "425,00",
  valorParcelaExtenso: "quatrocentos e vinte e cinco reais",
  // Diligência (null = não existe — SUPRIMIR bloco)
  diligencia: {
    valor: "150,00",
    valorExtenso: "cento e cinquenta reais",
    finalidade: "localizacao, analise da acao da Caixa e verificacao dos valores sacados"
  },
  // Mensalidade (null = não existe — SUPRIMIR bloco)
  mensalidade: null,
  // Êxito (null = não existe — SUPRIMIR bloco b) e parágrafo quarto)
  exito: {
    percentual: "20",
    percentualExtenso: "vinte",
    base: "liquido"      // "liquido" ou "bruto"
  },
  // TJ
  tjIncluido: true,      // false = SUPRIMIR parágrafo terceiro
  // Recursos superiores (null = SUPRIMIR parágrafo de STJ/STF)
  recursosSuperiores: {
    valor: "500,00",
    valorExtenso: "quinhentos reais"
  }
};

// --- Dados do cliente ---
const C = {
  nome: "JUAREZ OLAVO FAGUNDES DA ROSA",
  cpf: "384.637.410-53",
  qualificacao: "brasileiro, estado civil a informar, profissao a informar",
  endereco: "Rua Jaguari, no 385, Bairro Sumare, Alvorada/RS, CEP 94824-210"
};

const DATA_ATUAL = "15 de maio de 2026";

// ── Bloco honorários iniciais ──────────────────────────────────────────────
function blocoHonorariosIniciais() {
  const blocos = [];
  if (H.avista) {
    blocos.push(pCorpo(
      `a) Honorarios iniciais: O CONTRATANTE pagara a CONTRATADA, a titulo de honorarios ` +
      `advocaticios contratuais iniciais, o valor de R$ ${H.valorTotal} (${H.valorTotalExtenso}), ` +
      `a ser pago em parcela unica, ate ${H.dataAvista}.`
    ));
  } else {
    blocos.push(pCorpo(
      `a) Honorarios iniciais: O CONTRATANTE pagara a CONTRATADA, a titulo de honorarios ` +
      `advocaticios contratuais iniciais, o valor total de R$ ${H.valorTotal} (${H.valorTotalExtenso}), ` +
      `na modalidade parcelada. O pagamento sera realizado em ${H.numParcelas} ` +
      `(${H.numParcelasExtenso}) parcelas mensais de R$ ${H.valorParcela} ` +
      `(${H.valorParcelaExtenso}) cada.`
    ));
  }
  return blocos;
}

// ── Bloco diligência — SUPRIMIR SE H.diligencia === null ──────────────────
function blocoDiligencia() {
  if (!H.diligencia) return [];
  return [esp(), pCorpo(
    `Alem dos honorarios acima ajustados, o CONTRATANTE pagou o valor de ` +
    `R$ ${H.diligencia.valor} (${H.diligencia.valorExtenso}) a titulo de diligencia ` +
    `para ${H.diligencia.finalidade}, em modalidade virtual, ficando desde ja ajustado ` +
    `que, caso haja necessidade de diligencia presencial, sera cobrado valor adicional, ` +
    `mediante previa ciencia do CONTRATANTE.`
  )];
}

// ── Bloco mensalidade — SUPRIMIR SE H.mensalidade === null ────────────────
function blocoMensalidade() {
  if (!H.mensalidade) return [];
  return [esp(), pCorpo(
    `c) Honorarios mensais: O CONTRATANTE pagara mensalmente o valor de ` +
    `R$ ${H.mensalidade.valor} (${H.mensalidade.valorExtenso}), durante toda a tramitacao ` +
    `do processo, vencendo-se o primeiro pagamento na data de assinatura do presente ` +
    `contrato e os demais no mesmo dia dos meses subsequentes.`
  )];
}

// ── Bloco êxito — SUPRIMIR SE H.exito === null ────────────────────────────
function blocoExito() {
  if (!H.exito) return [];
  return [esp(), pCorpo(
    `b) Honorarios de exito: ${H.exito.percentual}% (${H.exito.percentualExtenso} por cento) ` +
    `sobre o valor ${H.exito.base} de qualquer montante eventualmente desbloqueado judicialmente, ` +
    `devolvido, compensado ou recebido a titulo de acordo ou indenizacao durante a tramitacao ` +
    `da acao e sobre ganho da causa.`
  )];
}

// ── Parágrafo TJ — SUPRIMIR SE H.tjIncluido === false ────────────────────
function paragTJ() {
  if (!H.tjIncluido) return [];
  return [esp(), pCorpo(
    `Paragrafo terceiro: Estao incluidos na presente contratacao os honorarios relativos a ` +
    `interposicao de recurso ao Tribunal de Justica em face de sentenca de improcedencia ` +
    `ou de procedencia parcial, desde que envolva materia relevante para o deslinde da controversia.`
  )];
}

// ── Parágrafo recursos superiores — SUPRIMIR SE H.recursosSuperiores === null
function paragRecursosSuperiores() {
  if (!H.recursosSuperiores) return [];
  return [esp(), pCorpo(
    `Entretanto, eventuais recursos de natureza complementar, tais como agravo de instrumento ` +
    `(quando nao versar sobre o merito), ou recursos dirigidos aos Tribunais Superiores como ` +
    `terceiro grau (STJ ou STF), inclusive agravo em recurso especial ou extraordinario, nao ` +
    `estao incluidos nos honorarios aqui pactuados, sendo certo que, caso haja a necessidade ` +
    `ou conveniencia de sua interposicao, sera cobrado um valor adicional de ` +
    `R$ ${H.recursosSuperiores.valor} (${H.recursosSuperiores.valorExtenso}) a titulo de ` +
    `honorarios recursais complementares, mediante previa anuencia do contratante.`
  )];
}

// ── Parágrafo quarto (êxito x sucumbência) — SUPRIMIR SE H.exito === null ─
function paragQuarto() {
  if (!H.exito) return [];
  return [esp(), pCorpo(
    `Paragrafo quarto: O percentual de ${H.exito.percentual}% sobre o exito da causa ` +
    `refere-se ao valor ${H.exito.base} recebido pelo CONTRATANTE em eventual condenacao ` +
    `ou acordo e nao se confunde com os honorarios sucumbenciais, que serao pagos ` +
    `exclusivamente pela parte adversa.`
  )];
}

// ── Montagem do corpo do contrato ─────────────────────────────────────────
const conteudo = [
  esp(),
  pCentro("CONTRATO DE PRESTACAO DE SERVICOS ADVOCATICIOS", true),
  esp(),

  pSemRecuo(`CONTRATANTE: ${C.nome}, ${C.qualificacao}, inscrito no CPF sob o no ${C.cpf}, residente e domiciliado na ${C.endereco}.`, true),
  esp(),
  pSemRecuo(
    "CONTRATADOS: MARIA ISABEL DA ROSA, brasileira, solteira, advogada, inscrita na " +
    "OAB/RS sob o no 118.352, CPF sob o no 016.645.660-95, e CRISTIANO DA ROSA, " +
    "brasileiro, solteiro, advogado, inscrito na OAB/RS sob o no 78.652, CPF sob o no " +
    "892.093.540-87, ambos com endereco profissional na Av. Protasio Alves, no 654, " +
    "bairro Rio Branco, Porto Alegre/RS, CEP 90410-004.", true
  ),
  esp(),

  pTitulo("I. DO OBJETO"),
  esp(),
  pCorpo(
    `O presente contrato tem por objeto a prestacao de servicos advocaticios consistentes ` +
    `na propositura e acompanhamento de ${H.numAcoes} demanda(s) judicial(is) em favor do ` +
    `CONTRATANTE, sendo: ${H.objeto}.`
  ),
  esp(),
  pCorpo(
    "Incluem-se na presente contratacao a analise documental, a elaboracao das peticoes " +
    "iniciais, o acompanhamento processual em primeira instancia, a apresentacao de " +
    "manifestacoes processuais ordinarias e a interposicao de recursos em primeiro grau, " +
    "quando necessarios ao adequado desenvolvimento das demandas."
  ),
  esp(),

  pTitulo("II. DA REMUNERACAO E DOS HONORARIOS"),
  esp(),
  pCorpo("O CONTRATANTE pagara aos CONTRATADOS os seguintes valores a titulo de honorarios:"),
  esp(),
  ...blocoHonorariosIniciais(),
  ...blocoDiligencia(),
  ...blocoMensalidade(),
  ...blocoExito(),
  esp(),
  pCorpo(
    "Paragrafo segundo: Os CONTRATADOS manterao o acompanhamento da acao em primeira " +
    "instancia, incluindo despachos, sustentacoes orais e cumprimento de prazos processuais."
  ),
  ...paragTJ(),
  ...paragRecursosSuperiores(),
  ...paragQuarto(),
  esp(),
  pCorpo(
    "Paragrafo quinto: Os honorarios pagos serao divididos entre os CONTRATADOS conforme " +
    "sua participacao no processo."
  ),
  esp(),
  pCorpo(
    "Em caso de atraso no pagamento dos honorarios mensais, serao aplicados juros de " +
    "1% ao mes, acrescidos de multa de 2% sobre o valor devido."
  ),
  esp(),
  pCorpo(
    "O presente contrato abrange somente os servicos especificados na clausula primeira. " +
    "Qualquer outra demanda correlata sera objeto de novo contrato ou aditivo."
  ),
  esp(),

  pTitulo("III. DAS OBRIGACOES DO CONTRATANTE"),
  esp(),
  pCorpo(
    "O CONTRATANTE devera fornecer aos CONTRATADOS todos os documentos e informacoes " +
    "necessarios ao bom andamento do processo, dentro dos prazos estabelecidos."
  ),
  esp(),
  pCorpo(
    "Paragrafo unico: Os CONTRATADOS nao se responsabilizam por atrasos ou prejuizos " +
    "decorrentes da falta ou entrega tardia de documentos pelo CONTRATANTE."
  ),
  esp(),

  pTitulo("IV. DAS GARANTIAS"),
  esp(),
  pCorpo(
    "O CONTRATANTE esta ciente de que o presente contrato se refere a obrigacao de meio, " +
    "e nao de resultado, nao havendo garantia de sucesso na via judicial."
  ),
  esp(),

  pTitulo("V. DA RESCISAO CONTRATUAL"),
  esp(),
  pCorpo(
    "O contrato permanecera vigente enquanto perdurar a tramitacao do processo judicial, " +
    "podendo ser rescindido por qualquer uma das partes mediante aviso previo."
  ),
  esp(),
  pCorpo(
    "Paragrafo primeiro: Caso o CONTRATANTE desista da acao ou revogue o mandato antes " +
    "do encerramento do processo, os honorarios pagos nao serao reembolsaveis, e os " +
    "honorarios mensais pendentes serao devidos ate a data da rescisao."
  ),
  esp(),
  pCorpo(
    "Paragrafo segundo: Em caso de inadimplencia superior a 30 (trinta) dias no pagamento " +
    "dos honorarios mensais, os CONTRATADOS poderao suspender os servicos advocaticios e " +
    "comunicar a rescisao do contrato."
  ),
  esp(),

  pTitulo("VI. DO CASO FORTUITO OU FORCA MAIOR"),
  esp(),
  pCorpo(
    "As partes nao serao responsabilizadas pelo nao cumprimento de suas obrigacoes em " +
    "casos de forca maior ou caso fortuito, conforme dispoe o art. 393 do Codigo Civil."
  ),
  esp(),

  pTitulo("VII. DO TITULO EXECUTIVO"),
  esp(),
  pCorpo(
    "Este contrato constitui titulo executivo extrajudicial, nos termos do art. 784, " +
    "inciso II, do Codigo de Processo Civil, podendo ser executado em caso de inadimplencia."
  ),
  esp(),

  pTitulo("VIII. DO FORO"),
  esp(),
  pCorpo(
    "Fica eleito o foro da Comarca de Porto Alegre/RS para dirimir quaisquer duvidas " +
    "oriundas deste contrato, com renuncia expressa a qualquer outro foro."
  ),
  esp(),
  pCorpo(
    "E, por estarem justas e acordadas, as partes assinam o presente contrato em duas " +
    "vias de igual teor e forma."
  ),
  esp(),
  new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: LINE_15,
    children: [new TextRun({ text: `Porto Alegre, ${DATA_ATUAL}.`, font: FONT, size: SIZE_BODY })]
  }),
  esp(), esp(), esp(),
  pCentro("______________________________", false),
  pCentro(C.nome, true),
  pCentro(`CPF ${C.cpf}`, false),
];

const doc = new Document({
  sections: [{
    properties: secaoProps(),
    headers: { default: criarCabecalho() },
    footers: { default: criarRodape() },
    children: conteudo
  }]
});

Packer.toBuffer(doc).then(buf => {
  const nome = "Contrato_" + C.nome.split(" ").slice(-1)[0] + ".docx";
  fs.writeFileSync("/home/claude/" + nome, buf);
  console.log("Gerado: " + nome);
});
```

---

### 4.4 DOCUMENTO 3 — DECLARAÇÃO DE HIPOSSUFICIÊNCIA

**Nome do arquivo:** `Declaracao_SOBRENOME.docx`

```javascript
// Script: gerar_declaracao.js
// [incluir constantes e funções utilitárias da seção 4.1]

// Variante A — Pessoa Física
const C = {
  nome: "JUAREZ OLAVO FAGUNDES DA ROSA",
  cpf:  "384.637.410-53",
  qualificacao: "brasileiro, residente e domiciliado na Rua Jaguari, no 385, Alvorada/RS"
};
const DATA_ATUAL = "15 de maio de 2026";

const conteudo = [
  esp(),
  pCentro("DECLARACAO DE HIPOSSUFICIENCIA", true),
  esp(),
  pCorpo(
    `Eu, ${C.nome}, ${C.qualificacao}, venho por meio da presente, para os devidos fins, ` +
    `especialmente para instruir pedido de gratuidade da justica, declarar que nao tenho ` +
    `meios de arcar com as despesas processuais necessarias para o prosseguimento da acao ` +
    `que ora inicio, sem prejuizo do sustento proprio e de minha familia.`
  ),
  esp(),
  pCorpo(
    "Assim, DECLARO minha hipossuficiencia nos termos da lei e, por essa razao, pleiteio " +
    "a concessao dos BENEFICIOS DA GRATUIDADE DA JUSTICA, conforme o disposto no art. 5o, " +
    "inciso LXXIV, da Constituicao Federal, combinado com o art. 98 do Codigo de Processo Civil."
  ),
  esp(),
  pCorpo(
    "Diante da incapacidade financeira que enfrento para custear qualquer ato processual, " +
    "solicito ainda que o beneficio da justica gratuita abranja todas as fases e atos deste " +
    "processo, nos termos do artigo 98 do CPC."
  ),
  esp(),
  new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: LINE_15,
    children: [new TextRun({ text: `Porto Alegre, ${DATA_ATUAL}.`, font: FONT, size: SIZE_BODY })]
  }),
  esp(), esp(), esp(),
  pCentro("______________________________", false),
  pCentro(C.nome, true),
  pCentro(`CPF ${C.cpf}`, false),
  esp(),
  pCentro("MARIA ISABEL DA ROSA - OAB/RS 118.352"),
  pCentro("CRISTIANO DA ROSA - OAB/RS 78.652"),
  pCentro("(51) 98191-9798 / (51) 98122-0776"),
  pCentro("Av. Protasio Alves, 654 - Rio Branco, Porto Alegre/RS, 90410-004"),
];

const doc = new Document({
  sections: [{
    properties: secaoProps(),
    headers: { default: criarCabecalho() },
    footers: { default: criarRodape() },
    children: conteudo
  }]
});

Packer.toBuffer(doc).then(buf => {
  const nome = "Declaracao_" + C.nome.split(" ").slice(-1)[0] + ".docx";
  fs.writeFileSync("/home/claude/" + nome, buf);
  console.log("Gerado: " + nome);
});
```

**Variante B — Pessoa Jurídica:** adaptar o texto de declaração para o representante
legal da empresa, substituindo referências individuais por "a empresa [RAZÃO SOCIAL],
inscrita no CNPJ sob o no [CNPJ]". Bloco de assinatura: razão social + CNPJ + nome
do representante + CPF.

---

## ETAPA 5 — CONVERSÃO PARA PDF E ENTREGA

```bash
# Converter todos os DOCX para PDF
for f in /home/claude/Procuracao_*.docx \
          /home/claude/Contrato_*.docx \
          /home/claude/Declaracao_*.docx; do
  libreoffice --headless --convert-to pdf "$f" --outdir /home/claude/ 2>/dev/null
done

# Copiar para outputs
cp /home/claude/Procuracao_*.docx /mnt/user-data/outputs/
cp /home/claude/Procuracao_*.pdf  /mnt/user-data/outputs/
cp /home/claude/Contrato_*.docx   /mnt/user-data/outputs/
cp /home/claude/Contrato_*.pdf    /mnt/user-data/outputs/
cp /home/claude/Declaracao_*.docx /mnt/user-data/outputs/
cp /home/claude/Declaracao_*.pdf  /mnt/user-data/outputs/
```

**Ordem de entrega via present_files:**
1. Contrato .docx
2. Contrato .pdf
3. Procuração .docx
4. Procuração .pdf
5. Declaração .docx
6. Declaração .pdf

---

## Regras Críticas

- **Supressão estrita:** cada bloco condicional retorna array vazio `[]` quando
  a condição é falsa. Nunca gerar parágrafo com placeholder ou texto incompleto.
- **Foro:** sempre "Porto Alegre/RS" — não perguntar, não usar placeholder.
- **Inadimplência:** sempre "30 (trinta) dias" — fixo, não perguntar.
- **Nunca usar `\n`** em strings docx-js — parágrafos separados.
- **UTF-8 completo** — nunca remover acentos preventivamente.
- **Valores por extenso** — sempre junto do numérico: R$ 3.400,00 (três mil e quatrocentos reais).
- **Gênero correto** — ajustar inscrito(a), residente(a), nascido(a) conforme o cliente.
- **Cabeçalho tríplice** em todas as páginas de todos os documentos.
- **Contratados fixos** — nunca alterar dados de Cristiano ou Maria Isabel.
- **ask_user_input_v0** — usar obrigatoriamente para perguntas binárias do questionário.

---

## Variações Aceitas

| Situação | Adaptação |
|---|---|
| Apenas Cristiano | Remover Isabel do contrato e procuração |
| Apenas Isabel | Remover Cristiano do contrato e procuração |
| Cliente PJ | Variante B da declaração; representante legal no contrato |
| Sem mensalidade | H.mensalidade = null — suprimir bloco c) |
| Sem êxito | H.exito = null — suprimir bloco b) e parágrafo quarto |
| Sem diligência | H.diligencia = null — suprimir parágrafo |
| Valor à vista | H.avista = true — usar bloco de parcela única |
| TJ não incluído | H.tjIncluido = false — suprimir parágrafo terceiro |
| Sem recursos superiores | H.recursosSuperiores = null — suprimir parágrafo |
| Declaração dispensada | Gerar apenas procuração + contrato |
