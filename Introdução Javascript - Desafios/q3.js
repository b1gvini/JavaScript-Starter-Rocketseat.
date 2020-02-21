/*
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.
*/

function temHabilidade(skills) {
    var existe = false
    if (skills.indexOf("Javascript") !== -1){
        existe= true
    }
    console.log(existe)
   }
   var skills = ["Javascript", "ReactJS", "React Native"];
   temHabilidade(skills);