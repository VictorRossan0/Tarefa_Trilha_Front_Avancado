const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const themeToggleBtn = document.getElementById('toggle-btn');
let darkMode = false;

themeToggleBtn.addEventListener('click', () => {
  darkMode = !darkMode;
  const body = document.querySelector('body');
  body.classList.toggle('dark-mode', darkMode);
  themeToggleBtn.textContent = darkMode ? 'Modo Claro' : 'Modo Escuro';
});

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const existingTasks = Array.from(taskList.children).map(task => task.querySelector('span').textContent);
  if (existingTasks.includes(taskText)) {
    alert('Esta tarefa já existe na lista.');
    return;
  }

  const taskItem = document.createElement('li');
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  taskItem.appendChild(taskSpan);

  const removeBtn = document.createElement('button');
  const removeIcon = document.createElement('i');
  removeIcon.classList.add('fas', 'fa-trash-alt');
  removeBtn.appendChild(removeIcon);
  removeBtn.classList.add('remove-btn');
  removeBtn.addEventListener('click', () => {
    taskItem.remove();
  });
  taskItem.appendChild(removeBtn);

  const completeBtn = document.createElement('button');
  const completeIcon = document.createElement('i');
  completeIcon.classList.add('fas', 'fa-check');
  completeBtn.appendChild(completeIcon);
  completeBtn.classList.add('complete-btn');
  completeBtn.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });
  taskItem.appendChild(completeBtn);

  taskList.appendChild(taskItem);
  taskInput.value = '';
});
