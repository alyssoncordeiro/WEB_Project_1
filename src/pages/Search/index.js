import React, { useState } from "react"
import axios from "axios"
import { setUser } from "../../services"
import Home from "../Home";

export default function Search() {
    const [text, setText] = useState('')
    const [data, setData] = useState('')

    function submit() {
        axios.post("https://sentim-api.herokuapp.com/api/v1/", { text }).then((r) => {
            setData(r.data.result.type)
        })
    }

    return <Home>
        <div className="result">
            <h1>Texto</h1>
            <textarea rows="10" cols="100" name="text" value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <button className="analisar-button" onClick={submit}>Analisar</button>
            <div className={"message " + data}>{data}</div>
        </div>
    </Home>
}