$(function() {
    $("#botao").on("click", function(e) {
        e.preventDefault();

        var txt = $("#nome").val();
        alert(txt);
    });
});

// e.type mostra o tipo de evento ativado
//e.target mostra qual elemento foi clicado