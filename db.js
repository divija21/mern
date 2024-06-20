import mongoose from "mongoose";
 export const  connectdb= async()=>{
 await mongoose.connect('mongodb+srv://greatstack:12345@cluster0.emgimnf.mongodb.net/food-del').then (()=>console.log("DB connected"));
}

//mongodb+srv://<username>:<password>@cluster0.efho0k0.mongodb.net/?
//mongodb+srv://greatstack:12345@cluster0.emgimnf.mongodb.net/
// In This file we are writing thelogic for connecting the frontend and backend