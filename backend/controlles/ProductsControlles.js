import Product from "../models/ProductModels"

//save product in data 
//api
app.post("/uploadProduct",async(req,res)=>{
    // console.log(req.body)
    const data = await Product(req.body)
    const datasave = await data.save()
    res.send({message : "Upload successfully"})
})

app.get("/product",async(req,res)=>{
  const data = await Product.find({})
  res.send(JSON.stringify(data))
})
 

