import React, { useState } from "react"
import axios from "axios"
import { setUser } from "../../services"
import Home from "../Home";
import { useHistory } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_2, setPassword_2] = useState('')
    const [errors, setErros] = useState({})
    const history = useHistory();
    const [msg, setMsg] = useState('');

    function submit() {
        const validate = validar()
        setErros(validate)
        if (Object.keys(validate).length === 0) {
            setMsg("Carregando...")
            axios.post("https://reqres.in/api/register", { email, password }).then((r) => {
                setUser(r.data.token)
                history.push({
                    pathname: '/procurar',
                    state: "Registro feito com sucesso!!"
                })
            }).catch((e) => {
                setMsg("Erro ao registrar usuário!");
            });
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
        if (!emailIsValid(email)) {
            erros.email = "E-mail não é válido!!"
        }
        return erros
    }

    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    return <Home msg={msg}> <div className="registro">
        <label>E-mail {errors.email && <p className="error">{errors.email}</p>}</label>
        <input name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <label>Senha {errors.password && <p className="error">{errors.password}</p>}</label>
        <input name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <label>Confirmar Senha</label>
        <input name="password_2" value={password_2} onChange={(e) => setPassword_2(e.target.value)}></input>
        <button onClick={submit}>Registrar</button>
    </div>
    </Home>
}