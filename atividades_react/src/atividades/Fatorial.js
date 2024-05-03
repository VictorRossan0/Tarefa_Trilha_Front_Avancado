import React, { useState, useMemo } from 'react';

function Fatorial() {
    const [numero, setNumero] = useState(0);
    const [historico, setHistorico] = useState([]);

    const fatorial = useMemo(() => {
        const calcularFatorial = (num) => {
            if (num <= 1) return 1;
            return num * calcularFatorial(num - 1);
        };
        return calcularFatorial(numero);
    }, [numero]);

    const handleCalcular = () => {
        setHistorico([...historico, `O fatorial de ${numero} é ${fatorial}`]);
    };

    return (
        <div>
            <label htmlFor="numero">Digite o número:</label>
            <input
                type="number"
                id="numero"
                value={numero}
                onChange={(e) => setNumero(Number(e.target.value))}
            />
            <button onClick={handleCalcular}>Calcular Fatorial</button>
            {fatorial > 0 && <p>O fatorial de {numero} é {fatorial}</p>}
            {historico.length > 0 && (
                <>
                    <h3>Histórico de cálculos:</h3>
                    <ul>
                        {historico.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default Fatorial;
