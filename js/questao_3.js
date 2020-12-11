var nome = "Daniel Formigoni";
var nota1 = 7;
var nota2 = 8.5;
var nota1_pond = nota1*0.6;
var nota2_pond = nota2*0.4;
var media = nota1_pond + nota2_pond;

alert("Aluno: " + nome + "\nNota 1: " + nota1 + "\nNota 2: " + nota2);
alert("Aluno: " + nome + "\nNota Final: " + media.toFixed(2));