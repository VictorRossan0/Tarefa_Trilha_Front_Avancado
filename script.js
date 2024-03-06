const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const themeToggleBtn = document.getElementById('toggle-btn');

let darkMode = false;

themeToggleBtn.addEventListener('click', () => {
  darkMode = !darkMode;
  const body = document.querySelector('body');
  if (darkMode) {
    body.classList.add('dark-mode');
    themeToggleBtn.textContent = 'Modo Claro';
  } else {
    body.classList.remove('dark-mode');
    themeToggleBtn.textContent = 'Modo Escuro';
  }
});

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const existingTasks = Array.from(taskList.children).map(task => task.textContent);
  if (existingTasks.includes(taskText)) {
    alert('Esta tarefa já existe na lista.');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  taskItem.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    taskItem.remove();
  });

  taskList.appendChild(taskItem);
  taskInput.value = '';
});
