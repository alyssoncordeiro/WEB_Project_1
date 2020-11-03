import React, { useState, useEffect } from "react"
import axios from "axios"
import Home from "../Home";
import { useLocation } from "react-router-dom";
import Content from './Content'

export default function Search(props) {
    const [text, setText] = useState('')
    const [data, setData] = useState('')
    const [image, setImage] = useState('')
    const location = useLocation();
    const [msg, setMsg] = useState('');
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        axios.get("/content/is-admin",
            {
              headers: {
                "x-access-token": localStorage.jwtToken
              }
            }).then((r) => {
                setIsAdmin(r.data.isAdmin)
            })
    });
    

    function submit() {
        setMsg("Carregando...")
        setData('')
        if (text) {
            axios.post("/content/buscar",{text},
            {
              headers: {
                "x-access-token": localStorage.jwtToken
              }
            }).then((r) => {
                setData(r.data.sentiment)
                setImage(r.data.image_url)
                setMsg('')
            }).catch(e => setData(e.response.data.message));
        } else {
            setMsg("O texto está vazio!!!!")
        }
    }

    return <Home msg={location.state}>
        <div className="result">
            {isAdmin && <Content/>}
            <h1>Texto</h1>
            <textarea rows="10" cols="100" name="text" value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <button className="analisar-button" onClick={submit}>Analisar</button>
            <div className={"message " + data}>{data}</div>
            <img src={image}/>
            <p className = "negative positive-font">{msg}</p>
        </div>
    </Home>
}