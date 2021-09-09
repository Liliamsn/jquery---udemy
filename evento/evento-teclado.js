$(function() {
    /*
    $(window).on("keypress", function() {
        console.log("Clicou");
    });
    */

    $("#nome").on("keyup",function(e) {
        if(e.keyCode == 13) {
            var txt = $(this).val();
            console.log(txt);
            $(this).val("");
        }
    });
});

//Saber qual tecla foi apertada, keyCode