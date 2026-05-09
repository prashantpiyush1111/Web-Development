let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask(){

    let taskInput = document.getElementById("taskInput");
    let dateInput = document.getElementById("dateInput");

    let taskText = taskInput.value.trim();
    let taskDate = dateInput.value;

    if(taskText === ""){
        alert("Enter Task");
        return;
    }

    let task = {
        text: taskText,
        date: taskDate,
        completed: false
    };

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";
    dateInput.value = "";

    displayTasks();
}

function displayTasks(){

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">
                ${task.text} <br>
                Due: ${task.date}
            </span>

            <div class="task-buttons">
                <button class="complete-btn" onclick="toggleTask(${index})">
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>

                <button class="delete-btn" onclick="deleteTask(${index})">
                    Delete
                </button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

function toggleTask(index){

    tasks[index].completed = !tasks[index].completed;

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}

function deleteTask(index){

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}