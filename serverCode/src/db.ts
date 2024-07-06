import mongoose from "mongoose";
require("dotenv").config();

const uri: any = process.env.DB_URI;

export async function connectToDb() {
  // Connect the  to the server	(optional starting in v4.7)
  mongoose.connect(uri).then(() => console.log("MongoDB Connected"));

  console.log("Pinged your deployment. You successfully connected to MongoDB!");
}
