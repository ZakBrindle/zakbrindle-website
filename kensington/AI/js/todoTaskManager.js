// Initialize numberOfTasks variable to 0
let numberOfTasks = 0;

// When page loads, set numberOfTasks to localStorage.getItem("taskCount")
window.addEventListener('load', () => {
  // Connect to Web SQL database
  const db = openDatabase('tasks', '1.0', 'Task Database', 2 * 1024 * 1024);
  
  // Create tasks table if it doesn't exist
  db.transaction((tx) => {
    tx.executeSql('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT)');
  });
  
  // Load tasks from database and add them to the task list
  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM tasks', [], (tx, result) => {
      numberOfTasks = result.rows.length;
      for (let i = 0; i < numberOfTasks; i++) {
        const task = result.rows.item(i).task;
        addTaskToList(task);
      }
    });
  });
});

// Add event listener to the "Add Task" button
const buttonAddTask = document.getElementById('buttonAddTask');
buttonAddTask.addEventListener('click', addTask);

// Add event listener to the "Delete Task" button
const buttonDeleteTask = document.getElementById('buttonDeleteTask');
buttonDeleteTask.addEventListener('click', deleteSelectedTask);

// Add event listener to the "Delete All Tasks" button
const buttonDeleteAllTasks = document.getElementById('buttonDeleteAllTasks');
buttonDeleteAllTasks.addEventListener('click', deleteAllTasks);


var deleteAllBtn = false;
buttonDeleteTask.addEventListener('contextmenu', function(ev) {
  ev.preventDefault();
  if(deleteAllBtn)
  {
    deleteAllBtn = !deleteAllBtn;
    document.getElementById("buttonDeleteAllTasks").hidden = true;
  }
  else
  {
    deleteAllBtn = !deleteAllBtn;
    document.getElementById("buttonDeleteAllTasks").hidden = false;
  }
  return false;
}, false);

// Function to add task to the list and to the database
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();
  if (task !== '') {
    addTaskToList(task);
    console.log("Creating ItemID: " + numberOfTasks + ". Task: " + task);

    // Store the task in the database
    const db = openDatabase('tasks', '1.0', 'Task Database', 2 * 1024 * 1024);
    db.transaction((tx) => {
      tx.executeSql('INSERT INTO tasks (task) VALUES (?)', [task], (tx, result) => {
        // Increment the task count and update the UI
        numberOfTasks++;
        taskInput.value = '';
      });
    });
  }
}

// Function to add task to the list element and taskList array
function addTaskToList(task) {
  const taskListElement = document.getElementById('taskList');
  const taskElement = document.createElement('li');
  taskElement.appendChild(document.createTextNode(task));
  taskListElement.appendChild(taskElement);
}

// Function to delete selected task from the list and from the database
function deleteSelectedTask() {
  const taskListElement = document.getElementById('taskList');
  const selectedTaskElement = taskListElement.querySelector('li.active');
  if (selectedTaskElement) {
    const task = selectedTaskElement.innerText;
    const db = openDatabase('tasks', '1.0', 'Task Database', 2 * 1024 * 1024);
    db.transaction((tx) => {
      tx.executeSql('DELETE FROM tasks WHERE task=?', [task], (tx, result) => {
        // Remove the task element from the UI
        selectedTaskElement.remove();




        // Decrement the task count and update the UI
        numberOfTasks--;
      });
    });
  }
}

function deleteAllTasks()
{ 
    const taskListElement = document.getElementById('taskList');
    
      const db = openDatabase('tasks', '1.0', 'Task Database', 2 * 1024 * 1024);
      db.transaction((tx) => {
       
          // Remove the task element from the UI
          document.getElementById("taskList").innerHTML = "";   
          tx.executeSql("DELETE FROM tasks",[], 
          function(tx,results){console.log("Successfully Emptied");},
          function(tx,error){console.log("Could not Empty");}
      );
      
    deleteAllBtn = !deleteAllBtn;
    document.getElementById("buttonDeleteAllTasks").hidden = true;
          // Decrement the task count and update the UI
          numberOfTasks--;
        
      });
   
  
}



// Function to mark a task as selected when clicked
document.getElementById('taskList').addEventListener('click', (event) => {
  const taskElements = event.currentTarget.getElementsByTagName('li');
  for (let i = 0; i < taskElements.length; i++) {
    taskElements[i].classList.remove('active');
  }
  event.target.classList.add('active');
});

