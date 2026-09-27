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
  tasks.splice(index,
