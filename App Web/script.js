// Variables
let Screen = document.getElementById("Pantalla");
let num1 = 0;
let num2 = 0;
let operador_actual = "";
let resultado = 0;

// Sirve para hacer clausula para no ingresar letras
// Solo se pueden usar Numeros, Puntos, Backspace y Delete
Screen.addEventListener('keydown', function(e) {
  const key = e.key;

  const isNumber = /^[0-9]$/.test(key);
  const isSpecialKey = ['Backspace', 'Delete', "Number", "."].includes(key);

  if (!isNumber && !isSpecialKey) {
    e.preventDefault();
  }
});

// Sirve para hacer una clausula de no ingresar letras
// Solo se pueden usar Numeros y puntos
Screen.addEventListener('input', function(e) {
  let valor = e.target.value;

  if (/[^0-9]/.test(valor)) {
    e.target.value = valor.replace(/[^0-9]/g, '.');
  }
});

// Mostrar que es lo que se vera en la pantalla al hacer click
function BtnPunto_Click(){
    Screen.value += ".";
}

function BtnLimpiar_Click(){
    Screen.value = "";
    num1 = 0;
    operador_actual = "";
}

function BtnEliminar_Click(){
    Screen.value = Screen.value.slice(0, -1) ;
}

function BtnCero_Click(){
    Screen.value += "0";
}

function BtnUno_Click(){
    Screen.value += "1";
}

function BtnDos_Click(){
    Screen.value += "2";
}

function BtnTres_Click(){
    Screen.value += "3";
}

function BtnCuatro_Click(){
    Screen.value += "4";
}

function BtnCinco_Click(){
    Screen.value += "5";
}

function BtnSeis_Click(){
    Screen.value += "6";
}

function BtnSiete_Click(){
    Screen.value += "7";
}

function BtnOcho_Click(){
    Screen.value += "8";
}

function BtnNueve_Click(){
    Screen.value += "9";
}

// Declarar los operadores
function BtnSumar_Click(){
    operador_actual = "+";
    num1 = parseFloat(Screen.value);
    Screen.value = "";
}

function BtnRestar_Click(){
    operador_actual = "-";
    num1 = parseFloat(Screen.value);
    Screen.value = "";
}

function BtnMultiplicar_Click(){
    operador_actual = "x";
    num1 = parseFloat(Screen.value);
    Screen.value = "";
}

function BtnDividir_Click(){
    operador_actual = "÷";
    num1 = parseFloat(Screen.value);
    Screen.value = "";
}

function BtnPotencia_Click(){
    operador_actual = "^";
    num1 = parseFloat(Screen.value);
    Screen.value = "";
}

// Hacer el claculo dependiendo de lo que hayas seleccionado
function  BtnIgual_Click(){
    num2 = parseFloat(Screen.value);

    switch(operador_actual){
        case "+":
            resultado = num1 + num2;
            Screen.value = "=" + resultado;
            break;
        case "-":
            resultado = num1 - num2;
            Screen.value =  "=" +  resultado;
            break;
        case "x":
            resultado = num1 * num2;
            Screen.value =  "=" + resultado;
            break;
        case "÷":
            if(num1 == 0){
                Screen.value = "Syntax Error";
            }
            else{
                resultado = num1 / num2;
                Screen.value =  "=" +  resultado;
            }
            break;
        case "^":
            resultado = Math.pow(num1, num2);
            Screen.value =  "=" +  resultado;
            break;
    }
}