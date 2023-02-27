/**
 * Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: 
	Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
 */

const isOnFibonacci = (number, acumulator = 1, current = 0) => {
   if (current > number) return `${number} DOESN'T belong to the Fibonacci sequence`;
   if (current === number) return `${number} belongs to the Fibonacci sequence`;

   return isOnFibonacci(number, current, current + acumulator);
};

const num1 = 55;
const num2 = 0;
const num3 = 12;

console.log(isOnFibonacci(num1)); //expected result -> "55 belongs to the Fibonacci sequence"
console.log(isOnFibonacci(num2)); //expected result -> "0  belongs to the Fibonacci sequence"
console.log(isOnFibonacci(num3)); //expected result -> "12 DOESN'T belongs to the Fibonacci sequence"
