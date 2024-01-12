// inputName

let inputs = document.getElementsByTagName("input");
let inputCheckbox = inputs.item(1);
inputCheckbox.checked = true;

inputName.value = "macarrão";
console.dir(inputCheckbox);
console.dir(inputs);

let ps = document.getElementsByClassName("paragraph");
console.log(ps);

let p = ps.item(0);
p.textContent = "Seila <bold>qualquer</bold> coisa";
// p.innerHTML = "Seila <b>qualquer</b> coisa"

const lista1 = document.querySelectorAll(".paragraph");
const lista2 = document.getElementsByClassName("paragraph");
console.log(lista1);
console.log(lista2);
lista1[0].remove();
lista2[1].remove();
console.log(lista1);
console.log(lista2);

console.clear();
const ps2 = document.querySelector(".paragraph");
const ps3 = document.querySelectorAll(".paragraph");
console.log(ps2);
console.log(ps3);

Array.from(ps, (el,index) => el.textContent = `Elemento ${index}`)

// let aux = ps3.forEach((aux2) => {
//   aux2.textContent = "Alterou geral";
// });
