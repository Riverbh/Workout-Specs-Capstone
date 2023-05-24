import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import classes from "./header.module.css"
import AuthContext from "./store/authContext";


const Header = () => {
    const authCtx = useContext(AuthContext)

    return (
        <header>
            <h1>Fit Social</h1>
            <nav>
                {
                    authCtx.token ? (
                            <>
                            <NavLink className={classes.nav_button} to='/'>Home</NavLink>
                    
                            <NavLink className={classes.nav_button} to='/profile'>Profile</NavLink>
                        
                            <NavLink className={classes.nav_button} to='/create'>Post</NavLink>

                            <button className={classes.nav_button} onClick={() => authCtx.logout()}>Logout</button>
                            </>
                    ) : (
                            <>
                            <NavLink className={classes.nav_button} to='/'>Home</NavLink>

                            <NavLink className={classes.nav_button} to='/auth'>Login/Sign Up</NavLink>
                            </>
                    )
                }  
            </nav>
        </header>
    )
}

export default Header

