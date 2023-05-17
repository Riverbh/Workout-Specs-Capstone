import React from "react";
import classes from "./header.module.css"

const Footer = () => {
    return (
        <footer>
            <div>
                <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer 