$(function(){
    $(".botao").on("click", function() {
        $(".div").animate({
            "margin-left": 100,
            "margin-top": 20,
            "width": 500     
        }, 1500);
    });
});