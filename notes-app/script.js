const addNoteBtn = document.getElementsByClassName("addNote")[0];

addNoteBtn.addEventListener("click", () => {
	addNewNote();
});

function addNewNote(){
	const note = document.createElement("div");
	note.classList.add('note');

	note.innerHTML = `
	  <div class="notes">
    	<div class="tools">
    		<button class="edit"><i class="fas fa-edit"></i></button>
    		<button class="delete"><i class="fas fa-trash-alt"></i></button>

      </div>
    	<div class="main"></div>
    		<textarea class="hidden"></textarea>
    </div>`

//const notesEl = document.querySelector(".notes");
const editBtn = note.querySelector(".edit");
const deleteBtn = note.querySelector(".delete");

const main = note.querySelector(".main");
const textArea = note.querySelector("textarea");

editBtn.addEventListener("click", () => {
	main.classList.toggle("hidden");
	textArea.classList.toggle("hidden");
});

deleteBtn.addEventListener("click", () => {
	note.remove();
});

textArea.addEventListener("input", (e) => {
	const{ value } = e.target;
	main.innerHTML = marked(value);
})

	document.body.appendChild(note);
}

