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
    pergunta: "Qual é a função principal dos peroxissomos na célula?",
    alternativaCerta: "Detoxificação de substâncias tóxicas",
    opcoes: [
      "Produção de energia",
      "Síntese de proteínas",
      "Detoxificação de substâncias tóxicas",
      "Realização da fotossíntese"
    ]
  },
  {
    pergunta: "Qual é a principal enzima envolvida na degradação do peróxido de hidrogênio nos peroxissomos?",
    alternativaCerta: "Catalase",
    opcoes: [
      "Lipase",
      "Catalase",
      "Amilase",
      "Protease"
    ]
  },
  {
    pergunta: "Os peroxissomos estão presentes apenas em células eucarióticas?",
    alternativaCerta: "Sim, estão presentes apenas em células eucarióticas",
    opcoes: [
      "Sim, estão presentes apenas em células eucarióticas",
      "Não, estão presentes apenas em células procarióticas",
      "Sim, estão presentes em células eucarióticas e procarióticas",
      "Não, estão presentes apenas em células animais"
    ]
  },
  {
    pergunta: "Quais são as duas principais funções dos peroxissomos na célula?",
    alternativaCerta: "Detoxificação e metabolismo de ácidos graxos",
    opcoes: [
      "Síntese de proteínas e glicólise",
      "Detoxificação e metabolismo de ácidos graxos",
      "Fotossíntese e respiração celular",
      "Reprodução e transporte de íons"
    ]
  },
  {
    pergunta: "Qual é a origem dos peroxissomos?",
    alternativaCerta: "São originados a partir do retículo endoplasmático",
    opcoes: [
      "São originados a partir do núcleo",
      "São originados a partir dos ribossomos",
      "São originados a partir da membrana plasmática",
      "São originados a partir do retículo endoplasmático"
    ]
  },
  {
    pergunta: "Qual é o produto resultante da ação da enzima catalase sobre o peróxido de hidrogênio nos peroxissomos?",
    alternativaCerta: "Água e oxigênio",
    opcoes: [
      "Água e gás carbônico",
      "Água e oxigênio",
      "Água e peróxido de hidrogênio",
      "Água e hidrogênio"
    ]
  },
  {
    pergunta: "Qual é a importância dos peroxissomos para a célula?",
    alternativaCerta: "Detoxificação de substâncias nocivas e metabolismo de ácidos graxos",
    opcoes: [
      "Produção de energia e síntese de carboidratos",
      "Detoxificação de substâncias nocivas e metabolismo de ácidos graxos",
      "Realização da fotossíntese e digestão intracelular",
      "Transporte de íons e regulação da pressão osmótica"
    ]
  },
  {
    pergunta: "Os peroxissomos são organelas delimitadas por membrana?",
    alternativaCerta: "Sim, são organelas delimitadas por uma única membrana",
    opcoes: [
      "Sim, são organelas delimitadas por uma única membrana",
      "Não, não possuem membranas",
      "Sim, são organelas delimitadas por duas membranas",
      "Sim, são organelas delimitadas por uma membrana dupla"
    ]
  },
  {
    pergunta: "Qual é o processo pelo qual os peroxissomos utilizam o peróxido de hidrogênio para oxidar substratos, como ácidos graxos?",
    alternativaCerta: "Beta-oxidação",
    opcoes: [
      "Fotossíntese",
      "Glicólise",
      "Beta-oxidação",
      "Fagocitose"
    ]
  },
  {
    pergunta: "Os peroxissomos têm DNA próprio?",
    alternativaCerta: "Não, os peroxissomos não têm DNA próprio",
    opcoes: [
      "Sim, os peroxissomos têm DNA próprio",
      "Não, os peroxissomos não têm DNA próprio",
      "Sim, os peroxissomos têm DNA idêntico ao DNA nuclear",
      "Sim, os peroxissomos têm DNA circular"
    ]
  },
  {
    pergunta: "Quais enzimas nos peroxissomos estão envolvidas na degradação de ácidos graxos de cadeia longa?",
    alternativaCerta: "Oxidases de ácidos graxos",
    opcoes: [
      "Isomerases de ácidos graxos",
      "Hidrolases de ácidos graxos",
      "Oxidases de ácidos graxos",
      "Quinases de ácidos graxos"
    ]
  },
  {
    pergunta: "Qual é o nome dado à doença genética relacionada aos peroxissomos que causa acúmulo de ácidos graxos de cadeia longa?",
    alternativaCerta: "Adrenoleucodistrofia",
    opcoes: [
      "Fenilcetonúria",
      "Adrenoleucodistrofia",
      "Doença de Gaucher",
      "Esclerose múltipla"
    ]
  },
  {
    pergunta: "Os peroxissomos estão envolvidos no processo de autofagia?",
    alternativaCerta: "Não, os peroxissomos não estão envolvidos no processo de autofagia",
    opcoes: [
      "Sim, os peroxissomos são os principais responsáveis pela autofagia",
      "Não, os peroxissomos não estão envolvidos no processo de autofagia",
      "Sim, os peroxissomos realizam autofagia apenas em células vegetais",
      "Não, os peroxissomos realizam autofagia apenas em células animais"
    ]
  },
  {
    pergunta: "Quando ocorre o processo de beta-oxidação nos peroxissomos?",
    alternativaCerta: "Quando há excesso de ácidos graxos de cadeia longa na célula",
    opcoes: [
      "Quando a célula necessita de energia imediata",
      "Quando a célula precisa sintetizar proteínas",
      "Quando há excesso de ácidos graxos de cadeia longa na célula",
      "Quando há excesso de ácidos graxos de cadeia curta na célula"
    ]
  },
  {
    pergunta: "Qual é a importância dos peroxissomos na detoxificação de substâncias tóxicas?",
    alternativaCerta: "Os peroxissomos neutralizam e degradam substâncias nocivas",
    opcoes: [
      "Os peroxissomos sintetizam substâncias tóxicas",
      "Os peroxissomos armazenam substâncias tóxicas",
      "Os peroxissomos transportam substâncias tóxicas para o núcleo",
      "Os peroxissomos neutralizam e degradam substâncias nocivas"
    ]
  },
  {
    pergunta: "Qual é a principal função da enzima oxidase de ácido úrico nos peroxissomos?",
    alternativaCerta: "Oxidação do ácido úrico",
    opcoes: [
      "Hidrólise do ácido úrico",
      "Síntese do ácido úrico",
      "Transporte do ácido úrico para o núcleo",
      "Oxidação do ácido úrico"
    ]
  },
  {
    pergunta: "Quais são as consequências da disfunção dos peroxissomos?",
    alternativaCerta: "Acúmulo de substâncias tóxicas e doenças peroxissômicas",
    opcoes: [
      "Produção excessiva de ATP e desequilíbrio osmótico",
      "Liberação não controlada de enzimas peroxissomais",
      "Disfunção do retículo endoplasmático",
      "Acúmulo de substâncias tóxicas e doenças peroxissômicas"
    ]
  },
  {
    pergunta: "Quais são as duas principais classes de doenças genéticas relacionadas aos peroxissomos?",
    alternativaCerta: "Síndrome de Zellweger e doenças de depósito peroxissômico",
    opcoes: [
      "Síndrome de Zellweger e doenças mitocondriais",
      "Doenças respiratórias e doenças de depósito peroxissômico",
      "Mucopolissacaridoses e doenças de depósito peroxissômico",
      "Síndrome de Zellweger e doenças de depósito peroxissômico"
    ]
  },
  {
    pergunta: "Os peroxissomos são organelas móveis que se deslocam dentro da célula?",
    alternativaCerta: "Não, os peroxissomos são organelas estáticas e não se deslocam",
    opcoes: [
      "Sim, os peroxissomos são organelas móveis e se deslocam dentro da célula",
      "Não, os peroxissomos são organelas estáticas e não se deslocam",
      "Sim, os peroxissomos se deslocam apenas durante a divisão celular",
      "Não, os peroxissomos se deslocam apenas em células vegetais"
    ]
  },
  {
    pergunta: "Os peroxissomos são capazes de sintetizar membranas?",
    alternativaCerta: "Sim, os peroxissomos são capazes de sintetizar suas próprias membranas",
    opcoes: [
      "Sim, os peroxissomos são capazes de sintetizar suas próprias membranas",
      "Não, os peroxissomos não têm membranas",
      "Sim, os peroxissomos sintetizam apenas membranas do retículo endoplasmático",
      "Não, os peroxissomos sintetizam apenas membranas do complexo de Golgi"
    ]
  },
  {
    pergunta: "Os peroxissomos estão envolvidos na produção de energia?",
    alternativaCerta: "Não, os peroxissomos não estão envolvidos na produção de energia",
    opcoes: [
      "Sim, os peroxissomos são os principais produtores de energia da célula",
      "Não, os peroxissomos não estão envolvidos na produção de energia",
      "Sim, os peroxissomos produzem energia apenas em células animais",
      "Não, os peroxissomos produzem energia apenas em células vegetais"
    ]
  },
  {
    pergunta: "Qual é o nome dado ao processo pelo qual os peroxissomos são capazes de se dividir e se multiplicar na célula?",
    alternativaCerta: "Fissão peroxissomal",
    opcoes: [
      "Fotossíntese",
      "Glicólise",
      "Fissão peroxissomal",
      "Autofagia"
    ]
  },
  {
    pergunta: "Qual é a função da enzima catalase nos peroxissomos?",
    alternativaCerta: "Degradação do peróxido de hidrogênio",
    opcoes: [
      "Síntese de carboidratos",
      "Degradação do peróxido de hidrogênio",
      "Transporte de íons",
      "Produção de energia"
    ]
  },
  {
    pergunta: "Os peroxissomos estão envolvidos na degradação de resíduos celulares?",
    alternativaCerta: "Sim, os peroxissomos estão envolvidos na degradação de resíduos celulares",
    opcoes: [
      "Sim, os peroxissomos estão envolvidos na degradação de resíduos celulares",
      "Não, os peroxissomos estão envolvidos apenas no transporte de resíduos celulares",
      "Sim, os peroxissomos degradam apenas resíduos de carboidratos",
      "Não, os peroxissomos estão envolvidos apenas na degradação de proteínas"
    ]
  },
  {
    pergunta: "Quais são as duas principais vias pelas quais os peroxissomos são capazes de importar proteínas?",
    alternativaCerta: "Via PTS1 e Via PTS2",
    opcoes: [
      "Via PTS1 e Via PTS2",
      "Via de ubiquitinação e Via de glicosilação",
      "Via de endocitose e Via de exocitose",
      "Via de clatrina e Via de caveolina"
    ]
  },
  {
    pergunta: "Os peroxissomos estão envolvidos na síntese de ácidos nucleicos?",
    alternativaCerta: "Não, os peroxissomos não estão envolvidos na síntese de ácidos nucleicos",
    opcoes: [
      "Sim, os peroxissomos estão envolvidos na síntese de ácidos nucleicos",
      "Não, os peroxissomos não estão envolvidos na síntese de ácidos nucleicos",
      "Sim, os peroxissomos sintetizam apenas ácidos ribonucleicos",
      "Não, os peroxissomos sintetizam apenas ácidos desoxirribonucleicos"
    ]
  },
  {
    pergunta: "Quais são as principais fontes de peróxido de hidrogênio nos peroxissomos?",
    alternativaCerta: "Metabolismo de ácidos graxos e oxidação de substratos",
    opcoes: [
      "Fotossíntese e metabolismo de proteínas",
      "Síntese de carboidratos e oxidação de substratos",
      "Metabolismo de ácidos graxos e oxidação de substratos",
      "Degradação de ácidos nucleicos e lipídios"
    ]
  },
  {
    pergunta: "Os peroxissomos são organelas essenciais para a sobrevivência da célula?",
    alternativaCerta: "Não, os peroxissomos não são essenciais para a sobrevivência da célula",
    opcoes: [
      "Sim, os peroxissomos são essenciais para a sobrevivência da célula",
      "Não, os peroxissomos não são essenciais para a sobrevivência da célula",
      "Sim, os peroxissomos são essenciais apenas para células vegetais",
      "Não, os peroxissomos são essenciais apenas para células animais"
    ]
  },
  {
    pergunta: "Qual é a importância dos peroxissomos na metabolização de ácidos graxos?",
    alternativaCerta: "Os peroxissomos degradam ácidos graxos de cadeia longa",
    opcoes: [
      "Os peroxissomos degradam apenas ácidos graxos de cadeia curta",
      "Os peroxissomos sintetizam ácidos graxos",
      "Os peroxissomos armazenam ácidos graxos",
      "Os peroxissomos degradam ácidos graxos de cadeia longa"
    ]
  },
  {
    pergunta: "Quais são os produtos resultantes da oxidação de ácidos graxos nos peroxissomos?",
    alternativaCerta: "Acetil-CoA e peróxido de hidrogênio",
    opcoes: [
      "Acetil-CoA e peróxido de hidrogênio",
      "Ácido pirúvico e oxigênio",
      "Glicerol e água",
      "Ácido cítrico e gás carbônico"
    ]
  },
  {
    pergunta: "Os peroxissomos estão envolvidos na síntese de proteínas?",
    alternativaCerta: "Não, os peroxissomos não estão envolvidos na síntese de proteínas",
    opcoes: [
      "Sim, os peroxissomos estão envolvidos na síntese de proteínas",
      "Não, os peroxissomos não estão envolvidos na síntese de proteínas",
      "Sim, os peroxissomos sintetizam todas as proteínas celulares",
      "Não, os peroxissomos sintetizam apenas proteínas estruturais"
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
    pergunta: "Que organela desempenha um papel importante na quebra do peróxido de hidrogênio e na conversão de substâncias tóxicas em menos prejudiciais?",
    alternativaCerta: "Peroxissomos",
    opcoes: [
      "Ribossomos",
      "Mitocôndrias",
      "Complexo de Golgi",
      "Peroxissomos"
    ]
  },
  {
    pergunta: "Que organela está envolvida na degradação de ácidos graxos e ajuda a regular o nível de peróxido de hidrogênio na célula?",
    alternativaCerta: "Peroxissomos",
    opcoes: [
      "Ribossomos",
      "Mitocôndrias",
      "Núcleo",
      "Peroxissomos"
    ]
  },
  {
    pergunta: "Qual é a organela que contribui para a produção de bile no fígado e está relacionada à desintoxicação de substâncias no organismo?",
    alternativaCerta: "Peroxissomos",
    opcoes: [
      "Retículo Endoplasmático",
      "Lisossomos",
      "Peroxissomos",
      "Núcleo"
    ]
  },
  {
    pergunta: "Que organela contém enzimas que realizam a decomposição de peróxido de hidrogênio, um subproduto tóxico do metabolismo celular?",
    alternativaCerta: "Peroxissomos",
    opcoes: [
      "Mitocôndrias",
      "Cloroplastos",
      "Peroxissomos",
      "Ribossomos"
    ]
  },
  {
    pergunta: "Qual é a organela responsável por metabolizar compostos lipídicos e participar da síntese de ácidos graxos de cadeia longa?",
    alternativaCerta: "Peroxissomos",
    opcoes: [
      "Peroxissomos",
      "Núcleo",
      "Lisossomos",
      "Retículo Endoplasmático"
    ]
  },
  {
    pergunta: "Qual organela desempenha um papel essencial na detoxificação de substâncias tóxicas na célula?",
    alternativaCerta: "Peroxissomos",
    opcoes: [
      "Mitocôndrias",
      "Lisossomos",
      "Complexo de Golgi",
      "Peroxissomos"
    ]
  },
  {
    pergunta: "Qual é a organela que contém enzimas oxidativas e está envolvida no metabolismo de peróxido de hidrogênio?",
    alternativaCerta: "Peroxissomos",
    opcoes: [
      "Lisossomos",
      "Retículo Endoplasmático",
      "Peroxissomos",
      "Núcleo"
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
