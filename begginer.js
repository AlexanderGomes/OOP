class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  lastNames() {
    return `${this.lastName}`
  }
}


class Student extends Person {
  constructor(firstName, lastName, studentId) {
    super(firstName, lastName)
    this.studentId = studentId;
  }

  studentinfo () {
    return `hi I'm ${this.firstName} ${this.lastName}, my id is ${this.studentId}`
  }
}

class Teacher extends Person {
    constructor(firstName, lastName, subject) {
        super(firstName, lastName)
        this.subject = subject
    }


    teacherInfo() {
        return `I'm ${this.firstName} ${this.lastName}, and I teach ${this.subject}`
    }
}

const instanceStd = new Student('sander', 'gomes', 1123)
instanceStd.lastNames()

const people = [
    new Person("John", "Doe"),
    new Student("Jane", "Doe", "S001"),
    new Teacher("Jim", "Smith", "Math")
  ];


  for (const person of people) {
    console.log(person.lastNames());
  }
