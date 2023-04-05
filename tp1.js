//Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

alert("un mensaje")

//Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

document.write("Hello World ")

//Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

document.write(3 + 5)
console.log(3 + 5)

//Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
//Ejemplo: 
//input: Coder 
//Output: Hola Coder

const nombreUsuario = prompt('¿Cuál es tu nombre?');
alert(`Hola ${nombreUsuario}`);

//Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
//Nota: Tener en cuenta la siguiente función: parseInt https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt

const num1 = prompt("Introduce el primer número");
const num2 = prompt("Introduce el segundo número");
alert(`La suma es ${parseInt(num1) + parseInt(num2)}`);

//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
//Ejemplo: 
//input: 15 , 3
//Output: El 15 es el número más grande

let num3 = 15;
let num4 = 3;
document.write(num3 > num4 ? " El 15 es el número más grande" : " El 3 es el número más grande")

//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
//Ejemplo: 
//input: 17 , 3, 9
//Output: El 15 es el número más grande

let num5 = 17;
let num6 = 3;
let num7 = 9;
document.write(num5 > num6 && num5 > num7 ? " El 17 es el número más grande" : num6 > num5 && num6 > num7 ? " El 3 es el número más grande" : " El 9 es el número más grande")

//Escribe un programa que pida un número y diga si es divisible por 2
//Ejemplo: 
//input: 10
//input: 15
//Output: El 10 es divisible por 2.
//Output: El 15 no es divisible por 2.

let num8 = 10;
let num9 = 15;
document.write(num8 % 2 == 0 ? " El 10 es divisible por 2" : " El 15 no es divisible por 2")

//Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
//Ejemplo:
//input: Hola mundo
//Output: oauo

let frase = prompt("Introduce una frase");
function vocales(frase) {
	if (frase.length == 0) {
		return;
	}
	let letra = frase.charAt(0);
	if (letra.match(/[aeiou]/gi)) {
		console.log(letra);
	}
	vocales(frase.substring(1));
}
console.log(vocales(frase));


//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
//Ejemplo: 
//input: 20
//Output: El 20 es divisible por 2.

let num10 = 20;
document.write(num10 % 2 == 0 ? " El 20 es divisible por 2" : num10 % 3 == 0 ? " El 20 es divisible por 3" : num10 % 5 == 0 ? " El 20 es divisible por 5" : num10 % 7 == 0 ? " El 20 es divisible por 7" : " El 20 no es divisible por 2, 3, 5 o 7")


//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
//Ejemplo: 
//input: 20
//input: 210
//Output: El 20 es divisible por 2 y por 5.
//Output: El 210 es divisible por 2, por 3, por 5 y por 7.

let num11 = 40;
let num12 = 210;
document.write(num11 % 2 == 0 ? " El 20 es divisible por 2 y por 5" : num11 % 3 == 0 ? " El 20 es divisible por 3" : num11 % 5 == 0 ? " El 20 es divisible por 5" : num11 % 7 == 0 ? " El 20 es divisible por 7" : " El 20 no es divisible por 2, 3, 5 o 7")
