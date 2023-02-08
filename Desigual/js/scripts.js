$(document).ready(function () {

    $("div#hamburguesa").click(function () {
        $("ul#menu").toggle();
    })

    $(document).scroll(function () {

        $("header").css({
            "position": "fixed",
            "width": "98%",
            "background-color": "rgba(255, 255, 255, 0.75)",
        })

    })

    $(window).resize(function(){
        $("ul#menu").css("display", "none");
    })

})