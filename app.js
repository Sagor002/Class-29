"use strict";

// //constructor function
// function Person(name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;

//   this.calcAge = function() {
//     return new Date().getFullYear() - this.birthYear;
//   };
// }

// //instances
// const person1 = new Person("Mim", 1997);

// // console.log(person1.name);
// // console.log(person1.birthYear);
// // console.log(person1.calcAge());

// const person2 = new Person("Rini", 1995);
// // console.log(person2.calcAge());
// // console.log(Person.prototype);

//classes
class Person {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
}
// class Subject {
//   constructor(SubjectName) {
//     this.SubjectName = SubjectName;
//   }

//   getSubject() {
//     return this.SubjectName;
//   }
// }

// const person1 = new Person("Mim", 1995);
// const person2 = new Person("Rini", 1998);

// // console.log(person1.calcAge());
// // console.log(person2.calcAge());

// const Subject1 = new Subject("Physics");

// console.log(Subject1.getSubject())

// class Subject extends Person {
//   constructor(name, birthYear, subjectName) {
//     super(name, birthYear);
//     this.subjectName = subjectName
//   }

// const person1 = new Person("Sagor", 1993);
// // console.log(person1.calcAge());
// const person2 = new Subject("Hossin", 1996, "Math");
// // console.log(person2.getSubject());
// console.log(person1.calcAge());
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.Name;
  }
  getAge() {
    return this.age;
  }
}

class Cat extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  getBreed() {
    return this.breed;
  }
}

const Animal1 = new Animal("Tom", 1);
const Animal2 = new Cat("Oggie", 2, "Parsian");

console.log(Animal1.getName());
console.log(Animal1.getAge());
console.log(Animal2.getName());
console.log(Animal2.getAge());
console.log(Animal2.getBreed());
