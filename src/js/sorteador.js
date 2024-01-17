let dados = [
  ["Afranio Caires", "disponivel", "00:12:26"],
  ["Antonio Vinicius", "disponivel", "55:29:51"],
  ["Brenda Rayane", "disponivel", "36:23:33"],
  ["Bruna Silva", "disponivel", "54:56:05"],
  ["Douglas Alves", "disponivel", "59:56:20"],
  ["Douglas Poeta", "disponivel", "47:20:19"],
  ["Elaine Santin (Nanne)", "disponivel", "55:51:31"],
  ["Emily Miro", "disponivel", "33:11:49"],
  ["Eric AG", "disponivel", "47:02:45"],
  ["Erick Garcia", "disponivel", "37:39:55"],
  ["Ewerton Fragoso", "disponivel", "03:57:07"],
  ["Fabio Lima", "disponivel", "35:48:49"],
  ["Felipe Matos", "disponivel", "29:33:50"],
  ["Fernando Tavares", "disponivel", "33:47:28"],
  ["Henricky Lima", "disponivel", "30:06:21"],
  ["Hiago Maitan", "disponivel", "11:41:14"],
  ["Ingrid Santana", "disponivel", "57:05:13"],
  ["Layna Moraes", "disponivel", "06:29:06"],
  ["Leandro Bispo Matos", "disponivel", "10:03:37"],
  ["Leandro Matos", "disponivel", "35:49:01"],
  ["Luana Maria Da Silva Pereira de Freitas", "disponivel", "18:27:31"],
  ["Lucas Gonçalves", "disponivel", "24:37:37"],
  ["Max Castro", "disponivel", "32:52:35"],
  ["Naira Souza N.", "disponivel", "08:54:31"],
  ["Nicolas Soares", "disponivel", "11:45:08"],
  ["Rafael Galdino", "disponivel", "44:28:52"],
  ["Reydson Barros", "disponivel", "12:18:25"],
  ["Rodrigo Feijao", "disponivel", "56:48:24"],
  ["Rodrigo 'dio' Dionissa", "disponivel", "23:55:12"],
  ["Thayane Jarosz", "disponivel", "00:11:45"],
  ["Thiago Freitas", "disponivel", "07:39:05"],
  ["Wild Barreto", "disponivel", "00:13:11"],
  ["maiky caires", "disponivel", "54:14:21"],
  ["rodrigo carvalho", "disponivel", "14:28:13"],
];

const alunos = dados.map((aluno) => aluno[0]);
console.log(alunos);

let grupos = [];
let grupo = [];

alunos.forEach((aluno, index) => {
  let randomNumber = Math.floor(Math.random() * 33);

  let grupo = [];

  grupo.push(aluno);
  grupo.splice(index, 1);

  if (grupo.length == 6) {
    grupos[grupos.length + 1];
  }

  grupos.push(grupo);

  console.log(alunos[randomNumber]);
});

function setGrupo() {
  let randomNumber = Math.floor(Math.random() * 33);
}

// nomes.forEach((nome) => {});
