const express = require('express')
const router= express.Router()
const cryptoController= require('../controller/cryptocontroller.js')


router.get('/cryptoCoins', cryptoController.cryptoCoins)


module.exports= router





