import { Address } from "./shared/models/Address.js";

let formCep = document.forms[0];

formCep.addEventListener("submit", async (event) => {
  event.preventDefault();

  let formData = new FormData(formCep);

  let address = new Address();

  address.bairro = formData.get("bairro");
  address.cep = formData.get("cep");
  address.complemento = formData.get("complemento");
  address.localidade = formData.get("cidade");
  address.logradouro = formData.get("logradouro");
  address.numero = formData.get("numero");

  localStorage.setItem("usuario_endereco", JSON.stringify(address));
  sessionStorage.setItem("usuario_endereco", JSON.stringify(address));

  console.log(address);
});

function setAux(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 1000);
  });
}

formCep[0].addEventListener("input", async (event) => {
  if (event.target.value.length >= 8) {
    let resp = await getCep(event.target.value);

    if (resp.erro) {
      event.target.classList.add("input-error");
      let errorText = document.createElement("small");
      errorText.classList.add("input-error");
      errorText.textContent = "CEP inexistente";

      // acessando a label através do array labels
      // event.target.labels[0].classList.add("input-error");

      // acessando a label através do parent
      event.target.parentNode.childNodes[1].classList.add("input-error");

      event.target.insertAdjacentElement("afterend", errorText);
      return;
    }

    preencherForm(resp);
  }
});

async function getCep(cep) {
  // usando dois awaits
  // let resp = await fetch(`https://viacep.com.br/ws/${cep}/json`);
  // return await resp.json();

  try {
    let resp = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    let respInJson = await resp.json();

    return respInJson;
  } catch (e) {
    console.log(e);
  }

  // usando dois thens
  // return fetch(`https://viacep.com.br/ws/${cep}/json`)
  //   .then((resp) => resp.json())
  //   .then(respInJson => {
  //     if (respInJson.erro) {
  //       console.log("Cep inexistente");
  //     }
  //   })

  // return await fetch(`https://viacep.com.br/ws/${cep}/json`).then((resp) =>
  //   resp.json()
  // );
}

function preencherForm(address) {
  preencherInput(address.logradouro, 1);
  preencherInput(address.bairro, 2);
  preencherInput(address.localidade, 3);
  formCep[4].disabled = false;
  formCep[5].disabled = false;
}

function preencherInput(value, input) {
  let inputLogradouro = formCep[input];
  inputLogradouro.value = value;
  inputLogradouro.disabled = false;
}
