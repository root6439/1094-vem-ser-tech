import { Task } from "./shared/models/Task.js";

// TODO implementar descrição da task
let taskList = [];

function inputValido(inputEl) {
  if (inputEl instanceof HTMLInputElement) {
    if (inputEl.value.length > 4) {
      inputEl.classList = "";

      if (inputEl.dataset.error === "true") {
        document.querySelector("small").remove();
      }

      inputEl.dataset.error = "false";

      inputEl.removeAttribute("error");
      // inputEl.error = "false";

      return true;
    } else {
      inputEl.classList.add("input-error");

      let feedbackMessage = document.createElement("small");
      feedbackMessage.style.color = "red";
      feedbackMessage.textContent = "Digite ao menos 4 caracteres";

      inputEl.insertAdjacentElement("afterend", feedbackMessage);

      inputEl.dataset.error = "true";
      return false;
    }
  }
}

window.addTask = (event) => {
  if (event instanceof PointerEvent) {
    let input = document.querySelector("#nameTask");

    if (!inputValido(input)) {
      return;
    }

    let nameTask = input.value;
    let ul = document.querySelector("ul");

    let actualDate = new Date();

    let dateFormatted = formatDate(new Date());

    let newTask = new Task(taskList.length + 1, nameTask, dateFormatted, null);
    taskList.push(newTask);

    let li = document.createElement("li");

    // inserindo elementos dentro de outro via hard-code
    // li.innerHTML = `
    //     <p> ${newTask.name} </p>
    //     <input type="checkbox" onclick="finishTask(event)" />
    // `;

    // inserindo elementos dentro de outros através de criação
    let p = document.createElement("p");
    p.textContent = newTask.name;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = () => {
      finishTask(li, newTask.id);
    };

    // apaga as classes do elemento e substitui por classes novas
    // li.classList = "task task-item";

    // apenas adiciona uma classe ao nosso element
    li.classList.add("task", "task-openned");
    li.style.maxWidth = "200px";

    li.appendChild(p);
    li.appendChild(checkbox);

    ul.appendChild(li);
  }
};

window.finishTask = (li, id) => {
  // Buscando index com base numa condição
  // let taskIndex = taskList.findIndex((aux) => aux.id === id);
  // Removendo do array na posição do index encontrado
  // taskList.splice(taskIndex, 1);

  let task = taskList.find((aux) => aux.id === id);
  task.finishedAt = formatDate(new Date());
  task.openned = false;

  //   De uma vez só
  li.classList = "task task-closed";

  //   Removendo e adicionando
  li.classList.remove("task-openned");
  li.classList.add("task-closed");

  console.log(taskList);
};

function formatDate(date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

// button.addEventListener("click", (event) => { console.log(event) });

// button.onclick = (event) => { console.log(event) };
