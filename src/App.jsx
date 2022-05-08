
import logo from './logo.svg'
import './App.css'
import { Routes,Route} from "react-router-dom";
import {Login} from "./componants/login"
import {Todo} from "./componants/todo"
import {Singletodo} from "./componants/singletodo"
import {Navbar} from "./componants/navbar"
function App() {
 
 
  return (
    <div className="App">
      <header/>
     <Navbar/>
          
     <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/todo/:id" element={<Singletodo/>} />
    </Routes>
           
        
            
    </div>
  )
}

export default App
