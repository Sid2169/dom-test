//to-do list functionality 
const addTask = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const newTask = document.getElementById("new-task");

addTask.addEventListener("click", function () {
    const taskText = newTask.value.trim();
    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        //Add delete button to each task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(li);
        });
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        newTask.value = "";
    }
});

