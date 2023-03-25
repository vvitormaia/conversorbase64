alert('Programa para decodificacão de valores em base64');

let valorParaDecodificar = "";
let valorDecodificado = ""; 

function pegarValorDigitado() {
    valorParaDecodificar = document.getElementById('valor').value; 

        let valorDecodificado = atob(valorParaDecodificar); 

       //console.log(valorDecodificado);

    document.getElementById('valorDecodificado').innerHTML = valorDecodificado;
}