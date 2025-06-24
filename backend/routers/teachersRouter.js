 const express = require("express")

 const teachersController = require("../Controllers/teachersController")
 const router = express.Router()
 router.post("/",(req,res)=>
{
let u = {name:req.body.name,age:req.body.age}
teachersController.adduser(u)
res.send("user added")
})
router.get("/" , async (req,res)=>
{
    let users = await teachersController.getusers()
    res.send(users)
})
router.get("/teachersbyname/:name",async(req,res)=>
{    
let name = req.params.name
let u =await teachersController.getuserbyName(name)
res.send(u)

})

module.exports= router


