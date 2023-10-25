function redireciona_reg() {
    window.location.href = "registro.html";
}
function register() {
    var mensagemErro = document.getElementById("mensagem-erro");
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var nome = document.getElementById("name").value;
    var idade = document.getElementById("age").value;
    var rg = document.getElementById("rg").value;
    var cpf = document.getElementById("cpf").value;


    if (email.trim() == "" || password.trim() == "" || nome.trim() == "" || idade.trim() == "" || rg.trim() == "" || cpf.trim() == "") {
        //caso deixem em branco
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("age").style.borderColor = "red";
        document.getElementById("rg").style.borderColor = "red";
        document.getElementById("cpf").style.borderColor = "red";
        document.getElementById("register").style.background = "red";
    } else {
        alert("Registro bem-sucedido! Redirecionando para a página de login.");
        window.location.href = "index.html";
        //salva os dados
        localStorage.setItem("emailRegistrado", email);
        localStorage.setItem("senhaRegistrada", password);
        localStorage.setItem("nomeRegistrado", nome);
        localStorage.setItem("idadeRegistrada", idade);
        localStorage.setItem("rgRegistrado", rg);
        localStorage.setItem("cpfRegistrado", cpf);
    }
}
function login() {
    var loginEle = document.getElementById("email").value;
    var passEle = document.getElementById("password").value;
    var mensagemErro = document.getElementById("mensagem-erro");
    document.getElementById("login").style.background = "rgb(255, 255, 255)";
    setTimeout(() => { document.getElementById("login").style.background = "rgb(235, 28, 28)"; }, 100);

    if (passEle.trim() == "" || loginEle.trim() == "") {
        //caso deixem em branco
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "red";
        // mensagemErro.textContent = "Preencha os campos.";
    } else {
        // retira do local storage
        var emailRegistrado = localStorage.getItem("emailRegistrado");
        var senhaRegistrada = localStorage.getItem("senhaRegistrada");

        if (loginEle === emailRegistrado && passEle === senhaRegistrada) {
            // volta ao menu
            window.location.href = "/pages/dashboard.html";
        } else {
            // Credenciais inválidas
            mensagemErro.textContent = "Credenciais inválidas.";
        }
    }
}

