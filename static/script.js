// Função que esconde os links com o clique no botao
function hide() {
    let elements = document.getElementsByClassName("botao");
    for(let i = 0; i < elements.length; i++) {
      elements[i].classList.toggle("hide");
    }
  }


function about() {
    const about = document.getElementById("sobre")
    about.scrollIntoView({ block: 'start',  behavior: 'smooth' })
}