import {Navigate, Route, Routes} from "react-router-dom"
import {AuthRoutes} from "./routes/AuthRoutes"
import {JournalRoutes} from "../journal/routes/JournalRoutes"
import {useDispatch, useSelector} from "react-redux"
import {CheckingAuth} from "../../ui/components/CheckingAuth"
import {useEffect} from "react"
import {onAuthStateChanged} from "firebase/auth"
import {FirebaseAuth} from "../firebase/config"
import {logout, login} from "../store/auth"
import {useCheckAuth} from "../hooks/useCheckAuth"

export const AppRouter = () => {

  const status = useCheckAuth();

  if ( status  === 'checking' ) {
	return <CheckingAuth/>
  }


  return (
	<Routes>

	  {
		(status === 'authenticated')
		  ? <Route path="/*" element={ <JournalRoutes/> }/>
		  : <Route path="/auth/*" element={ <AuthRoutes/> }/>
	  }

	  <Route path='/*' element={ <Navigate to='/auth/login'/> } /> 

	  {/* Login y Registro */}
	  {/* <Route path="/auth/*" element={ <AuthRoutes/> }/> */}

	  {/* JournalApp */}
	  {/* <Route path="/*" element={ <JournalRoutes/> }/> */}
	</Routes>
  )
}

