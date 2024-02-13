const reproducir=()=>{
    video.play()
    console.dir(video)
}
const pausar=()=>{
    video.pause()
    console.dir(video)
}



let canvas=document.querySelector("canvas");
let lienzo=canvas.getContext("2d");

lienzo.fillStyle="#F0E9D2"
lienzo.globalAlpha=0.9
lienzo.fillRect(40,5,60,35)



lienzo.fillStyle="#495579"
lienzo.globalAlpha=0.9
lienzo.fillRect(45,10,50,25)

lienzo.fillStyle="#F0E9D2"
lienzo.globalAlpha=0.9
lienzo.beginPath()
lienzo.moveTo(50,45)
lienzo.lineTo(90,45)
lienzo.lineTo(115,65)
lienzo.lineTo(25,65)
lienzo.lineTo(50,45)
lienzo.fill()
lienzo.closePath()

lienzo.fillStyle="#495579"
lienzo.globalAlpha=0.9
lienzo.beginPath()
lienzo.moveTo(55,50)
lienzo.lineTo(85,50)
lienzo.lineTo(99,60)
lienzo.lineTo(40,60)
lienzo.lineTo(55,50)
lienzo.fill()
lienzo.closePath()



    function arrastre(event) {
        event.dataTransfer.setData("imagen", event.target.id);
    }

    function permitirSoltar(event) {
        event.preventDefault();
    }

    function soltar(event) {
        event.preventDefault();
        var imagenId = event.dataTransfer.getData("imagen");
        var imagen = document.getElementById(imagenId);
        var caja = event.target;
        caja.querySelector(".parrafo-juego").style.display = "none";
        caja.appendChild(imagen);
}




