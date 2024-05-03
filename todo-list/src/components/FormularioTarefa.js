import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';

function FormularioTarefa({ adicionarTarefa }) {
    const [texto, setTexto] = useState("");
    const [prioridade, setPrioridade] = useState("baixa");

    const handleSubmit = e => {
        e.preventDefault();
        if (!texto || !prioridade) return;
        adicionarTarefa(texto, prioridade);
        setTexto("");
        setPrioridade("baixa");
    };

    return (
        <div className="formulario-tarefa">
            <Form onSubmit={handleSubmit} className="flex-grow-1">
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
                        <option value="imediata">Imediata</option>
                        <option value="alta">Alta</option>
                        <option value="media">Média</option>
                        <option value="baixa">Baixa</option>
                    </Form.Control>
                    <Button variant="primary" type="submit">
                        Adicionar
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
}

export default FormularioTarefa;
