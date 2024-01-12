import { Teste } from "./shared/models/Teste.js";

let button = document.getElementById("button");

button.addEventListener("click", function (event) {
  console.log(event);

  event.target.remove();
});

window.onClickButton = () => {
  let inputValue = document.getElementById("inputName").value;
  let checkboxValue = document.getElementById("checked").checked;

  let aux = new Teste();
  aux.name = inputValue;
  aux.checked = checkboxValue;

  confirm(`Olá ${aux.name}, você marcou a caixa como ${aux.checked}`);
};
