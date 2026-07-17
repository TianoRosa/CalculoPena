---
name: eproc-peticionar
description: >
  Skill especializada na criacao de peticoes juridicas formatadas para protocolo
  no sistema eProc do TJRS, com geracao automatica de HTML compativel com o editor
  do eProc e arquivo DOCX com padrao visual Rosa Advogados. Use SEMPRE que Cristiano
  mencionar peticionar, protocolar, juntar documento, informar endereco, dar ciencia,
  manifestar, ou qualquer ato processual no eProc/TJRS. Acionar obrigatoriamente com
  os comandos /eproc, /protocolar, /peticionar, /juntar, /ciencia, /manifestacao,
  /infoendereco, ou quando o usuario mencionar: eProc, peticionamento eletronico,
  prazo aberto, evento PETICAO, editor do eProc, protocolar no processo, ou ao
  fornecer numero de processo TJRS com intencao de praticar ato processual.
  Integra automaticamente o padrao de formatacao /peticoes-docx para gerar
  simultaneamente o HTML do eProc e o DOCX do escritorio.
---

# Skill — Peticionamento eProc TJRS

## Identidade e Escopo

Assistente juridico especializado em peticionamento eletronico no sistema eProc do
TJRS. Gera simultaneamente:

1. **HTML formatado** para o editor do eProc (protocolo direto)
2. **DOCX padrão Rosa Advogados** via skill /peticoes-docx (arquivo para acervo)

---

## ETAPA 1 — COLETA DE DADOS

Antes de qualquer geracao, coletar obrigatoriamente:

| Campo | Obrigatorio | Observacao |
|---|---|---|
| Numero do processo | Sim | Formato: NNNNNNN-DD.AAAA.8.21.XXXX |
| Vara e comarca | Sim | Extrair do processo ou perguntar |
| Tipo de peticao | Sim | Ver templates abaixo |
| Dados variaveis | Conforme tipo | Endereco, nome reu, descricao doc etc. |
| Fechar prazo? | Apenas se houver prazo aberto | Perguntar explicitamente |

**Nao pedir confirmacao intermediaria. Coletar em uma unica interacao e executar.**

---

## ETAPA 2 — TEMPLATES DE PETICAO

### Qualificacao padrao do requerente

```
CRISTIANO DA ROSA, Advogado inscrito na OAB/RS sob n. 78.652,
com escritorio na Av. Protasio Alves, 654, Ed. Normandie, loja 02,
Rio Branco, Porto Alegre/RS, CEP 90410-004,
```

### 2.1 Informacao de Endereco

**Corpo:**
```
vem, respeitosamente, informar o endereco do reu/parte {NOME},
conforme apurado: {ENDERECO_COMPLETO},
para fins de citacao e/ou intimacao.
```

**Fundamento:** Dever de cooperacao processual (art. 6o do CPC).

---

### 2.2 Ciencia com Renunciar ao Prazo

**Corpo:**
```
vem manifestar CIENCIA do(s) ato(s) processual(is) constante(s) dos
autos, renunciando expressamente ao prazo remanescente.
```

---

### 2.3 Ciencia sem Renunciar ao Prazo

**Corpo:**
```
vem manifestar CIENCIA do(s) ato(s) processual(is) constante(s) dos
autos, reservando-se ao prazo legal para manifestacao.
```

---

### 2.4 Juntada de Documento

**Corpo:**
```
vem juntar aos autos o documento em anexo, qual seja:
{DESCRICAO_DOCUMENTO}, para os fins de direito.
```

---

### 2.5 Manifestacao Generica

**Corpo:**
```
vem apresentar MANIFESTACAO acerca de {ASSUNTO},
pelos fatos e fundamentos a seguir expostos:

{TEXTO_LIVRE}
```

---

### 2.6 Pedido de Prazo / Dilacao

**Corpo:**
```
vem requerer a concessao de prazo adicional de {DIAS} dias para
{FINALIDADE}, em razao de {JUSTIFICATIVA}.
```

**Fundamento:** Art. 139, VI, do CPC e principio da ampla defesa.

---

### 2.7 Informacao de Novo Patrono (Habilitacao)

**Corpo:**
```
vem informar a assuncao do patrocinio dos interesses de {NOME_CLIENTE}
nos presentes autos, juntando procuracao em anexo, requerendo que
as futuras intimacoes sejam direcionadas ao escritorio supra.
```

---

## ETAPA 3 — GERACAO DO HTML PARA oPROC

### Modelo base HTML (compativel com editor eProc):

```html
<p style="text-align: center;">
  <strong>EXCELENTISSIMO SENHOR DOUTOR JUIZ DE DIREITO DA {VARA} DA COMARCA DE {COMARCA}</strong>
</p>

<p style="text-align: right;">Processo n. {NUM_PROCESSO}</p>

<p style="text-align: justify;">
  CRISTIANO DA ROSA, Advogado inscrito na OAB/RS sob n. 78.652,
  com escritorio na Av. Protasio Alves, 654, Ed. Normandie, loja 02,
  Rio Branco, Porto Alegre/RS, CEP 90410-004,
  nos autos do processo em epigrafe,
  vem respeitosamente a presenca de Vossa Excelencia {CORPO_PETICAO}
</p>

{FUNDAMENTOS_SE_HOUVER}

<p style="text-align: justify;">
  Diante do exposto, requer o deferimento do presente pedido.
</p>

<p style="text-align: justify;">
  Nestes termos,<br>
  Pede deferimento.
</p>

<p>Porto Alegre, {DATA_POR_EXTENSO}.</p>
```

**Regras de geracao do HTML:**

- `text-align: justify` em todo o corpo
- Data automatica no formato "DD de mes de AAAA"
- Sem travessao (-- ou -) em nenhum trecho
- Acentuacao plena em todas as strings
- Nao usar `<br>` para separar paragrafos; usar `<p>` separados
- Fundamentos apenas quando o tipo de peticao exigir (ex: manifestacao generica)

---

## ETAPA 4 — GERACAO DO DOCX (via /peticoes-docx)

Apos gerar o HTML, gerar automaticamente o DOCX com o padrao Rosa Advogados.

**Consultar obrigatoriamente a skill `/peticoes-docx` antes de gerar o DOCX.**

Adaptacoes especificas para peticoes do eProc:

- Titulo da peca: tipo da peticao em maiusculas (ex: "PETICAO DE JUNTADA")
- Bloco introdutorio: numero do processo + nome da parte (se disponivel)
- Corpo identico ao HTML, adaptado para paragrafos docx-js
- Assinatura padrao: CRISTIANO DA ROSA / Advogado - OAB/RS 78.652 / (51) 981220776
- Salvar em `/mnt/user-data/outputs/Peticao_{TIPO}_{PROCESSO_RESUMIDO}.docx`

---

## ETAPA 5 — PASSOS DE EXECUCAO NO EPROC

Sequencia exata para protocolar apos gerar o HTML:

### Passo 1 — Acessar movimentacao

Localizar e clicar em **"Movimentar/Peticionar"** na tela do processo.

### Passo 2 — Selecionar evento

- Clicar em "Listar Todos" no campo "Evento a ser lancado"
- Selecionar **"PETICAO"** na lista

### Passo 3 — Verificar prazo

Se houver checkbox de prazo: confirmar com o usuario se deve fechar ou nao
antes de prosseguir.

**Nunca fechar prazo sem confirmacao explicita.**

### Passo 4 — Abrir editor (workaround obrigatorio)

```javascript
window.open = function(url) { window.location.href = url; };
AbreEditorVaraNaoPiloto();
```

Em caso de falha no Passo 4, tentar clicar diretamente no link
**"Digitar Documento"** via `ref_38`.

### Passo 5 — Inserir conteudo HTML

```javascript
var iframe = document.querySelector('iframe');
iframe.contentDocument.body.innerHTML = '{CONTEUDO_HTML_DA_PETICAO}';
```

### Passo 6 — Salvar documento

- Clicar no icone verde (salvar) na toolbar do editor — posicao `[36, 54]`
- No modal, selecionar tipo **"PETICAO"** na lista (rolar ate encontrar)
- Clicar "OK"

### Passo 7 — Protocolar

- Confirmar que o evento "PETICAO" esta preenchido
- Clicar em **"Peticionar"**
- Confirmar sucesso pelo aparecimento do novo evento na lista de eventos do processo

---

## ETAPA 6 — CHECKLIST FINAL

Antes de entregar ao usuario:

- [ ] Numero do processo correto e formatado
- [ ] Vara e comarca extraidos corretamente
- [ ] Tipo de peticao mapeado ao template correto
- [ ] Data gerada automaticamente no formato correto
- [ ] HTML sem travessoes, sem `\n` nao intencionais, acentuacao completa
- [ ] DOCX gerado com padrao Rosa Advogados (via /peticoes-docx)
- [ ] Perguntado sobre fechamento de prazo (se aplicavel)
- [ ] Arquivo DOCX salvo em `/mnt/user-data/outputs/` e apresentado via `present_files`

---

## Observacoes Criticas

- **Nunca fechar prazo** sem confirmacao explicita do usuario no chat
- **Sempre usar** `text-align: justify` no corpo da peticao HTML
- **Nenhum travessao** (-- ou -) em qualquer texto produzido
- **Acentuacao plena** obrigatoria em todas as strings (UTF-8 suportado)
- Se o processo nao estiver aberto no eProc, navegar ate ele antes de iniciar
- O DOCX e gerado para fins de acervo interno; o protocolo e feito via HTML no eProc
- Para peticoes complexas com fundamentacao extensa, estruturar o corpo em secoes
  numeradas (I, II, III) seguindo o padrao dos recursos (Caso em Exame / Razoes / Pedido)
