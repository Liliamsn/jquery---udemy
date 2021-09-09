$(function(){
    $(".botao1").on("click", function(){
        $(".div").animate({
            "margin-top": "+=40"
        });
    });

    $(".botao2").on("click", function(){
        $(".div").animate({
            "margin-left": "+=40"
        });
    });
});