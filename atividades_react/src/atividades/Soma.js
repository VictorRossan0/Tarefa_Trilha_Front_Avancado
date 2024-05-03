import React, { useState, useCallback } from 'react';

function Soma() {
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);

    const soma = useCallback(() => {
        return numero1 + numero2;
    }, [numero1, numero2]);

    return (
        <div>
            <input type="number" value={numero1} onChange={e => setNumero1(Number(e.target.value))} />
            <input type="number" value={numero2} onChange={e => setNumero2(Number(e.target.value))} />
            <p>Resultado: {soma()}</p>
        </div>
    );
}

export default Soma;
