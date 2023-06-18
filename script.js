let inputField = document.getElementById('inputField');
let toAdd = document.getElementById('add');
let toDo = document.getElementById('to-dos')

toAdd.addEventListener(
 'click', () => {
  var paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;
  toDo.appendChild(paragraph);
  const el_delete = document.createElement("button");
  el_delete.classList.add("delete");
  el_delete.innerHTML = "Delete"
  paragraph.appendChild(el_delete)
  inputField.value = "";
  el_delete.addEventListener('click', function(){
   paragraph.style.display = "none";
  })
 }
)