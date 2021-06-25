const pantalla = document.getElementById("pantalla");
let input = "";

function actualizarPantalla(){
    pantalla.setAttribute('value',input);
    pantalla.style.fontSize = 67 - input.length + 'px';
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


function presionarBackspace(){
    input = input.slice(0,-1);
    actualizarPantalla();
}

function presionarDivision(){
    if(!input.endsWith('+') && !input.endsWith('-') && !input.endsWith('x') && !input.endsWith('÷')) input += '÷';
    actualizarPantalla();
}

function presionarMultiplicacion(){
    if(!input.endsWith('+') && !input.endsWith('-') && !input.endsWith('x') && !input.endsWith('÷')) input += 'x';
    actualizarPantalla();
}


function presionarSuma(){
    if(!input.endsWith('+') && !input.endsWith('-') && !input.endsWith('x') && !input.endsWith('÷')) input += '+';
    actualizarPantalla();
}

function presionarResta(){
    if(!input.endsWith('+') && !input.endsWith('-') && !input.endsWith('x') && !input.endsWith('÷')) input += '-';
    actualizarPantalla();
}


function resultado(){
    let numeros = [];
    let operadores = [];

    let resultadoFinal = 0;

    let n = 0;

    if(input.startsWith('-')){
        operadores[0] = '-';
        input = input.substr(1,input.length)
    }else if(input.startsWith('+') || input.startsWith('x') || input.startsWith('÷')){
        operadores[0] = '+';
        input = input.substr(1,input.length)
    }else{
        operadores[0] = '+';
    }

    for(i = 0; i < input.length; i++){
        numeros[i] = '';
        if(input[i] != '+' && input[i] != '-' && input[i] != 'x'  && input[i] != '÷'){
            numeros[n] += input[i];
        }else{
            n++;
            operadores[n] = input[i];

            if(operadores[n-1] == '-'){
                operadores[n-1] = '+';
                numeros[n-1] = -numeros[n-1];
            }
        }
        
    }

    //HACER DIVISION
    for(i = 0; i < numeros.length; i++){
        if(operadores[i] == '÷'){

            numeros[i-1] = numeros[i-1] / numeros[i];
            
            numeros.splice(i,1);
            operadores.splice(i,1);
            i--;

        }else if(operadores[i] == 'undefined'){
            i = numeros.length;
        }
    }

    //HACER MULTIPLICACION ANTES
    for(i = 0; i < numeros.length; i++){
        if(operadores[i] == 'x'){


            numeros[i-1] = numeros[i] * numeros[i-1];


            numeros.splice(i,1);
            operadores.splice(i,1);
            i--;
        }else if(operadores[i] == 'undefined'){
            i = numeros.length;
        }
            console.log('i: '+i)
            console.log(numeros);
            console.log(operadores);

    }
   

    console.log('---');
    //SUMA - RESTA
    for(i = 0; i < numeros.length; i++){
        if(numeros[i] != ''){
            if(operadores[i] == '+'){
                resultadoFinal += parseFloat(numeros[i]);
            }else if(operadores[i] == '-'){
                resultadoFinal -= parseFloat(numeros[i]);
            }else if(operadores[i] == 'x' || operadores[i] == '÷'){
                //NADA
            }else{
                i = numeros.length;
            }
        }else{
            i = numeros.length+1;
        }
    }

    console.log(numeros);
    console.log(operadores); 
    input = resultadoFinal.toString();
    actualizarPantalla();
}

