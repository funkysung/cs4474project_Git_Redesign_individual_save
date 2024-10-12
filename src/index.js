import React from 'react';
import ReactDOM from 'react-dom';
import './css-files/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NotificationsProvider } from './NotificationsContext';

ReactDOM.render(
  <React.StrictMode>
    <NotificationsProvider>
      <App />
    </NotificationsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
