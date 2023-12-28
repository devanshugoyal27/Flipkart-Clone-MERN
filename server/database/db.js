import mongoose from "mongoose";

const connection = async (url)=> {

try{
       await mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true})
       console.log("databaase connected");
}catch (error){
    console.log ("error while connecting with database", error.message)
}
}

export default connection; 