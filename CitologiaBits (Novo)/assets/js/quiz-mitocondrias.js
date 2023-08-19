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
    pergunta: "Qual é a principal função das mitocôndrias?",
    alternativaCerta: "Produção de energia através da respiração celular",
    opcoes: [
      "Síntese de proteínas",
      "Armazenamento de lipídios",
      "Fotossíntese",
      "Produção de energia através da respiração celular"
    ]
  },
  {
    pergunta: "Como as mitocôndrias produzem energia?",
    alternativaCerta: "Através da respiração celular, onde ocorre a oxidação de nutrientes e a produção de ATP",
    opcoes: [
      "Através da fotossíntese",
      "Através da fermentação",
      "Através da duplicação de DNA",
      "Através da respiração celular, onde ocorre a oxidação de nutrientes e a produção de ATP"
    ]
  },
  {
    pergunta: "Qual é a estrutura única das mitocôndrias?",
    alternativaCerta: "Dupla membrana - membrana externa e membrana interna",
    opcoes: [
      "Parede celular",
      "Núcleo",
      "Retículo endoplasmático",
      "Dupla membrana - membrana externa e membrana interna"
    ]
  },
  {
    pergunta: "Qual parte da mitocôndria é responsável pela produção de ATP?",
    alternativaCerta: "Membrana interna, especialmente as cristas mitocondriais",
    opcoes: [
      "Membrana externa",
      "Matriz mitocondrial",
      "Espaço intermembranar",
      "Membrana interna, especialmente as cristas mitocondriais"
    ]
  },
  {
    pergunta: "Qual é a teoria amplamente aceita sobre a origem das mitocôndrias?",
    alternativaCerta: "Teoria da endossimbiose: as mitocôndrias evoluíram a partir de bactérias que foram incorporadas por células ancestrais",
    opcoes: [
      "Teoria da evolução lamarckiana",
      "Teoria do design inteligente",
      "Teoria da geração espontânea",
      "Teoria da endossimbiose: as mitocôndrias evoluíram a partir de bactérias que foram incorporadas por células ancestrais"
    ]
  },
  {
    pergunta: "Além da produção de energia, as mitocôndrias estão envolvidas em outras funções?",
    alternativaCerta: "Sim, as mitocôndrias também estão envolvidas na regulação do metabolismo, na apoptose e na sinalização celular",
    opcoes: [
      "Não, as mitocôndrias têm apenas a função de produção de energia",
      "Sim, as mitocôndrias também estão envolvidas na síntese de proteínas",
      "Sim, as mitocôndrias desempenham apenas funções de armazenamento",
      "Sim, as mitocôndrias também estão envolvidas na regulação do metabolismo, na apoptose e na sinalização celular"
    ]
  },
  {
    pergunta: "Quais componentes celulares são responsáveis pela produção de moléculas precursoras para a síntese de ATP nas mitocôndrias?",
    alternativaCerta: "Mitocôndrias produzem moléculas precursoras na matriz mitocondrial",
    opcoes: [
      "Retículo endoplasmático",
      "Núcleo",
      "Complexo de Golgi",
      "Mitocôndrias produzem moléculas precursoras na matriz mitocondrial"
    ]
  },
  {
    pergunta: "Como as mitocôndrias obtêm o oxigênio necessário para a respiração celular?",
    alternativaCerta: "O oxigênio é obtido através da difusão a partir do ambiente celular",
    opcoes: [
      "As mitocôndrias produzem seu próprio oxigênio",
      "As mitocôndrias obtêm oxigênio do núcleo",
      "As mitocôndrias obtêm oxigênio do retículo endoplasmático",
      "O oxigênio é obtido através da difusão a partir do ambiente celular"
    ]
  },
  {
    pergunta: "O que é a membrana interna cristalina nas mitocôndrias?",
    alternativaCerta: "Dobras ou invaginações da membrana interna que aumentam a área superficial para a produção de ATP",
    opcoes: [
      "A camada mais externa da membrana interna",
      "Uma membrana encontrada apenas em mitocôndrias vegetais",
      "Uma membrana que separa a matriz mitocondrial da membrana externa",
      "Dobras ou invaginações da membrana interna que aumentam a área superficial para a produção de ATP"
    ]
  },
  {
    pergunta: "Quais são os produtos finais da respiração celular nas mitocôndrias?",
    alternativaCerta: "Dióxido de carbono (CO2), água (H2O) e energia na forma de ATP",
    opcoes: [
      "Glicose e oxigênio",
      "Ácido lático e etanol",
      "Dióxido de carbono (CO2) e glicerol",
      "Dióxido de carbono (CO2), água (H2O) e energia na forma de ATP"
    ]
  },
  {
    pergunta: "Qual é a relação entre as mitocôndrias e a herança mitocondrial?",
    alternativaCerta: "As mitocôndrias possuem seu próprio DNA e são transmitidas principalmente pela linha materna",
    opcoes: [
      "As mitocôndrias são transmitidas apenas pela linha paterna",
      "As mitocôndrias não possuem DNA",
      "As mitocôndrias possuem DNA nuclear",
      "As mitocôndrias possuem seu próprio DNA e são transmitidas principalmente pela linha materna"
    ]
  },
  {
    pergunta: "Quais tipos de células geralmente possuem um maior número de mitocôndrias?",
    alternativaCerta: "Células com alta demanda energética, como células musculares e neurônios",
    opcoes: [
      "Células vegetais",
      "Células bacterianas",
      "Células com baixa demanda energética",
      "Células com alta demanda energética, como células musculares e neurônios"
    ]
  },
  {
    pergunta: "O que é o potencial de membrana nas mitocôndrias?",
    alternativaCerta: "A diferença de carga elétrica entre a membrana interna e a matriz mitocondrial, essencial para a produção de ATP",
    opcoes: [
      "Uma membrana encontrada apenas em mitocôndrias vegetais",
      "Uma membrana que separa a membrana interna da externa",
      "Uma membrana que contém enzimas de síntese de proteínas",
      "A diferença de carga elétrica entre a membrana interna e a matriz mitocondrial, essencial para a produção de ATP"
    ]
  },
  {
    pergunta: "Como as mitocôndrias desempenham um papel na apoptose?",
    alternativaCerta: "Elas liberam moléculas pró-apoptóticas, como citocromo c, que ativam o processo de morte celular programada",
    opcoes: [
      "As mitocôndrias aumentam a produção de ATP para evitar a apoptose",
      "As mitocôndrias inibem a apoptose",
      "As mitocôndrias se multiplicam durante a apoptose",
      "Elas liberam moléculas pró-apoptóticas, como citocromo c, que ativam o processo de morte celular programada"
    ]
  },
  {
    pergunta: "Qual é a importância das mitocôndrias na homeostase de cálcio?",
    alternativaCerta: "As mitocôndrias regulam os níveis de cálcio intracelular, ajudando a controlar processos como a sinalização celular",
    opcoes: [
      "As mitocôndrias produzem cálcio",
      "As mitocôndrias armazenam cálcio",
      "As mitocôndrias degradam cálcio",
      "As mitocôndrias regulam os níveis de cálcio intracelular, ajudando a controlar processos como a sinalização celular"
    ]
  },
  {
    pergunta: "Qual é o nome do processo de replicação independente de DNA nas mitocôndrias?",
    alternativaCerta: "Replicação do DNA mitocondrial",
    opcoes: [
      "Replicação do DNA nuclear",
      "Replicação do DNA mitocondrial",
      "Replicação do DNA bacteriano",
      "Replicação do DNA ribossômico"
    ]
  },
  {
    pergunta: "Quais produtos químicos tóxicos são produzidos como subprodutos da respiração celular nas mitocôndrias?",
    alternativaCerta: "Radical livre superóxido (O2-) e peróxido de hidrogênio (H2O2)",
    opcoes: [
      "Dióxido de carbono (CO2) e oxigênio (O2)",
      "Glicose e etanol",
      "Ácido lático e glicerol",
      "Radical livre superóxido (O2-) e peróxido de hidrogênio (H2O2)"
    ]
  },
  {
    pergunta: "Onde são encontradas as mitocôndrias dentro da célula?",
    alternativaCerta: "Em toda a célula, mas principalmente em regiões com alta demanda energética",
    opcoes: [
      "Apenas no núcleo da célula",
      "Apenas no citoplasma",
      "Apenas no retículo endoplasmático",
      "Em toda a célula, mas principalmente em regiões com alta demanda energética"
    ]
  },
  {
    pergunta: "Como as mitocôndrias se dividem?",
    alternativaCerta: "Por fissão, onde elas se separam em duas mitocôndrias filhas",
    opcoes: [
      "Por fusão, onde duas mitocôndrias se fundem em uma",
      "Por duplicação do DNA nuclear",
      "Por meiose",
      "Por fissão, onde elas se separam em duas mitocôndrias filhas"
    ]
  },
  {
    pergunta: "Qual é a origem das mitocôndrias de acordo com a teoria da endossimbiose?",
    alternativaCerta: "Elas surgiram a partir da incorporação simbiótica de uma bactéria aeróbica por uma célula hospedeira ancestral",
    opcoes: [
      "Elas surgiram a partir da replicação de organelas existentes",
      "Elas se formaram a partir da membrana plasmática da célula hospedeira",
      "Elas foram criadas diretamente pelo núcleo celular",
      "Elas surgiram a partir da incorporação simbiótica de uma bactéria aeróbica por uma célula hospedeira ancestral"
    ]
  },
  {
    pergunta: "Quais são as duas principais fases da respiração celular onde as mitocôndrias estão envolvidas?",
    alternativaCerta: "Glicólise e fosforilação oxidativa",
    opcoes: [
      "Fotossíntese e fermentação",
      "Síntese de proteínas e duplicação do DNA",
      "Tradução e transcrição",
      "Glicólise e fosforilação oxidativa"
    ]
  },
  {
    pergunta: "Além de oxigênio e glicose, que outro componente é necessário para a produção de ATP nas mitocôndrias?",
    alternativaCerta: "Enzimas específicas que catalisam as reações da cadeia respiratória",
    opcoes: [
      "Luz solar",
      "Vitaminas",
      "Água",
      "Enzimas específicas que catalisam as reações da cadeia respiratória"
    ]
  },
  {
    pergunta: "Quais são os principais produtos finais da glicólise, que ocorre no citoplasma?",
    alternativaCerta: "Ácido pirúvico, ATP e NADH",
    opcoes: [
      "Dióxido de carbono (CO2) e água (H2O)",
      "Ácido cítrico e NAD+",
      "Glicose e oxigênio",
      "Ácido pirúvico, ATP e NADH"
    ]
  },
  {
    pergunta: "O que é a fosforilação oxidativa nas mitocôndrias?",
    alternativaCerta: "Um processo em que a energia liberada durante as reações da cadeia respiratória é usada para produzir ATP",
    opcoes: [
      "A liberação de oxigênio durante a respiração celular",
      "A produção de ácido lático",
      "A conversão de glicose em glicogênio",
      "Um processo em que a energia liberada durante as reações da cadeia respiratória é usada para produzir ATP"
    ]
  },
  {
    pergunta: "Qual é a função das cristas mitocondriais?",
    alternativaCerta: "Aumentar a área superficial para a produção de ATP",
    opcoes: [
      "Produzir lipídios",
      "Sintetizar proteínas",
      "Armazenar glicose",
      "Aumentar a área superficial para a produção de ATP"
    ]
  },
  {
    pergunta: "O que é o ciclo do ácido cítrico (ciclo de Krebs) e onde ocorre?",
    alternativaCerta: "Uma série de reações que ocorrem na matriz mitocondrial, produzindo intermediários para a produção de ATP",
    opcoes: [
      "Uma reação única que ocorre na membrana interna das mitocôndrias",
      "Um processo que ocorre no retículo endoplasmático",
      "A síntese de ácido cítrico no citoplasma",
      "Uma série de reações que ocorrem na matriz mitocondrial, produzindo intermediários para a produção de ATP"
    ]
  },
  {
    pergunta: "Qual é a importância da cadeia respiratória nas mitocôndrias?",
    alternativaCerta: "É onde ocorre a transferência de elétrons, resultando na produção de um gradiente eletroquímico usado para a síntese de ATP",
    opcoes: [
      "É responsável pela síntese de glicose",
      "Desempenha um papel na replicação do DNA mitocondrial",
      "Produz moléculas de oxigênio para a célula",
      "É onde ocorre a transferência de elétrons, resultando na produção de um gradiente eletroquímico usado para a síntese de ATP"
    ]
  },
  {
    pergunta: "Quais tipos de moléculas transportam elétrons na cadeia respiratória mitocondrial?",
    alternativaCerta: "Citocromos e coenzima Q (ubiquinona)",
    opcoes: [
      "Vitaminas e enzimas",
      "Água e glicose",
      "Ácidos nucleicos",
      "Citocromos e coenzima Q (ubiquinona)"
    ]
  },
  {
    pergunta: "O que é a quimiosmose nas mitocôndrias?",
    alternativaCerta: "O processo pelo qual os íons H+ fluem através da membrana interna, impulsionados por um gradiente eletroquímico, para produzir ATP",
    opcoes: [
      "A produção de ácido cítrico",
      "A formação de novas mitocôndrias",
      "A regulação do metabolismo",
      "O processo pelo qual os íons H+ fluem através da membrana interna, impulsionados por um gradiente eletroquímico, para produzir ATP"
    ]
  },
  {
    pergunta: "O que é a oxidação do ácido graxo e onde ocorre?",
    alternativaCerta: "A quebra de ácidos graxos em acetil-CoA, ocorrendo nas mitocôndrias",
    opcoes: [
      "A formação de ácidos graxos a partir de glicerol",
      "A produção de ácido graxo na membrana plasmática",
      "A conversão de ácido pirúvico em ácido graxo",
      "A quebra de ácidos graxos em acetil-CoA, ocorrendo nas mitocôndrias"
    ]
  },
  {
    pergunta: "Qual é o papel das mitocôndrias na produção de radicais livres?",
    alternativaCerta: "As mitocôndrias são uma fonte importante de radicais livres como subprodutos da respiração celular",
    opcoes: [
      "As mitocôndrias não produzem radicais livres",
      "Elas produzem radicais livres apenas durante a fotossíntese",
      "As mitocôndrias produzem radicais livres durante a fermentação",
      "As mitocôndrias são uma fonte importante de radicais livres como subprodutos da respiração celular"
    ]
  },
  {
    pergunta: "Quais são os benefícios das mitocôndrias para as células?",
    alternativaCerta: "Produção eficiente de energia, regulação do metabolismo, controle do estresse oxidativo e envolvimento na apoptose",
    opcoes: [
      "Produção de ácido lático",
      "Armazenamento de glicogênio",
      "Síntese de proteínas",
      "Produção eficiente de energia, regulação do metabolismo, controle do estresse oxidativo e envolvimento na apoptose"
    ]
  },
  {
    pergunta: "Quais fatores podem afetar a função das mitocôndrias?",
    alternativaCerta: "Envelhecimento, estresse oxidativo, mutações genéticas e má alimentação",
    opcoes: [
      "Exposição à luz solar",
      "Duplicação excessiva do DNA mitocondrial",
      "Falta de oxigênio",
      "Envelhecimento, estresse oxidativo, mutações genéticas e má alimentação"
    ]
  },
  {
    pergunta: "Como as mitocôndrias estão relacionadas às doenças mitocondriais?",
    alternativaCerta: "Mutação ou disfunção das mitocôndrias pode levar a distúrbios que afetam a produção de energia e outras funções celulares",
    opcoes: [
      "As mitocôndrias não estão relacionadas a doenças",
      "Elas causam diretamente doenças infecciosas",
      "Apenas células vegetais sofrem de doenças mitocondriais",
      "Mutação ou disfunção das mitocôndrias pode levar a distúrbios que afetam a produção de energia e outras funções celulares"
    ]
  },
  {
    pergunta: "O que é a síndrome de Leigh?",
    alternativaCerta: "Uma doença genética mitocondrial que afeta o sistema nervoso central e causa sintomas como fraqueza muscular e problemas respiratórios",
    opcoes: [
      "Uma condição em que as mitocôndrias se multiplicam excessivamente",
      "Uma infecção causada por bactérias",
      "Uma doença que afeta apenas células vegetais",
      "Uma doença genética mitocondrial que afeta o sistema nervoso central e causa sintomas como fraqueza muscular e problemas respiratórios"
    ]
  },
  {
    pergunta: "Como as mitocôndrias são transmitidas de uma geração para a próxima?",
    alternativaCerta: "Principalmente através da linhagem materna, já que as mitocôndrias do espermatozoide são geralmente eliminadas durante a fertilização",
    opcoes: [
      "Principalmente através da linhagem paterna",
      "Através da linhagem materna e paterna igualmente",
      "Apenas através do espermatozoide",
      "Principalmente através da linhagem materna, já que as mitocôndrias do espermatozoide são geralmente eliminadas durante a fertilização"
    ]
  },
  {
    pergunta: "Como as mitocôndrias podem influenciar o envelhecimento?",
    alternativaCerta: "O acúmulo de danos mitocondriais ao longo do tempo pode contribuir para o envelhecimento celular e o declínio das funções",
    opcoes: [
      "Elas aceleram o processo de envelhecimento",
      "Elas não têm relação com o envelhecimento",
      "As mitocôndrias retardam o envelhecimento",
      "O acúmulo de danos mitocondriais ao longo do tempo pode contribuir para o envelhecimento celular e o declínio das funções"
    ]
  },
  {
    pergunta: "O que é a matriz mitocondrial?",
    alternativaCerta: "O espaço interno das mitocôndrias onde ocorrem várias reações metabólicas",
    opcoes: [
      "Uma membrana externa das mitocôndrias",
      "Uma organela localizada no citoplasma",
      "Uma parte da cadeia respiratória",
      "O espaço interno das mitocôndrias onde ocorrem várias reações metabólicas"
    ]
  },
  {
    pergunta: "Qual é o papel das mitocôndrias na regulação do metabolismo?",
    alternativaCerta: "Elas estão envolvidas na regulação do metabolismo de lipídios, carboidratos e aminoácidos",
    opcoes: [
      "Elas não têm influência na regulação do metabolismo",
      "Elas são responsáveis apenas pela produção de ATP",
      "Elas regulam apenas o metabolismo de proteínas",
      "Elas estão envolvidas na regulação do metabolismo de lipídios, carboidratos e aminoácidos"
    ]
  },
  {
    pergunta: "Quais são os possíveis efeitos da disfunção mitocondrial?",
    alternativaCerta: "Fadiga, perda de massa muscular, comprometimento cognitivo e problemas neurológicos",
    opcoes: [
      "Aumento da produção de ATP",
      "Melhora na função cerebral",
      "Aumento da longevidade",
      "Fadiga, perda de massa muscular, comprometimento cognitivo e problemas neurológicos"
    ]
  },
  {
    pergunta: "O que é a apoptose?",
    alternativaCerta: "É um processo de morte celular programada, em que as mitocôndrias desempenham um papel crucial na liberação de sinalizadores para iniciar a morte celular",
    opcoes: [
      "Um processo de divisão celular",
      "Uma reação química nas mitocôndrias",
      "A produção de proteínas",
      "É um processo de morte celular programada, em que as mitocôndrias desempenham um papel crucial na liberação de sinalizadores para iniciar a morte celular"
    ]
  },
  {
    pergunta: "Como a estrutura das mitocôndrias se relaciona com suas funções?",
    alternativaCerta: "A membrana interna é altamente invaginada em cristas, o que aumenta a área de superfície para as reações da cadeia respiratória",
    opcoes: [
      "A estrutura das mitocôndrias não tem relação com suas funções",
      "A membrana interna é lisa para facilitar a passagem de substâncias",
      "As mitocôndrias têm estrutura semelhante às bactérias",
      "A membrana interna é altamente invaginada em cristas, o que aumenta a área de superfície para as reações da cadeia respiratória"
    ]
  },
  {
    pergunta: "Qual é a importância do gradiente eletroquímico nas mitocôndrias?",
    alternativaCerta: "Ele é fundamental para a síntese de ATP através da fosforilação oxidativa",
    opcoes: [
      "Ele não tem nenhuma função nas mitocôndrias",
      "Ele é apenas um subproduto da respiração celular",
      "Ele é importante para a produção de radicais livres",
      "Ele é fundamental para a síntese de ATP através da fosforilação oxidativa"
    ]
  },
  {
    pergunta: "Qual é a relação entre as mitocôndrias e a homeostase do cálcio?",
    alternativaCerta: "As mitocôndrias estão envolvidas no armazenamento e liberação de cálcio, que é importante para vários processos celulares",
    opcoes: [
      "As mitocôndrias não têm relação com a homeostase do cálcio",
      "Elas produzem cálcio durante a fotossíntese",
      "Elas degradam o cálcio no citoplasma",
      "As mitocôndrias estão envolvidas no armazenamento e liberação de cálcio, que é importante para vários processos celulares"
    ]
  },
  {
    pergunta: "Quais são as características estruturais das mitocôndrias?",
    alternativaCerta: "Elas possuem membrana externa, membrana interna, espaço intermembranar e matriz",
    opcoes: [
      "Elas têm apenas membrana interna e matriz",
      "Elas possuem apenas membrana externa e espaço intermembranar",
      "Elas possuem membrana externa e interna, mas não têm espaço intermembranar",
      "Elas possuem membrana externa, membrana interna, espaço intermembranar e matriz"
    ]
  },
  {
    pergunta: "Qual é a relação entre as mitocôndrias e a regulação do estresse oxidativo?",
    alternativaCerta: "As mitocôndrias são uma fonte significativa de espécies reativas de oxigênio (EROs) e podem influenciar o equilíbrio redox celular",
    opcoes: [
      "As mitocôndrias não estão relacionadas ao estresse oxidativo",
      "Elas produzem apenas antioxidantes",
      "Elas neutralizam todos os EROs",
      "As mitocôndrias são uma fonte significativa de espécies reativas de oxigênio (EROs) e podem influenciar o equilíbrio redox celular"
    ]
  },
  {
    pergunta: "O que é a doença de Kearns-Sayre?",
    alternativaCerta: "Uma doença mitocondrial rara que afeta múltiplos sistemas do corpo, causando fraqueza muscular, problemas cardíacos e outros sintomas",
    opcoes: [
      "Uma condição benigna das mitocôndrias",
      "Uma doença que afeta apenas o sistema nervoso central",
      "Uma doença que afeta exclusivamente células vegetais",
      "Uma doença mitocondrial rara que afeta múltiplos sistemas do corpo, causando fraqueza muscular, problemas cardíacos e outros sintomas"
    ]
  },
  {
    pergunta: "Qual é a relação entre as mitocôndrias e a produção de radicais livres?",
    alternativaCerta: "As mitocôndrias são uma das principais fontes de radicais livres no corpo devido ao processo de respiração celular",
    opcoes: [
      "As mitocôndrias não produzem radicais livres",
      "Elas produzem radicais livres apenas durante a fotossíntese",
      "Elas produzem radicais livres apenas durante a replicação do DNA",
      "As mitocôndrias são uma das principais fontes de radicais livres no corpo devido ao processo de respiração celular"
    ]
  },
  {
    pergunta: "Como as mitocôndrias se relacionam com a regulação do metabolismo energético?",
    alternativaCerta: "Elas desempenham um papel central na produção de ATP, que é a principal fonte de energia para as células",
    opcoes: [
      "Elas não têm influência na regulação do metabolismo",
      "Elas regulam apenas o metabolismo de carboidratos",
      "Elas produzem energia na forma de glicogênio",
      "Elas desempenham um papel central na produção de ATP, que é a principal fonte de energia para as células"
    ]
  },
  {
    pergunta: "Qual é a relação entre mitocôndrias e a síntese de esteroides?",
    alternativaCerta: "As mitocôndrias são importantes para a síntese de esteroides, que são moléculas essenciais para várias funções celulares e hormonais",
    opcoes: [
      "Elas não têm relação com a síntese de esteroides",
      "Elas degradam os esteroides",
      "Elas sintetizam apenas proteínas",
      "As mitocôndrias são importantes para a síntese de esteroides, que são moléculas essenciais para várias funções celulares e hormonais"
    ]
  },
  {
    pergunta: "Qual é a relação entre as mitocôndrias e a função do sistema imunológico?",
    alternativaCerta: "Elas desempenham um papel na modulação da resposta imunológica e na sinalização celular durante a inflamação",
    opcoes: [
      "Elas não têm influência sobre o sistema imunológico",
      "Elas produzem anticorpos",
      "Elas são responsáveis pela produção de células imunológicas",
      "Elas desempenham um papel na modulação da resposta imunológica e na sinalização celular durante a inflamação"
    ]
  },
  {
    pergunta: "O que é a síndrome de MELAS?",
    alternativaCerta: "Uma doença mitocondrial que afeta músculos, cérebro e sistema nervoso, causando sintomas como fraqueza muscular e enxaquecas",
    opcoes: [
      "Uma síndrome relacionada ao estresse oxidativo",
      "Uma síndrome que afeta apenas células vegetais",
      "Uma condição benigna",
      "Uma doença mitocondrial que afeta músculos, cérebro e sistema nervoso, causando sintomas como fraqueza muscular e enxaquecas"
    ]
  },
  {
    pergunta: "Qual é o processo pelo qual as mitocôndrias geram ATP?",
    alternativaCerta: "Fosforilação oxidativa",
    opcoes: [
      "Fotossíntese",
      "Glicólise",
      "Transcrição",
      "Fosforilação oxidativa"
    ]
  },
  {
    pergunta: "Quais são as características das mitocôndrias que apoiam a teoria endossimbiótica?",
    alternativaCerta: "Elas têm DNA próprio, ribossomos semelhantes aos procariotos e dividem-se por fissão",
    opcoes: [
      "Elas têm paredes celulares",
      "Elas são maiores do que as células hospedeiras",
      "Elas não possuem membranas",
      "Elas têm DNA próprio, ribossomos semelhantes aos procariotos e dividem-se por fissão"
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
