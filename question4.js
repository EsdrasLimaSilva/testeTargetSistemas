/*

4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

	SP – R$67.836,43
	RJ – R$36.678,66
	MG – R$29.229,88
	ES – R$27.165,48
	Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 
 */

const getStatePercentage = (stateContribuition, total) => {
   return (100 * stateContribuition) / total;
};

const calculateTotalAmmount = (data) => {
   return data.reduce((acumulator, data) => acumulator + data.ammount, 0);
};

const calculateStatesPercentage = (data) => {
   const result = [];
   const totalAmmount = calculateTotalAmmount(data);

   for (let unity of data) {
      result.push({
         state: unity.state,
         percentage: getStatePercentage(unity.ammount, totalAmmount),
      });
   }

   return result;
};

const data = [
   { state: "SP", ammount: 67836.43 },
   { state: "RJ", ammount: 36678.66 },
   { state: "MG", ammount: 29229.88 },
   { state: "ES", ammount: 27165.48 },
   { state: "Outros", ammount: 19849.53 },
];

const statesContribuition = calculateStatesPercentage(data);

for (let data of statesContribuition) {
   console.log(`State: ${data.state} | Percentage: ${data.percentage.toFixed(2)}%`);
}
