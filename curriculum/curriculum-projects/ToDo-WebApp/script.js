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
const taskData = [];
// tracks the state when editting and discarding tasks
let currentTask = {};

const addOrUpdateTask = () => {
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
  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  }

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

// display task form when the open-task-form-btn is clicked
openTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden");
});

// display the dialog so that users can choose to cancel or discard changes
closeTaskFormBtn.addEventListener("click", () => {
  const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
  // if there is no input values in a newly open task form, reset without showing close dialog as cancel-btn is clicked
  // if there is any input value in it, show confirm dialog
  if (formInputsContainValues) {
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

