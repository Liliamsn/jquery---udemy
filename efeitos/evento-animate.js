$(function() {
    $(".botao").on("click", function() {
        /*
        $(".div").animate({
            "margin-left": 100,
            "margin-top": 20,
            "border-radius": 75,
            "width": 500
        }, {
            duration: 1500,
            step: function() {
                console.log("Etapas");
            },
            start: function() {
                console.log("A animação começou");
            },
            complete: function() {
                console.log("A animação finalizou");
            }
        });
        */
       $(".botao").on("click", function() {

           $(".div").animate({
               "top": 200,
               "left": 400,
               "width": 50,
               "heigth": 25
           }, {
               duration: 1500,
               complete: function() {

                   $(".div").animate({
                       "top": 0,
                       "left": 0,
                       "width": 150,
                       "heigth": 150
                   }, 1500);
               }
           });
       });
    });
});