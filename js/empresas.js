let modal = document.getElementById("exampleModal");
let cartao = document.querySelectorAll(".veiculo");

var pos = 0;

document.addEventListener("DOMContentLoaded", function() {
    cartao.forEach((section) => {
        section.addEventListener("click", function() {
            modal.style.display = "block";
        });
    });
    window.addEventListener("click", function(event) {
        if(event.target == modal) {
            modal.style.display = "none";
        }
    });
});

function pesquisar() {
    let barra = document.querySelector(".barra").value;
    let carros = document.querySelectorAll('.veiculo h2');

    carros.forEach(carro => {
        const carroText = carro.textContent.toLowerCase();

        if (carroText.includes(barra)) {
            carro.closest("section").style.display = "block";
        } else {
            carro.closest("section").style.display = "none";
        }
    });
}

function fechar(){
    modal.style.display = "none";
}
