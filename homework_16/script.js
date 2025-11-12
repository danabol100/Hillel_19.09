function Student(firstName, lastName, year) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.year = year;
  this.marks = [];
  this.attendance = [];

  this.addMark = function (mark) {
    this.marks.push(mark);
  };

  Student.prototype.getAge = function () {
    todayYear = new Date().getFullYear();
    return todayYear - this.year;
  };

  Student.prototype.setAbsent = function () {
    if (this.attendance.length >= 25) return console.log("Лимит 25 елементов");
    this.attendance.push(false);
  };
  Student.prototype.setPresent = function () {
    if (this.attendance.length >= 25) return console.log("Лимит 25 елементов");
    this.attendance.push(true);
  };
  Student.prototype.getAverageMark = function () {
    if (this.marks.length === 0) return 0;
    return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
  };

  Student.prototype.getAverageAttendance = function () {
    if (this.attendance.length === 0) return 0;
    return (
      this.attendance.filter((a) => a === true).length / this.attendance.length
    );
  };

  Student.prototype.getSummary = function () {
    const averageMarks = this.getAverageMark();

    const averageAttendance = this.getAverageAttendance();

    if (averageMarks > 90 && averageAttendance > 0.9) {
      return "Молодець!";
    } else if (averageMarks <= 90 && averageAttendance <= 0.9) {
      return " Редиска!";
    } else {
      return "Добре, але можна краще";
    }
  };
}

const student1 = new Student("Кирилл", "Кирилов", 2005);
student1.addMark(95);
student1.addMark(405);
student1.setPresent();

console.log(student1.getAge());
console.log(student1.getAverageMark());
console.log(student1.getAverageAttendance());
const result1 = student1.getSummary();
console.log(student1.firstName, result1);

const student2 = new Student("Виолета", "Петрова", 2000);
student2.addMark(50);
student2.addMark(20);
student2.addMark(50);
student2.addMark(40);
student2.setAbsent();
student2.setAbsent();
student2.setPresent();

console.log(student2.getAge());
console.log(student2.getAverageMark());
console.log(student2.getAverageAttendance());
const result2 = student2.getSummary();
console.log(student2.firstName, result2);
