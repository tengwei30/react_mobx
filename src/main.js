import React from 'react';
import ReactDOM from 'react-dom';
import * as mobx from 'mobx';
import 'antd/dist/antd.css';
import App from './pages/App.jsx';
import { AppContainer } from 'react-hot-loader';


ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('root')
)


