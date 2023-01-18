var audio = document.getElementById("song");
var boton_play = document.getElementById("play");
var boton_pause = document.getElementById("pause");
var volume_off = document.getElementById("volume-off");
var volume_on = document.getElementById("volume-on");
var rango_volumen = document.getElementById("volume-range");
var ultimo_vol = 50;
var tiempo = document.getElementById("tiempo");


function play_pause() {
    if (audio.paused) {
        audio.play();
        boton_play.className = "oculto";
        boton_pause.className = "visible";

    } else {
        audio.pause();
        boton_pause.className = "oculto";
        boton_play.className = "visible";
    }
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
}

function restart() {
    audio.currentTime = 0;
    if (audio.paused) {
        audio.play();
    }
}

function control_mute() {

    if (audio.volume == 0) {
        volume_off.className = "oculto";
        volume_on.className = "visible";
    } else {
        volume_on.className = "oculto";
        volume_off.className = "visible";
    }
}

function mute() {
    if (audio.volume > 0) {
        ultimo_vol = audio.volume;

        audio.volume = 0;
        rango_volumen.value = 0;

    } else {
        audio.volume = ultimo_vol;
        rango_volumen.value = ultimo_vol * 100;
    }

    control_mute();
}

function volume() {
    audio.volume = rango_volumen.value / 100;
    control_mute();
}

function volume_low() {

    if (audio.volume >= 0.05) {
        audio.volume -= 0.05;
        rango_volumen.value -= 5;
    } else {
        audio.volume = 0;
        rango_volumen.value = 0;
        control_mute();
    }
}

function volume_high() {
    if (audio.volume <= 0.95) {
        audio.volume += 0.05;
        rango_volumen.value = Number(rango_volumen.value) + 5;
        control_mute();
    } else {
        audio.volume = 1;
        rango_volumen.value = 100;
    }
}

//Evento para el tiempo transcurrido

audio.addEventListener("timeupdate", tiempo(), true);


function tiempo(){
    
tiempo.innerHTML = audio.currentTime + "/" + audio.duration();
}