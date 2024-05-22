import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';

function FormularioTarefa({ adicionarTarefa, tarefaEditando, setTarefaEditando }) {
    const [texto, setTexto] = useState(tarefaEditando ? tarefaEditando.texto : "");
    const [prioridade, setPrioridade] = useState(tarefaEditando ? tarefaEditando.prioridade : "baixa");

    const handleSubmit = e => {
        e.preventDefault();
        if (!texto || !prioridade) return;
        adicionarTarefa(texto, prioridade);
        setTexto("");
        setPrioridade("baixa");
        setTarefaEditando(null);
    };

    return (
        <div className="formulario-tarefa">
            <Form className="flex-grow-1">
                <Form.Group className="d-flex align-items-center">
                    <Form.Control
                        type="text"
                        value={texto}
                        onChange={e => setTexto(e.target.value)}
                        placeholder="Adicione uma nova tarefa"
                        style={{ marginRight: '10px' }}
                    />
                    <Form.Control
                        as="select"
                        value={prioridade}
                        onChange={e => setPrioridade(e.target.value)}
                        style={{ marginRight: '10px' }}
                    >
                        <option value="baixa">Baixa</option>
                        <option value="media">Média</option>
                        <option value="alta">Alta</option>
                        <option value="imediata">Imediata</option>
                    </Form.Control>
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={handleSubmit}>
                {tarefaEditando ? "Atualizar" : "Adicionar"}
            </Button>
        </div>
    );
}

export default FormularioTarefa;
