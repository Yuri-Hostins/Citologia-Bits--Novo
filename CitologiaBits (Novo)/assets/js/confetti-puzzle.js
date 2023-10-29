containerConfetes.classList.add("esconder");

var confetesJogadores = [];

function facaConfetesVitoria() {
  var confetes = document.querySelectorAll(".confetti");

  if (!confetes[0].animate) {
    return false;
  }

  for (var i = 0, len = confetes.length; i < len; ++i) {
    var lentidao = confetes[i];
    lentidao.innerHTML = '<div class="girar"><div class="inclinado"></div></div>';
    var tamanho = Math.random() * 0.8 + 0.2;
    var jogador = lentidao.animate(
      [
        {
          transform:
            "translate3d(" + (i / len) * 100 + "vw,0,0) scale(" + tamanho + ")",
          opacity: tamanho,
        },
        {
          transform:
            "translate3d(" +
            ((i / len) * 100 + 10) +
            "vw,100vh,0) scale(" +
            tamanho +
            ")",
          opacity: 1,
        },
      ],
      {
        duration: Math.random() * 3000 + 3000,
        iterations: Infinity,
        delay: -(Math.random() * 5000),
      }
    );

    confetesJogadores.push(jogador);
  }
}

facaConfetesVitoria();
