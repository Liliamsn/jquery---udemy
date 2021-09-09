//Adicionando vários eventos com o on ou bind

$(function() {
    $("button").on("click", function() {
        alert("Clicou");
    });
    //Removendo evento com o off ou unbind
    $("button").off("click");
});