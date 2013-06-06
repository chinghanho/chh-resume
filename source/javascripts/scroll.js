$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
            $("#back_to_top").fadeIn(250);
        } else {
            $("#back_to_top").fadeOut(250);
        }
    });

    $("#scroll").on("click", "#back_to_top", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
});
