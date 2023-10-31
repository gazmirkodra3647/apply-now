/* 
Filename: sophisticated_code.js

This code is a sophisticated implementation of a task management system. It includes features such as creating, updating, and deleting tasks, displaying tasks based on different criteria, assigning tasks to users, and generating reports.

Note: This code makes use of ES6 syntax.

*/

// Defining the Task class
class Task {
  constructor(title, description, dueDate, priority, assignedTo) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.assignedTo = assignedTo;
    this.completed = false;
  }

  markComplete() {
    this.completed = true;
  }

  updateDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }

  updatePriority(newPriority) {
    this.priority = newPriority;
  }
}

// Defining the User class
class User {
  constructor(name, email, role) {
    this.name = name;
    this.email = email;
    this.role = role;
    this.tasks = [];
  }

  createTask(task) {
    this.tasks.push(task);
  }

  displayTasks() {
    console.log(`Tasks assigned to ${this.name}:`);
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task.title} - ${task.description}`);
    });
  }

  displayCompleteTasks() {
    console.log(`Completed tasks for ${this.name}:`);
    this.tasks
      .filter((task) => task.completed)
      .forEach((task, index) => {
        console.log(`${index + 1}. ${task.title}`);
      });
  }

  displayIncompleteTasks() {
    console.log(`Incomplete tasks for ${this.name}:`);
    this.tasks
      .filter((task) => !task.completed)
      .forEach((task, index) => {
        console.log(`${index + 1}. ${task.title}`);
      });
  }
}

// Creating users
const user1 = new User("John Doe", "john.doe@example.com", "Developer");
const user2 = new User("Jane Smith", "jane.smith@example.com", "Designer");

// Creating tasks
const task1 = new Task(
  "Implement login functionality",
  "Implement user authentication and login functionality",
  "2022-01-15",
  "High",
  user1
);
const task2 = new Task(
  "Design landing page",
  "Design a visually appealing landing page",
  "2022-02-28",
  "Medium",
  user2
);
const task3 = new Task(
  "Refactor codebase",
  "Refactor existing codebase to improve performance",
  "2022-03-10",
  "High",
  user1
);

// Assigning tasks to users
user1.createTask(task1);
user2.createTask(task2);
user1.createTask(task3);

// Completing a task
task1.markComplete();

// Updating a task's due date
task2.updateDueDate("2022-03-15");

// Updating a task's priority
task3.updatePriority("Low");

// Displaying tasks assigned to users
user1.displayTasks();
user2.displayTasks();

// Displaying complete tasks for users
user1.displayCompleteTasks();
user2.displayCompleteTasks();

// Displaying incomplete tasks for users
user1.displayIncompleteTasks();
user2.displayIncompleteTasks();

// Additional functionality can be added for task deletion, generating reports, etc.

// ... Rest of the code

// End of file