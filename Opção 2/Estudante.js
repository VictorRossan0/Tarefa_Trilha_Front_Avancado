import { Pessoa } from './Pessoa.js';

export class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }

    seApresentar() {
        return `${super.seApresentar()} Eu estudo ${this.curso}.`;
    }
}
