import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './pages/App.jsx';
import { AppContainer } from 'react-hot-loader';


ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('root')
)


