# Posts (identidade do site)

Dez posts que alternam slides gráficos (laranja, azul e creme) e slides com foto mostrando sites reais de clientes e modelos da OctoMaker. Cada pasta tem a sua `legenda.txt`.

| Pasta | Formato | Gancho |
|---|---|---|
| 01 - Seu cliente te avalia | carrossel, 5 | “Seu cliente te avalia antes de chamar.” |
| 02 - O momento certo nao existe | carrossel, 4 | “O momento certo não existe.” |
| 03 - Feitos por encomenda | carrossel, 5 | portfólio com clientes reais |
| 04 - Como eu faco o seu site | carrossel, 6 | o processo em 4 etapas |
| 05 - Prazer, OctoMaker | carrossel, 5 | apresentação (fixar) |
| 06 - Chega de explicar por mensagem | carrossel, 4 | “Chega de explicar tudo por mensagem.” |
| 07 - Site e caro | carrossel, 4 | “Site é caro?” |
| 08 - Checklist | post | “Seu site tem tudo isso?” |
| 09 - Link na bio | post | “Lista de links ou site próprio?” |
| 10 - WhatsApp com mensagem pronta | post | “Cada botão já manda a mensagem pronta.” |
| 11 - Capas dos destaques | 5 imagens 1080×1920 | Sobre, Projetos, Como funciona, Orçamento, Contato |

Ordem sugerida (a mais antiga primeiro): 05, 03, 08, 01, 06, 09, 02, 07, 10, 04.
Fixe no perfil: 05 (apresentação), 03 (portfólio) e 04 (como funciona).

Fotos: Unsplash (licença gratuita, uso comercial permitido). Telas: sites reais dos clientes e modelos da OctoMaker.
Fontes: `../_fontes/feed-final.tpl.html` (modelos de slide) e `../_fontes/feed-final.posts.js` (textos). Para gerar de novo, com o site servido na porta 8765, monte o `feed-final.html` trocando `/*OCTOFN*/` e `/*POSTS*/` no modelo, e rode:
`node render-feed.mjs http://localhost:8765/instagram/_fontes/feed-final.html "../Posts"`
