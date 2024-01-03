require('dotenv').config();
const mongoose=require('mongoose');

const db=async()=>{
    try {
        mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB Connected successfully');
    } catch (error) {
        console.log('DB Connection error');
        console.log(error);
    }
}
module.exports={db}