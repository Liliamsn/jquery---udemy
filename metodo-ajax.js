$(function(){
    $("#form").on("submit", function(e){

        e.preventDefault();
        
        var txt = $(this).serialize();
        console.log(txt);
        
        $.ajax({
            //tipo de requisição
            type:'GET',
            //Qual endereço de envio
            url:'ajax.php',
            data:txt,
            success: function(resultado){
                $(".div").html("Resultado: " + resultado);
            },
            error: function(){
                alert("Ocorreu um erro");
            }
        });
    });
});