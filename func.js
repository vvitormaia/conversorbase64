alert('Programa para decodificacão de valores em base64 e contagem de vogais/consoantes a partir da entrada de um texto inserido pelo usuário');

let valorParaDecodificar = "";
let valorDecodificado = ""; 

function pegarValorDigitado() {
    valorParaDecodificar = document.getElementById('valor').value; 

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
    textoDigitado = document.getElementById('texto').value;
    //console.log(textoDigitado);

    textoDigitado = textoDigitado.toLowerCase();
    //console.log(textoDigitado);

    for (let i=0; i < textoDigitado.length; i++){
        if (textoDigitado.charAt(i) == "a" || textoDigitado.charAt(i) == "e" || textoDigitado.charAt(i) == "i" || textoDigitado.charAt(i) == "o" || textoDigitado.charAt(i) == "u"){
            numVogais++
        }
        else {
            numConsoantes++
        }
        document.getElementById('vogal').innerHTML =  'O número total de vogais é: ' + numVogais;
        document.getElementById('consoante').innerHTML = 'O número total de vogais é: ' + numConsoantes;
    }              
 }

