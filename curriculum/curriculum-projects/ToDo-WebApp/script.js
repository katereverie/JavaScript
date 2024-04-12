const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");

const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");

const tasksContainer = document.getElementById("tasks-container");

const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

// stores all tasks with their associated data (title, due data, and description)
// use this array variable to display the info on the page and save them to local storage
// storing tasks data in the local storage makes sure that once the page reloads, the saved tasks remain instead of disappearing.
const taskData = JSON.parse(localStorage.getItem("data")) || [];
// tracks the state when editting and discarding tasks
let currentTask = {};

const addOrUpdateTask = () => {
  // when called, the button should always display "Add Task"
  addOrUpdateTaskBtn.innerText = "Add Task";
  // check if the added task already exists 
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  // store user task inputs in an object
  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };
  // // view task objects being created in the console
  // console.log(taskObj);

  // check if the added task already exists: If not (return -1), add/save task object to the beginning of the task array
  // if the task already exists, set taskData of dataArrayIndex to taskObj;
  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  } else {
    taskData[dataArrIndex] = taskObj;
  }

  // persist data: save tasks to local storage when user adds, updates, or removes a task
  localStorage.setItem("data", JSON.stringify(taskData));

  updateTaskContainer();
  reset();
}

// display the task object saved to task data
const updateTaskContainer = () => {
  // clean previously added tasks, if any, so that no duplication happens
  tasksContainer.innerHTML = ""; 
  taskData.forEach(({id, title, date, description}) => {
    tasksContainer.innerHTML += `
      <div class="task" id="${id}">
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Description:</strong> ${description}</p>
        <button type="button" class="btn" onclick="editTask(this)">Edit</button>
        <button type="button" class="btn" onclick="deleteTask(this)">Delete</button>
      </div>
    `;
  });

  const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id);
    buttonEl.parentElement.remove();
    // starts at specified index of taskData, and delete one item
    taskData.splice(dataArrIndex, 1);
    // remove locally stored tasks from the local storage when deleted
    // since taskData is already sliced, we need only update/save the task instead using removeItem() or clear()
    localStorage.setItem("data", JSON.stringify(taskData));
  }

  const editTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id);
    currentTask = taskData[dataArrIndex];
    title.value = currentTask.title;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;

    addOrUpdateTaskBtn.innerText = "Update Task";

    taskForm.classList.toggle("hidden");
  }
}

// reset task inputs
const reset = () => {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {};
}

// if task data is not empty - there is task data stored locally, display it
// Remember 0 is a falsy value
if (taskData.length) {
  updateTaskContainer();
}

// display task form when the open-task-form-btn is clicked
openTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden");
});

// display the dialog so that users can choose to cancel or discard changes
closeTaskFormBtn.addEventListener("click", () => {
  const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
  // check if there is any update made in the currentTask, if not, do not display dialog
  const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;
  // if there is no input values in a newly open task form, reset without showing close dialog as cancel-btn is clicked
  // if there is any input value in it AND there is an update made on the currently open task, show confirm dialog
  if (formInputsContainValues && formInputValuesUpdated) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }
  confirmCloseDialog.showModal();
});
// when cancel-btn in the dialog is clicked, close the dialog
cancelBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
});
// when discard-btn in the dialog is clicked, close the dialog and hide the task form
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset();
});
// when a task is submitted, check its id in taskObj; if new, add it to taskData.
taskForm.addEventListener("submit", (e) => {
  // prevent the browser from freshing when a task is submitted
  e.preventDefault();
  // check whether to add new tasks or update existing tasks
  addOrUpdateTask();
});

// excursion on localStorage and its methods
// const myTaskArr = [
//   { task: "Walk the Dog", date: "22-04-2022" },
//   { task: "Read some books", date: "02-11-2023" },
//   { task: "Watch football", date: "10-08-2021" },
// ];

// localStorage.setItem("data", JSON.stringify(myTaskArr));

// localStorage.clear();

// const getTaskArr = localStorage.getItem("data")
// console.log(getTaskArr)

// const getTaskArrObj = JSON.parse(localStorage.getItem("data"));
// console.log(getTaskArrObj);