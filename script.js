

document.addEventListener("DOMContentLoaded", (event) => {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

  function addTask() {
    const task = taskInput.value.trim();
    if (task === "") {
      alert("Please Enter A Task!");
    } else {
      const listItem = document.createElement("li");
      listItem.textContent = task;
      taskList.appendChild(listItem);
      taskInput.value = "";
      saveTasks();

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Remove";
      deleteBtn.classList.add("remove-btn");
      listItem.appendChild(deleteBtn);

      deleteBtn.addEventListener("click", function () {
        taskList.removeChild(listItem);
        saveTasks();
      });
    }
  }
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  function saveTasks() {
    let tasks = [];
    taskList.querySelectorAll("li").forEach(function (item) {
      const taskText = item.firstChild.textContent.trim();
      tasks.push(taskText);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(function (task) {
      const listItem = document.createElement("li");
      listItem.textContent = task;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Remove";
      deleteBtn.classList.add("remove-btn");
      listItem.appendChild(deleteBtn);

      taskList.appendChild(listItem);

      deleteBtn.addEventListener("click", function () {
        taskList.removeChild(listItem);
        saveTasks();
      });
    });
  }
    loadTasks();
});
