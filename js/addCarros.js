const modal = document.getElementById("myModal");
const fechar = document.getElementById("fechar-modal");

document.addEventListener("DOMContentLoaded", function() {
    fechar.addEventListener("click", function() {
        modal.style.display = "none";
    });
});

function abrirModal() {
    modal.style.display = "block";
}

function adicionarCarro() {
    let nome = document.getElementById("nome").value;
    let ano = document.getElementById("ano").value;
    let preco = document.getElementById("preco").value;

    let veiculos = document.getElementById("veiculos-grid");

    // <section class="veiculo">
    //         <img src="/img/carro 2.jpeg" alt="Carro 2">
    //         <h2>Carro 2</h2>
    //         <p>Ano: 2022</p>
    //         <p>Preço: R$ 45.000,00</p>
    // </section>

    let sessao = document.createElement("section");
    let imagem = document.createElement("img");
    let titulo = document.createElement("h2");
    let desc1 = document.createElement("p");
    let desc2 = document.createElement("p");

    titulo.innerHTML = nome;
    imagem.src = "/img/carro 2.jpeg";
    sessao.className = "veiculo";
    desc1.innerHTML = "Ano: " + ano + "\n"
    desc2.innerHTML = "Preço: R$ " + preco + "\n"

    sessao.appendChild(imagem);
    sessao.appendChild(titulo);
    sessao.appendChild(desc1);
    sessao.appendChild(desc2);

    veiculos.appendChild(sessao);

    document.getElementById("nome").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("preco").value = "";
}