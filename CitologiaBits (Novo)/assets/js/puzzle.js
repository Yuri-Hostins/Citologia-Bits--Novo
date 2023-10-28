// Obter referências aos elementos HTML
const botaoComeca = document.getElementById("botao-comeca");
const telaCobertura = document.querySelector(".tela-cobertura");
const resultado = document.getElementById("resultado");
const container = document.querySelector(".container-jogo-dois");
const exibicaoPalavras = document.querySelector(".exibicao-palavras");
const inputContainer = document.querySelector(".input-container");
const palavrasValidas = document.querySelector(".palavras-validas");
const botaoEnvio = document.querySelector("#botao-envio");
const mensagemErro = document.getElementById("mensagem-erro");
const caixaInformacaoPuzzle = document.querySelector(".caixa-informacao-puzzle");
const botaoContinuarPuzzle = caixaInformacaoPuzzle.querySelector(".reiniciar-puzzle");
const containerJogoDois = document.querySelector(".container-jogo-dois");
const caixaInformacao = document.querySelector(".caixa-informacao");
const botaoSair = caixaInformacao.querySelector(".botoes .sair");
const botaoSairPuzzle = caixaInformacaoPuzzle.querySelector(".botoes-puzzle .sair-puzzle");
const botaoContinuar = caixaInformacao.querySelector(".botoes .reiniciar");
const caixaQuiz = document.querySelector(".caixa-quiz");
const caixaResultado = document.querySelector(".caixa-resultado");
const listaOpcao = document.querySelector(".lista-opcao");
const linhaTempo = document.querySelector("header .linha-tempo");
const textoTempo = document.querySelector(".tempo .texto-esquerdo-tempo");
const contagemTempo = document.querySelector(".tempo .tempo-segundo");

// Definir objetos de palavras com suas saídas esperadas
let palavrasObj = {
	CITOPLASMA: ["AMA", "COLA", "CITO", "ASMA", "CITOPLASMA"],
  ORGANELAS: ["SAL", "SELA", "NELAS", "ALGAS", "ORGANELAS"],
  RIBOSSOMOS: ["RIO", "RISO", "ROBO", "SOMBRIO", "RIBOSSOMOS"],
  LISOSSOMOS: ["SOS", "LIMO", "LISO", "SOMOS", "LISOSSOMOS"],
  PEROXISSOMOS: ["OXE", "ROSE", "PISO", "PROXIMOS", "PEROXISSOMOS"],
  VACUOLOS: ["LUVA", "CALO", "VASCO", "LOUCOS", "VACUOLOS"],
  RETICULOS_ENDOPLASMATICOS: ["RETO", "MIRA", "SAMIRA", "PLASTICO", "RETICULOS_ENDOPLASMATICOS"],
  COMPLEXO_GOLGIENSE: ["GOL", "PEGO", "GENES", "COMPLEXO", "COMPLEXO_GOLGIENSE"],
  CENTRIOLOS: ["NETO", "SELO", "TRIO", "CENTRO", "CENTRIOLOS"],
  MITOCONDRIAS: ["DIA", "MITO", "MATO", "CONTAS", "MITOCONDRIAS"],
};

let perguntasPorPalavra = {
  CITOPLASMA: [
    {
      pergunta: "Qual é a função principal do citoplasma?",
      alternativaCerta: "Realizar várias funções celulares.",
      opcoes: [
        "Armazenar o núcleo da célula.",
        "Sintetizar proteínas.",
        "Realizar várias funções celulares.",
        "Controlar o tráfego de substâncias na célula.",
      ],
    },
    {
      pergunta: "Qual é a principal função do citoplasma nas células?",
      alternativaCerta: "Abrigar organelas celulares e desempenhar funções celulares.",
      opcoes: [
        "Armazenar informações genéticas",
        "Realizar a fotossíntese.",
        "Abrigar organelas celulares e desempenhar funções celulares.",
        "Controlar o fluxo de substâncias para dentro e para fora da célula."
      ]
    }
  ],
  ORGANELAS: [
    {
      pergunta: "O que são as mitocôndrias?",
      alternativaCerta: "As usinas de energia da célula.",
      opcoes: [
        "Estruturas de suporte celular.",
        "As usinas de energia da célula.",
        "Locais de armazenamento de informações genéticas.",
        "Estruturas de digestão celular.",
      ],
    },
    {
      pergunta: "Qual organela é conhecida como o 'centro de controle' da célula e abriga informações genéticas?",
      alternativaCerta: "Núcleo.",
      opcoes: [
        "Mitocôndria.",
        "Cloroplasto.",
        "Núcleo.",
        "Complexo de Golgi."
      ],
    },
  ],
  RIBOSSOMOS:[
    {
      pergunta: "Qual é a função principal dos peroxissomos nas células?",
      alternativaCerta: "Metabolizar ácidos graxos e decompor peróxidos tóxicos.",
      opcoes: [
        "Síntese de proteínas.",
        "Armazenar glicose.",
        "Metabolizar ácidos graxos e decompor peróxidos tóxicos.",
        "Produzir energia através da fotossíntese."
      ],
    },
  ],
  LISOSSOMOS:[
    {
      pergunta: "Qual é a função principal dos lisossomos nas células?",
      alternativaCerta: "Realizar a digestão intracelular de substâncias e organelas danificadas.",
      opcoes: [
        "Síntese de proteínas.",
        "Armazenar informações genéticas.",
        "Realizar a digestão intracelular de substâncias e organelas danificadas.",
        "Produzir ATP (trifosfato de adenosina)."
      ]
    },
  ],
  PEROXISSOMOS:[
    {
      pergunta: "Qual é a função principal dos peroxissomos nas células?",
      alternativaCerta: "Metabolizar ácidos graxos e decompor peróxidos tóxicos.",
      Opcoes: [
        "Síntese de proteínas.",
        "Armazenar glicose.",
        "Metabolizar ácidos graxos e decompor peróxidos tóxicos.",
        "Produzir energia através da fotossíntese."
      ]
    },
  ],
  VACUOLOS:[
    {
      pergunta: "Qual é a função principal dos vacúolos nas células vegetais?",
      alternativaCerta: "Armazenar água, nutrientes e manter a turgidez da célula.",
      Opcoes: [
        "Síntese de proteínas.",
        "Produzir energia através da fotossíntese.",
        "Realizar a digestão intracelular de substâncias.",
        "Armazenar água, nutrientes e manter a turgidez da célula."
      ]
    }
  ],
  RETICULOS_ENDOPLASMATICOS:[
    {
      pergunta: "Qual é a função do retículo endoplasmático rugoso (granular) nas células?",
      alternativaCerta: "Síntese de proteínas e processamento pós-traducional.",
      Opcoes: [
        "Armazenar glicose.",
        "Produzir ATP (trifosfato de adenosina).",
        "Realizar a digestão intracelular de substâncias.",
        "Síntese de proteínas e processamento pós-traducional."
      ]
    }
  ],
  
};

let palavraAleatoria = "",
	palavraAtual = "",
	palavraDeEntrada = "";
let palavrasEncontradas = [];
let contador = 0;

// Função para obter um valor aleatório de um array ou objeto
const valorAleatorio = (arr, obj = false) => {
	if (obj) {
		let chavesArr = Object.keys(arr);
		return chavesArr[Math.floor(Math.random() * chavesArr.length)];
	} else {
		return arr[Math.floor(Math.random() * arr.length)];
	}
};

let tentativas = 5;

// Ouvinte de evento para o botão de envio
botaoEnvio.addEventListener("click", async () => {
	mensagemErro.innerText = "";
	inputContainer.innerText = "";

	// Obter o array de palavras esperadas
	let saidasEsperadas = palavrasObj[palavraAtual];

	// Obter todas as seções que contêm traços
	let secaoEsperada = document.querySelectorAll(".secao-esperada");

	// Verificar se a palavra de entrada é esperada e ainda não foi encontrada
	if (saidasEsperadas.includes(palavraDeEntrada) && !palavrasEncontradas.includes(palavraDeEntrada)) {
		// Entrada correta
		contador += 1;
		palavrasEncontradas.push(palavraDeEntrada);

		// Substituir traços pela palavra de entrada
		let indice = saidasEsperadas.indexOf(palavraDeEntrada);
		secaoEsperada[indice].innerHTML = palavraDeEntrada;
	} else {
		if (palavrasEncontradas.includes(palavraDeEntrada)) {
			mensagemErro.innerText = "Já inserida!";
		} else {
      // Entrada incorreta
      tentativas--; // Reduza o número de tentativas restantes
      mensagemErro.innerText = "Palavra inválida!! Você perdeu uma tentativa. Tentativas restantes: " + tentativas;
    }
  }

  // Verificar se todas as palavras esperadas foram encontradas
  if (contador == saidasEsperadas.length) {
    // Ocultar elementos do jogo de adivinhação
    telaCobertura.style.display = "none";
    container.style.display = "none";
    botaoEnvio.disabled = true;

    // Exibir o modal "caixa-informacao" após uma pequena pausa (por exemplo, após 1 segundo)
    setTimeout(() => {
      caixaInformacao.classList.add("informacaoAtivo");
    }, 1000); // 1000 milissegundos = 1 segundo
  }

  // Restaurar letras como inativas e habilitá-las para uma nova entrada
  let letras = document.querySelectorAll(".letras");
  letras.forEach((botao) => {
    botao.classList.remove("ativo-forca");
    botao.disabled = false;
  });

  // Restaurar a palavra de entrada

  palavraDeEntrada = "";

  // Verificar se o jogador perdeu todas as tentativas
  if (tentativas <= 0) {

    botaoEnvio.style.display = "none";

    // Criar um elemento de áudio
    const audioDerrota = new Audio('../audio/gameover.mp3');
    
    // Reproduzir o áudio
    audioDerrota.play();

    document.body.classList.add("telaDerrota");
    
    // Recarregar a página após algum tempo (por exemplo, após a reprodução do áudio)
    setTimeout(() => {
      // Mostrar um alerta indicando que o jogador perdeu
      alert("Você perdeu o jogo. A página será recarregada.");
      location.reload();

    }, 1000); // Recarregar após 2 segundos (ajuste conforme necessário)
  }
});


// Função para lidar com a seleção de letras
const selecionarLetra = (e) => {
	mensagemErro.innerText = "";
	palavraDeEntrada += e.target.innerText;
	e.target.classList.add("ativo-forca");
	e.target.disabled = true;
	inputContainer.innerText += e.target.innerText;
};

// Função para exibir traços para as palavras esperadas
const exibirTracos = () => {
	let saidasEsperadas = palavrasObj[palavraAtual];
	saidasEsperadas.forEach((element) => {
		let itemExibicao = element.replace(/./g, '<span class="tracos">_ </span>');
		palavrasValidas.innerHTML += `<div class="secao-esperada">${itemExibicao}</div>`;
	});
};

botaoComeca.addEventListener("click", () => {
  caixaInformacaoPuzzle.classList.add("informacaoAtivo"); // mostrar info box
  botaoComeca.classList.add("esconder"); // ocultar o botão
});


// Ouvinte de evento para o botão de início
botaoContinuarPuzzle.addEventListener("click", () => {
  // Remover a classe "informacaoAtivo" para ocultar o modal
  caixaInformacaoPuzzle.classList.remove("informacaoAtivo");

  // Agendar a exibição do jogo após um atraso de 1 segundos
  setTimeout(() => {
    // Mostrar o contêiner do jogo e ocultar a tela de cobertura
    container.classList.remove("esconder");
    telaCobertura.classList.add("esconder");
    mensagemErro.innerText = "";
    inputContainer.innerText = "";
    exibicaoPalavras.innerHTML = "";
    palavraDeEntrada = "";
    contador = 0;
    botaoEnvio.disabled = false;
    palavrasValidas.innerHTML = "";

    // Obter uma palavra aleatória
    palavraAtual = valorAleatorio(palavrasObj, true);

    // Embaralhar as letras da palavra atual
    palavraAleatoria = palavraAtual.split("").sort(() => 0.5 - Math.random());

    // Exibir traços para as palavras esperadas
    exibirTracos();

    // Exibir letras nos botões
    palavraAleatoria.forEach((letra) => {
      exibicaoPalavras.innerHTML += `<button class="letras" onclick="selecionarLetra(event)">${letra}</button>`;
    });
  }, 1000); // Atraso de 1000 milissegundos (1 segundos) para a exibição do jogo
});


// Inicializar a tela do jogo ao carregar a janela
window.onload = () => {
	telaCobertura.classList.remove("esconder");
	container.classList.add("esconder");
};

























// criando um array e passando o número, perguntas, opções e respostas
let perguntas = [
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
    perguntas[index].opcoes[1] +
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