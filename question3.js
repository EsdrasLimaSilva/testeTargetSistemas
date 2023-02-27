/**
 * 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
	• O menor valor de faturamento ocorrido em um dia do mês;
	• O maior valor de faturamento ocorrido em um dia do mês;
	• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
	a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
	b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
 */

const data = require("./data.json");

const sortDataCrescent = (data) => {
   return data.sort((a, b) => a.valor - b.valor);
};

const getLowestBillingAmmount = (data) => {
   const sortedData = sortDataCrescent(data);
   const lowestBillingDay = sortedData.find((day) => day.valor > 0);

   return lowestBillingDay.valor;
};

const getHighestBillingAmmount = (data) => {
   const sortedData = sortDataCrescent(data);
   return sortedData[sortedData.length - 1].valor;
};

const calculateMonthlyAvarage = (data) => {
   const sortedData = sortDataCrescent(data);
   let days = 0;
   let totalAmmount = sortedData.reduce((acumulator, day) => acumulator + day.valor, 0);

   for (let day of sortedData) {
      if (day.valor != 0) days++;
   }

   return totalAmmount / days;
};

const dailyBilling = data;

console.log("Lowest ammount: " + getLowestBillingAmmount(dailyBilling));
console.log("Highest ammount: " + getHighestBillingAmmount(dailyBilling));
console.log("Monthly avarage: " + calculateMonthlyAvarage(dailyBilling).toFixed(2));
