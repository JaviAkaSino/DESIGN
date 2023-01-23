var video = document.getElementById("video");
var boton_play = document.getElementById("play");
var boton_pause = document.getElementById("pause");
var volume_off = document.getElementById("volume-off");
var volume_on = document.getElementById("volume-on");
var rango_volumen = document.getElementById("volume-range");
var rango_tiempo = document.getElementById("time-range");
var ultimo_vol = 50;
var tiempo = document.getElementById("tiempo");

window.onload = tiempo_repro();


function play_pause() {
    tiempo_repro();
    if (video.paused) {
        video.play();
        boton_play.className = "oculto";
        boton_pause.className = "visible";

    } else {
        video.pause();
        boton_pause.className = "oculto";
        boton_play.className = "visible";
    }
}

function stop() {
    if (video.currentTime != 0) {
        video.pause();
        video.currentTime = 0;
        boton_pause.className = "oculto";
        boton_play.className = "visible";
        rango_tiempo.value = 0;
    }

}

function restart() {
    video.currentTime = 0;
    rango_tiempo.value = 0;
    if (video.paused) {
        video.play();
    }

}

function control_mute() {

    if (video.volume == 0) {
        volume_off.className = "oculto";
        volume_on.className = "visible";
    } else {
        volume_on.className = "oculto";
        volume_off.className = "visible";
    }
}

function mute() {
    if (video.volume > 0) {
        ultimo_vol = video.volume;

        video.volume = 0;
        rango_volumen.value = 0;

    } else {
        video.volume = ultimo_vol;
        rango_volumen.value = ultimo_vol * 100;
    }

    control_mute();
}

function volume() {
    video.volume = rango_volumen.value / 100;
    control_mute();
}

function volume_low() {

    if (video.volume >= 0.05) {
        video.volume -= 0.05;
        rango_volumen.value -= 5;
    } else {
        video.volume = 0;
        rango_volumen.value = 0;
        control_mute();
    }
}

function volume_high() {
    if (video.volume <= 0.95) {
        video.volume += 0.05;
        rango_volumen.value = Number(rango_volumen.value) + 5;
        control_mute();
    } else {
        video.volume = 1;
        rango_volumen.value = 100;
    }
}

//Evento para el tiempo transcurrido

video.addEventListener("timeupdate", tiempo_repro, true);


function seg_to_contador(seg) {

    if (isNaN(seg)) { //Controla que entre a 0
        seg = 0;
    }
    var contador = "00:00";
    
    if (seg < 3600) {
        contador = new Date(seg * 1000).toISOString().substring(14, 19)
    } else {
        contador = new Date(seg * 1000).toISOString().substring(11, 19)
    }

    return contador;
}


function tiempo_repro() {

    tiempo.innerHTML = seg_to_contador(video.currentTime) + "/" + seg_to_contador(video.duration);

    if (isNaN(video.duration)) { //Controla cuando no ha cargado el video
        rango_tiempo.value = 0;
    } else {
        rango_tiempo.value = video.currentTime / video.duration * 100;
    }


    rango_tiempo.step = 100 / video.duration;
}


//Duracion


function modificar_tiempo() {
    let nuevo_tiempo = rango_tiempo.value * video.duration / 100;
    video.currentTime = nuevo_tiempo;
    tiempo.innerHTML = seg_to_contador(nuevo_tiempo) + "/" + seg_to_contador(video.duration);

}