const body = document.querySelector("body");
    sideBar = body.querySelector(".sidebar");
    toggle = body.querySelector(".toggle");
    searchBtn = body.querySelector(".search-box");
    
    toggle.addEventListener("click", ()=>{
        sideBar.classList.toggle("close");
    });