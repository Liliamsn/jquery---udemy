/*Evento de scroll
$(function() {
    $("#div").on("scroll", function() {
        console.log("Scroll");
        $(this).css("background-color", "green");
    });
});
*/
//Evento de ajustamento da tela
$(function() {
    $(window).on("resize", function() {
        console.log("Mudou o tamanho da tela!");
    });
});