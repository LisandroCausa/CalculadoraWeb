const pantalla = document.getElementById("pantalla");
let input = "";

function actualizarPantalla(){
    pantalla.setAttribute('value',input);
}

function presionar0(){
    input += '0';
    actualizarPantalla();
}

function presionar1(){
    input += '1';
    actualizarPantalla();
}

function presionar2(){
    input += '2';
    actualizarPantalla();
}

function presionar3(){
    input += '3';
    actualizarPantalla();
}

function presionar4(){
    input += '4';
    actualizarPantalla();
}

function presionar5(){
    input += '5';
    actualizarPantalla();
}

function presionar6(){
    input += '6';
    actualizarPantalla();
}

function presionar7(){
    input += '7';
    actualizarPantalla();
}

function presionar8(){
    input += '8';
    actualizarPantalla();
}

function presionar9(){
    input += '9';
    actualizarPantalla();
}

function presionarSuma(){
    if(!input.endsWith('+') && !input.endsWith('-')) input += '+';
    actualizarPantalla();
}

function presionarResta(){
    if(!input.endsWith('+') && !input.endsWith('-')) input += '-';
    actualizarPantalla();
}

function resultado(){
    let numeros = [];
    let operadores = [];

    let resultadoFinal = 0;

    let n = 0;

    console.log(input);
    if(input.startsWith('-')){
        operadores[0] = '-';
        input = input.substr(1,input.length)
    }else if(input.startsWith('+')){
        operadores[0] = '+';
        input = input.substr(1,input.length)
    }else{
        operadores[0] = '+';
    }
    console.log(input);

    for(i = 0; i < input.length; i++){
        numeros[i] = '';
        if(input[i] != '+' && input[i] != '-'){
            numeros[n] += input[i];
        }else{
            n++; 
            operadores[n] = input[i];

        }
        
    }
    console.log(numeros);
    console.log(operadores);

    for(i = 0; i < numeros.length; i++){
        if(numeros[i] != ''){
            if(operadores[i] == '+'){
                resultadoFinal += parseInt(numeros[i]);
            }else if(operadores[i] == '-'){
                resultadoFinal -= parseInt(numeros[i]);
            }else{
                i = numeros.length+1;
            }
        }else{
            i = numeros.length+1;
        }
    }

    input = resultadoFinal.toString();
    actualizarPantalla();
}

