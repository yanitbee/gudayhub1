import { useState , useEffect } from "react";
import axios from "axios";

export default function Read(){
const[readData, setreadData]= useState("");

useEffect(()=>{
    const fetchData = async ()=>{
        try{
            const response = await axios.get("http://localhost:5000/readfromserver")

            const dataFromTheServer = response.data.message
            setreadData(dataFromTheServer)
        }catch(error) {
            console.error("error", error)
        }
    }
    fetchData();
},[])
return(
    <>
    <div>
        {readData}
    </div>
    </>
)
}