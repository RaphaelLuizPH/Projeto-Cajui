// Função que esconde os links com o clique no botao.
// Seleciona todos os elementos com a classe "botao" e alterna a classe "hide"
// para cada um deles.

function hide() {
  let elements = document.getElementsByClassName("botao");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("hide");
  }
}

// Função que controla os áudios da página fazendo os sumir e aparece ao
// apertar o botão no topo da tela

function audioon() {
  var audioElements = document.getElementsByClassName("audio-parent");

  for (var i = 0; i < audioElements.length; i++) {
    audioElements[i].classList.toggle("audio");
  }

  onoff();
}

// Função que altera o estado do botão de leitura em voz da página

function onoff() {
  var audiostatus = document.getElementById("leituradapagina");

  if (audiostatus.textContent === "Ativar ouça esta página") {
    audiostatus.textContent = "Desativar ouça esta página";
  } else {
    audiostatus.textContent = "Ativar ouça esta página";
  }
}

// Função que faz cada áudio inicia conforma a rolagem da tela

document.addEventListener("scroll", function () {
  var audioElements = document.querySelectorAll(".audio-parent");

  audioElements.forEach(function (audio) {
    var triggerPosition = audio.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2;

    if (triggerPosition < screenPosition && triggerPosition > 0) {
      if (audio.paused) {
        audio.play();
      }
    } else {
      if (!audio.paused) {
        audio.pause();
        audio.currentTime = 1;
      }
    }
  });
});

//Verifica se o elemento com o ID "list" contém a classe "closed".
//Se sim, remove a classe "closed" e alterna para a classe "open".
//Se não, remove a classe "open" e alterna para a classe "closed".

function menu() {
  const menu = document.getElementById("list");
  if (menu.classList.contains("closed")) {
    menu.classList.remove("closed");
    menu.classList.toggle("open");
  } else {
    menu.classList.remove("open");
    menu.classList.toggle("closed");
  }
}

// Função para o funcionamento das curtidas
// Adiciona um evento de clique a todos os elementos com a classe "heart".
// Quando clicado, alterna o atributo "name" entre "heart-empty" e "heart".

function like() {
  document.addEventListener("DOMContentLoaded", function () {
    var icons = document.querySelectorAll(".heart");
    icons.forEach(function (icon) {
      icon.addEventListener("click", function () {
        if (icon.getAttribute("name") === "heart-empty") {
          icon.setAttribute("name", "heart");
        } else {
          icon.setAttribute("name", "heart-empty");
        }
      });
    });
  });
}

like();

// Listas de primeiros nomes e sobrenomes
const primeirosNomes = [
  "Ana",
  "Beatriz",
  "Carlos",
  "Daniel",
  "Eduardo",
  "Fernanda",
  "Gabriel",
  "Helena",
  "Igor",
  "Juliana",
  "Lucas",
  "Mariana",
  "Nicolas",
  "Olivia",
  "Pedro",
  "Rafaela",
  "Samuel",
  "Tatiana",
  "Vinicius",
  "Yara",
  "Alice",
  "Bruno",
  "Cecilia",
  "Diogo",
  "Elisa",
  "Felipe",
  "Gustavo",
  "Heloisa",
  "Isabela",
  "Joaquim",
  "Karen",
  "Leonardo",
  "Manuela",
  "Nathan",
  "Patricia",
  "Ricardo",
  "Sofia",
  "Thiago",
  "Valentina",
  "Wesley",
  "Amanda",
  "Bernardo",
  "Clara",
  "Diego",
  "Elaine",
  "Fernando",
  "Giovanna",
  "Henrique",
  "Isadora",
  "João",
];

const sobrenomes = [
  "Silva",
  "Santos",
  "Oliveira",
  "Souza",
  "Rodrigues",
  "Ferreira",
  "Almeida",
  "Costa",
  "Gomes",
  "Ribeiro",
  "Martins",
  "Lima",
  "Araújo",
  "Pereira",
  "Barbosa",
  "Cardoso",
  "Teixeira",
  "Carvalho",
  "Monteiro",
  "Mendes",
  "Nogueira",
  "Cavalcanti",
  "Borges",
  "Campos",
  "Andrade",
  "Dias",
  "Freitas",
  "Machado",
  "Moura",
  "Moraes",
  "Rocha",
  "Nunes",
  "Vieira",
  "Castro",
  "Ramos",
  "Reis",
  "Moreira",
  "Correia",
  "Pires",
  "Alves",
  "Farias",
  "Cunha",
  "Fonseca",
  "Matos",
  "Barros",
  "Azevedo",
  "Tavares",
  "Rosa",
  "Peixoto",
  "Lopes",
];

// Acionar Type.js quando o elemento entra na tela

document.addEventListener("DOMContentLoaded", () => {
  const observedElement = document.getElementById("textotweet2");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        typejs();
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(observedElement);
});

// Biblioteca Type.Js

function typejs() {
  var typed = new Typed("#textotweet3", {
    strings: [
      "                As doações que recebemos foram essenciais para recomeçar nossas vidas. Com a ajuda de todos, conseguimos roupas, alimentos que nos permitiram manter a dignidade durante esse momento tão difícil. Somos eternamente gratos.",
    ],
    typeSpeed: 200,
  });

  var typed = new Typed("#textotweet2", {
    strings: [
      "                               Perdi tudo nas enchentes, graças as doações estou conseguindo seguir forte. Cada contribuição fez uma enorme diferença, nos deu esperança e força para seguir em frente.",
    ],
    typeSpeed: 50,
  });

  var typed = new Typed("#textotweet1", {
    strings: [
      "                 Só tenho a agradecer a ajuda que vocês estão nos proporcionando. Receber roupas, cobertores e produtos de higiene nos ajudou a manter a saúde e o bem-estar da minha família.",
    ],
    typeSpeed: 50,
  });
}

// Função para gerar um nome aleatório
function Nome() {
  setInterval(function () {
    const nomes = [];
    for (let i = 0; i < 3; i++) {
      const primeiroNome =
        primeirosNomes[Math.floor(Math.random() * primeirosNomes.length)];
      const sobrenome =
        sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
      const sobrenome2 =
        sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
      nomes.push(`${primeiroNome} ${sobrenome} ${sobrenome2} acabou de doar!`);
    }
    // Inserir o nome gerado no parágrafo com id "nomedapessoax"
    document.getElementById("nomedapessoa").textContent = nomes[0];
    document.getElementById("nomedapessoa2").textContent = nomes[1];
    document.getElementById("nomedapessoa3").textContent = nomes[2];
  }, 1000);
}

// Código para adicionar o nome do usuário

let nomeuser = document
  .getElementById("nomeusuario")
  .addEventListener("keydown", function (event) {
    // Evento que ouve a tecla enter sendo pressionada
    if (event.key === "Enter") {
      userdonate();
    }
  });

// Captura o valor do input com o ID "nomeusuario"
// e exibe uma mensagem personalizada.
// Se o input estiver vazio, exibe uma mensagem padrão.

function userdonate() {
  const username = document.getElementById("nomeusuario").value;
  if (username.length > 0)
    // Verifica se tem algo no input
    document.getElementById(
      "username"
    ).textContent = `${username} quer ser um herói!`;
  // Caso a caixa fique vazia, "você" fica no lugar do nome
  else
    document.getElementById("username").textContent = `Você quer ser um herói!`;
}

// Funções que fazem a página rolar até a seção selecionada

function home() {
  const start = document.getElementById("welcome");
  start.scrollIntoView({ block: "start", behavior: "smooth" });
}

function about() {
  const about = document.getElementById("sobre");
  about.scrollIntoView({ block: "start", behavior: "smooth" });
}

function heroes() {
  const heroes = document.getElementById("heroes");
  heroes.scrollIntoView({ block: "start", behavior: "smooth" });
}

function howtohelp() {
  const help = document.getElementById("howtohelp");
  help.scrollIntoView({ block: "start", behavior: "smooth" });
}

function depoimentos() {
  const depoimentos = document.getElementById("depoimentos");
  depoimentos.scrollIntoView({ block: "start", behavior: "smooth" });
}

function itens() {
  const itens = document.getElementById("itens");
  itens.scrollIntoView({ block: "start", behavior: "smooth" });
}

function FAQ() {
  const itens = document.getElementById("FAQ");
  itens.scrollIntoView({ block: "start", behavior: "smooth" });
}
