/*
$(function() {
    $("div").html("Novo texto da div");
});
*/

//estilizando o conteúdo do botão

$(function() {
    $("#teste").find("button").addClass("estilo");

});

//Modificar o conteudo

$(function() {
    $("#teste").find("button").html("Novo conteúdo do botão");
});

//Retornar o conteúdo dentro da tag

$(function() {
    console.log($("#teste").find("button").html());
});


