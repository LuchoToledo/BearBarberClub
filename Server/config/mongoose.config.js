const  mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/BearBarberClub_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(()=> console.log('Successful connection'))
        .catch(err => console.log('Failed connection', err));