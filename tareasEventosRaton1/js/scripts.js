

$(document).ready(function () {

    //EJERCICIO 1

    /* Al posicionar el ratón sobre una imagen aparezca su texto
    explicativo en la parte inferior.

    $("article>img").mouseenter(function () {
        $(this).siblings("article>h3").toggle();
    })

    /* Al quitar el ratón de la imagen este texto debe
    desaparecer.

    $("article>img").mouseleave(function () {
        $(this).siblings("article>h3").toggle();
    })

    /*Una vez hecho esto, programa la misma funcionalidad con
    el método hover().

    $("article>img").hover(function () {
        $(this).siblings("article>h3").toggle();
    })

    //EJERCICIO 2

    /* Al hacer clic sobre una imagen se muestre su titular.

    $("article>img").click(function () {
        $(this).siblings("article>h3").css("display", "block");   
    })

    /* Para volver a ocultar el titular será necesario hacer doble
    clic sobre la imagen


    $("article>img").dblclick(function () {
        $(this).siblings("article>h3").css("display", "none");
    })

    //EJERCICIO 4

    /*Al pulsar y soltar una tecla determinada del teclado (por
    ejemplo, la tecla «d»), se desplieguen los titulares de todas
    las imágenes*/

    $(document).keypress(function (event) {
        event.preventDefault();
        if (event.which == 100) {
            $("img").siblings("article>h3").toggle();
        }
        //$("#tecla").html(event.which + ": " + String.fromCharCode(event.which))
    })

});


