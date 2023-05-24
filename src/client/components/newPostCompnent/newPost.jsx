import React from "react";
import classes from "./newPost.module.css"

const Create = () => {
    return (
        <section>
            <h1>Post a Workout!</h1>
            <form action="">
                <input className="title-input"/>
                <textarea className="description-input"/>
                <button>Post it</button>
            </form>
        </section>
    )
}

export default Create