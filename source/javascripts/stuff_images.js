$( document ).ready(function() {
    $( ".more a" ).click(function(e) {
        e.preventDefault();

        var target = this.getAttribute("data-target");
        var new_src = this.href;

        $("li" + target + " img")
            .fadeOut(80, function() {
                $("li" + target + " img").attr("src", new_src);
            })
            .fadeIn(80);
    });
});

