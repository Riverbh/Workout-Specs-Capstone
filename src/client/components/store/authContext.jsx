import { useState, useEffect, createContext } from "react"; 

let logoutTimer 

const AuthContext = createContext({
  token: '',
  login: () => {},
  logout: () => {},
  userId: null
})

const calculateRemainingTime = (exp) => {
    const currTime = new Date().getTime()
    const expTime = exp
    const remaningTime = expTime - currTime
    return remaningTime
}

const getLocalData = () => {
    const storedToken = localStorage.getItem('token')
    const storedExp = localStorage.getItem('exp')
    const storedId = localStorage.getItem('userId')

    const remaningTime = calculateRemainingTime(storedExp)

    if(remaningTime <= 1000 * 60 * 30){
        localStorage.removeItem('token')
        localStorage.removeItem('exp')
        localStorage.removeItem('userId')
        return null
    }

    return {
        token: storedToken,
        duration: remaningTime,
        userId: storedId
    }
}

export const AuthContextProvider = (props) => {
    const localData = getLocalData()

    let initialToken 
    let initialId 
    if (localData) {
        initialId = localData.userId
        initialToken = localData.token
    }

    const [token, setToken] = useState(initialToken)
    const [userId, setUserId] = useState(initialId)

    const logout = () => {
        setUserId(null)
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('exp')
        localStorage.removeItem('userId')

        if(logoutTimer){
            clearTimeout(logoutTimer)
        }
    } 

    const login = (token, exp, userId) => {
        setToken(token)
        setUserId(userId)

        localStorage.setItem('token', token)
        localStorage.setItem('exp', exp)
        localStorage.setItem('userId', userId)

        const remaningTime = calculateRemainingTime(exp)

        logoutTimer = setTimeout(logout, remaningTime)
    }

    useEffect(() => {
        if(localData){
            logoutTimer = setTimeout(logout, localData.duration)
        }
    }, [localData, logout])

    const contextValue = {
        token,
        login,
        logout, 
        userId
      }

      return (
        <AuthContext.Provider value={contextValue}>
          {props.children}
        </AuthContext.Provider>
      )
}

export default AuthContext