import { Pessoa } from './Pessoa.js';
import { Estudante } from './Estudante.js';

const pessoa1 = new Pessoa("Alice", 30);
console.log(pessoa1.seApresentar());

const estudante1 = new Estudante("Bob", 20, "Engenharia de Software");
console.log(estudante1.seApresentar());
