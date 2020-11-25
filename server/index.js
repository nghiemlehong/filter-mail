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
//SVM
const { SVC } = require('machinelearn/svm')
const fs = require('fs')
const { CountVectorizer } = require('machinelearn/feature_extraction')
let cv = new CountVectorizer()
let rawdata = fs.readFileSync('public/spam.json')
let data = JSON.parse(rawdata)
let labels = []
let mailText = []
data.map(x => {
    if (x.Label === 'spam') labels.push(1)
    else labels.push(0)
    mailText.push(x.EmailText)
})
const train = cv.fit_transform(mailText)
const doChinhXac = (a, b) => {
    let dem = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) dem++
    }
    return dem / a.length * 100
}
const trainData = async () =>{
        const svm = new SVC({ cost: 0.8, gamma: 0.02})
        const load = await svm.loadASM()
        console.log('Đang train...')
        load.fit(train, labels)
        console.log('Train xong')
        console.log(`Độ chính xác của dự đoán ${doChinhXac(load.predict(train), labels)} %`)
    app.post('/svm',(req,res)=>{
        const {content} = req.body
        const text =  cv.transform([content])
        let role = 'Normal'
        if(load.predict(text)[0]===1) {role = 'Spam'}
        res.send({success : true ,name : role})
    })
}
trainData()
// Start Server
server.listen(port, () => console.log('Server started !'))




