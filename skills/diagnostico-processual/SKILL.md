---
name: diagnostico-processual
description: >
  Skill 01 do ecossistema Rosa Advogados. Porta de entrada obrigatória para qualquer análise criminal.
  Analisa arquivos processuais em qualquer formato (PDF, DOCX, imagem, texto extraído) e produz
  relatório técnico estruturado com inventário documental, identificação do processo, fase processual,
  mapa probatório, matriz de nulidades, teses defensivas e providência recomendada. Use esta skill
  sempre que Cristiano enviar peças processuais, autos, inquéritos, acórdãos, denúncias, laudos,
  sentenças, recursos, boletins de ocorrência, autos de prisão ou qualquer documento do processo
  para análise. Acionar também com os comandos /diagnostico, /inventario, /ip, /ap, /recursal,
  /provas, /nulidades, /teses ou /providencia. Esta skill não redige peças — organiza, mapeia e
  prepara o terreno para as skills especializadas posteriores.
---

# Skill 01 — Diagnóstico Processual Penal

Ecossistema Rosa Advogados | Skill 01
Cristiano da Rosa | OAB/RS 78.652

---

## POSIÇÃO NO ECOSSISTEMA

```
[Arquivos do processo]
        ↓
[Skill 01 — diagnostico-processual]  ← você está aqui
        ↓
   Relatório Base (XVII seções)
        ↓
[Skill 02 — audiencias-criminais]
[Skill 03 — matriz-contradicoes]
[Skill 04 — teses-defensivas]
[Skill 05 — redacao-pecas]
[Skill 06 — revisao-legal-design]
```

Esta skill não produz peças. Produz o mapa do processo.

---

## FORMATOS ACEITOS

| Formato | Procedimento |
|---|---|
| `.pdf` com texto | `pdftotext` → pypdf |
| `.pdf` digitalizado | OCR via pytesseract + pdf2image |
| `.docx` / `.doc` | `extract-text` |
| `.jpg` / `.png` / `.webp` | Leitura visual direta + OCR se necessário |
| `.txt` | `cat` se < 20KB, `head`+`tail` se maior |
| Múltiplos arquivos | Processar individualmente, consolidar no relatório único |

OCR para PDFs sem camada de texto:
```python
from pdf2image import convert_from_path
import pytesseract
pages = convert_from_path(arquivo, dpi=300)
texto = "\n".join(pytesseract.image_to_string(p, lang='por') for p in pages)
```

---

## COMANDOS RÁPIDOS

| Comando | Função |
|---|---|
| `/diagnostico` | Relatório completo (padrão — todas as XVII seções) |
| `/inventario` | Só Tarefa 1: inventário dos arquivos |
| `/ip` | Diagnóstico focado na fase pré-processual / inquérito |
| `/ap` | Diagnóstico focado na ação penal |
| `/recursal` | Diagnóstico focado na fase recursal |
| `/provas` | Só mapa probatório |
| `/nulidades` | Só matriz de nulidades |
| `/teses` | Só teses defensivas |
| `/providencia` | Só momento processual e próximos atos |

---

## SEQUÊNCIA DE EXECUÇÃO — 10 TAREFAS

### TAREFA 1 — INVENTÁRIO DOS ARQUIVOS

Para cada arquivo recebido, identificar:

1. Nome do arquivo
2. Tipo de documento (denúncia, IP, APF, decisão, laudo, sentença, acórdão, recurso, manifestação, petição, outro)
3. Natureza jurídica provável
4. Quantidade de páginas (se possível)
5. Qualidade: legível / parcialmente legível / ilegível / incompleto / OCR ruim / imagem desfocada
6. Necessidade de complementação documental

---

### TAREFA 2 — DADOS GERAIS DO PROCESSO

Extrair, quando constar nos arquivos:

- Número do processo principal
- Processos relacionados: IP de origem, execução penal, medida protetiva, recurso, HC, agravo, carta precatória, incidente de insanidade, restituição de bens, cautelar autônoma, busca e apreensão autônoma
- Órgão julgador / Vara / Câmara / Tribunal
- Comarca / Seção judiciária / UF
- Sistema: eProc / PJe / SAJ / papel
- Delegacia ou autoridade policial responsável
- Ministério Público atuante (promotor/procurador)
- Nome do acusado / investigado / réu / paciente / apenado
- Nome da vítima(s)
- Defensor(es) constituído(s) ou Defensoria Pública
- Data dos fatos
- Data da prisão (se houver)
- Data da denúncia e data do recebimento
- Data de decisões relevantes
- Situação prisional ou cautelar atual
- Endereçamento correto para eventual petição

---

### TAREFA 3 — CLASSIFICAÇÃO DA FASE PROCESSUAL

Classificar o caso e justificar com base no documento ou trecho que fundamenta a conclusão:

1. Fase pré-processual / investigativa
2. Auto de prisão em flagrante
3. Audiência de custódia
4. Inquérito policial em andamento
5. Procedimento investigatório criminal
6. Ação penal em fase inicial
7. Ação penal aguardando resposta à acusação
8. Ação penal aguardando AIJ
9. Ação penal com instrução em andamento
10. Ação penal com instrução encerrada
11. Fase de memoriais
12. Sentença pendente
13. Sentença proferida
14. Fase recursal
15. Execução penal
16. Incidente processual ou cautelar
17. Fase não identificável com segurança

---

### TAREFA 4 — ANÁLISE DA FASE PRÉ-PROCESSUAL

*Executar quando o feito for IP, BO, APF, TCO ou investigação.*

**4.1 Identificação do procedimento e do fato investigado**
- Tipo: BO / IP / APF / investigação policial / relatório de inteligência / PIC / outro
- Fato investigado
- Suspeito(s) apontado(s) e origem da suspeita

**4.2 Atos de investigação — verificar existência e regularidade:**

| Ato | Presente? | Pg./Ref. | Observação defensiva |
|---|---|---|---|
| Prisão em flagrante | | | |
| Busca pessoal | | | |
| Ingresso em domicílio | | | |
| Busca e apreensão com mandado | | | |
| Busca e apreensão sem mandado | | | |
| Apreensão de objetos / drogas / armas / celulares / documentos / dinheiro / veículos | | | |
| Laudo de constatação provisória | | | |
| Laudo definitivo | | | |
| Exame de corpo de delito | | | |
| Reconhecimento de pessoas | | | |
| Interceptação telefônica | | | |
| Quebra de sigilo / extração de dados de celular / prova digital | | | |
| Confissão / silêncio / interrogatório informal / declaração policial | | | |
| Depoimentos de policiais | | | |
| Depoimentos de vítimas ou testemunhas civis | | | |
| Indiciamento | | | |
| Relatório final da autoridade policial | | | |

**4.3 Análise crítica da validade das provas:**

1. Legalidade da abordagem — existência de fundada suspeita
2. Regularidade do ingresso em domicílio — consentimento / flagrante / mandado
3. Regularidade da busca e apreensão
4. Cadeia de custódia: preservação, arrecadação, acondicionamento, transporte, recebimento, processamento, armazenamento (ver `references/cadeia-de-custodia.md`)
5. Lacres, numeração, fotografias, auto de apreensão, termo de entrega, laudo
6. Regularidade da prova pericial
7. Risco de prova ilícita ou derivada (art. 157 CPP)
8. Risco de pescaria probatória
9. Fragilidade da prova exclusivamente policial
10. Existência de elementos independentes de corroboração

---

### TAREFA 5 — ANÁLISE DA AÇÃO PENAL

*Executar quando o feito for AP ou quando o material incluir denúncia, RAC, despachos ou sentença.*

**5.1 Imputação:**
- Tipo de ação penal
- Crime(s) imputado(s) — artigos da denúncia
- Concurso de crimes / majorantes / qualificadoras / agravantes / causas de aumento
- Resumo objetivo da denúncia (com pg.)
- Conduta atribuída a cada acusado
- Grau de individualização da conduta

**5.2 Provas e rol de testemunhas:**
- Provas indicadas pela acusação
- Rol de testemunhas da acusação (nome / qualidade / pg.)
- Rol de testemunhas da defesa (se houver)
- Laudos existentes

**5.3 Estado da ação:**
- Situação da citação
- Resposta à acusação apresentada? Data / pg.
- Teses defensivas já apresentadas
- Medidas cautelares impostas
- Audiências designadas ou realizadas
- Momento atual

**5.4 Análise crítica da denúncia e da imputação:**

1. A denúncia descreve fato típico de forma concreta?
2. Há individualização da conduta?
3. Há justa causa?
4. Há lastro probatório mínimo?
5. Há imputação genérica?
6. Há contradição entre denúncia e provas do IP?
7. Há prova ilícita sustentando a acusação?
8. Há nulidade anterior ao recebimento da denúncia?
9. Há possibilidade de absolvição sumária?
10. Há possibilidade de desclassificação?
11. Há possibilidade de rejeição da denúncia (se ainda cabível)?
12. Há tese de ausência de materialidade?
13. Há tese de ausência de autoria?
14. Há tese de insuficiência probatória?
15. Há tese de atipicidade?
16. Há tese de excludente de ilicitude ou culpabilidade?
17. Há tese relacionada à ilicitude da prova?

---

### TAREFA 6 — ANÁLISE DA FASE RECURSAL

*Executar quando o material incluir acórdão, apelação, RESE, HC, REsp, RE ou qualquer recurso.*

**6.1 Identificação:**
- Decisão impugnada: sentença / acórdão / decisão interlocutória / pronúncia / decisão de execução
- Recurso cabível ou já interposto
- Prazo recursal (se identificável)
- Parte recorrente / parte recorrida

**6.2 Resultado da decisão:**
- Condenação / absolvição / pronúncia / impronúncia / desclassificação / rejeição / manutenção de prisão
- Pena aplicada / regime inicial / substituição / suspensão condicional / detração
- Fundamentos usados pelo juiz ou tribunal
- Teses defensivas acolhidas e rejeitadas
- Omissões, contradições ou obscuridades
- Matérias prequestionáveis
- Possibilidade de embargos de declaração

**6.3 Análise estratégica recursal:**

1. Há erro de julgamento?
2. Há erro de procedimento?
3. Há nulidade absoluta ou relativa?
4. Há violação ao contraditório ou à ampla defesa?
5. Há violação ao dever de fundamentação?
6. A sentença valorou prova ilícita?
7. A sentença se baseou exclusivamente em elementos inquisitoriais?
8. A sentença contrariou prova judicializada?
9. Houve inversão do ônus da prova?
10. Houve violação ao in dubio pro reo?
11. Houve bis in idem na dosimetria?
12. A pena-base foi fundamentada concretamente?
13. O regime foi fixado com fundamentação idônea?
14. Há matéria para apelação / embargos / REsp / RE / HC / revisão criminal?

---

### TAREFA 7 — MAPA DAS PROVAS

Organizar em tabela independente da fase:

| Prova | Onde aparece | Conteúdo | Favorece | Fragilidade | Utilidade defensiva |
|---|---|---|---|---|---|

Cobrir obrigatoriamente:
- Prova documental
- Prova testemunhal
- Prova policial
- Prova pericial
- Prova digital
- Prova cautelar
- Objetos apreendidos
- Relatórios de investigação
- Declarações da vítima
- Declarações do acusado
- Elementos que favorecem a acusação
- Elementos que favorecem a defesa
- Elementos neutros
- Elementos contraditórios
- Elementos que precisam de complementação

---

### TAREFA 8 — TRECHOS RELEVANTES

Separar em quatro grupos (sempre com pg. / evento / arquivo de origem):

1. **Trechos favoráveis à defesa**
2. **Trechos prejudiciais à defesa**
3. **Trechos contraditórios**
4. **Trechos que exigem conferência posterior**

Não alterar o sentido do texto original.

---

### TAREFA 9 — MATRIZ DE NULIDADES E TESES DEFENSIVAS

Para cada tese identificada:

| Tese | Fundamento jurídico | Documento de suporte | Força | Providência | Peça adequada |
|---|---|---|---|---|---|

Força: **forte / média / fraca**

**Verificar, quando cabível (30 itens):**

1. Ilicitude da abordagem
2. Ausência de fundada suspeita
3. Violação de domicílio
4. Busca pessoal irregular
5. Busca e apreensão sem mandado ou sem justa causa
6. Prova derivada ilícita (art. 157, §1º, CPP)
7. Quebra da cadeia de custódia (arts. 158-A a 158-F CPP)
8. Ausência de laudo
9. Laudo insuficiente ou sem cadeia documentada
10. Reconhecimento pessoal irregular (art. 226 CPP / HC 598.886/SC / Tema Repetitivo 1.258/STJ)
11. Interrogatório informal
12. Confissão extrajudicial não confirmada em juízo
13. Testemunho de ouvir dizer sem corroboração
14. Condenação fundada exclusivamente em elementos inquisitoriais (art. 155 CPP)
15. Ausência de individualização da conduta
16. Denúncia genérica
17. Ausência de justa causa
18. Ausência de materialidade
19. Ausência de autoria
20. Insuficiência probatória
21. Atipicidade da conduta
22. Desclassificação
23. Absolvição sumária
24. Nulidade por cerceamento de defesa
25. Ausência de fundamentação concreta
26. Excesso de prazo na prisão
27. Prisão preventiva sem contemporaneidade dos fundamentos
28. Dosimetria ilegal
29. Bis in idem
30. Violação à presunção de inocência / in dubio pro reo

---

### TAREFA 10 — MOMENTO PROCESSUAL E PRÓXIMOS ATOS

1. Qual o momento atual do processo
2. Qual peça ou providência parece mais adequada
3. Quais documentos ainda seriam úteis
4. Quais pontos exigem conferência no processo original
5. Quais teses devem ser preservadas desde logo
6. Se há risco de preclusão
7. Se há necessidade de requerer prova
8. Se há necessidade de pedir diligência
9. Se há necessidade de impugnar prova ilícita
10. Se há necessidade de preservar matéria para recurso

---

## ESTRUTURA DO RELATÓRIO FINAL

```
RELATÓRIO DE DIAGNÓSTICO PROCESSUAL PENAL
Rosa Advogados | Cristiano da Rosa | OAB/RS 78.652

I.     Arquivos analisados
II.    Dados gerais do processo
III.   Fase processual identificada
IV.    Síntese objetiva dos fatos
V.     Enquadramento jurídico da imputação
VI.    Situação processual atual
VII.   Mapa das partes e sujeitos processuais
VIII.  Mapa das provas
IX.    Pontos favoráveis à acusação
X.     Pontos favoráveis à defesa
XI.    Contradições, lacunas e fragilidades
XII.   Possíveis nulidades
XIII.  Teses defensivas preliminares
XIV.   Trechos relevantes dos documentos
XV.    Documentos faltantes ou recomendados
XVI.   Providência jurídica recomendada
XVII.  Conclusão estratégica
```

---

## REVISÃO FINAL — DESIGN THINKING E LEGAL DESIGN

Aplicar ao final de cada relatório:

### Design Thinking

| Etapa | Aplicação ao diagnóstico |
|---|---|
| **Empatia** | Qual a situação real do cliente hoje — preso, solto, com prazo correndo? |
| **Definição** | Qual é o problema jurídico central que o relatório precisa resolver? |
| **Ideação** | Quais teses ou movimentos defensivos os arquivos revelaram? |
| **Protótipo** | O relatório está organizado na ordem de urgência correta? |
| **Teste / Iteração** | Há informação crítica ausente que exige novos documentos? |

### Legal Design

- **Urgência:** prazos, prisão e cautelares aparecem em destaque antes do restante?
- **Rastreabilidade:** toda informação tem pg., evento ou arquivo de origem?
- **Completude:** campos sem informação indicam "não identificado nos arquivos analisados"?
- **Próximo ato:** o relatório termina com ação clara e recomendação específica?

---

## REGRAS INVIOLÁVEIS

1. Nunca inventar página, evento, nome, data, número de processo ou artigo de lei.
2. Nunca afirmar que uma nulidade é certa quando os documentos apenas indicam possibilidade.
3. Sempre separar fato extraído do documento / inferência jurídica / sugestão estratégica.
4. Sempre indicar quando a leitura depende de documento incompleto ou ilegível.
5. Sempre apontar a necessidade de conferir o processo original quando houver dúvida.
6. Nunca substituir a análise jurídica final do advogado.
7. Jurisprudência: exclusivamente STF, STJ, TJs, TRFs, Diários Oficiais. Nunca Jusbrasil.
8. Reconhecimento de pessoas: art. 226 CPP + HC 598.886/SC/STJ + Tema Repetitivo 1.258/STJ.
9. Cadeia de custódia: arts. 158-A a 158-F CPP — ver `references/cadeia-de-custodia.md`.
10. Campos sem informação: registrar como "não identificado nos arquivos analisados". Nunca omitir.
