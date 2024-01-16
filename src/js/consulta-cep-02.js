import { Address } from "./shared/models/Address.js";

let address = JSON.parse(localStorage.getItem("usuario_endereco"));

console.log(address.bairro);

let p = document.createElement("p");
p.textContent = `cep: ${address.cep}`;
document.body.appendChild(p);
p = document.createElement("p");
p.textContent = `bairro: ${address.bairro}`;
document.body.appendChild(p);
p = document.createElement("p");
p.textContent = `cidade: ${address.localidade}`;
document.body.appendChild(p);
p = document.createElement("p");
p.textContent = `numero: ${address.numero}`;
document.body.appendChild(p);
p = document.createElement("p");
p.textContent = `complemento: ${address.complemento}`;
document.body.appendChild(p);
