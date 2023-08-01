import react from 'react'
import { useState } from 'react'

function Authenticate(){
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState(null) 

    return <h2>Authenticate!</h2>

}

export default Authenticate