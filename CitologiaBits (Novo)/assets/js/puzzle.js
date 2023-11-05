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
const caixaInformacao = document.querySelector(".caixa-informacao-quiz-puzzle");
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
	CITOPLASMA: ["AMA", "COLA", "CITO", "ASMA", "CITOPLASMA"], // JÁ FOI
  ORGANELAS: ["LA", "SELA", "NELAS", "ALGAS", "ORGANELAS"], // JÁ FOI
  RIBOSSOMOS: ["RIO", "RISO", "ROBO", "SOMBRIO", "RIBOSSOMOS"], // JÁ FOI
  LISOSSOMOS: ["SOS", "ISSO", "LISO", "SOMOS", "LISOSSOMOS"], // JÁ FOI
  PEROXISSOMOS: ["OXE", "ROSE", "PESO", "PROXIMOS", "PEROXISSOMOS"], // !!
  VACUOLOS: ["LUVA", "CALO", "VASCO", "LOUCOS", "VACUOLOS"], // JÁ FOI
  RETICULOS_ENDOPLASMATICOS: ["RATO", "MIRA", "RESPEITO", "PLASTICO", "RETICULOS_ENDOPLASMATICOS"], // JÁ FOI
  COMPLEXO_GOLGIENSE: ["GOL", "PEGO", "GENES", "COMPLEXO", "COMPLEXO_GOLGIENSE"], // JÁ FOI
  CENTRIOLOS: ["TRIO", "SELO", "CERTO", "CENTRO", "CENTRIOLOS"], // JÁ FOI
  MITOCONDRIAS: ["DIA", "RICA", "MITO", "CONTAS", "MITOCONDRIAS"], // JÁ FOI 
};

let perguntasPorPalavra = {
  CITOPLASMA: [
    {
      pergunta: "Qual é a função principal do citoplasma?",
      alternativaCerta: "Realizar várias funções celulares",
      opcoes: [
        "Realizar várias funções celulares",
        "Sintetizar proteínas",
        "Armazenar o núcleo da célula",
        "Controlar o tráfego de substâncias na célula",
      ],
    },
    {
      pergunta: "O que é o citoplasma?",
      alternativaCerta: "O gel semilíquido que preenche o espaço entre o núcleo e a membrana plasmática.",
      opcoes: [
        "O núcleo da célula",
        "O material genético da célula",
        "A membrana celular",
        "O gel semilíquido que preenche o espaço entre o núcleo e a membrana plasmática.",
      ],
    },
    {
      pergunta: "Quais componentes do citoplasma são essenciais para a produção de energia na célula?",
      alternativaCerta: "Mitocôndrias",
      opcoes: [
        "Retículo endoplasmático",
        "Mitocôndrias",
        "Complexo de Golgi",
        "Lisossomos",
      ],
    },
    {
      pergunta: "Como o citoplasma ajuda a manter a forma da célula?",
      alternativaCerta: "Por meio do citoesqueleto.",
      opcoes: [
        "Pela divisão celular",
        "Pelo transporte de substâncias",
        "Por meio do citoesqueleto.",
        "Pela replicação do DNA",
      ],
    },
    {
      pergunta: "Qual é a função do citoplasma na síntese de proteínas?",
      alternativaCerta: "Local onde ocorre a tradução do RNA mensageiro em proteínas.",
      opcoes: [
        "Local onde ocorre a tradução do RNA mensageiro em proteínas.",
        "Sintetizar o RNA",
        "Armazenar o núcleo da célula",
        "Controlar o tráfego de substâncias na célula",
      ],
    },
  ],
  ORGANELAS: [
    {
      pergunta: "Qual é a função principal do núcleo em uma célula eucariótica?",
      alternativaCerta: "Armazenar o material genético e controlar as atividades celulares.",
      opcoes: [
        "Produzir energia",
        "Armazenar o material genético e controlar as atividades celulares.",
        "Síntese de proteínas",
        "Digestão de resíduos celulares",
      ],
    },
    {
      pergunta: "Onde ocorre a síntese de proteínas em uma célula?",
      alternativaCerta: "No retículo endoplasmático rugoso e nos ribossomos.",
      opcoes: [
        "No complexo de Golgi",
        "No núcleo e no citoplasma",
        "Nas mitocôndrias e no retículo endoplasmático liso",
        "No retículo endoplasmático rugoso e nos ribossomos.",
      ],
    },
    {
      pergunta: "Qual é a função das mitocôndrias em uma célula?",
      alternativaCerta: "Produzir energia na forma de ATP.",
      opcoes: [
        "Produzir energia na forma de ATP.",
        "Armazenar informações genéticas",
        "Realizar a digestão celular",
        "Sintetizar proteínas",
      ],
    },
    {
      pergunta: "O que são lisossomos e qual é a sua função principal?",
      alternativaCerta: "Organelas que contêm enzimas digestivas e se destinam à digestão de resíduos celulares.",
      opcoes: [
        "Organelas que realizam a fotossíntese",
        "Organelas responsáveis pela produção de hormônios",
        "Organelas que contêm enzimas digestivas e se destinam à digestão de resíduos celulares.",
        "Organelas que armazenam água na célula.",
      ],
    },
    {
      pergunta: "O que é o complexo de Golgi e qual é a sua função?",
      alternativaCerta: "Organela que processa, empacota e distribui proteínas e lipídios dentro e fora da célula.",
      opcoes: [
        "Organela que sintetiza DNA",
        "Organela que armazena energia",
        "Organela que processa, empacota e distribui proteínas e lipídios dentro e fora da célula.",
        "Organela que produz enzimas digestivas.",
      ],
    }
  ],
  RIBOSSOMOS:[
    {
      pergunta: "O que são ribossomos e qual é a sua principal função nas células?",
      alternativaCerta: "Pequenas organelas responsáveis pela síntese de proteínas.",
      opcoes: [
        "Estruturas de armazenamento de energia",
        "Pequenas organelas responsáveis pela síntese de proteínas.",
        "Unidades de armazenamento de água",
        "Centros de processamento de lipídios.",
      ],
    },
    {
      pergunta: "Onde os ribossomos podem ser encontrados em uma célula?",
      alternativaCerta: "No citoplasma e na superfície do retículo endoplasmático.",
      opcoes: [
        "No núcleo da célula",
        "Dentro das mitocôndrias",
        "No citoplasma e na superfície do retículo endoplasmático.",
        "No complexo de Golgi.",
      ],
    },
    {
      pergunta: "Qual é a principal função dos ribossomos livres no citoplasma?",
      alternativaCerta: "Síntese de proteínas para uso interno na célula.",
      opcoes: [
        "Síntese de proteínas para uso interno na célula.",
        "Digestão de resíduos celulares",
        "Produção de ATP",
        "Armazenamento de material genético.",
      ],
    },
    {
      pergunta: "Qual é a relação entre os ribossomos e a síntese de proteínas?",
      alternativaCerta: "Os ribossomos são os locais onde a síntese de proteínas ocorre, usando informações do RNA mensageiro.",
      opcoes: [
        "Os ribossomos são responsáveis pela produção de lipídios",
        "Os ribossomos armazenam proteínas",
        "Os ribossomos são os locais onde a síntese de proteínas ocorre, usando informações do RNA mensageiro.",
        "Os ribossomos regulam a divisão celular.",
      ],
    },
    {
      pergunta: "Qual é a composição básica dos ribossomos e como ela contribui para sua função na síntese de proteínas?",
      alternativaCerta: "Os ribossomos são compostos por proteínas e RNA ribossômico, o que permite que eles catalisem a ligação dos aminoácidos e a formação de proteínas.",
      opcoes: [
        "Os ribossomos são compostos por lipídios e RNA ribossômico, que facilitam a síntese de ATP.",
        "Os ribossomos são compostos por proteínas e ácidos nucleicos, que atuam como reserva de informações genéticas.",
        "Os ribossomos são compostos por glicogênio e proteínas, que são importantes para a função de armazenamento de energia.",
        "Os ribossomos são compostos por proteínas e RNA ribossômico, o que permite que eles catalisem a ligação dos aminoácidos e a formação de proteínas.",
      ],
    },
  ],
  LISOSSOMOS:[
    {
      pergunta: "O que são lisossomos e qual é a sua função principal nas células?",
      alternativaCerta: "Organelas contendo enzimas digestivas que quebram partículas e resíduos celulares.",
      opcoes: [
        "Estruturas de armazenamento de energia",
        "Centros de síntese de proteínas",
        "Organelas contendo enzimas digestivas que quebram partículas e resíduos celulares.",
        "Unidades de transporte de substâncias na célula.",
      ],
      },
      {
      pergunta: "Como os lisossomos desempenham um papel na digestão celular?",
      alternativaCerta: "Eles contêm enzimas que quebram partículas estranhas e resíduos celulares.",
      opcoes: [
        "Eles armazenam água para a célula.",
        "Eles contêm enzimas que quebram partículas estranhas e resíduos celulares.",
        "Eles realizam a fotossíntese.",
        "Eles produzem ATP.",
      ],
      },
      {
      pergunta: "Qual é o processo pelo qual os lisossomos digerem partículas estranhas ou células danificadas?",
      alternativaCerta: "Fagocitose e autofagia.",
      opcoes: [
        "Mitose e meiose",
        "Síntese de DNA",
        "Respiração celular",
        "Fagocitose e autofagia.",
      ],
      },
      {
      pergunta: "Quais são as implicações de um mau funcionamento dos lisossomos em uma célula?",
      alternativaCerta: "Acúmulo de resíduos não digeridos, levando a doenças como as doenças de armazenamento lisossomal.",
      opcoes: [
        "Acúmulo de resíduos não digeridos, levando a doenças como as doenças de armazenamento lisossomal.",
        "Produção acelerada de proteínas",
        "Maior produção de energia",
        "Divisão celular descontrolada.",
      ],
      },
      {
      pergunta: "O que acontece quando os lisossomos liberam suas enzimas no citoplasma da célula?",
      alternativaCerta: "Pode levar à autodigestão da própria célula e à morte celular.",
      opcoes: [
        "A célula se torna mais resistente a infecções",
        "A célula aumenta sua capacidade de produzir proteínas",
        "Os lisossomos não liberam enzimas no citoplasma.",
        "Pode levar à autodigestão da própria célula e à morte celular.",
      ],
    },
  ],
  PEROXISSOMOS:[
    {
      pergunta: "Qual é a função principal dos peroxissomos nas células?",
      alternativaCerta: "Metabolizar ácidos graxos e decompor peróxidos tóxicos",
      opcoes: [
        "Síntese de proteínas",
        "Armazenar glicose",
        "Metabolizar ácidos graxos e decompor peróxidos tóxicos",
        "Produzir energia através da fotossíntese"
      ]
    },
  ],
  VACUOLOS:[
    {
      pergunta: "O que são peroxissomos e qual é a função principal dessas organelas?",
      alternativaCerta: "Organelas envolvidas na quebra de ácidos graxos e neutralização de substâncias tóxicas.",
      opcoes: [
        "Organelas envolvidas na quebra de ácidos graxos e neutralização de substâncias tóxicas.",
        "Organelas que produzem ATP",
        "Estruturas de armazenamento de glicose",
        "Centros de síntese de proteínas.",
      ],
      },    
      {
      pergunta: "Como os peroxissomos desempenham um papel na detoxificação celular?",
      alternativaCerta: "Eles neutralizam substâncias tóxicas, como o peróxido de hidrogênio, transformando-as em água e oxigênio.",
      opcoes: [
        "Eles quebram proteínas não utilizadas",
        "Eles neutralizam substâncias tóxicas, como o peróxido de hidrogênio, transformando-as em água e oxigênio.",
        "Eles armazenam glicogênio",
        "Eles produzem ATP para a célula.",
      ],
      },
      {
      pergunta: "Qual é a importância dos peroxissomos na degradação de ácidos graxos?",
      alternativaCerta: "Eles quebram ácidos graxos em moléculas menores para produção de energia.",
      opcoes: [
        "Eles sintetizam ácidos graxos a partir de glicose.",
        "Eles quebram ácidos graxos em moléculas menores para produção de energia.",
        "Eles armazenam ácidos nucleicos",
        "Eles produzem proteínas.",
      ],
      },
      {
      pergunta: "Como os peroxissomos diferem dos lisossomos em termos de função e conteúdo enzimático?",
      alternativaCerta: "Peroxissomos contêm enzimas envolvidas na oxidação de substâncias, enquanto os lisossomos contêm enzimas digestivas para quebrar partículas.",
      opcoes: [
        "Os peroxissomos não contêm enzimas.",
        "Peroxissomos contêm enzimas envolvidas na síntese de proteínas, enquanto os lisossomos contêm enzimas digestivas para quebrar partículas.",
        "Peroxissomos contêm enzimas envolvidas na oxidação de substâncias, enquanto os lisossomos contêm enzimas digestivas para quebrar partículas.",
        "Lisossomos e peroxissomos têm funções e conteúdo enzimático idênticos.",
      ],
      },
      {
      pergunta: "Como a falta de peroxissomos funcionais pode afetar o organismo humano?",
      alternativaCerta: "Pode causar doenças metabólicas hereditárias, como a Síndrome de Zellweger.",
      opcoes: [
        "Aumenta a produção de energia",
        "Aumenta a resistência a infecções",
        "Aumenta a divisão celular.",
        "Pode causar doenças metabólicas hereditárias, como a Síndrome de Zellweger.",
      ],
    }
  ],
  RETICULOS_ENDOPLASMATICOS:[
    {
      pergunta: "O que diferencia o retículo endoplasmático rugoso do retículo endoplasmático liso?",
      alternativaCerta: "O RER possui ribossomos associados à sua superfície.",
      opcoes: [
        "O RER está presente apenas em células animais.",
        "O RER não está envolvido na síntese de proteínas.",
        "O RER possui ribossomos associados à sua superfície.",
        "O RER é responsável pelo armazenamento de lipídios.",
      ],
    },
    {
      pergunta: "Qual é a principal função do retículo endoplasmático rugoso?",
      alternativaCerta: "Síntese de proteínas e modificação pós-traducional.",
      opcoes: [
        "Produção de energia",
        "Armazenamento de glicogênio",
        "Digestão de resíduos celulares.",
        "Síntese de proteínas e modificação pós-traducional.",
      ],
    },
    {
      pergunta: "O que são ribossomos e qual é o seu papel no retículo endoplasmático rugoso?",
      alternativaCerta: "Ribossomos são partículas responsáveis pela síntese de proteínas no RER.",
      opcoes: [
        "Ribossomos são partículas responsáveis pela síntese de proteínas no RER.",
        "Ribossomos são responsáveis pela síntese de lipídios",
        "Ribossomos são pequenas organelas de armazenamento",
        "Ribossomos desintoxicam a célula.",
      ],
    },
    {
      pergunta: "Qual é a relação entre o retículo endoplasmático rugoso e a síntese de proteínas destinadas à exportação?",
      alternativaCerta: "O RER sintetiza proteínas que são enviadas para fora da célula ou para outras organelas.",
      opcoes: [
        "O RER armazena proteínas na célula",
        "O RER sintetiza proteínas que são enviadas para fora da célula ou para outras organelas.",
        "O RER é responsável pela síntese de ácidos nucleicos",
        "O RER regula a divisão celular.",
      ],
    },
    {
      pergunta: "O que acontece com as proteínas após serem sintetizadas no retículo endoplasmático rugoso?",
      alternativaCerta: "Elas são transportadas para o complexo de Golgi para modificações adicionais e empacotamento.",
      opcoes: [
        "Elas são quebradas em aminoácidos",
        "Elas são armazenadas no núcleo da célula",
        "Elas são secretadas imediatamente pela célula.",
        "Elas são transportadas para o complexo de Golgi para modificações adicionais e empacotamento.",
      ],
    },
    {
      pergunta: "Qual é a principal função do retículo endoplasmático liso?",
      alternativaCerta: "Síntese de lipídios e desintoxicação de substâncias.",
      opcoes: [
        "Síntese de proteínas",
        "Armazenamento de glicogênio",
        "Síntese de lipídios e desintoxicação de substâncias.",
        "Digestão de resíduos celulares.",
      ],
    },
    {
      pergunta: "Como o retículo endoplasmático liso está envolvido na desintoxicação celular?",
      alternativaCerta: "Ele contém enzimas que metabolizam substâncias tóxicas, como drogas e álcool.",
      opcoes: [
        "Ele produz ATP para a célula",
        "Ele contém enzimas que metabolizam substâncias tóxicas, como drogas e álcool.",
        "Ele armazena proteínas",
        "Ele está envolvido na síntese de DNA.",
      ],
    },
    {
      pergunta: "Qual é a função do REL na síntese de lipídios?",
      alternativaCerta: "É responsável pela produção de fosfolipídios e esteroides.",
      opcoes: [
        "É responsável pela produção de fosfolipídios e esteroides.",
        "Armazena água para a célula",
        "Produz proteínas",
        "Produz glicogênio.",
      ],
    },
    {
      pergunta: "Como a falta de retículo endoplasmático liso funcional pode afetar a célula?",
      alternativaCerta: "Pode prejudicar a capacidade da célula de metabolizar substâncias tóxicas e sintetizar lipídios.",
      opcoes: [
        "Pode prejudicar a capacidade da célula de metabolizar substâncias tóxicas e sintetizar lipídios.",
        "Aumenta a produção de energia",
        "Aumenta a síntese de proteínas",
        "Aumenta a divisão celular.",
      ],
    },
    {
      pergunta: "Como o retículo endoplasmático liso está relacionado ao metabolismo de lipídios?",
      alternativaCerta: "Ele está envolvido na síntese de lipídios e na regulação do metabolismo de colesterol.",
      opcoes: [
        "Ele armazena lipídios para a célula",
        "Ele está envolvido na síntese de lipídios e na regulação do metabolismo de colesterol.",
        "Ele é responsável pela síntese de RNA",
        "Ele é uma organela exclusiva de células vegetais.",
      ],
    },
  ],
  COMPLEXO_GOLGIENSE: [
    {
      pergunta: "O que é o Complexo de Golgi e qual é a sua função principal nas células?",
      alternativaCerta: "Uma organela composta por sacos de membrana achatados que modifica, empacota e distribui proteínas e lipídios.",
      opcoes: [
        "Uma estrutura de armazenamento de energia",
        "Uma organela que sintetiza DNA",
        "Uma organela composta por sacos de membrana achatados que modifica, empacota e distribui proteínas e lipídios.",
        "Uma organela que produz enzimas digestivas.",
      ],
    },
    {
      pergunta: "Qual é o papel do Complexo de Golgi na modificação pós-traducional de proteínas?",
      alternativaCerta: "Ele adiciona grupos químicos, como carboidratos, a proteínas para modificar sua estrutura e função.",
      opcoes: [
        "Ele sintetiza proteínas a partir de aminoácidos",
        "Ele armazena proteínas",
        "Ele é responsável pela síntese de ácidos nucleicos.",
        "Ele adiciona grupos químicos, como carboidratos, a proteínas para modificar sua estrutura e função.",
      ],
    },
    {
      pergunta: "Como o Complexo de Golgi está relacionado à secreção de proteínas?",
      alternativaCerta: "Ele empacota e encaminha proteínas modificadas para serem secretadas para fora da célula.",
      opcoes: [
        "Ele sintetiza proteínas",
        "Ele empacota e encaminha proteínas modificadas para serem secretadas para fora da célula.",
        "Ele armazena proteínas",
        "Ele é responsável pela síntese de ATP.",
      ],
    },
    {
      pergunta: "Qual é o destino das vesículas formadas pelo Complexo de Golgi?",
      alternativaCerta: "Elas podem ser direcionadas para a membrana plasmática, lisossomos, ou liberadas para fora da célula.",
      opcoes: [
        "Elas podem ser direcionadas para a membrana plasmática, lisossomos, ou liberadas para fora da célula.",
        "Elas são armazenadas no citoplasma",
        "Elas são direcionadas para o núcleo da célula",
        "Elas são enviadas para o retículo endoplasmático.",
      ],
    },
    {
      pergunta: "Qual é a importância do Complexo de Golgi na classificação e distribuição de proteínas dentro da célula?",
      alternativaCerta: "Ele garante que as proteínas sejam direcionadas para os locais corretos da célula, desempenhando funções específicas.",
      opcoes: [
        "Ele acelera a produção de energia",
        "Ele armazena informações genéticas",
        "Ele garante que as proteínas sejam direcionadas para os locais corretos da célula, desempenhando funções específicas.",
        "Ele degrada resíduos celulares.",
      ],
    }
  ],
  CENTRIOLOS: [
    {
      pergunta: "O que são centriolos e onde eles são encontrados nas células?",
      alternativaCerta: "Estruturas cilíndricas compostas por microtúbulos, encontradas geralmente perto do núcleo da célula.",
      opcoes: [
        "Pequenas organelas de armazenamento",
        "Estruturas que compõem o núcleo da célula",
        "Estruturas cilíndricas compostas por microtúbulos, encontradas geralmente perto do núcleo da célula.",
        "Estruturas envolvidas na síntese de proteínas.",
      ],
    },
    {
      pergunta: "Qual é a função dos centriolos durante a divisão celular?",
      alternativaCerta: "Eles organizam os microtúbulos do fuso mitótico, que ajudam na segregação dos cromossomos.",
      opcoes: [
        "Eles sintetizam DNA",
        "Eles armazenam energia para a célula",
        "Eles organizam os lipídios na célula",
        "Eles organizam os microtúbulos do fuso mitótico, que ajudam na segregação dos cromossomos.",
      ],
    },
    {
      pergunta: "O que é o fuso mitótico e qual é o papel dos centriolos nele?",
      alternativaCerta: "O fuso mitótico é uma estrutura envolvida na divisão celular, e os centriolos organizam os microtúbulos do fuso para garantir uma divisão celular correta.",
      opcoes: [
        "O fuso mitótico é um tipo de membrana celular",
        "O fuso mitótico é uma estrutura envolvida na divisão celular, e os centriolos organizam os microtúbulos do fuso para garantir uma divisão celular correta.",
        "O fuso mitótico é uma organela que produz ATP",
        "Os centriolos não têm papel no fuso mitótico.",
      ],
    },
    {
      pergunta: "Os centriolos estão presentes em células vegetais?",
      alternativaCerta: "Não, os centriolos são organelas ausentes em células vegetais.",
      opcoes: [
        "Sim, eles estão presentes em todas as células vegetais.",
        "Não, os centriolos são organelas ausentes em células vegetais.",
        "Sim, eles desempenham um papel na fotossíntese das células vegetais.",
        "Sim, eles estão presentes apenas nas células do caule das plantas.",
      ],
    },
    {
      pergunta: "O que acontece com os centriolos após a divisão celular?",
      alternativaCerta: "Eles podem ser replicados para formar novos centriolos nas células filhas.",
      opcoes: [
        "Eles podem ser replicados para formar novos centriolos nas células filhas.",
        "Eles são transformados em lipídios",
        "Eles são armazenados no núcleo da célula",
        "Eles são degradados e reconstituídos a cada divisão celular",
      ],
    }
  ],
  MITOCONDRIAS: [
    {
      pergunta: "O que são mitocôndrias e qual é a sua principal função nas células?",
      alternativaCerta: "Organelas em forma de bastonete envolvidas na produção de energia (ATP) por meio da respiração celular.",
      opcoes: [
        "Estruturas de armazenamento de glicogênio",
        "Organelas em forma de bastonete envolvidas na produção de energia (ATP) por meio da respiração celular.",
        "Organelas que produzem proteínas",
        "Organelas que armazenam informações genéticas.",
      ],
    },
    {
      pergunta: "Qual é o processo pelo qual as mitocôndrias produzem ATP?",
      alternativaCerta: "Respiração celular, que envolve o ciclo de Krebs e a fosforilação oxidativa na cadeia de transporte de elétrons.",
      opcoes: [
        "Respiração celular, que envolve o ciclo de Krebs e a fosforilação oxidativa na cadeia de transporte de elétrons.",
        "Digestão de resíduos celulares",
        "Fotossíntese",
        "Síntese de proteínas.",
      ],
    },
    {
      pergunta: "O que é a teoria endossimbiótica e como se relaciona com as mitocôndrias?",
      alternativaCerta: "A teoria endossimbiótica sugere que as mitocôndrias evoluíram a partir de bactérias simbióticas que foram incorporadas por células hospedeiras, formando uma relação mutualística.",
      opcoes: [
        "A teoria endossimbiótica afirma que as mitocôndrias são organelas de armazenamento de energia",
        "A teoria endossimbiótica sugere que as mitocôndrias evoluíram a partir de bactérias simbióticas que foram incorporadas por células hospedeiras, formando uma relação mutualística.",
        "A teoria endossimbiótica sugere que as mitocôndrias são organelas envolvidas na divisão celular",
        "A teoria endossimbiótica afirma que as mitocôndrias são organelas de síntese de proteínas.",
        ],
    },
    {
      pergunta: "Por que as mitocôndrias são frequentemente chamadas de 'usinas de energia' das células?",
      alternativaCerta: "Porque elas produzem a maior parte do ATP, que é a principal fonte de energia celular.",
      opcoes: [
        "Porque elas são as maiores organelas nas células",
        "Porque elas armazenam glicogênio",
        "Porque elas produzem a maior parte do ATP, que é a principal fonte de energia celular.",
        "Porque elas são responsáveis pela síntese de DNA.",
      ],
    }, 
    {
      pergunta: "Qual é a estrutura interna das mitocôndrias que é fundamental para a produção de ATP?",
      alternativaCerta: "A membrana interna com suas cristas mitocondriais, que aumentam a área de superfície para a cadeia de transporte de elétrons.",
      opcoes: [
        "O núcleo mitocondrial",
        "A membrana plasmática",
        "O citoplasma circundante.",
        "A membrana interna com suas cristas mitocondriais, que aumentam a área de superfície para a cadeia de transporte de elétrons.",
      ],
    }
  ],
};

let perguntas = [];

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

const palavrasESons = {
  "VASCO": new Audio("../audio/audioVasco.mp4"),
  "GOL": new Audio("../audio/audioGol.mp4"),
  "RICA": new Audio("../audio/audioEuSouRica.mp4"),
  "OXE": new Audio("../audio/audioOxe.mp4"),
  "ISSO": new Audio("../audio/audioIsso.mp3"),
  "RISO": new Audio("../audio/audioRiso.mp3"),
  "CERTO": new Audio("../audio/audioCerto.mp3"),
  "RESPEITO": new Audio("../audio/audioRespeito.mp4"),
  "AMA": new Audio("../audio/audioAMA.mp3"),
  "LA": new Audio("../audio/audioLa.mp3"),
};

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

    if (palavrasESons[palavraDeEntrada]) {
      // Se a palavra de entrada estiver no objeto, reproduza o som correspondente
      palavrasESons[palavraDeEntrada].play();
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
    }, 1000); // Recarregar após 1 segundos
  }
});

// Função para direcionar o usuário para o quiz
function direcionarParaQuiz() {

  caixaInformacaoPuzzle.classList.remove("informacaoAtivo"); // Ocultar a caixa de informações do puzzle
  container.classList.add("esconder"); // Ocultar o contêiner do jogo de palavras cruzadas

   
  // Função para adicionar perguntas com base na palavra-chave encontrada
  function adicionarPerguntasPorPalavra(palavraChave) {
    if (perguntasPorPalavra[palavraChave]) {
      
      perguntas = perguntas.concat(perguntasPorPalavra[palavraChave]);
        console.log("Perguntas adicionadas com base na palavra-chave:", palavraChave);
        
    } else {
        console.log("Palavra-chave não encontrada. Nenhuma pergunta adicionada.");
    }
  }

  let palavraChaveDoUsuario = palavraDeEntrada;

  // Chame a função para adicionar as perguntas com base na palavra-chave encontrada
  adicionarPerguntasPorPalavra(palavraChaveDoUsuario);
  
  // Agora o array 'perguntas' contém as perguntas associadas à palavra-chave.
  console.log("Perguntas:", perguntas);


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