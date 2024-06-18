import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx';
import { SimpleForm } from './02-useEffect/SimpleForm.jsx';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
import {MultipleCustomHooks} from './03-examples/MultipleCustomHooks';
import {FocusScreen} from './04-useRef/FocusScreen';
import {Layout} from './05-useLayoutEffect/Layout';
import {Memorize} from './06-memos/Memorize';
import {CallbackHook} from './06-memos/CallbackHook';
import {Padre} from './07-tarea-memo/Padre';
import {TodoApp} from './08-useReducer';
import {MainApp} from './09-useContext/MainApp';
import {BrowserRouter} from 'react-router-dom';


// import './08-useReducer/intro-reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<BrowserRouter>
	  < MainApp />
	</BrowserRouter>
  </React.StrictMode>,
)
