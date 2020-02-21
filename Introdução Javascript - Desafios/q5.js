//Dado o seguinte vetor de objetos:

var usuarios = [
 {
 nome: "Diego",
 habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];

/*
Escreva uma função que produza o seguinte resultado:
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
*/

for (var usuario of usuarios){
    console.log('O ' + usuario.nome + ' possui as habilidades: ' + usuario.habilidades.join(", "));
}