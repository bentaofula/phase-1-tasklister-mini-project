document.addEventListener("DOMContentLoaded", () => {

  // your code here
  let submitForm = document.querySelector('form')
  submitForm.addEventListener('submit', (e) => {
    e.preventDefault()
    handleToDo(e.target['new-task-description'].value)
  }) 
});

function handleToDo(todo) {
  let li = document.createElement('li');
  let p = document.createElement('p');
  let btn = document.createElement('button');

  p.textContent = todo;
  btn.textContent = 'x';

  li.appendChild(p);
  li.appendChild(btn);
  document.querySelector('#tasks').appendChild(li);

  btn.addEventListener('click', function() {
    li.remove();
  });
}

