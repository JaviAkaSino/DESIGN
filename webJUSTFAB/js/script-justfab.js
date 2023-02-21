$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {

            if ($("div#volverarriba").queue().length > 2)
                $("div#volverarriba").stop()

            $("div#volverarriba").fadeIn(300)

        } else {

            if ($("div#volverarriba").queue().length > 2)
                $("div#volverarriba").stop()

            $("div#volverarriba").fadeOut(300)
        }

        if ($("div#vovlerarriba").queue()) {
            $("div#vovlerarriba").stop(true)
        }

    })

    $("div#volverarriba").click(function () {
        $("body, html").animate({
            scrollTop: "0px"
        }, 300)
    })
    
})