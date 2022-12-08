const axios= require('axios')
const mongoose= require('mongoose');
const cryptomodel= require('../models/cryptomodel')

mongoose
  .connect("mongodb+srv://Vashika:Vanshikaa08@cluster0.on6mcgr.mongodb.net/test")
  .then(() => {
    console.log("Connectd...");
  })
  .catch((error) => {
    console.log(error.message);
  });


const cryptoCoins = async function(req,res){
    try{
        let options={
            method: "get",
            url : `https://api.coincap.io/v2/assets`
        }
      let result= await axios(options)
       let store= result.data.data
       
       
       let sorted= store.sort(({changePercent24Hr:a},{changePercent24Hr:b})=>b-a)
       
      await cryptomodel.deleteMany()
      let save= await cryptomodel.create(sorted)
     return res.status(201).send({status:true, count:save.length, data:save})}

    catch(error){
      return res.status(500).send({status:false , message:error.message})
    }}

module.exports.cryptoCoins= cryptoCoins









