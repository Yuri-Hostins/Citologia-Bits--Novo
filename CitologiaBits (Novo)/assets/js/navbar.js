window.addEventListener("scroll", function () {
  const header = document.querySelector("header"); // Seleciona o elemento header
  header.classList.toggle("navegacao-fixa", window.scrollY > 0); // Alterna a classe "navegacao-fixa" no header com base no deslocamento vertical da janela de visualização (scrollY)
});

function menuMobile() {
  const menuMobile = document.querySelector(".menuMobile"); // Seleciona o elemento com a classe "menuMobile"
  const navigation = document.querySelector(".navegacao"); // Seleciona o elemento com a classe "navegacao"
  menuMobile.classList.toggle("active"); // Alterna a classe "active" no elemento menuMobile
  navigation.classList.toggle("active"); // Alterna a classe "active" no elemento navegacao
}


const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("header a");

  const resetLinks = () => {
    navLinks.forEach((link) => link.classList.remove("ativo"));
  };

  const handleScroll = () => {
    const { pageYOffset } = window;

    sections.forEach((section) => {
      const { id, offsetTop, clientHeight } = section;
      const offset = offsetTop - 100; // Ajuste o valor de acordo com sua preferência

      if (pageYOffset >= offset && pageYOffset < offset + clientHeight) {
        resetLinks();
        navLinks.forEach((link) => {
          if (link.dataset.scroll === id) { // Inclui todas as seções, incluindo a Home
            link.classList.add("ativo");
            if (id === "banner") {
              document.title = "CitologiaBits";
            } else {
              document.title = `${id.charAt(0).toUpperCase() + id.slice(1)} | CitologiaBits`;
            }
          }
        });
      }
    });
  };

  document.addEventListener("scroll", handleScroll);

