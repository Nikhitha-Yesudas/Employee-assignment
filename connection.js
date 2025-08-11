const mongoose=require('mongoose');
require('dotenv').config();
const MONGO_URL=process.env.MONGO_URL

const connectDB=async ()=>{
    try{
        await mongoose.connect(MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("MogoDb connected");
    }
    catch(err){
        console.log("db is not connected");
        process.exit(1);
    }
}
module.exports=connectDB;