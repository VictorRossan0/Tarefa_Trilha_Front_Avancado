import React, { useState } from "react";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Verifique se esta linha está presente


function Tarefa({ tarefa, index, marcarTarefa, removerTarefa }) {
  return (
    <div className="tarefa">
      <span style={{ textDecoration: tarefa.isDone ? "line-through" : "" }}>{tarefa.texto}</span>
      <div>
        <Button variant="outline-success" onClick={() => marcarTarefa(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removerTarefa(index)}>✕</Button>
      </div>
    </div>
  );
}

function FormularioTarefa({ adicionarTarefa }) {
  const [valor, setValor] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!valor) return;
    adicionarTarefa(valor);
    setValor("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label><b>Adicionar Tarefa</b></Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={valor}
          onChange={e => setValor(e.target.value)}
          placeholder="Adicione uma nova tarefa"
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mb-3">
        Adicionar
      </Button>
    </Form>
  );
}

function App() {
  const [tarefas, setTarefas] = useState([
    {
      texto: "Esta é uma tarefa de exemplo",
      isDone: false
    }
  ]);

  const adicionarTarefa = texto => {
    const novasTarefas = [...tarefas, { texto }];
    setTarefas(novasTarefas);
  };

  const marcarTarefa = index => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].isDone = true;
    setTarefas(novasTarefas);
  };

  const removerTarefa = index => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="d-flex justify-content-between">
          <img
            src="https://globalhitss.com/br/wp-content/uploads/2024/03/logo_BR-no-copy.png"
            alt="Logo"
            className="img-fluid mx-auto d-block mb-4 float-start"
          />
          <img
            src="https://capacitati.globalhitss.com.br/pluginfile.php/1/core_admin/logo/0x150/1658342593/HallCapacitaTiHorizontal.png"
            alt="CapacitaTI"
            className="img-fluid mx-auto d-block mb-4 float-end"
            width="35%"
          />
        </div>
        <h2 className="text-center mb-4">Aplicativo React para Lista de Tarefas</h2>
        <FormularioTarefa adicionarTarefa={adicionarTarefa} />
        <div>
          {tarefas.map((tarefa, index) => (
            <Card key={index}>
              <Card.Body>
                <Tarefa
                  index={index}
                  tarefa={tarefa}
                  marcarTarefa={marcarTarefa}
                  removerTarefa={removerTarefa}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
