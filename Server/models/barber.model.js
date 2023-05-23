const mongoose = require("mongoose");

const BarberSchema = new mongoose.Schema({
    
    fullName: {
        type: String,   
        required: [true, 'You must enter the name '],
        minlength: [2, 'Cannot be less than 3 characters']

    },
    
    mail: {
        type: String,   
        required: [true, 'You must enter the name '],
        minlength: [2, 'Cannot be less than 3 characters']

    },

    num: {
        type: String,   
        required: [true, 'You must enter the name '],
        minnum: [2, 'Cannot be less than 3 characters']

    },

    barber: {
            type: String,
            required: [true, 'Debe tener un tipo'],
            minlength: [2, 'Cannot be less than 3 characters']
    },

    hour: {
        type: String,   
        required: [true, 'You must enter the name '],
        minnum: [2, 'Cannot be less than 3 characters']

    },

    day: {
        type: String,
        required: [true, 'Debe tener un tipo'],
        minlength: [2, 'Cannot be less than 3 characters']
    },

    typeOfService: {
        type: String,
        required: [true, 'Debe ingresar una descripcion'],
        minlength: [2, 'Cannot be less than 3 characters']
    },
});

const Barber = mongoose.model("Barber",BarberSchema );
module.exports = Barber;