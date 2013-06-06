$( document ).ready(function() {
    var origin_text = $( ".message" ).html();
    $( ".avatar" ).click(function() {
        $( ".message" ).html( "Don't Poke Me! >///<<br>Hire Me!" );
        setTimeout(function() {
          $( ".message" ).html( origin_text );
        }, 4000);
        $( ".avatar-container" ).addClass("ani-state");
        setTimeout(function() {
          $( ".avatar-container" ).removeClass("ani-state");
        }, 4000);
        return false;
    });
});
