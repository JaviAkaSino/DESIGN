$(document).ready(function () {

    
    //EJERCICIO 7
    /*Modifica el HTML y añade el código CSS necesario para que el menú 
    aparezca desde la izquierda y desplace al resto de la página hacia la 
    derecha. El resto de la página se debe oscurecer para simular que se 
    encuentra en segundo plano. Se debe poder ocultar el menú haciendo clic 
    en cualquier posición de la página.*/


    $("nav#menu-principal>span").click(function () {

        $("ul#menu>li").children("ul").css({"display":"block"});

        $("ul#menu>li").siblings("li").stop(true, false).find("i").css({
            "transition": "transform 0.5s",
            'transform': 'rotate(' + 0 + 'deg)'
        }, 300);

        $("ul#menu").stop(true, false).css("left","0")



    })

    //EJERCICIO 8
    /*Modifica el HTML y añade el código CSS necesario para que al 
    posicionar el botón sobre un producto aparezca sobre el artículo un 
    botón de COMPRA.*/

    //EJERCICIO 9
    /*Investiga como usar un Plugin para crear un slider y utilízalo en 
    esta web. */


})