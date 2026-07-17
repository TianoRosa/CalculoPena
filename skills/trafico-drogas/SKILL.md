---
name: trafico-drogas
description: >
  Skill especializada em defesa criminal em casos de tráfico de drogas (Lei 11.343/2006). Use SEMPRE que o caso envolver tráfico, posse de drogas, associação ao tráfico ou qualquer imputação pela Lei de Drogas. Pipeline: (1) análise dos 18 verbos nucleares do art. 33; (2) checklist de tráfico privilegiado (art. 33 §4º); (3) desclassificação para uso pessoal (art. 28 §2º, 6 vetores); (4) exclusão de organização criminosa (Lei 12.850/13); (5) auditoria do ingresso domiciliar; (6) cadeia de custódia para substâncias. Acionar com /trafico, /privilegiado, /uso, /orgsim, /verbos, /domicilio, /custodiadrogas ou ao mencionar: tráfico de drogas, Lei 11.343, entorpecente apreendido, flagrante com drogas, laudo toxicológico, denúncia anônima, organização criminosa, autorização domiciliar, tráfico privilegiado, uso pessoal, associação ao tráfico, art. 33, art. 35, art. 28, condenação por tráfico, regime fechado obrigatório.
---

# Skill — Tráfico de Drogas
Ecossistema Rosa Advogados | Skill Especializada 07
Cristiano da Rosa | OAB/RS 78.652
Base normativa: Lei 11.343/2006 | Lei 12.850/2013 | CF/88 | CPP arts. 158-A a 158-F
Base doutrinária: Aury Lopes Jr., Salo de Carvalho, Luiz Flávio Gomes, Vicente Greco Filho

---

## POSIÇÃO NO ECOSSISTEMA

```
[Arquivos do processo / eProc / Boletim de Ocorrência]
        |
[Skill 01 - diagnostico-processual]   <- alimenta esta skill
        |
[Skill 07 - trafico-drogas]           <- você está aqui
        |
  Pipeline Especializado Lei 11.343
        |
[Skill 04 - teses-defensivas]         <- para teses penais gerais
[Skill 05 - pesquisa-jurisprudencial] <- para busca de precedentes
[Skill 03 - peticoes-docx]            <- para redação da peça final
```

---

## ARQUIVOS DE REFERÊNCIA

- `references/verbos-art33.md` — os 18 verbos nucleares do art. 33, requisitos e jurisprudência
- `references/checklist-trafico.md` — checklist completo de vetores fáticos para casos de tráfico
- `references/teses-trafico.md` — banco de teses defensivas específicas da Lei 11.343/2006

Ler os três arquivos antes de iniciar a análise.

---

## COMANDOS DE ACIONAMENTO

| Comando | Função |
|---|---|
| `/trafico` | Pipeline completo (todas as 9 etapas) |
| `/verbos` | Só Etapa 2 — análise dos verbos nucleares do art. 33 |
| `/privilegiado` | Só Etapa 3 — checklist de tráfico privilegiado |
| `/uso` | Só Etapa 4 — desclassificação para uso pessoal (art. 28) |
| `/orgsim` | Só Etapa 5 — exclusão de organização criminosa |
| `/domicilio` | Só Etapa 6 — auditoria do ingresso domiciliar |
| `/custodiadrogas` | Só Etapa 7 — cadeia de custódia para substâncias |
| `/mapa` | Só o Mapa Estratégico Final (Etapa 8) |
| `/associacao` | Análise específica de associação ao tráfico (art. 35) |

---

## PIPELINE DE EXECUÇÃO

---

### ETAPA 0 — DETECÇÃO DE CONTEXTO (OBRIGATÓRIA)

Executar sempre antes de qualquer outra etapa.

#### 0.1 — Verificar relatório do diagnostico-processual na conversa

Buscar estrutura com título `RELATÓRIO DE DIAGNÓSTICO PROCESSUAL PENAL`.
Se encontrado: extrair Seções IV (fatos), V (enquadramento), VIII (provas), X, XI, XII, XIII.
Registrar: `[DIAGNÓSTICO ENCONTRADO — usando como base]`
Pular para Etapa 1.

#### 0.2 — Verificar documentos carregados

```bash
ls -lah /mnt/user-data/uploads/ 2>/dev/null || echo "Nenhum arquivo carregado"
```

Para cada PDF presente:
```bash
pdftotext /mnt/user-data/uploads/arquivo.pdf - | head -500
```

Identificar: tipo de peça, número do processo, imputação exata (artigo + forma), quantidade e espécie da substância apreendida, local da abordagem, circunstâncias do flagrante.

#### 0.3 — Consolidação e decisão de rota

| Situação | Condição | Ação |
|---|---|---|
| A — Completo | Diagnóstico em 0.1 | Usar seções extraídas. Ir para Etapa 1. |
| B — Parcial | Documentos em 0.2 sem diagnóstico | Extrair vetores. Informar base utilizada. Ir para Etapa 1. |
| C — Ausente | Nenhum dos dois | Solicitar: fatos do flagrante, artigo imputado, quantidade/espécie da droga, local, perfil do réu, fase processual, provas existentes. Aguardar. |

---

### ETAPA 1 — MAPEAMENTO INICIAL DO CASO

Preencher a matriz abaixo com base no material da Etapa 0:

| Elemento | Conteúdo | Fonte |
|---|---|---|
| Artigo imputado | | |
| Forma da conduta (verbo) | | |
| Espécie da substância | | |
| Quantidade apreendida | | |
| Local da apreensão | | |
| Circunstâncias do flagrante | | |
| Há outros réus? | | |
| Perfil do réu (primário, antecedentes, família) | | |
| Fase processual atual | | |
| Há laudo toxicológico definitivo? | | |
| Há laudo de pesagem/quantidade? | | |
| Como se deu o ingresso no local? | | |
| Há denúncia anônima na origem? | | |
| Organização criminosa foi imputada? | | |

---

### ETAPA 2 — ANÁLISE DOS VERBOS NUCLEARES DO ART. 33

**Fundamento:** art. 33, caput, Lei 11.343/2006 — 18 verbos nucleares. Cada verbo constitui forma autônoma de tipificação. A imputação de verbo específico exige correspondência fática precisa.

Consultar `references/verbos-art33.md` para definição e requisitos de cada verbo.

#### 2.1 — Identificar o(s) verbo(s) imputados na denúncia

Extrair literalmente o verbo nuclear atribuído ao réu. Atenção: denúncias frequentemente imputam múltiplos verbos de forma genérica sem correspondência fática individual.

#### 2.2 — Verificar correspondência fática

Para cada verbo imputado, aplicar:

| Pergunta | Resposta |
|---|---|
| O verbo exige elemento subjetivo específico (dolo de difundir, fim de venda)? | |
| Há prova concreta da conduta descrita pelo verbo (não mera inferência)? | |
| A acusação narrou os fatos constitutivos do verbo com precisão? | |
| A prova produzida sustenta esse verbo ou aponta para verbo distinto? | |
| O verbo imputado admite modalidade culposa? | |

#### 2.3 — Checklist de rebatimento por verbo comum

**IMPORTAR (art. 33, caput):**
[ ] Há prova de que a droga veio do exterior?
[ ] Há documentação de origem ou rastreamento alfandegário?
[ ] A mera posse com droga estrangeira não prova importação sem mais elementos.

**TRAZER CONSIGO / GUARDAR / TER EM DEPÓSITO:**
[ ] A posse é inequívoca ou há controvérsia sobre a titularidade?
[ ] Há co-habitants que podem ter depositado a substância?
[ ] A quantidade é compatível com consumo pessoal (aplicar art. 28 §2º)?
[ ] A embalagem e forma de acondicionamento indicam comércio ou uso?
[ ] Há dinheiro, balança ou materiais de embalagem associados?

**VENDER / OFERECER / EXPOR À VENDA:**
[ ] Há prova concreta de negociação (testemunha compradora, interceptação, flagrante de compra)?
[ ] A mera posse de droga fracionada NÃO é suficiente para provar venda — exige prova adicional.
[ ] Depoimento exclusivo de policiais sobre "movimentação suspeita" é suficiente?

**FORNECER / DAR / ENTREGAR:**
[ ] Há prova do ato de entrega (flagrante, vídeo, testemunhos)?
[ ] O fornecimento gratuito afasta a finalidade de lucro — possível crime distinto.
[ ] Fornecimento ocasional entre dependentes: verificar art. 33 §3º (causa especial de redução).

**TRANSPORTAR:**
[ ] O réu tinha ciência do conteúdo transportado?
[ ] Há prova de que o transporte era destinado a terceiro (tráfico) e não para consumo?
[ ] "Mula" sem conhecimento do conteúdo: verificar exclusão do dolo.

**PRESCREVER / MINISTRAR:**
[ ] Há credencial profissional do agente?
[ ] Ministrar a dependente sem finalidade comercial pode configurar §3º do art. 33.

#### 2.4 — Resultado da Análise dos Verbos

Concluir:
- CORRESPONDÊNCIA PLENA: fatos sustentam o verbo imputado com prova suficiente.
- CORRESPONDÊNCIA PARCIAL: fatos sustentam parcialmente; parte dos verbos imputados sem prova.
- AUSÊNCIA DE CORRESPONDÊNCIA: fatos não sustentam o verbo imputado; possível desclassificação ou absolvição.
- VERBO INADEQUADO: fatos apontam para verbo diverso (geralmente menos grave).

---

### ETAPA 3 — CHECKLIST DE TRÁFICO PRIVILEGIADO (Art. 33 §4º)

**Fundamento:** art. 33 §4º, Lei 11.343/2006.
**Efeito:** redução de 1/6 a 2/3 da pena (possibilidade de converter a regime aberto + substituição por PRD).
**Natureza:** causa especial de diminuição de pena — não depende de pedido expresso; deve ser aplicada de ofício quando presentes os requisitos (STJ, HC 291.662/SP).

#### 3.1 — Requisitos cumulativos (todos devem estar presentes)

| Requisito | Status | Observações |
|---|---|---|
| **Primário:** réu sem condenação criminal transitada em julgado anterior? | [ ] Sim [ ] Não | Verificar folha de antecedentes com cuidado: inquéritos e processos em curso NÃO desqualificam (RE 591.054/STF) |
| **Bons antecedentes:** ausência de registros criminais negativos relevantes? | [ ] Sim [ ] Não | Condenações sem trânsito não configuram maus antecedentes (Súmula 444/STF) |
| **Não se dedica a atividades criminosas:** ausência de provas de habitualidade delitiva? | [ ] Sim [ ] Não | Exige prova concreta de habitualidade — não mera inferência policial |
| **Não integra organização criminosa ou milícia:** ausência de prova de estrutura organizada? | [ ] Sim [ ] Não | Ver Etapa 5 para análise detalhada |

#### 3.2 — Pontos críticos de contestação

**A) Negativa de primário por condenação em outro processo:**
Verificar se a condenação anterior transitou em julgado ANTES da data do fato atual (CP, art. 63). Condenação posterior à data dos fatos não configura reincidência.

**B) Negativa por "dedicação a atividades criminosas":**
[ ] A acusação apresenta prova concreta de habitualidade (interceptações, vigilâncias, testemunhos)?
[ ] Ou é inferência a partir da quantidade da droga?
[ ] Quantidade isolada NÃO é suficiente — STJ, REsp 1.779.876/MG: quantidade deve ser conjugada com outros elementos.
[ ] Câmeras ou movimentação de pessoas no local relatada apenas por policiais: valor probatório limitado.

**C) Negativa por "integração em organização criminosa":**
Remeter à Etapa 5 para análise completa dos requisitos da Lei 12.850/2013.

#### 3.3 — Fração aplicável

| Circunstância | Fração |
|---|---|
| Réu primário, mínima participação, sem antecedentes, pequena quantidade | 2/3 de redução (máxima) |
| Réu primário com algum registro, quantidade média | 1/3 a 1/2 |
| Presença de circunstância que limite mas não afaste o benefício | 1/6 (mínima) |

Indicar a fração concreta recomendável para o caso com justificativa.

#### 3.4 — Impacto na pena e no regime

Calcular:
- Pena-base após aplicação do §4º (com fração máxima justificada)
- Verificar se resultado é igual ou inferior a 4 anos (possibilidade de substituição por PRD — §4º combinado com art. 44 CP)
- Verificar se a pena resultante afasta o regime inicial fechado (STF, HC 111.840: inconstitucionalidade do regime fechado obrigatório em hediondos sem fundamentação concreta)

---

### ETAPA 4 — DESCLASSIFICAÇÃO PARA USO PESSOAL (Art. 28)

**Fundamento:** art. 28 c/c art. 28 §2º, Lei 11.343/2006.
**Efeito:** desclassificação completa — art. 28 não é crime, é infração sem pena privativa de liberdade.
**Standard de prova:** a dúvida milita em favor do réu (in dubio pro reo); o MP tem o ônus de provar o tráfico.

#### 4.1 — Os 6 vetores do art. 28 §2º (análise obrigatória ponto a ponto)

**VETOR 1 — NATUREZA DA SUBSTÂNCIA**
[ ] A droga apreendida é de uso primordialmente individual (maconha, cocaína em pó, crack)?
[ ] Ou é substância típica de distribuição em massa (pasta base, grandes blocos)?
[ ] A natureza da substância isoladamente favorece consumo pessoal ou comércio?
[ ] Análise: __________

**VETOR 2 — QUANTIDADE DA SUBSTÂNCIA**
[ ] A quantidade é compatível com consumo pessoal para o período correspondente (dias/semanas)?
[ ] Há referencial jurisprudencial regional para essa quantidade específica?
[ ] A quantidade foi pesada com embalagem ou sem? (Discutir peso líquido vs. bruto)
[ ] Há laudo de pesagem definitivo ou apenas estimativa policial?
[ ] Análise: __________

**VETOR 3 — LOCAL E CONDIÇÕES DA AÇÃO**
[ ] O local é ponto de venda conhecido (boca de fumo) ou residência/local de uso?
[ ] Havia outras pessoas aguardando, movimentação de clientes, fluxo de pessoas?
[ ] O réu estava em local público sozinho ou em grupo de usuários?
[ ] A abordagem policial ocorreu em que contexto (blitz, denúncia, flagrante em flagrante)?
[ ] Análise: __________

**VETOR 4 — CIRCUNSTÂNCIAS SOCIAIS E PESSOAIS**
[ ] O réu é usuário dependente (há laudo, histórico de tratamento, declarações)?
[ ] A renda do réu é compatível com compra em quantidade para consumo (e não para revenda)?
[ ] Há testemunhas de que o réu consome regularmente aquela substância?
[ ] O réu tem histórico de envolvimento com tráfico ou é primário sem antecedentes?
[ ] Análise: __________

**VETOR 5 — CONDUTA DO AGENTE**
[ ] Como o réu se comportou na abordagem? Tentou fugir, esconder, jogar fora?
[ ] A forma de acondicionamento é compatível com uso (um único invólucro) ou comércio (trouxinhas individuais, unidades)?
[ ] Havia balança de precisão, materiais de embalagem, caderno de anotações?
[ ] Havia dinheiro em espécie em quantidade desproporcional à renda declarada?
[ ] Análise: __________

**VETOR 6 — ANTECEDENTES DO AGENTE**
[ ] O réu tem condenações anteriores por tráfico?
[ ] Há inquéritos ou processos por tráfico (valor limitado — não formam prova conclusiva)?
[ ] Ou o réu tem registros de porte/uso, indicando perfil de usuário?
[ ] Análise: __________

#### 4.2 — Conclusão da análise de desclassificação

| Cenário | Conclusão |
|---|---|
| Maioria dos vetores favorável ao réu | Desclassificação para art. 28 como tese principal |
| Vetores divididos | Desclassificação como tese subsidiária; privilégio como principal |
| Maioria dos vetores desfavorável | Mantida tipificação do art. 33; focar em privilégio e outros |

Redigir parágrafo de argumentação pronho para a peça, com análise ponto a ponto dos vetores do §2º, sempre invertendo o ônus da prova para o MP.

---

### ETAPA 5 — EXCLUSÃO DE ORGANIZAÇÃO CRIMINOSA

**Fundamento:** Lei 12.850/2013, art. 1º §1º.
**Relevância:** imputação de organização criminosa afasta o tráfico privilegiado (art. 33 §4º, in fine) e qualifica a conduta (Lei 12.850, art. 2º). Contestar com rigor técnico.

#### 5.1 — Requisitos legais da organização criminosa (todos cumulativos)

| Requisito | Previsto na Lei | Status no caso | Prova apresentada |
|---|---|---|---|
| Associação de 4 ou mais pessoas | Art. 1º §1º | | |
| Estruturalmente ordenada | Art. 1º §1º | | |
| Divisão de tarefas | Art. 1º §1º | | |
| Mesmo que informalmente | Art. 1º §1º | | |
| Finalidade de obter vantagem de qualquer natureza | Art. 1º §1º | | |
| Mediante prática de infrações penais com penas máximas superiores a 4 anos | Art. 1º §1º | | |

#### 5.2 — Pontos de contestação recorrentes

**A) Número de integrantes:**
[ ] O MP identificou 4 ou mais integrantes individualizados?
[ ] Mera referência a "organização" sem identificação não cumpre o requisito.
[ ] Dois ou três envolvidos: verificar se cabe associação do art. 35 (exige 2+) ao invés de org. crim.

**B) Estrutura ordenada com divisão de tarefas:**
[ ] A acusação demonstrou divisão hierárquica de funções (chefe, distribuidor, vigia, mula)?
[ ] Ou é mera alegação genérica de "quadrilha organizada"?
[ ] A simples atuação conjunta em um episódio NÃO configura organização criminosa.
[ ] STJ: para configurar org. crim., exige-se estabilidade e permanência — REsp 1.752.372/MG.

**C) Prova de organização criminosa:**
[ ] Há interceptação telefônica demonstrando hierarquia e funções?
[ ] Há relatório de inteligência policial com identificação individual de funções?
[ ] Ou a imputação é inferida a partir da quantidade da droga apreendida?
[ ] Quantidade de droga, por si só, NÃO prova organização criminosa.

#### 5.3 — Distinção ORCRIM vs. Associação ao Tráfico (art. 35)

| Critério | Associação art. 35 | Organização Criminosa |
|---|---|---|
| Número mínimo | 2 pessoas | 4 pessoas |
| Estrutura exigida | Não | Sim (ordenada, hierarquizada) |
| Finalidade | Praticar tráfico | Qualquer infração penal grave |
| Estabilidade | Exige estabilidade | Exige estabilidade + estrutura |

Se o caso não atingir os requisitos de ORCRIM mas tiver 2+ envolvidos estáveis: pode haver associação do art. 35, mas não ORCRIM.

#### 5.4 — Impacto estratégico

Se excluída a organização criminosa:
- Tráfico privilegiado (art. 33 §4º) passa a ser viável.
- Afasta a causa de aumento de pena por ORCRIM (art. 40, VII, Lei 11.343).
- Pode impactar o regime inicial da pena.

---

### ETAPA 6 — AUDITORIA DO INGRESSO DOMICILIAR

**Fundamento:** CF/88, art. 5º, XI; CPP, arts. 240 e ss.; STF, RE 603.616 (Tema 280); STJ, RHC 83.501.
**Relevância crítica:** caso de alta incidência em flagrantes de tráfico — policiais localizam réu na rua com pequena quantidade, "autorização" para entrar na casa rende droga em maior quantidade, fundando a imputação de tráfico em vez de uso.

#### 6.1 — Mapeamento da entrada domiciliar

Responder às perguntas abaixo com base no BO, depoimentos e eventuais relatórios policiais:

| Pergunta | Resposta |
|---|---|
| Como os policiais chegaram ao local? (denúncia anônima, patrulhamento, operação) | |
| Havia mandado judicial de busca e apreensão? | |
| Se não havia mandado: quem autorizou a entrada? | |
| A "autorização" foi reduzida a termo? Há assinatura do morador? | |
| O morador estava em condições de dar consentimento livre (apontado por arma, sem advogado, sob pressão)? | |
| A droga da rua e a da residência têm laudo que as distingue? | |
| O inquérito descreve a sequência temporal da entrada? | |

#### 6.2 — Cenários e teses correspondentes

**CENÁRIO A — Entrada sem mandado e sem autorização válida:**
Tese: **nulidade absoluta do flagrante e da prova obtida** — prova ilícita por derivação (CPP, art. 157 §1º; Teoria dos Frutos da Árvore Envenenada).
Fundamento: CF, art. 5º, XI; STF, RE 603.616 (Tema 280): ingresso em domicílio sem mandado judicial é ilícito ainda que policial alegue fundada suspeita.
Efeito: exclusão da prova obtida na residência; possível enquadramento no art. 28 apenas pela droga da rua (se houver).

**CENÁRIO B — Autorização formalmente existente, mas viciada:**
[ ] A autorização foi dada sob coação (policiais armados, ameaça de prisão)?
[ ] O morador foi informado de que poderia recusar?
[ ] Há testemunha além dos próprios policiais sobre a "autorização"?
Tese: **consentimento inválido** — autorização não é livre e espontânea, equiparável à ausência de autorização.
Fundamento: STJ, RHC 83.501/SP; doutrina da coerção implícita no contexto policial.

**CENÁRIO C — Narrativa policial incongruente:**
[ ] A versão dos policiais é a única prova do consentimento?
[ ] A dinâmica narrada (réu da rua "permite" entrada, são encontrados kg de droga) contradiz a experiência comum?
[ ] Há contradição entre o BO e o depoimento dos policiais em juízo?
Tese: **fragilidade probatória da autorização** — dúvida sobre a regularidade que beneficia o réu.
Argumentação: a narrativa policial da autorização espontânea é o padrão recorrente para justificar ingressos ilegais; o Tribunal deve analisar com ceticismo metodológico a declaração isolada de policiais interessados no resultado.

#### 6.3 — Jurisprudência específica

Fontes oficiais a verificar:
- STF, RE 603.616/RO (Tema 280): https://portal.stf.jus.br/processos/detalhe.asp?incidente=2697601
- STF, RHC 174.962: ingresso domiciliar baseado em denúncia anônima
- STJ, RHC 83.501/SP: consentimento viciado pela presença policial
- STJ, HC 616.584: "fundadas razões" não bastam sem mandado ou consentimento real

---

### ETAPA 7 — CADEIA DE CUSTÓDIA PARA SUBSTÂNCIAS ENTORPECENTES

**Fundamento:** CPP, arts. 158-A a 158-F; Res. SENASP; laudos periciais.
**Relevância:** quebra da cadeia de custódia pode gerar nulidade da prova pericial e afastar a própria materialidade do delito.

#### 7.1 — Tabela de controle da cadeia de custódia

| Fase (art. 158-B CPP) | Responsável | Documento | Status | Vício identificado |
|---|---|---|---|---|
| Reconhecimento | Policial abordagem | BO | | |
| Isolamento | Policial abordagem | BO | | |
| Fixação | Fotografia / filmagem | Auto de apreensão | | |
| Coleta | Agente | Auto de apreensão | | |
| Acondicionamento | Agente | Lacre numerado | | |
| Transporte | Agente | Guia de remessa | | |
| Recebimento (perito) | Perito | Protocolo | | |
| Processamento | Perito | Laudo | | |
| Armazenamento | Instituição | Registro | | |

#### 7.2 — Checklist específico para drogas

[ ] O material foi pesado no local ou na delegacia? Há documento de pesagem inicial?
[ ] O lacre está intacto nas fotografias do laudo?
[ ] O número do lacre constante do laudo coincide com o do auto de apreensão?
[ ] O laudo é provisório ou definitivo? Se provisório: o definitivo foi produzido antes da sentença?
[ ] O perito que subscreveu o laudo é o mesmo que recebeu o material?
[ ] Houve retirada de amostra para contraprova? (art. 170 CPP)
[ ] A quantidade pesada no laudo coincide com a constante do BO?
[ ] Há divergência de peso entre o auto de apreensão e o laudo definitivo?
[ ] A substância foi identificada quimicamente (colorimetria + cromatografia) ou apenas por colorimetria?
[ ] O laudo descreve individualmente as embalagens ou agrupa tudo?

#### 7.3 — Consequências processuais dos vícios

| Vício | Consequência | Fundamento |
|---|---|---|
| Ausência de lacre documentado | Nulidade da prova pericial | CPP, art. 158-B, IV |
| Divergência de peso entre BO e laudo | Questionamento da quantidade (impacto no art. 33 §4º e art. 42) | CPP, art. 158-F |
| Laudo apenas provisório na sentença | Cerceamento de defesa (impossibilidade de contraprova efetiva) | CPP, art. 159 §5º |
| Ausência de reserva de contraprova | Nulidade do laudo (se arguida oportunamente) | CPP, art. 170 |
| Perito diferente do que recebeu o material | Questionamento da autenticidade | CPP, art. 158-D |

---

### ETAPA 8 — TESES COMPLEMENTARES

#### 8.1 — Associação ao Tráfico (art. 35) vs. Concurso Eventual

[ ] Há prova de estabilidade e permanência da associação?
[ ] Ou é participação episódica em fato único (concurso de pessoas eventual, art. 29 CP)?
[ ] STJ: a associação exige animus associativo estável — não se configura por participação em um único crime.
[ ] Se for concurso eventual: afastar o art. 35 e analisar apenas o art. 33 em concurso com co-réu.

#### 8.2 — Flagrante Preparado / Crime Impossível

[ ] Agentes policiais induziram o réu à prática do crime?
[ ] Havia possibilidade real de consumação do tráfico ou o consumidor era o próprio agente estatal?
[ ] Súmula 145/STF: não há crime quando a preparação do flagrante pelo policial torna impossível sua consumação.
[ ] Distinguir: flagrante esperado (lícito) vs. flagrante preparado (ilícito).

#### 8.3 — Causa de Diminuição — Fornecimento a Dependente (Art. 33 §3º)

[ ] O réu forneceu droga gratuitamente a pessoa de seu relacionamento pessoal?
[ ] Há prova de que o destinatário é usuário/dependente?
[ ] A conduta foi esporádica e sem finalidade de lucro?
[ ] Se sim: aplicar §3º do art. 33 (redução de 1/6 a 2/3), com possível regime mais favorável.

#### 8.4 — Inconstitucionalidade do Regime Fechado Obrigatório

Fundamento: STF, HC 111.840 (rel. Min. Dias Toffoli): regime fechado para hediondos sem fundamentação concreta é inconstitucional.
[ ] O juiz fixou regime fechado por força da hediondez, sem fundamentação individualizada?
[ ] Se sim: arguir inconstitucionalidade e postular regime inicial menos gravoso com base no CP, art. 33 e Súmula 440/STJ.

#### 8.5 — Tráfico entre Fronteiras (Causa de Aumento do Art. 40)

[ ] A acusação aplicou a causa de aumento por transnacionalidade ou interestadualidade?
[ ] Há prova concreta da origem ou destino interestadual/internacional?
[ ] Mera localização do réu em cidade fronteiriça NÃO basta — STJ, REsp 1.567.856/MT.

#### 8.6 — Nulidades Processuais Específicas do Tráfico

[ ] Reconhecimento pessoal fora das regras do CPP, art. 226 + HC 598.886/STJ?
[ ] Depoimentos de policiais como prova exclusiva, sem corroboração?
[ ] Interceptação telefônica sem autorização judicial ou com prazo extrapolado?
[ ] Infiltração policial sem autorização judicial (Lei 12.850, arts. 10-14)?
[ ] Colaboração premiada utilizada sem homologação regular?

---

### ETAPA 9 — MAPA ESTRATÉGICO FINAL

#### 9.1 — Tabela de teses

| N. | Tese | Etapa | Hierarquia | Aderência | Impacto | Preclusão |
|---|---|---|---|---|---|---|
| | | | Principal/Subsidiária/Dosimetria | ✅/🟡/🔵 | | |

#### 9.2 — Linha defensiva recomendada

Parágrafo estruturado com:
1. Tese absolutória ou de desclassificação (se presente)
2. Tese subsidiária de maior impacto (privilégio ou desclassificação parcial)
3. Teses de dosimetria e benefícios

#### 9.3 — Cenário projetado

| Cenário | Pena projetada | Regime | Benefícios |
|---|---|---|---|
| Pior caso (sem teses) | | | |
| Com teses subsidiárias | | | |
| Com tese principal acolhida | | | |

---

### ETAPA 10 — REVISÃO LEGAL DESIGN

**Design Thinking:**
- Empatia: como o juiz/relator vai receber as teses? Qual o pré-conceito de que o réu "é traficante"?
- Definição: o problema central é provar ausência de tráfico, ou reduzir o impacto da condenação?
- Ideação: há teses não exploradas? Há prova da defesa não produzida que ainda pode ser requerida?
- Protótipo: estrutura argumentativa testada contra as prováveis razões do MP
- Teste/Iteração: ponto mais vulnerável da defesa e como blindá-lo

**Legal Design:**
- Adequação ao destinatário (1ª instância / TJRS / STJ)
- Hierarquia visual: tese absolutória → desclassificatória → privilegiada → dosimétrica
- Mapa de contradições na narrativa policial
- Sumário executivo da defesa em 3 linhas para o juiz

---

## REGRAS DE OURO

1. Executar sempre a Etapa 0 antes de qualquer análise.
2. Os 6 vetores do art. 28 §2º devem ser analisados TODOS, ponto a ponto — nunca globalmente.
3. Tráfico privilegiado é direito subjetivo quando presentes os requisitos — não é favor do juiz.
4. Organização criminosa exige prova de 4+ integrantes + estrutura hierárquica + divisão de tarefas: a imputação genérica deve ser contestada sempre.
5. A autorização domiciliar dada perante policiais armados é, estruturalmente, suspeita — arguir sempre a nulidade e exigir prova concreta do consentimento livre.
6. A cadeia de custódia é a materialidade do crime — sua quebra questiona a própria existência da prova.
7. Nunca citar Jusbrasil. Sempre verificar links oficiais: STF (portal.stf.jus.br), STJ (stj.jus.br), TJRS (tjrs.jus.br).
8. A denúncia anônima não pode ser a única e exclusiva base para o flagrante — exige diligências prévias de verificação (STJ, RHC 83.501).
9. Verificar sempre o peso líquido da droga (sem embalagem) — o peso bruto inflaciona a quantidade.
10. Não usar travessão em nenhum texto produzido.
11. Quantidade de droga, por si só, NÃO prova tráfico, NÃO prova organização criminosa e NÃO afasta o privilégio — cada inferência exige prova autônoma.
12. Após qualquer acórdão, verificar se cabem embargos de declaração para prequestionamento (RE/REsp).

---

## ASSINATURA DE SAÍDA

```
==================================================
Análise técnica especializada — Lei 11.343/2006
Base: STF, STJ, TJRS, TRF4 — fontes oficiais exclusivamente
Rosa Advogados | Cristiano da Rosa | OAB/RS 78.652
==================================================
```
