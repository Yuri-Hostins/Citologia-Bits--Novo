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
const containerConfetes = document.querySelector(".container-confetes");
const audioVitoria = new Audio("../audio/vitoria.mp3");
const audioDerrota = new Audio("../audio/gameover.mp3");

// Definir objetos de palavras com suas saídas esperadas
let palavrasObj = {
	CITOPLASMA: ["AMA", "COLA", "CITO", "ASMA", "CITOPLASMA"],
  ORGANELAS: ["SAL", "SELA", "NELAS", "ALGAS", "ORGANELAS"],
  RIBOSSOMOS: ["RIO", "RISO", "ROBO", "SOMBRIO", "RIBOSSOMOS"],
  LISOSSOMOS: ["SOS", "LIMO", "LISO", "SOMOS", "LISOSSOMOS"],
  PEROXISSOMOS: ["OXE", "ROSE", "PESO", "PROXIMOS", "PEROXISSOMOS"],
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
    
    // Verificar se a última palavra do array foi encontrada
    if (saidasEsperadas.indexOf(palavraDeEntrada) === saidasEsperadas.length - 1) {
      // Última palavra foi encontrada, direcione para o quiz
      direcionarParaQuiz();
      return; // Importante: interromper a execução para evitar ações adicionais
    }
  } else {
    if (palavrasEncontradas.includes(palavraDeEntrada)) {
      mensagemErro.innerText = "Já inserida!";
    } else {
      // Entrada incorreta
      tentativas--; // Reduza o número de tentativas restantes
      mensagemErro.innerText = "Palavra inválida!! Você perdeu uma tentativa. Tentativas restantes: " + tentativas;
    }
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

// Função para direcionar o usuário para o quiz
function direcionarParaQuiz() {

  caixaInformacaoPuzzle.classList.remove("informacaoAtivo"); // Ocultar a caixa de informações do puzzle
  container.classList.add("esconder"); // Ocultar o contêiner do jogo de palavras cruzadas

   

  // Usar setTimeout para adicionar um atraso de 1 segundo antes de mostrar a caixa do quiz
  setTimeout(() => {
    caixaInformacao.classList.add("informacaoAtivo"); // Mostrar a informação do quiz
  }, 1000); // 1000 milissegundos = 1 segundo
}

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