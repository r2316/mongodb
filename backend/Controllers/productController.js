const productModel = require("../models/productModel")

exports.adduser=(user)=>
{
    let newuser = new productModel({
        name:user.name,
        age:user.age
})
newuser.save()
.then(()=>console.log("user saved"))
.catch(()=>console.log("err"))
}
exports.getusers = async()=>
{
    let users = [];
    await productModel.find()
    .then((d)=>{
        console.log(d)
        users =d
    })
    return users
}
    exports.getuserbyName =async (uname)=>
{
    let r ;
    await teacherModel.findOne({name:uname})
    .then((d)=>r = d)
    .catch(()=>r="err")
    return r;
}
