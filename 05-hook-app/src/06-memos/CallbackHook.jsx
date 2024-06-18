import {useCallback, useEffect, useState} from "react"
import {ShowIncrement} from "./ShowIncrement";

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(
	(value) => { 
	  setCounter( (c) => c + value  );
	},
	[],
  )

  // esto generaría un bucle infinito sino fuera por el memo
  useEffect(() => {
	// incrementFather();
  }, [incrementFather])


  // const increment = () => { 
  // setCounter( counter + 1 );
  // } 


  return (
	<>
	  <h1>useCallback Hook: {counter} </h1>
	  <hr />

	  <ShowIncrement increment={ incrementFather }/>
	</>
  )
}

