console.log ("Hola Mundo");

let nombre = prompt("¿Cuál es tu nombre?");

console.log ("Hola " + nombre);

let a = Number(prompt("Ingrese el primer número:"));
let b = Number(prompt("Ingrese el segundo número:"));
let suma = a + b;

console.log ("La suma de " + a + " y " + b + " es: " + suma);

let edad= Number(prompt("¿Cuál es tu edad?"));

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("No eres mayor de edad.");
}
let numero = Number(prompt("Ingrese un número para verificar si es par o impar:"));

if (numero % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}

let Number1 = Number(prompt("Ingrese el primer número:"));
let Number2 = Number(prompt("Ingrese el segundo número:"));
let Number3 = Number(prompt("Ingrese el tercer número:"));

let mayor = Number1;
if (Number2 > mayor) {
    mayor = Number2;
}
if (Number3 > mayor) {
    mayor = Number3;
}
console.log("El número mayor es: " + mayor);

let nota= Number(prompt("Ingrese su nota (0-10):"));
if (nota >= 9 && nota <= 10) 
{
    console.log("muy bien");
}
else if (nota >= 5 && nota < 8)

    console.log("aceptable");
else if (nota >= 0 && nota < 5)
    console.log("insuficiente");    

    let contador
    for (contador = 1; contador <= 10; contador++) {
        console.log(contador);
    }
    let pares = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    console.log("Números pares del 1 al 20:", pares);
let contrasena = prompt("Ingrese la contraseña:");
while (contrasena !== "1234") {
    console.log("Contraseña incorrecta. Intente nuevamente.");
    contrasena = prompt("Ingrese la contraseña:");
}
console.log("Contraseña correcta. Bienvenido.");

let pedirnumerohastaquediga0 = Number(prompt("Ingrese un número (0 para salir):"));
while  (pedirnumerohastaquediga0 !== 0) {
    console.log("Número ingresado: " + pedirnumerohastaquediga0);
    pedirnumerohastaquediga0 = Number(prompt("Ingrese un número (0 para salir):"));
}

let calculadora = Number(prompt("Ingrese el primer número:"));
let operacion = prompt("Ingrese la operación (+, -, *, /):");
let calculadora2 = Number(prompt("Ingrese el segundo número:"));
let resultado = null;

switch (operacion) {
    case "+":
        resultado = calculadora + calculadora2;
        break;
    case "-":
        resultado = calculadora - calculadora2;
        break;
    case "*":
        resultado = calculadora * calculadora2;
        break;
    case "/":
        if (calculadora2 === 0) {
            console.log("No se puede dividir por cero.");
        } else {
            resultado = calculadora / calculadora2;
        }
        break;
    default:
        console.log("Operación no válida.");
        break;
}

if (resultado !== null) {
    console.log("El resultado de " + calculadora + " " + operacion + " " + calculadora2 + " es: " + resultado);
    prompt(resultado);
}
let minimenu = prompt("Seleccione una opción:\n1. Saludar\n2. Fecha\n3. Número random\n4. Salir");
while (minimenu !== "4") {
    switch (minimenu) {
        case "1":
            console.log("Hola!");
            break;
        case "2":
            console.log("Fecha actual: " + new Date().toLocaleString());
            break;
        case "3":
            console.log("Número random: " + Math.random());
            break;
        default:
            console.log("Opción no válida.");
            break;
    }
    minimenu = prompt("Seleccione una opción:\n1. Saludar\n2. Fecha\n3. Número random\n4. Salir");
}
console.log("Has salido del menú.");

let adivinarnumero1al10 = Math.floor(Math.random() * 10) + 1;
let adivinarnumero1al10usuario = Number(prompt("Adivina el número entre 1 y 10:"));
while (adivinarnumero1al10usuario !== adivinarnumero1al10) {
    console.log("Número incorrecto. Intenta nuevamente.");
    adivinarnumero1al10usuario = Number(prompt("Adivina el número entre 1 y 10:"));
}
console.log("¡Felicidades! Has adivinado el número: " + adivinarnumero1al10);