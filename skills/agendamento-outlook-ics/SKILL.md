---
name: agendamento-outlook-ics
description: >
  Cria eventos .ics para Microsoft Outlook a partir de qualquer material: texto, imagem, print, decisão judicial, intimação, guia médica, aviso escolar. Gera arquivo válido com roteiro completo, deslocamento duplo (casa e trabalho), links Google Maps, previsão de saída/chegada, lembrete automático e, para audiências, relatório com processo, vara, modalidade, link de acesso, pessoas a serem ouvidas e providências recomendadas. Use SEMPRE ao receber pedido de agendamento no Outlook, arquivo ICS ou evento de calendário, ou ao mencionar: audiência, consulta, exame, reunião, sessão maçônica, jogo do Grêmio, prazo, diligência. Acionar com: "Faça o ICS", "Marque no Outlook", "Crie o evento", "Agende para mim", /ics, /agendar, /outlook, /evento. Acionar também ao receber imagem ou documento com data e horário de compromisso, mesmo sem menção explícita a ICS.
---

# Skill: Agendamento Outlook ICS

## 1. Finalidade

Transformar dados soltos em evento funcional, completo e seguro para importação no Microsoft Outlook, contendo:

1. Título objetivo
2. Data e horário corretos
3. Duração estimada
4. Localização adequada
5. Categoria do Outlook
6. Roteiro completo na descrição
7. Link de rota pelo Google Maps (origem casa + origem trabalho)
8. Previsão de saída e chegada recomendada
9. Dados extraídos do documento ou imagem
10. Pendências ou dados ilegíveis registrados
11. Lembrete automático
12. Arquivo `.ics` tecnicamente válido

---

## 2. Regra fundamental de segurança

**Nunca inventar dados.**

Se algum dado estiver ausente, ilegível, incompleto ou ambíguo, registrar expressamente:

```
Informação não identificada no documento/imagem.
```

ou

```
Informação pendente de conferência.
```

Se faltar dado essencial (data ou horário), não criar o `.ics` definitivo sem indicar a pendência impeditiva.

---

## 3. Origens padrão para deslocamento

Todo evento deve conter **duas** previsões de deslocamento:

**Casa:**
```
Via 9747-742, Bairro Frederico de Carvalho, Porto Alegre, CEP 791430310
```
Incluir observação: *Endereço residencial utilizado conforme informado pelo usuário. Recomenda-se conferência antes do deslocamento.*

**Trabalho:**
```
Av. Protásio Alves, 654, Rio Branco, Porto Alegre, RS
```

---

## 4. Extração de dados (imagem ou documento)

Ao receber imagem, print ou documento, extrair:

- Nome, tipo e data do compromisso
- Horário e duração (se constar)
- Nome do local, endereço completo, sala/andar/setor
- Nome do profissional, juiz, vara, cartório ou responsável
- Telefone, e-mail, link de acesso, plataforma virtual
- Documentos necessários e orientações específicas
- Tempo de antecedência solicitado

Se houver vários compromissos, criar um VEVENT para cada um.

---

## 5. Título do evento

Formato padrão:

```
Consulta médica | Hospital Ernesto Dorneles
Exame laboratorial | Medplex
Audiência | Processo nº 0000000-00.0000.0.00.0000
Audiência criminal | Processo nº 0000000-00.0000.0.00.0000
Reunião | Rosa Advogados
Compromisso escolar | Colégio Champagnat
Jogo do Grêmio
Sessão maçônica | Loja Mahatma Gandhi
```

---

## 6. Categorias do Outlook

| Tipo de evento | Categoria |
|---|---|
| Consulta, exame, hospital, dentista | `Importante` |
| Audiência, prazo, fórum, cliente | `Jurídico` |
| Audiência urgente, custódia, réu preso | `Importante; Jurídico` |
| Escola, filha, família | `Família` |
| Reunião de escritório, cliente | `Trabalho` |
| Jogo do Grêmio | `Grêmio` |
| Maçonaria, sessão, loja | `Maçonaria` |
| Viagem, aeroporto | `Viagem` |
| Sem classificação segura | `Importante` |

---

## 7. Duração padrão

| Tipo | Duração |
|---|---|
| Consulta médica | 1 hora |
| Exame laboratorial simples | 30 minutos |
| Exame de imagem/procedimento | 1 hora |
| Audiência | 1 hora |
| Audiência de instrução longa | 2 horas |
| Reunião profissional | 1 hora |
| Compromisso escolar | 1 hora |
| Jogo de futebol | 2 horas |
| Sessão maçônica | 3 horas |
| Sem identificação | 1 hora |

---

## 8. Margem de antecedência por tipo

| Tipo | Chegada antecipada |
|---|---|
| Consulta médica comum | 15 a 20 minutos antes |
| Hospital, exame com cadastro | 20 a 30 minutos antes |
| Audiência presencial | 30 minutos antes |
| Audiência virtual | Testar acesso 20 minutos antes |
| Fórum, delegacia, presídio | 30 minutos antes |
| Compromisso escolar | 10 a 15 minutos antes |
| Reunião profissional | 10 a 15 minutos antes |
| Evento comum | 10 minutos antes |

**Estimativa de deslocamento em Porto Alegre (sem ferramenta de trânsito em tempo real):**
- Curto: 20 a 30 min | Médio: 30 a 45 min | Longo: 45 a 60 min
- Horário de pico: acrescentar 15 a 25 min
- Estacionamento difícil: acrescentar 10 a 15 min

**Fórmula:** `Saída = chegada recomendada - tempo de deslocamento - margem de segurança`

---

## 9. Identificação de audiências judiciais

Identificar como audiência quando o documento contiver termos como: audiência, AIJ, interrogatório, oitiva, depoimento especial, audiência de custódia, sessão de julgamento, conciliação, mediação, justificação, UNA, inquirição de testemunhas, videoconferência, Zoom, Teams, Webex, Google Meet, TJRS, CNJ, Eproc, PJe.

---

## 10. Dados obrigatórios a extrair em audiências

Quando audiência, extrair todos os dados disponíveis:

- Número do processo e classe processual
- Vara, comarca, foro, juiz/juíza
- Ministério Público, Defensoria Pública
- Parte representada e parte contrária
- Tipo de audiência, data, horário, modalidade
- Local físico (endereço, sala, andar, foro)
- Link de acesso, plataforma, ID da reunião, senha
- Telefone do cartório, e-mail, balcão virtual
- Pessoas a serem ouvidas (vítima, testemunhas, policiais, peritos, réu)
- Réu preso ou solto, necessidade de requisição
- Determinações judiciais, advertências, consequências da ausência
- Documentos necessários, providências prévias

---

## 11. Blocos obrigatórios na descrição

### 11.1. Bloco de deslocamento (evento presencial)

```
DESLOCAMENTO

Horário do compromisso: [hh:mm]
Horário recomendado de chegada: [hh:mm]

Origem 1: Casa
Endereço: Via 9747-742, Bairro Frederico de Carvalho, Porto Alegre, CEP 791430310
Tempo estimado: [xx minutos]
Saída recomendada: [hh:mm]
Rota: [link Google Maps]

Origem 2: Trabalho
Endereço: Av. Protásio Alves, 654, Rio Branco, Porto Alegre, RS
Tempo estimado: [xx minutos]
Saída recomendada: [hh:mm]
Rota: [link Google Maps]

Observação: Os horários são estimativas práticas. Conferir o trânsito real antes da saída.
```

### 11.2. Bloco de deslocamento (evento virtual)

```
DESLOCAMENTO

Evento virtual. Não há deslocamento físico previsto.
Horário recomendado para ingresso/teste de acesso: [hh:mm]
Observação: Testar conexão, câmera, microfone e link de acesso com antecedência.
```

### 11.3. Bloco de acesso à audiência virtual

```
ACESSO À AUDIÊNCIA VIRTUAL

Plataforma: [Zoom, Teams, Webex, Google Meet, TJRS, outro]
Link de acesso: [link]
ID da reunião: [id, se houver]
Senha: [senha, se houver]
Orientação: Ingressar com antecedência mínima de 20 minutos, testar câmera, microfone e conexão.
```

Se não houver link:
```
Link de acesso: Não identificado no documento.
Providência: Contatar o cartório da vara antes da audiência para confirmar o link.
```

### 11.4. Bloco de pessoas a serem ouvidas

```
PESSOAS A SEREM OUVIDAS

Parte autora / Ministério Público: [nomes]
Defesa: [nomes]
Vítima: [nome]
Testemunhas: [nomes]
Policiais: [nomes]
Peritos / técnicos: [nomes]
Réu / acusado / investigado: [nome]

Observação: Conferir se todas as pessoas foram regularmente intimadas ou requisitadas.
```

### 11.5. Relatório completo de audiência

```
RELATÓRIO DE AUDIÊNCIA

Tipo de audiência: [instrução, interrogatório, custódia, conciliação, mediação, outra]
Processo: [número]
Classe: [classe processual]
Vara: [nome]
Comarca: [comarca]
Foro: [foro]
Juiz/Juíza: [nome]
Data: [dd/mm/aaaa]
Horário: [hh:mm]
Modalidade: [presencial / virtual / híbrida / não identificada]
Local físico: [endereço completo, sala, andar]
Acesso virtual: [link, plataforma, ID e senha]
Parte representada: [nome]
Parte contrária / MP: [nome ou órgão]

Determinações judiciais relevantes: [resumo fiel]
Advertências constantes da decisão: [ausência, condução, preclusão, confissão, revelia etc.]

Providências prévias recomendadas:
1. Conferir intimação das testemunhas.
2. Confirmar modalidade da audiência.
3. Conferir link de acesso, se virtual.
4. Contatar o cartório em caso de dúvida.
5. Separar documentos necessários.
6. Preparar roteiro de perguntas.
7. Verificar necessidade de entrevista prévia com cliente.
8. Verificar se há réu preso e necessidade de requisição.
9. Conferir se há depoimento especial ou restrição de contato.
10. Conferir determinações sobre câmera aberta, identificação ou sala de espera virtual.

Contato da vara/cartório:
Telefone: [telefone]
E-mail: [e-mail]
Balcão virtual: [link ou telefone]

Observações estratégicas: [pontos úteis para a defesa, sem inventar fatos]
```

---

## 12. Link de rota Google Maps

Formato:
```
https://www.google.com/maps/dir/?api=1&origin=ORIGEM&destination=DESTINO&travelmode=driving
```

Origem casa: `Via 9747-742, Bairro Frederico de Carvalho, Porto Alegre, CEP 791430310`
Origem trabalho: `Av. Protásio Alves, 654, Rio Branco, Porto Alegre, RS`
Destino: endereço completo do evento (ou nome do local + cidade/estado se endereço indisponível).

---

## 13. Lembretes automáticos

| Tipo | Lembrete |
|---|---|
| Compromisso comum | 1 hora antes |
| Consulta médica | 1 hora antes |
| Exame ou hospital | 2 horas antes |
| Audiência | 2 horas antes |
| Audiência presencial com deslocamento | 3 horas antes |
| Audiência virtual | 2 horas antes |
| Viagem | 1 dia antes + 3 horas antes |

Formato VALARM:
```ics
BEGIN:VALARM
TRIGGER:-PT2H
ACTION:DISPLAY
DESCRIPTION:Lembrete: [título do evento]
END:VALARM
```

---

## 14. Formato técnico do arquivo ICS

```ics
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Rosa Advogados//Agendamento Outlook ICS//PT-BR
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:[uid-unico]
DTSTAMP:[data-hora-geracao-em-utc]
DTSTART;TZID=America/Sao_Paulo:[aaaammddThhmmss]
DTEND;TZID=America/Sao_Paulo:[aaaammddThhmmss]
SUMMARY:[titulo-do-evento]
LOCATION:[localizacao]
DESCRIPTION:[descricao-completa-com-quebras-escapadas]
CATEGORIES:[categoria]
STATUS:CONFIRMED
TRANSP:OPAQUE
PRIORITY:1
X-MICROSOFT-CDO-BUSYSTATUS:BUSY
BEGIN:VALARM
TRIGGER:-PT2H
ACTION:DISPLAY
DESCRIPTION:Lembrete: [titulo-do-evento]
END:VALARM
END:VEVENT
END:VCALENDAR
```

**Regras técnicas do campo DESCRIPTION:**
- Quebras de linha: `\n`
- Vírgula: `\,`
- Ponto e vírgula: `\;`
- Barra invertida: `\\`
- Timezone sempre: `TZID=America/Sao_Paulo`
- Formato datetime: `YYYYMMDDTHHMMSS`

---

## 15. LOCATION por modalidade

| Modalidade | LOCATION |
|---|---|
| Presencial | Endereço completo: nome, rua, número, bairro, cidade, estado |
| Virtual | `Audiência virtual, link na descrição` |
| Híbrida | `[local físico] / acesso virtual na descrição` |
| Não identificada | `Local não identificado no documento` |

---

## 16. Múltiplos eventos

Se o documento contiver mais de um compromisso:
- Criar um `VEVENT` por compromisso
- Um único arquivo `.ics` consolidado
- Cada VEVENT com UID próprio, descrição própria, categoria e deslocamento próprios

---

## 17. Resposta final ao usuário

```
Criei o arquivo ICS para importar no Outlook.

Eventos incluídos:
1. [Título do evento]
   Data e horário: [dd/mm/aaaa, hh:mm]
   Categoria: [categoria]
   Local: [local]
   Chegada recomendada: [hh:mm]
   Saída estimada saindo de casa: [hh:mm]
   Saída estimada saindo do trabalho: [hh:mm]

[Se audiência:] Incluí na descrição o relatório completo com dados do processo, modalidade, link de acesso (quando disponível), pessoas a serem ouvidas, contatos da vara/cartório e providências recomendadas.
```

---

## 18. Checklist final obrigatório

Antes de entregar o arquivo, verificar:

- [ ] O evento tem data e horário?
- [ ] O título está claro e funcional?
- [ ] A duração foi definida?
- [ ] A categoria foi aplicada?
- [ ] O campo LOCATION está correto?
- [ ] A descrição contém roteiro completo?
- [ ] Há previsão de saída saindo de casa?
- [ ] Há previsão de saída saindo do trabalho?
- [ ] Há link de rota saindo de casa?
- [ ] Há link de rota saindo do trabalho?
- [ ] O horário recomendado de chegada foi informado?
- [ ] O timezone está como `America/Sao_Paulo`?
- [ ] O alarme foi incluído?
- [ ] Em audiência: relatório detalhado incluído?
- [ ] Em audiência virtual: link destacado?
- [ ] Em audiência: processo, vara, comarca e modalidade extraídos?
- [ ] Em audiência: pessoas a serem ouvidas listadas?
- [ ] Dados ilegíveis registrados como pendência?
- [ ] Nenhum dado foi inventado?
- [ ] O arquivo `.ics` está tecnicamente válido?
- [ ] A resposta final contém o link para baixar?
