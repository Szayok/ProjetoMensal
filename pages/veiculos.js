<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AlugaMotors</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    
    <link rel="stylesheet" href="../css/veiculos.css">
    <link rel="stylesheet" href="../css/dashboard.css">
    
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

</head>

<body>
    <!-- <div style="position: absolute; top: 30px; left: 45%; width: 300px;">
        <input style="border-color:#04BFBF ; width: 300px; border-radius: 20px; height: 2.5rem; padding-left: 15px;" type="search" placeholder="Pesquisar Agencias">
    </div>
     -->
     <header>
        <div class="bar-top">
            <div class="logo">
                <img src="../img/Logo_Branco.png" alt="">
                <a href="#"> <h1>AlugaMotors</h1></a>
            </div>

            <div class="logo">
                <a href="#">Veiculos</a>
                <a href="#">Empresas</a>
                <a href="#">Contatos</a>
            </div>
        </div>  
    </header>
         
    <div style="position: absolute; top: 80px; left: 40%; width: 300px;">
        <input class="barra" onkeyup="pesquisar()" type="search" placeholder="Pesquisar Veículos">
    </div>

    <div class="veiculos-grid" id="veiculos-grid">
        <section class="veiculo">
            <img src="../img/carro 1.jpeg" alt="Carro 1">
            <h2>Carro 1</h2>
            <p>Ano: 2023</p>
            <p>Aluguel: R$ 500,00</p>
        </section>

        <section class="veiculo">
            <img src="../img/carro 2.jpeg" alt="Carro 2">
            <h2>Carro 2</h2>
            <p>Ano: 2022</p>
            <p>Aluguel: R$ 300,00</p>
        </section>

        <section class="veiculo">
            <img src="../img/carro 3.jpeg" alt="Carro 3">
            <h2>Carro 3</h2>
            <p>Ano: 2023</p>
            <p>Aluguel: R$ 700,00</p>
        </section>
    </div>

    <!-- <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d92866.46435558108!2d-54.629365957378894!3d-25.5171048373868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1695340737793!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="fechar()"></button>
            </div>
            <div class="modal-body">
                <div class="card" style="width: rem;">
                    <img src="../img/carro 1.jpeg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Nome Carro</h5>
                        
                    </div>
                </div>
                <p class="descricao">Insira uma descrição deste carro por favor eu preciso de uma descrição</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Alugar</button>
            </div>
          </div>
        </div>
    </div>

    <nav class="sidebar close">
        <header>
            <div class="image-text">
            </div>
            <i class="bx bx-chevron-right toggle"></i>
        </header>
        <div class="menu-bar">
            <div class="menu">
                <li class="search-box">
                    <i class="bx bx-search icon"></i>
                    <input type="search" placeholder="Pesquisar...">
                </li>
                <ul class="menu-links">
                    <li class="nav-link">
                        <a href="dashboard.html">
                            <i class="bx bx-home-alt icon"></i>
                            <span class="text nav-text">Inicio</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#">
                            <i class="bx bx-book-content icon"></i>
                            <span class="text nav-text">Histórico</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="">
                            <i class="bx bx-user icon"></i>
                            <span class="text nav-text">Perfil</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="">
                            <i class="bx bx-star icon"></i>
                            <span class="text nav-text">Favoritos</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="log-out">
                <li class="nav-link">
                    <a href="">
                        <i class=" bx bx-cog icon"></i>
                        <span class="text nav-text">Configurações</span>
                    </a>
                </li>
                <li class="">
                    <a href="#">
                        <i class="bx bx-help-circle icon"></i>
                        <span class="text nav-text">Central de ajuda</span>
                    </a>
                </li>
                <li class="nav-link">
                    <a href="/pages/index.html">
                        <i class="bx bxs-log-out icon"></i>
                        <span class="text nav-text">Logout</span>
                    </a>
                </li>
            </div>
        </div>
    </nav>
    <script src="../js/dashboard.js"></script>
    <script src="../js/veiculos.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <!--Area do calendário-->
</body>

</html>
