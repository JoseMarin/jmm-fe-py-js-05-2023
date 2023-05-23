/* Declarar una variable llamada "radio" y asignarle un valor numérico que 
represente el radio de un círculo. Calcular el área del círculo (usando 
la fórmula π * radio^2) y mostrar el resultado en la consola.*/

let radio = 3;
const PI = 3.1416;

let area = PI * radio**2;
let areaDos = Math.PI * Math.pow(radio,2);

console.log(area);
console.log(areaDos);