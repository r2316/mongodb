const mongoose = require("mongoose")
const connectionString = "mongodb://localhost:27017/"
mongoose.connect(connectionString)
.then(()=>console.log("db.connected"))
.catch(()=>console.log("err"))