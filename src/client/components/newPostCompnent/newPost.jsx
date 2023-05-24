import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import AuthContext from '../store/authContext'

import classes from "./newPost.module.css"

const Create = () => {
    const {token, userId} = useContext(AuthContext)
    const navigate = useNavigate()

    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [type, setType] = useState('')
    const [] = useState()

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