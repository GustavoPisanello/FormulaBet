let menuLateral = document.querySelector(".menu-lateral");
let etiqueta = document.querySelectorAll(".etiqueta");

function AbreMenu(){
    if(menuLateral.classList.contains("menuAberto")){
        menuLateral.classList.remove("menuAberto");
        menuLateral.classList.add("menuFechado");
        
        for (i = 0; i < etiqueta.length; i++){
            etiqueta[i].classList.toggle("etiqueta")
        }
    }
    else{
        menuLateral.classList.remove("menuFechado");
        menuLateral.classList.add("menuAberto");
        
        for (i = 0; i < etiqueta.length; i++){
            etiqueta[i].classList.toggle("etiqueta")
        }
        
    }
}