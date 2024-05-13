import { useState } from "react";
import axios from "axios";

export default function Write(){
    const [inputValue, setinputValue] = useState({content: '', Usertype:'', Fullname:"", Phonenumber:"", Email:"", Password:"", Gender:""});

    const saveData = async () => {
    try{
        await axios.post("http://localhost:5000/writetodatabase", {content: inputValue.content,Usertype: inputValue.Usertype, Fullname: inputValue.Fullname, Phonenumber: inputValue.Phonenumber, Email: inputValue.Email, Password: inputValue.Password, Gender: inputValue.Gender })
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