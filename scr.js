let numberOfNotes = 0;
let currentId = 0;
//let noteId = 0;
// let checkBoxId = 0;
function add() {
	let cont = document.getElementById("container");
	let text = document.getElementById("text");
	if (text.value == "") {
		alert("Your note is empty!");
		return;
	}
	++numberOfNotes
	insert(cont, text.value);
	text.value = "";
	console.log(currentId);
	countAllNotes();
	countAllRemain();
}

function clickPress(event) {
	if (event.keyCode == 13) {
		add();
	}
}

function insert(cont, text) {
	let newNote = document.createElement("div");
	newNote.classList.add("note");
	//newNote.setAttribute("id", ++noteId); 
	cont.appendChild(newNote);

	appendCheckBoxArea(newNote);
	appendTextArea(newNote, text);
	appendButtonArea(newNote);
	
}

function appendCheckBoxArea(note) {
	let checkBoxArea = document.createElement("div");
	checkBoxArea.classList.add("checkBoxArea");
	note.appendChild(checkBoxArea);

	let checkbox = document.createElement("input");
	checkbox.classList.add("checkBoxInput");
	checkbox.setAttribute("value", "no" );
	checkbox.setAttribute("type", "checkbox");
	checkbox.setAttribute("onclick", "countAllRemain()");
	///checkbox.setAttribute("id", ++checkBoxId); ///
	checkBoxArea.appendChild(checkbox);
}

function appendTextArea(note, text) {
	let textArea = document.createElement("div");
	textArea.classList.add("textArea");
	note.appendChild(textArea);
	
	let textContent = document.createElement("span");
	textContent.classList.add("textContent");
	textContent.innerHTML = text;
	textArea.appendChild(textContent);
}

function appendButtonArea(note) {
	let buttonArea = document.createElement("div");
	buttonArea.classList.add("buttonArea");
	note.appendChild(buttonArea);

	let button = document.createElement("button");
	button.innerHTML = "Del";
	button.setAttribute("id", ++currentId);    /* */
	button.setAttribute("onclick", "del(this.id)");
	buttonArea.appendChild(button);
}

function countAllNotes() {
	let tasks = document.getElementById("tasks");
	tasks.innerHTML = numberOfNotes;
}

function countAllRemain() {
	let c = document.querySelectorAll(".checkBoxArea");
	let count = 0;
	for  (let i = 0; i < c.length; ++i) {
		let cb = c[i].childNodes[0];
		if (!cb.checked) count++
	}
	let tasks = document.getElementById("remain");
	tasks.innerHTML = count;
}

function del(id) {

	let element = document.getElementById(id);
  	let contt = element.parentNode.parentNode;
  	let par = contt.parentNode

 	if (contt.children[0].children[0].checked) {
 		console.log("can delete");
 		--numberOfNotes;
 		countAllNotes();
 		par.removeChild(contt);
 	} else {
 		alert("Checkbox !checked");
 	}
}