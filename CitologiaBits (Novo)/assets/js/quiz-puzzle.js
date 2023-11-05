// se o botão exitQuiz for clicado
botaoSairPuzzle.onclick = () => {
  caixaInformacaoPuzzle.classList.remove("informacaoAtivo"); // Esconder a caixa de informação do quiz de palavras cruzadas
  botaoComeca.classList.remove("esconder"); // ocultar o botão
};


// se o botão exitQuiz for clicado
botaoSair.onclick = () => {
  caixaInformacao.classList.remove("informacaoAtivo"); // esconder info box
};

// se o botão continueQuiz for clicado
botaoContinuar.onclick = () => {
  caixaInformacao.classList.remove("informacaoAtivo"); // Esconder a caixa de informações
  caixaQuiz.classList.add("quizAtivo"); // Mostrar a caixa do quiz
   // Obtenha todas as palavras-chave disponíveis
   const palavrasChaveDisponiveis = Object.keys(palavrasObj);

   // Selecione uma palavra-chave aleatória
   const palavraChaveSelecionada = palavrasChaveDisponiveis[Math.floor(Math.random() * palavrasChaveDisponiveis.length)];
 
   // Obtenha as perguntas relacionadas à palavra-chave selecionada
   const perguntas = perguntasPorPalavra[palavraChaveSelecionada];
  mostrarPerguntas(0); // Chamar a função showperguntas
  contadorPerguntas(1); // Passar 1 parâmetro para contadorPerguntas
  iniciarTempo(10); // Chamar a função iniciarTempo
  iniciarLinhaTemporizador(0); // Chamar a função iniciarLinhaTemporizador

  // Inicie o quiz com a palavra-chave e as perguntas
  iniciarQuiz(palavraChaveSelecionada, perguntas);
};

function iniciarQuiz(palavraChave, perguntas) {
  let pontoUsuario = 0;

  // Embaralhe as perguntas para tornar o quiz mais variado
  shuffleperguntas(perguntas);

  // Exiba a primeira pergunta
  mostrarPergunta(contagemPerguntas);

  // Função para exibir uma pergunta
  function mostrarPergunta(indice) {
    if (indice < perguntas.length) {
      const perguntaAtual = perguntas[indice];

      // Limpe as opções anteriores
      listaOpcao.innerHTML = "";

      // Exiba a pergunta e opções
      textoPerguntas.innerText = `${indice + 1}. ${perguntaAtual.pergunta}`;

      perguntaAtual.opcoes.forEach((opcao, index) => {
        const opcaoElement = document.createElement("div");
        opcaoElement.classList.add("opcao");
        opcaoElement.textContent = opcao;
        opcaoElement.addEventListener("click", () => responderPergunta(index));
        listaOpcao.appendChild(opcaoElement);
      });

      // Atualize o contador de perguntas
      contadorPerguntas(indice + 1);
    } else {
      // Todas as perguntas foram respondidas, mostrar resultado
      mostrarResultado();
    }
  }
};

let tempoValor = 10;
let contagemPerguntas = 0;
let numeroPerguntas = 1;
let pontoUsario = 0;
let contadorQuiz;
let contadorLinha;
let valorLargura = 0;

// Função para recarregar a página
function recarregarPagina() {
  window.location.reload(); // recarrega a página atual
}

// Associar a função aos botões "Sair" na caixa de informação e na caixa de resultado
const botaoSairQuiz = document.querySelectorAll(".botoes .sair");

botaoSairQuiz.forEach((botao) => {
  botao.addEventListener("click", recarregarPagina);
});

const botaoProximo = document.querySelector(".footer-quiz .botao-proximo");
const contadorPerguntasInferior = document.querySelector(".footer-quiz .perguntas-total");

// se o botão Next Que for clicado
botaoProximo.onclick = () => {
  if (contagemPerguntas < perguntas.length - 1) {
    // se o contador de perguntas for menor que o comprimento total das perguntas
    contagemPerguntas++; // incrementar o valor do contador de perguntas
    numeroPerguntas++; // incrementar o valor do contador de números das perguntas
    mostrarPerguntas(contagemPerguntas); // chamando a função showperguntas
    contadorPerguntas(numeroPerguntas); // passando o valor do contador de números das perguntas para contadorPerguntas
    clearInterval(contadorQuiz); // limpar contador
    clearInterval(contadorLinha); // limpar contadorLinha
    iniciarTempo(tempoValor); // chamando a função iniciarTempo
    iniciarLinhaTemporizador(valorLargura); // chamando a função iniciarLinhaTemporizador
    textoTempo.textContent = "Tempo Restante"; // alterar o texto de textoTempo para Tempo Restante
    botaoProximo.classList.remove("mostrar"); // esconder o botão next
  } else {
    clearInterval(contadorQuiz); // limpar contador
    clearInterval(contadorLinha); // limar contadorLinha
    mostrarResultado(); // chamando a função mostrarResultado
  }
};

// obtendo perguntas e opções do array
function mostrarPerguntas(index) {
  const textoPerguntas = document.querySelector(".texto-perguntas");

  // criando uma nova tag span e div para a pergunta e opção e passando o valor usando o índice do array
  let perguntasMarcada = "<span>" + (index + 1) + ". " + perguntas[index].pergunta + "</span>";
  let opcaoMarcada =
    //<p class="prefixo-escolha">A</p>
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
let iconeCerto = '<div class="icone marcacao"><i class="fas fa-check"></i></div>';
let iconeErrado = '<div class="icone cruzar"><i class="fas fa-times"></i></div>';

// se o usuário clicar em uma opção
function opcaoSelecionada(alternativaCerta) {
  clearInterval(contadorQuiz); // limpar contador
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
  const numeroMaximoPerguntas = 3; // Definir o número máximo de perguntas

  if (pontoUsario === numeroMaximoPerguntas) {
    // Se o usuário acertar todas as 3 perguntas
    let scoreTag =
      "<span>Parabéns! Você acertou todas as " +
      numeroMaximoPerguntas +
      " perguntas!</span>";
    audioVitoria.play();
    containerConfetes.classList.remove("esconder");
    pontosTexto.innerHTML = scoreTag;
  } else if (pontoUsario > 0) {
    // Se o usuário acertar pelo menos uma pergunta
    let scoreTag =
      "<span>Legal! Você acertou <p>" +
      pontoUsario +
      "</p> de <p>" +
      numeroMaximoPerguntas +
      "</p> perguntas.</span>";
    pontosTexto.innerHTML = scoreTag;
  } else {
    // Se o usuário não acertar nenhuma pergunta
    let scoreTag = "<span>Desculpe, você não acertou nenhuma pergunta.</span>";
    pontosTexto.innerHTML = scoreTag;
  }
}



function iniciarTempo(time) {
  contadorQuiz = setInterval(timer, 1000);
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
      clearInterval(contadorQuiz); // limpar contador
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
  contadorLinha = setInterval(timer, 20);
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
  return perguntas.slice(0, 3); // Selecionar as primeiras 3 perguntas
}

// se o botão continueQuiz for clicado
botaoContinuar.onclick = () => {
  caixaInformacao.classList.remove("informacaoAtivo"); // esconder info box
  caixaQuiz.classList.add("quizAtivo"); // mostrar quiz box
  perguntas = gerarPerguntasAleatorias(); // Gerar um conjunto aleatório de perguntas
  mostrarPerguntas(0); // chamando a função showperguntas
  contadorPerguntas(1); // passando 1 parâmetro para contadorPerguntas
  iniciarTempo(10); // chamando a função iniciarTempo
  iniciarLinhaTemporizador(0); // chamando a função iniciarLinhaTemporizador
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