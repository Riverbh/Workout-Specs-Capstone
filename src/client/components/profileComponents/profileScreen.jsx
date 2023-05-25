import {useContext, useEffect, useState, useCallback} from "react";
import axios from "axios";

import AuthContext from "../store/authContext";

const Profile = () => {
    const {userId, token} = useContext(AuthContext)

    const [post, setPost] = useState([])

    const getUserPosts = useCallback(() => {
        axios.get(`/userposts/${userId}`)
            .then(res => {
                console.log(res.data)
                setPost(res.data)
            })
            .catch(err => console.log(err))
    }, [userId])

    useEffect(() => {
        getUserPosts()
    }, [getUserPosts])

    const deletePost = id => {
        axios.delete(`/posts/${id}`, {
            headers: {
                authorization: token
            }
        })
            .then(() => {
                getUserPosts()
            })
            .catch(err => {
                console.log(err)
            })
    }
console.log(post)
    const mappedPosts = post.map(post => {
        return (
            <section key={post.id}>
                <h2>{post.title}</h2>
                <h4>{post.user.username}</h4>
                <p>{post.type}</p>
                <p>{post.time}</p>
                <p>{post.description}</p>
                    <div>
                        <button onClick={() => deletePost(post.id)}> 
                            Delete Post
                        </button>
                    </div>
            </section>
        )
    })

    return mappedPosts.length >= 1 ? (
        <div>
            {mappedPosts}
        </div>
    ) : (
        <div>
            <h1>You haven't posted yet!</h1>
        </div>
    )
}

export default Profile