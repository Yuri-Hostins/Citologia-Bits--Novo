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
    pergunta: 'Qual é a função principal do citoplasma',
    alternativaCerta: "Síntese de proteínas",
    opcoes: [
      "Armazenamento de informações genéticas",
      "Síntese de proteínas",
      "Proteção do núcleo celular",
      "Transporte de oxigênio",
    ],
  },
  {
    pergunta: 'O que é o citoplasma?',
    alternativaCerta: "Substância gelatinosa que preenche o núcleo",
    opcoes: [
      "Estrutura celular que engloba o núcleo",
      "Substância gelatinosa que preenche o núcleo",
      "Membrana que envolve a célula",
      "Estrutura celular presente apenas em células vegetais",
    ],
  },
  {
    pergunta: 'O que é responsável pela síntese de proteínas no citoplasma?',
    alternativaCerta: "Ribossomos",
    opcoes: [
      "Complexo de Golgi",
      "Ribossomos",
      "Lisossomos",
      "Mitocôndrias",
    ],
  },
  {
    pergunta: 'Qual é o papel do citoesqueleto no citoplasma?',
    alternativaCerta: "Suporte estrutural e divisão celular",
    opcoes: [
      "Síntese de lipídios",
      "Armazenamento de água",
      "Suporte estrutural e divisão celular",
      "Fotossíntese",
    ],
  },
  {
    pergunta: 'O que compõe principalmente o citoplasma?',
    alternativaCerta: "Água, íons, proteínas, enzimas e organelas celulares.",
    opcoes: [
      "Água, íons, proteínas, enzimas e organelas celulares.",
      "Gases e nutrientes",
      "Vitaminas e minerais",
      "Ácidos nucleicos",
    ],
  },
  {
    pergunta: 'Além das células eucarióticas, o citoplasma também está presente em células',
    alternativaCerta: "Procariontes",
    opcoes: [
      "Procariontes",
      "Animais apenas",
      "Vegetais apenas",
      "Fúngicas apenas",
    ],
  },
  {
    pergunta: 'Qual é o papel do citoplasma na realização da citocinese?',
    alternativaCerta: "Dividir o material genético igualmente entre as células filhas",
    opcoes: [
      "Controlar a entrada e saída de substâncias da célula",
      "Síntese de carboidratos para a divisão celular",
      "Dividir o material genético igualmente entre as células filhas",
      "Armazenar informações genéticas",
    ],
  },
  {
    pergunta: 'Qual é o nome dado à região do citoplasma que contém o material genético nas células procariontes?',
    alternativaCerta: "Nucleoide",
    opcoes: [
      "Núcleo",
      "Nucleoide",
      "Complexo de Golgi",
      "Retículo endoplasmático",
    ],
  },
  {
    pergunta: 'Quais organelas citoplasmáticas são responsáveis pela produção de energia da célula?',
    alternativaCerta: "Mitocôndrias",
    opcoes: [
      "Complexo de Golgi",
      "Mitocôndrias",
      "Lisossomos",
      "Ribossomos",
    ],
  },
  {
    pergunta: 'Como são chamadas as extensões do citoplasma que aumentam a superfície de absorção de nutrientes em células vegetais?',
    alternativaCerta: "Microvilosidades",
    opcoes: [
      "Cílios",
      "Flagelos",
      "Microvilosidades",
      "Pseudópodes",
    ],
  },
  {
    pergunta: 'Qual é a função dos peroxissomos no citoplasma?',
    alternativaCerta: "Desintoxicação celular e metabolismo de lipídios",
    opcoes: [
      "Produção de lipídios",
      "Digestão intracelular",
      "Desintoxicação celular e metabolismo de lipídios",
      "Síntese de proteínas",
    ],
  },
  {
    pergunta: 'Qual é a composição principal do citoplasma?',
    alternativaCerta: "Água e proteínas.",
    opcoes: [
      "Água e lipídios",
      "Lipídios e ácidos nucleicos.",
      "Água e proteínas.",
      "Água e organelas celulares.",
    ],
  },
  {
    pergunta: 'Qual é a principal função do citoplasma?',
    alternativaCerta: "Abrigar as organelas celulares e participar de processos metabólicos.",
    opcoes: [
      "Armazenar informações genéticas.",
      "Regular a passagem de substâncias para dentro e fora da célula.",
      "Produzir energia para a célula.",
      "Abrigar as organelas celulares e participar de processos metabólicos.",
    ],
  },
  {
    pergunta: 'Quais são as organelas celulares encontradas no citoplasma?',
    alternativaCerta: "Ribossomos, retículo endoplasmático e complexo de Golgi.",
    opcoes: [
      "Lisossomos, centríolos e mitocôndrias.",
      "Cloroplastos, vacúolos e núcleo.",
      "Ribossomos, retículo endoplasmático e complexo de Golgi.",
      "Núcleo, peroxissomos e cloroplastos.",
    ],
  },
  {
    pergunta: 'O que são os ribossomos e onde estão localizados no citoplasma?',
    alternativaCerta: "Estruturas responsáveis pela síntese de proteínas, encontradas livres no citoplasma ou aderidas ao retículo endoplasmático.",
    opcoes: [
      "Organelas responsáveis pela síntese de lipídios, encontradas no núcleo.",
      "Organelas que realizam a fotossíntese, encontradas no citoplasma.",
      "Estruturas responsáveis pela síntese de proteínas, encontradas livres no citoplasma ou aderidas ao retículo endoplasmático.",
      "Vesículas de armazenamento, encontradas no complexo de Golgi.",
    ],
  },
  {
    pergunta: 'Qual é a função dos centríolos no citoplasma?',
    alternativaCerta: "Auxiliar na divisão celular e formação do fuso mitótico.",
    opcoes: [
      "Produção de energia para a célula.",
      "Armazenamento de substâncias de reserva.",
      "Auxiliar na divisão celular e formação do fuso mitótico.",
      "Síntese de proteínas.",
    ],
  },
  {
    pergunta: 'O que é o citoesqueleto e qual é sua função no citoplasma?',
    alternativaCerta: "Estruturas que mantêm a forma da célula e auxiliam no transporte intracelular.",
    opcoes: [
      "Uma organela que armazena água e íons.",
      "Estruturas que mantêm a forma da célula e auxiliam no transporte intracelular.",
      "Vesículas responsáveis pela digestão celular.",
      "Organelas responsáveis pela fotossíntese.",
    ],
  },
  {
    pergunta: 'Qual é a organela responsável pela digestão intracelular de macromoléculas no citoplasma?',
    alternativaCerta: "Lisossomos.",
    opcoes: [
      "Ribossomos.",
      "Lisossomos.",
      "Mitocôndrias.",
      "Peroxissomos.",
    ],
  },
  {
    pergunta: 'Qual é a origem do citoplasma durante o processo de divisão celular?',
    alternativaCerta: "É dividido igualmente entre as células filhas durante a citocinese.",
    opcoes: [
      "É sintetizado a partir do núcleo.",
      "É originado a partir do complexo de Golgi.",
      "É dividido igualmente entre as células filhas durante a citocinese.",
      "É formado a partir dos cloroplastos e mitocôndrias.",
    ],
  },
  {
    pergunta: 'Quais são as duas principais partes do citoplasma?',
    alternativaCerta: "Hialoplasma e organelas celulares.",
    opcoes: [
      "Núcleo e membrana plasmática.",
      "Carioteca e ribossomos.",
      "Hialoplasma e organelas celulares.",
      "Peroxissomos e lisossomos.",
    ],
  },
  {
    pergunta: 'Qual é a função do hialoplasma no citoplasma?',
    alternativaCerta: "Permitir a difusão de substâncias e abrigar as organelas celulares.",
    opcoes: [
      "Produzir energia para a célula.",
      "Armazenar informações genéticas.",
      "Permitir a difusão de substâncias e abrigar as organelas celulares.",
      "Realizar a fotossíntese.",
    ],
  },
  {
    pergunta: 'O que é o retículo endoplasmático e quais são os dois tipos principais?',
    alternativaCerta: "Uma organela que armazena proteínas; retículo endoplasmático liso e retículo endoplasmático rugoso.",
    opcoes: [
      "Uma organela que armazena proteínas; retículo endoplasmático liso e retículo endoplasmático rugoso.",
      "Uma organela que produz energia; retículo endoplasmático animal e retículo endoplasmático vegetal.",
      "Uma organela que realiza a digestão intracelular; retículo endoplasmático ácido e retículo endoplasmático básico.",
      "Uma organela que realiza a fotossíntese; retículo endoplasmático clorofílico e retículo endoplasmático não-clorofílico.",
    ],
  },
  {
    pergunta: 'Como as mitocôndrias estão relacionadas ao citoplasma?',
    alternativaCerta: "São os locais de produção de energia através da respiração celular.",
    opcoes: [
      "Uma organela que armazena proteínas; retículo endoplasmático liso e retículo endoplasmático rugoso.",
      "Armazenam informações genéticas.",
      "São os locais de produção de energia através da respiração celular.",
      "Auxiliam na divisão celular.",
    ],
  },
  {
    pergunta: 'O que são os cloroplastos e onde são encontrados no citoplasma?',
    alternativaCerta: "São organelas que realizam a fotossíntese, encontradas apenas em células vegetais.",
    opcoes: [
      "São organelas responsáveis pela síntese de proteínas, encontradas no núcleo.",
      "São organelas que realizam a fotossíntese, encontradas no retículo endoplasmático rugoso.",
      "São organelas que realizam a fotossíntese, encontradas apenas em células vegetais.",
      "São organelas responsáveis pela digestão intracelular.",
    ],
  },
  {
    pergunta: 'Quais são as duas principais funções dos ribossomos no citoplasma?',
    alternativaCerta: "Síntese de proteínas e síntese de ácidos nucleicos.",
    opcoes: [
      "Produção de energia e síntese de lipídios.",
      "Digestão intracelular e produção de proteínas.",
      "Síntese de proteínas e síntese de ácidos nucleicos.",
      "Respiração celular e produção de energia.",
    ],
  },
  {
    pergunta: 'Qual é o processo pelo qual o citoplasma se divide durante a citocinese?',
    alternativaCerta: "Citocinese.",
    opcoes: [
      "Mitose.",
      "Meiose.",
      "Divisão celular.",
      "Citocinese.",
    ],
  },
  {
    pergunta: 'Qual é a função das microvilosidades no citoplasma?',
    alternativaCerta: "Aumentar a área de absorção de nutrientes.",
    opcoes: [
      "Armazenar energia.",
      "Realizar a fotossíntese.",
      "Aumentar a área de absorção de nutrientes.",
      "Sintetizar proteínas.",
    ],
  },
  {
    pergunta: 'Quais são os componentes básicos do citoplasma?',
    alternativaCerta: "Hialoplasma e organelas.",
    opcoes: [
      "Água e proteínas.",
      "Gases e lipídios.",
      "Água e vitaminas.",
      "Hialoplasma e organelas.",
    ],
  },
  {
    pergunta: 'O que é a ameboidia no contexto do citoplasma?',
    alternativaCerta: "Movimento celular utilizando pseudópodes.",
    opcoes: [
      "Processo de síntese de ATP.",
      "Divisão do citoplasma.",
      "Movimento celular utilizando pseudópodes.",
      "Processo de fagocitose.",
    ],
  },
  {
    pergunta: 'O que é a corrente citoplasmática?',
    alternativaCerta: "Movimento do citoplasma dentro da célula.",
    opcoes: [
      "Corrente elétrica presente no citoplasma.",
      "Movimento do citoplasma fora da célula.",
      "Movimento do núcleo no citoplasma.",
      "Movimento do citoplasma dentro da célula.",
    ],
  },
  {
    pergunta: 'Quais são as principais funções do citoplasma em uma célula?',
    alternativaCerta: "Abrigar organelas, realizar processos metabólicos e dar suporte estrutural.",
    opcoes: [
      "Armazenar informações genéticas e produzir ATP.",
      "Realizar a fotossíntese e a digestão celular.",
      "Realizar a mitose e a meiose.",
      "Abrigar organelas, realizar processos metabólicos e dar suporte estrutural.",
    ],
  },
  {
    pergunta: 'O que é o cianoplasma?',
    alternativaCerta: "Citoplasma das células vegetais.",
    opcoes: [
      "Citoplasma das células animais.",
      "Fluido extracelular.",
      "Núcleo das células.",
      "Citoplasma das células vegetais.",
    ],
  },
  {
    pergunta: 'O que é a ectoplasma?',
    alternativaCerta: "Parte externa e mais viscosa do citoplasma.",
    opcoes: [
      "Citoplasma das células animais.",
      "Parte interna e fluida do núcleo.",
      "Parte externa e mais viscosa do citoplasma.",
      "Região onde ocorre a fotossíntese.",
    ],
  },
  {
    pergunta: 'Qual é a principal função do citoplasma nas células?',
    alternativaCerta: "Hospedar as organelas e facilitar processos celulares.",
    opcoes: [
      "Armazenar informações genéticas.",
      "Regular a entrada e saída de substâncias.",
      "Produzir enzimas para a digestão.",
      "Hospedar as organelas e facilitar processos celulares.",
    ],
  },
  {
    pergunta: 'O citoplasma é um componente presente em qual tipo de células?',
    alternativaCerta: "Tanto em células eucarióticas quanto em células procariontes.",
    opcoes: [
      "Apenas em células vegetais.",
      "Apenas em células animais.",
      "Tanto em células eucarióticas quanto em células procariontes.",
      "Apenas em células bacterianas.",
    ],
  },
  {
    pergunta: 'O que é a citolise?',
    alternativaCerta: "Romper da membrana plasmática devido à entrada excessiva de água.",
    opcoes: [
      "Processo de divisão celular.",
      "Absorção de nutrientes pelas células.",
      "Transporte de substâncias para dentro da célula.",
      "Romper da membrana plasmática devido à entrada excessiva de água.",
    ],
  },
  {
    pergunta: 'Como as substâncias se movem no citoplasma?',
    alternativaCerta: "Por meio da difusão e do fluxo citoplasmático.",
    opcoes: [
      "Através da ação das mitocôndrias.",
      "Por meio da síntese de ATP.",
      "Por meio do transporte ativo.",
      "Por meio da difusão e do fluxo citoplasmático.",
    ],
  },
  {
    pergunta: 'O que é a corrente citoplasmática?',
    alternativaCerta: "Movimento do citoplasma dentro da célula.",
    opcoes: [
      "Fluxo de elétrons no citoplasma.",
      "Movimento das mitocôndrias.",
      "Transporte de íons para fora da célula.",
      "Movimento do citoplasma dentro da célula.",
    ],
  },
  {
    pergunta: 'Quais são os componentes do citoplasma além do hialoplasma?',
    alternativaCerta: "Organelas e inclusões citoplasmáticas.",
    opcoes: [
      "Água e lipídios.",
      "Gases e proteínas.",
      "Vitaminas e minerais.",
      "Organelas e inclusões citoplasmáticas.",
    ],
  },
  {
    pergunta: 'O que é o citoesqueleto e qual é sua função no citoplasma?',
    alternativaCerta: "Rede de filamentos que mantém a forma da célula e auxilia no transporte intracelular.",
    opcoes: [
      "Organela responsável pela síntese de proteínas.",
      "Rede de filamentos que protege o núcleo.",
      "Estrutura que armazena energia.",
      "Rede de filamentos que mantém a forma da célula e auxilia no transporte intracelular.",
    ],
  },
  {
    pergunta: 'Qual é o papel do citoplasma na divisão celular?',
    alternativaCerta: "Dividir-se para formar duas células filhas durante a citocinese.",
    opcoes: [
      "Sintetizar proteínas para o crescimento da célula.",
      "Realizar a fotossíntese.",
      "Produzir energia para a mitose.",
      "Dividir-se para formar duas células filhas durante a citocinese.",
    ],
  },
  {
    pergunta: 'O que é a citometria de fluxo?',
    alternativaCerta: "Técnica que permite a análise das características físicas e químicas das células.",
    opcoes: [
      "Técnica para estudar a divisão celular.",
      "Método de transporte de substâncias no citoplasma.",
      "Processo de síntese de proteínas.",
      "Técnica que permite a análise das características físicas e químicas das células.",
    ],
  },
  {
    pergunta: 'O que é o ciclo celular?',
    alternativaCerta: "Sequência de eventos que leva ao crescimento e à divisão celular.",
    opcoes: [
      "Processo de transporte de água no citoplasma.",
      "Processo de obtenção de energia.",
      "Divisão do núcleo da célula.",
      "Sequência de eventos que leva ao crescimento e à divisão celular.",
    ],
  },
  {
    pergunta: 'Qual é a principal função do citoplasma em células musculares?',
    alternativaCerta: "Gerar energia para a contração muscular.",
    opcoes: [
      "Sintetizar proteínas.",
      "Regular a entrada de substâncias.",
      "Armazenar informações genéticas.",
      "Gerar energia para a contração muscular.",
    ],
  },
  {
    pergunta: 'Qual é a função do complexo de Golgi no citoplasma?',
    alternativaCerta: "Processar, empacotar e distribuir proteínas e lipídios.",
    opcoes: [
      "Sintetizar ácidos nucleicos.",
      "Realizar a fotossíntese.",
      "Sintetizar ATP.",
      "Processar, empacotar e distribuir proteínas e lipídios.",
    ],
  },
  {
    pergunta: 'O que é o citoquilasma?',
    alternativaCerta: "Parte mais externa do citoplasma.",
    opcoes: [
      "Organela que realiza a fotossíntese.",
      "Região do citoplasma onde ocorre a mitose.",
      "Parte mais interna do núcleo.",
      "Parte mais externa do citoplasma.",
    ],
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
const contadorPerguntasInferior = document.querySelector(".footer-quiz .perguntas-total");

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
    "<span>" +
    (index + 1) +
    ". " +
    perguntas[index].pergunta +
    "</span>";
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
let iconeCerto = '<div class="icone marcacao"><i class="fas fa-check"></i></div>';
let iconeErrado = '<div class="icone cruzar"><i class="fas fa-times"></i></div>';

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
          console.log("Tempo Esgotado: Resposta corretaselecionada automaticamente.");
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