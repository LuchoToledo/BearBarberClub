const barber = require("../models/barber.model.js");

module.exports.findAllBarbers = (req, res) => {
    barber.find()
        .then(allBarbers => res.json({ adm : allBarbers}))
        .catch(err => {
            console.log("err", err);
            res.json({ message: "This is not the list of barbers", error: err})
        });
};

module.exports.findOneBarber = (req, res) => {
    barber.findOne({ _id: req.params.id})
    .then(oneSingleBarber=> res.json ({ adm: oneSingleBarber}))
    .catch(err => res.json({message: "Choose the barber", error: err}));
};

module.exports.createNewReserve = (req, res) => {
    console.log(req.body.data)
    barber.create(req.body.data)
    .then(newlyCreatedReserved=> res.json({ adm: newlyCreatedReserved}))
    .catch(err => res.json({ message: "The reservation was not added", error: err}));
};

module.exports.updateExistingReserve = (req, res) => {
    barber.findOneAndUpdate({_id: req.params.id}, req.body,{ new: true})
    .then(updateReserve => res.json({ adm: updateReserve}))
    .catch(err => res.json({ message: "The reservation status was not updated", error: err}));
};

module.exports.deleteExistingReserve = (req, res) => {
    barber.deleteOne({ _id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({ message: "Reservation deleted", error: err})); 
};