var audio = document.getElementById("song");
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
    if (audio.currentTime != 0) {
        audio.pause();
        audio.currentTime = 0;
        boton_pause.className = "oculto";
        boton_play.className = "visible";
        rango_tiempo.value = 0;
    }

}

function restart() {
    audio.currentTime = 0;
    rango_tiempo.value = 0;
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

audio.addEventListener("timeupdate", tiempo_repro, true);


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

    tiempo.innerHTML = seg_to_contador(audio.currentTime) + "/" + seg_to_contador(audio.duration);

    if (isNaN(audio.duration)) { //Controla cuando no ha cargado el audio
        rango_tiempo.value = 0;
    } else {
        rango_tiempo.value = audio.currentTime / audio.duration * 100;
    }


    rango_tiempo.step = 100 / audio.duration;
}


//Duracion


function modificar_tiempo() {
    let nuevo_tiempo = rango_tiempo.value * audio.duration / 100;
    audio.currentTime = nuevo_tiempo;
    tiempo.innerHTML = seg_to_contador(nuevo_tiempo) + "/" + seg_to_contador(audio.duration);

}