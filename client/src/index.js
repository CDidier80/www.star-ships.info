import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App.js'
import React from 'react'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
