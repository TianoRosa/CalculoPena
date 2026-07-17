# Prova Digital — Checklist Expandido de Cadeia de Custódia

## PREMISSA

Prova digital é inerentemente frágil: pode ser copiada, editada, truncada, descontextualizada ou adulterada sem deixar vestígios perceptíveis a olho nu. A confiabilidade epistêmica de qualquer prova digital depende integralmente da documentação do processo que a originou.

---

## CHECKLIST DE VERIFICAÇÃO — PROVA DIGITAL

### 1. Origem e Apreensão do Dispositivo

- [ ] O auto de apreensão identifica precisamente o aparelho (marca, modelo, IMEI, número de série)?
- [ ] O auto de apreensão registra o estado do aparelho (ligado/desligado, bloqueado/desbloqueado, bateria)?
- [ ] Há fotografia do aparelho no momento da apreensão?
- [ ] Houve lacração imediata do dispositivo após a apreensão?
- [ ] O aparelho foi acondicionado em bolsa de Faraday para evitar acesso remoto ou wipe?
- [ ] Há registro do responsável pela guarda física do aparelho desde a apreensão até a extração?
- [ ] A cadeia de custódia física do aparelho está documentada nos termos dos arts. 158-A a 158-F CPP?

### 2. Autorização para Extração

- [ ] Havia mandado judicial autorizando a extração dos dados?
- [ ] O mandado delimitava a espécie de dados a extrair (conversas, fotos, localização, e-mail)?
- [ ] O mandado fixava período temporal de acesso?
- [ ] Havia termo de consentimento escrito do titular, quando aplicável?
- [ ] A extração respeitou os limites do mandado ou do consentimento?

### 3. Processo de Extração Pericial

- [ ] Há laudo ou relatório pericial documentando o processo de extração?
- [ ] A ferramenta utilizada está identificada (Cellebrite UFED, XRY, Oxygen Forensic, MOBILedit, etc.)?
- [ ] A versão da ferramenta utilizada está registrada?
- [ ] O perito responsável está identificado (nome, matrícula)?
- [ ] Há registro da data e hora da extração?
- [ ] A extração foi realizada sobre imagem forense ou diretamente no aparelho original?
- [ ] Se sobre imagem forense, a imagem foi gerada com ferramentas write-blocker?

### 4. Integridade do Material

- [ ] Há hash de integridade do arquivo de extração (MD5, SHA-1, SHA-256)?
- [ ] O hash foi gerado no momento da extração e registrado no laudo?
- [ ] A mídia original de extração (HD externo, DVD, pen drive) está lacrada e preservada?
- [ ] É possível verificar o hash atual do arquivo contra o hash original registrado?
- [ ] Os metadados dos arquivos extraídos estão preservados e disponíveis para análise?

### 5. Conteúdo Apresentado nos Autos

- [ ] O material juntado aos autos é a extração integral ou uma seleção parcial?
- [ ] Se seleção parcial, quem fez a seleção? Com base em qual critério?
- [ ] Há registro de que conversas ou arquivos foram descartados e por quê?
- [ ] As conversas apresentadas possuem contexto suficiente (mensagens anteriores e posteriores)?
- [ ] Os prints juntados têm correspondência verificável com o arquivo de extração original?
- [ ] A data e hora exibidas nas conversas foram verificadas contra o horário do servidor?
- [ ] Há certidão ou declaração de que o material juntado é cópia fiel da extração?

### 6. Cadeia de Acesso ao Material

- [ ] Há registro de todas as pessoas que tiveram acesso ao dispositivo ou ao arquivo de extração?
- [ ] A mídia de extração permaneceu em custódia controlada desde a geração?
- [ ] Houve cópia do material extraído? Quantas? Para quem?
- [ ] O Ministério Público teve acesso ao material original ou apenas à seleção policial?

---

## MATRIZ DE RISCO — PROVA DIGITAL

| Falha Identificada | Consequência Jurídica Possível | Grau de Risco |
|---|---|---|
| Ausência de mandado ou consentimento | Ilicitude da extração — art. 157 CPP | ⛔ Crítico |
| Extração além dos limites do mandado | Ilicitude parcial — excesso de execução | 🔴 Alto |
| Ausência de hash de integridade | Prova sem confiabilidade epistêmica | 🔴 Alto |
| Aparelho não lacrado imediatamente | Quebra da cadeia de custódia física | 🔴 Alto |
| Seleção parcial sem critério documentado | Parcialidade; contraditório prejudicado | 🔴 Alto |
| Ausência de laudo pericial | Elemento meramente informativo; sem valor probatório | 🟡 Médio |
| Ferramenta de extração não identificada | Confiabilidade técnica questionável | 🟡 Médio |
| Conversas sem contexto (truncadas) | Desfiguração do sentido; imprestabilidade parcial | 🟡 Médio |
| Acesso ao material por agente não documentado | Quebra da cadeia de acesso | 🟡 Médio |
| Metadados ausentes | Impossibilidade de verificação independente | 🟢 Baixo/Médio |

---

## TESES DEFENSIVAS ESPECÍFICAS — PROVA DIGITAL

### Tese 1 — Ilicitude por Ausência de Autorização Judicial
Extração de dados de aparelho celular sem mandado judicial constitui violação ao sigilo das comunicações (CF, art. 5º, XII) e ao sigilo de dados (CF, art. 5º, X). A prova assim obtida é ilícita e deve ser desentranhada, nos termos do art. 157 do CPP.

### Tese 2 — Imprestabilidade por Ausência de Hash
Sem registro do hash de integridade no momento da extração, é impossível verificar se o conteúdo apresentado nos autos corresponde ao que foi efetivamente extraído do aparelho. O material carece de confiabilidade epistêmica mínima para sustentar condenação.

### Tese 3 — Parcialidade da Seleção
A seleção unilateral de conversas pela autoridade policial, sem critério documentado e sem acesso da defesa ao arquivo integral, viola o princípio da paridade de armas e impede o pleno exercício do contraditório.

### Tese 4 — Extração por Ferramenta não Periciada
A utilização de ferramenta de extração cujo funcionamento não foi objeto de laudo pericial impede a verificação técnica da fidedignidade do processo. Resultado de extração não auditável não pode servir como fundamento de condenação.

### Tese 5 — Conversas Descontextualizadas
Mensagens apresentadas de forma truncada, sem as mensagens antecedentes e consequentes que permitam compreender o contexto comunicativo, não permitem a compreensão do sentido das trocas e não podem ser utilizadas como prova isolada de intenção criminosa.

---

## PEDIDOS ESPECÍFICOS — PROVA DIGITAL

```
Requer-se especificamente:

1. Juntada do laudo pericial completo da extração digital, com identificação da
   ferramenta utilizada, sua versão, o hash de integridade gerado e o nome do
   perito responsável;

2. Disponibilização integral do arquivo de extração, para que a defesa técnica
   possa verificar se o material juntado aos autos corresponde, integral e
   fielmente, ao conteúdo extraído do dispositivo;

3. Juntada das mensagens completas, incluindo contexto anterior e posterior
   às mensagens selecionadas, para permitir a adequada compreensão do sentido
   comunicativo das trocas apresentadas como prova;

4. Informação sobre a cadeia de acesso ao dispositivo e ao arquivo de extração,
   com identificação de todos os agentes que tiveram contato com o material;

5. Subsidiariamente, realização de perícia contraditória sobre o material digital,
   com nomeação de perito indicado pela defesa, nos termos do art. 159, §5º, II, CPP.
```
