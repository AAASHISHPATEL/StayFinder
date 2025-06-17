import mongoose from "mongoose";

function connectDb(){
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
     console.log('Connected To DB');
   }).catch(err=>console.log(err));
    
 }
export default connectDb