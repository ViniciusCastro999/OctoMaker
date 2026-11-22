(() => {
const SYMI = `<svg viewBox="0 0 40 40"><path d="M7 22A13 13 0 0 1 33 22V24H7Z" fill="#04141E"/><circle cx="15" cy="17" r="2.4" fill="#FF6D04"/><circle cx="25" cy="17" r="2.4" fill="#FF6D04"/><g fill="none" stroke="#04141E" stroke-width="3.6" stroke-linecap="round"><path d="M10 27Q10 35 5 35"/><path d="M17 27V36"/><path d="M23 27V36"/><path d="M30 27Q30 35 35 35"/></g></svg>`;
const TH = s => `../../portfolio/thumbs/${s}-full.jpg`, MO = s => `telas-humano/${s}-0.jpg`;
return [
{ folder: '01 - Seu cliente te avalia (carrossel)', slides: [
  { type: 'phone', bg: 'orange', title: 'Seu|cliente|te avalia|*antes* de|chamar.', img: MO('odonto'), sticker: '👀 0,05s pra decidir' },
  { type: 'photoDesk', bg: 'navy', title: 'Antes de te|chamar, ele|vê [isso.]', img: TH('imobiliaria') },
  { type: 'text', bg: 'navy', title: 'A primeira|impressão|de um site|leva [0,05s.]', size: 100, body: 'Antes de ler qualquer coisa, a pessoa já sentiu <strong>se o seu negócio é sério.</strong>', bodyTop: 690, source: 'Fonte: Lindgaard et al., 2006, Behaviour &amp; Information Technology.', sourceTop: 840, peek: { browser: TH('cafeteria'), url: 'grao.com.br', top: 960, tag: '0,05s' } },
  { type: 'photoHand', bg: 'light', title: 'Ele procura|seu nome e|[encontra isso.]', size: 72, img: MO('cafe') },
  { type: 'cta', bg: 'orange', title: 'O que ele|*encontra*|quando te|procura?', size: 104, top: 230, body: 'Eu faço sites que mostram o seu trabalho do jeito que ele merece.', bodyTop: 690, btnTop: 880, peek: { phones: [MO('academia'), MO('odonto'), MO('imobiliaria')], top: 1060 } },
]},
{ folder: '02 - O momento certo nao existe (carrossel)', slides: [
  { type: 'navyOcto', bg: 'navy', title: 'O momento|certo não|[existe.]', img1: MO('academia'), url2: 'seunegocio.com.br', img2: TH('cafeteria'), labels: ',~mês que vem,,,,,~segunda-feira,!hoje' },
  { type: 'strike', bg: 'orange', title: 'As desculpas|que eu *mais*|escuto:', items: ['mês que vem', 'depois das festas', 'quando sobrar grana', 'quando tiver fotos'], strikeColor: '#FFF4E2', listTop: 620, body: 'O site é o que traz os clientes. <strong>Não o contrário.</strong>', bodyTop: 1090 },
  { type: 'text', bg: 'light', title: 'Com o que|você *já tem,*|eu já começo.', size: 96, body: 'O que você faz, umas fotos do seu trabalho e como te chamar. <strong>Não precisa de foto de estúdio nem de texto pronto.</strong>', bodyTop: 640, peek: { chat: [['faço bolo caseiro 🎂', '10:02'], ['te mandei umas fotos', '10:03'], ['meu zap é esse aqui', '10:03'], ['Com isso eu já começo! 🐙', '10:05', true]], name: 'Ana · Bolos', top: 900, left: 330 } },
  { type: 'cta', bg: 'navy', title: 'O começo|é [hoje.]', size: 130, top: 280, body: 'Me manda <strong>SITE</strong> no direct que eu te explico como funciona.', bodyTop: 640, btnTop: 840, peek: { phones: [MO('hamburgueria'), MO('cafe'), MO('coloreouros')], top: 1040 } },
]},
{ folder: '03 - Feitos por encomenda (carrossel)', slides: [
  { type: 'wall', bg: 'navy', title: 'Feitos por|[encomenda.]', body: 'Nenhum site igual ao outro.', sticker: 'Clientes reais ↓',
    sites: [[TH('findbiz'), 'findbiz.com.br'], [TH('savioreisneuro'), 'savioreisneuro.com.br'], [TH('nutriligiarezende'), 'nutriligiarezende.com.br'], [TH('coloreouros'), 'coloreouros.com.br'], [TH('hamburgueria'), 'brasa'], [TH('odontologia'), 'lumi'], [TH('academia'), 'pulso'], [TH('advocacia'), 'pradoemartins'], [TH('imobiliaria'), 'horizonte'], [TH('cafeteria'), 'grao'], [TH('findbiz'), 'findbiz.com.br'], [TH('savioreisneuro'), 'savioreisneuro.com.br']] },
  { type: 'photoNote', bg: 'light', title: 'Um site que|leva o paciente|pra [consulta.]', size: 80, img: TH('savioreisneuro'), tag: 'Dr. Sávio Reis · Neurocirurgião' },
  { type: 'phone', bg: 'navy', title: 'Nutrição com|a cara da|[Lígia.]', size: 104, img: MO('ligia'), sticker: 'Lígia Rezende · Nutricionista', stickerLeft: 70, phoneLeft: 560, phoneTop: 560, phoneW: 420, rot: 8 },
  { type: 'photoTable', bg: 'light', title: 'E até|[sistemas,]|como a FindBiz.', img: TH('findbiz'), size: 80 },
  { type: 'cta', bg: 'light', title: 'O próximo|pode ser|o [seu.]', size: 116, top: 250, body: 'Me conta do seu negócio. <strong>A primeira conversa é sem compromisso.</strong>', bodyTop: 660, btnTop: 860, peek: { phones: [MO('savio'), MO('ligia'), MO('coloreouros')], top: 1050 } },
]},
{ folder: '04 - Como eu faco o seu site (carrossel)', slides: [
  { type: 'text', bg: 'orange', title: 'Site|bonito não|[basta.]', size: 124, top: 220, body: 'É o processo que faz ele <strong>funcionar de verdade.</strong> As 6 etapas de como a gente monta um site do zero →', bodyTop: 680, peek: { mock: 'ui', url: 'terraviva.com.br', top: 960, tag: 'salva 📌' } },
  { type: 'number', bg: 'navy', n: '01', title: 'Briefing e|[alinhamento.]', size: 86, body: 'Antes de qualquer criação, a gente entende o seu negócio: <strong>público, diferencial e objetivo do site.</strong><span class="nt">Sem esse passo, qualquer ideia vira um tiro no escuro.</span>', bodyTop: 700, peek: { chat: [['Quero um site pra minha loja de plantas 🌿', '09:12'], ['Bora! Quem é o seu cliente?', '09:14', true], ['Gente que quer a casa mais verde, mas não sabe por onde começar', '09:16']], name: 'Terra Viva', top: 950 } },
  { type: 'number', bg: 'light', n: '02', title: '[Estrutura]|por blocos.', size: 86, body: 'Antes de deixar bonito, montamos o site em blocos: <strong>o que entra, em que ordem e como navegar.</strong><span class="nt">Isso facilita o design e a programação depois.</span>', bodyTop: 700, peek: { mock: 'wire', url: 'rascunho · estrutura', top: 990, rot: 2 } },
  { type: 'number', bg: 'orange', n: '03', title: 'Identidade|*visual.*', size: 92, body: 'Usamos a sua identidade ou o <strong>nosso time de designers cria uma nova,</strong> com cores, fontes e imagens pensadas pra web.<span class="nt">Aqui o site ganha cor e intenção.</span>', bodyTop: 700, peek: { mock: 'brand', url: 'identidade · terra viva', top: 990, rot: -2 } },
  { type: 'number', bg: 'navy', n: '04', title: 'Design e|[aprovação.]', size: 92, body: 'Você vê o layout completo, página por página, e <strong>pede os ajustes que quiser.</strong><span class="nt">Nada é programado sem o seu ok.</span>', bodyTop: 700, peek: { mock: 'ui', url: 'terraviva.com.br', top: 920, tag: 'Aprovado ✓' } },
  { type: 'number', bg: 'light', n: '05', title: '[Programação.]', size: 92, top: 500, body: 'Com o layout aprovado, nossos programadores partem pra parte técnica, <strong>respeitando o que foi planejado.</strong><span class="nt">É onde tudo ganha vida e funciona de verdade.</span>', bodyTop: 640, peek: { mock: 'code', url: 'terraviva.com.br · código', top: 900, rot: 3 } },
  { type: 'number', bg: 'navy', n: '06', title: 'No ar e em|[manutenção.]', size: 88, body: 'Site no ar não é o fim. A OctoMaker segue cuidando de <strong>velocidade, versão pro celular, melhorias e ajustes.</strong>', bodyTop: 700, peek: { mock: 'check', url: 'terraviva.com.br', top: 900 } },
  { type: 'cta', bg: 'orange', title: 'Seu site com|*processo,* não|no [improviso.]', size: 86, top: 260, body: 'Manda <strong>SITE</strong> no direct que a gente te explica como funciona.', bodyTop: 720, btnTop: 900, peek: { chat: [['Oi! Vi o post e quero um site 🙂', '10:02'], ['Bora! Me conta do seu negócio?', '10:03', true]], name: 'Você', top: 1070, rot: 4 } },
]},
{ folder: '05 - Prazer, OctoMaker (carrossel, fixar)', slides: [
  { type: 'text', bg: 'orange', title: 'Prazer,|*OctoMaker.*', size: 118, top: 230, body: 'Sites, sistemas e aplicativos <strong>por encomenda. Do seu jeito.</strong>', bodyTop: 560, peek: { phones: [MO('savio'), MO('odonto'), MO('hamburgueria')], top: 820 } },
  { type: 'list', bg: 'navy', title: 'O que eu|[faço:]', items: ['Sites e landing pages::pra apresentar o seu trabalho', 'Sistemas web::painéis, agendamentos, áreas de cliente', 'Aplicativos::pra Android e iPhone', '!Manutenção::depois que vai pro ar'], listTop: 520 },
  { type: 'photoMan', bg: 'navy', title: 'Do site simples|ao *sistema*|[completo.]', size: 84, top: 880, img: '../../portfolio/thumbs/findbiz-full.jpg' },
  { type: 'list', bg: 'light', title: 'Como eu|*trabalho:*', items: ['Tudo pelo WhatsApp', 'Você aprova antes de eu programar', 'Atendo todo o Brasil', 'Cuido do site depois da entrega'], check: true, listTop: 500 },
  { type: 'cta', bg: 'navy', title: 'Vamos fazer|o [seu?]', size: 120, top: 280, body: 'A primeira conversa é <strong>sem compromisso.</strong>', bodyTop: 640, btnTop: 800, peek: { phones: [MO('ligia'), MO('academia'), MO('imobiliaria')], top: 1020 } },
]},
{ folder: '06 - Chega de explicar por mensagem (carrossel)', slides: [
  { type: 'phone', bg: 'orange', title: 'Chega de|explicar|tudo por|*mensagem.*', size: 104, phoneLeft: 600, phoneTop: 720, phoneW: 400, rot: 8,
    html: CHAT('Cliente novo', [['oi, boa tarde', '14:02'], ['quanto custa?', '14:02'], ['atende sábado?', '14:03'], ['tem foto dos trabalhos?', '14:03'], ['onde fica?', '14:05'], ['aceita cartão?', '14:05'], ['oi??', '14:11']]), sticker: '47ª vez hoje…', stickerLeft: 70 },
  { type: 'list', bg: 'light', title: 'As perguntas|de [todo dia:]', items: ['Quanto custa?', 'Atende sábado?', 'Tem foto do trabalho?', 'Onde fica? Aceita cartão?'], listTop: 560, body: 'Tudo isso cabe <strong>num link só.</strong>', bodyTop: 1150 },
  { type: 'photoDark', bg: 'navy', title: 'Um link que|responde [tudo.]', img: MO('advocacia') },
  { type: 'cta', bg: 'orange', title: 'Seu WhatsApp|é pra *fechar|negócio.*', size: 100, top: 240, body: 'Eu monto o site com tudo o que o seu cliente pergunta. <strong>Você só manda o link.</strong>', bodyTop: 660, btnTop: 870, peek: { phones: [MO('cafe'), MO('ligia'), MO('odonto')], top: 1060 } },
]},
{ folder: '07 - Site e caro (carrossel)', slides: [
  { type: 'text', bg: 'navy', title: 'Site é|[caro?]', size: 190, top: 230, body: 'Depende do que você <strong>compara.</strong> Arrasta →', bodyTop: 680, peek: { browser: TH('hamburgueria'), url: 'brasa.com.br', top: 860, tag: 'no ar 24h' } },
  { type: 'list', bg: 'light', title: 'Onde o seu|dinheiro fica|[trabalhando?]', size: 84, items: ['Panfleto::vai pro lixo em dois minutos', 'Anúncio::para quando o dinheiro acaba', '!Site::fica no ar todo dia, 24 horas'], listTop: 600, body: 'Só um deles continua trabalhando <strong>enquanto você dorme.</strong>', bodyTop: 1130 },
  { type: 'list', bg: 'orange', title: 'Faz essa|conta *comigo:*', items: ['1 cliente novo vale::R$ 300 (exemplo)', 'O site traz por mês::2 clientes', '!Em um ano::R$ 7.200'], listTop: 520, body: 'Números de exemplo. <strong>Troca pelos seus.</strong>', bodyTop: 1160 },
  { type: 'cta', bg: 'navy', title: 'Caro é o|cliente que|[não te achou.]', size: 96, top: 250, body: 'Me pede um orçamento <strong>sem compromisso.</strong>', bodyTop: 680, btnTop: 840, btn: 'Pedir orçamento', peek: { phones: [MO('coloreouros'), MO('savio'), MO('imobiliaria')], top: 1050 } },
]},
{ folder: '08 - Checklist (post)', slides: [
  { type: 'list', bg: 'navy', title: 'Seu primeiro|site precisa|[ter isso:]', size: 86, top: 180, check: true, items: ['Botão de WhatsApp', 'Funciona bem no celular', 'Seus serviços explicados', 'Fotos do seu trabalho', 'Endereço e horários'], listTop: 490, body: 'Salva pra quando <strong>for fazer o seu.</strong>', bodyTop: 1240 },
]},
{ folder: '09 - Link na bio (post)', slides: [
  { type: 'photoDark', bg: 'navy', title: 'Lista de links|ou [site próprio?]', size: 80, img: MO('savio') },
]},
{ folder: '10 - WhatsApp com mensagem pronta (post)', slides: [
  { type: 'phone', bg: 'navy', title: 'Cada botão|já manda a|*mensagem*|[pronta.]', size: 90, phoneLeft: 580, phoneTop: 620, phoneW: 400, rot: 8,
    html: CHAT('Sua empresa', [['Olá! Vi o seu site e quero agendar um horário.', '09:41', true]], 'Olá! Vi o seu site…'), sticker: 'O cliente só aperta enviar', stickerLeft: 70 },
]},
{ folder: '11 - Capas dos destaques', hl: [
  ['1 - Sobre', SYMI, '#FF6D04'],
  ['2 - Projetos', `<svg viewBox="0 0 24 24" fill="none" stroke="#04141E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="15" rx="2.5"/><path d="M3 8.5h18"/><circle cx="6" cy="6.3" r=".6" fill="#04141E"/><circle cx="8.2" cy="6.3" r=".6" fill="#04141E"/></svg>`, '#64DBE8'],
  ['3 - Como funciona', `<svg viewBox="0 0 24 24" fill="none" stroke="#04141E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h10M4 12h16M4 18h7"/><circle cx="18" cy="6" r="2"/><circle cx="15" cy="18" r="2"/></svg>`, '#FFF4E2'],
  ['4 - Orcamento', `<svg viewBox="0 0 24 24" fill="none" stroke="#04141E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>`, '#FF6D04'],
  ['5 - Contato', `<svg viewBox="0 0 24 24" fill="none" stroke="#04141E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.6-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z" fill="#04141E" stroke="none"/></svg>`, '#64DBE8'],
]},
{ folder: '13 - Seu trabalho e bom (carrossel)', slides: [
  { type: 'photoLaptop', bg: 'navy', screen: '<div class="l1">Seu trabalho<br>é bom.</div><div class="l2">Seu site<br><em>mostra isso?</em></div>' },
  { type: 'inset', bg: 'light', title: 'O site é a|sua *fachada*|na internet.', size: 96, top: 220, imgTop: 660, photo: 'photo-1775743093104-d8e53e5ed250', body: 'É ele que mostra <strong>o nível do seu negócio</strong> antes mesmo de você falar qualquer coisa.', bodyTop: 690 },
  { type: 'text', bg: 'navy', title: 'Quando a sua|presença online|*não acompanha*|o que você|entrega,', size: 84, top: 330, body: 'você perde autoridade e <strong>os clientes que buscam confiança.</strong>', bodyTop: 930, bodyRight: 70, bodySize: 58 },
  { type: 'manifesto', bg: 'navy', body: 'Por isso, cada projeto da OctoMaker começa entendendo <strong>o seu negócio, o seu diferencial e o seu cliente</strong> antes de qualquer layout.', top: 250, lineTop: 700, lineH: 150, box: '<small>O resultado é um site</small>com a <em>sua cara,</em> que mostra o seu valor.' },
  { type: 'cta', bg: 'orange', title: 'Site não é sobre|o que você vê.|É sobre o que|o cliente [sente.]', size: 90, top: 330, body: 'Manda <strong>SITE</strong> no direct e vamos mostrar o nível do seu trabalho.', bodyTop: 860, btnTop: 1060 },
]},
];
})()