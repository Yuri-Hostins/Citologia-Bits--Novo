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
    pergunta: "Qual é a estrutura celular em forma de cilindro composta por microtúbulos?",
    alternativaCerta: "Centríolo",
    opcoes: [
      "Mitocôndria",
      "Núcleo",
      "Complexo de Golgi",
      "Centríolo"
    ]
  },
  {
    pergunta: "Qual é a principal função dos centríolos?",
    alternativaCerta: "Organizar os microtúbulos durante a divisão celular",
    opcoes: [
      "Sintetizar proteínas",
      "Produzir energia",
      "Armazenar DNA",
      "Organizar os microtúbulos durante a divisão celular"
    ]
  },
  {
    pergunta: "Os centríolos são encontrados apenas em células animais?",
    alternativaCerta: "Sim, estão presentes apenas em células animais",
    opcoes: [
      "Não, estão presentes apenas em células vegetais",
      "Sim, estão presentes apenas em células animais",
      "Sim, estão presentes em todas as células",
      "Não, estão presentes apenas em células bacterianas"
    ]
  },
  {
    pergunta: "Quantos centríolos normalmente estão presentes em uma célula animal?",
    alternativaCerta: "Geralmente, dois",
    opcoes: [
      "Um",
      "Dois",
      "Três",
      "Cinco"
    ]
  },
  {
    pergunta: "Qual é a relação entre os centríolos e o citoesqueleto?",
    alternativaCerta: "Os centríolos estão associados aos microtúbulos do citoesqueleto",
    opcoes: [
      "Os centríolos armazenam proteínas do citoesqueleto",
      "Os centríolos produzem energia para o citoesqueleto",
      "Os centríolos degradam os microtúbulos do citoesqueleto",
      "Os centríolos estão associados aos microtúbulos do citoesqueleto"
    ]
  },
  {
    pergunta: "Qual é a função dos centríolos durante a divisão celular?",
    alternativaCerta: "Organizar os microtúbulos do fuso mitótico",
    opcoes: [
      "Sintetizar DNA",
      "Produzir RNA",
      "Armazenar lipídios",
      "Organizar os microtúbulos do fuso mitótico"
    ]
  },
  {
    pergunta: "Em que região da célula os centríolos geralmente estão localizados?",
    alternativaCerta: "Próximo ao núcleo, no centrossomo",
    opcoes: [
      "No citoplasma",
      "Na membrana plasmática",
      "No complexo de Golgi",
      "Próximo ao núcleo, no centrossomo"
    ]
  },
  {
    pergunta: "Qual é a estrutura cilíndrica que compõe os centríolos?",
    alternativaCerta: "Microtúbulos",
    opcoes: [
      "DNA",
      "RNA",
      "Proteínas",
      "Microtúbulos"
    ]
  },
  {
    pergunta: "Os centríolos são essenciais para a sobrevivência da célula?",
    alternativaCerta: "Não, as células podem sobreviver sem centríolos",
    opcoes: [
      "Sim, as células não podem sobreviver sem centríolos",
      "Não, as células podem sobreviver sem centríolos",
      "Sim, as células precisam de centríolos para respiração celular",
      "Não, as células precisam de centríolos para síntese de proteínas"
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que se forma a partir dos centríolos durante a divisão celular?",
    alternativaCerta: "Fuso mitótico",
    opcoes: [
      "Mitocôndria",
      "Complexo de Golgi",
      "Cloroplasto",
      "Fuso mitótico"
    ]
  },
  {
    pergunta: "Além da divisão celular, os centríolos têm outras funções?",
    alternativaCerta: "Sim, eles também estão envolvidos na formação de cílios e flagelos",
    opcoes: [
      "Não, os centríolos têm apenas a função de organizar os microtúbulos durante a divisão celular",
      "Sim, eles também estão envolvidos na síntese de DNA",
      "Sim, eles estão envolvidos na síntese de proteínas",
      "Sim, eles também estão envolvidos na formação de cílios e flagelos"
    ]
  },
  {
    pergunta: "Quais são os dois tipos principais de estruturas formadas pelos centríolos?",
    alternativaCerta: "Cílios e flagelos",
    opcoes: [
      "Mitocôndrias e lisossomos",
      "Complexo de Golgi e núcleo",
      "Retículo endoplasmático e cloroplastos",
      "Cílios e flagelos"
    ]
  },
  {
    pergunta: "Os centríolos são compostos por quantos grupos de microtúbulos?",
    alternativaCerta: "Nove grupos de três microtúbulos cada",
    opcoes: [
      "Um único microtúbulo",
      "Cinco grupos de dois microtúbulos cada",
      "Sete grupos de três microtúbulos cada",
      "Nove grupos de três microtúbulos cada"
    ]
  },
  {
    pergunta: "Qual é a estrutura semelhante aos centríolos encontrada em células vegetais?",
    alternativaCerta: "Corpo basal",
    opcoes: [
      "Complexo de Golgi",
      "Mitocôndria",
      "Nucléolo",
      "Corpo basal"
    ]
  },
  {
    pergunta: "Quando os centríolos começam a se duplicar durante o ciclo celular?",
    alternativaCerta: "Durante a fase S da interfase",
    opcoes: [
      "Durante a fase G1 da interfase",
      "Durante a fase M da mitose",
      "Durante a fase G2 da interfase",
      "Durante a fase S da interfase"
    ]
  },
  {
    pergunta: "Além das células animais, os centríolos também estão presentes em...",
    alternativaCerta: "Alguns protistas",
    opcoes: [
      "Todas as células eucarióticas",
      "Células bacterianas",
      "Todas as células vegetais",
      "Alguns protistas"
    ]
  },
  {
    pergunta: "Qual é o nome do processo pelo qual os centríolos migram para os polos da célula durante a divisão celular?",
    alternativaCerta: "Centrossomo",
    opcoes: [
      "Centrocelular",
      "Cêntuplo",
      "Centróide",
      "Centrossomo"
    ]
  },
  {
    pergunta: "Os centríolos estão envolvidos na síntese de...",
    alternativaCerta: "Nenhum material genético",
    opcoes: [
      "DNA",
      "RNA",
      "Proteínas",
      "Nenhum material genético"
    ]
  },
  {
    pergunta: "Qual é o papel dos centríolos na formação de cílios e flagelos?",
    alternativaCerta: "Eles organizam os microtúbulos que compõem essas estruturas",
    opcoes: [
      "Eles produzem enzimas para cílios e flagelos",
      "Eles armazenam energia para cílios e flagelos",
      "Eles sintetizam proteínas para cílios e flagelos",
      "Eles organizam os microtúbulos que compõem essas estruturas"
    ]
  },
  {
    pergunta: "Qual é a relação entre os centríolos e os cílios das células?",
    alternativaCerta: "Os centríolos organizam os microtúbulos que formam os cílios",
    opcoes: [
      "Os centríolos armazenam lipídios para os cílios",
      "Os centríolos realizam a fotossíntese nos cílios",
      "Os centríolos produzem hormônios para os cílios",
      "Os centríolos organizam os microtúbulos que formam os cílios"
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que se forma a partir dos centríolos e auxilia na divisão celular?",
    alternativaCerta: "Fuso acromático",
    opcoes: [
      "Núcleo",
      "Complexo de Golgi",
      "Retículo endoplasmático",
      "Fuso acromático"
    ]
  },
  {
    pergunta: "Os centríolos também estão presentes em células...",
    alternativaCerta: "Vegetais",
    opcoes: [
      "Animais",
      "Bacterianas",
      "Humanas",
      "Vegetais"
    ]
  },
  {
    pergunta: "O que é um centrossomo?",
    alternativaCerta: "Região próxima ao núcleo que contém dois centríolos",
    opcoes: [
      "Uma proteína",
      "Uma enzima",
      "Uma organela",
      "Região próxima ao núcleo que contém dois centríolos"
    ]
  },
  {
    pergunta: "Os centríolos têm um papel na movimentação de...",
    alternativaCerta: "Cílios e flagelos",
    opcoes: [
      "Lisossomos",
      "Mitocôndrias",
      "Nucléolos",
      "Cílios e flagelos"
    ]
  },
  {
    pergunta: "Qual é a relação entre os centríolos e a doença de Parkinson?",
    alternativaCerta: "Os centríolos não estão relacionados à doença de Parkinson",
    opcoes: [
      "Os centríolos produzem proteínas anormais na doença de Parkinson",
      "Os centríolos regulam a produção de dopamina na doença de Parkinson",
      "Os centríolos estão envolvidos na formação de agregados proteicos na doença de Parkinson",
      "Os centríolos não estão relacionados à doença de Parkinson"
    ]
  },
  {
    pergunta: "Os centríolos têm um papel importante na...",
    alternativaCerta: "Divisão celular e formação de cílios e flagelos",
    opcoes: [
      "Produção de energia",
      "Digestão intracelular",
      "Regulação do pH",
      "Divisão celular e formação de cílios e flagelos"
    ]
  },
  {
    pergunta: "Em que fase da divisão celular os centríolos se separam e migram para os polos?",
    alternativaCerta: "Prófase",
    opcoes: [
      "Metáfase",
      "Anáfase",
      "Telófase",
      "Prófase"
    ]
  },
  {
    pergunta: "Qual é a relação entre os centríolos e a formação do fuso mitótico?",
    alternativaCerta: "Os centríolos organizam os microtúbulos que formam o fuso mitótico",
    opcoes: [
      "Os centríolos produzem energia para o fuso mitótico",
      "Os centríolos produzem RNA para o fuso mitótico",
      "Os centríolos regulam o pH do fuso mitótico",
      "Os centríolos organizam os microtúbulos que formam o fuso mitótico"
    ]
  },
  {
    pergunta: "Quando os centríolos começam a se duplicar durante a divisão celular?",
    alternativaCerta: "Durante a fase S da interfase",
    opcoes: [
      "Durante a fase G1 da interfase",
      "Durante a fase M da mitose",
      "Durante a fase G2 da interfase",
      "Durante a fase S da interfase"
    ]
  },
  {
    pergunta: "Qual é a função dos centríolos durante a divisão celular?",
    alternativaCerta: "Organizar os microtúbulos do fuso mitótico",
    opcoes: [
      "Sintetizar DNA",
      "Produzir RNA",
      "Armazenar lipídios",
      "Organizar os microtúbulos do fuso mitótico"
    ]
  },
  {
    pergunta: "Além da divisão celular, os centríolos têm outras funções?",
    alternativaCerta: "Sim, eles também estão envolvidos na formação de cílios e flagelos",
    opcoes: [
      "Não, os centríolos têm apenas a função de organizar os microtúbulos durante a divisão celular",
      "Sim, eles também estão envolvidos na síntese de DNA",
      "Sim, eles estão envolvidos na síntese de proteínas",
      "Sim, eles também estão envolvidos na formação de cílios e flagelos"
    ]
  },
  {
    pergunta: "Os centríolos também estão presentes em células...",
    alternativaCerta: "Vegetais",
    opcoes: [
      "Animais",
      "Bacterianas",
      "Humanas",
      "Vegetais"
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que se forma a partir dos centríolos e auxilia na divisão celular?",
    alternativaCerta: "Fuso acromático",
    opcoes: [
      "Núcleo",
      "Complexo de Golgi",
      "Retículo endoplasmático",
      "Fuso acromático"
    ]
  },
  {
    pergunta: "Qual é a relação entre os centríolos e a doença de Parkinson?",
    alternativaCerta: "Os centríolos não estão relacionados à doença de Parkinson",
    opcoes: [
      "Os centríolos produzem proteínas anormais na doença de Parkinson",
      "Os centríolos regulam a produção de dopamina na doença de Parkinson",
      "Os centríolos estão envolvidos na formação de agregados proteicos na doença de Parkinson",
      "Os centríolos não estão relacionados à doença de Parkinson"
    ]
  },
  {
    pergunta: "Os centríolos têm um papel importante na...",
    alternativaCerta: "Divisão celular e formação de cílios e flagelos",
    opcoes: [
      "Produção de energia",
      "Digestão intracelular",
      "Regulação do pH",
      "Divisão celular e formação de cílios e flagelos"
    ]
  },
  {
    pergunta: "Em que fase da divisão celular os centríolos se separam e migram para os polos?",
    alternativaCerta: "Prófase",
    opcoes: [
      "Metáfase",
      "Anáfase",
      "Telófase",
      "Prófase"
    ]
  },
  {
    pergunta: "Qual é a relação entre os centríolos e a formação do fuso mitótico?",
    alternativaCerta: "Os centríolos organizam os microtúbulos que formam o fuso mitótico",
    opcoes: [
      "Os centríolos produzem energia para o fuso mitótico",
      "Os centríolos produzem RNA para o fuso mitótico",
      "Os centríolos regulam o pH do fuso mitótico",
      "Os centríolos organizam os microtúbulos que formam o fuso mitótico"
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
