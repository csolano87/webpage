function crearFlor(){
    const flor = document.createElement("div");
    flor.classList.add("flor");

    flor.innerHTML="🌸";

    flor.style.left=Math.random()*100+"vw";
    flor.style.animationDuration=(Math.random()*3+3)+"s";
    flor.style.fontSize=(Math.random()*20+10)+"px";

    document.querySelector(".flores").appendChild(flor);

    setTimeout(()=>{
        flor.remove();
    },5000);
}

setInterval(crearFlor,300);