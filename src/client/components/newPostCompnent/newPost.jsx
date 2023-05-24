import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import AuthContext from '../store/authContext'

import classes from "./newPost.module.css"

const Create = () => {
    const {token, userId} = useContext(AuthContext)
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [time, setTime] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        axios.post('/posts', {title, description, type, time, userId}, {
            headers: {
                authorization: token
            }
        })
            .then(() => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <section>
            <h1>Post a Workout!</h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title of Workout"
                    value={title}
                    onChange={e => setTitle(e.target.value)} 
                    className="title-input"
                />
                <input
                    type="text"
                    placeholder="Type of Workout"
                    value={type}
                    onChange={e => setType(e.target.value)} 
                    className="title-input"
                />
                <input
                    type="text"
                    placeholder="Workout Time"
                    value={time}
                    onChange={e => setTime(e.target.value)} 
                    className="title-input"
                />
                <textarea
                    type='text'
                    placeholder="Describe Your Workout"
                    value={description}
                    onChange={e => setDescription(e.target.value)} 
                    className="description-input"
                />
                <button>Post it</button>
            </form>
        </section>
    )
}

export default Create