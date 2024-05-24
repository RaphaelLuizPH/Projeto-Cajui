// Função que esconde os links com o clique no botao
function hide() {
  let elements = document.getElementsByClassName("botao");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("hide");
  }
}

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

// Função para gerar um nome aleatório
function Nome() {
  setInterval(function() {
  const nomes = [];
  for (let i = 0; i < 3; i++) {
    const primeiroNome =
      primeirosNomes[Math.floor(Math.random() * primeirosNomes.length)];
    const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    const sobrenome2 =
      sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    nomes.push(`${primeiroNome} ${sobrenome} ${sobrenome2} acabou de doar!`);
  }
  // Inserir o nome gerado no parágrafo com id "nomedapessoax"
  document.getElementById("nomedapessoa").textContent = nomes[0];
  document.getElementById("nomedapessoa2").textContent = nomes[1];
  document.getElementById("nomedapessoa3").textContent = nomes[2];
  }, 2000);
}

// Código para adicionar o nome do usuário

let nomeuser = document // Evento que ouve a tecla enter sendo pressionada
  .getElementById("nomeusuario")
  .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        userdonate();
      }
  });

function userdonate() {
  const username = document.getElementById("nomeusuario").value;
  if (username.length > 0) // Verifica se tem algo no input
  document.getElementById("username").textContent = `${username} quer ser um herói!`;
  else // Caso a caixa fique vazia, "você" fica no lugar do nome
  document.getElementById("username").textContent = `Você quer ser um herói!`;
}

// Funções que fazem a página rolar até a seção selecionada

function home() {
  const about = document.getElementById("welcome");
  about.scrollIntoView({ block: "start", behavior: "smooth" });
}

function about() {
  const about = document.getElementById("sobre");
  about.scrollIntoView({ block: "start", behavior: "smooth" });
}

function heroes() {
  const about = document.getElementById("heroes");
  about.scrollIntoView({ block: "start", behavior: "smooth" });
}
