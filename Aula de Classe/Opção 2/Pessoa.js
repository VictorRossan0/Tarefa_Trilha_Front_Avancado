export class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    seApresentar() {
        return `Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }
}
