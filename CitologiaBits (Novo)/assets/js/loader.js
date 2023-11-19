// O evento 'load' é acionado quando todos os recursos da página (HTML, CSS, imagens) foram totalmente carregados.
window.addEventListener("load", function () {
  // Seleciona o elemento com o ID 'preloader' e a classe '.inner', que representa a parte interna do preloader.
  var preloaderInner = document.querySelector("#preloader .inner");

  // Seleciona o elemento com o ID 'preloader', que representa o preloader em si.
  var preloader = document.querySelector("#preloader");

  // Seleciona o elemento 'body' do documento, que é o corpo principal da página.
  var body = document.querySelector("body");

  // Aguarda um atraso de 3 segundos (3000 milissegundos) antes de executar o código dentro deste bloco.
  setTimeout(function () {
    // Define a opacidade da parte interna do preloader para '0', tornando-a invisível gradualmente.
    preloaderInner.style.opacity = "0";

    // Aguarda um atraso de 200 milissegundos (0,2 segundos) antes de executar o código dentro deste bloco.
    setTimeout(function () {
      // Adiciona uma transição suave à opacidade do preloader com duração de 0,3 segundos (300 milissegundos) e uma função de aceleração.
      preloader.style.transition = "opacity 0.3s ease";

      // Define a opacidade do preloader para '0', tornando-o invisível gradualmente.
      preloader.style.opacity = "0";

      // Aguarda um atraso de 500 milissegundos (0,5 segundos) antes de executar o código dentro deste bloco.
      setTimeout(function () {
        // Define o estilo 'display' do preloader como 'none', tornando-o oculto.
        preloader.style.display = "none";

        // Permite que o conteúdo da página seja visível definindo a propriedade 'overflow' do corpo para 'visible'.
        body.style.overflowX = "hidden";

        // Adiciona uma transição suave à opacidade do corpo da página com duração de 0,3 segundos (300 milissegundos) e uma função de aceleração.
        body.style.transition = "opacity 0.3s ease";

        // Define a opacidade do corpo da página como '1', tornando-o gradualmente visível.
        body.style.opacity = "1";
      }, 500);
    }, 200);
  }, 2500);
});
