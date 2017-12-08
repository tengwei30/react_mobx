import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { renderRoutes } from 'react-router-config'
import LayoutPage from './LayoutPages/index.jsx'
import routes from '../routes/index.js'
import stores from '../stores/index'
import * as mobx from 'mobx';

const App = () => (
    <Provider {...stores()}>
       <Router>
            {renderRoutes(routes)}
        </Router> 
    </Provider>
  )
export default App