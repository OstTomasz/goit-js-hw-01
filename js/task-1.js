console.log("zadanie 1");

function makeTransaction(quantity, pricePerDroid) {
  return `You ordered ${quantity} droids worth ${
    quantity * pricePerDroid
  } credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

console.log("koniec zadania 1");
