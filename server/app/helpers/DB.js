const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost/mail',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log("Database Connected"))
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })