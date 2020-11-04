const express = require('express')
const app = express()
app.use(express.static('./public'))
app.get('/',(req,res)=>{
    res.send('<h1>le hong nghiem</h1>')
})
app.listen(9999,()=>console.log('Servver started !'))