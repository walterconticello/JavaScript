// let dia = prompt("Ingrese un dia de la semana").toLocaleLowerCase().trim();
// let imprimir = true;

// switch (dia) {
// 	case "lunes":
// 		console.log("lunes");
// 		imprimir = false;
// 		break;
// 	case "martes":
// 		console.log("lunes");
// 		console.log("martes");
// 		imprimir = false;
// 		break;
// 	case "miercoles":
// 		console.log("lunes");
// 		console.log("martes");
// 		console.log("miercoles");
// 		imprimir = false;
// 		break;
// 	case "jueves":
// 		console.log("lunes");
// 		console.log("martes");
// 		console.log("miercoles");
// 		console.log("jueves");
// 		imprimir = false;
// 		break;
// 	case "viernes":
// 		console.log("lunes");
// 		console.log("martes");
// 		console.log("miercoles");
// 		console.log("jueves");
// 		console.log("viernes");
// 		imprimir = false;
// 		break;
// 	case "sabado":
// 		console.log("lunes");
// 		console.log("martes");
// 		console.log("miercoles");
// 		console.log("jueves");
// 		console.log("viernes");
// 		console.log("sabado");
// 		imprimir = false;
// 		break;
// 	case "domingo":
// 		console.log("lunes");
// 		console.log("martes");
// 		console.log("miercoles");
// 		console.log("jueves");
// 		console.log("viernes");
// 		console.log("sabado");
// 		console.log("domingo");
// 		imprimir = false;
// 		break;
// 	default:
// 		console.log("No es un dia de la semana");
// 		imprimir = false;
// }


let veces=prompt("Ingrese un numero");
for (let i = 0; i <= veces; i++) {
	console.log(`el valor de i es ${i}`);
}

// Calcular la suma de los numeros del 1 al 10

let suma2 = 0;
for (let i = 0; i <= 10; i++) {
	console.log(`${suma} + ${i}`);
	suma += i;
	console.log(`= ${suma}`);
}
console.log(`La suma es ${suma}`);

// While

let numero3 = 1;
while (numero <= 10) {
	console.log(numero);
	numero++;
}

// console.log(`El valor final del numero es: ${numero}`);


//Tarea para martes 11/04/

//TAREA 1 Switch

// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.

switch (mes) {
	case 1:
		console.log("Enero");
		break;
	case 2:
		console.log("Febrero");
		break;
	case 3:
		console.log("Marzo");
		break;
	case 4:
		console.log("Abril");
		break;
	case 5:
		console.log("Mayo");
		break;
	case 6:
		console.log("Junio");
		break;
	case 7:
		console.log("Julio");
		break;
	case 8:
		console.log("Agosto");
		break;
	case 9:
		console.log("Septiembre");
		break;
	case 10:
		console.log("Octubre");
		break;
	case 11:
		console.log("Noviembre");
		break;
	case 12:
		console.log("Diciembre");
		break;
	default:
		console.log("No es un mes");
		break;
}

// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.

switch (dia) {
	case 1:
		console.log("Lunes");
		break;
	case 2:
		console.log("Martes");
		break;
	case 3:
		console.log("Miercoles");
		break;
	case 4:
		console.log("Jueves");
		break;
	case 5:
		console.log("Viernes");
		break;
	case 6:
		console.log("Sabado");
		break;
	case 7:
		console.log("Domingo");
		break;
	default:
		console.log("No es un dia de la semana");
		break;
}

// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.

let letra = "f"
switch (letra) {
	case "a":
		console.log("Es una vocal");
		break;
	case "e":
		console.log("Es una vocal");
		break;
	case "i":
		console.log("Es una vocal");
		break;
	case "o":
		console.log("Es una vocal");
		break;
	case "u":
		console.log("Es una vocal");
		break;
	default:
		console.log("Es una consonante");
		break;
}

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.

let numero = 3;
let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
switch (numero) {
	case 1:
		console.log(dias[0]);
		break;
	case 2:
		console.log(dias[1]);
		break;
	case 3:
		console.log(dias[2]);
		break;
	case 4:
		console.log(dias[3]);
		break;
	case 5:
		console.log(dias[4]);
		break;
	default:
		console.log("No es un dia de la semana");
		break;
}

// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.

let letra2 = "A";
switch (letra) {
	case "A":
		console.log("Es una mayuscula");
		break;
	case "B":
		console.log("Es una mayuscula");
		break;
	case "C":
		console.log("Es una mayuscula");
		break;
	case "D":
		console.log("Es una mayuscula");
		break;
	case "E":
		console.log("Es una mayuscula");
		break;
	case "F":
		console.log("Es una mayuscula");
		break;
	case "G":
		console.log("Es una mayuscula");
		break;
	case "H":
		console.log("Es una mayuscula");
		break;
	case "I":
		console.log("Es una mayuscula");
		break;
	case "J":
		console.log("Es una mayuscula");
		break;
	case "K":
		console.log("Es una mayuscula");
		break;
	case "L":
		console.log("Es una mayuscula");
		break;
	case "M":
		console.log("Es una mayuscula");
		break;
	case "N":
		console.log("Es una mayuscula");
		break;
	case "O":
		console.log("Es una mayuscula");
		break;
	case "P":
		console.log("Es una mayuscula");
		break;
	case "Q":
		console.log("Es una mayuscula");
		break;
	case "R":
		console.log("Es una mayuscula");
		break;
	case "S":
		console.log("Es una mayuscula");
		break;
	case "T":
		console.log("Es una mayuscula");
		break;
	case "U":
		console.log("Es una mayuscula");
		break;
	case "V":
		console.log("Es una mayuscula");
		break;
	case "W":
		console.log("Es una mayuscula");
		break;
	case "X":
		console.log("Es una mayuscula");
		break;
	case "Y":
		console.log("Es una mayuscula");
		break;
	case "Z":
		console.log("Es una mayuscula");
		break;
	default:
		console.log("Es una minuscula");
		break;
}

// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).

let nota = 8;
switch (nota) {
	case 0:
		console.log("Suspenso");
		break;
	case 1:
		console.log("Suspenso");
		break;
	case 2:
		console.log("Suspenso");
		break;
	case 3:
		console.log("Suspenso");
		break;
	case 4:
		console.log("Suspenso");
		break;
	case 5:
		console.log("Aprobado");
		break;
	case 6:
		console.log("Aprobado");
		break;
	case 7:
		console.log("Notable");
		break;
	case 8:
		console.log("Notable");
		break;
	case 9:
		console.log("Sobresaliente");
		break;
	case 10:
		console.log("Sobresaliente");
		break;
	default:
		console.log("No es una nota");
		break;
}

//TAREA 2 Ciclos 

// Imprimir los números pares del 2 al 20 en la consola.

for (let i = 2; i <= 20; i++) {
	if (i % 2 == 0) {
		console.log(i);
	}
}

// Recorrer un string y mostrar en la consola cada letra en mayúsculas.

let string = "Hola Mundo";
for (let i = 0; i < string.length; i++) {
	console.log(string[i].toUpperCase());
}

// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.

let numero2 = prompt("Ingrese un numero");
for (let i = 1; i <= numero2; i++) {
	console.log(i);
}

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.

let numeros = prompt("Ingrese una serie de numeros separados por coma").trim();
let array = numeros.split(",");
let numeroMayor = 0;
for (let i = 0; i < array.length; i++) {
	if (array[i].trim() > numeroMayor) {
		numeroMayor = array[i];
	}
}
console.log(numeroMayor);

// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.

let palabra = prompt("Ingrese una palabra");
let palabraInvertida = "";
for (let i = palabra.length - 1; i >= 0; i--) {
	palabraInvertida += palabra[i];
}
if (palabra == palabraInvertida) {
	console.log("Es un palindromo");
} else {
	console.log("No es un palindromo");
}

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.

let numeros5 = prompt("Ingrese una serie de numeros separados por coma").trim();
let array5 = numeros.split(",");
let suma = 0;
for (let i = 0; i < array.length; i++) {
	if (array[i].trim() % 2 == 0) {
		suma += parseInt(array[i]);
	}
}
console.log(suma);

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.

let numeros2 = prompt("Ingrese una serie de numeros separados por coma").trim();
let array2 = numeros2.split(",");
let contador3 = 0;
for (let i = 0; i < array2.length; i++) {
	if (array2[i].trim() < 0) {
		contador3++;
	}
}
console.log(contador);


// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.

let numImpar = prompt("Ingrese un numero");
for (let i = 1; i <= numImpar; i++) {
	if (i % 2 != 0) {
		console.log(i);
	}
}


// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.

let numeros3 = prompt("Ingrese una serie de numeros separados por coma").trim();
let array3 = numeros3.split(",");
let numeroMenor = array3[0];
for (let i = 0; i < array3.length; i++) {
	if (array3[i].trim() < numeroMenor) {
		numeroMenor = array3[i];
	}
}
console.log(numeroMenor);

// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.

let advinanumero = prompt("Ingrese un numero");
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let contador = 0;
while (advinanumero != numeroAleatorio) {
	contador++;
	advinanumero = prompt("Ingrese un numero");
}
console.log("Adivinaste el numero");
console.log("Te tomo " + contador + " intentos");

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.

let numeros4 = prompt("Ingrese una serie de numeros separados por coma").trim();
let array4 = numeros4.split(",");
let contador2 = 0;
for (let i = 0; i < array4.length; i++) {
	if (array4[i].trim() % 2 == 0) {
		contador2++;
	}
}
console.log(contador2);