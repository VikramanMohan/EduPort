import { useState } from "react";
import { NavLink } from "react-router-dom"

const Middle = () => {
  const [login, setLogin] = useState(false); 
  return (
    <>
      <ul>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/course'>Course</NavLink></li>
        {login ? 'Logout' : (
                <>
                  <li><NavLink to="/login" >Login</NavLink></li>
                  <li><NavLink to="/register">Sign Up</NavLink></li>
                </>
            )}
      </ul>
    </>
  )
}

export default Middle