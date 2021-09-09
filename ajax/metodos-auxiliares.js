$(function() {
    $("button").on("click", function(){
        /*
        Estamos fazendo uma requisição
        Primeiro seleciona a div que deseja adicionar o arquivo e em seguida o método que irá carregá-lo na página
        $.get("./teste.html", function(t){
            //O parâmetro t irá guardar a informação
            $(".div1").html(t);
            
        });
        */
        $(".div1").load("./teste.html");
    });
});