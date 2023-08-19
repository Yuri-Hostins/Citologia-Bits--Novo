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
    pergunta: "O que é o retículo endoplasmático?",
    alternativaCerta: "Uma organela celular responsável pela síntese e transporte de proteínas e lipídios",
    opcoes: [
      "Uma organela responsável pela produção de energia",
      "Um tipo de membrana presente no núcleo celular",
      "Uma organela que realiza a fotossíntese",
      "Uma organela celular responsável pela síntese e transporte de proteínas e lipídios"
    ]
  },
  {
    pergunta: "Quais são os dois tipos principais de retículo endoplasmático?",
    alternativaCerta: "Retículo endoplasmático rugoso e retículo endoplasmático liso",
    opcoes: [
      "Retículo endoplasmático áspero e retículo endoplasmático suave",
      "Retículo endoplasmático grosso e retículo endoplasmático fino",
      "Retículo endoplasmático ácido e retículo endoplasmático básico",
      "Retículo endoplasmático rugoso e retículo endoplasmático liso"
    ]
  },
  {
    pergunta: "O que caracteriza o retículo endoplasmático rugoso?",
    alternativaCerta: "Presença de ribossomos aderidos à sua membrana",
    opcoes: [
      "Ausência de membranas",
      "Presença de enzimas digestivas",
      "Síntese de lipídios",
      "Presença de ribossomos aderidos à sua membrana"
    ]
  },
  {
    pergunta: "Qual é a principal função do retículo endoplasmático rugoso?",
    alternativaCerta: "Síntese de proteínas e seu encaminhamento para outras organelas ou para exportação",
    opcoes: [
      "Produção de energia",
      "Síntese de lipídios",
      "Digestão de resíduos celulares",
      "Síntese de proteínas e seu encaminhamento para outras organelas ou para exportação"
    ]
  },
  {
    pergunta: "O que acontece com as proteínas sintetizadas no retículo endoplasmático rugoso?",
    alternativaCerta: "Elas são modificadas, dobradas corretamente e encaminhadas para outros destinos celulares",
    opcoes: [
      "Elas são degradadas",
      "Elas são transportadas para o núcleo celular",
      "Elas são convertidas em lipídios",
      "Elas são modificadas, dobradas corretamente e encaminhadas para outros destinos celulares"
    ]
  },
  {
    pergunta: "Qual é a função do retículo endoplasmático liso?",
    alternativaCerta: "Síntese de lipídios, metabolismo de carboidratos, detoxificação e armazenamento de íons de cálcio",
    opcoes: [
      "Síntese de proteínas",
      "Produção de energia",
      "Digestão intracelular",
      "Síntese de lipídios, metabolismo de carboidratos, detoxificação e armazenamento de íons de cálcio"
    ]
  },
  {
    pergunta: "Onde o retículo endoplasmático liso é mais abundante?",
    alternativaCerta: "Em células do fígado, músculo e células que produzem hormônios esteroides",
    opcoes: [
      "Em células nervosas",
      "Em células vegetais",
      "Em células do sistema imunológico",
      "Em células do fígado, músculo e células que produzem hormônios esteroides"
    ]
  },
  {
    pergunta: "Qual é a relação entre o retículo endoplasmático rugoso e a síntese de proteínas?",
    alternativaCerta: "O retículo endoplasmático rugoso está envolvido na síntese de proteínas, pois possui ribossomos aderidos à sua membrana",
    opcoes: [
      "O retículo endoplasmático rugoso armazena proteínas",
      "O retículo endoplasmático rugoso quebra proteínas",
      "O retículo endoplasmático rugoso não tem relação com a síntese de proteínas",
      "O retículo endoplasmático rugoso está envolvido na síntese de proteínas, pois possui ribossomos aderidos à sua membrana"
    ]
  },
  {
    pergunta: "Qual é a importância do retículo endoplasmático para a detoxificação celular?",
    alternativaCerta: "O retículo endoplasmático liso possui enzimas que ajudam a metabolizar substâncias tóxicas",
    opcoes: [
      "O retículo endoplasmático armazena toxinas",
      "O retículo endoplasmático produz toxinas",
      "O retículo endoplasmático liso não tem relação com detoxificação",
      "O retículo endoplasmático liso possui enzimas que ajudam a metabolizar substâncias tóxicas"
    ]
  },
  {
    pergunta: "O que é o retículo endoplasmático granular?",
    alternativaCerta: "Outro nome para o retículo endoplasmático rugoso devido à presença de ribossomos",
    opcoes: [
      "Uma forma especializada de retículo endoplasmático liso",
      "Uma organela que armazena água",
      "Uma estrutura encontrada apenas em células vegetais",
      "Outro nome para o retículo endoplasmático rugoso devido à presença de ribossomos"
    ]
  },
  {
    pergunta: "Quais organelas estão frequentemente associadas ao retículo endoplasmático rugoso?",
    alternativaCerta: "Complexo de Golgi e vesículas de transporte",
    opcoes: [
      "Mitocôndrias e peroxissomos",
      "Cloroplastos e lisossomos",
      "Vacúolos e ribossomos",
      "Complexo de Golgi e vesículas de transporte"
    ]
  },
  {
    pergunta: "Como o retículo endoplasmático se relaciona com o complexo de Golgi?",
    alternativaCerta: "O retículo endoplasmático é responsável pelo fornecimento de proteínas e lipídios ao complexo de Golgi",
    opcoes: [
      "O retículo endoplasmático armazena o complexo de Golgi",
      "O retículo endoplasmático realiza a fotossíntese em conjunto com o complexo de Golgi",
      "O retículo endoplasmático e o complexo de Golgi são a mesma organela",
      "O retículo endoplasmático é responsável pelo fornecimento de proteínas e lipídios ao complexo de Golgi"
    ]
  },
  {
    pergunta: "Qual é a importância do retículo endoplasmático para a regulação do cálcio intracelular?",
    alternativaCerta: "O retículo endoplasmático liso armazena e libera íons de cálcio, essenciais para processos celulares",
    opcoes: [
      "O retículo endoplasmático regula a pressão osmótica da célula",
      "O retículo endoplasmático liso produz cálcio",
      "O retículo endoplasmático armazena líquidos",
      "O retículo endoplasmático liso armazena e libera íons de cálcio, essenciais para processos celulares"
    ]
  },
  {
    pergunta: "Qual é o processo pelo qual proteínas são transportadas do retículo endoplasmático para o complexo de Golgi?",
    alternativaCerta: "Via de transporte vesicular",
    opcoes: [
      "Fusão nuclear",
      "Fagocitose",
      "Difusão passiva",
      "Via de transporte vesicular"
    ]
  },
  {
    pergunta: "Como o retículo endoplasmático participa na síntese de membranas celulares?",
    alternativaCerta: "Ele produz lipídios que são incorporados às membranas",
    opcoes: [
      "Ele produz proteínas que formam as membranas",
      "Ele quebra as membranas celulares",
      "Ele não tem relação com as membranas celulares",
      "Ele produz lipídios que são incorporados às membranas"
    ]
  },
  {
    pergunta: "Qual é o papel do retículo endoplasmático rugoso na síntese de proteínas?",
    alternativaCerta: "Ele fornece um local para a síntese de proteínas e auxilia na modulação da estrutura das proteínas",
    opcoes: [
      "Ele armazena proteínas prontas",
      "Ele quebra proteínas defeituosas",
      "Ele realiza a fotossíntese",
      "Ele fornece um local para a síntese de proteínas e auxilia na modulação da estrutura das proteínas"
    ]
  },
  {
    pergunta: "Como o retículo endoplasmático está envolvido na síntese de hormônios esteroides?",
    alternativaCerta: "O retículo endoplasmático liso é responsável pela síntese de hormônios esteroides",
    opcoes: [
      "O retículo endoplasmático rugoso é responsável pela síntese de hormônios esteroides",
      "O retículo endoplasmático produz enzimas que quebram hormônios esteroides",
      "O retículo endoplasmático armazena hormônios esteroides",
      "O retículo endoplasmático liso é responsável pela síntese de hormônios esteroides"
    ]
  },
  {
    pergunta: "O retículo endoplasmático liso está envolvido na síntese de qual tipo de molécula?",
    alternativaCerta: "Lipídios",
    opcoes: [
      "Proteínas",
      "Ácidos nucleicos",
      "Carboidratos",
      "Lipídios"
    ]
  },
  {
    pergunta: "Qual é a relação entre o retículo endoplasmático e a produção de hormônios?",
    alternativaCerta: "O retículo endoplasmático está envolvido na síntese e secreção de hormônios",
    opcoes: [
      "O retículo endoplasmático regula a entrada de hormônios na célula",
      "O retículo endoplasmático quebra hormônios",
      "O retículo endoplasmático armazena hormônios",
      "O retículo endoplasmático está envolvido na síntese e secreção de hormônios"
    ]
  },
  {
    pergunta: "O que é o retículo endoplasmático expandido (RER) e qual é sua função?",
    alternativaCerta: "Uma forma dilatada do retículo endoplasmático rugoso, envolvida na síntese de proteínas",
    opcoes: [
      "Uma forma de retículo endoplasmático que não possui funções específicas",
      "Uma organela responsável pela produção de energia",
      "Uma forma dilatada do retículo endoplasmático liso, envolvida na detoxificação",
      "Uma forma dilatada do retículo endoplasmático rugoso, envolvida na síntese de proteínas"
    ]
  },
  {
    pergunta: "Qual é a relação entre o retículo endoplasmático e a síntese de glicoproteínas?",
    alternativaCerta: "O retículo endoplasmático adiciona grupos de açúcares às proteínas para formar glicoproteínas",
    opcoes: [
      "O retículo endoplasmático degrada glicoproteínas",
      "O retículo endoplasmático impede a síntese de glicoproteínas",
      "O retículo endoplasmático não está relacionado com a síntese de proteínas",
      "O retículo endoplasmático adiciona grupos de açúcares às proteínas para formar glicoproteínas"
    ]
  },
  {
    pergunta: "O que são as vesículas de transporte e qual é sua função relacionada ao retículo endoplasmático?",
    alternativaCerta: "Pequenas estruturas que transportam proteínas e lipídios entre o retículo endoplasmático, o complexo de Golgi e outras organelas",
    opcoes: [
      "Estruturas que armazenam líquidos",
      "Organelas responsáveis pela síntese de proteínas",
      "Estruturas envolvidas na digestão celular",
      "Pequenas estruturas que transportam proteínas e lipídios entre o retículo endoplasmático, o complexo de Golgi e outras organelas"
    ]
  },
  {
    pergunta: "Como o retículo endoplasmático está envolvido na síntese de fosfolipídios?",
    alternativaCerta: "O retículo endoplasmático liso é responsável pela síntese de fosfolipídios, componentes essenciais das membranas celulares",
    opcoes: [
      "O retículo endoplasmático rugoso é responsável pela síntese de fosfolipídios",
      "O retículo endoplasmático degrada fosfolipídios",
      "O retículo endoplasmático não tem relação com a síntese de fosfolipídios",
      "O retículo endoplasmático liso é responsável pela síntese de fosfolipídios, componentes essenciais das membranas celulares"
    ]
  },
  {
    pergunta: "O que é o retículo endoplasmático não-expandido (NER) e qual é sua função?",
    alternativaCerta: "Uma forma do retículo endoplasmático que não está ativamente envolvida na síntese de proteínas",
    opcoes: [
      "Uma forma de retículo endoplasmático que só existe em células animais",
      "Uma organela que armazena água",
      "Uma forma do retículo endoplasmático que atua na produção de energia",
      "Uma forma do retículo endoplasmático que não está ativamente envolvida na síntese de proteínas"
    ]
  },
  {
    pergunta: "Qual é a importância do retículo endoplasmático na estrutura e função celular?",
    alternativaCerta: "O retículo endoplasmático desempenha um papel crucial na síntese e transporte de proteínas e lipídios, bem como na regulação do cálcio intracelular",
    opcoes: [
      "O retículo endoplasmático não tem relevância para a célula",
      "O retículo endoplasmático está envolvido apenas na produção de energia",
      "O retículo endoplasmático é responsável apenas pela síntese de DNA",
      "O retículo endoplasmático desempenha um papel crucial na síntese e transporte de proteínas e lipídios, bem como na regulação do cálcio intracelular"
    ]
  },
  {
    pergunta: "Quais são os processos nos quais o retículo endoplasmático participa?",
    alternativaCerta: "Síntese de proteínas, síntese de lipídios, metabolismo de carboidratos e regulação do cálcio intracelular",
    opcoes: [
      "Replicação do DNA e produção de energia",
      "Digestão de resíduos celulares e fotossíntese",
      "Produção de hormônios e transporte de gases",
      "Síntese de proteínas, síntese de lipídios, metabolismo de carboidratos e regulação do cálcio intracelular"
    ]
  },
  {
    pergunta: "Qual é a relação entre o retículo endoplasmático liso e a detoxificação?",
    alternativaCerta: "O retículo endoplasmático liso possui enzimas que ajudam a metabolizar substâncias tóxicas, contribuindo para a detoxificação celular",
    opcoes: [
      "O retículo endoplasmático liso armazena substâncias tóxicas",
      "O retículo endoplasmático liso produz substâncias tóxicas",
      "O retículo endoplasmático liso não tem relação com a detoxificação",
      "O retículo endoplasmático liso possui enzimas que ajudam a metabolizar substâncias tóxicas, contribuindo para a detoxificação celular"
    ]
  },
  {
    pergunta: "Quais são algumas das doenças que podem estar relacionadas a problemas no retículo endoplasmático?",
    alternativaCerta: "Doença de Alzheimer, diabetes tipo 2 e fibrose cística",
    opcoes: [
      "Doença cardiovascular, doença de Parkinson e hipertireoidismo",
      "Asma, artrite reumatoide e leucemia",
      "Doença de Alzheimer, diabetes tipo 2 e fibrose cística",
      "Câncer de mama, depressão e osteoporose"
    ]
  },
  {
    pergunta: "Como a formação de pontes dissulfeto nas proteínas é facilitada pelo retículo endoplasmático?",
    alternativaCerta: "O retículo endoplasmático fornece um ambiente oxidante que permite a formação de pontes dissulfeto",
    opcoes: [
      "O retículo endoplasmático quebra as pontes dissulfeto nas proteínas",
      "O retículo endoplasmático não tem relação com a formação de pontes dissulfeto",
      "O retículo endoplasmático neutraliza as pontes dissulfeto nas proteínas",
      "O retículo endoplasmático fornece um ambiente oxidante que permite a formação de pontes dissulfeto"
    ]
  },
  {
    pergunta: "Como o retículo endoplasmático está relacionado com a resistência a medicamentos?",
    alternativaCerta: "O retículo endoplasmático está envolvido no metabolismo de muitos medicamentos, afetando sua eficácia",
    opcoes: [
      "O retículo endoplasmático aumenta a sensibilidade aos medicamentos",
      "O retículo endoplasmático não tem relação com a resistência a medicamentos",
      "O retículo endoplasmático degrada medicamentos",
      "O retículo endoplasmático está envolvido no metabolismo de muitos medicamentos, afetando sua eficácia"
    ]
  },
  {
    pergunta: "Quais células podem ter um retículo endoplasmático mais desenvolvido?",
    alternativaCerta: "Células secretoras, como as células pancreáticas",
    opcoes: [
      "Células nervosas",
      "Células musculares",
      "Células vegetais",
      "Células secretoras, como as células pancreáticas"
    ]
  },
  {
    pergunta: "Como a expansão do retículo endoplasmático rugoso pode estar relacionada ao estresse celular?",
    alternativaCerta: "Em situações de estresse, como falta de nutrientes, o retículo endoplasmático rugoso pode se expandir devido ao acúmulo de proteínas não processadas",
    opcoes: [
      "A expansão do retículo endoplasmático rugoso não está relacionada ao estresse celular",
      "O estresse celular sempre leva à degradação do retículo endoplasmático",
      "A expansão do retículo endoplasmático rugoso ocorre apenas em células vegetais",
      "Em situações de estresse, como falta de nutrientes, o retículo endoplasmático rugoso pode se expandir devido ao acúmulo de proteínas não processadas"
    ]
  },
  {
    pergunta: "Qual é a relação entre o retículo endoplasmático e a regulação da glicose no sangue?",
    alternativaCerta: "O retículo endoplasmático está envolvido na síntese e liberação de insulina pelas células pancreáticas",
    opcoes: [
      "O retículo endoplasmático armazena glicose",
      "O retículo endoplasmático degrada a glicose",
      "O retículo endoplasmático não tem relação com a regulação da glicose",
      "O retículo endoplasmático está envolvido na síntese e liberação de insulina pelas células pancreáticas"
    ]
  },
  {
    pergunta: "Quais são as implicações da disfunção do retículo endoplasmático na saúde humana?",
    alternativaCerta: "Disfunções do retículo endoplasmático estão associadas a várias doenças, como diabetes, doenças neurodegenerativas e distúrbios do metabolismo de lipídios",
    opcoes: [
      "Disfunções do retículo endoplasmático não têm impacto na saúde humana",
      "Disfunções do retículo endoplasmático estão relacionadas apenas a doenças infecciosas",
      "Disfunções do retículo endoplasmático causam apenas problemas de pele",
      "Disfunções do retículo endoplasmático estão associadas a várias doenças, como diabetes, doenças neurodegenerativas e distúrbios do metabolismo de lipídios"
    ]
  },
  {
    pergunta: "Como o retículo endoplasmático contribui para a homeostase do cálcio?",
    alternativaCerta: "O retículo endoplasmático armazena cálcio e libera íons de cálcio quando necessário para processos celulares",
    opcoes: [
      "O retículo endoplasmático produz cálcio",
      "O retículo endoplasmático regula a temperatura do cálcio",
      "O retículo endoplasmático não está relacionado à homeostase do cálcio",
      "O retículo endoplasmático armazena cálcio e libera íons de cálcio quando necessário para processos celulares"
    ]
  },
  {
    pergunta: "Qual é o papel do retículo endoplasmático no armazenamento de íons de cálcio?",
    alternativaCerta: "O retículo endoplasmático liso armazena íons de cálcio e libera-os quando necessário para ativação de processos celulares",
    opcoes: [
      "O retículo endoplasmático produz íons de cálcio",
      "O retículo endoplasmático regula a entrada de íons de cálcio na célula",
      "O retículo endoplasmático não está envolvido no armazenamento de íons de cálcio",
      "O retículo endoplasmático liso armazena íons de cálcio e libera-os quando necessário para ativação de processos celulares"
    ]
  },
  {
    pergunta: "Quais são as duas regiões distintas do retículo endoplasmático?",
    alternativaCerta: "Retículo endoplasmático rugoso (RER) e retículo endoplasmático liso (REL)",
    opcoes: [
      "Retículo endoplasmático áspero (REA) e retículo endoplasmático suave (RES)",
      "Retículo endoplasmático texturizado (RET) e retículo endoplasmático simples (RES)",
      "Retículo endoplasmático duro (RED) e retículo endoplasmático macio (REM)",
      "Retículo endoplasmático rugoso (RER) e retículo endoplasmático liso (REL)"
    ]
  },
  {
    pergunta: "Como o retículo endoplasmático participa na síntese de proteínas?",
    alternativaCerta: "O retículo endoplasmático rugoso (RER) está envolvido na síntese, modificação e dobramento de proteínas",
    opcoes: [
      "O retículo endoplasmático liso (REL) está envolvido na síntese de proteínas",
      "O retículo endoplasmático não está relacionado com a síntese de proteínas",
      "O retículo endoplasmático quebra proteínas",
      "O retículo endoplasmático rugoso (RER) está envolvido na síntese, modificação e dobramento de proteínas"
    ]
  },
  {
    pergunta: "Qual é a função do retículo endoplasmático liso (REL) na detoxificação?",
    alternativaCerta: "O REL possui enzimas que ajudam a metabolizar substâncias tóxicas, contribuindo para a detoxificação celular",
    opcoes: [
      "O REL armazena substâncias tóxicas",
      "O REL produz substâncias tóxicas",
      "O REL não tem relação com a detoxificação",
      "O REL possui enzimas que ajudam a metabolizar substâncias tóxicas, contribuindo para a detoxificação celular"
    ]
  },
  {
    pergunta: "Qual é a relação entre o retículo endoplasmático e a síntese de lipídios?",
    alternativaCerta: "O retículo endoplasmático liso (REL) está envolvido na síntese de lipídios",
    opcoes: [
      "O retículo endoplasmático rugoso (RER) está envolvido na síntese de lipídios",
      "O retículo endoplasmático não tem relação com a síntese de lipídios",
      "O retículo endoplasmático quebra lipídios",
      "O retículo endoplasmático liso (REL) está envolvido na síntese de lipídios"
    ]
  },
  {
    pergunta: "Como o retículo endoplasmático está relacionado com a produção de hormônios?",
    alternativaCerta: "O retículo endoplasmático está envolvido na síntese, modificação e transporte de hormônios",
    opcoes: [
      "O retículo endoplasmático degrada hormônios",
      "O retículo endoplasmático não está relacionado com a produção de hormônios",
      "O retículo endoplasmático armazena hormônios",
      "O retículo endoplasmático está envolvido na síntese, modificação e transporte de hormônios"
    ]
  },
  {
    pergunta: "Qual é a importância do retículo endoplasmático para a estrutura e função das células secretoras?",
    alternativaCerta: "O retículo endoplasmático rugoso (RER) está envolvido na síntese de proteínas secretoras, como insulina e enzimas digestivas",
    opcoes: [
      "O retículo endoplasmático liso (REL) é responsável pela síntese de proteínas secretoras",
      "O retículo endoplasmático não tem relação com as células secretoras",
      "O retículo endoplasmático degrada proteínas secretoras",
      "O retículo endoplasmático rugoso (RER) está envolvido na síntese de proteínas secretoras, como insulina e enzimas digestivas"
    ]
  },
  {
    pergunta: "Como o retículo endoplasmático participa na síntese de fosfolipídios?",
    alternativaCerta: "O retículo endoplasmático liso (REL) é responsável pela síntese de fosfolipídios, componentes essenciais das membranas celulares",
    opcoes: [
      "O retículo endoplasmático rugoso (RER) é responsável pela síntese de fosfolipídios",
      "O retículo endoplasmático não tem relação com a síntese de fosfolipídios",
      "O retículo endoplasmático quebra fosfolipídios",
      "O retículo endoplasmático liso (REL) é responsável pela síntese de fosfolipídios, componentes essenciais das membranas celulares"
    ]
  },
  {
    pergunta: "Quais são as funções do retículo endoplasmático rugoso (RER) na síntese de proteínas?",
    alternativaCerta: "O RER sintetiza proteínas destinadas à exportação, inserção na membrana celular e lisossomos",
    opcoes: [
      "O RER sintetiza apenas proteínas destinadas à exportação",
      "O RER não está envolvido na síntese de proteínas",
      "O RER sintetiza apenas proteínas destinadas à degradação",
      "O RER sintetiza proteínas destinadas à exportação, inserção na membrana celular e lisossomos"
    ]
  },
  {
    pergunta: "Como o retículo endoplasmático liso (REL) contribui para o metabolismo de carboidratos?",
    alternativaCerta: "O REL participa do metabolismo de glicose e armazena cálcio utilizado na regulação da glicose",
    opcoes: [
      "O REL não está relacionado com o metabolismo de carboidratos",
      "O REL quebra carboidratos",
      "O REL produz glicose",
      "O REL participa do metabolismo de glicose e armazena cálcio utilizado na regulação da glicose"
    ]
  },
  {
    pergunta: "Quais são as funções do retículo endoplasmático liso (REL) na síntese de lipídios?",
    alternativaCerta: "O REL sintetiza lipídios, incluindo fosfolipídios e esteroides",
    opcoes: [
      "O REL degrada lipídios",
      "O REL não tem relação com a síntese de lipídios",
      "O REL sintetiza apenas triglicerídeos",
      "O REL sintetiza lipídios, incluindo fosfolipídios e esteroides"
    ]
  },
  {
    pergunta: "Qual é a relação entre o retículo endoplasmático liso (REL) e a produção de lipoproteínas?",
    alternativaCerta: "O REL está envolvido na produção de lipoproteínas, que transportam lipídios pelo corpo",
    opcoes: [
      "O REL degrada lipoproteínas",
      "O REL não está relacionado com a produção de lipoproteínas",
      "O REL armazena lipoproteínas",
      "O REL está envolvido na produção de lipoproteínas, que transportam lipídios pelo corpo"
    ]
  },
  {
    pergunta: "Como o retículo endoplasmático está envolvido na regulação do metabolismo de cálcio?",
    alternativaCerta: "O retículo endoplasmático liso (REL) armazena cálcio e libera íons de cálcio quando necessário para regulação metabólica",
    opcoes: [
      "O retículo endoplasmático degrada o cálcio",
      "O retículo endoplasmático não tem relação com a regulação do cálcio",
      "O retículo endoplasmático liso (REL) regula a entrada de cálcio na célula",
      "O retículo endoplasmático liso (REL) armazena cálcio e libera íons de cálcio quando necessário para regulação metabólica"
    ]
  },
  {
    pergunta: "Qual é a função das riboforinas no retículo endoplasmático?",
    alternativaCerta: "As riboforinas auxiliam na regulação do tráfego vesicular entre o retículo endoplasmático e o complexo de Golgi",
    opcoes: [
      "As riboforinas participam na síntese de proteínas",
      "As riboforinas quebram proteínas",
      "As riboforinas estão relacionadas com a detoxificação",
      "As riboforinas auxiliam na regulação do tráfego vesicular entre o retículo endoplasmático e o complexo de Golgi"
    ]
  },
  {
    pergunta: "O retículo endoplasmático está presente apenas em células animais?",
    alternativaCerta: "Não, ele também está presente em células vegetais",
    opcoes: [
      "Sim, está presente apenas em células animais",
      "Não, ele também está presente em células vegetais",
      "Sim, mas apenas em células vegetais",
      "Não, ele está presente apenas em células bacterianas"
    ]
  },
  {
    pergunta: "Como a expansão do retículo endoplasmático rugoso pode estar relacionada ao estresse celular?",
    alternativaCerta: "Em situações de estresse, como falta de nutrientes, o retículo endoplasmático rugoso pode se expandir devido ao acúmulo de proteínas não processadas",
    opcoes: [
      "A expansão do retículo endoplasmático rugoso não está relacionada ao estresse celular",
      "O estresse celular sempre leva à degradação do retículo endoplasmático",
      "A expansão do retículo endoplasmático rugoso ocorre apenas em células vegetais",
      "Em situações de estresse, como falta de nutrientes, o retículo endoplasmático rugoso pode se expandir devido ao acúmulo de proteínas não processadas"
    ]
  },
  {
    pergunta: "Como o retículo endoplasmático liso (REL) está envolvido na síntese de esteroides?",
    alternativaCerta: "O REL é responsável pela síntese de esteroides, incluindo hormônios sexuais e corticosteroides",
    opcoes: [
      "O REL degrada esteroides",
      "O REL não tem relação com a síntese de esteroides",
      "O REL regula a entrada de esteroides na célula",
      "O REL é responsável pela síntese de esteroides, incluindo hormônios sexuais e corticosteroides"
    ]
  },
  {
    pergunta: "Qual é a importância do retículo endoplasmático para a síntese de proteínas destinadas à membrana plasmática?",
    alternativaCerta: "O retículo endoplasmático rugoso (RER) está envolvido na síntese de proteínas que serão inseridas na membrana plasmática",
    opcoes: [
      "O retículo endoplasmático liso (REL) está envolvido na síntese de proteínas de membrana",
      "O retículo endoplasmático não tem relação com a membrana plasmática",
      "O retículo endoplasmático quebra proteínas de membrana",
      "O retículo endoplasmático rugoso (RER) está envolvido na síntese de proteínas que serão inseridas na membrana plasmática"
    ]
  },
  {
    pergunta: "O retículo endoplasmático está envolvido na síntese de todos os tipos de proteínas celulares?",
    alternativaCerta: "Não, o retículo endoplasmático está envolvido principalmente na síntese de proteínas destinadas à exportação, membrana e organelas",
    opcoes: [
      "Sim, o retículo endoplasmático sintetiza todos os tipos de proteínas celulares",
      "Não, o retículo endoplasmático está envolvido apenas na síntese de proteínas estruturais",
      "Não, o retículo endoplasmático está envolvido apenas na síntese de proteínas enzimáticas",
      "Não, o retículo endoplasmático está envolvido principalmente na síntese de proteínas destinadas à exportação, membrana e organelas"
    ]
  },
  {
    pergunta: "Como o retículo endoplasmático liso (REL) está relacionado com a síntese de glicogênio?",
    alternativaCerta: "O REL está envolvido na síntese de glicogênio em células hepáticas e musculares",
    opcoes: [
      "O REL degrada glicogênio",
      "O REL não tem relação com a síntese de glicogênio",
      "O REL armazena glicogênio",
      "O REL está envolvido na síntese de glicogênio em células hepáticas e musculares"
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
