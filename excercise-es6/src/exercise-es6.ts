// 1. Default Parameters & Template Literals

function greetUser(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greetUser("Izzy"));
console.log(greetUser());

// 2. Object Literals

const brand = "Toyota";
const model = "Camry";
const year = 2021;
const color = "Blue";

const car = { brand, model, year, color };

console.log(car);

// 3. Arrow Functions

// function add(a, b) {
//   return a + b;
// }

// function square(x) {
//   return x * x;
// }

const add = (a: number, b: number): number => a + b;
const square = (x: number): number => x * x;

console.log(add(2, 3)); // Output: 5
console.log(square(4)); // Output: 16

// 4. let/const
const number = 5;
const multiplier = 10;
const product = number * multiplier;

// 5. Map Function
const books = [
  {
    title: "The Great Gatsby",
    year: 1925,
    author: "F. Scott Fitzgerald",
    isClassic: true,
  },
  {
    title: "To Kill a Mockingbird",
    year: 1960,
    author: "Harper Lee",
    isClassic: false,
  },
];

const bookSummaries = books.map(
  (book) => `Title: ${book.title}, Published: ${book.year}`
);

console.log({ bookSummaries });

// Additional Challenge

const bookSummariesExtra = books.map((book) => {
  const classicStatus = book.isClassic ? "Classic" : "Modern";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.year} (${classicStatus})`;
});

console.log({ bookSummariesExtra });

// 6. Generators

function* generatePrimes(n: number) {
  let count = 0;
  let number = 2;

  function isPrime(num: number) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  while (count < n) {
    if (isPrime(number)) {
      yield number;
      count++;
    }
    number++;
  }
}

const primes = generatePrimes(5);

console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);

// 7. Iterators

interface StudentGrades {
  [student: string]: number;
}

const studentGrades: StudentGrades = {
  John: 85,
  Jane: 92,
  Jim: 78,
  Jill: 95,
};

for (const student in studentGrades) {
  if (studentGrades[student] > 90) {
    console.log(student);
  }
}

Object.entries(studentGrades).forEach(([student, grade]) => {
  if (grade > 90) {
    console.log(student);
  }
});

for (const [student, grade] of Object.entries(studentGrades)) {
  if (grade > 90) {
    console.log(student);
  }
}

// 8. Bonus - Destructuring & Spread/Rest Operator
function analyzeNumbers(nums: number[]) {
  const [max, min] = [...nums].sort((a, b) => b - a);

  const sum = nums.reduce((acc, num) => acc + num, 0);

  const average = sum / nums.length;

  return {
    max,
    min,
    sum,
    average,
  };
}

// function analyzeNumbers(numbers: number[]) {
//   const max = Math.max(...numbers);
//   const min = Math.min(...numbers);
//   const sum = numbers.reduce((acc, curr) => acc + curr, 0);
//   const average = sum / numbers.length;

//   return { max, min, sum, average };
// }

const nums = [10, 20, 30, 40, 50];
const analysis = analyzeNumbers(nums);
console.log(analysis);
