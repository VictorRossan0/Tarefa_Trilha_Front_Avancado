import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './js/Counter';
import TodoList from './js/TodoList';
import App from './App';
import './styles.css'; // Importe o arquivo CSS aqui

ReactDOM.render(
  <>
    <App />
    <Counter />
    <TodoList />
  </>,
  document.getElementById('root')
);
