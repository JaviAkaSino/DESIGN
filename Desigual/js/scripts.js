$(document).ready(function () {

    $("div#hamburguesa").click(function () {
        $("ul#menu").toggle();
    })

    /*$(document).scroll(function () {

        $("header").css({
            "position": "fixed",
            "width": "98%",
            "background-color": "rgba(255, 255, 255, 0.75)",
        })

    })*/

    $("#contacto>input").blur(function () {

        if ($(this).val().length == 0) {
            $(this).siblings("span.error-form").html("Este campo no puede estar vacío")
            $(this).next("span.error-form").css("visibility", "visible")
        }

    })

    $("textarea#mensaje").keyup(function () {

        var restantes = 100 - $(this).val().length

        $("span#caracteres").html("Dispone de " + restantes + " caracteres")
    })

    $(window).resize(function () {
        $("ul#menu").css("display", "none");
    })

    $(function () {
        $("#fecha").stop().datepicker({ showAnim: "slideDown" });
    })

})