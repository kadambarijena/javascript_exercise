const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

form.addEventListener('submit', (e) => {
	// stop form submission
	e.preventDefault();

	const todoText = input.value;

	if(todoText) {
		const todoEl = document.createElement('li');
		todoEl.innerText = todoText;

		todoEl.addEventListener('click', () => {
			todoEl.classList.toggle('completed');
		});

  //Capture the right click event for remove
		todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();

      todoEl.remove();

    });


		todos.appendChild(todoEl);

    //empty to input
		input.value = "";

	}
});
