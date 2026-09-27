let currentMood = 'medium';
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function setMood(mood) {
  currentMood = mood;
  renderTasks();
}

function addTask() {
  const text = document.getElementById('taskText').value.trim();
  const difficulty = document.getElementById('taskDifficulty').value;

  if (text === '') {
    alert('Please enter a task');
    return;
  }

  tasks.push({
    text: text,
    difficulty: difficulty,
    done: false
  });

  document.getElementById('taskText').value = '';
  saveTasks();
  renderTasks();
}

function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function clearAllTasks() {
  if (confirm('Are you sure you want to delete all tasks?')) {
    tasks = [];
    saveTasks();
    renderTasks();
  }
}

function sortByMood(taskList) {
  const order = {
    low: { easy: 0, medium: 1, hard: 2 },
    medium: { easy: 0, medium: 0, hard: 1 },
    high: { hard: 0, medium: 1, easy: 2 }
  };

  return [...taskList].sort((a, b) => {
    return order[currentMood][a.difficulty] - order[currentMood][b.difficulty];
  });
}

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';

  document.getElementById('taskCounter').innerText =
    `${tasks.filter(t => !t.done).length} tasks remaining`;

  const sorted = sortByMood(tasks);

  sorted.forEach((task) => {
    const realIndex = tasks.indexOf(task);
    const li = document.createElement('li');
    if (task.done) li.classList.add('done');

    li.innerHTML = `
      <span onclick="toggleDone(${realIndex})" style="cursor:pointer; flex:1;">
        ${task.text} (${task.difficulty})
      </span>
      <button onclick="deleteTask(${realIndex})">Delete</button>
    `;

    list.appendChild(li);
  });
}

renderTasks();
