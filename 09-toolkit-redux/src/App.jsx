import {useSelector, useDispatch} from 'react-redux'
import './App.css'
import {increment, decrement, restart, incrementBy} from './store/slices/counter';

function App() {
  const { counter  }  = useSelector( state => state.counter );
  const dispatch = useDispatch();
  return (
	<>
	  <div className='App'>
		<a href="https://react.dev" target="_blank">
		</a>
	  </div>
		  <h1>count is  {counter}</h1>
	  <div className="App-header">
		<button onClick={() => dispatch(increment())}>
		  Increment
		</button>
		<button onClick={() => dispatch(incrementBy(2))}>
		  Increment by 2
		</button><button 
		  onClick={() => dispatch (decrement())}>
		  Decrement
		</button>
		<button 
		  onClick={() => dispatch (restart())}>
		  Restart
		</button>
	  </div>
	</>
  )
}

export default App
