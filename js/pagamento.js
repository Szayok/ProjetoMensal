TelaCredito();

document.addEventListener("DOMContentLoaded", function(){
    TelaCredito();
    FechaTelaCredito();
    Concluir();

});

function TelaCredito(){
    var Home = document.getElementById("Pay");
    var ScrCred = document.getElementById("cred");
    var BtnCred = Array.from(document.getElementsByClassName("BtnCredito"));
    var NomeCred = BtnCredito.id;

    BtnCred.forEach((BtnCredito) => {
        BtnCredito.addEventListener("click", function(event){
            Home.style.display = "none";
            ScrCred.style.display = "block";

            document.getElementById("MudarCredito").innerHTML = NomeCred
        });

    })
}
 
function FechaTelaCredito(){
    var Home = document.getElementById("Pay");
    var ScrCred = document.getElementById("cred");
    var Fecha = Array.from(document.getElementsByClassName("Seta"));

    Fecha.forEach((Seta) => {
        Seta.addEventListener("click", function(event){
            Home.style.display = "block";
            ScrCred.style.display = "none";
        });

    })
}

function Concluir(){
    var Conc = document.getElementById("Concluido");
    var ScrCred = document.getElementById("cred");
    var Prox = Array.from(document.getElementsByClassName("proximo"));

    Prox.forEach((proximo) => {
        proximo.addEventListener("click", function(event){
            Conc.style.display = "block";
            ScrCred.style.display = "none";
        });

    })
}

