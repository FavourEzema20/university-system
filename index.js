//Stundent Class

class Student {
  static totalStudents = 0;

  constructor(studentId, name, email) {
    this.studentId = studentId;
    this.name = name;
    this.email = email;
    this.courses = [];
    Student.totalStudents++;
  }

  //Register a course
  registerCourse(course) {
    if (this.courses.includes(course)) {
      console.log(`${this.name} already registered for ${course.title}`);
    } else if (course.getAvailableSlots() > 0) {
      this.courses.push(course);
      console.log(`${this.name} completed registration for ${course.title}`);
    } else {
      console.log(
        `Cannot register ${this.name} for ${course.title}: No slots available`,
      );
    }
  }

  // View all courses for this student
  viewCourse() {
    if (this.courses.length === 0) {
      console.log(`${this.name} has no courses.`);
      return;
    }
    console.log(
      `${this.name}'s courses: ${this.courses.map((c) => c.title).join(",")}`,
    );
  }

  // Static method - get total number of students
  static getTotalStudents() {
    return Student.totalStudents;
  }
}

// Course Class
class Course {
  constructor(courseId, title, availableSlots) {
    this.courseId = courseId;
    this.title = title;
    this.availableSlots = availableSlots;
  }

  // Register a slot for this course
  registerSlot() {
    if (this.availableSlots > 0) {
      this.availableSlots--;
      console.log(
        `Slot registered for ${this.title}. Slots left: ${this.availableSlots}`,
      );
    } else {
      console.log(`${this.title} is full. cannot register.`);
    }
  }

  // cancel a slot for this course
  cancelSlot() {
    this.availableSlots++;
    console.log(
      `Slot cancelled for ${this.title}. Slots available: ${this.availableSlots}`,
    );
  }

  // Get available slots
  getAvailableSlots() {
    return this.availableSlots;
  }
}

// Usage
const math = new Course(101, "Math", 2);
const biology = new Course(102, "Biology", 1);
const chemistry = new Course(103, "Chemistry", 3);

const student1 = new Student(1, "Favour", "favour@example.com");
const student2 = new Student(2, "Mark", "mark@example.com");
const student3 = new Student(3, "Precious", "precious@example.com");

// Students register courses
student1.registerCourse(math);
student2.registerCourse(biology);
student3.registerCourse(chemistry);

// View courses
student1.viewCourse();
student2.viewCourse();
student3.viewCourse();

// Total students
console.log(`Total students: ${Student.getTotalStudents()}`);
