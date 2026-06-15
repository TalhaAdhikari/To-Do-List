let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");

button.addEventListener("click", function () {
    let taskText = input.value;

    if (taskText !== "") {
        let li = document.createElement("li");

        // Create checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Create task text
        let span = document.createElement("span");
        span.textContent = " " + taskText;

        // When checked
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                span.style.color = "green";
                span.style.textDecoration = "line-through";
            } else {
                span.style.color = "black";
                span.style.textDecoration = "none";
            }
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        list.appendChild(li);

        input.value = "";
    }
});