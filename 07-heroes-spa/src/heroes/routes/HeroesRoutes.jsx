import { Routes, Route, Navigate } from "react-router-dom"
import {Navbar} from "../../ui/components/Navbar"
import {MarvelPage, DcPage, HeroPage, SearchPage} from "../pages"

export const HeroesRoutes = () => {
  return (
	<>
	  <Navbar/>
	  <div className="container">
		<Routes>
		  <Route path="marvel" element={ <MarvelPage/> } />
		  <Route path="dc" element={ <DcPage/> } />

		  <Route path="search" element={ <SearchPage/> } />
		  <Route path="hero/:id" element={ <HeroPage /> } />


		  <Route path="/" element={ <Navigate to="/marvel" /> } />
		  {/* cambiar a  Navigate to="/login" si replace: true de Navigate no funciona */}
		  
		</Routes>
	  </div>
	</>
  )
}

