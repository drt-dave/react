// Esta documentación describe el ook personalizado useTodo, incluyendo los parámetros que recibe y cómo se utiliza, así como las funciones y efector que manejan el estado de la lista de tareas y su persistencia en el localStorage.

import { useEffect, useReducer } from "react"; // Importa los hooks useEffect y useReducer desde React
import { TodoReducer} from "../08-useReducer" //Importa el reducer TodoReducer desde el archivo "../08-useReducer";

/**
 * Hook personalizado useTodo para gestional el estado de la lista de tareas.
 * Utiliza el localStorage para almacenar y recuperar el estado de las tareas.
 * @param {Array} initialState - Estado inicial de la lista de tareas. Por defecto, es un array vacío.
 * @returns {Object} Objeto que contiene el estado de las tareas y funciones para manipularlas.
 */

export const useTodo = ( initialState ) => {

  //Función  init para obtener el estado inicial de las tareas desde el localStorage o usar el initialState  si no hay datos en el localStorage
  const init = () => { 
	return JSON.parse(localStorage.getItem('todos')) || [];
  } 
  // Usa el hook useReducer para gestionar el estado de las tareas
  const [todos, dispatch] = useReducer( TodoReducer, initialState, init);

  //Efecto para actualizar el localStorage cuando cambia el estado de las tareas
  useEffect(() => {
	localStorage.setItem("todos", JSON.stringify(todos));
  }, [ todos ]);

  // Función para agregar una nueva tarea al estado
  const handleNewTodo = (todo)=> {
	const action = {
	  type: "[TODO] Add Todo", //Tipo de accion para agregar una nueva tarea
	  payload: todo,//Datos de la nueva tarea
	};

	dispatch(action);//Ejecutar la accion para agregar la nueva tarea
  };

  //Funcion para eliminar una tarea del estado
  const handleDeleteTodo = ( id ) => { 
	dispatch({
	  type: "[TODO] Remove Todo", // Tipo de acción para eliminar una tarea
	  payload: id, // ID de la tarea a eliminar
	});
  };


  //Función para cambiar el estado de completado de una tarea en el estado
  const handleToggleTodo = (id) => { 
	dispatch({
	  type: "[TODO] Toggle Todo", // Tipo de acción para cambiar el estado de completado de una tarea
	  payload: id, // ID de la tarea a cambiar
	})
  };

  return { 
	todos, // Estado actual de las tareas
	todosCount : todos.length, // Cantidad total de tareas en la lista
	pendingTodosCount: todos.filter(todo => !todo.done).length, // Cantidad de tareas pendientes (no completadas)
	handleDeleteTodo, // Función para eliminar una tarea
	handleToggleTodo, // Función para cambiar el estado de completado de una tarea
	handleNewTodo, // Función para agregar una nueva tarea
  };
};

