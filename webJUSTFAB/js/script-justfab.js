$(document).ready(function () {

    $("ul#menu").css("display","none");
    
    //EJERCICIO 1
    /*Al hacer varias líneas de scroll en el documento se debe mostrar el 
    botón VOLVER ARRIBA. Al volver a la parte superior de la página el botón 
    se oculta. Al hacer clic sobre el botón nos vamos a la parte superior 
    de la página. Todo se hace con efectos.*/

    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {

            /*if ($("div#volverarriba").queue().length > 2)
                $("div#volverarriba").stop()*/

            $("div#volverarriba").stop().fadeIn(300)

        } else {

            $("div#volverarriba").stop().fadeOut(300)
        }

    })

    $("div#volverarriba").click(function () {
        $("body, html").animate({
            scrollTop: "0px"
        }, 300)
    })


    //EJERCICIO 2
    /*El menú se debe mostrar y ocultar utilizando efectos y debes 
    controlar la acumulación de efectos en la cola.*/

    $("nav#menu-principal>span").click(function () {

        $("ul#menu>li").children("ul").slideUp(200);

        $("ul#menu>li").siblings("li").stop(true, false).find("i").css({
            "transition": "transform 0.5s",
            'transform': 'rotate(' + 0 + 'deg)'
        }, 300);


        $("ul#menu").stop(true, false).slideToggle(600)



    })

    //EJERCICIO 3
    /*Cada opción del submenú se muestra con un efecto y al mostrar una se 
    ocultan todas las demás.*/

    $("ul#menu>li").click(function () {

        $(this).children("ul").stop(true, false).slideToggle();
        $(this).siblings("li").stop(true, false).children("ul").slideUp();

    })

    //EJERCICIO 4
    /*En el menú desplegable, cambiar el icono de > (en la web la punta de 
    flecha apunta hacia abajo) por otro similar con la punta de la 
    flecha hacia arriba cuando una opción del menú principal esté 
    desplegada.*/

    $("ul#menu>li").click(function () {

        $(this).find("i").stop(true, false).css({
            "transition": "transform 0.5s",
            'transform': 'rotate(180deg)'
        }, 300);

        $(this).siblings("li").stop(true, false).find("i").css({
            "transition": "transform 0.5s",
            'transform': 'rotate(0deg)'
        }, 300);

    })

    //EJERCICIO 5
    /*Cuando haces un poco de scroll sobre la página debe aparecer con 
    el efecto que consideres más apropiado, la cabecera de la página fijada 
    en la parte superior.*/

    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {

            $("header#top").stop().css({
                "position": "fixed",
                "width": "100%",
                "background-color": "white",
                "opacity": "85%",
            })


        $("ul#menu").slideUp()



        } else {
            $("header#top").stop().css({

                "position": "absolute",
                "opacity": "100%",
            })

        }

    })

    //EJERCICIO 6
    /*Al posicionar el ratón sobre la imagen de un producto debe aparecer 
    otra imagen del mismo producto. Cuando el ratón deja de estar sobe la 
    imagen aparece la imagen inicial.*/

    //EJERCICIO 7
    /*Modifica el HTML y añade el código CSS necesario para que el menú 
    aparezca desde la izquierda y desplace al resto de la página hacia la 
    derecha. El resto de la página se debe oscurecer para simular que se 
    encuentra en segundo plano. Se debe poder ocultar el menú haciendo clic 
    en cualquier posición de la página.*/

    //EJERCICIO 8
    /*Modifica el HTML y añade el código CSS necesario para que al 
    posicionar el botón sobre un producto aparezca sobre el artículo un 
    botón de COMPRA.*/

    //EJERCICIO 9
    /*Investiga como usar un Plugin para crear un slider y utilízalo en 
    esta web. */

})