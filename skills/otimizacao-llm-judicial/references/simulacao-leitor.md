# Módulo de Teste de Sumarização (cinco simulações)

Metodologia do comando `/leitor-algoritmo`. Substitui a simulação única por uma bateria de cinco resumos, porque modelos são sensíveis à formulação e não existe resumo único garantido. O objetivo não é adivinhar o tribunal, é verificar se as teses centrais sobrevivem a percursos distintos de leitura e compressão.

## Premissa

A simulação aproxima, não reproduz, o comportamento de um modelo real. Funciona como teste de estresse defensivo. A tese que desaparece ou se deforma em mais de uma simulação sinaliza falha de saliência ou de completude local que precisa de correção antes do protocolo.

## Insumo

Antes de simular, fixar as teses centrais que não podem desaparecer do resumo (idealmente as mesmas declaradas na matriz tese-fato-prova-norma-pedido). Cada simulação será avaliada contra essa lista.

## As cinco simulações

Gerar, a partir da peça (otimizada ou em otimização), cinco resumos independentes:

1. **Resumo neutro.** Leitura integral e equilibrada, sem viés inicial. Mede a captura natural das teses.
2. **Resumo de leitura apressada de gabinete.** Lê apenas títulos, primeira e última frase de cada seção, e boxes. Ignora o miolo. Mede a sobrevivência à compressão por bordas.
3. **Resumo com viés acusatório inicial.** Parte da premissa da denúncia. Mede se o frame defensivo resiste a um leitor predisposto contra a defesa.
4. **Resumo por capítulos isolados.** Resume cada capítulo separadamente, como em pipeline de segmentação. Mede a completude local: cada capítulo precisa carregar tese, prova e consequência por si só.
5. **Resumo final de até 10 linhas.** Compressão máxima. Mede o que sobra quando quase tudo é descartado.

## Avaliação

Para cada simulação, registrar:
- quais teses centrais sobreviveram;
- onde cada tese sumiu, perdeu força ou foi deformada;
- se alguma objeção ficou aberta (sinal de pré-refutação ausente ou mal posicionada);
- se o constituinte apareceu associado aos verbos da conduta.

## Critérios de reprovação

Reprovar a versão e reescrever se ocorrer qualquer um:
- tese central ausente em duas ou mais das cinco simulações;
- pedido sem vínculo explícito com a fundamentação em qualquer simulação;
- capítulo que, isolado (simulação 4), fique sem prova ou fonte;
- excesso de negações sem descrição afirmativa dos fatos;
- fato relevante desfavorável omitido;
- jurisprudência ou precedente não confirmado;
- linguagem genérica que impeça verificação.

## Iteração

Reescrever a peça e repetir a bateria até que nenhuma tese central desapareça em mais de uma simulação. Registrar quantas rodadas foram necessárias.

## Formato de saída

> ## Teste de Sumarização: [peça]
>
> **Teses centrais monitoradas**: [lista]
>
> **Simulação 1 (neutro)**: [resumo] | sobreviveram: [...] | perdas: [...]
> **Simulação 2 (gabinete apressado)**: [resumo] | sobreviveram: [...] | perdas: [...]
> **Simulação 3 (viés acusatório)**: [resumo] | sobreviveram: [...] | perdas: [...]
> **Simulação 4 (capítulos isolados)**: [resumo por capítulo] | lacunas locais: [...]
> **Simulação 5 (10 linhas)**: [resumo] | sobreviveram: [...]
>
> **Objeções deixadas em aberto**: [lista ou nenhuma]
> **Associações lexicais de risco**: [constituinte+verbo, termos da narrativa incriminadora repetidos]
>
> **Veredito**: [APROVADA / REPROVADA, com o critério de reprovação acionado]
> **Correção prioritária**: [intervenção de maior impacto antes da próxima rodada]

---

## Harness reprodutível (sem software de terceiro)

O harness é o conjunto fixo dos cinco prompts de resumo acima, aplicados em qualquer LLM que você já utiliza no fluxo, sem nenhuma ferramenta externa. O registro do resultado é autocontido: um arquivo próprio, que você controla (planilha local ou tabela em texto), com uma linha por peça testada. Nada de banco de dados de terceiro, nuvem ou conector.

Template de registro em formato aberto (copiar para a sua planilha ou manter como tabela):

| Peça (id/data) | Teses monitoradas | Sobreviveu (S1·S2·S3·S4·S5) | Objeções abertas | Veredito | Rodadas | Observação |
|---|---|---|---|---|---|---|
| [ex.: memorial Eduardo, 2026-06-14] | T1, T2, T3 | S·S·N·S·S | nenhuma | aprovada | 2 | tese T3 sumiu na S3 até reforço no frame |

Finalidade empírica: com o acúmulo de algumas dezenas de linhas, esse registro vira evidência própria sobre o que funciona no seu nicho real (tráfico, cadeia de custódia, prova oral), e não opinião genérica de doutrina. É prova empírica gerada por você, auditável e independente de qualquer fornecedor. Recomenda-se anotar, na coluna observação, qual estratégia recuperou a tese que havia sumido, para consolidar o aprendizado entre casos.
