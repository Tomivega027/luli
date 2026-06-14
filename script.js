// FOTOS

const fotos = [
    "foto1.jpeg",
    "foto2.jpeg",
    "foto3.jpeg"
];

let indice = 0;

function nextPhoto(){

    indice++;

    if(indice >= fotos.length){
        indice = 0;
    }

    document.getElementById("carouselImage").src =
        fotos[indice];
}

function prevPhoto(){

    indice--;

    if(indice < 0){
        indice = fotos.length - 1;
    }

    document.getElementById("carouselImage").src =
        fotos[indice];
}


// SOBRE

document
.getElementById("envelope")
.addEventListener("click", () => {

    document
    .getElementById("envelope")
    .classList.toggle("open");
});


// MENSAJES DE AMOR

const mensajes = [

"❤️ Te amo muchísimo Pichón ❤️",

"❤️ Sos mi vida entera ❤️",

"❤️ Te amo demasiado ❤️",

"❤️ Sos mi lugar favorito ❤️",

"❤️ Gracias por existir ❤️",

"❤️ Siempre te elegiría a vos ❤️",

"❤️ Mi corazón es tuyo ❤️",

"❤️ Te amo más de lo que las palabras pueden explicar ❤️",

"❤️ Feliz cumpleaños mi amor ❤️"

];

document
.getElementById("loveButton")
.addEventListener("click", () => {

    const random =
    Math.floor(
        Math.random() * mensajes.length
    );

    document
    .getElementById("loveMessage")
    .innerText =
    mensajes[random];
});


// MÚSICA

document
.getElementById("playMusic")
.addEventListener("click", () => {

    document
    .getElementById("musica")
    .play();
});


// CORAZONES

function crearCorazon(){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random()*100 + "vw";

    heart.style.fontSize =
        Math.random()*25 + 15 + "px";

    heart.style.animationDuration =
        Math.random()*4 + 4 + "s";

    document
    .getElementById("hearts-container")
    .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },8000);
}

setInterval(crearCorazon,300);


// FUEGOS ARTIFICIALES

window.onload = () => {

    let duration = 5000;

    let end = Date.now() + duration;

    (function frame(){

        confetti({
            particleCount:3,
            spread:70,
            origin:{
                x:Math.random(),
                y:Math.random()-0.2
            }
        });

        if(Date.now() < end){
            requestAnimationFrame(frame);
        }

    })();

};

const audio = document.getElementById("musica");

audio.addEventListener("canplaythrough", () => {
    console.log("Audio cargado correctamente");
});

audio.addEventListener("error", () => {
    console.log("Error cargando el audio");
});