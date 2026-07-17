---
name: teses-defensivas
description: >
  Skill 04 do ecossistema Rosa Advogados. Identifica e argumenta teses defensivas no Direito Penal brasileiro por varredura sistemática de 6 camadas: (A) nulidades processuais, (B) extinção da punibilidade, (C) absolutórias, (D) pronúncia/Júri, (E) desclassificatórias e redutoras, (F) recursais e incidentes. Base: Manual de 64 teses, Morgado, Bezerra, Aury Lopes Jr. Use sempre que Cristiano apresentar caso penal, em qualquer fase (inquérito, instrução, sentença, recurso, execução, Júri). Acionar com /teses, /analise, /defesa, /enquadramento ou /manual. Detecta automaticamente relatório do diagnostico-processual na conversa e arquivos eProc carregados antes de solicitar descrição manual. Acionar também ao mencionar: nulidade, prescrição, legítima defesa, insignificância, pronúncia, impronúncia, absolvição sumária, desclassificação, dosimetria, habeas corpus, apelação, revisão criminal, extinção da punibilidade, tráfico privilegiado, furto privilegiado, cadeia de custódia, reconhecimento de pessoas, bis in idem.
---

# Skill 04 — Teses Defensivas

Ecossistema Rosa Advogados | Skill 04
Cristiano da Rosa | OAB/RS 78.652
Base doutrinária: Morgado, Bezerra, Aury Lopes Jr., Nucci, Capez, Bitencourt

---

## POSIÇÃO NO ECOSSISTEMA

```
[Arquivos do processo / eProc]
        |
[Skill 01 - diagnostico-processual]   <- alimenta esta skill
        |
[Skill 04 - teses-defensivas]         <- você está aqui
        |
   Mapa de Teses + Blocos Argumentativos
        |
[Skill 05 - redacao-pecas]
[Skill 06 - revisao-legal-design]
```

---

## ARQUIVOS DE REFERÊNCIA

- `references/manual-64-teses.md` — 64 teses do Manual com fundamento, requisitos e precedente
- `references/teses-expandidas.md` — 6 categorias expandidas: nulidades, extinção da punibilidade, absolutórias aprofundadas, pronúncia/Júri, redução de pena e recursais
- `references/checklist-fatos.md` — Checklist de vetores fáticos para extração do caso

Ler os três arquivos antes de iniciar a análise.

---

## COMANDOS DE ACIONAMENTO

| Comando | Função |
|---|---|
| `/teses` | Análise completa (todas as 8 etapas) |
| `/varredura` | Só Etapas 0 a 3 (mapa de teses sem blocos) |
| `/bloco [n]` | Gera bloco argumentativo de tese específica |
| `/mapa` | Só o Mapa Estratégico Final |
| `/nova` | Slot de Tese Nova |
| `/nulidades` | Foco exclusivo na Camada A — Nulidades |
| `/extincao` | Foco exclusivo na Camada B — Extinção da Punibilidade |
| `/absolutoria` | Foco nas Camadas C e D (absolutórias e pronúncia) |
| `/juri` | Foco exclusivo na Camada D — Pronúncia/Júri |
| `/dosimetria` | Foco exclusivo na Camada E — Redução de Pena |
| `/recursais` | Foco exclusivo na Camada F — Teses Recursais |
| `/desclassificacao` | Teses desclassificatórias (Manual + pronúncia) |

---

## PIPELINE DE EXECUÇÃO

---

### ETAPA 0 — DETECÇÃO DE CONTEXTO (OBRIGATÓRIA)

Executar sempre antes de qualquer outra etapa.
Nunca iniciar a varredura sem base fática minimamente estabelecida.

#### 0.1 — Verificar relatório do diagnostico-processual na conversa

Buscar no histórico da conversa estrutura com:
- Título `RELATÓRIO DE DIAGNÓSTICO PROCESSUAL PENAL`
- Seções numeradas em romano (I a XVII)
- Assinatura `Rosa Advogados | Cristiano da Rosa | OAB/RS 78.652`

Se encontrado: extrair Seções IV (fatos), V (enquadramento), VIII (provas), X (pontos favoráveis), XI (contradições), XII (nulidades) e XIII (teses preliminares).
Registrar: `[DIAGNÓSTICO ENCONTRADO — usando seções IV, V, VIII, X, XI, XII, XIII como base]`
Pular para Etapa 1.

Se não encontrado: `[DIAGNÓSTICO NÃO ENCONTRADO]` — avançar para 0.2.

#### 0.2 — Verificar documentos eProc carregados

```bash
ls -lah /mnt/user-data/uploads/ 2>/dev/null || echo "Nenhum arquivo carregado"
```

PDF com texto:
```bash
pdftotext /mnt/user-data/uploads/arquivo.pdf - | head -400
```

PDF digitalizado (sem camada de texto):
```python
from pdf2image import convert_from_path
import pytesseract
pages = convert_from_path('/mnt/user-data/uploads/arquivo.pdf', dpi=300)
texto = "\n".join(pytesseract.image_to_string(p, lang='por') for p in pages)
print(texto[:6000])
```

DOCX:
```bash
extract-text /mnt/user-data/uploads/arquivo.docx | head -400
```

Para cada arquivo: identificar tipo de peça, número do processo, imputação, fatos relevantes.
Registrar: `[DOCUMENTOS ePROC ENCONTRADOS: X arquivo(s) — tipos identificados]`

Se não houver arquivos: `[NENHUM DOCUMENTO CARREGADO]` — avançar para 0.3.

#### 0.3 — Consolidação e decisão de rota

| Situação | Condição | Ação |
|---|---|---|
| A — Completo | Diagnóstico em 0.1 | Usar seções extraídas. Ir para Etapa 1. |
| B — Parcial | Documentos eProc em 0.2 sem diagnóstico | Extrair vetores. Informar: `[Análise baseada nos arquivos. Recomendo /diagnostico antes de redigir peças.]` Ir para Etapa 1. |
| C — Ausente | Nenhum dos dois | Solicitar ao usuário: fatos, tipificação, fase processual, provas existentes, perfil do réu. Aguardar antes de prosseguir. |

---

### ETAPA 1 — EXTRAÇÃO DE VETORES FÁTICOS

Preencher os blocos do `references/checklist-fatos.md` com base no material da Etapa 0.

Consolidar:

| Vetor | Status | Observação | Origem |
|---|---|---|---|
| Autoria | Confirmada / Contestada / Ausente | | [Diagnóstico / eProc / Narrativa] |
| Materialidade | Confirmada / Contestada / Ausente | | |
| Tipicidade | Adequada / Questionável / Atípica | | |
| Ilicitude | Sem excludente / Com possível excludente | | |
| Culpabilidade | Imputável / Questionável / Inimputável | | |
| Punibilidade | Punível / Com questão extintiva | | |
| Prova | Regular / Com nulidade / Ilícita | | |
| Qualificadoras | Provadas / Não provadas / Questionáveis | | |
| Dosimetria | Regular / Com vícios | | |
| Fase processual | [identificar com precisão] | | |
| Rito | Ordinário / Sumário / Juizado / Júri | | |

---

### ETAPA 2 — VARREDURA SISTEMÁTICA (6 CAMADAS)

REGRA DE OURO: Percorrer TODAS as camadas e TODAS as teses de cada uma.
Tese especulativa nunca é descartada — é prequestionamento e reserva probatória.

Graus de aderência:
- ALTA (✅): requisitos claramente preenchidos
- MÉDIA (🟡): parcialmente presentes ou dependentes de instrução
- ESPECULATIVA (🔵): possível a depender de prova ainda não produzida
- INAPLICÁVEL (❌): ausentes sem possibilidade de reversão

Registrar apenas ✅, 🟡 e 🔵.
Consultar `references/teses-expandidas.md` e `references/manual-64-teses.md`.

---

#### CAMADA A — NULIDADES PROCESSUAIS

Verificar sistematicamente os atos do processo. Para cada nulidade potencial identificar:
- Tipo (absoluta/relativa)
- Fundamento legal
- Grau de aderência
- Se arguida na oportunidade correta (risco de preclusão)

Checklist obrigatório da Camada A:

[ ] Citação válida?
[ ] Intimações do defensor regulares?
[ ] Competência do juízo (matéria, território, hierarquia)?
[ ] Exame de corpo de delito realizado?
[ ] Cadeia de custódia (arts. 158-A a 158-F CPP)?
[ ] Reconhecimento pessoal (CPP, art. 226 + HC 598.886/STJ + Tema 1.258/STJ)?
[ ] Interrogatório com advogado presente?
[ ] Diligências da defesa indeferidas com fundamentação?
[ ] Provas ilícitas utilizadas (CPP, art. 157)?
[ ] Suspeição/impedimento do juiz?
[ ] Ausência de defesa técnica efetiva?
[ ] Fundamentação das decisões (CF, art. 93, IX)?
[ ] Cerceamento de defesa (perguntas, provas, prazos)?

---

#### CAMADA B — EXTINÇÃO DA PUNIBILIDADE

Verificar sistematicamente todas as causas do CP, art. 107 e legislação especial.
Consultar tabela completa em `references/teses-expandidas.md` (Categoria II).

Checklist obrigatório da Camada B:

[ ] Calcular prescrição punitiva (abstrata e retroativa se aplicável)?
[ ] Calcular prescrição executória (se condenação já transitada)?
[ ] Réu menor de 21 anos na data do fato ou maior de 70 na sentença? (prazo pela metade)
[ ] Há causa de decadência (ação privada/condicionada, prazo 6 meses)?
[ ] Há perempção (ação privada, 5 hipóteses do CPP, art. 60)?
[ ] Há anistia, graça ou indulto aplicável?
[ ] Há abolitio criminis (lei posterior descriminalizou)?
[ ] Há morte do agente?
[ ] Há perdão do ofendido (ação privada + aceitação)?
[ ] Há renúncia ao direito de queixa?
[ ] Há retratação cabível (falso testemunho art. 342 §2º; crimes contra a honra art. 143)?
[ ] Há perdão judicial cabível (homicídio culposo art. 121 §5º; lesão culposa art. 129 §8º)?
[ ] Há ANPP proposto/cumprido (CPP, art. 28-A)?
[ ] Há suspensão condicional do processo (Lei 9.099/95, art. 89)?
[ ] Há transação penal homologada?

---

#### CAMADA C — ABSOLUTÓRIAS (Manual + Aprofundamento)

Varredura das 23 teses absolutórias do Manual (teses 1 a 23).
Complementar com a Categoria III de `references/teses-expandidas.md`.
Para cada tese: "Os vetores fáticos satisfazem os requisitos?"

Atenção especial:
- Negativa de autoria: vínculo probatório idôneo? Reconhecimento regular?
- Insignificância: 4 critérios do STF (HC 84.412). Vedação: Administração Pública, violência, multirreincidente
- Legítima defesa: 5 requisitos decompostos. Legítima defesa da honra: vedada (STF, HC 187.341/PA)
- Estado de necessidade: perigo atual + inevitabilidade + proporcionalidade
- Inimputabilidade: laudo psiquiátrico + histórico; absolvição imprópria + medida de segurança
- Prova ilícita: contamina derivadas (art. 157 + teoria dos frutos)
- Prescrição (já coberta na Camada B, mas verificar também aqui se não foi checada)

---

#### CAMADA D — TESES NA FASE DE PRONÚNCIA (JÚRI)

Executar quando o rito for do Tribunal do Júri.
Consultar Categoria IV de `references/teses-expandidas.md`.

[ ] Há base para absolvição sumária (CPP, art. 415)? [prova cristalina de excludente ou atipicidade]
[ ] Há base para impronúncia (CPP, art. 414)? [indícios insuficientes de autoria]
[ ] Há base para desclassificação (CPP, art. 419)? [crime não doloso contra a vida]
[ ] Há qualificadora do homicídio sem suporte probatório?
[ ] Há causa de privilégio a ser reconhecida (art. 121 §1º)?
[ ] Cabe recurso em sentido estrito (CPP, art. 581, IV) contra pronúncia indevida?

Grau exigido para absolvição sumária: prova "cristalina" e incontroversa.
Grau exigido para impronúncia: ausência de indícios suficientes (não mera suspeita).
In dubio pro societate: vigora na pronúncia, mas não é absoluto — não autoriza pronúncia sem qualquer indício.

---

#### CAMADA E — DESCLASSIFICATÓRIAS + REDUTORAS (Manual)

Varredura das teses 24 a 64 do Manual.
Consultar `references/manual-64-teses.md` + Categoria V de `references/teses-expandidas.md`.

Desclassificatórias (teses 24 a 38): verificar se o crime imputado admite desclassificação para tipo menos gravoso.

Redutoras — checklist adicional:
[ ] Tentativa: qual fração aplicar (critério: distância da consumação)?
[ ] Confissão espontânea ou qualificada?
[ ] Arrependimento posterior (antes da denúncia, sem violência, reparação integral)?
[ ] Participação de menor importância (papel secundário em concurso)?
[ ] Menoridade relativa (menos de 21 anos na data do fato)?
[ ] Tráfico privilegiado (primário + bons antecedentes + sem organização)?
[ ] Furto privilegiado (primário + coisa de pequeno valor)?
[ ] Homicídio privilegiado (violenta emoção logo após injusta provocação)?
[ ] Substituição por restritiva de direitos (pena não superior a 4 anos + crime sem violência)?
[ ] Regime inicial mais brando (fundamentação concreta exigida — Súmula 440/STJ)?
[ ] Detração de prisão provisória?
[ ] Bis in idem dosimétrico (circunstâncias inerentes ao tipo na 1ª fase)?
[ ] Crime continuado ou concurso formal mais favorável?
[ ] Atenuantes do art. 65 (menoridade, velhice, valor moral/social, confissão)?
[ ] Circunstâncias judiciais do art. 59 — há favoráveis ignoradas na sentença?

Súmulas críticas de dosimetria: 444/STF, 443/STJ, 440/STJ, 439/STJ, 545/STJ, 512/STJ, 718/STF, 719/STF.

---

#### CAMADA F — TESES RECURSAIS E INCIDENTES

Executar quando o caso tiver sentença ou decisão interlocutória a impugnar, ou quando houver questão processual pendente.
Consultar Categoria VI de `references/teses-expandidas.md`.

[ ] Cabe Habeas Corpus? (prisão ilegal, trancamento por atipicidade, cerceamento, excesso de prazo)
[ ] Cabe RESE? (pronúncia, liberdade provisória, fiança, suspeição — CPP, art. 581)
[ ] Cabe Apelação? (sentença condenatória; dosimetria equivocada; excludente não reconhecida)
[ ] No Júri: decisão manifestamente contrária à prova dos autos?
[ ] Cabe Embargos de Declaração? (omissão, contradição, prequestionamento para REsp/RE)
[ ] Cabe REsp ao STJ? (violação de lei federal, divergência jurisprudencial)
[ ] Cabe RE ao STF? (matéria constitucional — presunção de inocência, individualização da pena)
[ ] Cabe Revisão Criminal? (prova nova, sentença contrária à evidência, prova falsa)
[ ] Na execução: cabe Agravo? (progressão negada, falta grave sem PAD — Súmula 533/STJ)
[ ] Exceção de incompetência oportuna (territorial: antes da RAC)?
[ ] Exceção de suspeição/impedimento (descoberta recente — arguir imediatamente)?
[ ] Proibição de reformatio in pejus observada (CPP, art. 617)?
[ ] Prequestionamento suficiente para recursos excepcionais (usar embargos se necessário)?

---

### ETAPA 3 — CLASSIFICAÇÃO E HIERARQUIA

Organizar as teses encontradas em quatro grupos:

**GRUPO 1 — Teses Principais** (aderência ALTA — pretensão absolutória, extintiva ou nulificante)
**GRUPO 2 — Teses Subsidiárias** (aderência MÉDIA — pretensão alternativa ou desclassificatória)
**GRUPO 3 — Teses de Dosimetria e Benefícios** (redutoras, benefícios na sentença/execução)
**GRUPO 4 — Teses Especulativas e Recursais** (aderência ESPECULATIVA, prequestionamento, incidentes)

Para cada grupo indicar:
- Cumulabilidade com outras teses do mesmo grupo
- Incompatibilidades lógicas (ex: negativa de autoria × estado de necessidade como teses principais simultâneas)
- Risco probatório ou processual
- Preclusão: a tese ainda pode ser arguida na fase atual?

---

### ETAPA 4 — GERAÇÃO DE BLOCOS ARGUMENTATIVOS

Para cada tese dos Grupos 1, 2 e 3, gerar bloco no formato:

```
==================================================
TESE N. [X] — [NOME DA TESE]
Camada: [A-Nulidade / B-Extinção / C-Absolutória / D-Pronúncia / E-Redutora / F-Recursal]
Hierarquia: [Principal / Subsidiária / Dosimetria / Recursal]
Fonte: [Diagnóstico / eProc / Narrativa]
==================================================

FUNDAMENTO LEGAL
[Artigo(s)] + [Doutrina sumária] + [Precedente oficial com link]

REQUISITOS PREENCHIDOS NO CASO CONCRETO
[Relacionar cada requisito com os fatos extraídos na Etapa 0/1]

APLICAÇÃO PRÁTICA
[Onde e como inserir: peça, seção, finalidade, momento processual]

BLOCO PRONTO PARA PEÇA
[Redação ABNT, Times New Roman 12, justificado,
com citação ao precedente oficial e referência aos fatos do caso]

OBSERVAÇÕES ESTRATÉGICAS
[Risco probatório / cumulação recomendada / advertência processual / preclusão]
```

---

### ETAPA 5 — SLOT DE TESE NOVA

Se o caso apresentar situação não coberta pelas 64 teses do Manual nem pelas 6 categorias expandidas:

1. Identificar o ponto de lacuna
2. Construir tese nova fundamentada em lei, doutrina e jurisprudência oficial (STF, STJ, TJRS, TRFs)
3. Formatar no mesmo modelo do bloco argumentativo
4. Sinalizar como **TESE NOVA — fora do Manual**

---

### ETAPA 6 — MAPA ESTRATÉGICO FINAL

Tabela-resumo:

| N. | Tese | Camada | Hierarquia | Aderência | Cumulável com | Preclusão | Risco |
|---|---|---|---|---|---|---|---|

Seguido de parágrafo **LINHA DEFENSIVA RECOMENDADA**: combinação de teses que forma a defesa mais sólida e sequência estratégica de apresentação.

---

### ETAPA 7 — INTEGRAÇÃO COM O ECOSSISTEMA

| Próximo passo | Skill recomendada | Motivo |
|---|---|---|
| Redigir peça processual | Skill 05 — redacao-pecas | Blocos prontos para inserção |
| Analisar depoimentos | Skill 02 — audiencias-criminais | Cruzar teses com contradições |
| Revisar peça produzida | Skill 06 — revisao-legal-design | Legal Design e Design Thinking |
| Mapear nulidades em detalhe | Skill 01 — diagnostico-processual | Se diagnóstico ainda não foi feito |
| Pesquisar jurisprudência | Skill 05 — pesquisa-jurisprudencial | Verificar precedentes específicos |

---

### ETAPA 8 — REVISÃO LEGAL DESIGN

**Design Thinking:**
- Empatia: perspectiva do juiz/relator/jurados ao ler as teses
- Definição: qual o problema central que a defesa precisa resolver
- Ideação: teses alternativas não exploradas
- Protótipo: estrutura testada contra a provável resposta do MP
- Teste/Iteração: ponto mais vulnerável e como blindá-lo

**Legal Design:**
- Adequação de linguagem ao destinatário (1ª instância / TJRS / STJ / Júri)
- Hierarquia visual da argumentação
- Mapa de contradições internas da denúncia/sentença
- Sumário executivo da defesa em 3 linhas

---

## REGRAS DE OURO

1. Executar sempre a Etapa 0 antes de qualquer varredura.
2. Se diagnóstico processual existir na conversa, aproveitá-lo integralmente.
3. Se houver arquivos eProc carregados, ler antes de solicitar descrição manual.
4. Percorrer todas as 6 camadas — mesmo as aparentemente inaplicáveis à fase do processo.
5. Tese especulativa é prequestionamento — nunca é inútil.
6. Incompatibilidades lógicas entre teses devem ser explicitadas, não silenciadas.
7. Nunca citar Jusbrasil. Sempre usar links oficiais: STF, STJ, TJRS, TRFs, Diários Oficiais.
8. O Manual tem 64 teses. A realidade pode ter 65. O slot de tese nova é obrigatório quando o caso exigir.
9. Toda tese de dosimetria deve indicar o impacto quantitativo estimado (fração / anos / regime).
10. Não usar travessão (--) em nenhum texto produzido.
11. Todo dado extraído de documento deve indicar a origem: [Diagnóstico / eProc / Narrativa].
12. Verificar preclusão: indicar se a tese ainda pode ser arguida na fase processual atual.
13. Em casos de rito do Júri: executar obrigatoriamente a Camada D (pronúncia).
14. Em casos com sentença proferida: executar obrigatoriamente a Camada F (recursais).
15. Nunca calcular prescrição sem conferir redução pela metade (menoridade/velhice — CP, art. 115).

---

## ASSINATURA DE SAÍDA

```
==================================================
Análise produzida com base no Manual de Teses Defensivas
e nas obras de Leandro Morgado e Alberto Bezerra
Rosa Advogados | Cristiano da Rosa | OAB/RS 78.652
==================================================
```
