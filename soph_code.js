/* soph_code.js - A sophisticated and elaborate code demonstrating various advanced concepts and techniques */

// Object for storing and manipulating student data
const studentData = {
  students: [],

  addStudent: function(name, grade) {
    const student = {
      name: name,
      grade: grade
    };
    this.students.push(student);
  },

  getStudentCount: function() {
    return this.students.length;
  },

  getStudentByIndex: function(index) {
    if (index >= 0 && index < this.getStudentCount()) {
      return this.students[index];
    } else {
      throw new Error("Invalid index!");
    }
  },

  getAverageGrade: function() {
    let totalGrade = 0;
    for (let student of this.students) {
      totalGrade += student.grade;
    }
    return totalGrade / this.getStudentCount();
  }
};

// Class for representing a Book
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  }
}

// Inheriting from Book class
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

// Creating instances of Book and Magazine classes
const book1 = new Book('Book One', 'Author One', 2020);
const magazine1 = new Magazine('Magazine One', 'Author Two', 2019, 'January');

console.log(book1.getSummary());
console.log(magazine1.getSummary());

// Complex Date manipulation
const currentDate = new Date();
console.log(currentDate);

const futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 10);
console.log(futureDate);

// Promisifying setTimeout
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function timedFunction() {
  console.log("Executing timedFunction...");
  await delay(2000);
  console.log("Delayed output");
}

timedFunction();

// Complex array manipulation
let numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);

const evenSquares = squares.filter(sq => sq % 2 === 0);
console.log(evenSquares);

const sum = evenSquares.reduce((acc, val) => acc + val, 0);
console.log(sum);

// Drawing shapes using ASCII
const triangle = [
  '   *   ',
  '  ***  ',
  ' ***** ',
  '*******'
];

for (let line of triangle) {
  console.log(line);
}

// Random Number Generation
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10));

// Ternary Operator
const age = 25;
const isAdult = age >= 18 ? 'Adult' : 'Minor';
console.log(isAdult);

// Example of a very long condition
if (
  (isAdult === 'Adult' && age >= 25) ||
  (isAdult === 'Minor' && age < 18 && age >= 15 && age % 2 === 0)
) {
  console.log("Complex condition satisfied!");
} else {
  console.log("Complex condition not satisfied!");
}

/* ... continues further with more sophisticated, elaborate, and complex code ... */