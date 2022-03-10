const form     = document.getElementById('task-form'); // Form to send the task
const taskList = document.getElementById('tasks');     // div to assemble the task list

form.onsubmit = function (e) { // button
	e.preventDefault(); // event
	const inputField = document.getElementById('task-input'); // text input
	addTask(inputField.value); // chama função para montar o novo item da lista
	form.reset();
};

function addTask(description) {
	if (description.length === 0 || !description.trim()) {
		alert('Please enter a task!');
		console.log('Please enter a task');
	} else {
		console.log('Adding task: ' + description);
		const taskContainer       = document.createElement('div');
		const newTask             = document.createElement('input');
		const taskLabel           = document.createElement('label');
		const taskDescriptionNode = document.createTextNode(description); // parm

		newTask.setAttribute('type', 'checkbox');
		newTask.setAttribute('name', description);
		newTask.setAttribute('id', description);

		taskLabel.setAttribute('for', description);
		taskLabel.appendChild(taskDescriptionNode);

		taskContainer.classList.add('task-item');
		taskContainer.appendChild(newTask);   // input
		taskContainer.appendChild(taskLabel); // label

		taskList.appendChild(taskContainer);
	}
}
