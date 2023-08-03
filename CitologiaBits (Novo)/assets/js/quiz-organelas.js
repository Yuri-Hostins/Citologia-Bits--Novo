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
    pergunta: "Qual é a organela responsável pela síntese de proteínas?",
    alternativaCerta: "Ribossomos",
    opcoes: [
      "Mitocôndrias", 
      "Retículo Endoplasmático", 
      "Núcleo", 
      "Ribossomos"
    ],
  },
  {
    pergunta:"Qual é a organela conhecida como a 'usina de energia' da célula?",
    alternativaCerta: "Mitocôndrias",
    opcoes: [
      "Cloroplastos", 
      "Lisossomos", 
      "Mitocôndrias", 
      "Peroxissomos"
    ],
  },
  {
    pergunta:"Onde é armazenado o material genético (DNA) na célula eucariótica?",
    alternativaCerta: "Núcleo",
    opcoes: [
      "Cloroplastos", 
      "Núcleo", 
      "Retículo Endoplasmático", 
      "Lisossomos"
    ],
  },
  {
    pergunta:"Qual é a organela que contém enzimas digestivas e realiza a digestão intracelular?",
    alternativaCerta: "Lisossomos",
    opcoes: [
      "Ribossomos", 
      "Lisossomos", 
      "Complexo de Golgi", 
      "Vacúolos"
    ],
  },
  {
    pergunta:"Qual é a organela responsável pela fotossíntese em células vegetais?",
    alternativaCerta: "Cloroplastos",
    opcoes: [
      "Mitocôndrias", 
      "Cloroplastos", 
      "Lisossomos", 
      "Núcleo"
    ],
  },
  {
    pergunta:"Qual é a organela que armazena água, íons e algumas substâncias de reserva?",
    alternativaCerta: "Vacúolos",
    opcoes: [
      "Complexo de Golgi", 
      "Ribossomos", 
      "Vacúolos", 
      "Núcleo"
    ],
  },
  {
    pergunta: "Qual é a organela que desintoxica o organismo ao metabolizar substâncias tóxicas?",
    alternativaCerta: "Peroxissomos",
    opcoes: [
      "Retículo Endoplasmático", 
      "Peroxissomos", 
      "Núcleo", 
      "Lisossomos"
    ],
  },
  {
    pergunta:"Qual é a organela que processa, modifica e empacota proteínas para transporte?",
    alternativaCerta: "Complexo de Golgi",
    opcoes: [
      "Mitocôndrias", 
      "Complexo de Golgi", 
      "Cloroplastos", 
      "Ribossomos"
    ],
  },
  {
    pergunta:"Qual é a organela que auxilia na divisão celular e formação do fuso mitótico?",
    alternativaCerta: "Centríolos",
    opcoes: [
      "Lisossomos",
      "Centríolos",
      "Retículo Endoplasmático",
      "Cloroplastos",
    ],
  },
  {
    pergunta:"Qual é a organela responsável pela síntese de lipídios e detoxificação de substâncias?",
    alternativaCerta: "Retículo Endoplasmático Liso",
    opcoes: [
      "Retículo Endoplasmático Rugoso",
      "Ribossomos",
      "Retículo Endoplasmático Liso",
      "Mitocôndrias",
    ],
  },
  {
    pergunta: "Qual é a organela responsável pela produção de ATP (adenosina trifosfato), a moeda energética da célula?",
    alternativaCerta: "Mitocôndrias",
    opcoes: [
      "Peroxissomos",
      "Mitocôndrias",
      "Lisossomos",
      "Retículo Endoplasmático",
    ],
  },
  {
    pergunta:"Qual é a organela que contém clorofila e é responsável pela fotossíntese em células vegetais?",
    alternativaCerta: "Cloroplastos",
    opcoes: [
      "Complexo de Golgi", 
      "Cloroplastos", 
      "Vacúolos", 
      "Lisossomos"
    ],
  },
  {
    pergunta:"Qual é a organela que produz ribossomos e está localizada no núcleo da célula?",
    alternativaCerta: "Nucleolos",
    opcoes: [
      "Núcleo", 
      "Nucleolos", 
      "Cloroplastos", 
      "Mitocôndrias"
    ],
  },
  {
    pergunta:"Qual é a organela que serve como local de armazenamento e transporte de substâncias dentro da célula?",
    alternativaCerta: "Complexo de Golgi",
    opcoes: [
      "Vacúolos", 
      "Ribossomos", 
      "Complexo de Golgi", 
      "Lisossomos"
    ],
  },
  {
    pergunta:"Qual é a organela que possui um papel fundamental na regulação da expressão gênica e síntese de RNA?",
    alternativaCerta: "Núcleo",
    opcoes: [
      "Núcleo", 
      "Ribossomos", 
      "Retículo Endoplasmático", 
      "Mitocôndrias"
    ],
  },
  {
    pergunta:"Qual é a organela responsável pela degradação de substâncias celulares desnecessárias ou danificadas?",
    alternativaCerta: "Lisossomos",
    opcoes: [
      "Mitocôndrias", 
      "Lisossomos", 
      "Peroxissomos", 
      "Núcleo"
    ],
  },
  {
    pergunta:"Qual é a organela que auxilia na síntese, modificação e transporte de proteínas?",
    alternativaCerta: "Retículo Endoplasmático",
    opcoes: [
      "Núcleo", 
      "Cloroplastos", 
      "Ribossomos", 
      "Retículo Endoplasmático"
    ],
  },
  {
    pergunta:"Qual é a organela que contém cristais de oxalato de cálcio e pode estar relacionada à toxicidade de algumas plantas?",
    alternativaCerta: "Vacúolos",
    opcoes: [
      "Vacúolos", 
      "Complexo de Golgi", 
      "Cloroplastos", 
      "Mitocôndrias"
    ],
  },
  {
    pergunta:"Qual é a organela que possui dois subtipos principais, o liso e o rugoso?",
    alternativaCerta: "Retículo Endoplasmático",
    opcoes: [
      "Lisossomos", 
      "Retículo Endoplasmático", 
      "Peroxissomos", 
      "Núcleo"
    ],
  },
  {
    pergunta: "Qual é a organela que forma o fuso mitótico durante a divisão celular?",
    alternativaCerta: "Centríolos",
    opcoes: [
      "Mitocôndrias",
      "Cloroplastos",
      "Centríolos",
      "Retículo Endoplasmático",
    ],
  },
  {
    pergunta: "Qual é a organela que realiza a fotossíntese em células vegetais?",
    alternativaCerta: "Cloroplastos",
    opcoes: [
      "Cloroplastos",
      "Ribossomos",
      "Retículo Endoplasmático",
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
