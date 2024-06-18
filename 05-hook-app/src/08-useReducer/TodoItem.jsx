// Esta documentación describe el componente TodoItem y explica las propiedades que recibe ycómo se utiliza cada una. Además, detalla el manejo de eventos para cambiar el estado de completado de la tarea al hacer clic en la tarea, así como para eliminar la tarea al hacer clic en el botón "Borrar".
/**
 * Componente funcional TodoItem para representar una tarea en la lista.
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.todo - Objeto que contiene los datos de la tarea a representar.
 * @param {number} props.todo.id - Identificador único de la tarea.
 * @param {string} props.todo.description - Descripción de la tarea.
 * @param {boolean} props.todo.done - Estado de completado de la tarea.
 * @param {Function} props.onDeleteTodo - Función que se ejecuta al eliminar la tarea.
 * @param {Function} props.onToggleTodo - Función que se ejecuta al cambiar el estado de completado de la tarea.
 * @returns {JSX.Element} Elemento JSX que representa una tarea en la lista.
 */

export const TodoItem = ( { todo, onDeleteTodo, onToggleTodo } ) => {
  return (
	<>
	  {/* Elemento li que representa la tarea */}
	  <li className="list-group-item d-flex justify-content-between"
		onClick={ () => onToggleTodo(todo.id) }
	  >
		{/* Span que muestra la descripción de la tarea */}
		<span 
		  aria-label="span"
		  className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`}>
		  {todo.description} {/* Muestra la descripción de la tarea */}
		</span>
		{/* Botón para eliminar la tarea */}
		<button className="btn btn-danger"
		  onClick={ () => onDeleteTodo(todo.id)} // Manejador de eventos para eliminar la tarea al hacer clic en el botón
		>Borrar</button>
	  </li>

	</>
  )
}


