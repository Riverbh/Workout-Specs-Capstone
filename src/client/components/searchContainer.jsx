import React, {useState, useRef} from "react";
import axios from "axios";

import classes from './searchContainer.module.css'

const SearchContainer = () => {
    const [currMovement, setCurrMovement] = useState([])
    const [search, setSearch] = useState('')
 
    const handleSubmit = async (e) => {
        e.preventDefault()

        const options = {
            method: 'GET',
            url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
            params: {type: `${search}`},
            headers: {
              'X-RapidAPI-Key': 'bfc3db834dmshf43a5f112e22923p126ea0jsnfa45e9c99107',
              'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
              setCurrMovement(response.data)
          } catch (error) {
              console.error(error);
          }
    }

    const exerciseDisplay = currMovement.map((exercise, i) => {
        return (
            <div key={i} className={classes.div}>
                <h3 className={classes.title}>{exercise.name}</h3>
                <h5 className={classes.subtitle}>Equipment: {exercise.equipment}</h5>
                <p className={classes.instructions}>Instructions: {exercise.instructions}</p>
            </div>
        )
    })

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit} className={classes.form}>
            <h2 className={classes.heading}>Search for Movements</h2>
                {/* <input
                    type="text"
                    placeholder="Search Exercises for Specific Muscles"
                    onChange={ e => setSearch(e.target.value)}
                    value={search}
                /> */}
                <select onChange={(e) => setSearch(e.target.value)} className={classes.select}>
                    <option>Select a Type of Wokout</option>
                    <option value = 'cardio'>Cardio</option>
                    <option value = 'olympic_weightlifting'>Olympic Weightlifting</option>
                    <option value = 'plyometrics'>Plyometrics</option>
                    <option value = 'powerlifting'>Powerlifting</option>
                    <option value = 'strength'>Strength</option>
                    <option value = 'stretching'>Stretching</option>
                    <option value ="strongman">Strongman</option>
                </select>
                <button className={classes.button}>Search</button>
            </form>
            <div className={classes.scroll}>
                {exerciseDisplay}
            </div>
        </div>
    )
}

export default SearchContainer