document.addEventListener('DOMContentLoaded', (event) => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const addTask = function() {
        const taskText = taskInput.value.trim();
        if(taskText === ''){
            alert('Please enter a task');
        }else {
            const tasks = document.createElement('li');
            tasks.textContent = taskText;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Remove';
            deleteBtn.classList.add('remove-btn');

            deleteBtn.addEventListener('click', function() {
                taskList.removeChild(tasks);
            });
                tasks.appendChild(deleteBtn);
                taskList.appendChild(tasks);
                taskInput.value = '';
            }
        };
            addButton.addEventListener('click', addTask);
            taskInput.addEventListener('keypress', function(event) {
                if(event.key === 'Enter'){
                    addTask();

        }
    });
});