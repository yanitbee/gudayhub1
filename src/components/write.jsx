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
            <input style={{border:"solid"}} type="string" value={inputValue.content}
            onChange={e => setinputValue({ ...inputValue, content: e.target.value}) }/>
            </div>
            <div>
             <input style={{border:"solid"}} type="string" value={inputValue.Usertype}
            onChange={e => setinputValue({ ...inputValue, Usertype: e.target.value}) }/>
             </div>
             <div>
             <input style={{border:"solid"}} type="string" value={inputValue.Fullname}
            onChange={e => setinputValue({ ...inputValue, Fullname: e.target.value}) }/>
             </div>
             <div>
             <input style={{border:"solid"}} type="string" value={inputValue.Phonenumber}
            onChange={e => setinputValue({ ...inputValue, Phonenumber: e.target.value}) }/>
</div>
<div>
             <input style={{border:"solid"}} type="string" value={inputValue.Password}
            onChange={e => setinputValue({ ...inputValue, Password: e.target.value}) }/>
</div>
<div>
             <input style={{border:"solid"}} type="string" value={inputValue.Gender}
            onChange={e => setinputValue({ ...inputValue, Gender: e.target.value}) }/>
            </div>
            <div>
             <input style={{border:"solid"}} type="string" value={inputValue.Email}
            onChange={e => setinputValue({ ...inputValue, Email: e.target.value}) }/>
            <button onClick={saveData}>save</button>
            </div>
            </>
    )
}