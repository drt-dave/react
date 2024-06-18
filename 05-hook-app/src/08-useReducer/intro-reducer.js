// initialState: Representa el estado inicial de la lista de tareas.
// todoReducer: Función reducer que gestiona el estado de la lista de tareas. Recibe el estado actual y una acción, y devuelve un nuevo estado según la acción realizada.
// todos: variable que contiene el estado actual de la lista de tareas.
// newTodo: Onjeto que representa una nueva tarea a agregar.
// addTodoAction: Objeto que contiene una acción para agregar una nueva tarea.
// LLamada al reducer: Se llama al reducer todoReducer con el estado actual (todos) y la acción para agregar una nueva tarea (addTodoAction), actualizando así el estado de la lista de tareas con la nueva tarea agregada.

// Definición del estado inicial de la lista de tareas
const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del alma',
  done: false,
}];

// Reducer para gestional el estado de la lista de tareas
const todoReducer = ( state = initialState, action = {} ) => {
  // Si la acción es de tipo ' add todo', agregar una nueva tarea al estado
  if (action.type === '[TODO] add todo') {
	return [...state, action.payload]
  }
  // Si la acción no coincide con ningún tipo conocido, devolver el estado sin modificar
  return state;
}

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Recolectar la piedra del poder',
  done: false,
}

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo,
}


// LLamada al reducer para agregar una nueba tarea al estado actual
todos = todoReducer(todos, addTodoAction);
console.log(todos);

