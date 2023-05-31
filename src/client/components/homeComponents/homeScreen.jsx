import {useState, useEffect, useContext} from "react";
import axios from "axios";

import AuthContext from "../store/authContext";
import SearchContainer from "../searchContainer";

import classes from './home.module.css'

const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('/posts')
        .then(res => {
            // Sort the posts array in descending order based on the 'id'
            const sortedPosts = res.data.sort((a, b) => b.id - a.id);
            setPosts(sortedPosts)
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
        <div className={classes.div}>
            <main className={classes.scroll}>
                {mappedPosts}
            </main>
            <section>
                <SearchContainer/>
            </section>
        </div>
    ) : (
        <div className={classes.div}>
            <main className={classes.scroll}>
                <h1>There are no posts yet!</h1>
            </main>
            <section>
                <SearchContainer/>
            </section>
        </div>
    )
}

export default Home 