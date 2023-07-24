window.addEventListener("scroll", function () {
  const header = document.querySelector("header"); // Seleciona o elemento header
  header.classList.toggle("navegacao-fixa", window.scrollY > 0); // Alterna a classe "navegacao-fixa" no header com base no deslocamento vertical da janela de visualização (scrollY)
});

function togglemenu() {
  const menutoggle = document.querySelector(".menutoggle"); // Seleciona o elemento com a classe "menutoggle"
  const navigation = document.querySelector(".navegacao"); // Seleciona o elemento com a classe "navegacao"
  menutoggle.classList.toggle("active"); // Alterna a classe "active" no elemento menutoggle
  navigation.classList.toggle("active"); // Alterna a classe "active" no elemento navigation
}
