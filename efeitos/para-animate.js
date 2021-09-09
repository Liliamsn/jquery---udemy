$(function(){
    $(".botao1").on("click", function() {
        $(".div").animate({
            "margin-left": 500
        }, 1500);
    });
    $(".botao2").on("click", function() {
        $(".div").stop();
    });
});