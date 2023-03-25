alert('Programa para decodificacão de valores em base64');

let valorParaDecodificar = "";
let valorDecodificado = ""; 

function pegarValorDigitado() {
    valorParaDecodificar = document.getElementById('valor').value; 

        let valorDecodificado = atob(valorParaDecodificar); 

       //console.log(valorDecodificado);

    document.getElementById('valorDecodificado').innerHTML = valorDecodificado;
}



//testes

//entra: SGVsbG8gV29ybGQ=
//retorna: (en)Hello World (pt-br)Olá Mundo 

//entra: U2VyIGZlbGl6IMOpIGRlaXhhciBkZSBzZXIgdsOtdGltYSBkb3MgcHJvYmxlbWFzIGUgc2UgdG9ybmFyIGF1dG9yIGRhIHByw7NwcmlhIGhpc3TDs3JpYS4gw4kgYXRyYXZlc3NhciBkZXNlcnRvcyBmb3JhIGRlIHNpLCBtYXMgc2VyIGNhcGF6IGRlIGVuY29udHJhciB1bSBvw6FzaXMgbm8gcmVjw7RuZGl0byBkYSBzdWEgYWxtYS4gw4kgYWdyYWRlY2VyIGEgRGV1cyBhIGNhZGEgbWFuaMOjIHBlbG8gbWlsYWdyZSBkYSB2aWRhLiBTZXIgZmVsaXogw6kgbsOjbyB0ZXIgbWVkbyBkb3MgcHLDs3ByaW9zIHNlbnRpbWVudG9zLg==
//retorna: Ser feliz é deixar de ser vítima dos problemas e se tornar autor da própria história. É atravessar desertos fora de si, mas ser capaz de encontrar um oásis no recôndito da sua alma. É agradecer a Deus a cada manhã pelo milagre da vida. Ser feliz é não ter medo dos próprios sentimentos.