$(document).ready(function () {

    $("input").focusin(function () {
        $(this).css({
            "box-shadow": "0px 4px 4px #FFAA00",
            "outline": "1px solid #FF600A",
            "border": "1px solid #FF600A",
        });
    })

    $("input").focusout(function () {
        $(this).css({
            "box-shadow": "none",
            "outline": "black",
            "border": "1px solid black",
        });
    })

});