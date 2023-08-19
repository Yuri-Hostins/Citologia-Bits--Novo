// selecionando todos os elementos necessários
const botaoComecar = document.querySelector(".botao-comecar button");
const caixaInformacao = document.querySelector(".caixa-informacao");
const botaoSair = caixaInformacao.querySelector(".botoes .sair");
const botaoContinuar = caixaInformacao.querySelector(".botoes .reiniciar");
const caixaQuiz = document.querySelector(".caixa-quiz");
const caixaResultado = document.querySelector(".caixa-resultado");
const listaOpcao = document.querySelector(".lista-opcao");
const linhaTempo = document.querySelector("header .linha-tempo");
const textoTempo = document.querySelector(".tempo .texto-esquerdo-tempo");
const contagemTempo = document.querySelector(".tempo .tempo-segundo");

// criando um array e passando o número, perguntas, opções e respostas
let perguntas = [
  {
    pergunta: "Qual é a função principal dos lisossomos na célula?",
    alternativaCerta: "Realizar a digestão intracelular",
    opcoes: [
      "Produzir ATP",
      "Sintetizar proteínas",
      "Realizar a digestão intracelular",
      "Fazer fotossíntese"
    ]
  },
  {
    pergunta: "Qual é o pH ácido encontrado nos lisossomos que contribui para a sua função digestiva?",
    alternativaCerta: "pH 4,5",
    opcoes: [
      "pH 2,0",
      "pH 5,5",
      "pH 7,0",
      "pH 4,5"
    ]
  },
  {
    pergunta: "Quais enzimas estão presentes nos lisossomos?",
    alternativaCerta: "Hidrolases",
    opcoes: [
      "Isomerases",
      "Lipases",
      "Hidrolases",
      "Quinases"
    ]
  },
  {
    pergunta: "Os lisossomos são organelas encontradas apenas em células animais?",
    alternativaCerta: "Sim, estão presentes apenas em células animais",
    opcoes: [
      "Sim, estão presentes apenas em células animais",
      "Não, estão presentes apenas em células vegetais",
      "Não, estão presentes apenas em células eucarióticas",
      "Não, estão presentes em células animais e vegetais"
    ]
  },
  {
    pergunta: "Qual é o processo pelo qual os lisossomos digerem partículas estranhas ou danificadas que foram fagocitadas pela célula?",
    alternativaCerta: "Fagocitose",
    opcoes: [
      "Fotossíntese",
      "Exocitose",
      "Endocitose",
      "Fagocitose"
    ]
  },
  {
    pergunta: "Os lisossomos são organelas membranosas?",
    alternativaCerta: "Sim, são organelas delimitadas por uma membrana simples",
    opcoes: [
      "Sim, são organelas delimitadas por uma membrana simples",
      "Não, não possuem membranas",
      "Sim, são organelas delimitadas por duas membranas",
      "Sim, são organelas delimitadas por uma membrana dupla"
    ]
  },
  {
    pergunta: "Qual é a origem dos lisossomos?",
    alternativaCerta: "São formados a partir do complexo de Golgi",
    opcoes: [
      "São formados a partir do núcleo",
      "São formados a partir do retículo endoplasmático",
      "São formados a partir dos ribossomos",
      "São formados a partir do complexo de Golgi"
    ]
  },
  {
    pergunta: "Qual é a importância dos lisossomos para a célula?",
    alternativaCerta: "Realizar a digestão intracelular, reciclar componentes celulares e degradar substâncias estranhas",
    opcoes: [
      "Produzir energia para a célula",
      "Realizar a fotossíntese",
      "Realizar a digestão intracelular, reciclar componentes celulares e degradar substâncias estranhas",
      "Produzir proteínas"
    ]
  },
  {
    pergunta: "Quais são as condições celulares que podem levar à liberação não controlada das enzimas lisossomais, causando danos às estruturas celulares?",
    alternativaCerta: "Lisossomopatias",
    opcoes: [
      "Endocitose",
      "Exocitose",
      "Lisossomopatias",
      "Autofagia"
    ]
  },
  {
    pergunta: "Em qual processo celular os lisossomos estão envolvidos na degradação de organelas celulares danificadas?",
    alternativaCerta: "Autofagia",
    opcoes: [
      "Fagocitose",
      "Exocitose",
      "Autofagia",
      "Endocitose"
    ]
  },
  {
    pergunta: "Qual é o nome dado ao processo pelo qual os lisossomos liberam suas enzimas para fora da célula?",
    alternativaCerta: "Exocitose",
    opcoes: [
      "Endocitose",
      "Autofagia",
      "Exocitose",
      "Fagocitose"
    ]
  },
  {
    pergunta: "Os lisossomos são organelas estáticas ou móveis dentro da célula?",
    alternativaCerta: "Móveis",
    opcoes: [
      "Estáticos",
      "Móveis",
      "Fixos",
      "Flutuantes"
    ]
  },
  {
    pergunta: "O que acontece com as enzimas lisossomais quando estão no interior dos lisossomos?",
    alternativaCerta: "Elas permanecem inativas e só se tornam ativas em ambiente ácido",
    opcoes: [
      "Elas são excretadas da célula",
      "Elas permanecem inativas e só se tornam ativas em ambiente alcalino",
      "Elas permanecem inativas e só se tornam ativas em ambiente ácido",
      "Elas são degradadas pelos ribossomos"
    ]
  },
  {
    pergunta: "Os lisossomos estão envolvidos no processo de autofagia, que é responsável por qual função celular?",
    alternativaCerta: "Degradar e reciclar componentes celulares",
    opcoes: [
      "Sintetizar proteínas",
      "Produzir energia",
      "Degradar e reciclar componentes celulares",
      "Realizar a fotossíntese"
    ]
  },
  {
    pergunta: "Quais substâncias são degradadas pelos lisossomos?",
    alternativaCerta: "Proteínas, lipídios, carboidratos e ácidos nucleicos",
    opcoes: [
      "Somente proteínas",
      "Proteínas e lipídios",
      "Proteínas e carboidratos",
      "Proteínas, lipídios, carboidratos e ácidos nucleicos"
    ]
  },
  {
    pergunta: "Quais organelas podem ser consideradas o oposto dos lisossomos, uma vez que têm função alcalina em oposição à função ácida dos lisossomos?",
    alternativaCerta: "Vacúolos",
    opcoes: [
      "Mitocôndrias",
      "Cloroplastos",
      "Complexo de Golgi",
      "Vacúolos"
    ]
  },
  {
    pergunta: "Qual é o nome dado ao processo pelo qual uma célula engloba partículas sólidas em vesículas que são direcionadas para os lisossomos para digestão?",
    alternativaCerta: "Fagocitose",
    opcoes: [
      "Endocitose",
      "Exocitose",
      "Fagocitose",
      "Autofagia"
    ]
  },
  {
    pergunta: "Quando ocorre o fenômeno de autofagia?",
    alternativaCerta: "Quando a célula precisa degradar componentes celulares danificados ou envelhecidos",
    opcoes: [
      "Quando a célula precisa degradar proteínas",
      "Quando a célula precisa sintetizar ATP",
      "Quando a célula realiza a fotossíntese",
      "Quando a célula precisa degradar componentes celulares danificados ou envelhecidos"
    ]
  },
  {
    pergunta: "Quais são os lisossomos que contêm enzimas para a digestão intracelular e os que contêm enzimas para a digestão extracelular?",
    alternativaCerta: "Lisossomos primários e lisossomos secundários, respectivamente",
    opcoes: [
      "Lisossomos primários e lisossomos terciários, respectivamente",
      "Lisossomos secundários e lisossomos terciários, respectivamente",
      "Lisossomos primários e lisossomos secundários, respectivamente",
      "Lisossomos terciários e lisossomos quaternários, respectivamente"
    ]
  },
  {
    pergunta: "Quais são os dois principais tipos de autofagia que podem ocorrer nas células?",
    alternativaCerta: "Macroautofagia e microautofagia",
    opcoes: [
      "Endocitose e exocitose",
      "Macroautofagia e microautofagia",
      "Fagocitose e autofagia",
      "Autofagia e exocitose"
    ]
  },
  {
    pergunta: "Quais são as consequências da falha na função dos lisossomos?",
    alternativaCerta: "Acúmulo de substâncias não digeridas, disfunção celular e doenças lisossômicas",
    opcoes: [
      "Produção excessiva de ATP",
      "Liberação não controlada das enzimas lisossomais",
      "Disfunção mitocondrial",
      "Acúmulo de substâncias não digeridas, disfunção celular e doenças lisossômicas"
    ]
  },
  {
    pergunta: "Em qual processo celular os lisossomos estão envolvidos na digestão de substâncias fagocitadas?",
    alternativaCerta: "Fagocitose",
    opcoes: [
      "Exocitose",
      "Autofagia",
      "Endocitose",
      "Fagocitose"
    ]
  },
  {
    pergunta: "Quais são as duas vias principais pelas quais as enzimas lisossomais são direcionadas para o interior dos lisossomos?",
    alternativaCerta: "Via de manose-6-fosfato e glicosilação",
    opcoes: [
      "Via de ubiquitinação e proteólise",
      "Via de manose-6-fosfato e glicosilação",
      "Via de clatrina e caveolina",
      "Via de endocitose e exocitose"
    ]
  },
  {
    pergunta: "Qual é o nome dado ao processo pelo qual os lisossomos digerem os materiais fagocitados?",
    alternativaCerta: "Fagolisossomo",
    opcoes: [
      "Mitolisossomo",
      "Autolisossomo",
      "Fagolisossomo",
      "Lisossomólise"
    ]
  },
  {
    pergunta: "Quais são as duas principais classes de doenças genéticas relacionadas aos lisossomos?",
    alternativaCerta: "Mucopolissacaridoses e doenças de depósito lisossômico",
    opcoes: [
      "Diabetes e hipertensão",
      "Mucopolissacaridoses e doenças de depósito lisossômico",
      "Câncer e doenças cardiovasculares",
      "Obesidade e doenças pulmonares"
    ]
  },
  {
    pergunta: "Qual é o nome dado ao processo pelo qual a célula engloba partículas líquidas em vesículas que são direcionadas para os lisossomos para digestão?",
    alternativaCerta: "Endocitose",
    opcoes: [
      "Fagocitose",
      "Exocitose",
      "Autofagia",
      "Endocitose"
    ]
  },
  {
    pergunta: "Quais doenças estão associadas à disfunção dos lisossomos?",
    alternativaCerta: "Doenças lisossômicas",
    opcoes: [
      "Doenças mitocondriais",
      "Doenças respiratórias",
      "Doenças metabólicas",
      "Doenças lisossômicas"
    ]
  },
  {
    pergunta: "Qual é a função dos lisossomos na autofagia?",
    alternativaCerta: "Degradar componentes celulares desgastados ou danificados",
    opcoes: [
      "Produzir energia",
      "Sintetizar proteínas",
      "Degradar componentes celulares desgastados ou danificados",
      "Realizar a fotossíntese"
    ]
  },
  {
    pergunta: "Qual é o nome dado ao processo pelo qual os lisossomos liberam suas enzimas para digerir partículas externas?",
    alternativaCerta: "Exocitose",
    opcoes: [
      "Endocitose",
      "Autofagia",
      "Exocitose",
      "Fagocitose"
    ]
  },
  {
    pergunta: "Qual é a importância do pH ácido dos lisossomos para a sua função digestiva?",
    alternativaCerta: "O pH ácido ativa as enzimas lisossomais, permitindo que elas degradem as substâncias internas",
    opcoes: [
      "O pH ácido neutraliza as enzimas lisossomais, prevenindo a digestão intracelular",
      "O pH ácido mantém os lisossomos em repouso",
      "O pH ácido desativa as enzimas lisossomais, permitindo a digestão extracelular",
      "O pH ácido é importante apenas para a digestão dos lisossomos em ambiente externo"
    ]
  },
  {
    pergunta: "Qual é o nome dado ao processo pelo qual os lisossomos são capazes de degradar e reciclar organelas celulares?",
    alternativaCerta: "Autofagia",
    opcoes: [
      "Fagocitose",
      "Exocitose",
      "Autofagia",
      "Endocitose"
    ]
  },
  {
    pergunta: "Qual é a origem dos lisossomos?",
    alternativaCerta: "São formados a partir do complexo de Golgi",
    opcoes: [
      "São formados a partir do núcleo",
      "São formados a partir do retículo endoplasmático",
      "São formados a partir dos ribossomos",
      "São formados a partir do complexo de Golgi"
    ]
  },
  {
    pergunta: "O que acontece com as enzimas lisossomais quando estão no interior dos lisossomos?",
    alternativaCerta: "Elas permanecem inativas e só se tornam ativas em ambiente ácido",
    opcoes: [
      "Elas são excretadas da célula",
      "Elas permanecem inativas e só se tornam ativas em ambiente alcalino",
      "Elas permanecem inativas e só se tornam ativas em ambiente ácido",
      "Elas são degradadas pelos ribossomos"
    ]
  },
  {
    pergunta: "Quais são as consequências da falha na função dos lisossomos?",
    alternativaCerta: "Acúmulo de substâncias não digeridas, disfunção celular e doenças lisossômicas",
    opcoes: [
      "Produção excessiva de ATP",
      "Liberação não controlada das enzimas lisossomais",
      "Disfunção mitocondrial",
      "Acúmulo de substâncias não digeridas, disfunção celular e doenças lisossômicas"
    ]
  },
  {
    pergunta: "Quais são os componentes principais dos lisossomos?",
    alternativaCerta: "Enzimas hidrolíticas e membrana",
    opcoes: [
      "DNA e ribossomos",
      "Lipídios e proteínas",
      "Água e sais minerais",
      "Enzimas hidrolíticas e membrana"
    ]
  },
  {
    pergunta: "Qual é o papel das enzimas hidrolíticas nos lisossomos?",
    alternativaCerta: "Digerir macromoléculas em componentes menores",
    opcoes: [
      "Produzir energia para a célula",
      "Sintetizar proteínas",
      "Armazenar nutrientes",
      "Digerir macromoléculas em componentes menores"
    ]
  },
  {
    pergunta: "Quando ocorre a autólise em relação aos lisossomos?",
    alternativaCerta: "Quando as enzimas lisossomais destroem os componentes celulares",
    opcoes: [
      "Durante a produção de ATP",
      "Quando ocorre a síntese de proteínas",
      "Durante a divisão celular",
      "Quando as enzimas lisossomais destroem os componentes celulares"
    ]
  },
  {
    pergunta: "Qual é o nome dado às doenças genéticas que afetam os lisossomos?",
    alternativaCerta: "Doenças lisossômicas",
    opcoes: [
      "Doenças mitocondriais",
      "Doenças genéticas",
      "Doenças autoimunes",
      "Doenças lisossômicas"
    ]
  },
  {
    pergunta: "Como os lisossomos se diferenciam dos peroxissomos?",
    alternativaCerta: "Lisossomos contêm enzimas digestivas, enquanto peroxissomos contêm enzimas oxidativas",
    opcoes: [
      "Lisossomos são encontrados apenas em células vegetais",
      "Lisossomos são organelas membranosas, enquanto peroxissomos não têm membranas",
      "Lisossomos contêm enzimas oxidativas, enquanto peroxissomos contêm enzimas digestivas",
      "Lisossomos são maiores do que peroxissomos"
    ]
  },
  {
    pergunta: "Qual é o destino das vesículas produzidas pelos complexos de Golgi que contêm enzimas lisossomais?",
    alternativaCerta: "Elas se fundem com lisossomos primários para formar lisossomos secundários",
    opcoes: [
      "Elas são liberadas para o citoplasma",
      "Elas se fundem com mitocôndrias",
      "Elas se fundem com núcleos celulares",
      "Elas se fundem com lisossomos primários para formar lisossomos secundários"
    ]
  },
  {
    pergunta: "Qual é o nome dado ao processo de formação de vesículas que contêm enzimas lisossomais no complexo de Golgi?",
    alternativaCerta: "Vesiculação",
    opcoes: [
      "Mitose",
      "Autofagia",
      "Fagocitose",
      "Vesiculação"
    ]
  },
  {
    pergunta: "Quais são os tipos de lisossomos baseados em sua origem e conteúdo?",
    alternativaCerta: "Lisossomos primários e lisossomos secundários",
    opcoes: [
      "Lisossomos primários e lisossomos terciários",
      "Lisossomos endocíticos e lisossomos exocíticos",
      "Lisossomos alfa e lisossomos beta",
      "Lisossomos primários e lisossomos secundários"
    ]
  },
  {
    pergunta: "Quais são os dois principais tipos de autofagia?",
    alternativaCerta: "Macroautofagia e microautofagia",
    opcoes: [
      "Endocitose e exocitose",
      "Macroautofagia e microautofagia",
      "Fagocitose e autofagia",
      "Autofagia e exocitose"
    ]
  },
  {
    pergunta: "Qual é o processo pelo qual as células removem componentes celulares danificados ou não funcionais?",
    alternativaCerta: "Autofagia",
    opcoes: [
      "Mitose",
      "Endocitose",
      "Fagocitose",
      "Autofagia"
    ]
  },
  {
    pergunta: "Quais são os eventos que ocorrem durante a fagocitose?",
    alternativaCerta: "Englobamento da partícula, formação de fagossomo e fusão com lisossomos",
    opcoes: [
      "Produção de ATP, síntese de proteínas e liberação de resíduos",
      "Divisão celular, formação de vacúolos e fusão de mitocôndrias",
      "Englobamento da partícula, formação de fagossomo e fusão com lisossomos",
      "Digestão de glicose, absorção de aminoácidos e liberação de oxigênio"
    ]
  },
  {
    pergunta: "Quais são os estágios da digestão intracelular realizados pelos lisossomos?",
    alternativaCerta: "Endocitose, formação de fagossomo, digestão e liberação de produtos",
    opcoes: [
      "Produção de ATP, síntese de proteínas, transporte e liberação",
      "Fotossíntese, formação de gás carbônico, absorção e liberação",
      "Mitose, divisão celular, degradação e absorção",
      "Endocitose, formação de fagossomo, digestão e liberação de produtos"
    ]
  },
  {
    pergunta: "Quais são as enzimas lisossomais responsáveis pela degradação de proteínas?",
    alternativaCerta: "Proteases",
    opcoes: [
      "Lipases",
      "Glicosidases",
      "Amilases",
      "Proteases"
    ]
  },
  {
    pergunta: "Qual é o destino dos produtos da digestão intracelular realizada pelos lisossomos?",
    alternativaCerta: "São liberados para o citoplasma e reutilizados",
    opcoes: [
      "São armazenados nos vacúolos",
      "São excretados da célula",
      "São transportados para o núcleo",
      "São liberados para o citoplasma e reutilizados"
    ]
  },
  {
    pergunta: "O que são as doenças de depósito lisossômico?",
    alternativaCerta: "Doenças causadas pelo acúmulo de substâncias não digeridas nos lisossomos",
    opcoes: [
      "Doenças causadas por excesso de mitocôndrias",
      "Doenças relacionadas ao colapso de membranas celulares",
      "Doenças que afetam os ribossomos",
      "Doenças causadas pelo acúmulo de substâncias não digeridas nos lisossomos"
    ]
  },
  {
    pergunta: "Qual é o processo pelo qual as células fagocitam partículas sólidas?",
    alternativaCerta: "Fagocitose",
    opcoes: [
      "Endocitose",
      "Exocitose",
      "Autofagia",
      "Fagocitose"
    ]
  },
  {
    pergunta: "Qual é a importância do pH ácido dos lisossomos?",
    alternativaCerta: "Ativar as enzimas lisossomais para a digestão intracelular",
    opcoes: [
      "Neutralizar as enzimas lisossomais",
      "Prevenir a entrada de substâncias",
      "Facilitar a síntese de proteínas",
      "Ativar as enzimas lisossomais para a digestão intracelular"
    ]
  },
  {
    pergunta: "Quais organelas são responsáveis pela digestão extracelular?",
    alternativaCerta: "Lisossomos",
    opcoes: [
      "Mitocôndrias",
      "Cloroplastos",
      "Complexo de Golgi",
      "Lisossomos"
    ]
  },
  {
    pergunta: "Quais são as duas principais classes de doenças genéticas relacionadas aos lisossomos?",
    alternativaCerta: "Mucopolissacaridoses e doenças de depósito lisossômico",
    opcoes: [
      "Diabetes e hipertensão",
      "Mucopolissacaridoses e doenças de depósito lisossômico",
      "Câncer e doenças cardiovasculares",
      "Obesidade e doenças pulmonares"
    ]
  },
  {
    pergunta: "Quais são as vias principais pelas quais as enzimas lisossomais são direcionadas para o interior dos lisossomos?",
    alternativaCerta: "Via de manose-6-fosfato e glicosilação",
    opcoes: [
      "Via de ubiquitinação e proteólise",
      "Via de manose-6-fosfato e glicosilação",
      "Via de clatrina e caveolina",
      "Via de endocitose e exocitose"
    ]
  },
];

// se o botão startQuiz for clicado
botaoComecar.onclick = () => {
  caixaInformacao.classList.add("informacaoAtivo"); // mostrar info box
};

// se o botão exitQuiz for clicado
botaoSair.onclick = () => {
  caixaInformacao.classList.remove("informacaoAtivo"); // esconder info box
};

// se o botão continueQuiz for clicado
botaoContinuar.onclick = () => {
  caixaInformacao.classList.remove("informacaoAtivo"); // esconder info box
  caixaQuiz.classList.add("quizAtivo"); // mostrar quiz box
  mostrarPerguntas(0); // chamando a função showperguntas
  contadorPerguntas(1); // passando 1 parâmetro para contadorPerguntas
  iniciarTempo(25); // chamando a função iniciarTempo
  iniciarLinhaTemporizador(0); // chamando a função iniciarLinhaTemporizador
};

let tempoValor = 25;
let contagemPerguntas = 0;
let numeroPerguntas = 1;
let pontoUsario = 0;
let contador;
let contadorLinha;
let valorLargura = 0;

const reinicioQuiz = caixaResultado.querySelector(".botoes .reiniciar");
const sairQuiz = caixaResultado.querySelector(".botoes .sair");

// se o botão restartQuiz for clicado
reinicioQuiz.onclick = () => {
  caixaQuiz.classList.add("quizAtivo"); // mostrar quiz box
  caixaResultado.classList.remove("resultadoAtivo"); // esconder result box
  tempoValor = 25;
  contagemPerguntas = 0;
  numeroPerguntas = 1;
  pontoUsario = 0;
  valorLargura = 0;
  mostrarPerguntas(contagemPerguntas); // chamando a função showperguntas
  contadorPerguntas(numeroPerguntas); // passando o valor numeroPerguntas para contadorPerguntas
  clearInterval(contador); // limpar contador
  clearInterval(contadorLinha); // limpar contadorLinha
  iniciarTempo(tempoValor); // chamando a função iniciarTempo
  iniciarLinhaTemporizador(valorLargura); // chamando a função iniciarLinhaTemporizador
  textoTempo.textContent = "Tempo Restante"; // alterar o texto de textoTempo para Tempo Restante
  botaoProximo.classList.remove("mostrar"); // esconder o botão next
};

// se o botão quitQuiz for clicado
sairQuiz.onclick = () => {
  window.location.reload(); // recarregar a página atual
};

const botaoProximo = document.querySelector(".footer-quiz .botao-proximo");
const contadorPerguntasInferior = document.querySelector(
  ".footer-quiz .perguntas-total"
);

// se o botão Next Que for clicado
botaoProximo.onclick = () => {
  if (contagemPerguntas < perguntas.length - 1) {
    // se o contador de perguntas for menor que o comprimento total das perguntas
    contagemPerguntas++; // incrementar o valor do contador de perguntas
    numeroPerguntas++; // incrementar o valor do contador de números das perguntas
    mostrarPerguntas(contagemPerguntas); // chamando a função showperguntas
    contadorPerguntas(numeroPerguntas); // passando o valor do contador de números das perguntas para contadorPerguntas
    clearInterval(contador); // limpar contador
    clearInterval(contadorLinha); // limpar contadorLinha
    iniciarTempo(tempoValor); // chamando a função iniciarTempo
    iniciarLinhaTemporizador(valorLargura); // chamando a função iniciarLinhaTemporizador
    textoTempo.textContent = "Tempo Restante"; // alterar o texto de textoTempo para Tempo Restante
    botaoProximo.classList.remove("mostrar"); // esconder o botão next
  } else {
    clearInterval(contador); // limpar contador
    clearInterval(contadorLinha); // limar contadorLinha
    mostrarResultado(); // chamando a função mostrarResultado
  }
};

// obtendo perguntas e opções do array
function mostrarPerguntas(index) {
  const textoPerguntas = document.querySelector(".texto-perguntas");

  // criando uma nova tag span e div para a pergunta e opção e passando o valor usando o índice do array
  let perguntasMarcada =
    "<span>" + (index + 1) + ". " + perguntas[index].pergunta + "</span>";
  let opcaoMarcada =
    '<div class="opcao"><span>' +
    perguntas[index].opcoes[0] +
    "</span></div>" +
    '<div class="opcao"><span>' +
    perguntas[index].opcoes[1] +
    "</span></div>" +
    '<div class="opcao"><span>' +
    perguntas[index].opcoes[2] +
    "</span></div>" +
    '<div class="opcao"><span>' +
    perguntas[index].opcoes[3] +
    "</span></div>";
  textoPerguntas.innerHTML = perguntasMarcada; // adicionando a nova tag span dentro de perguntasMarcada
  listaOpcao.innerHTML = opcaoMarcada; // adicionando a nova tag div dentro de opcaoMarcada

  const opcao = listaOpcao.querySelectorAll(".opcao");

  // definindo o atributo onclick para todas as opções disponíveis
  for (i = 0; i < opcao.length; i++) {
    opcao[i].setAttribute("onclick", "opcaoSelecionada(this)");
  }
}

// criando as novas tags div para os ícones
let iconeCerto =
  '<div class="icone marcacao"><i class="fas fa-check"></i></div>';
let iconeErrado =
  '<div class="icone cruzar"><i class="fas fa-times"></i></div>';

// se o usuário clicar em uma opção
function opcaoSelecionada(alternativaCerta) {
  clearInterval(contador); // limpar contador
  clearInterval(contadorLinha); // limpar contadorLinha
  let usarioResposta = alternativaCerta.textContent; // obtendo a opção selecionada pelo usuário
  let respostaCorreta = perguntas[contagemPerguntas].alternativaCerta; // obtendo a resposta correta do array
  const todasOpcoes = listaOpcao.children.length; // obtendo todos os itens de opção

  if (usarioResposta == respostaCorreta) {
    // se a opção selecionada pelo usuário for igual à resposta correta do array
    pontoUsario += 1; // incrementar o valor do pontoUsario em 1
    alternativaCerta.classList.add("correct"); // adicionar a cor verde à opção selecionada correta
    alternativaCerta.insertAdjacentHTML("beforeend", iconeCerto); // adicionar o ícone de marca de seleção à opção selecionada correta
    console.log("Resposta Correta");
    console.log("Suas respostas corretas = " + pontoUsario);
  } else {
    alternativaCerta.classList.add("incorrect"); // adicionar a cor vermelha à opção selecionada correta
    alternativaCerta.insertAdjacentHTML("beforeend", iconeErrado); // adicionar o ícone de cruz à opção selecionada correta
    console.log("Resposta Errada");

    for (i = 0; i < todasOpcoes; i++) {
      if (listaOpcao.children[i].textContent == respostaCorreta) {
        // se houver uma opção que corresponde à resposta do array
        listaOpcao.children[i].setAttribute("class", "opcao correct"); // adicionar a cor verde à opção correspondente
        listaOpcao.children[i].insertAdjacentHTML("beforeend", iconeCerto); // adicionar o ícone de marca de seleção à opção correspondente
        console.log("Resposta correta selecionada automaticamente.");
      }
    }
  }
  for (i = 0; i < todasOpcoes; i++) {
    listaOpcao.children[i].classList.add("disabled"); // uma vez que o usuário selecionou uma opção, desabilitar todas as opções
  }
  botaoProximo.classList.add("mostrar"); // mostrar o botão next se o usuário selecionar alguma opção
}

function mostrarResultado() {
  caixaInformacao.classList.remove("informacaoAtivo"); // esconder info box
  caixaQuiz.classList.remove("quizAtivo"); // esconder quiz box
  caixaResultado.classList.add("resultadoAtivo"); // mostrar result box
  const pontosTexto = caixaResultado.querySelector(".pontos-textos");
  if (pontoUsario > 3) {
    // se o usuário acertar mais de 3 perguntas
    // criando uma nova tag span e passando o número de pontos do usuário e o número total de perguntas
    let scoreTag =
      "<span>Parabéns! Você acertou <p>" +
      pontoUsario +
      "</p> de <p>" +
      perguntas.length +
      "</p></span>";
    pontosTexto.innerHTML = scoreTag; // adicionando a nova tag span dentro de pontosTexto
  } else if (pontoUsario > 1) {
    // se o usuário acertar mais de 1 pergunta
    let scoreTag =
      "<span>Legal! Você acertou <p>" +
      pontoUsario +
      "</p> de <p>" +
      perguntas.length +
      "</p></span>";
    pontosTexto.innerHTML = scoreTag;
  } else {
    // se o usuário acertar menos de 1 pergunta
    let scoreTag =
      "<span>Desculpe, você acertou apenas <p>" +
      pontoUsario +
      "</p> de <p>" +
      perguntas.length +
      "</p></span>";
    pontosTexto.innerHTML = scoreTag;
  }
}

function iniciarTempo(time) {
  contador = setInterval(timer, 1000);
  function timer() {
    contagemTempo.textContent = time; // alterando o valor de contagemTempo com o valor de tempo
    time--; // decrementando o valor do tempo
    if (time < 9) {
      // se o tempo for menor que 9
      let addZero = contagemTempo.textContent;
      contagemTempo.textContent = "0" + addZero; // adicionar um 0 antes do valor do tempo
    }
    if (time < 0) {
      // se o tempo for menor que 0
      clearInterval(contador); // limpar contador
      textoTempo.textContent = "Tempo Esgotado"; // alterar o texto de textoTempo para Tempo Esgotado
      const todasOpcoes = listaOpcao.children.length; // obtendo todos os itens de opção
      let respostaCorreta = perguntas[contagemPerguntas].alternativaCerta; // obtendo a resposta correta do array
      for (i = 0; i < todasOpcoes; i++) {
        if (listaOpcao.children[i].textContent == respostaCorreta) {
          // se houver uma opção que corresponde à resposta do array
          listaOpcao.children[i].setAttribute("class", "opcao correct"); // adicionar a cor verde à opção correspondente
          listaOpcao.children[i].insertAdjacentHTML("beforeend", iconeCerto); // adicionar o ícone de marca de seleção à opção correspondente
          console.log(
            "Tempo Esgotado: Resposta corretaselecionada automaticamente."
          );
        }
      }
      for (i = 0; i < todasOpcoes; i++) {
        listaOpcao.children[i].classList.add("disabled"); // uma vez que o usuário selecionou uma opção, desabilitar todas as opções
      }
      botaoProximo.classList.add("mostrar"); // mostrar o botão next se o usuário selecionar alguma opção
    }
  }
}

function iniciarLinhaTemporizador(time) {
  contadorLinha = setInterval(timer, 47);
  function timer() {
    time += 1; // incrementar o valor do tempo em 1
    linhaTempo.style.width = time + "px"; // aumentar a largura da linhaTempo com px pelo valor do tempo

    // Verificar a largura da tela
    if (window.innerWidth < 600) {
      clearInterval(contadorLinha); // Limpar contadorLinha
    }

    if (time > 549) {
      // se o valor do tempo for maior que 549
      clearInterval(contadorLinha); // limpar contadorLinha
    }
  }
}

// Função para embaralhar o array de perguntas
function shuffleperguntas(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Função para gerar um conjunto aleatório de perguntas do conjunto maior
function gerarPerguntasAleatorias() {
  shuffleperguntas(perguntas); // Embaralhar as perguntas
  return perguntas.slice(0, 10); // Selecionar as primeiras 10 perguntas
}

// se o botão continueQuiz for clicado
botaoContinuar.onclick = () => {
  caixaInformacao.classList.remove("informacaoAtivo"); // esconder info box
  caixaQuiz.classList.add("quizAtivo"); // mostrar quiz box
  perguntas = gerarPerguntasAleatorias(); // Gerar um conjunto aleatório de perguntas
  mostrarPerguntas(0); // chamando a função showperguntas
  contadorPerguntas(1); // passando 1 parâmetro para contadorPerguntas
  iniciarTempo(25); // chamando a função iniciarTempo
  iniciarLinhaTemporizador(0); // chamando a função iniciarLinhaTemporizador
};

// se o botão restartQuiz for clicado
reinicioQuiz.onclick = () => {
  caixaQuiz.classList.add("quizAtivo"); // mostrar quiz box
  caixaResultado.classList.remove("resultadoAtivo"); // esconder result box
  tempoValor = 25;
  contagemPerguntas = 0;
  numeroPerguntas = 1;
  pontoUsario = 0;
  valorLargura = 0;
  perguntas = gerarPerguntasAleatorias(); // Gerar um conjunto aleatório de perguntas
  mostrarPerguntas(contagemPerguntas); // chamando a função showperguntas
  contadorPerguntas(numeroPerguntas); // passando o valor numeroPerguntas para contadorPerguntas
  clearInterval(contador); // limpar contador
  clearInterval(contadorLinha); // limpar contadorLinha
  iniciarTempo(tempoValor); // chamando a função iniciarTempo
  iniciarLinhaTemporizador(valorLargura); // chamando a função iniciarLinhaTemporizador
  textoTempo.textContent = "Tempo Restante"; // alterar o texto de textoTempo para Tempo Restante
  botaoProximo.classList.remove("mostrar"); // esconder o botão next
};

function contadorPerguntas(index) {
  // criando uma nova tag span e passando o número da pergunta e o número total de perguntas
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> de <p>" +
    perguntas.length +
    "</p> Perguntas</span>";
  contadorPerguntasInferior.innerHTML = totalQueCounTag; // adicionando a nova tag span dentro de contadorPerguntasInferior
}
