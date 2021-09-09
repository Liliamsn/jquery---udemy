$(function() {
    $(".botao").on("click", function() {
        /*
        $(".div").slideDown();
        $(".div").slideToggle();
        */
       $(".div").slideUp("slow");
    });
    
    $(".clica").on("click", function() {
        $(".hellobar, .clica").slideUp();
    });
    
});