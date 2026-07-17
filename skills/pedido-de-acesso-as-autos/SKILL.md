---
name: pedido-de-acesso-as-autos
description: >
  Gera requerimento formal de vista/acesso aos autos — seja Inquérito Policial (dirigido ao Delegado de Polícia) ou procedimento judicializado (dirigido ao Juiz de Garantias ou Unidade Judiciária, inclusive em segredo de justiça) — produzindo: (1) PDF do requerimento pronto para protocolo/impressão, e (2) e-mail Outlook (.eml) com o PDF + OAB + procuração como anexos independentes. Use SEMPRE que Cristiano mencionar pedido de vista, acesso aos autos, cliente convocado para oitiva em delegacia, impossibilidade de comparecimento, habilitação em processo sigiloso, acesso a autos em segredo de justiça, ou usar os comandos /vista, /acesso, /ip, /oitiva, /habilitacao, /sigiloso, /acesso-autos. Acionar também ao receber número de IP, nome de delegacia, data de oitiva agendada, ou qualquer combinação de dados de cliente + autoridade policial ou judicial que implique necessidade de acesso prévio aos autos antes de ato processual ou investigatório.
---

# Skill: Pedido de Acesso aos Autos

## Objetivo

Padronizar e automatizar a geração de requerimentos de vista/acesso aos autos do escritório Rosa Advogados, nas seguintes modalidades:

- **Modalidade A — Inquérito Policial**: Requerimento dirigido ao Delegado de Polícia, contendo pedido de vista do IP antes de oitiva, informação de impossibilidade de comparecimento na data aprazada (quando aplicável), e instrução de silêncio ao cliente.
- **Modalidade B — Procedimento Judicializado (Vara de Garantias ou outra Unidade)**: Requerimento dirigido ao Juiz de Garantias ou Unidade Judiciária, incluindo pedido de habilitação da defesa e acesso aos autos, mesmo em segredo de justiça.

## Pipeline de Execução

### Etapa 1 — Intake de Dados

Perguntar ao usuário (ou extrair do contexto fornecido):

**Dados obrigatórios:**
1. **Tipo de procedimento**: Inquérito Policial (IP) ou Processo Judicial?
2. **Nome completo do cliente** (investigado/intimado)
3. **Número do procedimento** (IP nº xxx/ano/xxxxx ou processo nº)
4. **Autoridade destinatária**: 
   - Para IP: nome e endereço da Delegacia
   - Para Judicial: nome da vara/unidade judiciária
5. **Data e hora da oitiva ou ato agendado** (se houver)
6. **E-mail da autoridade destinatária** (para o .eml)
7. **Há procuração assinada disponível para anexar?** (solicitar arquivo se não enviado)

**Dados opcionais (extrair do contexto se disponível):**
- Número da ocorrência/portaria/mandado de intimação
- Nome da Delegada/Delegado responsável
- Data da intimação recebida
- Se processo judicial: verificar se há lista de processos do CAP (processo sigiloso não listado)
- CPF, qualificação e filiação do cliente

### Etapa 2 — Montagem do Requerimento

#### Modalidade A — Inquérito Policial

Estrutura do documento:

```
[Cabeçalho: Rosa Advogados | Endereço | OAB]

Ilmo. Sr. Delegado de Polícia da [Nome da Delegacia]
[Endereço da Delegacia]

Solicitante: [NOME DO CLIENTE], por seu procurador, Cristiano da Rosa – OAB/RS 78.652
Objeto: Vista dos autos do Inquérito Policial nº [número]

[Corpo:]
- Identificação do advogado e do cliente
- Acuse de recebimento da intimação (com data, se houver)
- Pedido de vista/acesso integral aos autos (inclusive digital se possível)
- Informação de impossibilidade de comparecimento na data aprazada (se houver)
- Declaração de interesse do cliente em colaborar após ciência dos autos
- Instrução de silêncio ao cliente até deferimento do pedido

[Requer:]
a) Deferimento de vista/acesso aos autos do IP nº [número]
b) Designação de nova data para oitiva após franqueado o acesso
c) Em caso de indeferimento: despacho por escrito ao e-mail/WhatsApp
d) Se não houver IP ou portaria: certidão de ausência de procedimento
e) Se houver número de eProc: que seja fornecido

[Embasamento jurídico — notas de rodapé]
[Data / Assinatura]
```

Notas de rodapé obrigatórias (sempre incluir):

[1] SV 14 + Rcl 31.213 MC (Marco Aurélio, 20-8-2018): acesso amplo do defensor, independentemente de o cliente ser testemunha, suspeito ou indiciado.

[2] Alerta sobre tentativa ilegal de impedir vista alegando condição de testemunha; instrução de silêncio; prequestionamento para STF (Reclamação + MS); certificação no IP.

[3] Lei nº 13.869/2019, art. 32 (abuso de autoridade) + Lei nº 8.906/1994, art. 7º, XIII e XIV + SV 14.

[4] Importância do despacho escrito em caso de indeferimento (recurso à instância superior).

[5] Certidão de ausência de IP (contextualizar com fatos do caso, ex.: diligência policial na residência).

#### Modalidade B — Procedimento Judicializado

Estrutura do documento:

```
[Cabeçalho: Rosa Advogados | Endereço | OAB]

À [Unidade Judiciária / Vara de Garantias]

[Corpo:]
- Identificação: CRISTIANO DA ROSA, OAB/RS 78.652
- Identificação do cliente com CPF e filiação (se disponível)
- Origem do pedido (diligência policial, prisão, procedimento investigatório)
- Pedido de habilitação nos autos
- Pedido de acesso, mesmo em segredo de justiça
- Fundamento: defesa técnica, ampla defesa e contraditório

[Requer:]
1. Juntada da procuração anexa
2. Habilitação da defesa nos autos como procurador constituído
3. Acesso integral aos autos, inclusive em segredo de justiça

[Data / Assinatura]
```

### Etapa 3 — Geração do PDF com reportlab

Instalar se necessário: `pip install reportlab --break-system-packages`

Parâmetros de formatação:
- Margens: esq 3cm, dir 2cm, sup 3cm, inf 2cm
- Fonte: Helvetica 12pt
- Espaçamento entre linhas: 18pt (equivalente a 1.5)
- Recuo de parágrafo: 1.25cm
- Títulos: negrito, centralizados
- Notas de rodapé: 10pt
- Nome do arquivo: `Vista_Autos_[NomeCliente]_IP[Numero].pdf`

```python
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY, TA_CENTER, TA_LEFT

PAGE_W, PAGE_H = A4
doc = SimpleDocTemplate(
    output_path, pagesize=A4,
    leftMargin=3*cm, rightMargin=2*cm, topMargin=3*cm, bottomMargin=2*cm
)

body = ParagraphStyle('body', fontName='Helvetica', fontSize=12,
                       leading=18, alignment=TA_JUSTIFY, firstLineIndent=1.25*cm, spaceAfter=6)
title_style = ParagraphStyle('title', fontName='Helvetica-Bold', fontSize=12,
                              alignment=TA_CENTER, spaceAfter=12, spaceBefore=12)
sig_style = ParagraphStyle('sig', fontName='Helvetica-Bold', fontSize=12,
                            alignment=TA_CENTER, spaceBefore=24, spaceAfter=2)
nota_style = ParagraphStyle('nota', fontName='Helvetica', fontSize=10,
                             leading=13, alignment=TA_JUSTIFY, firstLineIndent=0, spaceAfter=4)
header_style = ParagraphStyle('header', fontName='Helvetica-Bold', fontSize=11,
                               alignment=TA_CENTER, spaceAfter=4)
dest_style = ParagraphStyle('dest', fontName='Helvetica', fontSize=12,
                              leading=16, alignment=TA_LEFT, spaceAfter=12)
```

### Etapa 4 — Geração do E-mail Outlook (.eml)

Gerar arquivo `.eml` com:
- **Para**: e-mail da autoridade destinatária
- **De**: cristianorosa.rs@gmail.com
- **Assunto**: `Requerimento de Vista dos Autos – IP nº [número] / [Nome do Cliente]`
- **Corpo**: texto objetivo do pedido (plain text)
- **Anexos independentes**:
  1. PDF do requerimento
  2. OAB (`OAB_PDF_atualiza.pdf` de `/mnt/user-data/uploads/` se disponível)
  3. Procuração assinada (arquivo fornecido pelo usuário, se disponível)

```python
import os
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication

msg = MIMEMultipart()
msg['From'] = 'cristianorosa.rs@gmail.com'
msg['To'] = destinatario_email  # ou '' se não informado
msg['Subject'] = f'Requerimento de Vista dos Autos – IP nº {numero_ip} / {nome_cliente}'

# Corpo
msg.attach(MIMEText(corpo_texto, 'plain', 'utf-8'))

# Função auxiliar para anexar arquivo
def anexar(msg, path, nome_exibido):
    with open(path, 'rb') as f:
        part = MIMEApplication(f.read(), Name=nome_exibido)
        part['Content-Disposition'] = f'attachment; filename="{nome_exibido}"'
        msg.attach(part)

# Anexar PDF do requerimento
anexar(msg, pdf_path, os.path.basename(pdf_path))

# Anexar OAB
oab_path = '/mnt/user-data/uploads/OAB_PDF_atualiza.pdf'
if os.path.exists(oab_path):
    anexar(msg, oab_path, 'OAB_CristianoRosa_78652.pdf')

# Anexar procuração (se fornecida)
if procuracao_path and os.path.exists(procuracao_path):
    anexar(msg, procuracao_path, 'Procuracao.pdf')

# Salvar
with open(eml_path, 'w', encoding='utf-8') as f:
    f.write(msg.as_string())
```

### Etapa 5 — Entrega

Apresentar via `present_files`:
1. **PDF do requerimento** — protocolo físico ou envio direto
2. **E-mail .eml** — abrir no Outlook; todos os anexos já incluídos
3. Se procuração ainda não assinada: avisar usuário para anexar manualmente antes do envio

## Embasamento Jurídico Padrão

Sempre referenciar:
- **Súmula Vinculante nº 14** — acesso amplo do defensor
- **Rcl 31.213 MC** (Marco Aurélio, 20/08/2018) — independentemente da condição processual do cliente
- **Lei nº 13.869/2019, art. 32** — abuso de autoridade por negativa de acesso
- **Lei nº 8.906/1994, art. 7º, XIII e XIV** — direitos do advogado
- Para Modalidade B: **CF, art. 5º, LIV e LV** — ampla defesa e contraditório

## Dados Fixos do Advogado

```
CRISTIANO DA ROSA
Advogado – OAB/RS 78.652
Av. Protásio Alves, 654 – Rio Branco, Porto Alegre/RS
Edifício Normandie – Loja 02 – CEP 90410-004
Tel.: (51) 98122-0776 | E-mail: cristianorosa.rs@gmail.com
```

## Observações Operacionais

- Se o usuário fornecer texto de intimação ou ofício, extrair automaticamente: número do IP, nome do cliente, data da oitiva, delegacia e endereço.
- Se não houver e-mail da autoridade, gerar .eml com campo "Para" em branco para preenchimento manual.
- Se não houver procuração na sessão, gerar sem ela e avisar o usuário.
- A OAB (`OAB_PDF_atualiza.pdf`) deve ser buscada em `/mnt/user-data/uploads/` quando disponível; caso contrário, instruir o usuário a anexar manualmente.
- Nomenclatura dos arquivos: `Vista_Autos_[NomeCliente]_IP[Numero].pdf` e `Email_Vista_[NomeCliente].eml`.
- Para casos com dois clientes (ex.: dois intimados no mesmo IP), gerar requerimentos separados ou consolidar conforme orientação do usuário.
