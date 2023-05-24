import {useState, useContext} from "react";
import axios from "axios";
import AuthContext from "./store/authContext";

const Auth = () => {
    const [register, setRegister] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [display, setDisplay] = useState('none')

    const authCtx = useContext(AuthContext)

    const submitHandler = (e) => {
        e.preventDefault()

        setDisplay('none')

        const body = {
            username, 
            password
        }

        
        axios.post(register ? `/register` : `/login`, body)
            .then((res) => {
                console.log('AFTER AUTH', res.data)
                authCtx.login(res.data.token, res.data.exp, res.data.userId)
            })
            .catch(err => {
                console.error(err)
                setDisplay('block')
                setPassword('')
                setUsername('')
            })
    }

    return (
        <main>
            <h1>Welcome!</h1>
            <form onSubmit={submitHandler}>
            <input 
                type='text' 
                placeholder='username' 
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input 
                type='password' 
                placeholder='password' 
                value={password}
                onChange={e => setPassword(e.target.value)} 
            />
            <button>
                {register ? 'Sign Up' : 'Login'}
            </button>
            </form>
            <button onClick={() => setRegister(!register)}>
                Need to {register ? 'Login' : 'Sign Up'}?
            </button>
        </main>
    )
}

export default Auth