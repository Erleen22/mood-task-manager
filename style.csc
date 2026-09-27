body {
  font-family: Arial, sans-serif;
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f4f4f9;
  text-align: center;
}

h1 {
  color: #333;
}

.mood-section {
  margin-bottom: 20px;
}

.mood-section button {
  margin: 5px;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #ddd;
}

.mood-section button:hover {
  background-color: #ccc;
}

.task-input {
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
}

.task-input input {
  flex: 1;
  padding: 8px;
}

.task-input select,
.task-input button {
  padding: 8px;
}

#taskList {
  list-style: none;
  padding: 0;
  text-align: left;
}

#taskList li {
  background: white;
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

#taskList li.done {
  text-decoration: line-through;
  opacity: 0.6;
}
