import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, LoginPage, AboutPage, NavBar } from "./"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
	return (
	<UserProvider>
	  <h1>MainApp</h1>
	  <NavBar/>
	  <hr />

	  <Routes>
		<Route path='/' element={<HomePage />} />
		<Route path='/about' element={<AboutPage />} />
		<Route path='/login' element={<LoginPage />} />

		{/* <Route path='/*' element={<LoginPage />} /> */}
		<Route path='/*' element={<Navigate to="/" />} />
	  </Routes>
		
	</UserProvider>
	)
}

