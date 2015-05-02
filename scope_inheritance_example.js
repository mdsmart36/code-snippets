/*
  .....  YOUR MISSION  .....

  You are an HR manager and need a way to keep
  track of employees, which department they work
  in, and other staistical information. You need
  to build a simple JavaScript program that...

  1. Defines a Company, a Department, a Manager,
      and an Employee.

  2. When a Company object is created, you must
      be able to specify the name of the company

  3. When a Department object is created, you must
      be able to specify the name of the department.

  4. When a Manager object is created, you must
      be able to specify the following traits
        a. First name
        b. Last name

  5. When an Employee object is created, you must
      be able to specify the following traits
        a. First name
        b. Last name
        c. Age
        d. Marital status
        e. Salary
      Also, modify the Employee prototype to add the
      following methods (one example given):
        a. setDepartment - Override the default department
        b. getHourlyWage - This should return the hourly
                           rate for the annual salary
        c. setManager - Assign a Manager to an employee


  5. Employee must inherit Department properties
  6. Manager must inherit Department properties
  7. Department must inherit Company properties
  8. Create a global variable that holds your name and have
      each type of object have a property named `creator`
      with the value of that variable.

*/

var hrEmployee = "H. R. Employee";

// Define the Company function
function Company (name) {
  this.company = name;
  this.creator = hrEmployee;
}

// Define the Department function
function Department (name) {
  this.department = name;
}

Department.prototype = new Company("Lonely Planet");

// Define the Manager function
function Manager (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Manager.prototype = new Department("Software");

// Define the Employee function.
function Employee (firstName, lastName, age, maritalStatus, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.maritalStatus = maritalStatus;
  this.salary = salary;
}
Employee.prototype = new Department("Software");

// You can add methods to an object's prototype (see usage below)
Employee.prototype.setDepartment = function (department) {

  // The department property gets inherited from the Department
  // object, but can be overriden at any time by each Employee
  this.department = department;
}

Employee.prototype.getHourlyWage = function () {
  return (this.salary / 2080); // hourly wage = annual salary / 52 weeks / 40 hrs per week
}

Employee.prototype.setManager = function (manager) {
  this.manager = manager;
}

var MattS = new Employee("Matthew", "Smart", "44", "Married", "55000");
var SteveB = new Manager("Steve", "Brownlee");
var output = "";

// Change the department for an employee to override the default
// MattS.setDepartment("Accounting");
MattS.setManager(SteveB);

// Show the employee's properties
console.log("Employee = ", MattS);
console.log("Employee manager = ", MattS.manager);
console.log("Employee department = " + MattS.department);
console.log("Employee company = " + MattS.company);
console.log("Record creator " + MattS.creator);

output += "Hourly salary for " + MattS.firstName + " " + MattS.lastName + " = ";
output += "$" + MattS.getHourlyWage().toFixed(2);
console.log(output);

