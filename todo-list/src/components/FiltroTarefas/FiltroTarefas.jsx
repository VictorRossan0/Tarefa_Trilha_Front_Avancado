import React, { useState } from 'react';

function FiltroTarefas({ setFiltro }) {
    const [filtroPrioridade, setFiltroPrioridade] = useState('');

    const handleChange = (event) => {
        setFiltroPrioridade(event.target.value);
        setFiltro(event.target.value);
    };

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="prioridade">Filtrar por prioridade:</label>
            </div>
            <select className="custom-select" id="prioridade" value={filtroPrioridade} onChange={handleChange} style={{ marginLeft: '10px', width: '200px' }}>
                <option value="">Todas</option>
                <option value="baixa">Baixa</option>
                <option value="media">Média</option>
                <option value="alta">Alta</option>
                <option value="imediata">Imediata</option>
            </select>
        </div>
    );
}

export default FiltroTarefas;
