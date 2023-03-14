$(document).ready(function () {

    $("div#chat").fadeIn(500)

    $("nav#barra-social").fadeIn(500)


    $("div#hamburger").click(function () {



        console.log($("#menu-toggle").css("display"))

        if ($("#menu-toggle").css("display") == "block") {
            $("ul#menu-toggle").stop(true).slideToggle();
            $("div#hamburger > span:nth-child(2)").stop(true).animate({ "width": "1.37rem", "background-color": "black" });
            $(".line-ham").animate({ "background-color": "black" });

        } else {
            $("ul#menu-toggle").stop(true).slideToggle();
            $("div#hamburger > span").stop(true).animate({ "width": "1.87rem", "background-color": "#FF600A" });
            $(".line-ham").animate({ "background-color": "#FF600A" });
        }



    })

    $("ul#menu-toggle>li:nth-child(3) a").click(function () {


        if ($(this).siblings("ul").css("display") == "block") {
            $(this).siblings("ul").animate({ left: "-50vw" })
            $(this).siblings("ul").slideToggle()
            $(this).siblings("span").html("+")

        } else {
            $(this).siblings("ul").slideToggle()
            $(this).siblings("ul").animate({ left: "0" })
            $(this).siblings("span").html("-")
        }

    })


    $("header#header-chat1").click(function(){

        $(this).css("display","none")
        $(this).siblings("header").css("display","flex")
        $("div#window-chat").slideToggle()
    })

    $("header#header-chat2>span").click(function(){

        $("header#header-chat2").css("display","none")
        $("header#header-chat1").css("display","flex")
        $("div#window-chat").slideToggle()
    })


        $("article.producto").mouseenter(function () { 
            $(this).children("a").css("display","flex")
        });

        $("article.producto").mouseleave(function () { 
            $(this).children("a").slideUp(300)
        });
    
$("#window-chat>input").blur(function(){

    if ($(this).val().length ==0){
        $(this).siblings("span").html("Este campo no puede estar vacío")
        $(this).next("span").css("visibility", "visible")
    }
    
})

$("textarea#mensaje").keyup(function(){

    var restantes = 100 - $(this).val().length

    $("span#info-caracteres").html("Dispone de "+restantes+" caracteres")
})


    $(window).resize(function(){

        $(".line-hamb").removeAttr("style")
        $("ul#menu-toggle").removeAttr("style")
    })

    $(window).scroll(function () {


        if ($("#menu-toggle").css("display") == "block") {

            $("ul#menu-toggle").stop(true).slideToggle();
            $("div#hamburger > span:nth-child(2)").animate({ "width": "1.37rem", "background-color": "black" });
            $(".line-ham").animate({ "background-color": "black" });

        }

        if ($(window).scrollTop() > 0) {

            $("a#go-up").stop().fadeIn(300)

            $("header#home-header").css({
                position: "fixed",
                opacity: "80%",
                width: "100%"
            })


        } else {

            $("a#go-up").stop().fadeOut(300)
            $("header#home-header").css({
                position: "relative",
                opacity: "80%"
            })
        }

    })

    $("a#go-up").click(function () {
        $("body, html").animate({
            scrollTop: "0px"
        }, 300)
    })
});