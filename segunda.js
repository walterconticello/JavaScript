//Tarea 

//Tarea 
//Quiz Javascript - Introducción

//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.

let operacion = 2 + 3; 
console.log(operacion); 

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.

let num1 = 5;
let num2 = 10;

console.log(num1 == num2);

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.

let num3 = 10;
let num4 = 5;
console.log(num3 != num4);

// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.

let num5 = 10;
num5 += 5;
console.log(num5);

// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.

let num6 = 10;
num6 -= 3;
console.log(num6);

// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.

let texto = "Hola ";
console.log(texto + "Mundo");

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.

let booleano1 = true;
let booleano2 = false;
console.log(booleano1 && booleano2);

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.

let booleano3 = true;
let booleano4 = false;
console.log(booleano3 || booleano4);

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.

let num7 = 10;
let num8 = 5;
console.log(num7 > num8);

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.

let num9 = 10;
let num10 = 5;
console.log(num9 <= num10);

//Crea una funcion Sumar que reciba dos numeros y retorne la suma de ambos.

function sumar(num1, num2){
    return num1 + num2;
}

console.log(sumar(5, 7));

//Crea una funcion Restar que reciba dos numeros y retorne la resta de ambos.

function restar(num1, num2){
    return num1 - num2;
}

console.log(restar(7, 5));

//Crea una funcion Multiplicar que reciba dos numeros y retorne la multiplicacion de ambos.

function multiplicar(num1, num2){
    return num1 * num2;
}

console.log(multiplicar(5, 7));
