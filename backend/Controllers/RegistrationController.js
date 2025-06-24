/*const RegisterationModel = require("../Models/RegistrationModel")

exports.adduser=async (user)=>
{
    let newuser = new RegisterationModel({
          fullName:user.fullName,
   email: user.email,
     password:user.password,

     contact: user.contact
        
})
let data = []
let msg = ""
await newuser.save()
.then(async ()=>{
    msg = "record inserted"
    await RegisterationModel.find()
    .then((d)=>data = d)
}
)
.catch((err)=>msg = err)

return {data:data,msg:msg}
}


exports.loginUser=async(user)=>
{
    let msg = "login failed"
    let condition = {email:user.email,password:user.password}
    await RegisterationModel.findOne(condition)
    .then((d)=>{
        if(d)
        {
            msg = "login Successfully"
        }
   })
   console.log(msg)
    return {msg:msg }
}
exports.getusers =async ()=>
{
    let users = [];
    await RegisterationModel.find()
    .then((d)=>{
        console.log(d)
        users = d
    })
    return users
}
exports.getuserbyName =async (uname)=>
{
    let r ;
    await RegisterationModel.findOne({name:uname})
    .then((d)=>r = d)
    .catch(()=>r="err")
    return r;
}
exports.deleteuser =async (id)=>
{
    let msg = ""
    let data = []

    await RegisterationModel.deleteOne({_id:id})
   .then(async ()=>{
    msg = "record deleted"
    await RegisterationModel.find()
    .then((d)=>data = d)
}
)
.catch((err)=>msg = err)
    return {msg:msg,users:data }
}
exports.updateuser = async(id,newdata)=>
{
    let msg = "";
    console.log(id)
    let data = []
    await RegisterationModel.findByIdAndUpdate(id,newdata)
    .then(async (d)=>
        {
           msg = "record updated"
            await RegisterationModel.find()
            .then((d)=>data = d)
        })
    .catch((err)=>msg = err)
    
return {data:data,msg:msg}
}
*/


const RegisterationModel = require("../models/RegistrationModel");

module.exports = {
  loginUser: async ({ email, password }) => {
    const user = await RegisterationModel.findOne({ email, password });
    if (user) {
      return { msg: "success", user };
    } else {
      return { msg: "Invalid email or password" };
    }
  },

  adduser: async (userData) => {
    const newUser = new RegisterationModel(userData);
    await newUser.save();
    const users = await RegisterationModel.find();
    return { msg: "User added", data: users };
  },

  getusers: async () => await RegisterationModel.find(),

  getuserbyName: async (name) =>
    await RegisterationModel.find({ fullName: new RegExp(name, "i") }),

  deleteuser: async (id) => {
    await RegisterationModel.findByIdAndDelete(id);
    const users = await RegisterationModel.find();
    return { msg: "User deleted", data: users };
  },

  updateuser: async (id, updatedUser) => {
    await RegisterationModel.findByIdAndUpdate(id, updatedUser);
    const users = await RegisterationModel.find();
    return { msg: "User updated", data: users };
  }
};
