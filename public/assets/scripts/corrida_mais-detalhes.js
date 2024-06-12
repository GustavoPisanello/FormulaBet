let seta = document.querySelector(".seta");
let escondido = document.querySelectorAll(".escondido");

function MaisDetalhes(){
    if (seta.classList.contains("unrotate")){
        seta.classList.add("rotate");
        seta.classList.remove("unrotate");

        for (i = 0; i < escondido.length; i++){
            escondido[i].classList.add("escondido");
            escondido[i].classList.remove("aparecido");
        }
    }
    else{
        seta.classList.add("unrotate");
        seta.classList.remove("rotate");

        for (i = 0; i < escondido.length; i++){
            escondido[i].classList.remove("escondido");
            escondido[i].classList.add("aparecido");
        }
    }
}