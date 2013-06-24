$( document ).ready(function() {
    $( ".more a" ).click(function(e) {
        e.preventDefault();

        var target = this.getAttribute("data-target");
        var new_src = this.href;

        $(".item" + target + " img")
            .fadeOut(80, function() {
                $(".item" + target + " img").attr("src", new_src);
            })
            .fadeIn(80);
    });
});

