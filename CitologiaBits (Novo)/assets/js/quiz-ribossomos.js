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
    pergunta: "Qual é a função principal dos ribossomos na célula?",
    alternativaCerta: "Síntese de proteínas",
    opcoes: [
      "Produção de energia",
      "Síntese de lipídios",
      "Síntese de proteínas",
      "Digestão intracelular"
    ]
  },
  {
    pergunta: "Onde os ribossomos são encontrados na célula?",
    alternativaCerta: "Livres no citoplasma e aderidos ao retículo endoplasmático",
    opcoes: [
      "No núcleo",
      "Nos lisossomos",
      "No cloroplasto",
      "Livres no citoplasma e aderidos ao retículo endoplasmático"
    ]
  },
  {
    pergunta: "Qual é a composição dos ribossomos?",
    alternativaCerta: "RNA ribossômico e proteínas",
    opcoes: [
      "DNA e lipídios",
      "RNA ribossômico e proteínas",
      "Clorofila e enzimas",
      "Carboidratos e íons"
    ]
  },
  {
    pergunta: "Os ribossomos são organelas presentes apenas em células eucarióticas?",
    alternativaCerta: "Não, eles também estão presentes em células procariontes",
    opcoes: [
      "Sim, estão presentes apenas em células eucarióticas",
      "Não, eles também estão presentes em células procariontes",
      "Sim, mas apenas em células vegetais",
      "Não, mas apenas em células vegetais"
    ]
  },
  {
    pergunta: "Quais são os dois subunits que compõem os ribossomos?",
    alternativaCerta: "Subunidade 40S e Subunidade 60S",
    opcoes: [
      "Subunidade 30S e Subunidade 50S",
      "Subunidade 40S e Subunidade 60S",
      "Subunidade 20S e Subunidade 70S",
      "Subunidade 35S e Subunidade 55S"
    ]
  },
  {
    pergunta: "Qual é o local de síntese de proteínas nos ribossomos?",
    alternativaCerta: "Os ribossomos sintetizam proteínas no seu sítio A",
    opcoes: [
      "Os ribossomos sintetizam proteínas no seu sítio P",
      "Os ribossomos sintetizam proteínas no seu sítio E",
      "Os ribossomos sintetizam proteínas no seu sítio A",
      "Os ribossomos não estão envolvidos na síntese de proteínas"
    ]
  },
  {
    pergunta: "Os ribossomos estão presentes apenas em células animais?",
    alternativaCerta: "Não, eles também estão presentes em células vegetais",
    opcoes: [
      "Sim, estão presentes apenas em células animais",
      "Não, eles também estão presentes em células vegetais",
      "Sim, mas apenas em células vegetais",
      "Não, mas apenas em células bacterianas"
    ]
  },
  {
    pergunta: "Qual é o papel dos ribossomos no processo de tradução genética?",
    alternativaCerta: "Ler o RNA mensageiro (mRNA) e sintetizar proteínas",
    opcoes: [
      "Copiar o DNA",
      "Realizar a respiração celular",
      "Realizar a fotossíntese",
      "Ler o RNA mensageiro (mRNA) e sintetizar proteínas"
    ]
  },
  {
    pergunta: "Os ribossomos são considerados organelas membranosas?",
    alternativaCerta: "Não, eles não possuem membranas",
    opcoe: [
      "Sim, eles possuem membranas",
      "Não, eles não possuem membranas",
      "Sim, mas apenas em células animais",
      "Não, mas apenas em células vegetais"
    ]
  },
  {
    pergunta: "Qual é o papel da subunidade 40S dos ribossomos?",
    alternativaCerta: "Ela reconhece o códon de iniciação do RNA mensageiro (mRNA)",
    opcoes: [
      "Ela realiza a síntese de proteínas",
      "Ela reconhece o códon de iniciação do RNA mensageiro (mRNA)",
      "Ela degrada proteínas",
      "Ela contém o RNA ribossômico"
    ]
  },
  {
    pergunta: "Quando os ribossomos estão livres no citoplasma, o que eles sintetizam?",
    alternativaCerta: "Proteínas que são utilizadas dentro da célula",
    opcoes: [
      "Lipídios",
      "Proteínas que são exportadas para fora da célula",
      "Proteínas que são utilizadas dentro da célula",
      "Ácidos nucleicos"
    ]
  },
  {
    pergunta: "Quando os ribossomos estão aderidos ao retículo endoplasmático, o que eles sintetizam?",
    alternativaCerta: "Proteínas que são exportadas para fora da célula ou inseridas na membrana plasmática",
    opcoes: [
      "Lipídios",
      "Proteínas que são utilizadas dentro da célula",
      "Proteínas que são exportadas para fora da célula ou inseridas na membrana plasmática",
      "Ácidos nucleicos"
    ]
  },
  {
    pergunta: "Quais organelas possuem ribossomos aderidos à sua membrana?",
    alternativaCerta: "Retículo endoplasmático rugoso e mitocôndrias",
    opcoes: [
      "Complexo de Golgi e lisossomos",
      "Núcleo e vacúolos",
      "Retículo endoplasmático rugoso e mitocôndrias",
      "Cloroplastos e peroxissomos"
    ]
  },
  {
    pergunta: "Quais tipos de RNA compõem os ribossomos?",
    alternativaCerta: "RNA ribossômico (rRNA) e RNA transportador (tRNA)",
    opcoes: [
      "RNA mensageiro (mRNA) e RNA ribossômico (rRNA)",
      "RNA ribossômico (rRNA) e RNA transportador (tRNA)",
      "RNA transportador (tRNA) e RNA interferente (siRNA)",
      "RNA mensageiro (mRNA) e RNA interferente (siRNA)"
    ]
  },
  {
    pergunta: "Qual é a principal função do RNA ribossômico (rRNA) nos ribossomos?",
    alternativaCerta: "Constituir a estrutura do ribossomo e catalisar a formação das ligações peptídicas",
    opcoes: [
      "Realizar a tradução do código genético",
      "Constituir a estrutura do ribossomo e catalisar a formação das ligações peptídicas",
      "Transferir aminoácidos para a síntese de proteínas",
      "Catalisar a replicação do DNA"
    ]
  },
  {
    pergunta: "Os ribossomos estão presentes em todas as células?",
    alternativaCerta: "Sim, estão presentes em todas as células",
    opcoes: [
      "Sim, estão presentes em todas as células",
      "Não, estão presentes apenas em células eucarióticas",
      "Não, estão presentes apenas em células vegetais",
      "Não, estão presentes apenas em células bacterianas"
    ]
  },
  {
    pergunta: "Qual é a diferença entre ribossomos livres no citoplasma e ribossomos aderidos ao retículo endoplasmático?",
    alternativaCerta: "Ribossomos livres sintetizam proteínas para uso interno da célula, enquanto os ribossomos aderidos ao retículo endoplasmático sintetizam proteínas para exportação ou inserção na membrana",
    opcoes: [
      "Ribossomos livres sintetizam proteínas para exportação ou inserção na membrana, enquanto os ribossomos aderidos ao retículo endoplasmático sintetizam proteínas para uso interno da célula",
      "Ribossomos livres realizam a replicação do DNA, enquanto os ribossomos aderidos ao retículo endoplasmático realizam a transcrição do RNA",
      "Ribossomos livres sintetizam lipídios, enquanto os ribossomos aderidos ao retículo endoplasmático sintetizam proteínas para uso interno da célula",
      "Ribossomos livres sintetizam ácidos nucleicos, enquanto os ribossomos aderidos ao retículo endoplasmático sintetizam proteínas para exportação ou inserção na membrana"
    ]
  },
  {
    pergunta: "Os ribossomos estão envolvidos na síntese de todos os tipos de proteínas celulares?",
    alternativaCerta: "Sim, os ribossomos sintetizam proteínas para funções estruturais, enzimáticas e reguladoras da célula",
    opcoes: [
      "Sim, os ribossomos sintetizam apenas proteínas estruturais",
      "Não, os ribossomos estão envolvidos apenas na síntese de proteínas enzimáticas",
      "Não, os ribossomos estão envolvidos apenas na síntese de proteínas reguladoras",
      "Sim, os ribossomos sintetizam proteínas para funções estruturais, enzimáticas e reguladoras da célula"
    ]
  },
  {
    pergunta: "Quando os ribossomos estão aderidos ao retículo endoplasmático, as proteínas que eles sintetizam podem ser destinadas a qual destino?",
    alternativaCerta: "Exportação para fora da célula ou inserção na membrana plasmática",
    opcoes: [
      "Uso interno da célula",
      "Degradação nos lisossomos",
      "Exportação para fora da célula ou inserção na membrana plasmática",
      "Armazenamento nos cloroplastos"
    ]
  },
  {
    pergunta: "Qual é a estrutura responsável por catalisar a formação de ligações peptídicas durante a síntese de proteínas?",
    alternativaCerta: "RNA ribossômico (rRNA)",
    opcoes: [
      "DNA",
      "Proteínas",
      "RNA mensageiro (mRNA)",
      "RNA ribossômico (rRNA)"
    ]
  },
  {
    pergunta: "Os ribossomos estão presentes em células animal, vegetal e bacteriana?",
    alternativaCerta: "Sim, estão presentes em todas essas células",
    opcoes: [
      "Não, estão presentes apenas em células animais e vegetais",
      "Sim, estão presentes em todas essas células",
      "Não, estão presentes apenas em células eucarióticas",
      "Não, estão presentes apenas em células vegetais e bacterianas"
    ]
  },
  {
    pergunta: "Quais são os locais de ocorrência dos ribossomos aderidos ao retículo endoplasmático?",
    alternativaCerta: "Região do retículo endoplasmático rugoso",
    opcoes: [
      "Núcleo da célula",
      "Mitocôndrias",
      "Cloroplastos",
      "Região do retículo endoplasmático rugoso"
    ]
  },
  {
    pergunta: "Qual é a função da subunidade 60S dos ribossomos?",
    alternativaCerta: "Ela catalisa a formação de ligações peptídicas durante a síntese de proteínas",
    opcoes: [
      "Ela realiza a síntese de proteínas",
      "Ela catalisa a formação de ligações peptídicas durante a síntese de proteínas",
      "Ela reconhece o códon de iniciação do RNA mensageiro (mRNA)",
      "Ela contém o RNA ribossômico (rRNA)"
    ]
  },
  {
    pergunta: "Qual é a importância dos ribossomos para a célula?",
    alternativaCerta: "Os ribossomos são essenciais para a síntese de proteínas, que são fundamentais para a estrutura e função celular",
    opcoes: [
      "Os ribossomos são responsáveis pela produção de energia na célula",
      "Os ribossomos estão envolvidos na replicação do DNA",
      "Os ribossomos atuam na síntese de lipídios",
      "Os ribossomos são essenciais para a síntese de proteínas, que são fundamentais para a estrutura e função celular"
    ]
  },
  {
    pergunta: "Qual é a função do RNA transportador (tRNA) nos ribossomos?",
    alternativaCerta: "Transportar aminoácidos para o ribossomo durante a síntese de proteínas",
    opcoes: [
      "Catalisar a formação de ligações peptídicas",
      "Codificar a informação genética",
      "Constituir a estrutura do ribossomo",
      "Transportar aminoácidos para o ribossomo durante a síntese de proteínas"
    ]
  },
  {
    pergunta: "Como os ribossomos livres no citoplasma estão envolvidos na síntese de proteínas?",
    alternativaCerta: "Eles sintetizam proteínas que são usadas dentro da própria célula",
    opcoes: [
      "Eles sintetizam proteínas que são exportadas para fora da célula",
      "Eles sintetizam proteínas que são usadas dentro da própria célula",
      "Eles sintetizam proteínas que são inseridas na membrana plasmática",
      "Eles sintetizam proteínas que são armazenadas nos lisossomos"
    ]
  },
  {
    pergunta: "O que acontece no sítio P dos ribossomos durante a síntese de proteínas?",
    alternativaCerta: "É onde ocorre a ligação peptídica entre os aminoácidos",
    opcoes: [
      "É onde ocorre a leitura do códon de iniciação",
      "É onde ocorre a síntese do RNA ribossômico (rRNA)",
      "É onde ocorre a quebra de ligações peptídicas",
      "É onde ocorre a ligação peptídica entre os aminoácidos"
    ]
  },
  {
    pergunta: "Qual é a relação entre o DNA, o RNA mensageiro (mRNA) e a síntese de proteínas?",
    alternativaCerta: "O DNA serve como molde para a síntese do mRNA, que por sua vez é lido pelos ribossomos para produzir proteínas",
    opcoes: [
      "O DNA é diretamente convertido em proteínas pelos ribossomos",
      "O mRNA é convertido em DNA durante a síntese de proteínas",
      "O DNA é sintetizado a partir do mRNA durante a tradução",
      "O DNA serve como molde para a síntese do mRNA, que por sua vez é lido pelos ribossomos para produzir proteínas"
    ]
  },
  {
    pergunta: "Qual é a importância da precisão na sequência de nucleotídeos do RNA mensageiro (mRNA) para a síntese de proteínas?",
    alternativaCerta: "A sequência correta de nucleotídeos no mRNA determina a ordem dos aminoácidos na proteína a ser sintetizada",
    opcoes: [
      "A sequência de nucleotídeos no mRNA não afeta a síntese de proteínas",
      "A sequência de nucleotídeos no mRNA influencia apenas a replicação do DNA",
      "A sequência correta de nucleotídeos no mRNA regula a transcrição",
      "A sequência correta de nucleotídeos no mRNA determina a ordem dos aminoácidos na proteína a ser sintetizada"
    ]
  },
  {
    pergunta: "Qual é o processo pelo qual a informação contida no RNA mensageiro (mRNA) é convertida em uma sequência de aminoácidos na síntese de proteínas?",
    alternativaCerta: "Tradução",
    opcoes: [
      "Transcrição",
      "Replicação",
      "Inversão",
      "Tradução"
    ]
  },
  {
    pergunta: "Qual é a relação entre os ribossomos e a síntese de proteínas?",
    alternativaCerta: "Os ribossomos são os principais responsáveis pela síntese de proteínas nas células",
    opcoes: [
      "Os ribossomos controlam a divisão celular",
      "Os ribossomos produzem energia para a célula",
      "Os ribossomos são responsáveis pela replicação do DNA",
      "Os ribossomos são os principais responsáveis pela síntese de proteínas nas células"
    ]
  },
  {
    pergunta: "Quais são os passos principais da síntese de proteínas nos ribossomos?",
    alternativaCerta: "Iniciação, alongamento e terminação",
    opcoes: [
      "Transcrição, replicação e tradução",
      "Duplicação, modificação e montagem",
      "Divisão, movimentação e fixação",
      "Iniciação, alongamento e terminação"
    ]
  },
  {
    pergunta: "Durante qual fase da síntese de proteínas os ribossomos se movem ao longo do mRNA, adicionando aminoácidos à cadeia em crescimento?",
    alternativaCerta: "Fase de alongamento",
    opcoes: [
      "Fase de replicação",
      "Fase de transcrição",
      "Fase de iniciação",
      "Fase de alongamento"
    ]
  },
  {
    pergunta: "Além dos ribossomos citoplasmáticos, onde mais os ribossomos podem ser encontrados nas células eucarióticas?",
    alternativaCerta: "Na matriz mitocondrial",
    opcoes: [
      "No núcleo",
      "Nos lisossomos",
      "No cloroplasto",
      "Na matriz mitocondrial"
    ]
  },
  {
    pergunta: "Qual é o papel do códon de iniciação durante a síntese de proteínas?",
    alternativaCerta: "Determinar onde a tradução deve começar no RNA mensageiro (mRNA)",
    opcoes: [
      "Determinar onde a tradução deve terminar no RNA mensageiro (mRNA)",
      "Catalisar a formação de ligações peptídicas",
      "Transportar aminoácidos para o ribossomo",
      "Determinar o tamanho da proteína a ser sintetizada"
    ]
  },
  {
    pergunta: "Como os ribossomos conseguem sintetizar proteínas com precisão?",
    alternativaCerta: "Eles leem a sequência de nucleotídeos no RNA mensageiro (mRNA) de três em três, correspondendo a um códon de aminoácido",
    opcoes: [
      "Eles seguem uma sequência aleatória de nucleotídeos no mRNA",
      "Eles sintetizam aminoácidos sem a necessidade de um molde de RNA",
      "Eles só conseguem sintetizar proteínas simples e não estruturadas",
      "Eles leem a sequência de nucleotídeos no RNA mensageiro (mRNA) de três em três, correspondendo a um códon de aminoácido"
    ]
  },
  {
    pergunta: "O que acontece durante a fase de terminação da síntese de proteínas?",
    alternativaCerta: "O ribossomo encontra um códon de terminação, a proteína é liberada e o ribossomo se dissocia do mRNA",
    opcoes: [
      "O ribossomo se move ao longo do mRNA, adicionando aminoácidos à cadeia em crescimento",
      "O DNA é convertido em RNA mensageiro (mRNA)",
      "O ribossomo reconhece o códon de iniciação e começa a síntese proteica",
      "O ribossomo encontra um códon de terminação, a proteína é liberada e o ribossomo se dissocia do mRNA"
    ]
  },
  {
    pergunta: "O que pode ocorrer se houver uma mutação em um códon do RNA mensageiro (mRNA) durante a síntese de proteínas?",
    alternativaCerta: "A sequência de aminoácidos na proteína resultante pode ser alterada",
    opcoes: [
      "O ribossomo não será capaz de se ligar ao mRNA",
      "A replicação do DNA será afetada",
      "O ribossomo não será capaz de iniciar a síntese proteica",
      "A sequência de aminoácidos na proteína resultante pode ser alterada"
    ]
  },
  {
    pergunta: "Qual é a importância da síntese de proteínas para a célula?",
    alternativaCerta: "As proteínas são essenciais para a estrutura, função e regulação da célula",
    opcoes: [
      "A síntese de proteínas é responsável apenas pela replicação do DNA",
      "As proteínas são utilizadas apenas para armazenar energia",
      "A síntese de proteínas é importante apenas para a divisão celular",
      "As proteínas são essenciais para a estrutura, função e regulação da célula"
    ]
  },
  {
    pergunta: "Por que os ribossomos são considerados alvos de muitos antibióticos?",
    alternativaCerta: "Porque os ribossomos de células procarióticas diferem dos de células eucarióticas, permitindo que os antibióticos atuem seletivamente nas células bacterianas",
    opcoes: [
      "Porque os ribossomos são organelas membranosas",
      "Porque os ribossomos estão envolvidos na replicação do DNA",
      "Porque os ribossomos são responsáveis pela produção de energia",
      "Porque os ribossomos de células procarióticas diferem dos de células eucarióticas, permitindo que os antibióticos atuem seletivamente nas células bacterianas"
    ]
  },
  {
    pergunta: "Quais são os três principais tipos de RNA envolvidos na síntese de proteínas e qual é o papel de cada um?",
    alternativaCerta: "RNA mensageiro (mRNA), RNA ribossômico (rRNA) e RNA transportador (tRNA); mRNA carrega a informação genética, rRNA constitui o ribossomo e tRNA transporta aminoácidos",
    opcoes: [
      "RNA mensageiro (mRNA), RNA ribossômico (rRNA) e RNA transferidor (trRNA); mRNA carrega a informação genética, rRNA sintetiza proteínas e trRNA transporta aminoácidos",
      "RNA codificador (cRNA), RNA ribossômico (rRNA) e RNA transportador (tRNA); cRNA carrega a informação genética, rRNA constitui o ribossomo e tRNA transporta aminoácidos",
      "RNA mensageiro (mRNA), RNA ribossômico (rRNA) e RNA transportador (tRNA); mRNA sintetiza proteínas, rRNA carrega a informação genética e tRNA constitui o ribossomo",
      "RNA mensageiro (mRNA), RNA ribossômico (rRNA) e RNA transportador (tRNA); mRNA carrega a informação genética, rRNA constitui o ribossomo e tRNA transporta aminoácidos"
    ]
  },
  {
    pergunta: "Além da síntese de proteínas, os ribossomos estão envolvidos em quais outros processos celulares?",
    alternativaCerta: "Os ribossomos também estão envolvidos na regulação da expressão gênica e no controle de processos celulares",
    opcoes: [
      "Os ribossomos estão envolvidos apenas na replicação do DNA",
      "Os ribossomos estão envolvidos apenas na produção de energia",
      "Os ribossomos estão envolvidos apenas na divisão celular",
      "Os ribossomos também estão envolvidos na regulação da expressão gênica e no controle de processos celulares"
    ]
  },
  {
    pergunta: "Quais são os fatores de iniciação envolvidos no processo de síntese de proteínas?",
    alternativaCerta: "Fator de iniciação e IF-1, IF-2 e IF-3",
    opcoes: [
      "Fator de iniciação e IF-1, IF-2 e IF-3",
      "Fator de alongamento e EF-1, EF-2 e EF-3",
      "Fator de terminação e TF-1, TF-2 e TF-3",
      "Fator de ligação e LF-1, LF-2 e LF-3"
    ]
  },
  {
    pergunta: "Quais são os fatores de alongamento envolvidos no processo de síntese de proteínas?",
    alternativaCerta: "Fator de alongamento e EF-Tu, EF-Ts e EF-G",
    opcoes: [
      "Fator de alongamento e EF-Tu, EF-Ts e EF-G",
      "Fator de iniciação e IF-1, IF-2 e IF-3",
      "Fator de terminação e TF-1, TF-2 e TF-3",
      "Fator de ligação e LF-1, LF-2 e LF-3"
    ]
  },
  {
    pergunta: "Quais são os fatores de terminação envolvidos no processo de síntese de proteínas?",
    alternativaCerta: "Fator de terminação e RF-1, RF-2 e RF-3",
    opcoes: [
      "Fator de iniciação e IF-1, IF-2 e IF-3",
      "Fator de alongamento e EF-Tu, EF-Ts e EF-G",
      "Fator de terminação e RF-1, RF-2 e RF-3",
      "Fator de ligação e LF-1, LF-2 e LF-3"
    ]
  },
  {
    pergunta: "Qual é o papel do fator de iniciação e IF-1 durante a síntese de proteínas?",
    alternativaCerta: "Eles preparam o ribossomo e o mRNA para a ligação do tRNA de iniciação",
    opcoes: [
      "Eles catalisam a formação das ligações peptídicas",
      "Eles transportam aminoácidos para o ribossomo",
      "Eles reconhecem os códons de iniciação no mRNA",
      "Eles preparam o ribossomo e o mRNA para a ligação do tRNA de iniciação"
    ]
  },
  {
    pergunta: "Qual é o papel do fator de iniciação e IF-2 durante a síntese de proteínas?",
    alternativaCerta: "Ele ajuda a carregar o tRNA de iniciação com um aminoácido e GTP",
    opcoes: [
      "Ele catalisa a formação das ligações peptídicas",
      "Ele reconhece os códons de iniciação no mRNA",
      "Ele auxilia na transcrição do mRNA",
      "Ele ajuda a carregar o tRNA de iniciação com um aminoácido e GTP"
    ]
  },
  {
    pergunta: "Qual é o papel do fator de iniciação e IF-3 durante a síntese de proteínas?",
    alternativaCerta: "Ele impede a subunidade 30S de se ligar à subunidade 50S prematuramente",
    opcoes: [
      "Ele catalisa a formação das ligações peptídicas",
      "Ele transporta aminoácidos para o ribossomo",
      "Ele ajuda a carregar o tRNA de iniciação com um aminoácido e GTP",
      "Ele impede a subunidade 30S de se ligar à subunidade 50S prematuramente"
    ]
  },
  {
    pergunta: "O que é a fase de elongação na síntese de proteínas?",
    alternativaCerta: "É quando aminoácidos são adicionados à cadeia polipeptídica em crescimento",
    opcoes: [
      "É quando o mRNA é transcrito em RNA ribossômico (rRNA)",
      "É quando os ribossomos se dissociam do mRNA",
      "É quando os ribossomos reconhecem o códon de iniciação",
      "É quando aminoácidos são adicionados à cadeia polipeptídica em crescimento"
    ]
  },
  {
    pergunta: "O que é um peptidil transferase?",
    alternativaCerta: "Uma enzima do ribossomo que catalisa a formação de ligações peptídicas entre os aminoácidos",
    opcoes: [
      "Um tipo de RNA que codifica a informação genética",
      "Um fator de alongamento que auxilia o tRNA",
      "Uma proteína de membrana que transporta aminoácidos",
      "Uma enzima do ribossomo que catalisa a formação de ligações peptídicas entre os aminoácidos"
    ]
  },
  {
    pergunta: "O que é o fator de alongamento e EF-Tu?",
    alternativaCerta: "Um fator de alongamento que auxilia o tRNA a se ligar ao ribossomo",
    opcoes: [
      "Uma enzima do ribossomo que catalisa a formação de ligações peptídicas",
      "Um fator de iniciação que prepara o ribossomo",
      "Um tipo de RNA que codifica a informação genética",
      "Um fator de alongamento que auxilia o tRNA a se ligar ao ribossomo"
    ]
  },
  {
    pergunta: "Qual é o papel do fator de alongamento e EF-Ts?",
    alternativaCerta: "Ele regenera o fator de alongamento e EF-Tu para serem reutilizados na ligação de aminoácidos",
    opcoes: [
      "Ele catalisa a formação das ligações peptídicas",
      "Ele auxilia na transcrição do mRNA",
      "Ele ajuda o ribossomo a encontrar o códon de iniciação",
      "Ele regenera o fator de alongamento e EF-Tu para serem reutilizados na ligação de aminoácidos"
    ]
  },
  {
    pergunta: "Qual é o papel do fator de alongamento e EF-G?",
    alternativaCerta: "Ele auxilia no movimento do ribossomo ao longo do mRNA durante a translocação",
    opcoes: [
      "Ele catalisa a formação das ligações peptídicas",
      "Ele regenera o fator de alongamento e EF-Ts",
      "Ele ajuda o ribossomo a encontrar o códon de iniciação",
      "Ele auxilia no movimento do ribossomo ao longo do mRNA durante a translocação"
    ]
  },
  {
    pergunta: "O que acontece durante a fase de terminação da síntese de proteínas?",
    alternativaCerta: "O ribossomo encontra um códon de terminação, a proteína é liberada e o ribossomo se dissocia do mRNA",
    opcoes: [
      "O ribossomo se move ao longo do mRNA, adicionando aminoácidos à cadeia em crescimento",
      "O DNA é convertido em RNA mensageiro (mRNA)",
      "O ribossomo reconhece o códon de iniciação e começa a síntese proteica",
      "O ribossomo encontra um códon de terminação, a proteína é liberada e o ribossomo se dissocia do mRNA"
    ]
  },
  {
    pergunta: "Qual é o papel do fator de terminação e RF-1 durante a síntese de proteínas?",
    alternativaCerta: "Ele reconhece os códons de terminação no mRNA e libera a proteína",
    opcoes: [
      "Ele auxilia na transcrição do mRNA",
      "Ele catalisa a formação das ligações peptídicas",
      "Ele regenera o fator de alongamento e EF-G",
      "Ele reconhece os códons de terminação no mRNA e libera a proteína"
    ]
  },
  {
    pergunta: "Qual é o papel do fator de terminação e RF-2 durante a síntese de proteínas?",
    alternativaCerta: "Ele reconhece os códons de terminação no mRNA e libera a proteína",
    opcoes: [
      "Ele auxilia na transcrição do mRNA",
      "Ele catalisa a formação das ligações peptídicas",
      "Ele regenera o fator de alongamento e EF-G",
      "Ele reconhece os códons de terminação no mRNA e libera a proteína"
    ]
  },
  {
    pergunta: "Qual é o papel do fator de terminação e RF-3 durante a síntese de proteínas?",
    alternativaCerta: "Ele ajuda a liberar o fator de alongamento e EF-G após a translocação",
    opcoes: [
      "Ele auxilia na transcrição do mRNA",
      "Ele catalisa a formação das ligações peptídicas",
      "Ele regenera o fator de alongamento e EF-Ts",
      "Ele ajuda a liberar o fator de alongamento e EF-G após a translocação"
    ]
  },
  {
    pergunta: "O que é a translocação na síntese de proteínas?",
    alternativaCerta: "É o movimento do ribossomo ao longo do mRNA, deslocando-se para o próximo códon",
    opcoes: [
      "É o processo de liberar a proteína após a terminação",
      "É o processo de adicionar aminoácidos à cadeia em crescimento",
      "É o processo de reconhecimento dos códons de iniciação",
      "É o movimento do ribossomo ao longo do mRNA, deslocando-se para o próximo códon"
    ]
  },
  {
    pergunta: "Por que a síntese de proteínas é considerada um processo central para a célula?",
    alternativaCerta: "Porque as proteínas desempenham papéis essenciais na estrutura e função celular",
    opcoes: [
      "Porque a síntese de proteínas é o único processo que ocorre nas células",
      "Porque a síntese de proteínas está relacionada apenas à produção de energia",
      "Porque a síntese de proteínas ocorre apenas no núcleo celular",
      "Porque as proteínas desempenham papéis essenciais na estrutura e função celular"
    ]
  },
  {
    pergunta: "Qual é a importância da síntese de proteínas para a regulação gênica?",
    alternativaCerta: "A síntese de proteínas permite que os genes sejam expressos e regulados de acordo com as necessidades da célula",
    opcoes: [
      "A síntese de proteínas é responsável apenas pela produção de energia",
      "A síntese de proteínas impede a expressão gênica",
      "A síntese de proteínas regula a replicação do DNA",
      "A síntese de proteínas permite que os genes sejam expressos e regulados de acordo com as necessidades da célula"
    ]
  },
  {
    pergunta: "Quais são as consequências de erros na síntese de proteínas?",
    alternativaCerta: "Erros na síntese de proteínas podem levar à formação de proteínas defeituosas e disfunções celulares",
    opcoes: [
      "Erros na síntese de proteínas não têm impacto na célula",
      "Erros na síntese de proteínas apenas afetam a replicação do DNA",
      "Erros na síntese de proteínas podem levar à formação de proteínas defeituosas e disfunções celulares",
      "Erros na síntese de proteínas causam mutações no RNA"
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
