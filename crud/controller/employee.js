import Employee from "../models/employee.js"
import jwt from 'jsonwebtoken';

export const createEmployee=async(req,res)=>{
    const existUser=await Employee.findOne({email:req.body.email});
    if(existUser){
        return res.json({
            status:0,
            message:'Email already exist.'
        })
    }
    const user= new Employee(req.body);
    const savedUser=await user.save();
    console.log(savedUser,"saved");
    
    res.json({
        status:1,
        employee:savedUser
    })

}
export const findAllEmployee=async(req,res)=>{
    const user=await Employee.find();
    res.json({
        status:1,
        employees:user
    })
}
export const findEmployeeById=async(req,res)=>{
    const id=req.params.id;
    const user=await Employee.findById({_id:id});
    res.json({
        status:1,
        employees:user
    })
}
export const findEmployeeByIdAandDelete=async(req,res)=>{
    const id=req.params.id;
    await Employee.findOneAndDelete({_id:id});
    res.json({
        status:1,
        message:'User deleted successfully!'
    })
}
export const findEmployeeByIdAandUpdate=async(req,res)=>{
    const _id=req.params.id;
    try{
        const updateEmployee= await Employee.findByIdAndUpdate(_id,req.body,{new:true});
        res.json({
            status:1,
            message:'User updated successfully!',
            employee:updateEmployee
        })
    }catch(err){
      res.json({
        status:0,
        message:err.error.message??'server error'
      })
    }
  
}
export const login = async (req, res) => {
    const existUser = await Employee.findOne({email:req.body.email}); // Ensure you're querying by an object

    if (!existUser) {
        return res.json({
            status: 0,
            message: 'Invalid  user credentials'
        });
    }

    if (existUser.password !== req.body.password) {
        return res.json({
            status: 0,
            message: 'Invalid credentials'
        });
    }

    // Create a plain object for the payload, typically including only necessary fields
    const payload = {
        id: existUser._id,
        name: existUser.name, // Include any other necessary fields
        // Avoid including sensitive information like the password
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.json({
        status: 1,
        message: 'Login successful!!',
        token
    });
};
// login
// http://localhost:4000/api/login
// {
//     "email":"Krishna@gmail.com",
//     "password":"Krishna@1234"
// }

// create
// http://localhost:4000/api/employee/67066b684206b723bda0ec87
// {
//     "image":"default.png",
//     "email":"Krishna@gmail.com",
//     "name":"Krishna",
//     "mobile":"8976439231",
//     "designation":"trainee",
//     "gender":"female",
//     "course":"MCA",
//     "password":"Krishna@1234"
// }


// findAllEmployee
// http://localhost:4000/api/employees

// findOneEmployee
// http://localhost:4000/api/employee/id


// deleteEmployee
// http://localhost:4000/api/employee/id



// updateEmployee
// http://localhost:4000/api/employee/id
// {
//     "name":"Krishna Kumar"
//   }