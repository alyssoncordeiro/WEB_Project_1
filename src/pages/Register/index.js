import React, { useState } from "react"
import axios from "axios"
import { setUser } from "../../services"
import Home from "../Home";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_2, setPassword_2] = useState('')
    const [errors, setErros] = useState({})
    
    function submit() {
        const validate = validar()
        setErros(validate)
        if (Object.keys(validate).length === 0) {
            axios.post("https://reqres.in/api/register", { email, password }).then((r) => {
                setUser(r.data.token)
                window.location.reload();
            })
        }
    }
    function validar() {
        let erros = {}
        if (!email) {
            erros.email = "Campo Obrigatório!"
        }
        if (!password) {
            erros.password = "Campo Obrigatório!"
        }
        if (password != password_2) {
            erros.password = "As senhas devem ser iguais!!"
        }
        if (password.length < 3) {
            erros.password = "A senha deve ter mais que 3 caracteres"
        }
        return erros
    }
    return <Home>
        <label>E-mail {errors.email && <p>{errors.email}</p>}</label>
        <input name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <label>Senha {errors.password && <p>{errors.password}</p>}</label>
        <input name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <label>Confirmar Senha</label>
        <input name="password_2" value={password_2} onChange={(e) => setPassword_2(e.target.value)}></input>
        <button onClick={submit}>Registrar</button>
    </Home>
}