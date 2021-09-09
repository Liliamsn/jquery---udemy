$(function(){
    $("#form").on("submit", function(e){
        e.preventDefault();

        //Serialize recolhe os dados e formata para ser enviado por ajax
        var txt = $(this).serialize();
        console.log(txt);
    });
});