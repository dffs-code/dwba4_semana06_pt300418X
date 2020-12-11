class Aluno {
  constructor(primeiroNome, segundoNome, nota1, nota2) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = nota1;
    this.segundaNota = nota2;
  }

  nomeCompleto() {
    return this.primeiroNome + " " + this.segundoNome;
  }

  media() {
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }
  situacao() {
    if (this.media() > 6) return "Aprovado"
    else return "Reprovado"
  }
}

function criarAlunos() {
  var alunos = [new Aluno('Daniel', 'Formigoni', 8, 6),
                new Aluno('Nicolas', 'Soares', 10, 7)];


  alunos.forEach(mostrarAlunos);
}

function mostrarAlunos(item, index){
  alert("Nome Completo: " + item.nomeCompleto() + "\nMédia : " + item.media() + "\nSituação : " + item.situacao())
}

criarAlunos();