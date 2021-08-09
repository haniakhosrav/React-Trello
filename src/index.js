import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TrelloProvider } from './context/context';

ReactDOM.render(
  <TrelloProvider>
    <App />
  </TrelloProvider>
  ,
  document.getElementById('root')
);
