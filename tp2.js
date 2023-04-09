// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = prompt("Ingrese su edad");
if (edad >= 18) {
	alert("Ya puede conducir");
} else if (edad < 18) {
	alert("No puede conducir");
} else {
	alert("Ingrese un número válido");
}

// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

let nota = prompt("Ingrese una nota de 0 a 10");
if (nota >= 0 && nota <= 2) {
	alert("Muy deficiente");
} else if (nota >= 3 && nota <= 4) {
	alert("Insuficiente");
} else if (nota >= 5 && nota <= 6) {
	alert("Suficiente");
} else if (nota == 7) {
	alert("Bien");
} else if (nota >= 8 && nota <= 9) {
	alert("Notable");
} else if (nota == 10) {
	alert("Sobresaliente");
} else {
	alert("Ingrese un número válido");
}

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// Ejemplo:

// Input: 5
// Input: 50
// Input: hola10
// Output: Suficiente
// Output: Número erróneo
// Output: Introduce un número válido

let numero = prompt("Ingrese un número");
if (numero >= 0 && numero <= 10) {
	alert("Número válido");
} else if (numero > 10) {
	alert("Número erróneo");
} else {
	alert("Introduce un número válido");
}

// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let cadenaDeTexto = prompt("Ingrese una cadena de texto");
let cadenaDeTexto2 = prompt("Ingrese una cadena de texto");
let cadenaDeTexto3 = prompt("Ingrese una cadena de texto");
confirm(cadenaDeTexto + " - " + cadenaDeTexto2 + " - " + cadenaDeTexto3);

// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let sumaTotal = 0;
while (true) {
	const input = prompt("Ingrese un número");
	if (input === null) {
		break;
	}
	const numero = Number(input);
	if (Number.isNaN(numero)) {
		alert("No es un número");
		continue;
	}
	sumaTotal += numero;
}
alert(`La suma total es ${sumaTotal}`);

// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

// Ejemplo:
// Input:  40773821
// Output: ‘L’

while (true) {
	const dni = parseInt(prompt("Ingrese un numero de DNI"));
	if (dni === null) {
		break;
	}
	else if (Number.isNaN(dni)) {
		alert("Ingrese un número válido");
		continue;
	}
	else if (dni <= 0 || dni > 99999999) {
		alert("Ingrese un número válido");
		continue;
	}
	const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
	const resto = dni % 23;
	const letraCalculada = letrasDNI[resto];
	alert(`La letra del DNI es ${letraCalculada}`);
	break;
}

// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

for (let i = 1; i <= 30; i++) {
	let cadena = "";
	for (let j = 1; j <= i; j++) {
		cadena += i;
	}
	console.log(cadena);
}

// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

const piramideInversa = prompt("Ingresa un numero del 1 al 50");
if (Number.isNaN(piramideInversa)) {
	alert("Ingrese un número válido");
} else if (piramideInversa <= 0 || piramideInversa > 50) {
	alert("Ingrese un número válido");
} else {
	for (let i = piramideInversa; i >= 1; i--) {
		let cadena = "";
		for (let j = 1; j <= i; j++) {
			cadena += i;
		}
		console.log(cadena);
	}
}


// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

const piramide = prompt("Ingresa un numero del 1 al 50");
if (Number.isNaN(piramide)) {
	alert("Ingrese un número válido");
} else if (piramide <= 0 || piramide > 50) {
	alert("Ingrese un número válido");
} else {
	for (let i = 1; i <= piramide; i++) {
		let cadena = "";
		for (let j = 1; j <= i; j++) {
			cadena += j;
		}
		console.log(cadena);
	}
}

// 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-

// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10

const multiplos = prompt("Ingresa un numero del 1 al 500");
if (Number.isNaN(multiplos)) {
	alert("Ingrese un número válido");
} else if (multiplos <= 0 || multiplos > 500) {
	alert("Ingrese un número válido");
} else {
	let contador = 0;
	for (let i = 1; i <= multiplos; i++) {
		if (i % 4 === 0 && i % 9 === 0) {
			console.log(`${i} (Múltiplo de 4 y 9)`);
		} else if (i % 4 === 0) {
			console.log(`${i} (Múltiplo de 4)`);
		} else if (i % 9 === 0) {
			console.log(`${i} (Múltiplo de 9)`);
		} else {
			console.log(i);
		}
		contador++;
		if (contador % 5 === 0) {
			console.log("——————————————");
		}
	}
}

// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const filas = prompt("Ingresa un numero de filas");
const columnas = prompt("Ingresa un numero de columnas");
if (Number.isNaN(filas) || Number.isNaN(columnas)) {
	alert("Ingrese un número válido");
} else if (filas <= 0 || columnas <= 0) {
	alert("Ingrese un número válido");
} else {
	let contador = 0;
	for (let i = 1; i <= filas; i++) {
		let cadena = "";
		for (let j = 1; j <= columnas; j++) {
			contador++;
			cadena += contador + " ";
		}
		console.log(cadena);
	}
}

// Ejercicios con Math
// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

const nombre1 = prompt("Ingresa el nombre de la persona 1");
const edad1 = prompt("Ingresa la edad de la persona 1");
const nombre2 = prompt("Ingresa el nombre de la persona 2");
const edad2 = prompt("Ingresa la edad de la persona 2");
const nombre3 = prompt("Ingresa el nombre de la persona 3");
const edad3 = prompt("Ingresa la edad de la persona 3");
if (Number.isNaN(edad1) || Number.isNaN(edad2) || Number.isNaN(edad3) || edad1 <= 0 || edad2 <= 0 || edad3 <= 0) {
	alert("Ingrese un número válido");
} else {
	if (edad1 > edad2 && edad1 > edad3) {
		console.log(`El mayor es ${nombre1}`);
	} else if (edad2 > edad1 && edad2 > edad3) {
		console.log(`El mayor es ${nombre2}`);
	} else if (edad3 > edad1 && edad3 > edad2) {
		console.log(`El mayor es ${nombre3}`);
	} else {
		console.log("Hay dos o más personas con la misma edad");
	}
}

// 12- Realiza un script que genere un número aleatorio entre 1 y 99

const aleatorio = Math.floor(Math.random() * 99) + 1;
console.log(aleatorio);

// Ejercicios con String
// 13- Realiza un script que pida un texto y lo muestre en mayúsculas.

const texto = prompt("Ingresa un texto");
console.log(texto.toUpperCase());

// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

const texto2 = prompt("Ingresa un texto");
let cadena = "";
for (let i = 0; i < texto2.length; i++) {
	cadena += texto2[i] + "-";
}
console.log(cadena);

// 15- Realiza un script que cuente el número de vocales que tiene un texto.

const texto3 = prompt("Ingresa un texto");
let contador = 0;
for (let i = 0; i < texto3.length; i++) {
	if (texto3[i] === "a" || texto3[i] === "e" || texto3[i] === "i" || texto3[i] === "o" || texto3[i] === "u") {
		contador++;
	}
}
console.log(`El texto tiene ${contador} vocales`);

// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let texto4 = prompt("Ingresa un texto").trim();
let cadena2 = "";
for (let i = texto4.length - 1; i >= 0; i--) {
	cadena2 += texto4[i];
}
console.log(cadena2);

// 7- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
// Ejemplo:
// Input: Hola mundo
// Output: la vocal ‘o’ está en la posición 1

const texto5 = prompt("Ingresa un texto");
let posicion = 0;
for (let i = 0; i < texto5.length; i++) {
	if (texto5[i] === "a" || texto5[i] === "e" || texto5[i] === "i" || texto5[i] === "o" || texto5[i] === "u") {
		posicion = i;
		break;
	}
}
console.log(`La vocal ${texto5[posicion]} está en la posición ${posicion}`);