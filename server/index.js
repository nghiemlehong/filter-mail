const express = require('express')
require('./app/helpers/DB')
const app = express()
app.use(express.static('./public'))
app.get('/',(req,res)=>{
    res.send('<h1>le hong nghiem</h1>')
})
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.listen(9999,()=>console.log('Server started !'))