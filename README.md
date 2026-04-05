# Object-Oriented Programming (OOP) 1

## TITLE

University Management System (UMS)

## DESCRIPTION

This is a simple University Management System built using JavaScript. It is a software platform used to manage and organize all the activities in a university. It helps different people in the school like students, lecturers, and administrators perform their tasks easily.

## What it does

1. Manage students records (name, ID, courses and grades).

2. Handles course registration for students.

3. Stores lecturers information and the courses they teach.

4. Track results and grades.

5. Manages fees and payments.

## Class design

### Student

ATTRIBUTES:

- studentId : String
- name : String
- email : String
- totalStudents : Number [static]

METHODS:

- constructor( studentId, name, email)
- registerCourse(course : Course) : void
- viewCourses() : void
- getTotalStudents() : Number [static]

### Course

ATTRIBUTES:

- courseId : String
- title : String
- availableSlots : Number [static]

METHODS:

- constructor ( courseId, title, availableSlots)
- registerSlot() : void [static]
- cancelSlot() : void [static]
- getAvailableSlots() : Number [static]

## HOW TO RUN THIS

- Make sure that Node.js is installed
- Open your terminal
- Run
