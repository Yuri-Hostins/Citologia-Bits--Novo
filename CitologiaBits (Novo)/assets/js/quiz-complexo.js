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
    pergunta: "Qual é a principal função do Complexo de Golgi?",
    alternativaCerta: "Processamento, modificação e empacotamento de proteínas e lipídios",
    opcoes: [
      "Produção de energia",
      "Síntese de ácidos nucleicos",
      "Armazenamento de água",
      "Processamento, modificação e empacotamento de proteínas e lipídios"
    ]
  },
  {
    pergunta: "O que são vesículas de transporte do Complexo de Golgi?",
    alternativaCerta: "Pequenas bolsas membranosas que transportam substâncias entre o Golgi e outras partes da célula",
    opcoes: [
      "Proteínas especializadas",
      "RNA mensageiro",
      "Moléculas de açúcar",
      "Pequenas bolsas membranosas que transportam substâncias entre o Golgi e outras partes da célula"
    ]
  },
  {
    pergunta: "O que são os cisternas do Complexo de Golgi?",
    alternativaCerta: "Sacos achatados e empilhados que compõem a estrutura do Golgi",
    opcoes: [
      "Enzimas lisossômicas",
      "Complexos de proteínas",
      "RNA ribossômico",
      "Sacos achatados e empilhados que compõem a estrutura do Golgi"
    ]
  },
  {
    pergunta: "Qual é a relação entre o Complexo de Golgi e o retículo endoplasmático?",
    alternativaCerta: "O Golgi recebe proteínas e lipídios do retículo endoplasmático para processamento e modificação",
    opcoes: [
      "O Golgi produz o retículo endoplasmático",
      "O Golgi degrada proteínas do retículo endoplasmático",
      "O Golgi não tem relação com o retículo endoplasmático",
      "O Golgi recebe proteínas e lipídios do retículo endoplasmático para processamento e modificação"
    ]
  },
  {
    pergunta: "Qual é o nome da face do Complexo de Golgi que recebe substâncias do retículo endoplasmático?",
    alternativaCerta: "Face cis",
    opcoes: [
      "Face trans",
      "Face medial",
      "Face lateral",
      "Face cis"
    ]
  },
  {
    pergunta: "O que acontece na face trans do Complexo de Golgi?",
    alternativaCerta: "As vesículas de transporte carregando substâncias processadas são liberadas para outros destinos celulares",
    opcoes: [
      "Processamento inicial de proteínas",
      "Produção de ATP",
      "Digestão intracelular",
      "As vesículas de transporte carregando substâncias processadas são liberadas para outros destinos celulares"
    ]
  },
  {
    pergunta: "Quais são algumas das modificações que podem ocorrer nas proteínas no Complexo de Golgi?",
    alternativaCerta: "Adição de grupos de açúcar, corte e dobramento",
    opcoes: [
      "Quebra em aminoácidos",
      "Ligação a RNA",
      "Produção de lipídios",
      "Adição de grupos de açúcar, corte e dobramento"
    ]
  },
  {
    pergunta: "Qual é a relação entre o Complexo de Golgi e as lisossomos?",
    alternativaCerta: "O Golgi produz vesículas que se transformam em lisossomos contendo enzimas digestivas",
    opcoes: [
      "O Golgi produz ATP para os lisossomos",
      "O Golgi armazena resíduos para os lisossomos",
      "O Golgi bloqueia a função dos lisossomos",
      "O Golgi produz vesículas que se transformam em lisossomos contendo enzimas digestivas"
    ]
  },
  {
    pergunta: "Quais são os principais produtos do Complexo de Golgi que são secretados pela célula?",
    alternativaCerta: "Vesículas contendo proteínas e lipídios para exocitose",
    opcoes: [
      "Água e íons",
      "Enzimas nucleares",
      "RNA ribossômico",
      "Vesículas contendo proteínas e lipídios para exocitose"
    ]
  },
  {
    pergunta: "O que é a exocitose?",
    alternativaCerta: "Processo pelo qual as vesículas liberam seu conteúdo para fora da célula",
    opcoes: [
      "Processo de divisão celular",
      "Transporte de substâncias para dentro da célula",
      "Digestão intracelular",
      "Processo pelo qual as vesículas liberam seu conteúdo para fora da célula"
    ]
  },
  {
    pergunta: "Qual é a relação entre o Complexo de Golgi e a síntese de glicoproteínas?",
    alternativaCerta: "O Golgi adiciona grupos de açúcar às proteínas, formando as glicoproteínas",
    opcoes: [
      "O Golgi produz glicose para as células",
      "O Golgi destrói glicoproteínas",
      "O Golgi regula a entrada de glicose",
      "O Golgi adiciona grupos de açúcar às proteínas, formando as glicoproteínas"
    ]
  },
  {
    pergunta: "Qual é a importância das glicoproteínas produzidas no Complexo de Golgi?",
    alternativaCerta: "Elas desempenham papéis fundamentais no reconhecimento celular, adesão e sinalização",
    opcoes: [
      "Elas fornecem energia para a célula",
      "Elas armazenam lipídios",
      "Elas ativam enzimas lisossômicas",
      "Elas desempenham papéis fundamentais no reconhecimento celular, adesão e sinalização"
    ]
  },
  {
    pergunta: "Qual é a relação entre o Complexo de Golgi e as membranas celulares?",
    alternativaCerta: "O Golgi modifica e empacota lipídios e proteínas que serão incorporados nas membranas",
    opcoes: [
      "O Golgi cria uma barreira contra substâncias externas",
      "O Golgi armazena água para a membrana",
      "O Golgi regula a pressão osmótica",
      "O Golgi modifica e empacota lipídios e proteínas que serão incorporados nas membranas"
    ]
  },
  {
    pergunta: "O Complexo de Golgi está presente em todas as células?",
    alternativaCerta: "Não, ele não está presente em células procarióticas",
    opcoes: [
      "Sim, ele está presente em todas as células",
      "Não, ele está presente apenas em células vegetais",
      "Não, ele não está presente em células procarióticas",
      "Sim, ele está presente apenas em células animais"
    ]
  },
  {
    pergunta: "Qual é a relação entre o Complexo de Golgi e a doença de Tay-Sachs?",
    alternativaCerta: "Na doença de Tay-Sachs, a falta de uma enzima no Golgi leva ao acúmulo de substâncias tóxicas nas células",
    opcoes: [
      "O Golgi produz excesso de enzimas na doença de Tay-Sachs",
      "O Golgi regula a produção de neurotransmissores na doença de Tay-Sachs",
      "O Golgi causa inflamação na doença de Tay-Sachs",
      "Na doença de Tay-Sachs, a falta de uma enzima no Golgi leva ao acúmulo de substâncias tóxicas nas células"
    ]
  },
  {
    pergunta: "Qual é a relação entre o Complexo de Golgi e a formação do acrossomo em espermatozoides?",
    alternativaCerta: "O Golgi é responsável pela formação e empacotamento do acrossomo, uma estrutura importante para a fertilização",
    opcoes: [
      "O Golgi produz ATP para os espermatozoides",
      "O Golgi armazena DNA nos espermatozoides",
      "O Golgi regula a motilidade dos espermatozoides",
      "O Golgi é responsável pela formação e empacotamento do acrossomo, uma estrutura importante para a fertilização"
    ]
  },
  {
    pergunta: "O que são os corpos polares do Complexo de Golgi?",
    alternativaCerta: "Pequenas vesículas que se formam durante a divisão celular e contêm material citoplasmático excedente",
    opcoes: [
      "Organelas de pigmentação",
      "Partículas de energia",
      "Enzimas digestivas",
      "Pequenas vesículas que se formam durante a divisão celular e contêm material citoplasmático excedente"
    ]
  },
  {
    pergunta: "Qual é a relação entre o Complexo de Golgi e a glicosilação?",
    alternativaCerta: "O Golgi é responsável por adicionar grupos de açúcar às proteínas, formando as glicoproteínas",
    opcoes: [
      "O Golgi produz glicose a partir de proteínas",
      "O Golgi degrada carboidratos",
      "O Golgi regula a entrada de glicose",
      "O Golgi é responsável por adicionar grupos de açúcar às proteínas, formando as glicoproteínas"
    ]
  },
  {
    pergunta: "Qual é a relação entre o Complexo de Golgi e a orientação das moléculas nas membranas celulares?",
    alternativaCerta: "O Golgi organiza as moléculas de lipídio e proteína nas vesículas de transporte para garantir sua correta orientação nas membranas",
    opcoes: [
      "O Golgi produz moléculas de lipídio",
      "O Golgi controla a temperatura das membranas",
      "O Golgi regula a quantidade de água nas membranas",
      "O Golgi organiza as moléculas de lipídio e proteína nas vesículas de transporte para garantir sua correta orientação nas membranas"
    ]
  },
  {
    pergunta: "Qual é a relação entre o Complexo de Golgi e a secreção de hormônios?",
    alternativaCerta: "O Golgi modifica e empacota hormônios que serão liberados na corrente sanguínea",
    opcoes: [
      "O Golgi degrada hormônios",
      "O Golgi produz hormônios",
      "O Golgi controla a temperatura dos hormônios",
      "O Golgi modifica e empacota hormônios que serão liberados na corrente sanguínea"
    ]
  },
  {
    pergunta: "Qual é a relação entre o Complexo de Golgi e a síntese de membranas celulares?",
    alternativaCerta: "O Golgi empacota lipídios e proteínas que formam as membranas celulares",
    opcoes: [
      "O Golgi regula a pressão osmótica das membranas",
      "O Golgi produz DNA para as membranas celulares",
      "O Golgi degrada membranas",
      "O Golgi empacota lipídios e proteínas que formam as membranas celulares"
    ]
  },
  {
    pergunta: "Qual é o papel do Complexo de Golgi na formação de lisossomos?",
    alternativaCerta: "O Golgi produz vesículas que se transformam em lisossomos contendo enzimas digestivas",
    opcoes: [
      "O Golgi armazena lisossomos",
      "O Golgi degrada lisossomos",
      "O Golgi produz energia para os lisossomos",
      "O Golgi produz vesículas que se transformam em lisossomos contendo enzimas digestivas"
    ]
  },
  {
    pergunta: "Como o Complexo de Golgi contribui para a regulação do metabolismo?",
    alternativaCerta: "Ele processa e modifica proteínas e lipídios que afetam as vias metabólicas celulares",
    opcoes: [
      "Ele produz enzimas metabólicas",
      "Ele regula a temperatura do metabolismo",
      "Ele produz RNA para o metabolismo",
      "Ele processa e modifica proteínas e lipídios que afetam as vias metabólicas celulares"
    ]
  },
  {
    pergunta: "Qual é a relação entre o Complexo de Golgi e a doença de Alzheimer?",
    alternativaCerta: "O Golgi é afetado na doença de Alzheimer, levando a problemas na função neuronal",
    opcoes: [
      "O Golgi produz proteínas anormais na doença de Alzheimer",
      "O Golgi regula a produção de insulina na doença de Alzheimer",
      "O Golgi não está relacionado à doença de Alzheimer",
      "O Golgi é afetado na doença de Alzheimer, levando a problemas na função neuronal"
    ]
  },
  {
    pergunta: "O que são vesículas de clivagem do Complexo de Golgi?",
    alternativaCerta: "Vesículas que contêm enzimas que clivam proteínas e lipídios em fragmentos menores",
    opcoes: [
      "Vesículas que armazenam DNA",
      "Vesículas que produzem energia",
      "Vesículas que transportam água",
      "Vesículas que contêm enzimas que clivam proteínas e lipídios em fragmentos menores"
    ]
  },
  {
    pergunta: "Qual é a importância das vesículas de transporte do Complexo de Golgi na célula?",
    alternativaCerta: "Elas garantem a distribuição eficiente de substâncias processadas para suas localizações adequadas",
    opcoes: [
      "Elas armazenam resíduos celulares",
      "Elas produzem energia",
      "Elas sintetizam proteínas",
      "Elas garantem a distribuição eficiente de substâncias processadas para suas localizações adequadas"
    ]
  },
  {
    pergunta: "Qual é o processo de formação de vesículas de transporte no Complexo de Golgi?",
    alternativaCerta: "Brotamento das membranas do Golgi para formar as vesículas",
    opcoes: [
      "Divisão do Golgi em partes menores",
      "Fusão das membranas do Golgi para formar as vesículas",
      "Produção das vesículas diretamente do retículo endoplasmático",
      "Brotamento das membranas do Golgi para formar as vesículas"
    ]
  },
  {
    pergunta: "O Complexo de Golgi está envolvido na regulação do pH intracelular?",
    alternativaCerta: "Sim, ele regula o pH intracelular ao empacotar enzimas que atuam em diferentes pHs",
    opcoes: [
      "Não, ele não tem influência no pH intracelular",
      "Sim, ele controla o pH através da síntese de lipídios",
      "Sim, ele regula o pH intracelular através da produção de ácido clorídrico",
      "Sim, ele regula o pH intracelular ao empacotar enzimas que atuam em diferentes pHs"
    ]
  },
  {
    pergunta: "Qual é a relação entre o Complexo de Golgi e a síndrome de Alagille?",
    alternativaCerta: "Na síndrome de Alagille, há anormalidades no desenvolvimento do Golgi e dos ductos biliares",
    opcoes: [
      "O Golgi produz enzimas anormais na síndrome de Alagille",
      "O Golgi não está relacionado à síndrome de Alagille",
      "O Golgi produz excesso de bile na síndrome de Alagille",
      "Na síndrome de Alagille, há anormalidades no desenvolvimento do Golgi e dos ductos biliares"
    ]
  },
  {
    pergunta: "Qual é o papel do Complexo de Golgi na adição de grupos fosfato às proteínas?",
    alternativaCerta: "Ele não está diretamente envolvido na adição de grupos fosfato às proteínas",
    opcoes: [
      "Ele adiciona grupos fosfato às proteínas para regulação",
      "Ele degrada grupos fosfato das proteínas",
      "Ele regula a entrada de fosfato na célula",
      "Ele não está diretamente envolvido na adição de grupos fosfato às proteínas"
    ]
  },
  {
    pergunta: "Qual é a relação entre o Complexo de Golgi e a formação da lâmina basal?",
    alternativaCerta: "O Golgi é responsável por empacotar proteínas que contribuem para a formação da lâmina basal",
    opcoes: [
      "O Golgi regula a temperatura da lâmina basal",
      "O Golgi não tem relação com a formação da lâmina basal",
      "O Golgi produz a lâmina basal",
      "O Golgi é responsável por empacotar proteínas que contribuem para a formação da lâmina basal"
    ]
  },
  {
    pergunta: "Como o Complexo de Golgi está envolvido na modulação da resposta imune?",
    alternativaCerta: "Ele processa e empacota proteínas envolvidas na resposta imune, como os antígenos",
    opcoes: [
      "Ele produz anticorpos",
      "Ele degrada células imunes",
      "Ele produz citocinas",
      "Ele processa e empacota proteínas envolvidas na resposta imune, como os antígenos"
    ]
  },
  {
    pergunta: "O que acontece com o Complexo de Golgi durante a divisão celular?",
    alternativaCerta: "Ele se dispersa em vesículas pequenas e depois se reorganiza nas células filhas",
    opcoes: [
      "Ele duplica de tamanho",
      "Ele se divide em duas partes iguais",
      "Ele se expande para ocupar mais espaço",
      "Ele se dispersa em vesículas pequenas e depois se reorganiza nas células filhas"
    ]
  }
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
