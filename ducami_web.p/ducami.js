function addTodo() {

  const input=document.getElementById('todoInput');
  const text=input.value;


  const li=document.caretElement('li');


  li.innerHTML=text;


  document.getElementById('todoList').appendChild(li);


  input.value="";
}