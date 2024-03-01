/*Crea una función llamada swap que reciba un array y dos parametros que sean 
indices del array. La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array:*/

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

const swap = (array, indexOne, indexTwo) => {

  const positionExchange = array[indexOne];
  array[indexOne] = array[indexTwo];
  array[indexTwo] = positionExchange;

  return array;
};

const swappedArray = swap(fantasticFour, 3, 0);

console.log(swappedArray);
