import React, { useState } from 'react';

function Contador() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Contagem: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
}

export default Contador;
