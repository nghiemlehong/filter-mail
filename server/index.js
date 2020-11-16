const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const port = 9999 || process.env.PORT
require('./app/helpers/DB')
const server = require('http').Server(app)
let io = require('socket.io')(server)
const cors = require('cors');
const { userRouter } = require('./app/routes/user.routes')
const { roleRouter } = require('./app/routes/role.routes')
const { mailRouter } = require('./app/routes/mail.routes')
app.use(cors());
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
})

//Middleware error
app.use((req, res, next) => {
    res.onError = function (error) {
        const body = { success: false, message: error.message }
        if (!error.statusCode) console.log(error)
        res.status(error.statusCode || 500).send(body)
    }
    next()
});
//Router
app.use('/user', userRouter)
app.use('/role', roleRouter)
app.use('/mail', mailRouter)

// Xử lý real time 
// io.on('connection', socket => {
//     console.log("Co mot ket noi tu "+ socket.id)
//     socket.on('disconnect',()=>{
//         console.log('Da ngat ket noi' +  socket.id)
//     })
// })

// Start Server
server.listen(port, () => console.log('Server started !'))




