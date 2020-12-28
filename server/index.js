const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 9999 || process.env.PORT
require('./app/helpers/DB')
const server = require('http').Server(app)
let io = require('socket.io')(server)
const cors = require('cors');
const { userRouter } = require('./app/routes/user.routes')
const { tagRouter } = require('./app/routes/tag.routes')
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
app.use('/tag', tagRouter)
app.use('/mail', mailRouter)
//SVM
const fs = require('fs')
let rawdataTrain = fs.readFileSync('public/train.json')
let rawdataTest = fs.readFileSync('public/test.json')
let dataTrain = JSON.parse(rawdataTrain)
let dataTest = JSON.parse(rawdataTest)

let labelsTrain = []
let mailTextTrain = [] 
let labelsTest = []
let mailTextTest = []

function removeSpecialCharacters(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g," ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    return str;
}

dataTrain.map(x => {
    if (x.Label === 'spam') labelsTrain.push(1)
    else labelsTrain.push(0)
    mailTextTrain.push(removeSpecialCharacters(x.EmailText))
})
dataTest.map(x => {
    if (x.Label === 'spam') labelsTest.push(1)
    else labelsTest.push(0)
    mailTextTest.push(removeSpecialCharacters(x.EmailText))
})


const { CountVectorizer } = require('machinelearn/feature_extraction')
let cv = new CountVectorizer()

let train = cv.fit_transform(mailTextTrain)
let test = cv.transform(mailTextTest)
console.log(cv.getFeatureNames())
const doChinhXac = (a, b) => {
    let dem = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) dem++
    }
    return dem / a.length * 100
}
const { SVC } = require('machinelearn/svm')
const trainData = async () => {
    const svm = new SVC({ cost: 0.5 , gamma: 0.1, kernel: 'SIGMOID' })
    const load = await svm.loadASM()
    console.log('Đang train...')
    load.fit(train, labelsTrain)
    console.log('Train xong')
    console.log(`Độ chính xác của dự đoán : ${doChinhXac(load.predict(test), labelsTest)} %`)
    app.post('/svm', (req, res) => {
        const { content } = req.body
        let removeSpecial = removeSpecialCharacters(content)
        const text = cv.transform([removeSpecial])
        let tag = 'Normal'
        if (load.predict(text)[0] === 1) { tag = 'Spam' }
        res.send({ success: true, name: tag })
    })
}
trainData()

// Start Server
server.listen(port, () => console.log('Server started !'))




