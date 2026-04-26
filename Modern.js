function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = task;

    span.onclick = function () {
        span.style.textDecoration = "line-through";
    };

    let del = document.createElement("button");
    del.textContent = "";

    del.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(del);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}