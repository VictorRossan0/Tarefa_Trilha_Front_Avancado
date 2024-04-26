// Definição da classe Pessoa
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    seApresentar() {
        return `Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }
}

// Definição da classe Estudante, que herda de Pessoa
class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }

    seApresentar() {
        return `${super.seApresentar()} Eu estudo ${this.curso}.`;
    }
}

// Criação de instâncias e interação com as classes
const pessoa1 = new Pessoa("Alice", 30);
console.log(pessoa1.seApresentar());

const estudante1 = new Estudante("Bob", 20, "Engenharia de Software");
console.log(estudante1.seApresentar());
