import React, { useState } from "react"
import axios from "axios"
import Home from "../Home";
import { useLocation } from "react-router-dom";

export default function Search(props) {
    const [text, setText] = useState('')
    const [data, setData] = useState('')
    const location = useLocation();
    const [msg, setMsg] = useState('');

    function submit() {
        setMsg("Carregando...")
        if (text) {
            axios.post("https://sentim-api.herokuapp.com/api/v1/", { text }).then((r) => {
                setData(r.data.result.type)
            })
        } else {
            setMsg("O texto está vazio!!!!")
        }
    }

    return <Home msg={location.state}>
        <div className="result">
            <h1>Texto</h1>
            <textarea rows="10" cols="100" name="text" value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <button className="analisar-button" onClick={submit}>Analisar</button>
            <div className={"message " + data}>{data}</div>
            <p className = "negative positive-font">{msg}</p>
        </div>
    </Home>
}