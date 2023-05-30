import {useState, useEffect, useContext} from "react";
import axios from "axios";

import SearchContainer from "./searchContainer";
import AuthContext from "../store/authContext";

import classes from './home.module.css'

const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('/posts')
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const mappedPosts = posts.map(post => {
        return (
            <div className={classes.container} key={post.id}>
                <section className={classes.post}>
                    <div className={classes.heading}>
                        <h2 className={classes.postTitle}>{post.title}</h2>
                        <h4 className={classes.user}>{post.user.username}</h4>
                    </div>
                    <div className={classes.content}>
                        <p className={classes.typeTime}>{post.type}</p>
                        <p className={classes.typeTime}>{post.time}</p>
                        <p className={classes.postDescription}>{post.description}</p>
                    </div>
                </section>
            </div>
        )
    })

    console.log(mappedPosts)

    return mappedPosts.length >= 1 ? (
        <main>
            {mappedPosts}
            <section>
                <SearchContainer />
            </section>
        </main>
    ) : (
        <main>
            <h1>There are no posts yet!</h1>
            <section>
                <SearchContainer />
            </section>
        </main>
    )
}

export default Home 