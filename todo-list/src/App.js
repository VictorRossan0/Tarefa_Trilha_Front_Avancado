import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import FormularioTarefa from './components/FormularioTarefa';

function Tarefa({ tarefa, index, marcarTarefa, removerTarefa }) {
  return (
    <div className={`tarefa ${tarefa.isDone ? 'tarefa-concluida' : ''} ${tarefa.prioridade === 'imediata' ? 'tarefa-imediata' : ''}`}>
      <span>{tarefa.texto}</span>
      <div>
        {/* Indicador de prioridade */}
        {tarefa.prioridade === "alta" && <span className="badge bg-danger">Alta</span>}
        {tarefa.prioridade === "media" && <span className="badge bg-warning">Média</span>}
        {tarefa.prioridade === "baixa" && <span className="badge bg-success">Baixa</span>}
        {tarefa.prioridade === "imediata" && <span className="badge bg-danger">Imediata</span>}
        {/* Botões de marcação e remoção */}
        <button onClick={() => marcarTarefa(index)}><FaCheck /></button>
        <button onClick={() => removerTarefa(index)}><FaTimes /></button>
      </div>
    </div>
  );
}

function App() {
  // Estado para armazenar as tarefas
  const [tarefas, setTarefas] = useState([]);

  // Efeito para carregar as tarefas iniciais da API
  useEffect(() => {
    fetch('http://localhost:3001/tarefas')
      .then(response => response.json())
      .then(data => setTarefas(data))
      .catch(error => console.error('Erro ao carregar tarefas:', error));
  }, []);

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = (texto, prioridade) => {
    fetch('http://localhost:3001/tarefas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ texto, isDone: false, prioridade })
    })
      .then(response => response.json())
      .then(data => setTarefas([...tarefas, { ...data, id: tarefas.length + 1 }]))
      .catch(error => console.error('Erro ao adicionar tarefa:', error));
  };

  // Função para marcar uma tarefa como concluída
  const marcarTarefa = index => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].isDone = true;
    setTarefas(novasTarefas);
  };

  // Função para remover uma tarefa
  const removerTarefa = index => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  };

  return (
    <div className="app bg-blue">
      <div className="card">
        <div className="container">
          <div className="d-flex justify-content-between mb-4">
            <div className="logo-container">
              <img
                src="https://globalhitss.com/br/wp-content/uploads/2024/03/logo_BR-no-copy.png"
                alt="Logo"
                className="img-fluid mx-auto d-block mb-4"
                style={{ maxWidth: '300px', marginTop: '20px' }}
              />
            </div>
            <div className="logo-container">
              <img
                src="https://capacitati.globalhitss.com.br/pluginfile.php/1/core_admin/logo/0x150/1658342593/HallCapacitaTiHorizontal.png"
                alt="CapacitaTI"
                className="img-fluid mx-auto d-block mb-4"
                style={{ maxWidth: '300px', marginTop: '20px' }}
              />
            </div>
          </div>
          <div className="row">
            <h3 className="titulo-app">Aplicativo React para Lista de Tarefas</h3>
          </div>

          <FormularioTarefa adicionarTarefa={adicionarTarefa} />
          <div className="mt-4">
            <TransitionGroup className="tarefas-lista">
              {tarefas.map((tarefa, index) => (
                <CSSTransition key={tarefa.id} timeout={300} classNames="tarefa">
                  <Card>
                    <Card.Body>
                      <Tarefa
                        index={index}
                        tarefa={tarefa}
                        marcarTarefa={marcarTarefa}
                        removerTarefa={removerTarefa}
                      />
                    </Card.Body>
                  </Card>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
