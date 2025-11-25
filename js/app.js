let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

document.getElementById("taskForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const text = document.getElementById("taskInput").value.trim();
  if (!text) return;

  tasks.push({ id: Date.now(), text });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  document.getElementById("taskForm").reset();
  renderTasks();
});

function renderTasks() {
  const container = document.getElementById("taskList");
  container.innerHTML = "";

  tasks.forEach(t => {
    const div = document.createElement("div");

    div.innerHTML = `
      <span>${t.text}</span>

      <div class="buttons">
        <button class="edit-btn" onclick="editTask(${t.id})">Editar</button>
        <button class="delete-btn" onclick="deleteTask(${t.id})">Eliminar</button>
      </div>
    `;

    container.appendChild(div);
  });
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function editTask(id) {
  const task = tasks.find(t => t.id === id);

  const newText = prompt("Edita la tarea:", task.text);
  if (!newText) return;

  tasks = tasks.map(t =>
    t.id === id ? { ...t, text: newText } : t
  );

  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

renderTasks();
