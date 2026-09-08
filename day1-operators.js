const name = "Raju";
const age = 25;

// old way
console.log("My name is " + name + " and my age is " + age);

// new way
console.log(`My name is ${name} and my age is ${age}`);


/// Destructuring

//Object Destructuring

var student = {
    name: "Raju",
    age: 22,
    marks: 85
};

var {
    name: studentName,
    age: studentAge,
    marks: studentMarks
} = student;

console.log(studentName);
console.log(studentAge);
console.log(studentMarks);

//Array Destructuring

const students = ["Raju", "Srinu", "Kiran"];

const [first, second, third] = students;

console.log(first);
console.log(second);
console.log(third);