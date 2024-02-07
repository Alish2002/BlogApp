const express= require("express");
const mongoose= require("mongoose");
const cors= require("cors");
const bodyParser= require("body-parser");
const router = require("./routes/route");

mongoose.connect("mongodb+srv://alishkamboj2002:blogapp@cluster0.tj1jyue.mongodb.net/?retryWrites=true&w=majority", 
{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const db= mongoose.connection;
db.on('open', ()=>{
    console.log("connected to mongoDB");
})

const app = express();
// converting into Json from String
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors({
    origin: "http://localhost:3000",
    method: ["GET", "POST"]
}));

app.use('/data', (req, res)=>{
    console.log("request is accepted");
    res.send("hello your request is accepted");
})

app.use("/api", router);

app.listen(5000, ()=>{
    console.log("The server is running at port 5000.");
})
