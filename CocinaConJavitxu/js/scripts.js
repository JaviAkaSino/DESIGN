$(document).ready(function () {

    $("label#hamb-icon").on({

        mouseenter: function () {
            $("label#hamb-icon>svg>rect").css({
                "stroke-width": "50"
            })
        },

        mouseleave: function () {
            $("label#hamb-icon>svg>rect").css({
                "stroke-width": "10"
            })
        },

        click: function () {

            if ($("nav#menu-hamburguesa>div#menu-desplegable").css("left") == "0px") { //Está abierto

                $("nav#menu-hamburguesa>div#menu-desplegable").css({
                    "left": "-100%",
                    "transition": "left ease-out 0.5s",
                })

                $("label#hamb-icon>svg>rect:nth-child(1)").css({
                    "y": "50",
          
                })

                $("label#hamb-icon>svg>rect:nth-child(2)").css({
                    "color": "white",
                    "stroke":"white"
                })

                $("label#hamb-icon>svg>rect:nth-child(3)").css({
                    "y": "430",
                    
                })

            }
            else { //Está cerrado


                $("nav#menu-hamburguesa>div#menu-desplegable").css({
                    "left": "0",
                    "transition": "left ease-out 0.5s",
                })

                $("label#hamb-icon>svg>rect:nth-child(1)").css({
                    "y": "240",
          
                })

                $("label#hamb-icon>svg>rect:nth-child(2)").css({
                    "color": "transparent",
                    "stroke":"transparent"
                })

                $("label#hamb-icon>svg>rect:nth-child(3)").css({
                    "y": "240",
                    
                })

            }


        }
    })



}
)