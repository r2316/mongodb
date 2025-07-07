/*const conn = require("./connection")
const express = require("express")
const teachersRouter = require("./routers/teachersRouter")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>
{
    res.send("this is api home teachers ")
})
app.use("/teachers",teachersRouter)
app.listen(8080,console.log("server running on 8080"))

*/

/*

const conn = require("./connection")
const express = require("express")
const userRouter = require("./routers/userRouter")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>
{
    res.send("this is api home ")
})
app.use("/user",userRouter)
app.listen(8080,console.log("server running on 8080"))

const conn = require("./connection")
const express = require("express")
const userRouter = require("./routers/productRouter")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>
{
    res.send("this is api home ")
})
app.use("/product",userRouter)
app.listen(8080,console.log("server running on 8080"))
*/




 
/*const conn = require("./connection")
const express = require("express")
const userRouter = require("./routers/cityRouter")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>
{
    res.send("this is api city ")
})
app.use("/cities",userRouter)
app.listen(8080,console.log("server running on 8080"))*/



/*const conn = require("./connection")
const express = require("express")
const cityRouter= require("./routers/cityRouter")
const app = express()
const cors = require("cors")
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>
{
    res.send({msg:"this is api home  use user for city"})
})
app.use("/city",cityRouter)
app.listen(8080,console.log("server running on 8080"))
*/


/*const conn = require("./connection")
const express = require("express")
const userRouter = require("./routers/userRouter")
const app = express()
const cors = require("cors")
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>
{
    res.send({msg:"this is api home  use user for users "})
})
app.use("/user",userRouter)
app.listen(8080,console.log("server running on 8080"))
// 
*/



/*const conn = require("./connection")
const express = require("express")
const userRouter = require("./routers/userRouter")
const cityRouter = require("./routers/cityRouter")
const app = express()
const cors = require("cors")
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>
{
    res.send({msg:"this is api home  use user for users "})
})
app.use("/user",userRouter)
app.use("/city",cityRouter)
app.listen(8080,console.log("server running on 8080"))
*/

/*cconst express = require("express");
const cors = require("cors");
const userRouter = require("./routers/userRouter");
const cityRouter = require("./routers/cityRouter");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ msg: "this is api home" });
});

app.use("/user", userRouter);
app.use("/city", cityRouter);



app.listen(8080, () => console.log("Server running on 8080"));
*/
const conn = require("./connection")
const express = require("express")

const app = express()
const cors = require("cors")
const path = require('path');
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://projectfrontend-fawn.vercel.app");
  
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(200).end(); // ✅ This line is critical for fixing POST issues
  }

  next();
});
// const corsOptions ={
//     origin:"*",
//     // origin:['http://localhost:3000','http://localhost:5174','https://projectfrontend-fawn.vercel.app'], 
//     // credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));
// app.use(cors())
const userRouter = require("./routers/userRouter")
const Registrationrouter = require("./routers/RegistrationRouter")
const BlogRouter = require("./routers/BlogRouter")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.get("/",(req,res)=>
{
    res.send({msg:"this is api home  use user for users "})
})
app.use("/user", userRouter);
app.use("/Registration",Registrationrouter)
app.use("/blogs", BlogRouter)

app.listen(8080,console.log("server running on 8080"))
