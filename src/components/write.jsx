import { useState } from "react";
import axios from "axios";

export default function Write(){
    let [inputValue, setinputValue] = useState("");

    const saveData = async () => {
    try{
        await axios.post("http://localhost:5000/writetodatabase", {content: inputValue})
        console.log("data: ", inputValue)
    } catch(error){
        console.log("errorr", error)
    }
    }
    return(
        <>
        <div>
            <input type="string" value={inputValue}
            onChange={e => setinputValue(e.target.value) }/>
            <button onClick={saveData}>save</button>
            </div>
            </>
    )
}