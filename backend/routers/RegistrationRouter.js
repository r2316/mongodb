/*const express = require("express")
const RegistrationController = require("../Controllers/RegistrationController")
const RegisterationModel= require("../models/RegistrationModel")
const router = express.Router()
router.post("/login",async (req,res)=>
{
    let d = await RegistrationController.loginUser(req.body)
    console.log(d)
     res.send(d)
})
router.post("/",async (req,res)=>
{
     
let u = {fullName:req.body.fullName,
    email:req.body.email,
    password:req.body.password,
    contact:req.body.contact
}
let obj = await RegistrationController.adduser(u)
res.send({msg:obj.msg,users:obj.data})
})
router.get("/",async (req,res)=>
{
    let users =await RegistrationController.getusers()
    res.send({users:users})
})
router.get("/userbyname/:name",async(req,res)=>
{    
let name = req.params.name
let u =await RegistrationController.getuserbyName(name)
res.send(u)
})
router.delete("/:id",async (req,res)=>
{
    let id = req.params.id
    let obj = await RegistrationController.deleteuser(id)
    res.send(obj)
})
router.put("/",async(req,res)=>
{
    let uid = req.body.id;
    console.log(uid)
    let uname = req.body.name;
    let uage = req.body.age;
    let newuser = {name:uname,age:parseInt(uage)}
    
    let obj = await RegistrationController.updateuser(uid,newuser)
    res.send({msg:obj.msg,users:obj.data})


})
module.exports= router
*/
const express = require("express");
const RegistrationController = require("../Controllers/RegistrationController");
const router = express.Router();

// ✅ POST /Registration/login
router.post("/login", async (req, res) => {
  let result = await RegistrationController.loginUser(req.body);
  console.log(result);
  res.send(result);
});

// ✅ POST /Registration
router.post("/", async (req, res) => {
  let u = {
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
    contact: req.body.contact
  };
  let obj = await RegistrationController.adduser(u);
  res.send({ msg: obj.msg, users: obj.data });
});

// ✅ GET /Registration
router.get("/", async (req, res) => {
  let users = await RegistrationController.getusers();
  res.send({ users });
});

// ✅ GET /Registration/userbyname/:name
router.get("/userbyname/:name", async (req, res) => {
  let name = req.params.name;
  let u = await RegistrationController.getuserbyName(name);
  res.send(u);
});

// ✅ DELETE /Registration/:id
router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let obj = await RegistrationController.deleteuser(id);
  res.send(obj);
});

// ✅ PUT /Registration
router.put("/", async (req, res) => {
  let uid = req.body.id;
  let uname = req.body.name;
  let uage = req.body.age;

  let newuser = { name: uname, age: parseInt(uage) };
  let obj = await RegistrationController.updateuser(uid, newuser);
  res.send({ msg: obj.msg, users: obj.data });
});

module.exports = router;

