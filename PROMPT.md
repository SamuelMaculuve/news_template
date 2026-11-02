# Prompt — Clonar templates de sites de notícias em HTML + Tailwind

## Papel
És um front-end developer sénior especializado em Tailwind CSS. Recebes capturas de ecrã (template 1–8 em `~/Downloads/news`) de layouts de portais de notícias e blogs e recrias cada um como uma página HTML estática fiel ao design.

## Objetivo
Para cada imagem, produzir **um ficheiro `.html` independente** que reproduza o layout, a hierarquia visual, o espaçamento, a tipografia e a paleta de cores da captura, o mais próximo possível do original.

## Requisitos técnicos
1. **HTML5 + Tailwind CSS via CDN** (`https://cdn.tailwindcss.com/3.4.16`), com `tailwind.config` inline para cores de marca e fontes.
2. **Fontes do Google Fonts** escolhidas para aproximar a tipografia de cada template (serif editorial, grotesca, display condensada, etc.).
3. **Imagens de Moçambique** com licença livre do Wikimedia Commons (Maputo, ponte Maputo–Katembe, CFM, Ilha de Moçambique, Beira, agricultura, caju, hóquei em patins, futebol de praia), servidas por `Special:FilePath` através do ficheiro partilhado `mz.js` (`<img data-mz="chave">`). Se uma foto falhar, aparece um cartão nas cores da bandeira. Avatares = iniciais geradas em SVG.
4. **Responsivo**: desktop igual à captura; em mobile, as grelhas colapsam para 1–2 colunas, o menu passa a hambúrguer e não há scroll horizontal.
5. **Ícones** em SVG inline (sem bibliotecas externas).
6. Blocos repetidos (cards, listas) gerados com um pequeno `<script>` a partir de um array de dados, para manter o código limpo e editável.
7. **"Ler mais" → "Brevemente"**: qualquer clique em "Ler mais", "Continuar a ler", "Saber mais" ou num cartão de notícia mostra um aviso "Brevemente — este artigo estará disponível em breve" (definido em `mz.js`).
8. Interações mínimas: menu mobile, abas/filtros com estado ativo e botão "voltar ao topo" quando existe no design.

## Regras de conteúdo
- Os textos são **fictícios, em português e no contexto de Moçambique** (províncias, cidades, Moçambola, caju, CFM, Ilha de Moçambique…). Não copiar manchetes reais nem atribuir declarações a pessoas reais; jornalistas e fontes são inventados.
- **Não usar logótipos nem nomes de marcas ou meios de comunicação reais** (BBC, CNN, Netflix, Rai, etc.). Substituí-los por fontes fictícias ("Diário Norte", "Rádio Costa"…).
- Quando o template imita um órgão real, renomeá-lo com um nome fictício; os nomes de template genéricos (Buletin, Blogjar, NewsPrk, NewsHub) podem manter-se.

## Mapeamento por template
| Ficheiro | Estilo-chave a reproduzir |
|---|---|
| template-1.html | "Buletin": branco, acento vermelho, títulos serif; destaque, Latest News 4 colunas, stories circulares, Must Read em mosaico, Editor's Pick com hero, Business/Sport, criadores, newsletter e rodapé com 8 colunas |
| template-2.html | Portal governamental fictício: barra com data e clima, nav sublinhada, breaking news, "FEATURED NEWS" condensado, carrossel + painel escuro de "hoaxes", abas Latest/Press/News, cards de imagem, popular, vídeo, faixa social escura |
| template-3.html | App de desporto: sidebar de filtros (chips, tags, período, formato), grelha 2×2 de publicações com autor, badge e métricas; mobile com barra inferior |
| template-5.html | "Blogjar": hero com gradiente pastel, 4 imagens, Trending Blogs em masonry + sidebar (perfil, posts recentes, promo, tags), newsletter, rodapé com Instagram |
| template-6.html | "NewsPrk": topbar preta, acento laranja, hero com carrossel, secções Business / World / Technology / Security, rodapé preto arredondado |
| template-7.html | "News 24" fictício: banner laranja "ALL NEWS", chips de filtro, grelha 3×5 de cards, banner ilustrado, contactos, newsletter laranja, rodapé de 6 colunas |
| template-8.html | "NewsHub": navbar preta, ticker de última hora, hero com card sobreposto, Latest News, Must Read, Weekly Highlight, Top Creator, rodapé cinza |

| template-9.html | **Proposta original "Maré"**: mobile-first, faixa com padrão de capulana, barra das 10 províncias (norte→sul) que filtra o feed, "Em 1 minuto", fotos dos leitores em carrossel, opinião, WhatsApp e barra inferior estilo app |
| template-10.html | "O Digital": barra com data/clima/redes, logótipo serif, nav com casa vermelha, faixa "Última hora", destaque grande + 3 laterais, Destaques 4 colunas + caixa Newsletter escura, Opinião / Grande Reportagem / Mais lidas numeradas |

## Critérios de aceitação
- Abrir cada ficheiro no navegador e comparar lado a lado com a captura: mesma ordem de secções, colunas, proporções e cores.
- Sem erros na consola; sem scroll horizontal a 375 px; em telemóvel há sempre um botão ☰ que abre o menu.
- Um `index.html` com links para todas as páginas.
