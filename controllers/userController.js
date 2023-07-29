const User=require('../models/userModel.js')

exports.home=(req,res)=>{
     res.send('Hello World');
}
exports.createUser=async(req,res)=>{
     // extract info 
     try{
      const {name,email}=req.body
      if (!name||!email){
          throw new Error("Name and email are required")
      }
      const userExits=User.findOne({email})
      if(userExits){
          throw new Error("User already exists ")
      }
      const user=await User.create({
          name,
          email
      })
      res.status(201).json({
          success:true,
          message:"User cretaed Successfully",
          user
      })
     }catch(error){
   console.log(error);
   res.status(400).json({
     success:false,
     message:error.message,

     })}
}
exports.editUser=async(req,res)=>{
     try{
       const user=await User.findByIdAndUpdate(req.params.id,req.body)
       res.status(200).json({
          success:true,
          message:"User updated successfully "
       })
     }catch(error){
          console.log(error);
   res.status(400).json({
     success:false,
     message:error.message,

     })
     }
}
exports.deleteUser = async (req, res) => {
     try {
       const userId = req.params.id;
       await User.findByIdAndDelete(userId);
       res.status(200).json({
         success: true,
         message: 'User deleted Successfully',
       });
     } catch (error) {
       console.log(error);
       res.status(400).json({
         success: false,
         message: error.message,
       });
     }
   };
exports.getUsers = async (req, res) => {
     try {
       const users = await User.find({});
       res.status(200).json({
         success: true,
         users: users,
       });
     } catch (error) {
       console.log(error);
       res.status(400).json({
         success: false,
         message: error.message,
       });
     }
   };