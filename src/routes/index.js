const { Router } = require("express");
const router = Router();

//ruta Get

router.get("/rutaGetRouter", function(req, res) {
    res.send("Bienvenido a la web en la que estamos utilizando router desde el servidor");
});

router.get("/rutaGR2", function(req, res) {
    res.send("Se le presenta al usuario el poder contemplar desde la web lo que el servidor hace");
});

router.get("/rutaGR3", function(req, res) {
    res.send("La app a la que desea acceder se llama StickCar");
});

router.get("/rutaGR4", function(req, res) {
    res.send("Todavía está en proceso de ejecución...");
});

router.get("/rutaGR5", function(req, res) {
    res.send("Desde la ruta cinco, dejo este mensaje en la web desde el servidor");
});

module.exports = router;