import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css'; // Importando arquivo CSS para estilização
import Header from './components/Header';
import Contador from './atividades/Contador';
import ListaItens from './atividades/ListaItens';
import { TarefasProvider, ListaTarefas } from './atividades/TarefasContext';
import ContadorReducer from './atividades/ContadorReducer';
import Soma from './atividades/Soma';
import Fatorial from './atividades/Fatorial';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <div className="image-container">
        <a href="https://capacitati.globalhitss.com.br/pluginfile.php/1/core_admin/logo/0x150/1658342593/HallCapacitaTiHorizontal.png" target="_blank" rel="noopener noreferrer">
          <img src="https://capacitati.globalhitss.com.br/pluginfile.php/1/core_admin/logo/0x150/1658342593/HallCapacitaTiHorizontal.png" alt="Logo 1" className="image" />
        </a>
        <a href="https://globalhitss.com/br/wp-content/uploads/2024/03/logo_BR-no-copy.png" target="_blank" rel="noopener noreferrer">
          <img src="https://globalhitss.com/br/wp-content/uploads/2024/03/logo_BR-no-copy.png" alt="Logo 2" className="image" />
        </a>
      </div>

      <div className="container">
        <Header title="Contador" />
        <Contador />
      
        <Header title="Lista de Itens" />
        <ListaItens />
      
        <Header title="Lista de Tarefas" />
        <TarefasProvider>
          <ListaTarefas />
        </TarefasProvider>
      
        <Header title="Contador com Reducer" />
        <ContadorReducer />
      
        <Header title="Soma de Números" />
        <Soma />
      
        <Header title="Fatorial de Número" />
        <Fatorial numero={5} />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
