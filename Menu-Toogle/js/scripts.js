

$(document).ready(function () {

    //EJERCICIO 3

    /* Al pasar el ratón por encima de cada item de menú, este
    se resalte de alguna forma: cambie el color de fondo,
    cambie el estilo de fuente a negrita,…

    Cuando el ratón deje de estar sobre ese ítem debe volver
    a su estado original.

    Utiliza el método hover() para realizar esta tarea*/

    $("a.item-menu").hover(
        function () {

        $(this).css("background-color", "white");
        $(this).css("color", "black");

    }, function(){

        $(this).css("background-color", "#222625");
        $(this).css("color", "white");
    })
});


