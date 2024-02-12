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



lienzo.fillStyle="white"
lienzo.globalAlpha=0.8
lienzo.fillRect(40,5,60,35)




lienzo.fillStyle="#181D31"
lienzo.globalAlpha=0.8
lienzo.fillRect(45,10,50,25)



lienzo.fillStyle="white"
lienzo.globalAlpha=0.8
lienzo.beginPath()
lienzo.moveTo(50,45)
lienzo.lineTo(90,45)
lienzo.lineTo(115,65)
lienzo.lineTo(25,65)
lienzo.lineTo(50,45)
lienzo.fill()
lienzo.closePath()



lienzo.fillStyle="#181D31"
lienzo.globalAlpha=0.8
lienzo.beginPath()
lienzo.moveTo(55,50)
lienzo.lineTo(85,50)
lienzo.lineTo(99,60)
lienzo.lineTo(40,60)
lienzo.lineTo(55,50)
lienzo.fill()
lienzo.closePath()














