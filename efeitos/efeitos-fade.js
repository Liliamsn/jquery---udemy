$(function() {
    $(".botao").on("click", function() {
        /*
        //Desaparece
        $(".div").fadeOut();

        //Aparece
        $(".div").fadeIn();

        //O quanto deseja que ele desapareça
        $(".div").fadeTo("slow", 0.4);
        */

        $(".div").fadeToggle("slow");
    });
});