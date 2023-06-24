const {Worker} = require('../database-mongo/model');
const selectAll = async function (req, res) {
  try {
    const workers = await Worker.find({});
    res.status(200).send(workers);
  } catch (error) {
    res.status(500).send(error);
    console.log(error)
  }
};
const selectOne = async function (req, res) {
    try {
        var name=req.body.name
        const workers = await Worker.findOne({ name: name });
      res.status(200).send(workers);
    } catch (error) {
      res.status(500).send(error);
    }
  };

const addOne = async(req,res)=>{
    try{
        let data=req.body
        let ndata= new Worker(data)
        const one= await ndata.save();
        res.status(201).send(one)
        console.log("done")
    }catch (err){
        res.status(500).send(err)
        console.log(err)
    }
}
const deleted = async(req,res)=>{
try{
  let e= req.params.id
const deleted= await Worker.deleteOne({_id:e})
 res.json(deleted)
}catch(err){
    res.status(500).send(err)
}
}
const updated = async(req,res)=>{
    try{
    let e=req.params.id
    dat=req.body
    upd= await Worker.findOneAndUpdate({_id:e},dat)
    res.send(upd)
    }catch(err){
        res.status(500).send(err)
    }
    }

module.exports = { selectAll, selectOne, addOne, deleted,updated  };




