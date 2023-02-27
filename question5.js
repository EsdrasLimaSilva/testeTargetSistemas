/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
	a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
	b) Evite usar funções prontas, como, por exemplo, reverse;
*/

const reverseString = (str) => {
   const strArray = str.split("");
   const reversedStrArr = [];

   for (let k = strArray.length - 1; k >= 0; k--) {
      reversedStrArr.push(strArray[k]);
   }

   return reversedStrArr.join("");
};

const string = "Target Sistemas";
const reversed = reverseString(string);

console.log(`Normal: ${string}`);
console.log(`Reversed: ${reversed}`);
