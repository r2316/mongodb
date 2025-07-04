const mongoose = require("mongoose")
const connectionString = "mongodb+srv://riyapatel16075:riyapatel16075@cluster0.iqybl8f.mongodb.net/?retryWrites=true&w=majorityCluster0"
mongoose.connect(connectionString)
.then(()=>console.log("db.connected"))
.catch(()=>console.log("err"))