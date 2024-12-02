// 1
function calculateTotal() {
  let cart = [
    { name: "Apple", price: 2, quantity: 3 },
    { name: "Orange", price: 1.5, quantity: 4 },
    { name: "Banana", price: 1, quantity: 5 },
  ];
  return (
    cart[0].price * cart[0].quantity +
    cart[1].price * cart[1].quantity +
    cart[2].price * cart[2].quantity
  );
}
console.log(calculateTotal());

// 2
function getTopScorer() {
  let students = [
    { name: "John", scores: [90, 85, 88] },
    { name: "Jane", scores: [95, 92, 89] },
    { name: "Mark", scores: [85, 80, 85] },
  ];

  let [, b] = students;
  return b;
}
console.log(getTopScorer());

// 3
function convertToArray() {
  const person = { name: "Alice", age: 25, country: "USA" };
  let myArray = [];
  myArray.push(
    ["name", person.name],
    ["age", person.age],
    ["country", person.country]
  );
  return myArray;
}
console.log(convertToArray());

// 4
// function groupByAge() {
//   let people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 25 },
//   ];


//   return people[1].age
// }
// console.log(groupByAge());

