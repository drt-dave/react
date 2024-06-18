// Esta documentación describe el componente TodoAdd, incluyendo las propiedades que recibe y cómo se utiliza cada una, así como la lógica para manejar el formulario de atregar nuevas tareas.
import { useForm } from "../hooks"; // Importa el hook personalizado useForm desde el directorio "../hooks"

/**
 * Componente funcional TodoAdd para agregar nuevas tareas.
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.onNewTodo - Función que se ejecuta al agregar una nueva tarea.
 * @returns {JSX.Element} Elemento JSX que representa el formulario para agregar nuevas tareas.
 */

export const TodoAdd = ( { onNewTodo } ) => {

  //Desestructura los valores retornados por el hook useForm
  const { description, onInputChange, onResetForm } = useForm({
	description:''//Estado inicial para la descripción de la n ueva tarea
  })
  //Función que se ejecuta al enviar el formulario
  const onFormSubmit = ( event ) => { 
	event.preventDefault(); // Evita que el formulario se envíe por defecto
	//Si la descripción de la nueva tarea tiene una longitud válida
	if (description.length <= 1) return;

	//Objeto que representa la nueva tarea a agregar
	const newTodo = {
	  id: new Date().getTime(),
	  done: false,
	  description: description,
	}
	//Si existe la función onNewTodo, ejecutarla pasando la nueva tarea como argumento
	onNewTodo && onNewTodo(newTodo); //Si onNewTodo existe se ejecuta
	onResetForm(); //Reiniciar el formulario después de agregar la nueva tarea
  } 

  // Devuelve el formulario para agregar nuevas tareas
  return (
	<>
	  <form onSubmit={ onFormSubmit }>
		{/* Campo de entrada para la descripción de la nueva tarea */}
		<input 
		  className="form-control" 
		  type="text" 
		  placeholder="form-control"
		  name="description"
		  value={description}
		  onChange={ onInputChange }
		/>
		{/* Botón para agregar la nueva tarea */}
		<button 
		  type="submit"// Tipo de botón (submit para enviar el formulario)
		  className="btn btn-outline-primary mt-1"
		>
		  Agregar
		</button>
	  </form>

	</>
  )
};

