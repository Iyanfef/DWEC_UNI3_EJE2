//sacamos los elementos y los guardamos en variables

var boton = document.getElementById("btnBoton");
console.log(boton.innerText);
var txaEntrada = document.getElementById("txaEntrada");

var pSalida = document.getElementById("pSalida");

//añadimos un event listener al boton
boton.addEventListener("click", function(){
    //obtenemos el contenido del textarea
    var texto = txaEntrada.value;
    //actualizamos el texto del parrafo con el valor del textarea 
    pSalida.textContent = texto;
});