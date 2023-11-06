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
const containerConfetes = document.querySelector(".container-confetes");
const audioVitoria = new Audio("../audio/vitoria.mp3");
const audioCertaResposta = new Audio("../audio/audioCertaResposta.mp3");
const audioNinguemAcertou = new Audio("../audio/audioNinguem.mp3");
const audioTaBom = new Audio("../audio/audioTaBom.mp3");
const audioErrou = new Audio("../audio/audioErrou.mp3");
const audioTempo = new Audio("../audio/audioTempo.mp3");

// criando um array e passando o número, perguntas, opções e respostas
let perguntas = [
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
  },
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
  },
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
  },
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
  },
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
  iniciarTempo(10); // chamando a função iniciarTempo
  iniciarLinhaTemporizador(0); // chamando a função iniciarLinhaTemporizador
};

let tempoValor = 10;
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
  tempoValor = 10;
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
    audioCertaResposta.play();
    console.log("Resposta Correta");
    console.log("Suas respostas corretas = " + pontoUsario);
  } else {
    alternativaCerta.classList.add("incorrect"); // adicionar a cor vermelha à opção selecionada correta
    alternativaCerta.insertAdjacentHTML("beforeend", iconeErrado); // adicionar o ícone de cruz à opção selecionada correta
    audioErrou.play();
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
  if (pontoUsario === perguntas.length) {
    // Se o usuário acertar todas as perguntas
    let scoreTag =
      "<span>Parabéns! Você acertou todas as <p>" +
      pontoUsario +
      "</p> de <p>" +
      perguntas.length +
      "</p> perguntas!</span>";
    pontosTexto.innerHTML = scoreTag;
  } else if (pontoUsario > 6) {
    // Se o usuário acertar mais de 6 perguntas
    let scoreTag =
      "<span>Ótimo trabalho! Você acertou mais de 6 perguntas. Acertou <p>" +
      pontoUsario +
      "</p> de <p>" +
      perguntas.length +
      "</p> perguntas.</span>";
    pontosTexto.innerHTML = scoreTag;
  } else if (pontoUsario > 1) {
    // Se o usuário acertar mais de 1 pergunta
    let scoreTag =
      "<span>Legal! Você acertou <p>" +
      pontoUsario +
      "</p> de <p>" +
      perguntas.length +
      "</p> perguntas.</span>";
      audioTaBom.play();
    pontosTexto.innerHTML = scoreTag;
  } else if (pontoUsario < 1) {
    // Se o usuário não acertar nenhuma pergunta
    let scoreTag =
      "<span>Desculpe, mas você não acertou nenhuma questão.</span>";
      audioNinguemAcertou.play();
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
          audioTempo.play();
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

// se o botão restartQuiz for clicado
reinicioQuiz.onclick = () => {
  caixaQuiz.classList.add("quizAtivo"); // mostrar quiz box
  caixaResultado.classList.remove("resultadoAtivo"); // esconder result box
  tempoValor = 10;
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