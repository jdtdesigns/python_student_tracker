class Student {
  constructor(first_name, last_name, course, university) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.course = course;
    this.university = university;
  }

  printCourseDetails() {
    console.log(`${this.first_name} attends ${this.university} and is taking the ${this.course_type} course`)
  }
}

const matt = new Student('Matt', 'Morgan', 'software dev', 'rutgers');

matt.first_name;

const str = `${name} is ${age} years old`

const student = {
  first_name: 'JD',
  last_name: 44,
  course_type: 'SW Dev',
  university: 'Rutgers',
  printCourseDetails() {
    console.log(`${this.first_name} attends ${this.university} and is taking the ${this.course_type} course`)
  }
};