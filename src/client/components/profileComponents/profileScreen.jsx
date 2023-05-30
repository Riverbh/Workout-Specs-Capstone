import {useContext, useEffect, useState, useCallback} from "react";
import axios from "axios";

import AuthContext from "../store/authContext";

import classes from "./profile.module.css"

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
                        <button className={classes.button} onClick={() => deletePost(post.id)}> 
                            Delete Post
                        </button>
                    </div>
                </section>
            </div>
        )
    })

    return mappedPosts.length >= 1 ? (
        <section className={classes.page}>
            <div>
                <h1 className={classes.pageHeader}>My Post</h1>
            </div>
            <div>
                {mappedPosts}
            </div>
        </section>
    ) : (
        <section className={classes.page}>
            <div>
                <h1 className={classes.pageHeader}>My Profile</h1>
            </div>
            <div>
                <h1>You haven't posted yet!</h1>
            </div>
        </section>
    )
}

export default Profile