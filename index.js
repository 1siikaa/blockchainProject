const express= require('express')
const app= express()
const route= require('./src/route/route.js')

app.use(express.json())


app.use('/', route)

app.listen(3000, function(){
    console.log("Express app is running on PORT"+ 3000)
})
