let boletim = document.querySelector(".boletim")
let boletas = document.querySelector(".boletas");

function AbreBoletim(){
    if (boletim.classList.contains("escondido")){
        boletim.classList.remove("escondido")
        boletim.classList.add("aparecido")

        boletas.classList.add("alturavel")
        boletas.classList.remove("inalturavel")  

    }
    else{
        boletas.classList.add("inalturavel")
        boletas.classList.remove("alturavel")

        boletim.classList.add("escondido")
        boletim.classList.remove("aparecido")  
    }
}
