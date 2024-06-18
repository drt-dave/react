// Esta documentación describe el componente TodoList y explica las propiedades que recibe y cómo se utiliza cada una.
// Además, detalla el uso del componente TodoItem para representar cata tarea en la lista y cómo se pasan las funciones
// de manipulación de tareas como propiedades a cada instancia de TodoItem.

import { TodoItem } from "./TodoItem";

/**
 * Componente funcional TodoList para mostrar una lista de tareas.
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.todos - Array que contiene las tareas a mostrar. Por defecto, es un array vacío.
 * @param {Function} props.onDeleteTodo - Función que se ejecuta al eliminar una tarea.
 * @param {Function} props.onToggleTodo - Función que se ejecuta al cambiar el estado de completado de una tarea.
 * @returns {JSX.Element} Elemento JSX que representa la lista de tareas.
 */

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
	return (
		<>
			{/* Lista que muestra las tareas */}
			<ul className="list-group">
				{
					//  Mapea sobre cada tarea en el array de tareas y muestra un componente TodoItem para cada una 
					todos.map(todo => (
						<TodoItem
							key={todo.id} // Clave única para cada tarea 
							todo={todo} // Propiedad que pasa la tarea al componente TodoItem
							onDeleteTodo={onDeleteTodo} // Propiedad que pasa la función para eliminar una tarea al componente TodoItem
							onToggleTodo={onToggleTodo} // Propiedad que pasa la función para cambiar el estado de completado de una tarea al componente TodoItem
						/>
					))
				}
			</ul>

		</>
	)
}

