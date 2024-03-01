/*Crea una función llamada rollDice() que reciba como parametro el numero de caras 
que queramos que tenga el dado que deberá simular el codigo dentro de la función. 
Como hemos dicho, que la función use el parametro para simular una tirada de dado 
y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te 
preocupes! Busca información sobre la función de javascript Math.random()*/

const rollDice = (faces) => {

  const randomNumber = Math.floor(Math.random() * faces) + 1;
  return randomNumber;

}

const faces = 4;
const result = rollDice(faces);
console.log(`El dado tiene ${faces} caras y el numero que ha salido es el ${result}`);


