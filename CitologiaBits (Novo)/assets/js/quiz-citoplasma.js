// selecionando todos os elementos necessários
const botaoComeca = document.querySelector(".botao-comeca button");
const caixaInformacao = document.querySelector(".caixa-infomacao");
const botaoSair = caixaInformacao.querySelector(".botoes .sair");
const botaoContinuar = caixaInformacao.querySelector(".botoes .reiniciar");
const caixaQuiz = document.querySelector(".caixa-quiz");
const caixaResultado = document.querySelector(".caixa-resultado");
const listaOpcoes = document.querySelector(".lista-opcoes");
const linhaTempo = document.querySelector("header .linha-tempo");
const tempoTexto = document.querySelector(".cronometro .hora-esquerda-texto");
const tempoCronometro = document.querySelector(".cronometro .segundos-cronometro");

// criando um array e passando o número, perguntas, opções e respostas
let questions = [

  {
    question: 'Qual é a função principal do citoplasma',
    answer: "Síntese de proteínas",
    options: [
      "Armazenamento de informações genéticas",
      "Síntese de proteínas",
      "Proteção do núcleo celular",
      "Transporte de oxigênio",
    ],
  },
  {
    question: 'O que é o citoplasma?',
    answer: "Substância gelatinosa que preenche o núcleo",
    options: [
      "Estrutura celular que engloba o núcleo",
      "Substância gelatinosa que preenche o núcleo",
      "Membrana que envolve a célula",
      "Estrutura celular presente apenas em células vegetais",
    ],
  },
  {
    question: 'O que é responsável pela síntese de proteínas no citoplasma?',
    answer: "Ribossomos",
    options: [
      "Complexo de Golgi",
      "Ribossomos",
      "Lisossomos",
      "Mitocôndrias",
    ],
  },
  {
    question: 'Qual é o papel do citoesqueleto no citoplasma?',
    answer: "Suporte estrutural e divisão celular",
    options: [
      "Síntese de lipídios",
      "Armazenamento de água",
      "Suporte estrutural e divisão celular",
      "Fotossíntese",
    ],
  },
  {
    question: 'O que compõe principalmente o citoplasma?',
    answer: "Água, íons, proteínas, enzimas e organelas celulares.",
    options: [
      "Água, íons, proteínas, enzimas e organelas celulares.",
      "Gases e nutrientes",
      "Vitaminas e minerais",
      "Ácidos nucleicos",
    ],
  },
  {
    question: 'Além das células eucarióticas, o citoplasma também está presente em células',
    answer: "Procariontes",
    options: [
      "Procariontes",
      "Animais apenas",
      "Vegetais apenas",
      "Fúngicas apenas",
    ],
  },
  {
    question: 'Qual é o papel do citoplasma na realização da citocinese?',
    answer: "Dividir o material genético igualmente entre as células filhas",
    options: [
      "Controlar a entrada e saída de substâncias da célula",
      "Síntese de carboidratos para a divisão celular",
      "Dividir o material genético igualmente entre as células filhas",
      "Armazenar informações genéticas",
    ],
  },
  {
    question: 'Qual é o nome dado à região do citoplasma que contém o material genético nas células procariontes?',
    answer: "Nucleoide",
    options: [
      "Núcleo",
      "Nucleoide",
      "Complexo de Golgi",
      "Retículo endoplasmático",
    ],
  },
  {
    question: 'Quais organelas citoplasmáticas são responsáveis pela produção de energia da célula?',
    answer: "Mitocôndrias",
    options: [
      "Complexo de Golgi",
      "Mitocôndrias",
      "Lisossomos",
      "Ribossomos",
    ],
  },
  {
    question: 'Como são chamadas as extensões do citoplasma que aumentam a superfície de absorção de nutrientes em células vegetais?',
    answer: "Microvilosidades",
    options: [
      "Cílios",
      "Flagelos",
      "Microvilosidades",
      "Pseudópodes",
    ],
  },
  {
    question: 'Qual é a função dos peroxissomos no citoplasma?',
    answer: "Desintoxicação celular e metabolismo de lipídios",
    options: [
      "Produção de lipídios",
      "Digestão intracelular",
      "Desintoxicação celular e metabolismo de lipídios",
      "Síntese de proteínas",
    ],
  },
];

// se o botão startQuiz for clicado
botaoComeca.onclick = () => {
  caixaInformacao.classList.add("activeInfo"); // mostrar info box
};

// se o botão exitQuiz for clicado
botaoSair.onclick = () => {
  caixaInformacao.classList.remove("activeInfo"); // esconder info box
};

// se o botão continueQuiz for clicado
botaoContinuar.onclick = () => {
  caixaInformacao.classList.remove("activeInfo"); // esconder info box
  caixaQuiz.classList.add("activeQuiz"); // mostrar quiz box
  showQuetions(0); // chamando a função showQuestions
  queCounter(1); // passando 1 parâmetro para queCounter
  startTimer(25); // chamando a função startTimer
  startTimerLine(0); // chamando a função startTimerLine
};

let timeValue = 25;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const reiniciarQuiz = caixaResultado.querySelector(".botoes .reiniciar");
const sairQuiz = caixaResultado.querySelector(".botoes .sair");

// se o botão restartQuiz for clicado
reiniciarQuiz.onclick = () => {
  caixaQuiz.classList.add("activeQuiz"); // mostrar quiz box
  caixaResultado.classList.remove("activeResult"); // esconder result box
  timeValue = 25;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  showQuetions(que_count); // chamando a função showQuestions
  queCounter(que_numb); // passando o valor que_numb para queCounter
  clearInterval(counter); // limpar counter
  clearInterval(counterLine); // limpar counterLine
  startTimer(timeValue); // chamando a função startTimer
  startTimerLine(widthValue); // chamando a função startTimerLine
  tempoTexto.textContent = "Tempo Restante"; // alterar o texto de tempoTexto para Tempo Restante
  botaoProximo.classList.remove("show"); // esconder o botão next
};

// se o botão quitQuiz for clicado
sairQuiz.onclick = () => {
  window.location.reload(); // recarregar a página atual
};

const botaoProximo = document.querySelector(".footer-quiz .botao-proximo");
const contadorPeguntas = document.querySelector(".footer-quiz  .perguntas-texto");

// se o botão Next Que for clicado
botaoProximo.onclick = () => {
  if (que_count < questions.length - 1) {
    // se o contador de perguntas for menor que o comprimento total das perguntas
    que_count++; // incrementar o valor do contador de perguntas
    que_numb++; // incrementar o valor do contador de números das perguntas
    showQuetions(que_count); // chamando a função showQuestions
    queCounter(que_numb); // passando o valor do contador de números das perguntas para queCounter
    clearInterval(counter); // limpar counter
    clearInterval(counterLine); // limpar counterLine
    startTimer(timeValue); // chamando a função startTimer
    startTimerLine(widthValue); // chamando a função startTimerLine
    tempoTexto.textContent = "Tempo Restante"; // alterar o texto de tempoTexto para Tempo Restante
    botaoProximo.classList.remove("show"); // esconder o botão next
  } else {
    clearInterval(counter); // limpar counter
    clearInterval(counterLine); // limar counterLine
    showResult(); // chamando a função showResult
  }
};

// obtendo perguntas e opções do array
function showQuetions(index) {
  const que_text = document.querySelector(".total-perguntas");

  // criando uma nova tag span e div para a pergunta e opção e passando o valor usando o índice do array
  let que_tag =
    "<span>" +
    (index + 1) +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag; // adicionando a nova tag span dentro de que_tag
  listaOpcoes.innerHTML = option_tag; // adicionando a nova tag div dentro de option_tag

  const option = listaOpcoes.querySelectorAll(".option");

  // definindo o atributo onclick para todas as opções disponíveis
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

// criando as novas tags div para os ícones
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// se o usuário clicar em uma opção
function optionSelected(answer) {
  clearInterval(counter); // limpar counter
  clearInterval(counterLine); // limpar counterLine
  let userAns = answer.textContent; // obtendo a opção selecionada pelo usuário
  let correcAns = questions[que_count].answer; // obtendo a resposta correta do array
  const allOptions = listaOpcoes.children.length; // obtendo todos os itens de opção

  if (userAns == correcAns) {
    // se a opção selecionada pelo usuário for igual à resposta correta do array
    userScore += 1; // incrementar o valor do userScore em 1
    answer.classList.add("correct"); // adicionar a cor verde à opção selecionada correta
    answer.insertAdjacentHTML("beforeend", tickIconTag); // adicionar o ícone de marca de seleção à opção selecionada correta
    console.log("Resposta Correta");
    console.log("Suas respostas corretas = " + userScore);
  } else {
    answer.classList.add("incorrect"); // adicionar a cor vermelha à opção selecionada correta
    answer.insertAdjacentHTML("beforeend", crossIconTag); // adicionar o ícone de cruz à opção selecionada correta
    console.log("Resposta Errada");

    for (i = 0; i < allOptions; i++) {
      if (listaOpcoes.children[i].textContent == correcAns) {
        // se houver uma opção que corresponde à resposta do array
        listaOpcoes.children[i].setAttribute("class", "option correct"); // adicionar a cor verde à opção correspondente
        listaOpcoes.children[i].insertAdjacentHTML("beforeend", tickIconTag); // adicionar o ícone de marca de seleção à opção correspondente
        console.log("Resposta correta selecionada automaticamente.");
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    listaOpcoes.children[i].classList.add("disabled"); // uma vez que o usuário selecionou uma opção, desabilitar todas as opções
  }
  botaoProximo.classList.add("show"); // mostrar o botão next se o usuário selecionar alguma opção
}

function showResult() {
  caixaInformacao.classList.remove("activeInfo"); // esconder info box
  caixaQuiz.classList.remove("activeQuiz"); // esconder quiz box
  caixaResultado.classList.add("activeResult"); // mostrar result box
  const scoreText = caixaResultado.querySelector(".score_text");
  if (userScore > 3) {
    // se o usuário acertar mais de 3 perguntas
    // criando uma nova tag span e passando o número de pontos do usuário e o número total de perguntas
    let scoreTag =
      "<span>Parabéns! Você acertou <p>" +
      userScore +
      "</p> de <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag; // adicionando a nova tag span dentro de scoreText
  } else if (userScore > 1) {
    // se o usuário acertar mais de 1 pergunta
    let scoreTag =
      "<span>Legal! Você acertou <p>" +
      userScore +
      "</p> de <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else {
    // se o usuário acertar menos de 1 pergunta
    let scoreTag =
      "<span>Desculpe, você acertou apenas <p>" +
      userScore +
      "</p> de <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    tempoCronometro.textContent = time; // alterando o valor de tempoCronometro com o valor de tempo
    time--; // decrementando o valor do tempo
    if (time < 9) {
      // se o tempo for menor que 9
      let addZero = tempoCronometro.textContent;
      tempoCronometro.textContent = "0" + addZero; // adicionar um 0 antes do valor do tempo
    }
    if (time < 0) {
      // se o tempo for menor que 0
      clearInterval(counter); // limpar counter
      tempoTexto.textContent = "Tempo Esgotado"; // alterar o texto de tempoTexto para Tempo Esgotado
      const allOptions = listaOpcoes.children.length; // obtendo todos os itens de opção
      let correcAns = questions[que_count].answer; // obtendo a resposta correta do array
      for (i = 0; i < allOptions; i++) {
        if (listaOpcoes.children[i].textContent == correcAns) {
          // se houver uma opção que corresponde à resposta do array
          listaOpcoes.children[i].setAttribute("class", "option correct"); // adicionar a cor verde à opção correspondente
          listaOpcoes.children[i].insertAdjacentHTML("beforeend", tickIconTag); // adicionar o ícone de marca de seleção à opção correspondente
          console.log("Tempo Esgotado: Resposta corretaselecionada automaticamente.");
        }
      }
      for (i = 0; i < allOptions; i++) {
        listaOpcoes.children[i].classList.add("disabled"); // uma vez que o usuário selecionou uma opção, desabilitar todas as opções
      }
      botaoProximo.classList.add("show"); // mostrar o botão next se o usuário selecionar alguma opção
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 47);
  function timer() {
    time += 1; // incrementar o valor do tempo em 1
    linhaTempo.style.width = time + "px"; // aumentar a largura da linhaTempo com px pelo valor do tempo
    
    // Verificar a largura da tela
    if (window.innerWidth < 600) {
      clearInterval(counterLine); // Limpar counterLine
    }
    
    if (time > 549) {
      // se o valor do tempo for maior que 549
      clearInterval(counterLine); // limpar counterLine
    }
  }
}


// Função para embaralhar o array de perguntas
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Função para gerar um conjunto aleatório de perguntas do conjunto maior
function generateRandomQuestions() {
  shuffleQuestions(questions); // Embaralhar as perguntas
  return questions.slice(0, 10); // Selecionar as primeiras 10 perguntas
}

// se o botão continueQuiz for clicado
botaoContinuar.onclick = () => {
  caixaInformacao.classList.remove("activeInfo"); // esconder info box
  caixaQuiz.classList.add("activeQuiz"); // mostrar quiz box
  questions = generateRandomQuestions(); // Gerar um conjunto aleatório de perguntas
  showQuetions(0); // chamando a função showQuestions
  queCounter(1); // passando 1 parâmetro para queCounter
  startTimer(25); // chamando a função startTimer
  startTimerLine(0); // chamando a função startTimerLine
};

// se o botão restartQuiz for clicado
reiniciarQuiz.onclick = () => {
  caixaQuiz.classList.add("activeQuiz"); // mostrar quiz box
  caixaResultado.classList.remove("activeResult"); // esconder result box
  timeValue = 25;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  questions = generateRandomQuestions(); // Gerar um conjunto aleatório de perguntas
  showQuetions(que_count); // chamando a função showQuestions
  queCounter(que_numb); // passando o valor que_numb para queCounter
  clearInterval(counter); // limpar counter
  clearInterval(counterLine); // limpar counterLine
  startTimer(timeValue); // chamando a função startTimer
  startTimerLine(widthValue); // chamando a função startTimerLine
  tempoTexto.textContent = "Tempo Restante"; // alterar o texto de tempoTexto para Tempo Restante
  botaoProximo.classList.remove("show"); // esconder o botão next
};

function queCounter(index) {
  // criando uma nova tag span e passando o número da pergunta e o número total de perguntas
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> de <p>" +
    questions.length +
    "</p> Perguntas</span>";
  contadorPeguntas.innerHTML = totalQueCounTag; // adicionando a nova tag span dentro de contadorPeguntas
}