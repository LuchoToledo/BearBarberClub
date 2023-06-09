const express = require("express");
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors())
app.use(express.json());

app.use(express.urlencoded({extended: true}));

require('./Server/config/mongoose.config');

const BearBarberClub_db = require('./Server/routes/barber.routes');

BearBarberClub_db(app);

app.listen(port, () => console.log("Im in production my friend!"))   