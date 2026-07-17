---
name: peticoes-docx
description: >
  Skill especializada na geração de petições, memoriais, recursos e documentos
  jurídicos em formato DOCX com o padrão visual exato do escritório Rosa Advogados
  de Cristiano da Rosa (OAB/RS 78.652). Use esta skill SEMPRE que for solicitada
  a criação ou geração de qualquer documento Word (.docx) relacionado a petições,
  memoriais, alegações, habeas corpus, recursos, requerimentos ou qualquer peça
  processual. Acionar obrigatoriamente quando o resultado final for um arquivo .docx
  para uso jurídico-profissional, independente do tipo de processo ou área do direito.
  Inclui cabeçalho tríplice com logo, endereço e QR code; separador; estilos de
  parágrafo Normal e Citação exatos; títulos em azul-petróleo; bloco introdutório
  em duas colunas (processo + qualificação); numeração de páginas; assinatura padrão.
  Esta skill deve ser consultada ANTES de qualquer geração de arquivo .docx jurídico.
---

# Skill — Petições DOCX Rosa Advogados

## Protocolo de Execução

**OBRIGATÓRIO:** Antes de gerar qualquer DOCX de petição, executar as etapas 1 a 5
em sequência. Não pular etapas. Não pedir confirmação intermediária.

---

## ETAPA 1 — VERIFICAÇÃO DE DEPENDÊNCIAS

```bash
# Verificar pacote docx instalado globalmente
npm list -g docx 2>/dev/null | head -3
# Se não instalado:
npm install -g docx
# Logo padrão (copiar para o diretório de trabalho antes de gerar)
ls /mnt/skills/user/peticoes-docx/assets/logo_rosa.png
```

O arquivo `assets/logo_rosa.png` (116x117 px) é o logo circular dourado do
escritório. Deve ser lido como Buffer antes da geração do documento.

---

## ETAPA 2 — ESPECIFICAÇÕES DE FORMATAÇÃO EXATAS

### 2.1 Página e Margens

| Parâmetro | Valor | DXA |
|---|---|---|
| Formato | A4 | 11906 x 16838 |
| Margem superior | 3,0 cm | 1701 |
| Margem inferior | 2,0 cm | 1134 |
| Margem esquerda | 3,0 cm | 1701 |
| Margem direita | 2,0 cm | 1134 |

Fórmula DXA: `Math.round(cm * 1440 / 2.54)`

### 2.2 Estilos de Parágrafo

**ESTILO NORMAL (corpo do texto):**
- Fonte: Arial 12pt (size: 24 em half-points)
- Alinhamento: Justificado
- Recuo especial: Primeira linha = 3,25 cm = **1842 DXA**
- Espaçamento entre linhas: 1,5 linhas (line: 360, lineRule: "auto")
- Espaço antes: 0pt | Espaço depois: 0pt

**ESTILO CITAÇÃO (style "1 - Citação"):**
- Fonte: Arial 10pt (size: 20 em half-points) — ATENCAO: 10pt, nao 11pt
- Alinhamento: Justificado
- Recuo esquerdo: 6,24 cm = **3535 DXA**
- Recuo especial Primeira linha: 2,5 cm = **1417 DXA**
- Espaçamento entre linhas: Simples (line: 240, lineRule: "auto")
- Espaço antes: 0pt | Espaço depois: 0pt

**TÍTULOS DE SEÇÃO (ex: "I. SÍNTESE DOS FATOS"):**
- Fonte: Arial 12pt, Negrito
- Cor: Azul-petróleo `#2E74B5` (padrão do escritório)
- Alinhamento: Centralizado
- Sem recuo
- Espaço antes: 120 twips | Espaço depois: 120 twips
- Linha 1,5

**SUBTÍTULOS NUMERADOS (ex: "1. Da Negativa de Autoria..."):**
- Fonte: Arial 12pt, Negrito
- Cor: Azul-petróleo `#2E74B5`
- Alinhamento: Justificado
- Recuo especial: Primeira linha = 1842 DXA (igual ao normal)
- Espaço antes: 120 twips | Espaço depois: 60 twips

**LINHA EM BRANCO entre blocos:**
- Parágrafo vazio, fonte Arial 12pt, espaçamento simples

### 2.3 Cabeçalho (Header) — Estrutura Tríplice com Linha Separadora

O cabeçalho aparece em TODAS as páginas. Contém:

```
[LOGO]    [ENDEREÇO]                    [ROSA ADVOGADOS + QR]
```

Implementado como três colunas via TabStops em um único parágrafo de cabeçalho
ou como tabela de 3 células sem bordas.

**Coluna esquerda:** Logo circular PNG (logo_rosa.png) 116x117px
Dimensões no documento: 864000 x 871128 EMU (aprox. 60pt x 60pt)

**Coluna central (texto):**
```
Av. Protásio Alves, 654 - Rio Branco     , Porto Alegre - RS,
90410-004
COND. EDIF. NORMANDIE / LOJA 02 (calçada)
```
Fonte Arial 8pt, justificado

**Coluna direita (texto + QR):**
```
.·. Rosa Advogados.·.
www.cristianorosa.net
(51) 81220776
[QR code image se disponível]
```
Fonte Arial 8pt

**LINHA SEPARADORA:** Logo abaixo do cabeçalho, uma linha horizontal full-width:
```javascript
new Paragraph({
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 1 } },
  spacing: { before: 0, after: 120, line: 240, lineRule: "auto" },
  children: [new TextRun({ text: "", font: "Arial", size: 16 })]
})
```

**NUMERAÇÃO DE PÁGINAS:** Rodapé (Footer) no canto INFERIOR DIREITO.
Formato: "Página X" — Arial 10pt, alinhado à direita, espaçamento simples.
NÃO usar numeração no cabeçalho.

```javascript
// Importar obrigatoriamente: Footer, PageNumber
const { Footer, PageNumber } = require('docx');

// PageNumber é enum — não é construtor. Usar dentro de TextRun.children[]:
function criarRodape() {
  return new Footer({
    children: [
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { line: 240, lineRule: "auto", before: 0, after: 0 },
        children: [
          new TextRun({
            children: ["Página ", PageNumber.CURRENT],
            font: "Arial",
            size: 20,   // 10pt
          }),
        ]
      })
    ]
  });
}
// Na seção do documento, obrigatoriamente adicionar:
// footers: { default: criarRodape() }
```

---

## ETAPA 3 — ESTRUTURA DO DOCUMENTO

### 3.1 Bloco Introdutório (duas colunas: Processo + Qualificação)

Implementar como tabela de 2 colunas sem bordas:

| Coluna Esquerda (40%) | Coluna Direita (60%) |
|---|---|
| "Processo n." (normal) | Nome do réu/requerente em **NEGRITO** + qualificação |
| Número do processo em **negrito** | (já qualificado nos autos / CPF / RG / etc.) |

Largura total da tabela = largura do conteúdo da página.

### 3.2 Título Principal da Peça

```
MEMORIAIS
```
Centralizado, Arial 12pt, **negrito**, sem recuo.
Espaço antes e depois: 240 twips.

### 3.3 Corpo da Peça

Seguir estrutura fixa conforme o tipo de peça solicitada.
Para memoriais/alegações: I. Síntese dos Fatos / II. Do Direito / III. Pedido.

### 3.3.1 Regra de Capitalização em Enumerações

**OBRIGATÓRIO:** Em qualquer enumeração de tópicos — numérica (1., 2., 3.), alfabética (a), b), c)) ou por outro marcador — a primeira palavra do texto que segue o marcador deve iniciar em maiúscula, independentemente de o item ser uma continuação sintática do período que o introduz e de terminar em ponto e vírgula.

Errado (minúscula após o marcador):
```
a) prova oral;
b) prova documental;
c) prova pericial.
```

Certo (maiúscula após o marcador):
```
a) Prova oral;
b) Prova documental;
c) Prova pericial.
```

Esta regra vale para todas as enumerações da peça (rol de provas, itens de pedido, alíneas de nulidade, etc.). A pontuação final de cada item (ponto e vírgula, ou ponto no último item) permanece inalterada — só a primeira letra do texto do item é maiúscula.

### 3.4 Bloco de Assinatura

```
Pede deferimento.

Porto Alegre, [data por extenso].

[linha de assinatura ou espaço]

CRISTIANO DA ROSA
Advogado - OAB/RS 78.652
(51) 981220776
```

- "Pede deferimento." alinhado à esquerda, sem recuo
- Data alinhada à direita ou centralizada
- Nome e OAB centralizados, Arial 12pt, negrito
- Espaçamento simples na assinatura

---


## ETAPA 3-B — REGISTRO DE ESTILOS NA GALERIA DO WORD

**OBRIGATÓRIO:** Definir o estilo "1 - Citação" no Document para que apareça
na galeria de estilos do Word e possa ser aplicado manualmente pelo usuário.

```javascript
// SEMPRE incluir no Document({ styles: ... })
const estilosDocumento = {
  paragraphStyles: [

    // ── 1 - Normal ─────────────────────────────────────────────────────────
    // ESTILO PADRÃO do corpo. Arial 12pt | justificado | 1ª 3,25cm | 1,5 linhas
    // ATENÇÃO: usar valores literais no spacing (não spread) para garantir
    //          que o docx-js registre o estilo corretamente na galeria.
    {
      id: "1-Normal",
      name: "1 - Normal",
      basedOn: "Normal",
      next: "1-Normal",
      quickFormat: true,
      run: { font: "Arial", size: 24 },
      paragraph: {
        alignment: AlignmentType.JUSTIFIED,
        indent: { firstLine: cm(3.25) },
        spacing: { line: 360, lineRule: "auto", before: 0, after: 0 },
      }
    },

    // ── 1 - Citação ────────────────────────────────────────────────────────
    // Arial 10pt | recuo esq 6,24cm + 1ª 2,5cm | espaç simples
    {
      id: "1-Citacao",
      name: "1 - Citação",
      basedOn: "Normal",
      next: "1-Citacao",
      quickFormat: true,
      run: { font: "Arial", size: 20 },
      paragraph: {
        alignment: AlignmentType.JUSTIFIED,
        indent: { left: cm(6.24), firstLine: cm(2.5) },
        spacing: { line: 240, lineRule: "auto", before: 0, after: 0 },
      }
    },

    // ── 2 - Título 2 ───────────────────────────────────────────────────────
    // Arial 12pt bold | #2E74B5 | 1ª 3,25cm | 1,5 linhas | before 160 after 80
    {
      id: "2-Titulo2",
      name: "2 - Título 2",
      basedOn: "Normal",
      next: "Normal",
      quickFormat: true,
      run: { font: "Arial", size: 24, bold: true, color: "2E74B5" },
      paragraph: {
        alignment: AlignmentType.JUSTIFIED,
        indent: { firstLine: cm(3.25) },
        spacing: { line: 360, lineRule: "auto", before: 160, after: 80 },
      }
    },

  ]
};

// Na instância do Document:
const doc = new Document({
  styles: estilosDocumento,    // ← OBRIGATÓRIO para registrar na galeria
  sections: [{ ... }]
});
```

**Parágrafos referenciam o estilo pelo id — sem redefinir formatação inline:**
```javascript
// Citação
function pCitacao(text) {
  return new Paragraph({
    style: "1-Citacao",
    children: [new TextRun({ text, font: "Arial", size: 20 })]
  });
}

// Subtítulo numerado (ex: "1. Da Negativa de Autoria...")
function pSubtitulo(text) {
  return new Paragraph({
    style: "2-Titulo2",
    children: [new TextRun({ text, font: "Arial", size: 24, bold: true, color: "2E74B5" })]
  });
}
```

---

## ETAPA 4 — TEMPLATE NODE.JS (padrão mínimo obrigatório)

Copiar e adaptar este template base para cada petição:

```javascript
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, BorderStyle, WidthType, ShadingType,
  ImageRun, Header, PageNumber, NumberFormat
} = require('docx');
const fs = require('fs');

// === CONSTANTES DE FORMATAÇÃO ===
const cm = (v) => Math.round(v * 1440 / 2.54);
const MARGINS = { top: cm(3), bottom: cm(2), left: cm(3), right: cm(2) };
const PAGE = { width: 11906, height: 16838 }; // A4
const CONTENT_WIDTH = PAGE.width - MARGINS.left - MARGINS.right; // ~9071

// Medidas críticas (extraídas dos documentos de referência)
const FIRST_LINE_NORMAL = cm(3.25);  // 1842 DXA
const LEFT_CITA = cm(6.24);          // 3535 DXA
const FIRST_LINE_CITA = cm(2.5);     // 1417 DXA

const TEAL = "2E74B5"; // Cor dos títulos
const FONT = "Arial";
const SIZE_BODY = 24;   // 12pt em half-points
const SIZE_CITA = 20;   // 10pt em half-points (style "1 - Citação")
const SIZE_HEADER = 16; // 8pt em half-points

// Espaçamentos
const LINE_15 = { line: 360, lineRule: "auto" };
const LINE_10 = { line: 240, lineRule: "auto" };
const NO_SPACE = { before: 0, after: 0 };

// Logo (ler como Buffer antes de instanciar o documento)
const logoBuffer = fs.readFileSync('/mnt/skills/user/peticoes-docx/assets/logo_rosa.png');

// === FUNÇÕES DE PARÁGRAFO ===

/** Corpo normal — usa o estilo "1 - Normal" da galeria.
 *  Para runs mistos (negrito inline etc.), passar array de TextRun. */
function pNormal(runs, opts = {}) {
  const runArr = Array.isArray(runs) ? runs : [
    new TextRun({ text: runs, font: FONT, size: SIZE_BODY, bold: opts.bold, italics: opts.italic })
  ];
  return new Paragraph({
    style: "1-Normal",             // referencia o estilo da galeria
    children: runArr,
    ...opts.extra
  });
}

/** Citação — usa o estilo NOMEADO "1 - Citação" registrado na galeria do Word.
 *  NÃO aplicar recuo inline; o estilo carrega todas as propriedades.
 *  O id do estilo no docx-js é "1-Citacao" (sem espaço/acento); o name
 *  exibido na galeria do Word é "1 - Citação". */
function pCitacao(text) {
  return new Paragraph({
    style: "1-Citacao",    // referência ao estilo registrado na galeria
    children: [new TextRun({ text, font: FONT, size: SIZE_CITA })]
  });
}

/** Título de seção principal (ex: I. SÍNTESE DOS FATOS) */
function pTituloSecao(text) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { ...LINE_15, before: 120, after: 120 },
    children: [new TextRun({
      text: text.toUpperCase(), font: FONT, size: SIZE_BODY,
      bold: true, color: TEAL
    })]
  });
}

/** Subtítulo numerado (ex: 1. Da Negativa de Autoria) */
function pSubtitulo(text) {
  return new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    indent: { firstLine: FIRST_LINE_NORMAL },
    spacing: { ...LINE_15, before: 120, after: 60 },
    children: [new TextRun({
      text, font: FONT, size: SIZE_BODY, bold: true, color: TEAL
    })]
  });
}

/** Parágrafo sem recuo (endereçamento, assinatura, etc.) */
function pSemRecuo(text, opts = {}) {
  return new Paragraph({
    alignment: opts.center ? AlignmentType.CENTER : AlignmentType.JUSTIFIED,
    spacing: { ...LINE_15, ...NO_SPACE },
    children: [new TextRun({
      text, font: FONT, size: SIZE_BODY,
      bold: opts.bold, italics: opts.italic
    })]
  });
}

/** Linha em branco */
function esp() {
  return new Paragraph({
    spacing: { ...LINE_10, ...NO_SPACE },
    children: [new TextRun({ text: "", font: FONT, size: SIZE_BODY })]
  });
}

/** Linha separadora do cabeçalho */
function linhaHR() {
  return new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 1 } },
    spacing: { ...LINE_10, before: 0, after: 120 },
    children: [new TextRun({ text: "", font: FONT, size: SIZE_HEADER })]
  });
}

// === CABEÇALHO PADRÃO ROSA ADVOGADOS ===
function criarCabecalho() {
  const bordaNula = {
    top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  };

  // Larguras das 3 colunas (em DXA, soma = CONTENT_WIDTH)
  const colLogoW  = cm(2.0);   // ~1134 DXA
  const colEndW   = cm(8.0);   // ~4535 DXA
  const colRosaW  = CONTENT_WIDTH - colLogoW - colEndW;

  const cellLogo = new TableCell({
    borders: bordaNula,
    width: { size: colLogoW, type: WidthType.DXA },
    margins: { top: 0, bottom: 0, left: 0, right: 80 },
    children: [new Paragraph({
      spacing: NO_SPACE,
      children: [new ImageRun({
        data: logoBuffer,
        transformation: { width: 55, height: 55 },
        type: "png"
      })]
    })]
  });

  const cellEnd = new TableCell({
    borders: bordaNula,
    width: { size: colEndW, type: WidthType.DXA },
    margins: { top: 0, bottom: 0, left: 80, right: 80 },
    children: [
      new Paragraph({
        spacing: { ...LINE_10, before: 0, after: 0 },
        children: [new TextRun({
          text: "Av. Protásio Alves, 654 - Rio Branco         , Porto Alegre - RS, 90410-004",
          font: FONT, size: SIZE_HEADER
        })]
      }),
      new Paragraph({
        spacing: { ...LINE_10, before: 0, after: 0 },
        children: [new TextRun({
          text: "COND. EDIF. NORMANDIE / LOJA 02 (calçada)",
          font: FONT, size: SIZE_HEADER
        })]
      }),
    ]
  });

  const cellRosa = new TableCell({
    borders: bordaNula,
    width: { size: colRosaW, type: WidthType.DXA },
    margins: { top: 0, bottom: 0, left: 80, right: 0 },
    children: [
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { ...LINE_10, before: 0, after: 0 },
        children: [new TextRun({ text: ".·. Rosa Advogados.·.", font: FONT, size: SIZE_HEADER, bold: true })]
      }),
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { ...LINE_10, before: 0, after: 0 },
        children: [new TextRun({ text: "www.cristianorosa.net", font: FONT, size: SIZE_HEADER, color: "0563C1" })]
      }),
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { ...LINE_10, before: 0, after: 0 },
        children: [new TextRun({ text: "(51) 81220776", font: FONT, size: SIZE_HEADER })]
      }),
    ]
  });

  const tabelaHeader = new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: [colLogoW, colEndW, colRosaW],
    rows: [new TableRow({ children: [cellLogo, cellEnd, cellRosa] })]
  });

  return new Header({
    children: [tabelaHeader, linhaHR()]
  });
}

// === BLOCO INTRODUTÓRIO (Processo + Qualificação) ===
function blocoIntroducao(numProcesso, nomeAcusado, qualificacao) {
  const bordaNula = {
    top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  };
  const col1W = Math.round(CONTENT_WIDTH * 0.40);
  const col2W = CONTENT_WIDTH - col1W;

  return new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: [col1W, col2W],
    rows: [new TableRow({
      children: [
        new TableCell({
          borders: bordaNula,
          width: { size: col1W, type: WidthType.DXA },
          children: [
            new Paragraph({
              spacing: { ...LINE_15, ...NO_SPACE },
              children: [new TextRun({ text: "Processo n.", font: FONT, size: SIZE_BODY })]
            }),
            esp(),
            new Paragraph({
              spacing: { ...LINE_15, ...NO_SPACE },
              children: [new TextRun({ text: numProcesso, font: FONT, size: SIZE_BODY, bold: true })]
            })
          ]
        }),
        new TableCell({
          borders: bordaNula,
          width: { size: col2W, type: WidthType.DXA },
          children: [new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            spacing: { ...LINE_15, ...NO_SPACE },
            children: [
              new TextRun({ text: nomeAcusado, font: FONT, size: SIZE_BODY, bold: true }),
              new TextRun({ text: qualificacao, font: FONT, size: SIZE_BODY })
            ]
          })]
        }),
      ]
    })]
  });
}

// === ASSINATURA PADRÃO ===
function blocoAssinatura(data) {
  return [
    esp(),
    pSemRecuo("Pede deferimento."),
    esp(),
    new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: { ...LINE_15, ...NO_SPACE },
      children: [new TextRun({ text: `Porto Alegre, ${data}.`, font: FONT, size: SIZE_BODY })]
    }),
    esp(), esp(),
    pSemRecuo("CRISTIANO DA ROSA", { center: true, bold: true }),
    pSemRecuo("Advogado - OAB/RS 78.652", { center: true }),
    pSemRecuo("(51) 981220776", { center: true }),
  ];
}

// === MONTAGEM DO DOCUMENTO ===
// Adaptar o array 'conteudo' para cada peça específica
function criarDocumento(conteudo, nomeArquivo) {
  const doc = new Document({
    sections: [{
      properties: {
        page: {
          size: { width: PAGE.width, height: PAGE.height },
          margin: MARGINS,
          pageNumbers: { start: 1, formatType: NumberFormat.DECIMAL }
        }
      },
      headers: { default: criarCabecalho() },
      children: conteudo,
    }]
  });

  Packer.toBuffer(doc).then(buf => {
    fs.writeFileSync(nomeArquivo, buf);
    console.log(`Gerado: ${nomeArquivo}`);
  }).catch(err => { console.error(err); process.exit(1); });
}
```

---

## ETAPA 5 — CHECKLIST FINAL ANTES DE GERAR

Antes de executar o script, verificar:

- [ ] Logo carregado de `/mnt/skills/user/peticoes-docx/assets/logo_rosa.png`
- [ ] Margens A4 corretas (3/2/3/2 cm em DXA)
- [ ] Primeira linha 3,25cm (1842 DXA) nos parágrafos normais
- [ ] Citações com recuo esquerdo 6,24cm (3535 DXA) + primeira linha 2,5cm (1417 DXA)
- [ ] Espaçamento 1,5 linhas no corpo, simples nas citações
- [ ] Espaçamento 0pt antes/depois em todos os parágrafos
- [ ] Cabeçalho tríplice em todas as páginas
- [ ] Linha separadora abaixo do cabeçalho
- [ ] Títulos em azul-petróleo #2E74B5, negrito, centralizados
- [ ] Bloco introdutório em tabela de 2 colunas (Processo | Qualificação)
- [ ] Assinatura: CRISTIANO DA ROSA / Advogado - OAB/RS 78.652 / (51) 981220776
- [ ] Enumerações (a), b), c)... ou 1., 2., 3...) com primeira palavra do item em maiúscula
- [ ] Arquivo salvo em `/mnt/user-data/outputs/`
- [ ] Arquivo apresentado ao usuário via `present_files`

---

## Observações Críticas

- **Nunca usar `\n`** no docx-js; usar parágrafos separados
- **Nunca usar bullets Unicode** (•); usar numbering config ou texto manual
- **Acento obrigatório** em todas as strings JavaScript (UTF-8 suportado)
- **Sem travessão (–)** em nenhum texto produzido
- **Enumerações sempre com maiúscula inicial** após o marcador (a), b), 1., 2. etc.) — ver regra 3.3.1
- **Validar** com `python scripts/office/validate.py` se disponível
- Para peças longas (>10 páginas), estruturar o conteúdo em blocos antes de gerar
- O arquivo de referência com estilos completos está em:
  `assets/template_referencia.docx` (documento original com todos os estilos)

---

## Referência de Estilos Rápida

| Elemento | Estilo na Galeria | Fonte | Tam | Cor | Recuo |
|---|---|---|---|---|---|
| Corpo | **1 - Normal** | Arial | 12pt | Preto | 1ª linha 3,25cm |
| Citação | **1 - Citação** | Arial | 10pt | Preto | Esq 6,24cm + 1ª 2,5cm |
| Subtítulo numerado | **2 - Título 2** | Arial Bold | 12pt | #2E74B5 | 1ª linha 3,25cm |
| Título seção (I, II, III) | inline | Arial Bold | 12pt | #2E74B5 | Centralizado, sem recuo |
| Endereçamento | inline | Arial Bold | 12pt | Preto | Sem recuo |
| Cabeçalho | N/A | Arial | 8pt | Preto | N/A |
| Rodapé (nº página) | N/A | Arial | 10pt | Preto | Direita |
| Assinatura | inline | Arial Bold | 12pt | Preto | Centralizado |

---

## Hyperlinks Ativos em DOCX (ExternalHyperlink)

Quando a peça contiver citações jurisprudenciais com link embutido (acórdãos do STF, STJ etc.), seguir obrigatoriamente as regras abaixo para que o hyperlink fique ativo imediatamente no Word, sem necessidade de pressionar Enter.

### Regras críticas

1. **Declarar `characterStyles` com id `"Hyperlink"`** no construtor do `Document`. Sem essa declaração, o Word não reconhece o estilo e o link não ativa automaticamente.

2. **Usar a propriedade `link:`** (não `href:`) no `ExternalHyperlink`.

3. **O `TextRun` filho deve ter `style: "Hyperlink"`** referenciando o id declarado.

4. **`ExternalHyperlink` é `children` do `Paragraph`** — nunca o contrário.

5. **Sem quebras de linha (`break: 1`) dentro do `ExternalHyperlink`** — corrompem o registro de relações do `.docx`.

6. **Usar `Packer.toBuffer`** (Node.js), não `Packer.toBlob`.

### Modelo de declaração obrigatória no Document

```javascript
const doc = new Document({
  styles: {
    characterStyles: [
      {
        id: "Hyperlink",
        name: "Hyperlink",
        run: {
          color: "1F5C8B",        // azul-petróleo Rosa Advogados
          underline: { type: "single" },
        },
      },
    ],
  },
  sections: [ /* ... */ ],
});
```

### Modelo de parágrafo com hyperlink embutido na citação

```javascript
new Paragraph({
  style: "1 - Normal",
  children: [
    new TextRun("Conforme assentou o Superior Tribunal de Justiça no "),
    new ExternalHyperlink({
      link: "https://scon.stj.jus.br/SCON/GetInteiroTeorDoAcordao?num_registro=202103831463&dt_publicacao=08/08/2023",
      children: [
        new TextRun({
          text: "STJ, HC 598.886/SC, Rel. Min. Rogerio Schietti Cruz, 6ª Turma, j. 22.06.2021",
          style: "Hyperlink",
        }),
      ],
    }),
    new TextRun(", o reconhecimento pessoal..."),
  ],
}),
```

A cor `1F5C8B` preserva o azul-petróleo institucional. Para links em padrão Word convencional, usar `0563C1`.
