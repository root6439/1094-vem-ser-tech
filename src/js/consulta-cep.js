let formCep = document.forms[0];

console.dir(formCep);

formCep.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  let formData = new FormData(formCep);
  console.log(formData.get("cep"));
  console.log(formData.get("logradouro"));
});

formCep[0].addEventListener("input", async (event) => {
  console.log(event.target.value.length);
  if (event.target.value.length >= 8) {
    let address = await getCep(event.target.value);
    preencherInput(address.logradouro, 1);
    preencherInput(address.bairro, 2);
    preencherInput(address.localidade, 3);
    formCep[4].disabled = false;
    formCep[5].disabled = false;
  }
});

async function getCep(cep) {
  return await fetch(`https://viacep.com.br/ws/${cep}/json`).then((resp) =>
    resp.json()
  );
}

function preencherInput(value, input) {
  let inputLogradouro = formCep[input];
  inputLogradouro.value = value;
  inputLogradouro.disabled = false;
}
