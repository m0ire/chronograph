import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

Notification.requestPermission();

ReactDOM.render(<App />, document.getElementById('root'));
