$(document).ready(function () {

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

                $("body").css({
                    "overflow-y": "scroll"
                })

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

            } else { //Está cerrado

                $("body").css({
                    "overflow-y": "hidden"
                })

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
    })

    $("svg#cesta").on({

        mouseenter: function () {
            $(this).css({
                "color": "black",
            }),

                $("svg#cesta>path").css({
                    "stroke": "black",
                })

            $("svg#cesta>polygon").css({
                "stroke": "black",
            })
        },

        mouseleave: function () {
            $(this).css({
                "color": "white"
            }),

                $("svg#cesta>path").css({
                    "stroke": "white",
                })

            $("svg#cesta>polygon").css({
                "stroke": "white",
            })
        },
    })


    $(window).on({

        resize: function () {

            $("body").css({
                "overflow-y": "scroll"
            })

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

            $("div.imagen-receta").css({
                "background-color":"black",
                "height": $("div.imagen-receta>a>picture.foto-receta>img").css("height")
            })
        }

    })


}
)