import mongoose from "mongoose";

const employee=mongoose.Schema({
    image:String,
    email:String,
    name:String,
    mobile:String,
    designation:String,
    gender:String,
    course:String,
    password:String
});

const Employee=mongoose.model('Employee',employee);
export default Employee;