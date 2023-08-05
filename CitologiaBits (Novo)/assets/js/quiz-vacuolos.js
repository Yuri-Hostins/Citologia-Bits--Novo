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
    pergunta: "Qual é a função principal dos vacúolos?",
    alternativaCerta: "Armazenar água e substâncias",
    opcoes: [
      "Síntese de proteínas",
      "Produção de energia",
      "Armazenar água e substâncias",
      "Digestão de resíduos celulares"
    ]
  },
  {
    pergunta: "Qual é a estrutura que delimita o vacúolo em células vegetais?",
    alternativaCerta: "Tonoplasto",
    opcoes: [
      "Membrana plasmática",
      "Núcleo",
      "Tonoplasto",
      "Membrana mitocondrial"
    ]
  },
  {
    pergunta: "Quais são os principais íons armazenados nos vacúolos?",
    alternativaCerta: "Íons de potássio",
    opcoes: [
      "Íons de sódio",
      "Íons de cálcio",
      "Íons de potássio",
      "Íons de magnésio"
    ]
  },
  {
    pergunta: "Em células vegetais, qual é a função dos vacúolos no crescimento celular?",
    alternativaCerta: "Contribuir para o crescimento e expansão da célula",
    opcoes: [
      "Regular a divisão celular",
      "Contribuir para o crescimento e expansão da célula",
      "Inibir o crescimento celular",
      "Controlar o metabolismo"
    ]
  },
  {
    pergunta: "Nos protozoários, os vacúolos estão associados a qual processo?",
    alternativaCerta: "Excreção",
    opcoes: [
      "Fotossíntese",
      "Digestão intracelular",
      "Respiração celular",
      "Excreção"
    ]
  },
  {
    pergunta: "Em células vegetais, qual é a função dos vacúolos na manutenção da turgescência?",
    alternativaCerta: "Manter a rigidez da célula através do armazenamento de água",
    opcoes: [
      "Regular a pressão osmótica",
      "Manter a rigidez da célula através do armazenamento de água",
      "Inibir a absorção de água",
      "Produzir enzimas"
    ]
  },
  {
    pergunta: "Quais são as substâncias de resíduos que podem ser armazenadas nos vacúolos?",
    alternativaCerta: "Pigmentos, cristais e toxinas",
    opcoes: [
      "Enzimas, carboidratos e lipídios",
      "Água, íons e proteínas",
      "Pigmentos, cristais e toxinas",
      "Glicose, aminoácidos e ácidos nucleicos"
    ]
  },
  {
    pergunta: "Em células vegetais, qual é a função dos vacúolos na fotossíntese?",
    alternativaCerta: "Armazenar pigmentos fotossintéticos",
    opcoes: [
      "Produzir clorofila",
      "Regular a entrada de luz",
      "Armazenar pigmentos fotossintéticos",
      "Converter energia solar em ATP"
    ]
  },
  {
    pergunta: "Nos animais, os vacúolos são organelas mais proeminentes em qual tipo de células?",
    alternativaCerta: "Células especializadas, como os macrófagos",
    opcoes: [
      "Células nervosas",
      "Células musculares",
      "Células epiteliais",
      "Células especializadas, como os macrófagos"
    ]
  },
  {
    pergunta: "Quais são as células sanguíneas que podem conter vacúolos durante sua maturação?",
    alternativaCerta: "Células vermelhas ou hemácias",
    opcoes: [
      "Células brancas ou leucócitos",
      "Células vermelhas ou hemácias",
      "Plaquetas",
      "Células-tronco"
    ]
  },
  {
    pergunta: "Quais são os vacúolos contráteis encontrados em protozoários de água doce?",
    alternativaCerta: "Vacúolos pulsáteis",
    opcoes: [
      "Vacúolos pulsáteis",
      "Vacúolos autofágicos",
      "Vacúolos digestivos",
      "Vacúolos secretórios"
    ]
  },
  {
    pergunta: "Qual é a função dos vacúolos autofágicos nas células?",
    alternativaCerta: "Degradação de componentes celulares",
    opcoes: [
      "Produção de energia",
      "Armazenamento de água",
      "Secreção de enzimas",
      "Degradação de componentes celulares"
    ]
  },
  {
    pergunta: "Quais são os vacúolos responsáveis pelo armazenamento de enzimas digestivas?",
    alternativaCerta: "Vacúolos digestivos",
    opcoes: [
      "Vacúolos secretórios",
      "Vacúolos pulsáteis",
      "Vacúolos contráteis",
      "Vacúolos digestivos"
    ]
  },
  {
    pergunta: "Nos animais, os vacúolos podem desempenhar um papel importante em qual processo de desenvolvimento?",
    alternativaCerta: "Fagocitose",
    opcoes: [
      "Fotossíntese",
      "Digestão intracelular",
      "Respiração celular",
      "Fagocitose"
    ]
  },
  {
    pergunta: "Quais são os vacúolos que se formam quando uma célula ingere partículas sólidas?",
    alternativaCerta: "Vacúolos digestivos",
    opcoes: [
      "Vacúolos autofágicos",
      "Vacúolos secretórios",
      "Vacúolos pulsáteis",
      "Vacúolos digestivos"
    ]
  },
  {
    pergunta: "Quais são os vacúolos que se formam durante a fagocitose?",
    alternativaCerta: "Vacúolos digestivos",
    opcoes: [
      "Vacúolos pulsáteis",
      "Vacúolos secretórios",
      "Vacúolos digestivos",
      "Vacúolos autofágicos"
    ]
  },
  {
    pergunta: "Em que parte da célula os vacúolos geralmente são encontrados?",
    alternativaCerta: "Citoplasma",
    opcoes: [
      "Núcleo",
      "Mitocôndrias",
      "Retículo endoplasmático",
      "Citoplasma"
    ]
  },
  {
    pergunta: "Qual é o tamanho típico dos vacúolos em células vegetais?",
    alternativaCerta: "Grandes e preenchendo a maior parte da célula",
    opcoes: [
      "Pequenos e localizados próximos ao núcleo",
      "Grandes e preenchendo a maior parte da célula",
      "Iguais em tamanho aos vacúolos de células animais",
      "Inexistentes em células vegetais"
    ]
  },
  {
    pergunta: "Qual é a função dos vacúolos contráteis em protozoários?",
    alternativaCerta: "Regulação do equilíbrio osmótico",
    opcoes: [
      "Digestão intracelular",
      "Produção de energia",
      "Regulação do equilíbrio osmótico",
      "Secreção de enzimas"
    ]
  },  
  {
    pergunta: "Quais são os vacúolos que contêm pigmentos coloridos em células vegetais?",
    alternativaCerta: "Vacúolos de suco celular",
    opcoes: [
      "Vacúolos autofágicos",
      "Vacúolos de suco celular",
      "Vacúolos digestivos",
      "Vacúolos secretórios"
    ]
  },
  {
    pergunta: "Em células animais, qual é a função dos vacúolos?",
    alternativaCerta: "Participar de processos excretórios e de secreção",
    opcoes: [
      "Armazenar água",
      "Armazenar nutrientes",
      "Participar de processos excretórios e de secreção",
      "Síntese de proteínas"
    ]
  },
  {
    pergunta: "Qual é o processo pelo qual os vacúolos fagocitam e destroem partículas?",
    alternativaCerta: "Fagocitose",
    opcoes: [
      "Fotossíntese",
      "Digestão intracelular",
      "Fagocitose",
      "Excreção"
    ]
  },
  {
    pergunta: "Quais são os vacúolos responsáveis pela manutenção da pressão osmótica em células vegetais?",
    alternativaCerta: "Vacúolos de suco celular",
    opcoes: [
      "Vacúolos pulsáteis",
      "Vacúolos digestivos",
      "Vacúolos de suco celular",
      "Vacúolos autofágicos"
    ]
  },
  {
    pergunta: "Qual é o papel dos vacúolos na regulação do pH da célula?",
    alternativaCerta: "Acidificação e alcalinização",
    opcoes: [
      "Acidificação e alcalinização",
      "Produção de íons hidrogênio",
      "Armazenamento de íons hidroxila",
      "Síntese de proteínas"
    ]
  },  
  {
    pergunta: "Nos vegetais, qual é a função dos vacúolos em relação ao armazenamento de substâncias?",
    alternativaCerta: "Armazenar água e nutrientes",
    opcoes: [
      "Armazenar água e nutrientes",
      "Armazenar enzimas e proteínas",
      "Armazenar ácidos nucleicos",
      "Armazenar glicose e lipídios"
    ]
  },
  {
    pergunta: "Quais são os vacúolos que podem auxiliar na proteção contra herbívoros?",
    alternativaCerta: "Vacúolos com toxinas",
    opcoes: [
      "Vacúolos secretórios",
      "Vacúolos pulsáteis",
      "Vacúolos autofágicos",
      "Vacúolos com toxinas"
    ]
  },
  {
    pergunta: "Quais são os vacúolos presentes nas células vegetais?",
    alternativaCerta: "Vacúolos de suco celular",
    opcoes: [
      "Vacúolos com toxinas",
      "Vacúolos contráteis",
      "Vacúolos digestivos",
      "Vacúolos de suco celular"
    ]
  },
  {
    pergunta: "Qual é a principal função dos vacúolos em células de protozoários?",
    alternativaCerta: "Regulação osmótica",
    opcoes: [
      "Digestão intracelular",
      "Produção de energia",
      "Regulação osmótica",
      "Secreção de enzimas"
    ]
  },
  {
    pergunta: "Em células vegetais, quais vacúolos podem acumular pigmentos coloridos?",
    alternativaCerta: "Vacúolos de suco celular",
    opcoes: [
      "Vacúolos pulsáteis",
      "Vacúolos autofágicos",
      "Vacúolos de suco celular",
      "Vacúolos digestivos"
    ]
  },
  {
    pergunta: "Quais são os vacúolos que desempenham um papel importante na fotossíntese das células vegetais?",
    alternativaCerta: "Vacúolos de suco celular",
    opcoes: [
      "Vacúolos secretórios",
      "Vacúolos pulsáteis",
      "Vacúolos autofágicos",
      "Vacúolos de suco celular"
    ]
  },
  {
    pergunta: "Os vacúolos são comuns em células animais?",
    alternativaCerta: "Não, os vacúolos são mais comuns em células vegetais",
    opcoes: [
      "Sim, os vacúolos são comuns em células animais",
      "Não, os vacúolos são mais comuns em células vegetais",
      "Sim, os vacúolos são exclusivos de células animais",
      "Sim, todos os tipos de células possuem vacúolos"
    ]
  },
  {
    pergunta: "Quais são os vacúolos com função de armazenar substâncias em células vegetais?",
    alternativaCerta: "Vacúolos de suco celular",
    opcoes: [
      "Vacúolos secretórios",
      "Vacúolos pulsáteis",
      "Vacúolos autofágicos",
      "Vacúolos de suco celular"
    ]
  },
  {
    pergunta: "Qual é a relação dos vacúolos com a manutenção do pH intracelular?",
    alternativaCerta: "Os vacúolos auxiliam na regulação do pH intracelular",
    opcoes: [
      "Os vacúolos aumentam a acidez do citoplasma",
      "Os vacúolos diminuem a alcalinidade do núcleo",
      "Os vacúolos auxiliam na regulação do pH intracelular",
      "Os vacúolos são alcalinos e ácidos ao mesmo tempo"
    ]
  },
  {
    pergunta: "Quais são os vacúolos presentes em células animais?",
    alternativaCerta: "Vacúolos contráteis",
    opcoes: [
      "Vacúolos com toxinas",
      "Vacúolos de suco celular",
      "Vacúolos digestivos",
      "Vacúolos contráteis"
    ]
  },
  {
    pergunta: "Quais são os vacúolos que atuam na regulação do equilíbrio osmótico em protozoários de água doce?",
    alternativaCerta: "Vacúolos pulsáteis",
    opcoes: [
      "Vacúolos com toxinas",
      "Vacúolos digestivos",
      "Vacúolos pulsáteis",
      "Vacúolos de suco celular"
    ]
  },
  {
    pergunta: "Quais são os vacúolos que podem conter toxinas para proteger a célula?",
    alternativaCerta: "Vacúolos com toxinas",
    opcoes: [
      "Vacúolos secretórios",
      "Vacúolos pulsáteis",
      "Vacúolos de suco celular",
      "Vacúolos com toxinas"
    ]
  },
  {
    pergunta: "Em células vegetais, quais vacúolos desempenham um papel importante na regulação do volume celular?",
    alternativaCerta: "Vacúolos de suco celular",
    opcoes: [
      "Vacúolos pulsáteis",
      "Vacúolos autofágicos",
      "Vacúolos de suco celular",
      "Vacúolos digestivos"
    ]
  },
  {
    pergunta: "Quais são os vacúolos que podem se fundir com lisossomos para degradar componentes celulares?",
    alternativaCerta: "Vacúolos autofágicos",
    opcoes: [
      "Vacúolos digestivos",
      "Vacúolos pulsáteis",
      "Vacúolos de suco celular",
      "Vacúolos autofágicos"
    ]
  },
  {
    pergunta: "Quais são os vacúolos presentes nas células de protozoários como a ameba?",
    alternativaCerta: "Vacúolos digestivos",
    opcoes: [
      "Vacúolos secretórios",
      "Vacúolos pulsáteis",
      "Vacúolos de suco celular",
      "Vacúolos digestivos"
    ]
  },
  {
    pergunta: "Os vacúolos são estruturas exclusivas de células eucarióticas?",
    alternativaCerta: "Sim, apenas células eucarióticas possuem vacúolos",
    opcoes: [
      "Sim, apenas células eucarióticas possuem vacúolos",
      "Não, células procariontes também possuem vacúolos",
      "Não, as células vegetais não possuem vacúolos",
      "Sim, os vacúolos são encontrados apenas em células animais"
    ]
  },
  {
    pergunta: "Quais são os vacúolos presentes em células vegetais?",
    alternativaCerta: "Vacúolos de suco celular",
    opcoes: [
      "Vacúolos com toxinas",
      "Vacúolos contráteis",
      "Vacúolos digestivos",
      "Vacúolos de suco celular"
    ]
  },
  {
    pergunta: "Em células vegetais, quais vacúolos possuem enzimas digestivas para degradar materiais?",
    alternativaCerta: "Vacúolos digestivos",
    opcoes: [
      "Vacúolos secretórios",
      "Vacúolos pulsáteis",
      "Vacúolos autofágicos",
      "Vacúolos digestivos"
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
