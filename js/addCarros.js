let modal = document.getElementById("myModal");
let fechar = document.getElementById("fechar-modal");

var pos = 0;

document.addEventListener("DOMContentLoaded", function() {
    fechar.addEventListener("click", function() {
        modal.style.display = "none";
    });

    for (let i = 0; i < localStorage.length; i++) {
        var c = 0;
        if (localStorage.getItem != "c"+i) {
            c++;
        }
        
    }
    
    if (c != 0) {
        for (let i = 0; i < c;i++) {
            carrosCadastrados();
        }
        cartao = document.querySelectorAll(".veiculo");
    }
});

function abrirModal() {
    modal.style.display = "block";
}

function adicionarCarro() {
    let nome = document.getElementById("nome").value;
    let ano = document.getElementById("ano").value;
    let preco = document.getElementById("preco").value;

    
    pos++;
    
    // <section class="veiculo">
    //         <img src="/img/carro 2.jpeg" alt="Carro 2">
    //         <h2>Carro 2</h2>
    //         <p>Ano: 2022</p>
    //         <p>Preço: R$ 45.000,00</p>
    // </section>
    
    let veiculos = document.getElementById("veiculos-grid");
    let sessao = document.createElement("section");
    let imagem = document.createElement("img");
    let titulo = document.createElement("h2");
    let desc1 = document.createElement("p");
    let desc2 = document.createElement("p");

    sessao.className = "veiculo";
    imagem.src = "../img/carro 2.jpeg";
    titulo.innerHTML = nome;
    desc1.innerHTML = "Ano: " + ano + "\n";
    desc2.innerHTML = "Preço: R$ " + preco + "\n";

    console.log(nome,ano,preco,pos);

    armazenar(nome, ano, preco, pos);

    sessao.appendChild(imagem);
    sessao.appendChild(titulo);
    sessao.appendChild(desc1);
    sessao.appendChild(desc2);

    veiculos.appendChild(sessao);

    document.getElementById("nome").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("preco").value = "";

    modal.style.display = "none";
}

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

function armazenar(nome, ano, preco, pos) {
    var carro = {
        nome: nome,
        ano: ano,
        preco: preco,
    }

    const stringCarro = JSON.stringify(carro);

    localStorage.setItem("c"+pos, stringCarro);
}

function carrosCadastrados() {

    pos ++;
    
    var stringCarro = localStorage.getItem("c"+pos);
    
    var carro = JSON.parse(stringCarro);

    console.log(carro, pos);

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
