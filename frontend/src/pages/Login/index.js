import React, { useState } from "react"
import axios from "axios"
import { setUser } from "../../services"
import { useHistory } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();
    const [msg, setMsg] = useState('');

    function submit() {
        setMsg("Carregando...")
        axios.post("https://reqres.in/api/login", { email, password }).then((r) => {
            setUser(r.data.token)
            history.push({
                pathname: '/procurar',
                state: "Login feito com sucesso!!" 
              })
        }).catch((e) => {
            setMsg("Erro ao logar usuário!");
        });
    }
    return <div>
        <label>E-mail</label>
        <input name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <label>Senha</label>
        <input name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={submit}>Logar</button>
        <p>{msg}</p>
    </div>
}