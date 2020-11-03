import React, { useState } from "react"
import axios from "axios"
import Home from "../Home";
import { useLocation } from "react-router-dom";

export default function Search(props) {
    const [text, setText] = useState('')
    const [file, setFile] = useState(null)
    const [sentiment, setSentiment] = useState('positive')
    const [value, setValue] = React.useState();
    const [data, setData] = useState('')

  

    function submit() {
      setData('')
      const formData = new FormData();
      formData.append('text',text);
      formData.append('sentiment',sentiment);
      formData.append('file',file);
      axios.post("/content", formData,  {
        headers: {
          "x-access-token": localStorage.jwtToken,
          "content-type": 'multipart/form-data'
        }
      }).then((r) => {
        setData('Registro inserido com sucesso')
    }).catch(e => setData(e.response.data.message));
    }

    return (
        <div>
            <h1>Registrar texto</h1>
            <textarea rows="2" cols="100" name="text" value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <select onChange={e => setSentiment(e.target.value)} value={sentiment}>
          <option value="positive">positive</option>
          <option value="negative">negative</option>
          <option value="neutral">neutral</option>
        </select>
        <input type="file" name="myImage" onChange= {e => setFile(e.target.files[0])} />

            <button className="analisar-button" onClick={submit}>Registrar</button>
            <div className={"message " + data}>{data}</div>
        </div>)
   
}