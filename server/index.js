const express = require('express')
const bodyParser = require('body-parser')
const port = 9999 || process.env.PORT 
require('./app/helpers/DB')
const {userRouter} = require('./app/routes/user.routes')

const app = express()
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000") 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
  })
app.use((req, res, next) => {
    res.onError = function(error) {
        const body = { success: false, message: error.message }
        if (!error.statusCode) console.log(error)
        res.status(error.statusCode || 500).send(body)
    }
    next()
});
app.use('/user',userRouter)

app.listen(port,()=>console.log('Server started !'))