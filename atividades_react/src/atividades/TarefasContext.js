import React, { useState, useContext, useEffect } from 'react';

const TarefasContext = React.createContext();

function TarefasProvider(props) {
    const [tarefas, setTarefas] = useState([]);

    // Simulando o carregamento das tarefas
    useEffect(() => {
        setTimeout(() => {
            setTarefas([
                { id: 1, nome: 'Tarefa 1' },
                { id: 2, nome: 'Tarefa 2' },
                { id: 3, nome: 'Tarefa 3' }
            ]);
        }, 1000); // Delay de 1 segundo para simular um carregamento assíncrono
    }, []);

    return (
        <TarefasContext.Provider value={{ tarefas, setTarefas }}>
            {props.children}
        </TarefasContext.Provider>
    );
}

function ListaTarefas() {
    const { tarefas } = useContext(TarefasContext);

    return (
        <ul>
            {tarefas.map(tarefa => (
                <li key={tarefa.id}>{tarefa.nome}</li>
            ))}
        </ul>
    );
}

export { TarefasProvider, ListaTarefas };
