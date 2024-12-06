function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('li');

        newTask.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button onclick="moveUp(this)">Up</button>
            <button onclick="moveDown(this)">Down</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;

        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}

function moveUp(button) {
    const task = button.parentElement;
    const previousTask = task.previousElementSibling;
    
    if (previousTask) {
        task.parentElement.insertBefore(task, previousTask);
    }
}

function moveDown(button) {
    const task = button.parentElement;
    const nextTask = task.nextElementSibling;
    
    if (nextTask) {
        task.parentElement.insertBefore(nextTask, task);
    }
}
