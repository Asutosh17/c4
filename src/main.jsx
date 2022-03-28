import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {Provider as ReduxProvider} from 'react-redux'
import {store} from './Redux/store'

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
