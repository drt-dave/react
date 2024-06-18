Temas puntuales de la sección

¿Qué veremos en esta sección?

Profundizar en el tema de los Hooks

Crear otros customHooks

useState

useCounter - Personalizado

useEffect y sus precauciones

useRef

useFetch - Personalizado + optimizaciones

useLayoutEffect

Memo

useMemo

useCallback

Estos son los Hooks relativamente simples, aún hay mas que explicaremos más adelante, pero en esta sección nos enfocaremos en estos trabajos y para qué nos pueden servir.

Adicionalmente estaremos dejando las bases para lo que será una sección de pruebas sumamente interesante después.

- Se crea  ./src/01-useState/CounterApp.jsx se crea un componente contador de 3 valores donde solo aumenta el primero, se desestructuran counter1, counter2 y counter3 para utilizar el operador spread ... y así escribir solo la propiedad del estado que interesa actualizar 

- Se agrega al index.html el enlace a bootstrap

- Se crea ./src/01-useState/CounterWithCustomHook.jsx y ./src/hooks/useCounter.js 

- CounterWithCustomHooks es el mismo contador CounterApp.jsx pero que hace uso del customHook useCounter.js

- Se crea ./src/02-useEffect/SimpleForm.jsx aquí se monta en el estado la información que el usuario ingresa, se prueban las dependencias en el useEffect.

- Se crea ./src/02-useEffects/Message.jsx el cual se activa cuando se ingresa un usuario determinado "straider2" esto hace que se monte el componente <Message /> y el useEffect de este archivo muestra en pantalla las coordenadas del mouse. Cuando se desmonta el componente el return hace que se deje de mostrar las coordenadas 

- Se crea ./src/02-useEffect/FormWithCustomHook.jsx y el custom hook ./src/hooks/useForm.js

- Tarea crear una función onResetForm ( en useForm ) que restaure el valor inicial del estado del formulario al dar click en el boton borrar.

- Se crea ./src/03-examples/MultipleCustomHooks.jsx y el hook useFetch.js

- Se organiza mejor el useFetch (se actualiza cuando  cambia url, muestra "Cargando..." antes de mostrar la respuesta...etc)

- Se utiliza el useCounter en counjunto con el useFetch para cambiar el url con botones "anterior/siguiente", se tiene en cuenta cuando el counter sea 0

- Se crea ./src/03-examples/LoadingMessaje.jsx y PokemonCard.jsx

- Se edita useFetch para incorporar el caché: En este ejemplo se está usando un caché real, aunque es una caché muy simple, es real. Básicamente la variable localCache es un objeto que se utiliza para almacenar los datos de las respuestas de las solicitudes, cuando se hace una solicitud a una URL, primero se verifica si los datos de esa URL ya están en el localCache y si están, se utilizan esos datos y nose hace la solicitud getch, si no están entonces simplemente se hace la solicitud, se guardan los datos en localCache y luego se utilizan. 

- Se crea ./src/04-useRef/FocusScreen.jsx 

- Se crea ./src/05-useLayoutEffect/Layout.jsx  y se crea .src/03-examples/Quote.jsx utilicé una api diferente a la del video pues esta ya no sirve. Se edita useCounter (initialValue = 1, en vez de 10) para que no genere error la nueva api al dar click en siguiente, se agrega Quote al index de 03-examples 

- Se crea 06-memos/Memorize.jsx , Este archivo contiene el componente Memorize, que muestra cómo usar el componente Small de otro archivo. El componente Small está diseñado para memorizar su renderizado utilizando React.memo. El estado counter y la función increment provienen de un custom hook llamado useCounter, que proporciona un contador y una función para incrementarlo. El componente renderiza el contador utilizando el componente Small memorizado y dos botones para incrementar el contador y mostrar/ocultar un mensaje.


- Se crea 06-memos/Small.jsx  Este archivo contiene el componente Small, que simplemente muestra un valor pasado como prop dentro de una etiqueta <small>. El componente está memorizado usando React.memo, lo que significa que solo se volverá a renderizar si sus props cambian.

- Se crea 06-memos/MemoHook MemoHook.jsx Este archivo contiene el componente MemoHook, que utiliza el hook useMemo de React para memorizar un valor computado pesado y evitar su recálculo en cada renderizado. El estado counter y la función increment provienen de un custom hook llamado useCounter, que proporciona un contador y una función para incrementarlo. El componente renderiza el contador, el valor memorizado, y dos botones para incrementar el contador y mostrar/ocultar un mensaje. El valor memorizado se recalcula solo cuando el contador cambia.

- Se crea CallbackHook.jxs  Este archivo contiene el componente CallbackHook, que utiliza el hook useCallback de React para optimizar el rendimiento de una función de incremento. El estado counter almacena el valor actual del contador, y setCounter se utiliza para actualizar este estado. La función incrementFather es una versión optimizada de la función de incremento que se crea utilizando useCallback, lo que garantiza que esta función se memorice y no se vuelva a crear en cada renderizado, a menos que sus dependencias cambien. Se usa un useEffect para demostrar cómo se ejecutaría un efecto secundario cada vez que cambie incrementFather, pero está comentado para evitar un bucle infinito. El componente devuelve un título que muestra el valor del contador y un componente ShowIncrement, que recibe la función de incremento optimizada como prop.

- Se crea ShowIncrement.jsx Este archivo contiene el componente ShowIncrement, que muestra un botón que llama a la función increment pasada como prop cuando se hace clic en él. El componente está memorizado usando React.memo, lo que significa que solo se volverá a renderizar si sus props cambian.

- Se crea 07-tarea-memo/Padre.jsx e Hijo.jsx ( código inicial proporcionado por Fernando) hay que implementar algo para que no se repita la renderización del console.log() del hijo , en este caso se utilizó  el método React.memo en el componente hijo y useCallback en el componente padre.

Sección 10 Profundizando Hooks - useReducer
	useReducer
	Reducers
	Teoría de un reducer
	Aplicación de TODOs
	CRUD local

Esta es una sección dedicada a comprender el concepto de un Reducer, el cual es sumamenteimportante para poder usar el contextAPI fácilmente.

- Reducer: Es una función pura que:
  1. No debe tener efectos secundarios
  2. No debe realizar tareas asíncronas
  3. Debe retornar siempre un estado nuevo
  4. No debe llamar localStorage o sessionStorage
  5. No debe requerir más de una acción que puede tener un argumento

- Se crea src/08-useReducer/intro-reducer.js y se hace import a este archivo desde main
 
- [ useReducer React](https://es.react.dev/reference/react/useReducer)

- Se crea src/08-useReducer/TodoApp.jsx

- Se crea TodoReducer.jsx	

- Se crea TodoList.jsx TodoItem.jsx TodoAdd.jsx y un archivo de barril

- Tarea: Crear un customHook y usarlo para manejar la lógica de los todos de tal forma que en TodoApp solo quede el llamado a este hook con useReducer y el jsx que retorna TodoApp 

- Se crea src/hooks/useTodo.js y ahora la lógica queda en el useTodo

## Temas Puntuales de la sección 11 - useContext

Context
Provider
useContext
React Router
Links y NavLinks
CreateContext
SPA (Single Page Aplication)

El objetivo de la sección es principalmente aprender sobre Context, el Router es un valor agregado que exploraremos mucho mas en próximas secciones, pero al usar un Router, podemos explicar claramente el problema y necesidad del Context.

- Se crea /src/09-useContext/MainApp.jsx AboutPage.jsx  HomePage.jsx y LoginPage.jsx.
- Se instala en el proyecto con el comando yarn add react-router-dom@6 (versión mas reciente a la fecha)
- Se configura browser-router en el main
- Se configuran las rutas en /09-useContext/MainApp.jsx
- En MainApp se agregan los Link a los path /, /about, y /login. En index.css se agrega la regla de estilo para Link, usando el selector de ancor "a"
- Tarea: Se crea /09-useContext/NavBar.jsx y se ponen en él los Link
- Se edita el NavBar con código copiado de bootstrap ( se cambia class por className y se borran lineas innecesarias, también se cambian los ancor tags "a" por <NavLink to=/path /> ), se usa el operador ternario para implementar la clase isActive que indica en que ruta me encuentro.
- Se crea src/09-useContect/context/UserContext.jsx
- Se crea src/09-useContect/context/UserProvider.jsx
- Se edita el <MainApp /> reemplazando el gragmento con el <UserProvider />
- Se edita LoginPage y HomePage con useContext



















