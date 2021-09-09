$(function() {
    /*
    $(".botao").on("mousedown", function() {
        console.log("Apertou o mouse");
    });
    $(".botao").on("mouseup", function() {
        console.log("Parou de apertar");
    });
    
    $(".botao").on("mousemove", function() {
        console.log("Moveu o mouse")
    });
    */
    
   /*
    $(".botao").on("mouseover", function() {
        $(this).addClass("mouse-dentro");
        console.log("Clicou dentro");
        
    });
    
    $(".botao").on("mouseout", function() {
        $(this).removeClass("mouse-dentro");
        console.log("Clicou fora");
    });
    
    //Geralmente utilizado em sistemas
    $(".botao").on("dblclick", function() {
        alert("Clicou duas vezes");
    });
    */

    $(".botao").on("contextmenu", function(e) {
        e.preventDefault();

        alert("Clicou com o botão direito");
    });
});