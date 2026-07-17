# Mecânica de Leitura Algorítmica: o que a pesquisa sustenta

Documento de fundamentação. Leia para ter critério ao decidir entre regras concorrentes e ao calibrar a intensidade de uma intervenção. Esta versão substitui afirmações categóricas do texto-base por achados verificáveis. O princípio orientador: não existe atalho mental secreto do tribunal nem dicionário de palavras mágicas. Existe um conjunto sóbrio de fatores que aumentam a probabilidade de a tese defensiva ser capturada com fidelidade e permanecer saliente sob compressão.

## Premissa correta (e seus limites)

A peça tem dois leitores plausíveis: o humano e o algorítmico. Isso é fato institucional, não hipótese acadêmica. No STJ, o Logos gera relatório, analisa admissibilidade de AREsp e exibe a lista de argumentos da petição. O que a pesquisa NÃO autoriza é fabricar um resumo artificialmente pró-defesa por truque oculto. O objetivo legítimo é outro: maximizar saliência, completude local e rastreabilidade da defesa, de modo que as teses sejam difíceis de omitir ou distorcer.

## Correções a afirmações comuns

**"Token equivale a cerca de 70% de uma palavra".** Regra de bolso do inglês, não do português jurídico. A própria documentação dos fornecedores ressalva que um token pode ser tão curto quanto um caractere ou tão longo quanto uma palavra, e que a tokenização varia com idioma e contexto. Use a formulação correta: modelos processam subunidades de texto, não palavras jurídicas como o humano as vê. Abandone proporções rígidas.

**"Ao resumir, o modelo não relê, apenas consulta uma representação latente já formada".** Categórico demais. Pode aproximar alguns cenários, mas não descreve de forma confiável todos os pipelines. Documentos longos são frequentemente tratados por segmentação e sumarização em múltiplas etapas (frameworks como o SummN). Em ambiente judicial, sistemas como o Logos operam por funcionalidades e consultas diversas sobre o processo, sem forma pública única de sumarização. Conclusão forense, não metafísica: você não sabe exatamente como a ferramenta lerá a peça, logo escreva para múltiplos percursos de leitura.

**"Certas substituições lexicais deslocam o documento para região semântica mais favorável".** Hipótese plausível, não fórmula demonstrada. A evidência mostra sensibilidade a formulação (wording), saliência de entidades e dificuldade dos modelos com negação, mas não oferece mapa universal e validado de palavras humanizadoras. O que se recomenda é sóbrio: nomear claramente o sujeito, evitar repetição desnecessária da narrativa incriminadora, formular teses em termos afirmativos e ancorar cada afirmação relevante em fato e fonte. Trate isso como higiene de redação, não como engenharia vetorial.

## Os seis fatores robustos

Em ordem de solidez do respaldo:

1. **Estrutura documental explícita.** Modelos para documentos longos capturam estrutura (títulos de seção, parágrafos), e a infusão dessa estrutura melhora tarefas posteriores. Peças em unidades reconhecíveis (tese, fato, prova, norma, objeção, resposta, pedido) são mais bem processadas.

2. **Organização por papéis argumentativos.** Incorporar papéis argumentativos melhora a sumarização de opiniões jurídicas longas frente a baselines fortes. Cada bloco deve deixar claro qual papel cumpre.

3. **Redundância semântica controlada.** O fenômeno lost in the middle (queda de desempenho quando a informação relevante está no centro) justifica não deixar a tese dispositiva aparecer uma única vez no meio. Ela reaparece na abertura, na conclusão e no fechamento de cada capítulo relevante. Atenção: isto não é lei mecânica aplicável a todo pipeline; é razão para redundância, não para polarizar tudo em dois extremos.

4. **Ancoragem em fatos e fontes verificáveis.** Recuperar entidades salientes (nome do constituinte, fato decisivo, prova-chave, evento, pedido principal) é central para sumarização controlável e reduz alucinação de entidade. Nomear bem o que não pode desaparecer é mais eficaz que adjetivar.

5. **Formulações afirmativas quando a negação gera ambiguidade.** Modelos têm dificuldade com negação; há melhora quando o conteúdo é parafraseado em termos afirmativos. Descrever positivamente o ocorrido tende a sobreviver melhor que a negação pura.

6. **Validação por múltiplas simulações de resumo.** Modelos são sensíveis a prompt e a pequenas variações de formulação (documentado em trabalhos como ProSA e POSIX). Não há resumo único garantido. Por isso a peça deve ser testada contra vários resumos simulados, e não contra um só.

## Implicação central de engenharia textual

Redija como se cada seção pudesse ser processada isoladamente e como se a peça inteira pudesse ser comprimida em mais de uma rodada. Cada capítulo deve ser uma minipeça localmente completa. O ganho real está menos em concentrar saliência no início e no fim e mais em construir redundância semântica controlada ao longo do texto, com cada bloco autossuficiente.

## O volume sabota os dois leitores

O efeito de soterramento não é só algorítmico. No leitor humano, sobrecarga informacional, fadiga decisória e pressão temporal empurram o julgador para atalhos cognitivos, impressões dominantes e ancoragens (Kahneman: sob excesso, o juízo intuitivo assume o comando). Volume de enchimento, portanto, reduz a reflexão em vez de ampliá-la, e ainda faz o julgador recair sobre a hipótese prévia dominante, que no penal costuma ser a acusatória. Logo, o limite de volume pela saliência protege simultaneamente a fidelidade do resumo algorítmico e a capacidade de reflexão do julgador humano. A dimensão defensiva disso está em `defesa-soberania-cognitiva.md`.

## Base de referência

A leitura algorítmica de julgados melhora em métricas automáticas com modelos generativos, mas convive com inconsistências e alucinações, o que sustenta a abordagem human-in-the-loop. Tudo nesta skill pressupõe que o resumo algorítmico é insumo, nunca substituto do contraditório humano, e que o ato jurisdicional permanece humano por exigência regulatória (ver `cnj-615-guardrails.md`).

Referências compiladas na pesquisa de base (a conferir na fonte primária antes de citar em peça): Liu et al. (lost in the middle); Deroy, Ghosh e Ghosh (sumarização de julgados); Elaraby, Zhong e Litman (papéis argumentativos); Buchmann et al. (estrutura documental); GUMsley (saliência de entidades); ProSA e POSIX (sensibilidade a prompt); SummN (sumarização de documentos longos em múltiplas etapas).
