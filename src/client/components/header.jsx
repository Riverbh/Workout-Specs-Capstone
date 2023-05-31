import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import classes from "./header.module.css"
import AuthContext from "./store/authContext";


const Header = () => {
    const authCtx = useContext(AuthContext)

    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>Fit Social</h1>
            <nav>
                {
                    authCtx.token ? (
                            <>
                            <NavLink className={classes.navButton} to='/'>Home</NavLink>
                    
                            <NavLink className={classes.navButton} to='/profile'>Profile</NavLink>
                        
                            <NavLink className={classes.navButton} to='/create'>Post</NavLink>

                            <button className={classes.logoutButton} onClick={() => authCtx.logout()}>Logout</button>
                            </>
                    ) : (
                            <>
                            <NavLink className={classes.navButton} to='/auth'></NavLink>
                            </>
                    )
                }  
            </nav>
        </header>
    )
}

export default Header

