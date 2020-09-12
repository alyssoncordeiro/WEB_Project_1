import React, { useState } from "react"
import axios from "axios"
import { setUser } from "../../services"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function submit() {
        axios.post("https://reqres.in/api/login", { email, password }).then((r) => {
            setUser(r.data.token)
            window.location.reload();
        })
    }
    return <div>
        <label>E-mail</label>
        <input name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <label>Senha</label>
        <input name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={submit}>Logar</button>
    </div>
}