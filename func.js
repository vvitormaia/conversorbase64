alert('Programa para decodificacão de valores em base64 e contagem de vogais/consoantes a partir da entrada de um texto inserido pelo usuário');

let valorParaDecodificar = "";
let valorDecodificado = ""; 

function pegarValorDigitado() {
    valorParaDecodificar = document.getElementById('valor').value; 

        //atob é uma funcao que decodifica o conteudo inserido para texto 
        let valorDecodificado = atob(valorParaDecodificar); 

       //console.log(valorDecodificado);

    document.getElementById('valorDecodificado').innerHTML = valorDecodificado;
}

//testes decodificacao base 64

//entra: SGVsbG8gV29ybGQ=
//retorna: (en)Hello World (pt-br)Olá Mundo 

//entra: U2VyIGZlbGl6IMOpIGRlaXhhciBkZSBzZXIgdsOtdGltYSBkb3MgcHJvYmxlbWFzIGUgc2UgdG9ybmFyIGF1dG9yIGRhIHByw7NwcmlhIGhpc3TDs3JpYS4gw4kgYXRyYXZlc3NhciBkZXNlcnRvcyBmb3JhIGRlIHNpLCBtYXMgc2VyIGNhcGF6IGRlIGVuY29udHJhciB1bSBvw6FzaXMgbm8gcmVjw7RuZGl0byBkYSBzdWEgYWxtYS4gw4kgYWdyYWRlY2VyIGEgRGV1cyBhIGNhZGEgbWFuaMOjIHBlbG8gbWlsYWdyZSBkYSB2aWRhLiBTZXIgZmVsaXogw6kgbsOjbyB0ZXIgbWVkbyBkb3MgcHLDs3ByaW9zIHNlbnRpbWVudG9zLg==
//retorna: Ser feliz é deixar de ser vítima dos problemas e se tornar autor da própria história. É atravessar desertos fora de si, mas ser capaz de encontrar um oásis no recôndito da sua alma. É agradecer a Deus a cada manhã pelo milagre da vida. Ser feliz é não ter medo dos próprios sentimentos.

let textoDigitado = "";
let numVogais = 0;
let numConsoantes = 0; 

function contarVogaisConsoantes() {
    numVogais = 0;
    numConsoantes = 0;

    textoDigitado = document.getElementById('texto').value;
    //console.log(textoDigitado);

    //toLowerCase transforma todo texto inserido em minusculo, necessaário pois o javascript diferencia as letras maiusculas e minusculas 
    textoDigitado = textoDigitado.toLowerCase();
    //console.log(textoDigitado);

    for (let i=0; i < textoDigitado.length; i++){
        if (textoDigitado.charAt(i) == "a" || textoDigitado.charAt(i) == "e" || textoDigitado.charAt(i) == "i" || textoDigitado.charAt(i) == "o" || textoDigitado.charAt(i) == "u"){
            numVogais++
        }
        if (textoDigitado.charAt(i) == "b" || textoDigitado.charAt(i) == "c" || textoDigitado.charAt(i) == "d" || textoDigitado.charAt(i) == "f" || textoDigitado.charAt(i) == "g" || textoDigitado.charAt(i) == "h" || textoDigitado.charAt(i) == "j" || textoDigitado.charAt(i) == "k"  || textoDigitado.charAt(i) == "l" || textoDigitado.charAt(i) == "m" || textoDigitado.charAt(i) == "n" || textoDigitado.charAt(i) == "p" || textoDigitado.charAt(i) == "q" || textoDigitado.charAt(i) == "r" || textoDigitado.charAt(i) == "s" || textoDigitado.charAt(i) == "t" || textoDigitado.charAt(i) == "v" || textoDigitado.charAt(i) == "x" || textoDigitado.charAt(i) == "y" || textoDigitado.charAt(i) == "z" ){
            numConsoantes++
        }
        document.getElementById('vogal').innerHTML =  'O número total de vogais é: ' + numVogais;
        document.getElementById('consoante').innerHTML = 'O número total de consoantes é: ' + numConsoantes;
    }              
 }

 //há dois if no código por conta de que com ELSE, os espacos e números acabavam sendo inseridos no contador numConsoantes++

  

