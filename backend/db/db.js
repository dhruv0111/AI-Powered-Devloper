import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

function connect() {
    const uri = process.env.MONGODB_URI;
    if(!uri){
        console.error("Mongodb is not defined in the .env file");
        process.exit();
    }
    mongoose.connect(uri)
    .then(()=>{
        console.log("Connecte to MongoDB");
    })
    .catch(err =>{
        console.error("mongodb connection error:", err.message);
    })
}

export default connect;

// mongodb+srv://pj227994:8M1wkYuyeigDpSrj@manday.qrqnv.mongodb.net/?retryWrites=true&w=majority&appName=manday

// 8M1wkYuyeigDpSrj

// pj227994