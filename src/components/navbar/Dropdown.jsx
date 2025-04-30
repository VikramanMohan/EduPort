import { useState } from "react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Dropdown = ({ closeDropdown }) => {
    const [login, setLogin] = useState(false);

    return (
        <ul>
            <li><NavLink to='/home' onClick={closeDropdown}>Home</NavLink></li>
            <li><NavLink to='/course' onClick={closeDropdown}>Course</NavLink></li>
            {login ? (
                <li><button onClick={() => {
                    setLogin(false);
                    closeDropdown();
                }}>Logout</button></li>
            ) : (
                <>
                    <li><NavLink to="/login" onClick={closeDropdown}>Login</NavLink></li>
                    <li><NavLink to="/register" onClick={closeDropdown}>Sign Up</NavLink></li>
                </>
            )}
        </ul>
    );
};

export default Dropdown;
