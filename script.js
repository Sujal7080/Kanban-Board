let tasksData = {};

const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress');
const done = document.querySelector('#done');
const columns = [todo, progress, done];
let dragElement = null;

/* ---------------- LOAD FROM STORAGE ---------------- */

if (localStorage.getItem('tasks')) {
  const data = JSON.parse(localStorage.getItem('tasks'));

  for (const col in data) {
    const column = document.querySelector(`#${col}`);

    data[col].forEach(task => {
      const div = document.createElement("div");
      div.classList.add("task");
      div.setAttribute("draggable", "true");
      div.innerHTML = `<h2>${task.title}</h2><p>${task.desc}</p><button class="delete-btn">Delete</button>`;
      column.appendChild(div);

      div.addEventListener("dragstart", () => {
        dragElement = div;
      });
    });
  }
}

updateCountsAndSave();

/* ---------------- DRAG SETUP FOR EXISTING TASKS ---------------- */

document.querySelectorAll(".task").forEach(task => {
  task.addEventListener("dragstart", () => {
    dragElement = task;
  });
});

/* ---------------- UPDATE COUNTS + SAVE ---------------- */

function updateCountsAndSave() {
  tasksData = {};

  columns.forEach(col => {
    const tasks = col.querySelectorAll('.task');
    const count = col.querySelector('.right');
    count.innerText = tasks.length;

    tasksData[col.id] = Array.from(tasks).map(t => ({
      title: t.querySelector("h2").innerText,
      desc: t.querySelector("p").innerText
    }));
  });

  localStorage.setItem("tasks", JSON.stringify(tasksData));
}

/* ---------------- COLUMN DRAG EVENTS ---------------- */

function addDragEventsOnColumn(column) {
  column.addEventListener("dragenter", e => {
    e.preventDefault();
    column.classList.add("hover-over");
  });

  column.addEventListener("dragleave", () => {
    column.classList.remove("hover-over");
  });

  column.addEventListener("dragover", e => {
    e.preventDefault();
  });

  column.addEventListener("drop", e => {
    e.preventDefault();
    column.appendChild(dragElement);
    column.classList.remove("hover-over");
    updateCountsAndSave();
  });
}

columns.forEach(addDragEventsOnColumn);

/* ---------------- MODAL ---------------- */

const toggleModalButton = document.querySelector('#toggle-modal');
const modalBg = document.querySelector('.modal .bg');
const modal = document.querySelector('.modal');
const addTaskButton = document.querySelector('#add-new-task');

toggleModalButton.addEventListener("click", () => {
  modal.classList.toggle("active");
});

modalBg.addEventListener("click", () => {
  modal.classList.remove("active");
});

/* ---------------- ADD TASK ---------------- */

addTaskButton.addEventListener("click", () => {
  const taskTitle = document.querySelector('#task-title-input').value;
  const taskDesc = document.querySelector('#task-desc-input').value;

  if (!taskTitle.trim()) return;

  const div = document.createElement("div");
  div.classList.add("task");
  div.setAttribute("draggable", "true");
  div.innerHTML = `<h2>${taskTitle}</h2><p>${taskDesc}</p><button class="delete-btn">Delete</button>`;

  div.addEventListener("dragstart", () => {
    dragElement = div;
  });

  todo.appendChild(div);
  updateCountsAndSave();
  modal.classList.remove("active");
});

/* ---------------- DELETE TASK ---------------- */

document.addEventListener("click", e => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.closest(".task").remove();
    updateCountsAndSave();
  }
});
