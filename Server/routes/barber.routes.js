const BearBarberClubController = require("../controller/barber.controller.js");

module.exports = app => {
    app.get("/api/barber", BearBarberClubController.findAllBarbers);
    app.get("/api/barber/:id", BearBarberClubController.findOneBarber);
    app.put("/api/barber/update/:id", BearBarberClubController.updateExistingReserve);
    app.post("/api/barber/new", BearBarberClubController.createNewReserve);
    app.delete("/api/barber/delete/:id", BearBarberClubController.deleteExistingReserve);
}