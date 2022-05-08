import { Link } from "react-router-dom"
import "./navbar.css"
export const Navbar=()=>{
    return <div>
        
       <Link to="/">Welcome, This is my Home Page</Link>
       <Link to="/login">Click her to Login</Link>
    
    </div>
}