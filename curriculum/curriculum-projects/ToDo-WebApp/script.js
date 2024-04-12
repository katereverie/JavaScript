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


// display task form when the open-task-form-btn is clicked
openTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden");
});

// display the dialog so that users can choose to cancel or discard changes
closeTaskFormBtn.addEventListener("click", () => {
  confirmCloseDialog.showModal();
});
// when cancel-btn in the dialog is clicked, close the dialog
cancelBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
});
// when discard-btn in the dialog is clicked, close the dialog and hide the task form
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  taskForm.classList.toggle("hidden");
});
// prevent the browser from freshing when a task is submitted
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
