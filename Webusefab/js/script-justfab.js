$(document).ready(function () {


    //EJERCICIO 7
    /*Modifica el HTML y añade el código CSS necesario para que el menú 
    aparezca desde la izquierda y desplace al resto de la página hacia la 
    derecha. El resto de la página se debe oscurecer para simular que se 
    encuentra en segundo plano. Se debe poder ocultar el menú haciendo clic 
    en cualquier posición de la página.*/


    $("nav#menu-principal>span").click(function () {

        //$("ul#menu>li").children("ul").css({"display":"block"});

        $("ul#menu").stop(true, false).animate({ left: 0 }, "slow")

        $("div#desplazable").stop(true, false).animate({ left: "18rem" }, "slow")

        $("div#oscuro").stop(true, false).fadeIn(300)



    })


    $("div#oscuro").click(function () {

        $("ul#menu").stop(true, false).animate({ left: "-18rem" }, "slow")

        $("div#desplazable").stop(true, false).animate({ left: 0 }, "slow")

        $("div#oscuro").stop(true, false).fadeOut(300)

        //Vuelve a poner las flechitas hacia abajo
        $("ul#menu>li").siblings("li").stop(true, false).find("i").css({
            "transition": "transform 0.5s",
            'transform': 'rotate(' + 0 + 'deg)'
        }, 300);

        //Cierra todas las opcioens del submenu
        $("ul#menu>li").siblings("li").stop(true, false).children("ul").slideUp();

    })

    $("ul#menu>li").click(function () {

        $(this).children("ul").stop(true, false).slideToggle();
        $(this).siblings("li").stop(true, false).children("ul").slideUp();


        console.log($(this).find("i").css("transform"))

        if ($(this).find("i").css("transform") == "matrix(-1, 0, 0, -1, 0, 0)") {

            $(this).find("i").stop(true, false).css({
                "transition": "transform 0.5s",
                'transform': 'rotate(0deg)'
            }, 300);
        }



        $(this).find("i").stop(true, false).css({
            "transition": "transform 0.5s",
            'transform': 'rotate(180deg)'
        }, 300);

        $(this).siblings("li").stop(true, false).find("i").css({
            "transition": "transform 0.5s",
            'transform': 'rotate(0deg)'
        }, 300);
    })

    //EJERCICIO 8
    /*Modifica el HTML y añade el código CSS necesario para que al 
    posicionar el botón sobre un producto aparezca sobre el artículo un 
    botón de COMPRA.*/

    $("article.item").hover(

        function () {
            $(this).find("span.comprar").stop(true,false).fadeIn(300)
        },

        function () {
            $(this).find("span.comprar").stop(true,false).fadeOut(300)
        })

    //EJERCICIO 9
    /*Investiga como usar un Plugin para crear un slider y utilízalo en 
    esta web. */


})