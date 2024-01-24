let dados = [
  ["Afranio Caires", "disponivel", "00:12:26"],
  ["Antonio Vinicius", "disponivel", "55:29:51"],
  ["Brenda Rayane", "disponivel", "36:23:33"],
  ["Bruna Silva", "disponivel", "54:56:05"],
  ["Douglas Alves", "disponivel", "59:56:20"],
  ["Elaine Santin (Nanne)", "disponivel", "55:51:31"],
  ["Emily Miro", "disponivel", "33:11:49"],
  ["Eric AG", "disponivel", "47:02:45"],
  ["Ewerton Fragoso", "disponivel", "03:57:07"],
  ["Fernando Tavares", "disponivel", "33:47:28"],
  ["Henricky Lima", "disponivel", "30:06:21"],
  ["Hiago Maitan", "disponivel", "11:41:14"],
  ["Ingrid Santana", "disponivel", "57:05:13"],
  ["Leandro Bispo Matos", "disponivel", "10:03:37"],
  ["Luana Maria Da Silva Pereira de Freitas", "disponivel", "18:27:31"],
  ["Lucas Gonçalves", "disponivel", "24:37:37"],
  ["Max Castro", "disponivel", "32:52:35"],
  ["Naira Souza N.", "disponivel", "08:54:31"],
  ["Reydson Barros", "disponivel", "12:18:25"],
  ["Rodrigo Feijao", "disponivel", "56:48:24"],
  ["Rodrigo 'dio' Dionissa", "disponivel", "23:55:12"],
  ["rodrigo carvalho", "disponivel", "14:28:13"],
  ["Thiago Freitas", "disponivel", "07:39:05"],
  ["Wild Barreto", "disponivel", "00:13:11"],
];

let nomes = dados.map((aluno) => aluno[0]);

console.log(nomes.length);

let grupos = [];
function dividirGrupos(nomes, qtdePorGrupo) {
  while (nomes.length > 0) {
    for (let i = 0; i < qtdePorGrupo && nomes.length > 0; i++) {
      let randomNumber = Math.floor(Math.random() * nomes.length);
      let grupo = nomes.splice(randomNumber, qtdePorGrupo);
      grupos.push(grupo);
    }
  }

  console.log(grupos);
}

dividirGrupos(nomes, 6);

for (let i = 0; i < grupos.length; i++) {
  let h2 = document.createElement("h2");
  h2.textContent = `Grupo ${i + 1}:`;
  document.body.appendChild(h2);
  grupos[i].forEach((element) => {
    let li = document.createElement("li");
    li.textContent = element;

    document.body.appendChild(li);
  });
}

// console.log(nomes);

// let grupos = [];
// let grupo = [];
// let grupo2 = [];

// for (let i = 0; i < nomes.length; i++) {

//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//   }

// }

// nomes.forEach((nome, index) => {
//   let randomNumber = Math.floor(Math.random() * 34);

//   console.log(nomes[index]);

//   if (grupo.length == 6) {

//   } else {
//     grupo.push(nome[randomNumber]);
//   }

//   nomes.splice(index, 1);
// });

// nomes.forEach((nome) => {});

