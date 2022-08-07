import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try{
        const options = {
            dbname: "CRUD",
            authSource: "CRUD"
        };
        await mongoose.connect(DATABASE_URL, options);
        console.log("Connected Succesfully");
    } catch(err){
        console.log(err);
    }
}

export default connectDB;