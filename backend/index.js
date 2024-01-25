import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

//api
app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 8080;

//mongodb connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect to Databse"))
  .catch((err) => console.log(err));


//server is ruuning
app.listen(PORT, () => console.log("server is running at port : " + PORT));