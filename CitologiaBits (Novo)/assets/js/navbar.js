const navbarMenu = document.getElementById("navbar"); // Obtém o elemento com o ID "navbar"
const overlayMenu = document.querySelector(".overlay"); // Obtém o elemento com a classe "overlay"
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("header a");
const hamburgerButton = document.querySelector(".svg-hamburguer"); // Substitua ".hamburguer" com a classe correta do seu botão de hambúrguer

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  // Substitua 100 pela posição em que você deseja que a mudança de cor ocorra
  if (scrollPosition > 0) {
    // Adicione a classe que altera a cor do botão
    hamburgerButton.classList.add("cor-alterada");
  } else {
    // Remova a classe se a posição de rolagem for menor que 100
    hamburgerButton.classList.remove("cor-alterada");
  }
});


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
        if (link.dataset.scroll === id) {
          // Inclui todas as seções, incluindo a Home
          link.classList.add("ativo");
          if (id === "banner") {
            document.title = "CitologiaBits";
          } else {
            document.title = `${
              id.charAt(0).toUpperCase() + id.slice(1)
            } | CitologiaBits`;
          }
        }
      });
    }
  });
};

document.addEventListener("scroll", handleScroll);

// Função para mostrar e ocultar o menu de navegação
const toggleMenu = () => {
  navbarMenu.classList.toggle("active"); // Alterna a classe "active" no elemento navbarMenu
  overlayMenu.classList.toggle("active"); // Alterna a classe "active" no elemento overlayMenu
};

// Função para alternar o submenu móvel
const toggleSubMenu = (e) => {
  if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
    e.preventDefault(); // Previne o comportamento padrão do evento de clique

    const menuDropdown = e.target.parentElement; // Obtém o elemento pai do elemento clicado

    // Se o Dropdown estiver expandido, então recolhe-o
    if (menuDropdown.classList.contains("active")) {
      collapseSubMenu();
    } else {
      // Recolhe o Dropdown expandido existente
      if (navbarMenu.querySelector(".menu-dropdown.active")) {
        collapseSubMenu();
      }

      // Expande o novo Dropdown
      menuDropdown.classList.add("active"); // Adiciona a classe "active" ao menuDropdown
      const subMenu = menuDropdown.querySelector(".submenu"); // Obtém o elemento de submenu dentro do menuDropdown
      subMenu.style.maxHeight = subMenu.scrollHeight + "px"; // Define a altura máxima do submenu com base em seu conteúdo
    }
  }
};

// Função para redimensionar a janela fixa
const resizeWindow = () => {
  if (window.innerWidth > 992) {
    if (navbarMenu.classList.contains("active")) {
      toggleMenu();
    }
    if (navbarMenu.querySelector(".menu-dropdown.active")) {
      collapseSubMenu();
    }
  }
};

// Inicializa os event listeners
burgerMenu.addEventListener("click", toggleMenu); // Adiciona um event listener de clique no burgerMenu
overlayMenu.addEventListener("click", toggleMenu); // Adiciona um event listener de clique no overlayMenu
navbarMenu.addEventListener("click", toggleSubMenu); // Adiciona um event listener de clique no navbarMenu
window.addEventListener("resize", resizeWindow); // Adiciona um event listener de redimensionamento da janela
