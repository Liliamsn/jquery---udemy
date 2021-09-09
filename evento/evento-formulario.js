$(function() {
    $("#form").on("submit", function(e) {
        e.preventDefault();
    });

    /*Evento de seleção
    $("#nome").on("select", function() {
        alert("Algo foi selecionado!");
    });
    
    //Para aplicar o evento em dois campos, basta separar a identificação por vírgula
    $("#nome, #email").on("focus", function() {
        $(this).addClass("focado");
        console.log("O mouse está no campo");
    });
    
    $("#nome, #email").on("blur", function() {
        $(this).removeClass("focado")
        console.log("Saiu do campo");
    });
    */

    $("#idade").on("change", function() {
        alert($(this).val());
    });

});