const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

for (let i = 0; i < 10; i++) {
  sum += nums[i];
}

console.log(sum);

let sum2 = 0;

for (let num of nums) {
  sum2 += num;
}

console.log(sum2);

let sum3 = 0;

for (let index in nums) {
  sum3 += nums[index];
}

console.log(sum3);

const nums2 = [];

for (let num2 of nums) {
  nums2.push(num2 * 2);
}

console.log(nums2);

const names = ["tim", "josh", "antuan", "rick"];

const newNames = [];

for (let name of names) {
  newNames.push(`<p>${name}</p>`);
}

console.log(newNames);

const users = [
  { id: 1, name: "bob" },
  { id: 2, name: "tim" },
  { id: 3, name: "kyle" },
  { id: 3, name: "elon" },
];

const result = users.find((user) => {
  return user.id == 3;
});

console.log(result);

// const keyWord = prompt("what is your name?")

// const result2 = users.find( (user) =>{
//     return user.name === keyWord;
// });

// console.log(result2);

let flights = [
  { destination: "Paris", seatsAvailable: 5 },
  { destination: "London", seatsAvailable: 0 },
  { destination: "NewYork", seatsAvailable: 2 },
];

// const city = prompt("what is your destination?");

// const output = flights.find((flight) => {
//   // alert(`On your destination available ${flight.seatsAvailable} seats`)
//   return flight.destination === city;
// });

// console.log(
//   output.seatsAvailable === 0
//     ? "there aren't any available seats"
//     : `there are ${output.seatsAvailable} available seats`
// );

const arr = [1, 2, 3, 4, 5];
let sum4 = 0;
arr.forEach((num) => {
  sum4 += num;
});

console.log(sum4);

const names2 = [
  { id: 1, name: "bob" },
  { id: 2, name: "tim" },
  { id: 3, name: "josh" },
];

const newNames2 = [];

names2.forEach((name) => {
  newNames2.push(`<p>${name.name}</p>`);
});

console.log(newNames2);

const shapes = [
  { height: 10, width: 10 },
  { height: 5, width: 8 },
  { height: 15, width: 20 },
];

shapes.forEach((shape) => {
  let area = shape.height * shape.width;
  let areas = [];
  areas.push(area);
  console.log(areas);
});

const products = [
  { id: 1, name: "laptop", price: 1000 },
  { id: 2, name: "smartphone", price: 500 },
  { id: 3, name: "tablet", price: 700 },
  { id: 4, name: "calculator", price: 60 },
  { id: 5, name: "3D-pen", price: 20 },
  { id: 6, name: "fax", price: 600 },
  { id: 7, name: "TV-console", price: 300 },
];

const result3 = products.filter((product) => {
  // return product.price>100 && product.price<500;

  if (product.price >= 100 && product.price <= 700) {
    return product;
  }
});
console.log(result3);

const students = [
  { name: "Agata", grade: "A" },
  { name: "Nicholas", grade: "B" },
  { name: "Mihal", grade: "A" },
  { name: "Panez", grade: "C" },
  { name: "Monica", grade: "A" },
  { name: "Albert", grade: "A" },
  { name: "Gabriel", grade: "B" },
  { name: "Adrian", grade: "C" },
  { name: "Sophia", grade: "A" },
  { name: "Gordan", grade: "A" },
  { name: "Tadeush", grade: "B" },
  { name: "Muna", grade: "A" },
  { name: "Corbin", grade: "A" },
  { name: "Tayler", grade: "C" },
  { name: "Doroty", grade: "A" },
  { name: "Tim", grade: "A" },
  { name: "Kimberly", grade: "C" },
  { name: "Austin", grade: "A" },
  { name: "Dayana", grade: "B" },
  { name: "Gilbert", grade: "B" },
];

// const highGrades = students.filter((student) => {
//   if (student.grade == "A") {
//     return student;
//   }
// });

// console.log(highGrades);

// const averageGrades = students.filter((student) => {
//   if (student.grade == "B") {
//     return student;
//   }
// });

// console.log(averageGrades);

// const lowGrades = students.filter((student) => {
//   if (student.grade == "C") {
//     return student;
//   }
// });

// console.log(lowGrades);

const highGrades = [];
const averageGrades = [];
const lowGrades = [];


students.filter((student) => {
  if (student.grade == "A") {
    highGrades.push(student);
  } else if (student.grade == "B") {
    averageGrades.push(student);
  } else {
    lowGrades.push(student);
  }
});

console.log(highGrades, averageGrades, lowGrades);


const sortedStudents = students.filter((student) =>{
    return student.name.includes("a");
})

console.log(sortedStudents);