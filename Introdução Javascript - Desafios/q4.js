// Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:




function experiencia(anos) {
    if (anos<1){
        console.log("iniciante")
    }else if( anos>= 1 && anos <3){
        console.log("Intermediário")
    }else if ( anos >= 3 && anos <=6){
        console.log("Avançado")
    }else if( anos > 6){
        console.log("Jedi Master")
    }else{
        console.log("Informe Valor Válido")
    }
}
   var anosEstudo = 6;
   experiencia(anosEstudo);
   // De 0-1 ano: Iniciante
   // De 1-3 anos: Intermediário
   // De 3-6 anos: Avançado
   // De 7 acima: Jedi Master