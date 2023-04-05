//Tarea para la clase.
//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.

function numPosONeg(num) {
    if (num > 0) {
        return "Positivo";
    } else if (num < 0) {
        return "Negativo";
    } else {
        return "Cero";
    }
}
console.log(numPosONeg(0));

//Crear una función que tome dos números como parámetros y devuelva el número mayor.

function numMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(numMayor(5, 7));

//Crear una función que tome un número como parámetro y devuelva "Divisible por tres" si es divisible por 3, "Divisible por 5" si es divisible por 5 o "por ambos" si es divisible por ambos. En cualquier otro caso, devolver el número.

function numDivisible(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return "Divisible por 3 y 5";
    } else if (num % 3 == 0) {
        return "Divisible por 3";
    } else if (num % 5 == 0) {
        return "Divisible por 5";
    } else {
        return num;
    }
}
console.log(numDivisible(15));

// Tarea para el dia Martes 04/04/2023

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

function palindromo(cadena) {
    let cadenaInvertida = cadena.split("").reverse().join("");
    if (cadena === cadenaInvertida) {
        return "Es un palíndromo";
    } else {
        return "No es un palíndromo";
    }
}
console.log(palindromo("ana"));

//Crear una función que tome un número como parámetro y devuelva "Es un número primo" si es primo, de lo contrario, devolver "No es un número primo".

function numPrimo(num) {
    if (num <= 1) {
        return "No es un número primo";
    }
    const limite = Math.floor(Math.sqrt(num));
    if (num % 2 === 0 && num !== 2) {
        return "No es un número primo";
    }
    return [...Array(limite + 1).keys()].slice(3).every(i => num % i !== 0) ? "Es un número primo" : "No es un número primo";
}
console.log(numPrimo(97));

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

let contraseña = prompt("Ingrese su contraseña");
function validarContraseña(contraseña) {
    if (contraseña.length < 8) {
        return "La contraseña debe tener al menos 8 caracteres";
    } else if (!contraseña.match(/[a-z]/g)) {
        return "La contraseña debe tener al menos una letra minúscula";
    } else if (!contraseña.match(/[A-Z]/g)) {
        return "La contraseña debe tener al menos una letra mayúscula";
    } else if (!contraseña.match(/[0-9]/g)) {
        return "La contraseña debe tener al menos un número";
    } else if (!contraseña.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g)) {
        return "La contraseña debe tener al menos un carácter especial";
    } else {
        return "Contraseña válida";
    }
}
console.log(validarContraseña(contraseña));

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

let calificacion = prompt("Ingrese su calificación");
function calificacionAprobatoria(calificacion) {
    if (calificacion >= 70) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}
console.log(calificacionAprobatoria(calificacion));

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

let letra = prompt("Ingrese una letra");
function letraVocalOConsonante(letra) {
    if (letra.match(/[aeiou]/gi)) {
        return "Vocal";
    } else {
        return "Consonante";
    }
}
console.log(letraVocalOConsonante(letra));

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.

let dia = prompt("Ingrese un número del 1 al 7");
switch (dia) {
    case "1":
        console.log("Lunes");
        break;
    case "2":
        console.log("Martes");
        break;
    case "3":
        console.log("Miércoles");
        break;
    case "4":
        console.log("Jueves");
        break;
    case "5":
        console.log("Viernes");
        break;
    case "6":
        console.log("Sábado");
        break;
    case "7":
        console.log("Domingo");
        break;
    default:
        console.log("Número inválido");
        break;
}

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.

let num = prompt("Ingrese un número");
function primoSiNo(num) {
    if (num <= 1) {
        return "No es primo";
    }
    const limite = Math.floor(Math.sqrt(num));
    if (num % 2 === 0 && num !== 2) {
        return "No es primo";
    }
    return [...Array(limite + 1).keys()].slice(3).every(i => num % i !== 0) ? "Es primo" : "No es primo";
}
console.log(primoSiNo(num));

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

let edad = prompt("Ingrese su edad");
function mayorMenorEdad(edad) {
    if (edad >= 18) {
        return "Mayor de edad";
    } else {
        return "Menor de edad";
    }
}
console.log(mayorMenorEdad(edad));

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.

let num1 = prompt("Ingrese un número");
let num2 = prompt("Ingrese otro número");
function sumaMayorMenorIgual(num1, num2) {
    if (num1 + num2 > 100) {
        return "Mayor a 100";
    } else if (num1 + num2 < 100) {
        return "Menor a 100";
    } else {
        return "Igual a 100";
    }
}
console.log(sumaMayorMenorIgual(num1, num2));

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

let num3 = prompt("Ingrese un número");
let num4 = prompt("Ingrese otro número");
let num5 = prompt("Ingrese otro número");
function mayorDeTres(num3, num4, num5) {
    if (num3 > num4 && num3 > num5) {
        return num3;
    } else if (num4 > num3 && num4 > num5) {
        return num4;
    } else {
        return num5;
    }
}
console.log(mayorDeTres(num3, num4, num5));

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

let letra2 = prompt("Ingrese una letra");
function mayusculaMinuscula(letra2) {
    if (letra2 === letra2.toUpperCase()) {
        return "Mayúscula";
    } else {
        return "Minúscula";
    }
}
console.log(mayusculaMinuscula(letra2));

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

let num8 = prompt("Ingrese un número");
function numeroPerfecto(num8) {
    let suma = 0;
    for (let i = 1; i < num8; i++) {
        if (num8 % i === 0) {
            suma += i;
        }
    }
    if (suma === num8) {
        return "Es un número perfecto";
    } else {
        return "No es un número perfecto";
    }
}
console.log(numeroPerfecto(num8));

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

let num9 = prompt("Ingrese un número");
function descomposicionFactoresPrimos(num9) {
    let factores = [];
    for (let i = 2; i <= num9; i++) {
        while (num9 % i === 0) {
            factores.push(i);
            num9 /= i;
        }
    }
    return factores;
}
console.log(descomposicionFactoresPrimos(num9));

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.

let dia2 = prompt("Ingrese un día");
let mes = prompt("Ingrese un mes");
let año = prompt("Ingrese un año");
function fechaValida(dia2, mes, año) {
    if (dia2 < 1 || dia2 > 31) {
        return "Día inválido";
    } else if (mes < 1 || mes > 12) {
        return "Mes inválido";
    } else if (año < 1) {
        return "Año inválido";
    } else {
        return "Fecha válida";
    }
}
console.log(fechaValida(dia2, mes, año));

// Crear un programa que pida al usuario un número y luego muestre si es un número feliz o no. Un número feliz es aquel que al sumar sus dígitos elevados al cuadrado y repetir el proceso hasta obtener un solo dígito, el resultado sea 1.

let num6 = prompt("Ingrese un número");
function felizSiNo(num6) {
    let suma = 0;
    while (num6 > 0) {
        suma += (num6 % 10) ** 2;
        num6 = Math.floor(num6 / 10);
    }
    if (suma === 1) {
        return "Feliz";
    } else {
        return "No feliz";
    }
}
console.log(felizSiNo(num6));

// Crear un programa que pida al usuario un número y luego muestre si es un número de Armstrong o no. Un número de Armstrong es aquel que es igual a la suma de sus dígitos elevados al cubo.

let num7 = prompt("Ingrese un número");
function armstrongSiNo(num7) {
    let suma = 0;
    while (num7 > 0) {
        suma += (num7 % 10) ** 3;
        num7 = Math.floor(num7 / 10);
    }
    if (suma === num7) {
        return "Armstrong";
    } else {
        return "No armstrong";
    }
}
console.log(armstrongSiNo(num7));