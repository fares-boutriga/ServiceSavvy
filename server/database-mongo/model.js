const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
const db = require("./index.js");

const reviewSchema=new mongoose.Schema({
  name:String,
  content:String,
  idWorker:String,
})

const workerShema = new mongoose.Schema({
  name:String,
  password:String,
  image:String,
  typeWork:String,
  experience:String,
  phone:Number,
  email:String,
  info:String,
  reviews:[{type:mongoose.Types.ObjectId,ref:"Reviews"}]
  
});



const Worker = mongoose.model("Worker", workerShema);
const Reviews = mongoose.model("Reviews", reviewSchema);

module.exports = {Worker,Reviews}
