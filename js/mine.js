let mainNav = document.querySelector(".main-nav");
let MegaMenu = document.querySelector(".mega-menu");

let a = document.querySelector(".main-link");
a.onclick = function(){
    a.preventDefault();
}


mainNav.onclick = function(){
    MegaMenu.classList.toggle("mystyle")
}


