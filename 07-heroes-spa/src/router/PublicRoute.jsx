import { useContext } from "react"; 
import { AuthContext } from "../auth"; 
import { Navigate } from "react-router-dom";

/**
 * PublicRoute Component
 * 
 * This component handles the rendering of public routes. It checks if the user is not logged in
 * and conditionally renders the children components. If the user is logged in, it redirects them 
 * to the "/marvel" route.
 * 
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The child components to render if the user is not logged in.
 * 
 * @returns {React.ReactNode} - Returns the child components if the user is not logged in, otherwise redirects to "/marvel".
 */
export const PublicRoute = ({ children }) => {
  // Use the useContext hook to access the logged status from AuthContext
  const { logged } = useContext(AuthContext);

  // If the user is not logged in, render the children components
  // If the user is logged in, redirect to the "/marvel" route
  return (!logged)
    ? children
    : <Navigate to="/marvel" />;
};
