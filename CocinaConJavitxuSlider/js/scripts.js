function cierraMenu() {

    $("div#oscurece").stop(true, false).fadeOut(500)

    $("nav#menu-hamburguesa>div#menu-desplegable").css({
        "left": "-100%",
        "transition": "left ease-out 0.5s",
    })

    $("div#hamb-icon>span:nth-child(1)").css({
        "top": "25%",
        "transform": "rotate(0)",
        "transition": "top ease-out 0.25s, transform 0.25s",
        "transition-delay": "0.25s, 0s"

    })

    $("div#hamb-icon>span:nth-child(2)").css({
        "visibility": "visible",
        "transition": "visibility 0s",
        "transition-delay": "0.25s"
    })

    $("div#hamb-icon>span:nth-child(3)").css({
        "top": "75%",
        "transform": "rotate(0)",
        "transition": "top ease-out 0.25s, transform 0.25s",
        "transition-delay": "0.25s, 0s"
    })
}

$(document).ready(function () {

    //Evita que se agrande el div de la receta
    /*$("div.imagen-receta").css({
        "height": $("div.imagen-receta>a>picture.foto-receta>img").css("height")
    })*/

    $("div#hamb-icon").on({

        mouseenter: function () {
            $("div#hamb-icon>span").css({
                "background-color": "black"
            })
        },

        mouseleave: function () {
            $("div#hamb-icon>span").css({
                "background-color": "white"
            })
        },

        click: function () {

            if ($("nav#menu-hamburguesa>div#menu-desplegable").css("left") == "0px") { //Está abierto

                /*$("body").css({
                    "overflow-y": "scroll"
                })*/
                cierraMenu();

            } else { //Se abre

                /*$("body").css({
                    "overflow-y": "hidden"
                })*/

                $("div#oscurece").stop(true, false).fadeIn(300)

                $("nav#menu-hamburguesa>div#menu-desplegable").css({
                    "left": "0",
                    "transition": "left ease-out 0.5s",
                })

                $("div#hamb-icon>span:nth-child(1)").css({
                    "top": "50%",
                    "transform": "rotate(45deg)",
                    "transition": "top ease-out 0.25s, transform 0.5s",
                    "transition-delay": "0s, 0.25s"

                })

                $("div#hamb-icon>span:nth-child(2)").css({
                    "visibility": "hidden",
                    "transition": "visibility 0s",
                    "transition-delay": "0.25s"

                })

                $("div#hamb-icon>span:nth-child(3)").css({
                    "top": "50%",
                    "transform": "rotate(-45deg)",
                    "transition": "top ease-out 0.25s, transform 0.5s",
                    "transition-delay": "0s, 0.25s"

                })

            }


        }
    })

    $("div#oscurece").click(function () {

        $("body").css({
            "overflow-y": "scroll"
        })

        $("div#oscurece").stop(true, false).fadeOut(300)

        $("nav#menu-hamburguesa>div#menu-desplegable").css({
            "left": "-100%",
            "transition": "left ease-out 0.5s",
        })

        $("div#hamb-icon>span:nth-child(1)").css({
            "top": "25%",
            "transform": "rotate(0)",
            "transition": "top ease-out 0.25s, transform 0.25s",
            "transition-delay": "0.25s, 0s"

        })

        $("div#hamb-icon>span:nth-child(2)").css({
            "visibility": "visible",
            "transition": "visibility 0s",
            "transition-delay": "0.25s"
        })

        $("div#hamb-icon>span:nth-child(3)").css({
            "top": "75%",
            "transform": "rotate(0)",
            "transition": "top ease-out 0.25s, transform 0.25s",
            "transition-delay": "0.25s, 0s"
        })
    })

    $("svg#lupa").on({

        mouseenter: function () {
            $(this).css({
                "color": "black",
            }),

                $("svg#lupa>path").css({
                    "stroke": "black",
                })

            $("svg#lupa>polygon").css({
                "stroke": "black",
            })
        },

        mouseleave: function () {
            $(this).css({
                "color": "white"
            }),

                $("svg#lupa>path").css({
                    "stroke": "white",
                })

            $("svg#lupa>polygon").css({
                "stroke": "white",
            })
        },

        click: function () {

            cierraMenu();

            $("div#oscurece-todo").fadeIn(300)

            $("div#busqueda-em").fadeIn(300)
        }


    })

    $("button#boton-login").click(function () {

        $("div#oscurece-todo").stop(true, false).fadeIn(300)

        cierraMenu();

        $("div#login-em").fadeIn(500)

    })

    $("button#boton-registro").click(function () {

        $("div#oscurece-todo").stop(true, false).fadeIn(300)

        cierraMenu();

        $("div#registro-em").fadeIn(500)

    })

    $("button.receta-favs").on({

        click: function () {

            if ($(this).children("svg").css("color") == "rgb(0, 0, 0)") { //Si no está pulsado

                $(this).children("svg").css("color", "red")

                $(this).children("span").html("Quitar de favoritos")

            } else { //Si está pulsado

                $(this).children("svg").css("color", "black")

                $(this).children("span").html("Añadir a favoritos")
            }

        }



    })

    $("div.imagen-receta").on({




        mouseenter: function () {

            $(this).children("div.cont-acciones-receta").stop(true, false).fadeIn(200)
        },

        mouseleave: function () {

            if ($(window).width() > 1024) { //Reafirma que no se vayan las opcioens en movil y tablet

                $(this).children("div.cont-acciones-receta").stop(true, false).fadeOut(200)
            }
        },

    })

    $("div#oscurece-todo").click(function () {

        $(this).fadeOut(300)

        $(".emergente").fadeOut(300)
    })

    $("a#cesta-header").on({

        mouseenter: function () {
            $(this).children().css({
                "color": "black",
            })

            $(this).find("path").css({
                "stroke": "black",
            })

            $(this).find("polygon").css({
                "stroke": "black",
            })
        },

        mouseleave: function () {
            $(this).children().css({
                "color": "white",
            })

            $(this).find("path").css({
                "stroke": "white",
            })

            $(this).find("polygon").css({
                "stroke": "white",
            })
        },
    })

    $("button#user-header").on({

        mouseenter: function () {
            $(this).children().css({
                "color": "black",
            })

            $(this).find("path").css({
                "stroke": "black",
            })

            $(this).find("polygon").css({
                "stroke": "black",
            })
        },

        mouseleave: function () {
            $(this).children().css({
                "color": "white",
            })

            $(this).find("path").css({
                "stroke": "white",
            })

            $(this).find("polygon").css({
                "stroke": "white",
            })
        },

        click: function () {

            $("div#oscurece-todo").stop(true, false).fadeIn(300)

            cierraMenu();

            $("div#login-em").fadeIn(500)
        }
    })

    $("button#redir-registro").click(function(){

        $("div#login-em").fadeOut(0) 
        $("div#registro-em").fadeIn(500)        
    })

    $("button#redir-entrar").click(function(){

        $("div#registro-em").fadeOut(0) 
        $("div#login-em").fadeIn(500)        
    })

    $("button#rechazar-cookies").click(function(){

        $("div#cookies").fadeOut(200)
    })

    $("button#aceptar-cookies").click(function(){

        $("div#cookies").fadeOut(200)
    })

    $(window).on({

        resize: function () {

            cierraMenu();

            //Evita que se agrande el div de la receta
            $("div.imagen-receta").css({
                "height": $("div.imagen-receta>a>picture.foto-receta>img").css("height")
            })

            //Recalca la media-query del css (fallaba a veces)
            if ($(window).width() < 1024) { //Si baja de desktop, muestra botones

                $("div.cont-acciones-receta").css({
                    "display": "block"
                })
            } else { //Si vuelve a desktop, los quita
                $("div.cont-acciones-receta").css({
                    "display": "none"
                })
            }



        },
        scroll: function () {

            if ($(window).scrollTop() > 0) {

                $("header").stop().css({
                    "position": "fixed",
                    "width": "100%",
                })

                //Para que no de un salto miramos si movil, tablet...

                if ($(window).width() < 781) { //Si es movil

                    $("nav#menu-horizontal").stop().css({
                        "margin-top": "8vh"
                    })

                } else if ($(window).width() > 1024) { //Si es escritorio

                    $("nav#menu-horizontal").stop().css({
                        "margin-top": "12vh"
                    })

                } else { //Es tablet
                    $("nav#menu-horizontal").stop().css({
                        "margin-top": "20vh"
                    })

                }



            } else {
                $("header").stop().css({

                    "position": "relative",
                })

                $("nav#menu-horizontal").stop().css({
                    "margin-top": "0"
                })

            }
        }

    })


/**********SLIDER**************/

var SliderModule = (function () {
    var pb = {};

    pb.elslider = $('#slider');

    pb.items = {
        panels: pb.elslider.find('.slider-wrapper > li'),
    }

    var SliderInterval,
        currentSlider = 0,
        nextSlider = 1,
        lengthSlider = pb.items.panels.length;

    //Constructor del slider
    pb.init = function (settings) {

        var loscontroles='';

        SliderInit();

        for (var i=0; i<lengthSlider; i++){
            if (i==0){
                loscontroles += "<li class='active'></li>";
            } else{
                loscontroles+= "<li></li>"
            }

        }

            $("#control-buttons").html(loscontroles);

        

        $("#control-buttons li").click(function () {

            //No se recargue la misma
            if (currentSlider !== $(this).index()) {
                cambiarPanel($(this).index())
            }
        })
    }

    var SliderInit = function () {
        SliderInterval = setInterval(pb.startSlider, 3000);
    }

    pb.startSlider = function () {
        var paneles = pb.items.panels;
        var controles = $('#control-buttons li');
        //Controla que no se salga del array
        if (nextSlider >= lengthSlider) {
            nextSlider = 0;
            currentSlider = lengthSlider - 1
        }

        //Efectos
        controles.removeClass("active");
        controles.eq(nextSlider).addClass("active");


        paneles.eq(currentSlider).fadeOut('slow');
        paneles.eq(nextSlider).fadeIn('slow')
        console.log(nextSlider);

        currentSlider = nextSlider;
        nextSlider += 1;
    }

    var cambiarPanel = function (indice) {

        clearInterval(SliderInterval);

        var paneles = pb.items.panels;
        var controles = $('#control-buttons li');


        if (indice >= lengthSlider) {
            indice = 0;
        } else if (indice < 0) {
            indice = lengthSlider - 1
        }

        //Efectos

        controles.removeClass("active");
        controles.eq(indice).addClass("active");

        paneles.eq(currentSlider).fadeOut('slow');
        paneles.eq(indice).fadeIn('slow');

        currentSlider = indice;
        nextSlider = indice + 1

        SliderInit();
    }

    $('section#slider ul li img, div.control-slider, div.caption').hover(function () {
        clearInterval(SliderInterval);
        $('div.control-slider').stop().fadeIn();
    }, function () {
        SliderInit();
        $('div.control-slider').stop().fadeOut();
    }

   
);

$('div#control-derecha').click(function(){
    var paneles = pb.items.panels;
    var controles = $('img.botones');
    if (nextSlider >= lengthSlider) {
        nextSlider = 0;
        currentSlider = lengthSlider - 1;
    }

    //Efectos
    //Eliminamos la clase en los controles
    controles.removeClass('active');
    //Añadimos la clase al control del panel seleccionado
    controles.eq(nextSlider).addClass('active');
    //Efectos de transición
    paneles.eq(currentSlider).stop().fadeOut('slow');
    paneles.eq(nextSlider).stop().fadeIn('slow');

    //Actualizamos las variables
    currentSlider = nextSlider;
    nextSlider += 1;
});

$('div#control-izquierda').click(function(){
    var paneles = pb.items.panels;
    var controles = $('img.botones');
    var previusSlider = currentSlider-1;
    //Controlamos si nos encontramos en el último panel
    if (previusSlider == -1) {
        currentSlider = 0;
        previusSlider = lengthSlider - 1;
    }

    //Efectos
    //Eliminamos la clase en los controles
    controles.removeClass('active');
    //Añadimos la clase al control del panel seleccionado
    controles.eq(previusSlider).addClass('active');
    //Efectos de transición
    paneles.eq(currentSlider).stop().fadeOut('slow');
    paneles.eq(previusSlider).stop().fadeIn('slow');

    //Actualizamos las variables
    currentSlider = previusSlider;
    previusSlider -= 1;
});

    return pb;

}());

SliderModule.init();
}
)