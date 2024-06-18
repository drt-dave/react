// Esta documentación describe el componente TodoApp y cómo se integra con los componentes TodoAdd y TodoList
// Ademas, detalla el uso del hook useTodo para gestionar el estado delas tareas y cómo se pasan las funciones
// de manipulación de tareas como propiedades a los componentes hijos.

import { TodoAdd, TodoList  } from './';
import { useTodo } from '../hooks';

const initialState = []; // Estado inicial para la lista de tareas

/** 
 * Componente funcional TodoApp para la Aplicación de gestión de tareas
 * Utiliza el hook useTodo para gestionar el estado de las tareas.
 * @returns { JSX.Element } Elemento JSX que representa la interfaz de la Aplicación TodoApp.
 */

export const TodoApp = () => {

  // Desestructura los valores retornados por el hook useTodo
  const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo(initialState)

  return (
	<>
	  {/* Encabezado de la aplicación que muestra el recuento total de tareas y tareas pendientes */}
	  <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodosCount }</small></h1>
	  <hr />
	  {/* Contendor de la interfaz de usuario con dos columnas */}
	  <div className="row">
		{/* Columna izquierda con la lista de tareas */}
		<div className="col-7">
		  {/* Componente TodoList que muestra la lista de tareas */}
		  <TodoList
			todos={todos}
			onDeleteTodo={handleDeleteTodo}
			onToggleTodo={handleToggleTodo}
		  />
		</div>
		{/* Columna derecha con el formulario para agregar nuevas tareas */}
		<div className="col-5">
		  <h4>Agregar TODO</h4>
		  <hr/>
		  {/* Componente TodoAdd que muestra el formulario para agregar nuevas tareas */}
		  <TodoAdd onNewTodo={handleNewTodo}/>
		</div>
	  </div>
	</>
  )
}

