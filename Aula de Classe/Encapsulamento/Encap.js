function Carro(modelo, ano) {
    let velocidade = 0;

    function alterarVelocidade(delta) {
        const novaVelocidade = velocidade + delta;
        if (novaVelocidade >= 0 && novaVelocidade <= 200) {
            velocidade = novaVelocidade;
        } else {
            console.log('Velocidade fora dos limites');
        }
    }

    this.acelerar = function() {
        alterarVelocidade(5);
    };

    this.desacelerar = function() {
        alterarVelocidade(-5);
    };

    this.getVelocidade = function() {
        return velocidade;
    };

    this.modelo = modelo;
    this.ano = ano;
}

const meuCarro = new Carro('Ford', 2020);
meuCarro.acelerar();
console.log(meuCarro.getVelocidade());