const express = require('express');
const Joi = require('joi');
const router = express.Router();
const mongoose = require('mongoose');
const {Batch,validateBatch} = require('../modals/batch');

function vi(id,res) {
  const isvalid=mongoose.Types.ObjectId.isValid(id);
  if(!isvalid) return res.status(400).send("Provide a valid 24 digit object id");
}
//----------

router.use(express.json());
////////------------reading ------------------------

router.get('/',async (req,res)=>
{
res.status(200).send(await Batch.find());
});


///////////-------reading by specific id
router.get('/:id',async(req,res)=>
{vi(req.params.id,res);
  const batch= await Batch.findById(req.params.id);
if(!batch) return res.status(404).send("The batch with this id does not exist");
res.status(200).send(batch);
});


//-----creating-----------///////////
router.post('/',async (req,res)=>{
  const {error} = validateBatch(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  const batch=new Batch(req.body);
  try{
    const result=await batch.save();
    res.status(200).send(result);
  }
  catch(error){res.send(error.message);}
});

///////--------///////
//updating
router.put('/:id',async (req,res)=>{
vi(req.params.id,res);
const {error} = validateBatch(req.body);
if(error) return res.status(400).send(error.details[0].message);

const batch= await Batch.findByIdAndUpdate(req.params.id,{ ID: req.body.ID },{new:true});

if(!batch) return res.status(404).send("The batch with this id does not exist");
res.send(batch);
});
///-----------------------


router.delete('/:id',async (req,res)=>{
  vi(req.params.id,res);
    const batch= await Batch.findByIdAndRemove(req.params.id);
  if(!batch) return res.status(404).send("The batch with this id does not exist");
  res.send(batch);
});



module.exports=router;
