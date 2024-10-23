import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider  } from 'react-redux';
import App from './App.jsx'
import './index.css'
import { PokemonApp  } from './PokemonApp.jsx';
import { store } from './store/store.js';
import { TodoApp } from './TodoApp.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
	<Provider store={ store }>
	  {/* <App /> */}
	  {/* <PokemonApp/> */}
	  <TodoApp/>
	</Provider>
  </StrictMode>,
)