const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

form.addEventListener('submit', (e) => {
	// stop form submission
	e.preventDefault();

  addTodo();
});


function addTodo() {

	const todoText = input.value;

	if(todoText) {
		const todoEl = document.createElement('li');
		todoEl.innerText = todoText;

		todoEl.addEventListener('click', () => {
			todoEl.classList.toggle('completed');

      updateLs();
		});

  //Capture the right click event for remove
		todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();

      todoEl.remove();

    });

   	todos.appendChild(todoEl);

    //empty to input
		input.value = "";

      updateLs();
	}

}

function updateLs() {
	const todosEl = document.querySelectorAll('li');

	const todos = [];

	todosEl.forEach((todoEl) => {
		todos.push({
			text: todoEl.innerText,
			completed: todoEl.classList.contains("completed"),
		});
	});

	localStorage.setItem('todos', JSON.stringify(todos));
}
