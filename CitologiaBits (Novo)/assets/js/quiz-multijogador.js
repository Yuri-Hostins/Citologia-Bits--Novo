// Selecionando todos os elementos necessários
const botaoComecarMulti = document.querySelector(".botao-multiplayer button");
const caixaInformacaoMulti = document.querySelector(".caixa-informacao-multi");
const caixaNomesMulti = document.querySelector(".caixa-nomes-multi");
const modalNumeroEquipes = document.querySelector(".caixa-numero-equipes");
const botaoSairMulti = caixaInformacaoMulti.querySelector(".botoes-multi .sair-multi");
const botaoContinuarMulti = caixaInformacaoMulti.querySelector(".botoes-multi .reiniciar-multi");
const caixaQuizMulti = document.querySelector(".caixa-quiz-multi");
const caixaResultadoMulti = document.querySelector(".caixa-resultado-multi");
const listaOpcaoMulti = document.querySelector(".lista-opcao-multi");
const linhaTempoMulti = document.querySelector("header .linha-tempo-multi");
const textoTempoMulti = document.querySelector(".tempo-multi .texto-esquerdo-tempo-multi");
const contagemTempoMulti = document.querySelector(".tempo-multi .tempo-segundo-multi");
const botaoEscolherEquipes = document.getElementById("botao-escolher-equipes");
const numeroEquipesInput = document.getElementById("numero-equipes");
const mensagemErro = document.querySelector(".mensagem-erro");
const mensagemErroNome = document.querySelector(".mensagem-erro-nome");
const containerEquipes = document.querySelector(".container-equipes");
const botaoComecarQuiz = document.getElementById("comecar-quiz");

// criando um array e passando o número, perguntas, opções e respostas
let perguntasMulti = [
  { 
    pergunta: "Qual é o instrumento musical tradicional mais popular da África?",
    alternativaCerta: "Tambores",
    opcoes: [
      "Djembe",
      "Tambores",
      "Kalimba",
      "Violão",
    ],
  },
  {
    pergunta: 'Qual é o significado simbólico das máscaras africanas?',
    alternativaCerta: "Proteção contra espíritos malignos",
    opcoes: [
      "Proteção contra espíritos malignos",
      "Status social do usuário",
      "Expressão de emoções humanas",
      "Representação de animais sagrados",
    ],
  },
  {
    pergunta: 'Em qual região da África as máscaras são mais proeminentes na cultura?',
    alternativaCerta: "África Ocidental",
    opcoes: [
      "África Austral",
      "África Oriental",
      "África Ocidental",
      "África Central",
    ],
  },
];


// se o botão startQuiz for clicado
botaoComecarMulti.onclick = () => {
  caixaInformacaoMulti.classList.add("informacaoAtivoMulti"); // mostrar info box
};

// se o botão exitQuiz for clicado
botaoSairMulti.onclick = () => {
  caixaInformacaoMulti.classList.remove("informacaoAtivoMulti"); // esconder info box
};

// se o botão continueQuiz for clicado
botaoContinuarMulti.onclick = () => {
  caixaInformacaoMulti.classList.remove("informacaoAtivoMulti"); // esconder info box
  caixaQuizMulti.classList.add("quizAtivoMulti"); // mostrar quiz box
  mostrarPerguntasMulti(0); // chamando a função showperguntas
  contadorPerguntasMulti(1); // passando 1 parâmetro para contadorPerguntas
  iniciarTempoMulti(15); // chamando a função iniciarTempoMulti
  iniciarLinhaTemporizadorMulti(0); // chamando a função iniciarLinhaTemporizadorMulti
};

let tempoValorMulti = 15;
let contagemPerguntasMulti = 0;
let numeroPerguntasMulti = 1;
let pontoUsarioMulti = 0;
let contadorMulti;
let contadorLinhaMulti;
let valorLarguraMulti = 0;

const reinicioQuizMulti = caixaResultadoMulti.querySelector(".botoes-multi .reiniciar-multi");
const sairQuizMulti = caixaResultadoMulti.querySelector(".botoes-multi .sair-multi");

// se o botão restartQuiz for clicado
reinicioQuizMulti.onclick = () => {
  caixaQuizMulti.classList.add("quizAtivoMulti"); // mostrar quiz box
  caixaResultadoMulti.classList.remove("resultadoAtivoMulti"); // esconder result box
  tempoValorMulti = 15;
  contagemPerguntasMulti = 0;
  numeroPerguntasMulti = 1;
  pontoUsarioMulti = 0;
  valorLarguraMulti = 0;
  mostrarPerguntasMulti(contagemPerguntasMulti); // chamando a função showperguntas
  contadorPerguntasMulti(numeroPerguntasMulti); // passando o valor numeroPerguntasMulti para contadorPerguntas
  clearInterval(contadorMulti); // limpar contador
  clearInterval(contadorLinhaMulti); // limpar contadorLinhaMulti
  iniciarTempoMulti(tempoValorMulti); // chamando a função iniciarTempoMulti
  iniciarLinhaTemporizadorMulti(valorLarguraMulti); // chamando a função iniciarLinhaTemporizadorMulti
  textoTempoMulti.textContent = "Tempo Restante"; // alterar o texto de textoTempoMulti para Tempo Restante
  botaoProximoMulti.classList.remove("mostrar-multi"); // esconder o botão next
};

// se o botão quitQuiz for clicado
sairQuizMulti.onclick = () => {
  window.location.reload(); // recarregar a página atual
};

const botaoProximoMulti = document.querySelector(".footer-quiz-multi .botao-proximo-multi");
const contadorPerguntasInferiorMulti = document.querySelector(".footer-quiz-multi .perguntas-total-multi");

// se o botão Next Que for clicado
botaoProximoMulti.onclick = () => {
  // Lógica para passar para a próxima equipe
  equipeAtual = (equipeAtual + 1);

  if (contagemPerguntasMulti < perguntasMulti.length - 1) {
    // Se houver mais perguntas, avance para a próxima pergunta
    contagemPerguntasMulti++;
    numeroPerguntasMulti++;
    mostrarPerguntasMulti(contagemPerguntasMulti);
    contadorPerguntasMulti(numeroPerguntasMulti);
    clearInterval(contadorMulti);
    clearInterval(contadorLinhaMulti);
    iniciarTempoMulti(tempoValorMulti);
    iniciarLinhaTemporizadorMulti(valorLarguraMulti);
    textoTempoMulti.textContent = "Tempo Restante";
    botaoProximoMulti.classList.remove("mostrar-multi");
  } else {
    // Se não houver mais perguntas, mostrar o resultado
    clearInterval(contadorMulti);
    clearInterval(contadorLinhaMulti);
    mostrarResultadoMulti();
  }

  // Atualizar o turno da equipe atual
  atualizarTurno(equipeAtual, nomesEquipes);
};


// obtendo perguntas e opções do array
function mostrarPerguntasMulti(index) {
  const textoPerguntasMulti = document.querySelector(".texto-perguntas-multi");
  const listaOpcaoMulti = document.querySelector(".lista-opcao-multi");

  // Limpa o conteúdo existente
  textoPerguntasMulti.innerHTML = "";
  listaOpcaoMulti.innerHTML = "";

  // Crie elementos HTML dinamicamente
  const perguntaElement = document.createElement("span");
  perguntaElement.textContent = `${index + 1}. ${perguntasMulti[index].pergunta}`;

  textoPerguntasMulti.appendChild(perguntaElement);

  const opcoes = perguntasMulti[index].opcoes;
  opcoes.forEach((opcao, i) => {
    const opcaoElement = document.createElement("div");
    opcaoElement.classList.add("opcao-multi");
    opcaoElement.innerHTML = `<span>${opcao}</span>`;
    opcaoElement.addEventListener("click", () => opcaoSelecionadaMulti(opcaoElement));
    listaOpcaoMulti.appendChild(opcaoElement);
  });
}


// criando as novas tags div para os ícones
let iconeCertoMulti = '<div class="icone-multi marcacao-multi"><i class="fas fa-check"></i></div>';
let iconeErradoMulti = '<div class="icone-multi cruzar-multi"><i class="fas fa-times"></i></div>';

let numeroEquipes = 0; // Número de equipes
let equipeAtual = 0; // Equipe que está jogando no momento
let respostasEquipes = Array(numeroEquipes).fill(0); // Array para armazenar as respostas de cada equipe


// Função para iniciar o jogo com o número de equipes escolhido
function iniciarJogoMulti(numEquipes) {
  numeroEquipes = numEquipes;
  respostasEquipes = Array(numeroEquipes).fill(0); // Inicialize o array de respostas

  // Adicione esta linha para atualizar o nome da equipe atual
  atualizarTurno(equipeAtual, nomesEquipes);
}

let statusEquipes = Array(numeroEquipes).fill(false); // Array para acompanhar o status de resposta de cada equipe


// se o usuário clicar em uma opção
function opcaoSelecionadaMulti(alternativaCerta) {
  clearInterval(contadorMulti);
  clearInterval(contadorLinhaMulti);
  const respostaCorretaMulti = perguntasMulti[contagemPerguntasMulti].alternativaCerta;

  // Verifique se a equipe já respondeu a pergunta
  if (statusEquipes[equipeAtual]) {
    return; // Se a equipe já respondeu, não faça nada
  }

  // Atualize a resposta da equipe atual
  respostasEquipes[equipeAtual]++;
  // Atualize o status da equipe atual para true, indicando que ela respondeu
  statusEquipes[equipeAtual] = true;

  const todasOpcoesMulti = listaOpcaoMulti.children.length;

  // Ocultar as respostas escolhidas pelas equipes
  for (let i = 0; i < todasOpcoesMulti; i++) {
    listaOpcaoMulti.children[i].classList.add("disabled-multi");
  }

  // Verifique se todas as equipes responderam
  if (statusEquipes.every(resposta => resposta)) {
    botaoProximoMulti.classList.add("mostrar-multi"); // Mostrar o botão Next

    // Agora, revele as respostas corretas e incorretas
    for (let i = 0; i < todasOpcoesMulti; i++) {
      if (listaOpcaoMulti.children[i].textContent === respostaCorretaMulti) {
        listaOpcaoMulti.children[i].setAttribute("class", "opcao-multi correto-multi");
        listaOpcaoMulti.children[i].insertAdjacentHTML("beforeend", iconeCertoMulti);
      } else {
        listaOpcaoMulti.children[i].setAttribute("class", "opcao-multi incorreto-multi");
        listaOpcaoMulti.children[i].insertAdjacentHTML("beforeend", iconeErradoMulti);
      }
    }
  } else {
    // Encontre a próxima equipe que ainda não respondeu
    let proximaEquipe = equipeAtual;
    do {
      proximaEquipe = (proximaEquipe + 1) % numeroEquipes;
    } while (statusEquipes[proximaEquipe]); // Encontre a próxima equipe não respondida

    // Atualize a equipe atual
    equipeAtual = proximaEquipe;

    // Atualize o nome da equipe atual
    atualizarTurno(equipeAtual, nomesEquipes);
  }
}


function mostrarResultadoMulti() {
  caixaInformacaoMulti.classList.remove("informacaoAtivoMulti"); // esconder info box
  caixaQuizMulti.classList.remove("quizAtivoMulti"); // esconder quiz box
  caixaResultadoMulti.classList.add("resultadoAtivoMulti"); // mostrar result box
  const pontosTextoMulti = caixaResultadoMulti.querySelector(".pontos-textos-multi");
  
  if (pontoUsarioMulti > 3) {
    // se o usuário acertar mais de 3 perguntas
    // criando uma nova tag span e passando o número de pontos do usuário e o número total de perguntas
    let scoreTagMulti =
      "<span>Parabéns! Você acertou <p>" +
      pontoUsarioMulti +
      "</p> de <p>" +
      perguntasMulti.length +
      "</p></span>";
    pontosTextoMulti.innerHTML = scoreTagMulti; // adicionando a nova tag span dentro de pontosTextoMulti
  } else if (pontoUsarioMulti > 1) {
    // se o usuário acertar mais de 1 pergunta
    let scoreTagMulti =
      "<span>Legal! Você acertou <p>" +
      pontoUsarioMulti +
      "</p> de <p>" +
      perguntasMulti.length +
      "</p></span>";
    pontosTextoMulti.innerHTML = scoreTagMulti;
  } else {
    // se o usuário acertar menos de 1 pergunta
    let scoreTagMulti =
      "<span>Desculpe, você acertou apenas <p>" +
      pontoUsarioMulti +
      "</p> de <p>" +
      perguntasMulti.length +
      "</p></span>";
    pontosTextoMulti.innerHTML = scoreTagMulti;
  }
  
}

function iniciarTempoMulti(timeMulti) {
  contadorMulti = setInterval(timer, 1000);
  function timer() {
    contagemTempoMulti.textContent = timeMulti; // alterando o valor de contagemTempoMulti com o valor de tempo
    timeMulti--; // decrementando o valor do tempo
    if (timeMulti < 9) {
      // se o tempo for menor que 9
      let addZero = contagemTempoMulti.textContent;
      contagemTempoMulti.textContent = "0" + addZero; // adicionar um 0 antes do valor do tempo
    }
    if (timeMulti < 0) {
      // se o tempo for menor que 0
      clearInterval(contadorMulti); // limpar contador
      textoTempoMulti.textContent = "Tempo Esgotado"; // alterar o texto de textoTempoMulti para Tempo Esgotado
      const todasOpcoesMulti = listaOpcaoMulti.children.length; // obtendo todos os itens de opção
      let respostaCorretaMulti = perguntasMulti[contagemPerguntasMulti].alternativaCerta; // obtendo a resposta correta do array
      for (i = 0; i < todasOpcoesMulti; i++) {
        if (listaOpcaoMulti.children[i].textContent == respostaCorretaMulti) {
          // se houver uma opção que corresponde à resposta do array
          listaOpcaoMulti.children[i].setAttribute("class", "opcao-multi correto-multi"); // adicionar a cor verde à opção correspondente
          listaOpcaoMulti.children[i].insertAdjacentHTML("beforeend", iconeCertoMulti); // adicionar o ícone de marca de seleção à opção correspondente
          console.log("Tempo Esgotado: Resposta correta selecionada automaticamente.");
        }
      }
      for (i = 0; i < todasOpcoesMulti; i++) {
        listaOpcaoMulti.children[i].classList.add("disabled-multi"); // uma vez que o usuário selecionou uma opção, desabilitar todas as opções
      }
      botaoProximoMulti.classList.add("mostrar-multi"); // mostrar o botão next se o usuário selecionar alguma opção
    }
  }
}

function iniciarLinhaTemporizadorMulti(timeMulti) {
  contadorLinhaMulti = setInterval(timer, 29);
  function timer() {
    timeMulti += 1; // incrementar o valor do tempo em 1
    linhaTempoMulti.style.width = timeMulti + "px"; // aumentar a largura da linhaTempoMulti com px pelo valor do tempo

    // Verificar a largura da tela
    if (window.innerWidth < 600) {
      clearInterval(contadorLinhaMulti); // Limpar contadorLinhaMulti
    }

    if (timeMulti > 549) {
      // se o valor do tempo for maior que 549
      clearInterval(contadorLinhaMulti); // limpar contadorLinhaMulti
    }
  }
}

// Função para embaralhar o array de perguntas
function embaralharPerguntasMulti(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Função para gerar um conjunto aleatório de perguntas do conjunto maior
function gerarPerguntasAleatoriasMulti() {
  embaralharPerguntasMulti(perguntasMulti); // Embaralhar as perguntas
  return perguntasMulti.slice(0, 10); // Selecionar as primeiras 10 perguntas
}

// se o botão continueQuiz for clicado
botaoContinuarMulti.onclick = () => {
  caixaInformacaoMulti.classList.remove("informacaoAtivoMulti"); // esconder info box
  caixaQuizMulti.classList.add("quizAtivoMulti"); // mostrar quiz box
  perguntasMulti = gerarPerguntasAleatoriasMulti(); // Gerar um conjunto aleatório de perguntas
  mostrarPerguntasMulti(0); // chamando a função showperguntas
  contadorPerguntasMulti(1); // passando 1 parâmetro para contadorPerguntasMulti
  iniciarTempoMulti(15); // chamando a função iniciarTempoMulti
  iniciarLinhaTemporizadorMulti(0); // chamando a função iniciarLinhaTemporizadorMulti
};

// se o botão restartQuiz for clicado
reinicioQuizMulti.onclick = () => {
  caixaQuizMulti.classList.add("quizAtivoMulti"); // mostrar quiz box
  caixaResultadoMulti.classList.remove("resultadoAtivoMulti"); // esconder result box
  tempoValorMulti = 15;
  contagemPerguntasMulti = 0;
  numeroPerguntasMulti = 1;
  pontoUsarioMulti = 0;
  valorLarguraMulti = 0;
  perguntasMulti = gerarPerguntasAleatoriasMulti(); // Gerar um conjunto aleatório de perguntas
  mostrarPerguntasMulti(contagemPerguntasMulti); // chamando a função showperguntas
  contadorPerguntasMulti(numeroPerguntasMulti); // passando o valor numeroPerguntasMulti para contadorPerguntasMulti
  clearInterval(contadorMulti); // limpar contador
  clearInterval(contadorLinhaMulti); // limpar contadorLinhaMulti
  iniciarTempoMulti(tempoValorMulti); // chamando a função iniciarTempoMulti
  iniciarLinhaTemporizadorMulti(valorLarguraMulti); // chamando a função iniciarLinhaTemporizadorMulti
  textoTempoMulti.textContent = "Tempo Restante"; // alterar o texto de textoTempoMulti para Tempo Restante
  botaoProximoMulti.classList.remove("mostrar-multi"); // esconder o botão next
};

function contadorPerguntasMulti(index) {
  // criando uma nova tag span e passando o número da pergunta e o número total de perguntas
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> de <p>" +
    perguntasMulti.length +
    "</p> Perguntas</span>";
  contadorPerguntasInferiorMulti.innerHTML = totalQueCounTag; // adicionando a nova tag span dentro de contadorPerguntasInferiorMulti
}

// Se o botão startQuiz for clicado
botaoComecarMulti.onclick = () => {
  caixaInformacaoMulti.classList.add("informacaoAtivoMulti"); // mostrar info box
};

// Se o botão exitQuiz for clicado
botaoSairMulti.onclick = () => {
  caixaInformacaoMulti.classList.remove("informacaoAtivoMulti"); // esconder info box
};

// Se o botão continueQuiz for clicado
botaoContinuarMulti.onclick = () => {
  caixaInformacaoMulti.classList.remove("informacaoAtivoMulti"); // esconder info box
  modalNumeroEquipes.style.display = "flex"; // mostrar o modal dos nomes dos jogadores
};

// Adiciona um manipulador de eventos ao botão "Escolher"
botaoEscolherEquipes.addEventListener("click", () => {
  const numeroEquipes = parseInt(numeroEquipesInput.value);
  if (numeroEquipes >= 2 && numeroEquipes <= 8) {
    // O número inserido é válido, então você pode prosseguir com o jogo
    modalNumeroEquipes.style.display = "none"; // Oculta o modal
    iniciarJogoMulti(numeroEquipes); // Inicia o jogo com o número de equipes escolhido
  } else {
    // Exibe a mensagem de erro, pois o número inserido está fora do intervalo
    mensagemErro.style.display = "block";
  }
});


// Adicione o evento de clique ao botão "Continuar" com o id "botao-escolher-equipes"
botaoEscolherEquipes.addEventListener("click", () => {
  const numeroEquipes = parseInt(numeroEquipesInput.value);
  if (numeroEquipes >= 2 && numeroEquipes <= 8) {
    // O número inserido é válido, então você pode prosseguir com o jogo
    modalNumeroEquipes.style.display = "none"; // Oculta o modal "caixa-numero-equipes"
    caixaNomesMulti.style.display = "block"; // Mostra o modal "caixa-nomes-multi"
  } else {
    // Exibe a mensagem de erro, pois o número inserido está fora do intervalo
    mensagemErro.style.display = "block";
  }
});

// Adicione um manipulador de eventos ao botão "Escolher"
botaoEscolherEquipes.addEventListener("click", () => {
  const numeroEquipes = parseInt(numeroEquipesInput.value);
  if (numeroEquipes >= 2 && numeroEquipes <= 8) {
    // O número inserido é válido, então você pode prosseguir com a lógica de descomentar partes do modal.
    // Primeiro, vamos ocultar todas as equipes existentes.
    const equipes = document.querySelectorAll(".equipe");
    equipes.forEach(equipe => {
      equipe.style.display = "none";
    });

    // Agora, com base no número de equipes escolhido, exibiremos as equipes correspondentes.
    for (let i = 0; i < numeroEquipes; i++) {
      equipes[i].style.display = "block";
    }

    // Oculta o modal "caixa-numero-equipes"
    modalNumeroEquipes.style.display = "none";

    // Exibe o modal "caixa-nomes-multi" com as equipes correspondentes visíveis
    caixaNomesMulti.style.display = "block";
  } else {
    // Exibe a mensagem de erro, pois o número inserido está fora do intervalo
    mensagemErro.style.display = "block";
  }
});



botaoComecarQuiz.addEventListener("click", () => {
  // Obtém o número de equipes
  const numeroEquipes = parseInt(numeroEquipesInput.value);

  // Crie uma função para verificar se os campos estão vazios
  function verificarCamposVazios() {
    const camposInputEquipes = document.querySelectorAll(".nomeEquipe");
    let algumCampoVazio = false;

    camposInputEquipes.forEach((campo, index) => {
      // Verifica se o campo está vazio e se ele pertence a uma equipe visível (com base no número de equipes)
      if (campo.value.trim() === "" && index < numeroEquipes) {
        algumCampoVazio = true;
      }
    });

    return algumCampoVazio;
  }

  if (verificarCamposVazios()) {
    // Exibe a mensagem de erro se algum campo estiver vazio
    mensagemErroNome.style.display = "block";
  } else {
    // Se nenhum campo estiver vazio, oculte a mensagem de erro e prossiga com o jogo
    mensagemErroNome.style.display = "none";
    caixaNomesMulti.style.display = "none";
    caixaQuizMulti.classList.add("quizAtivoMulti"); // mostrar quiz box
    mostrarPerguntasMulti(0);
    contadorPerguntasMulti(1);
    iniciarTempoMulti(15);
    iniciarLinhaTemporizadorMulti(0);
  }
});













// Função para configurar as equipes
function configurarEquipes() {
  const camposInputEquipes = document.querySelectorAll(".nomeEquipe");
  const equipeNomes = [];
  for (let i = 0; i < camposInputEquipes.length; i++) {
    equipeNomes.push(camposInputEquipes[i].value);
  }
  return equipeNomes;
}

// Função para atualizar o turno
function atualizarTurno(equipeAtual, equipeNomes) {
  const turnoAtual = document.getElementById("turno-atual");
  turnoAtual.textContent = equipeNomes[equipeAtual];
}



botaoComecarQuiz.addEventListener("click", () => {
  // Obtém o número de equipes
  const numeroEquipes = parseInt(numeroEquipesInput.value);
  const nomesEquipesArray = [];
  
  // Array para armazenar os nomes das equipes
  const nomesEquipes = [];

  // Crie uma função para verificar se os campos estão vazios
  function verificarCamposVazios() {
    const camposInputEquipes = document.querySelectorAll(".nomeEquipe");
    let algumCampoVazio = false;

    camposInputEquipes.forEach((campo, index) => {
      // Verifica se o campo está vazio e se ele pertence a uma equipe visível (com base no número de equipes)
      if (campo.value.trim() === "" && index < numeroEquipes) {
        algumCampoVazio = true;
      }
    });

    return algumCampoVazio;
  }

  if (verificarCamposVazios()) {
    // Exibe a mensagem de erro se algum campo estiver vazio
    mensagemErroNome.style.display = "block";
  } else {
    // Se nenhum campo estiver vazio, oculte a mensagem de erro
    mensagemErroNome.style.display = "none";

    // Preencha o array de nomes das equipes
    const camposInputEquipes = document.querySelectorAll(".nomeEquipe");
    camposInputEquipes.forEach((campo, index) => {
      if (index < numeroEquipes) {
        nomesEquipes.push(campo.value);
      }
    });

    // Oculta a caixa de nomes
    caixaNomesMulti.style.display = "none";

    // Exiba a caixa de perguntas com os nomes das equipes
    caixaQuizMulti.classList.add("quizAtivoMulti");

    // Exiba os nomes das equipes no elemento "turno-container"
    exibirNomesEquipes(nomesEquipes);
  }
});

function exibirNomesEquipes(nomesEquipes) {
  const turnoContainer = document.querySelector(".turno-container");
  const turnoAtual = turnoContainer.querySelector("#turno-atual");
  const turno = turnoContainer.querySelector("#turno");

  // Variável para controlar o índice da equipe atual
  let indiceEquipeAtual = 0;

  // Função para atualizar o nome da equipe atual
  function atualizarNomeEquipe() {
    turno.textContent = nomesEquipes[indiceEquipeAtual];
  }

  // Função para avançar para a próxima equipe
  function proximaEquipe() {
    indiceEquipeAtual = (indiceEquipeAtual + 1) % nomesEquipes.length;
    atualizarNomeEquipe();
  }

  // Inicialize com a primeira equipe
  atualizarNomeEquipe();

  // Adicione um manipulador de eventos ao botão "Próximo teste"
  botaoProximoMulti.addEventListener("click", () => {
    // Lógica para passar para a próxima equipe quando o botão for clicado
    proximaEquipe();
  });
} 