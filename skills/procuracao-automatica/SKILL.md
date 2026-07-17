---
name: procuracao-automatica
description: >
  Skill especializada na geração automática de Instrumentos Particulares de
  Procuração e Notificações de Revogação de Poderes para o escritório Rosa
  Advogados (Cristiano da Rosa, OAB/RS 78.652). Gera simultaneamente arquivos
  DOCX e PDF prontos para uso. Aceita dados digitados diretamente ou extraídos
  via OCR de foto/imagem de documento de identidade. Ao final, pergunta se o
  usuário deseja também gerar a Notificação de Revogação de Poderes.

  Use SEMPRE que Cristiano solicitar geração de procuração, instrumento de
  mandato, substabelecimento, ou quando mencionar dados de um cliente para
  outorga de poderes. Acionar com /procuracao, /mandato, /outorga,
  /substabelecimento, /revogacao, /notificacao-revogacao, ou quando o usuário
  fornecer dados de qualificação de pessoa física para constituição de advogado.
---

# Skill — Procuração Automática Rosa Advogados

## Protocolo de Execução

**FLUXO OBRIGATÓRIO:** Executar as etapas 1 a 5 em sequência. Não pular etapas.

---

## ETAPA 1 — COLETA DE DADOS

### 1.1 Dados via texto

O usuário pode fornecer os dados diretamente. Coletar:

| Campo | Obrigatório? | Notas |
|---|---|---|
| Nome completo | SIM | |
| Nacionalidade | NÃO | Se ausente, suprimir |
| Estado civil | NÃO | Se ausente, suprimir |
| Profissão | NÃO | Se ausente, suprimir |
| Filiação (pai e/ou mãe) | NÃO | Se ausente, suprimir |
| Data de nascimento | NÃO | Formato: DD de mês de AAAA |
| RG | NÃO | Com dígito verificador se houver |
| CPF | NÃO | Formato: XXX.XXX.XXX-XX |
| Endereço completo | NÃO | Rua, número, bairro, cidade/UF |

**REGRA CRÍTICA:** Nunca deixar campo em branco. Campo sem dado = campo SUPRIMIDO.

### 1.2 Dados via foto/imagem de documento

Se o usuário enviar imagem (RG, CNH, certidão), extrair via OCR:
- Analisar a imagem diretamente
- Extrair todos os campos visíveis
- Confirmar os dados extraídos antes de gerar o documento
- Preencher apenas o que for legível; suprimir o restante

### 1.3 Dados fixos do procurador (SEMPRE estes, nunca alterar)

```
CRISTIANO DA ROSA, brasileiro, solteiro, advogado, inscrito na Ordem dos
Advogados do Brasil, Seccional RS, sob o n. 78.652, telefone 51 81220776
```

---

## ETAPA 2 — GERAÇÃO DO SCRIPT DOCX

### 2.1 Verificar dependências

```bash
npm list -g docx 2>/dev/null | head -3 || npm install -g docx
ls /tmp/procuracao-automatica/assets/logo_rosa.png
```

### 2.2 Estrutura do documento — Procuração

**Título:** `INSTRUMENTO PARTICULAR DE PROCURAÇÃO`
- Arial 14pt, negrito, centralizado, sem recuo, espaço antes: 0, depois: 240

**Abertura obrigatória (parágrafo único contínuo):**

```
Por este instrumento particular de mandato e na melhor forma de direito,
[QUALIFICAÇÃO DO OUTORGANTE], nomeia e constitui seu bastante procurador
CRISTIANO DA ROSA, brasileiro, solteiro, advogado, inscrito na Ordem dos
Advogados do Brasil, Seccional RS, sob o n. 78.652, telefone 51 81220776,
a que confere todos os poderes, inclusive os de cláusula "ad judicia", e mais
os poderes especiais para assinar declaração de hipossuficiência econômica,
confessar, dar quitação, desistir, firmar compromisso, receber, receber citação,
reconhecer a procedência do pedido, renunciar ao direito sobre o qual se funda
a ação, transigir, celebrar acordos, requerer liberdade provisória, revogação ou
relaxamento de prisão, formular quesitos, requerer produção de provas, acompanhar
perícias, realizar diligências, retirar e apresentar documentos, prestar declarações,
receber alvarás, levantar valores, firmar recibos, substabelecer com ou sem reserva
de poderes, principalmente, para que podendo para tanto representá-lo em qualquer
instância ou Tribunal e tudo o mais que for necessário ao fiel e cabal desempenho
do presente mandato, inclusive, substabelecer, por fim, usar de todos os recursos
em direito admitidos para o desempenho do presente mandato, o que tudo dá por bom,
firme e valioso.
```

**Fechamento:**
```
Porto Alegre, [DD] de [mês] de [AAAA].


_______________________________
OUTORGANTE
```

**Data:** usar sempre a data atual no formato "5 de maio de 2026".

### 2.3 Formatação da qualificação do outorgante

Construir a qualificação somente com os campos disponíveis:

```javascript
// Montar dinamicamente — incluir apenas os campos fornecidos
const partes = [];
if (nome)         partes.push(nome);
if (nacionalidade) partes.push(nacionalidade);
if (estadoCivil)  partes.push(estadoCivil);
if (profissao)    partes.push(profissao);
if (filiacao)     partes.push(`filho(a) de ${filiacao}`);
if (dataNasc)     partes.push(`nascido(a) em ${dataNasc}`);
if (rg)           partes.push(`portador(a) do RG n. ${rg}`);
if (cpf)          partes.push(`inscrito(a) no CPF sob o n. ${cpf}`);
if (endereco)     partes.push(`residente e domiciliado(a) na ${endereco}`);
const qualificacao = partes.join(', ');
```

### 2.4 Formatação visual — padrão Rosa Advogados

Usar as mesmas constantes da skill peticoes-docx:

```javascript
const FONT = "Arial";
const SIZE_BODY = 24;       // 12pt em half-points
const SIZE_TITLE = 28;      // 14pt
const SIZE_HEADER = 16;     // 8pt
const LINE_15 = { line: 360, lineRule: "auto" };
const LINE_10 = { line: 240, lineRule: "auto" };
const NO_SPACE = { before: 0, after: 0 };

// Margens A4
const PAGE = { width: 11906, height: 16838 };
const MARGINS = { top: 1701, bottom: 1134, left: 1701, right: 1134 };
```

**Parágrafo do corpo (procuração é parágrafo único):**
- Fonte Arial 12pt
- Alinhamento: justificado
- Primeira linha: 1842 DXA (3,25 cm)
- Espaçamento: 1,5 linhas
- Antes/depois: 0pt

**Bloco de assinatura:**
- Espaço em branco equivalente a 3 linhas
- Linha `_______________________________` centralizada
- `OUTORGANTE` centralizado, Arial 12pt, negrito

---

## ETAPA 3 — GERAÇÃO DA NOTIFICAÇÃO DE REVOGAÇÃO (condicional)

Após gerar a procuração, perguntar ao usuário:

> "Deseja também gerar a Notificação de Revogação de Poderes para este cliente?"

Se SIM, gerar documento adicional com a seguinte estrutura:

**Título:** `NOTIFICAÇÃO`

**Corpo:**

```
Senhor advogado, Eu, [NOME DO OUTORGANTE], [QUALIFICAÇÃO COMPLETA],
já me dou por satisfeito pelos serviços prestados, não me convindo mais,
neste momento processual, manter em vigor a procuração que lhe outorguei,
informo a Vossa Senhoria que pela presente, estou revogando expressamente a
referida procuração, como me faculta a lei, pedindo-lhe que se abstenha de
praticar qualquer ato em meu nome, no referido processo; se for o caso, em
outra ocasião futura, será outorgada nova procuração.

Havendo possibilidade, gostaria que fosse notificado o juízo, para que tome
conhecimento da decisão, surtindo efeito legal a partir da juntada,
providenciando-se o descadastramento do advogado do sistema informatizado
do Tribunal. Por fim, quando intimado sobre o requerido, decidirá sobre a
viabilidade de novo constituído.
```

**Fechamento:**
```
[Cidade], [DD] de [mês] de [AAAA].


_______________________________
[NOME DO OUTORGANTE],
DECLARANTE
```

**Formatação:** mesma da procuração (Arial 12pt, 1,5 linhas, justificado, primeira linha 3,25cm).

---

## ETAPA 4 — SCRIPT JAVASCRIPT COMPLETO

### 4.1 Template do script

Salvar como `/home/claude/gerar_procuracao.js` e executar com `node`.

```javascript
const {
  Document, Packer, Paragraph, TextRun, Header, Footer,
  Table, TableRow, TableCell, AlignmentType, BorderStyle,
  WidthType, ImageRun, PageNumber, NumberFormat
} = require('docx');
const fs = require('fs');

// ── Constantes ────────────────────────────────────────────────────────────
const FONT = "Arial";
const SIZE_BODY = 24;
const SIZE_TITLE = 28;
const SIZE_HEADER = 16;
const PAGE = { width: 11906, height: 16838 };
const MARGINS = { top: 1701, bottom: 1134, left: 1701, right: 1134 };
const CONTENT_WIDTH = PAGE.width - MARGINS.left - MARGINS.right;  // ~8504
const LINE_15 = { line: 360, lineRule: "auto" };
const LINE_10 = { line: 240, lineRule: "auto" };
const NO_SPACE = { before: 0, after: 0 };
const INDENT_BODY = { firstLine: 1842 };  // 3,25 cm

// ── Logo ──────────────────────────────────────────────────────────────────
const logoBuffer = fs.readFileSync('/tmp/procuracao-automatica/assets/logo_rosa.png');

// ── Helpers ───────────────────────────────────────────────────────────────
const bordaNula = {
  top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
};

function esp() {
  return new Paragraph({ spacing: { ...LINE_10, ...NO_SPACE }, children: [new TextRun({ text: "", font: FONT, size: SIZE_BODY })] });
}

function pCorpo(texto, opts = {}) {
  return new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    indent: INDENT_BODY,
    spacing: { ...LINE_15, ...NO_SPACE },
    children: [new TextRun({ text: texto, font: FONT, size: SIZE_BODY, bold: opts.bold || false })]
  });
}

function pCentro(texto, opts = {}) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { ...LINE_15, ...NO_SPACE },
    children: [new TextRun({ text: texto, font: FONT, size: opts.size || SIZE_BODY, bold: opts.bold || false })]
  });
}

// ── Cabeçalho ─────────────────────────────────────────────────────────────
function criarCabecalho() {
  const colLogoW = 1134;
  const colEndW  = 4535;
  const colRosaW = CONTENT_WIDTH - colLogoW - colEndW;

  const cellLogo = new TableCell({
    borders: bordaNula,
    width: { size: colLogoW, type: WidthType.DXA },
    margins: { top: 0, bottom: 0, left: 0, right: 80 },
    children: [new Paragraph({
      spacing: NO_SPACE,
      children: [new ImageRun({ data: logoBuffer, transformation: { width: 55, height: 55 }, type: "png" })]
    })]
  });

  const cellEnd = new TableCell({
    borders: bordaNula,
    width: { size: colEndW, type: WidthType.DXA },
    margins: { top: 0, bottom: 0, left: 80, right: 80 },
    children: [
      new Paragraph({ spacing: { ...LINE_10, ...NO_SPACE }, children: [new TextRun({ text: "Av. Protásio Alves, 654 - Rio Branco, Porto Alegre - RS, 90410-004", font: FONT, size: SIZE_HEADER })] }),
      new Paragraph({ spacing: { ...LINE_10, ...NO_SPACE }, children: [new TextRun({ text: "COND. EDIF. NORMANDIE / LOJA 02", font: FONT, size: SIZE_HEADER })] }),
    ]
  });

  const cellRosa = new TableCell({
    borders: bordaNula,
    width: { size: colRosaW, type: WidthType.DXA },
    margins: { top: 0, bottom: 0, left: 80, right: 0 },
    children: [
      new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { ...LINE_10, ...NO_SPACE }, children: [new TextRun({ text: ".·. Rosa Advogados.·.", font: FONT, size: SIZE_HEADER, bold: true })] }),
      new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { ...LINE_10, ...NO_SPACE }, children: [new TextRun({ text: "www.cristianorosa.net", font: FONT, size: SIZE_HEADER, color: "0563C1" })] }),
      new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { ...LINE_10, ...NO_SPACE }, children: [new TextRun({ text: "(51) 81220776", font: FONT, size: SIZE_HEADER })] }),
    ]
  });

  const tbl = new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: [colLogoW, colEndW, colRosaW],
    rows: [new TableRow({ children: [cellLogo, cellEnd, cellRosa] })]
  });

  const hr = new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 1 } },
    spacing: { ...LINE_10, before: 0, after: 120 },
    children: [new TextRun({ text: "", font: FONT, size: SIZE_HEADER })]
  });

  return new Header({ children: [tbl, hr] });
}

// ── Rodapé ────────────────────────────────────────────────────────────────
function criarRodape() {
  return new Footer({
    children: [new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: { ...LINE_10, ...NO_SPACE },
      children: [new TextRun({ children: ["Página ", PageNumber.CURRENT], font: FONT, size: 20 })]
    })]
  });
}

// ── Montagem do documento ─────────────────────────────────────────────────
function criarDoc(children, nomeArquivo) {
  const doc = new Document({
    sections: [{
      properties: {
        page: {
          size: PAGE,
          margin: MARGINS,
          pageNumbers: { start: 1, formatType: NumberFormat.DECIMAL }
        }
      },
      headers: { default: criarCabecalho() },
      footers: { default: criarRodape() },
      children,
    }]
  });
  return Packer.toBuffer(doc).then(buf => {
    fs.writeFileSync(nomeArquivo, buf);
    console.log("Gerado: " + nomeArquivo);
  });
}

// ══════════════════════════════════════════════════════════════════════════
// DADOS DO OUTORGANTE — preencher com os dados reais
// ══════════════════════════════════════════════════════════════════════════
const dados = {
  nome:          "NOME_DO_OUTORGANTE",
  nacionalidade: "brasileiro(a)",   // suprimir se ausente (null)
  estadoCivil:   "solteiro(a)",     // suprimir se ausente (null)
  profissao:     null,              // suprimir se ausente
  filiacao:      null,              // "Fulano e Fulana" — suprimir se ausente
  dataNasc:      null,              // "DD de mês de AAAA" — suprimir se ausente
  rg:            null,              // suprimir se ausente
  cpf:           null,              // "XXX.XXX.XXX-XX" — suprimir se ausente
  endereco:      null,              // "Rua X, nº Y, Bairro, Cidade/UF" — suprimir se ausente
  genero:        "m",               // "m" ou "f" — para ajuste do pronome
  dataDoc:       "5 de maio de 2026",
  gerarRevogacao: false,            // true se gerar também a notificação
};

// ── Montar qualificação dinamicamente ─────────────────────────────────────
function montarQualificacao(d) {
  const filho = d.genero === "f" ? "filha" : "filho";
  const nato  = d.genero === "f" ? "nascida" : "nascido";
  const port  = d.genero === "f" ? "portadora" : "portador";
  const insc  = d.genero === "f" ? "inscrita" : "inscrito";
  const resid = d.genero === "f" ? "residente e domiciliada" : "residente e domiciliado";

  const partes = [d.nome];
  if (d.nacionalidade) partes.push(d.nacionalidade);
  if (d.estadoCivil)   partes.push(d.estadoCivil);
  if (d.profissao)     partes.push(d.profissao);
  if (d.filiacao)      partes.push(`${filho}(a) de ${d.filiacao}`);
  if (d.dataNasc)      partes.push(`${nato} em ${d.dataNasc}`);
  if (d.rg)            partes.push(`${port}(a) do RG n. ${d.rg}`);
  if (d.cpf)           partes.push(`${insc}(a) no CPF sob o n. ${d.cpf}`);
  if (d.endereco)      partes.push(`${resid} na ${d.endereco}`);
  return partes.join(', ');
}

// ── Texto da procuração ───────────────────────────────────────────────────
function textoProcuracao(d) {
  const qual = montarQualificacao(d);
  return `Por este instrumento particular de mandato e na melhor forma de direito, ${qual}, nomeia e constitui seu bastante procurador CRISTIANO DA ROSA, brasileiro, solteiro, advogado, inscrito na Ordem dos Advogados do Brasil, Seccional RS, sob o n. 78.652, telefone 51 81220776, a que confere todos os poderes, inclusive os de cláusula "ad judicia", e mais os poderes especiais para assinar declaração de hipossuficiência econômica, confessar, dar quitação, desistir, firmar compromisso, receber, receber citação, reconhecer a procedência do pedido, renunciar ao direito sobre o qual se funda a ação, transigir, celebrar acordos, requerer liberdade provisória, revogação ou relaxamento de prisão, formular quesitos, requerer produção de provas, acompanhar perícias, realizar diligências, retirar e apresentar documentos, prestar declarações, receber alvarás, levantar valores, firmar recibos, substabelecer com ou sem reserva de poderes, principalmente, para que podendo para tanto representá-lo em qualquer instância ou Tribunal e tudo o mais que for necessário ao fiel e cabal desempenho do presente mandato, inclusive, substabelecer, por fim, usar de todos os recursos em direito admitidos para o desempenho do presente mandato, o que tudo dá por bom, firme e valioso.`;
}

// ── Texto da revogação ────────────────────────────────────────────────────
function textoRevogacao(d) {
  const qual = montarQualificacao(d);
  return [
    `Senhor advogado, Eu, ${qual}, já me dou por satisfeito pelos serviços prestados, não me convindo mais, neste momento processual, manter em vigor a procuração que lhe outorguei, informo a Vossa Senhoria que pela presente, estou revogando expressamente a referida procuração, como me faculta a lei, pedindo-lhe que se abstenha de praticar qualquer ato em meu nome, no referido processo; se for o caso, em outra ocasião futura, será outorgada nova procuração.`,
    `Havendo possibilidade, gostaria que fosse notificado o juízo, para que tome conhecimento da decisão, surtindo efeito legal a partir da juntada, providenciando-se o descadastramento do advogado do sistema informatizado do Tribunal. Por fim, quando intimado sobre o requerido, decidirá sobre a viabilidade de novo constituído.`
  ];
}

// ══════════════════════════════════════════════════════════════════════════
// GERAÇÃO DOS DOCUMENTOS
// ══════════════════════════════════════════════════════════════════════════
async function main() {
  // 1. PROCURAÇÃO
  const contentProc = [
    esp(),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { ...LINE_15, before: 0, after: 240 },
      children: [new TextRun({ text: "INSTRUMENTO PARTICULAR DE PROCURAÇÃO", font: FONT, size: SIZE_TITLE, bold: true })]
    }),
    esp(),
    pCorpo(textoProcuracao(dados)),
    esp(),
    esp(),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { ...LINE_15, ...NO_SPACE },
      children: [new TextRun({ text: `Porto Alegre, ${dados.dataDoc}.`, font: FONT, size: SIZE_BODY })]
    }),
    esp(),
    esp(),
    esp(),
    pCentro("_______________________________"),
    pCentro("OUTORGANTE", { bold: true }),
  ];

  await criarDoc(contentProc, "/home/claude/Procuracao.docx");

  // 2. REVOGAÇÃO (condicional)
  if (dados.gerarRevogacao) {
    const [p1, p2] = textoRevogacao(dados);
    const contentRev = [
      esp(),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { ...LINE_15, before: 0, after: 240 },
        children: [new TextRun({ text: "NOTIFICAÇÃO", font: FONT, size: SIZE_TITLE, bold: true })]
      }),
      esp(),
      pCorpo(p1),
      esp(),
      pCorpo(p2),
      esp(),
      esp(),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { ...LINE_15, ...NO_SPACE },
        children: [new TextRun({ text: `Porto Alegre, ${dados.dataDoc}.`, font: FONT, size: SIZE_BODY })]
      }),
      esp(),
      esp(),
      esp(),
      pCentro("_______________________________"),
      pCentro(dados.nome + ",", { bold: true }),
      pCentro("DECLARANTE", { bold: true }),
    ];

    await criarDoc(contentRev, "/home/claude/Revogacao_Procuracao.docx");
  }

  console.log("Concluido.");
}

main().catch(err => { console.error(err); process.exit(1); });
```

---

## ETAPA 4-B — RODAPÉ COM QR CODE

O rodapé é implementado como **tabela de 2 colunas sem bordas**:

| Coluna Esquerda | Coluna Direita |
|---|---|
| QR code 28x28pt (canto inferior esquerdo) | "Página X" alinhado à direita, Arial 10pt |

```javascript
const QR_PT  = 28;
const QR_EMU = QR_PT * 12700;
const colQrW = Math.round(QR_PT * 1440 / 72) + 80;
const colPgW = CONTENT_WIDTH - colQrW;
const qrBuffer = fs.readFileSync('/tmp/procuracao-automatica/assets/qrcode_rosa.jpg');

function criarRodape() {
  const cellQr = new TableCell({
    borders: bordaNula,
    width: { size: colQrW, type: WidthType.DXA },
    verticalAlign: VerticalAlign.BOTTOM,
    margins: { top: 0, bottom: 0, left: 0, right: 60 },
    children: [new Paragraph({
      spacing: { ...LINE_10, ...NO_SPACE },
      children: [new ImageRun({ data: qrBuffer, transformation: { width: QR_PT, height: QR_PT }, type: "jpg" })]
    })]
  });
  const cellPg = new TableCell({
    borders: bordaNula,
    width: { size: colPgW, type: WidthType.DXA },
    verticalAlign: VerticalAlign.BOTTOM,
    margins: { top: 0, bottom: 0, left: 60, right: 0 },
    children: [new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: { ...LINE_10, ...NO_SPACE },
      children: [new TextRun({ children: ["Página ", PageNumber.CURRENT], font: FONT, size: 20 })]
    })]
  });
  return new Footer({ children: [new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: [colQrW, colPgW],
    rows: [new TableRow({ children: [cellQr, cellPg] })]
  })] });
}
```

**Regras do QR no rodapé:**
- Tamanho fixo 28x28pt — discreto, não interfere com notas de rodapé
- As notas de rodapé do Word ocupam a área **acima** do rodapé; o QR fica dentro da zona do rodapé, abaixo das notas
- Usar `VerticalAlign.BOTTOM` para alinhar ao fundo da célula
- O arquivo `qrcode_rosa.jpg` deve estar em `/tmp/procuracao-automatica/assets/`

---

## ETAPA 5 — CONVERSÃO PARA PDF

Após gerar os arquivos DOCX, converter para PDF com LibreOffice:

```bash
python3 /mnt/skills/public/docx/../../../skills/public/docx/scripts/office/soffice.py \
  --headless --convert-to pdf /home/claude/Procuracao.docx --outdir /home/claude/

# Se gerou revogação:
python3 ... --convert-to pdf /home/claude/Revogacao_Procuracao.docx --outdir /home/claude/
```

Ou via bash direto:
```bash
libreoffice --headless --convert-to pdf /home/claude/Procuracao.docx --outdir /home/claude/ 2>/dev/null
libreoffice --headless --convert-to pdf /home/claude/Revogacao_Procuracao.docx --outdir /home/claude/ 2>/dev/null
```

---

## ETAPA 6 — ENTREGA DOS ARQUIVOS

Copiar todos os arquivos gerados para `/mnt/user-data/outputs/` e apresentar via `present_files`:

```bash
cp /home/claude/Procuracao.docx /mnt/user-data/outputs/
cp /home/claude/Procuracao.pdf /mnt/user-data/outputs/
# Se gerou revogação:
cp /home/claude/Revogacao_Procuracao.docx /mnt/user-data/outputs/
cp /home/claude/Revogacao_Procuracao.pdf /mnt/user-data/outputs/
```

Apresentar **sempre o DOCX primeiro**, seguido do PDF.

---

## Regras Críticas

- **Nunca deixar campo em branco** — campo sem dado é campo suprimido
- **Nunca usar `\n`** no docx-js — sempre parágrafos separados
- **Data automática** — usar sempre a data atual do dia da geração
- **Sem travessão (–)** em nenhum texto
- **Acento completo** em todas as strings JavaScript (UTF-8 nativo)
- **Pronome correto** — verificar gênero do outorgante e ajustar filho/filha, nascido/nascida, portador/portadora, inscrito/inscrita, residente e domiciliado/domiciliada
- **Procurador fixo** — nunca alterar os dados de Cristiano da Rosa
- **Cabeçalho Rosa Advogados** em todas as páginas, em ambos os documentos
- A pergunta sobre revogação é **sempre feita após gerar a procuração**, nunca antes

---

## Exemplo de Qualificação Construída Corretamente

**Dados fornecidos:** nome, nacionalidade, estado civil, filiação, RG, CPF
**Dados ausentes:** profissão, data de nascimento, endereço

**Resultado:**
```
JOÃO SILVA DOS SANTOS, brasileiro, casado, filho de Pedro Silva dos Santos
e Maria dos Santos, portador do RG n. 1234567, inscrito no CPF sob o n.
123.456.789-00
```
