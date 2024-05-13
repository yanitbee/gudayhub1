const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const DataModel = require("./src/models/user")
const connectDB = require("./Database")
connectDB();

const app = express();
app.use(express.json({extended: false}))

const cors = require("cors")
app.use(cors());
app.get("/readfromserver", (req, res)=>{
    try{
    DataModel.find()
    .then(DataModel => res.json(DataModel))
    
    }catch (error){
        console.log("errorr", error.message)
        res.status(500).send("server error while reading data")

    }
})
app.post("/writetodatabase", async (req, res)=>{
    try{
        const {content, Usertype, Fullname, Phonenumber, Email, Password, Gender} = req.body;
        const newData = new DataModel({content, Usertype, Fullname, Phonenumber, Email, Password, Gender})
        await newData.save();
        res.json({message: "data saved successfully"})

    }catch (error){
        console.log("errorrrrrrr", error.message)
        res.status(500).send("server error while saving data erorrrrrrrr")

    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`server is running on PORT: ${PORT}`);
})
//cCURLWvdMfbVPoXr