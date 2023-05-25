import {useState, useEffect, useContext} from "react";
import axios from "axios";

import SearchContainer from "./searchContainer";
import AuthContext from "../store/authContext";

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
            <section key={post.id}>
                <h2>{post.title}</h2>
                <h4>{post.user.username}</h4>
                <p>{post.type}</p>
                <p>{post.time}</p>
                <p>{post.description}</p>
            </section>
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