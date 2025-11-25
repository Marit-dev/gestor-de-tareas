<<<<<<< Updated upstream
=======
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

document.getElementById("taskForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const text = document.getElementById("taskInput").value.trim();
  if (!text) return;

  tasks.push({ id: Date.now(), text });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  document.getElementById("taskForm").reset();
});

function renderTasks() {
  const container = document.getElementById("taskList");
  container.innerHTML = "";

  tasks.forEach(t => {
    const div = document.createElement("div");
    div.textContent = t.text;
    container.appendChild(div);
  });
}

renderTasks();

>>>>>>> Stashed changes
