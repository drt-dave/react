/** Recuder para gestionar el estado de una lista de tareas.
 * @param {Array} initialState - Estado inicial de la lista de tareas. Por defecto, es un array vació.
 * @param {Object} action - Tipo de acción que se va a realizar sobre el estado.
 * @param {string} action.type - Tipo de acción a realizar.
 * @param {Object} action.payload - Datos asociados a la acción (opcional).
 * @returns {Array} Nuevo estado de la lista de tareas después de aplicar la acción.
 */

export const TodoReducer = (initialState = [], action) => {

  // switch statement para manejar las diferentes tipos de acciones
  switch (action.type) {
	// Agregar una nueva tarea al estado
  	case '[TODO] Add Todo':
  		return [...initialState, action.payload]
	//Eliminar una tarea del estado
  	case '[TODO] Remove Todo':
	    //Filtrar todas las tareas excepto la que se va a eliminar
	  return initialState.filter(todo=> todo.id !== action.payload);
	//Cambiar el estado de completado de una tarea
  	case '[TODO] Toggle Todo':
	    //Mapear sobre todas las tareas y cambiar el estado de una tarea específica
	  return initialState.map(todo => {
		//Si la tarea coincide con el ID de la acción, cambiar su estado de completado
		if ( todo.id === action.payload ) {
		  return {
			...todo,
			done: !todo.done
		  }
		}
		//Devolver la tarea sin cambios si no coincide con el ID de la acción
		return todo;
	  })

  	default:
	  // Devolver el estado sin modificaciones si la acción no coincide con ningún tipo conocido
  		return initialState;
  }
}

