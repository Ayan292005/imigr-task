const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const cors=require("cors")
const dotenv=require("dotenv")
let mongoose=require("mongoose")

app.use(bodyParser.json())
app.use(cors())
dotenv.config()

mongoose.connect(process.env.ConnectionString)
.then(()=>{
    console.log("connected")
})


app.listen(5000,()=>{
    console.log("bu app 5000 portunda dinlenilir")
})

let ProductSchema = new mongoose.Schema({
    image:String,
    country:String,
    title:String,
    description:String
   
})

let ProductModel= mongoose.model("immigration",ProductSchema)


app.get("/immigration", async (req,res)=>{
    let immigrations= await ProductModel.find()
    res.send(immigrations)
})

app.post("/immigration", async (req,res)=>{
    let newImmigration= ProductModel(req.body)
   await newImmigration.save()
   res.send({
     message:"Posted",
     data:req.body
   })
})

app.get("/immigration/:id",async (req,res)=>{
    let id=req.params.id
    let myImmigration= await ProductModel.findById(id)
    res.send({
        message:"Success GetById",
        data:myImmigration
    })
})


app.delete("/immigration/:id", async  (req,res)=>{
    let {id}=req.params
   await ProductModel.findByIdAndDelete(id)
   res.send({
    message:"Deleted",
})
})