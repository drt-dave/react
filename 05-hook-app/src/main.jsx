import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//import { CounterApp } from './01-useState/CounterApp'
//import { HooksApp } from './HooksApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustomHook/>
  </React.StrictMode>,
)
