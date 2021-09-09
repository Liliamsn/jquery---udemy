//Atribui o jQuery à outra variável
/*
var $j = jQuery.noConflict();

$j(document).ready(function() {
    alert("Página carregada");
});
*/

//Evitando o conflito de forma nativa

jQuery(document).ready(function() {
    alert("funcionando de forma nativa");
});
