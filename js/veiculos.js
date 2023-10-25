let modal = document.getElementById("exampleModal");
let cartao = document.querySelectorAll(".veiculo");

var pos = 0;

document.addEventListener("DOMContentLoaded", function() {

    for (let i = 0; i < localStorage.length; i++) {
        var c = 1;
        let teste = "c" + c;

        if (localStorage.getItem == teste) {
            c++;
            carrosCadastrados();
        }
        cartao = document.querySelectorAll(".veiculo");
    }

    if (c != 0) {
        for (let i = 0; i < localStorage.length;i++) {
            
        }
        cartao = document.querySelectorAll(".veiculo");
    }

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

function carrosCadastrados() {

    pos ++;
    
    var stringCarro = localStorage.getItem("c"+pos);
    
    var carro = JSON.parse(stringCarro);
    
    console.log(carro);

    let veiculos = document.getElementById("veiculos-grid");
    let sessao = document.createElement("section");
    let imagem = document.createElement("img");
    let titulo = document.createElement("h2");
    let desc1 = document.createElement("p");
    let desc2 = document.createElement("p");

    sessao.className = "veiculo";
    imagem.src = "../img/carro 2.jpeg";
    titulo.innerHTML = carro.nome;
    desc1.innerHTML = "Ano: " + carro.ano + "\n";
    desc2.innerHTML = "Preço: R$ " + carro.preco + "\n";

    sessao.appendChild(imagem);
    sessao.appendChild(titulo);
    sessao.appendChild(desc1);
    sessao.appendChild(desc2);

    veiculos.appendChild(sessao);
}
