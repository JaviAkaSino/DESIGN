var audio = document.getElementById("song");
var boton_play = document.getElementById("play");
var boton_pause = document.getElementById("pause");
var rango_volumen = document.getElementById("volume-range");



function play_pause() {

    if(audio.paused){
        audio.play();
        boton_play.className="oculto";
        boton_pause.className="visible";

    } else {
        audio.pause();
        boton_pause.className="oculto";
        boton_play.className="visible";
    }  
}

function stop(){
    audio.pause();
    audio.currentTime = 0;
}

function restart(){
    audio.currentTime = 0;
    if(audio.paused){
        audio.play();
    }
}

function mute(){
    audio.volume = 0;
    rango_volumen.value=0;
}