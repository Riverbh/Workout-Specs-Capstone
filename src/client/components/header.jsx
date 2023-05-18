import React from "react";
import classes from "./header.module.css"


const Header = () => {
    return (
        <header>
            <h1>Fit Social</h1>
            <nav>
                <button className={classes.nav_button}>Home</button>
                <button className={classes.nav_button}>Profile</button>
                <button className={classes.nav_button}>Goals</button>
            </nav>
        </header>
    )
}

export default Header

