// This React component, SearchPage, is used to implement a search functionality for heroes. It utilizes React Router for navigation and URL management, a custom hook for form handling, and a helper function to retrieve heroes based on the search query. Here’s a breakdown of how it works:

// Imports:

// useLocation and useNavigate from react-router-dom for handling navigation and reading URL parameters.
// useForm from a local hooks directory to manage form state.
// HeroCard is a component used to display individual hero cards.
// queryString for parsing query strings from the URL.
// getHeroesByName is a helper function to fetch heroes based on the search query.
// Component Definition:
//
// SearchPage is a functional component that handles the search functionality.
// Extracting Query Parameters:

// const navigate = useNavigate(); initializes the navigation function.
// const location = useLocation(); gets the current URL location.
// const { q = '' } = queryString.parse(location.search); parses the query string from the URL to get the search query (q). If q is not present, it defaults to an empty string.
// Fetching Heroes:

// const heroes = getHeroesByName(q); retrieves a list of heroes that match the search query q.
// Conditional States:

// const showSearch = (q.length === 0); determines whether to show the initial search prompt based on whether q is empty.
// const showError = (q.length > 0) && heroes.length === 0; determines whether to show an error message if q is not empty but no heroes are found.
// Form Handling:

// const { searchText, onInputChange } = useForm({ searchText: q }); uses the custom useForm hook to manage the form state, initializing it with the current search query.
// const onSearchSubmit = (event) => { ... } is a function that handles form submission. It prevents the default form action and updates the URL with the new search query.
// Rendering:

// The component renders a search form with an input field and a submit button.
// Conditional rendering is used to display messages based on the search state:
// A prompt to "Search a hero" if no query is provided (showSearch).
// An error message if no heroes match the search query (showError).
// The results are displayed using the HeroCard component for each hero retrieved by getHeroesByName.
// Styling and Animation:

// Basic styling is applied to the input field and button.
// Bootstrap classes and animation libraries are used for the display and fade-in effects of the messages.
// Summary
// This SearchPage component allows users to search for heroes by name. It uses URL parameters to manage the search query and conditionally displays search results or messages based on the query's state. The component incorporates form handling, conditional rendering, and basic styling to create a user-friendly search interface.
//
 import {useLocation, useNavigate} from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import {HeroCard} from "../components";
import queryString from "query-string";
import {getHeroesByName} from "../helpers";

export const SearchPage = () => {


  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );
  const heroes = getHeroesByName(q);

  const showSearch = ( q.length === 0 );
  const showError = ( q.length > 0 ) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
	searchText: q
  });

  const onSearchSubmit = ( event ) => { 
	event.preventDefault();
	// if (searchText.trim().length <= 1) return; 

	navigate(`?q=${ searchText }`);
  } 


  return (
	<>
	  <h1>Search</h1>
	  <hr />
	  <div className="row">
		<div className="col-5">
		  <h4>Searching</h4>
		  <hr />
		  <form onSubmit={ onSearchSubmit } >
			<input 
			  className="form-control" 
			  type="text" 
			  name="searchText"
			  placeholder="Search a hero"
			  autoComplete="off"
			  value={ searchText }
			  onChange={ onInputChange }
			/>
			<button className="btn btn-outline-primary mt-1">
			  Search




			</button>
		  </form>
		</div>
		<div className="col-7">
		  <h4>Results</h4>
		  <hr />
		  {/*{
			( q  === '' )
			  ? <div className="alert alert-primary">Search a hero</div>
			  : ( heroes.length === 0 )
			  && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
		}*/}

		  {/* Mostrar mensajes condicionales */}
		  <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none' }}>
			Search a hero
		  </div>
		  <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none' }}>
			No hero with <b>{ q }</b>
		  </div>

		  {
			heroes.map(hero =>(
			  <HeroCard key={ hero.id } { ...hero }/> ))}
		</div>
	  </div>
	</>
  )
}

