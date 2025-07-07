const mongoose = require("mongoose")
const connectionString ="mongodb+srv://riyapatel16075:riyapatel16075@cluster0.iqybl8f.mongodb.net/test?retryWrites=true&w=majority"

// const connectionStringLocal = "mongodb://localhost:27017/"
mongoose.connect(connectionString,{useNewUrlParser:true})
.then(()=>console.log("db.connected"))
.catch(()=>console.log("err"))