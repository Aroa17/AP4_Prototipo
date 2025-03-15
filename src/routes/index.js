const { Router } = require("express");
const router = Router();

// Rutas GET
router.get("/rutaGetRouter", function (req, res) {
    res.send("Bienvenido a la web en la que estamos utilizando router desde el servidor");
});

router.get("/rutaGR2", function (req, res) {
    res.send("Se le presenta al usuario el poder contemplar desde la web lo que el servidor hace");
});

router.get("/rutaGR3", function (req, res) {
    res.send("La app a la que desea acceder se llama StickCar");
});

router.get("/rutaGR4", function (req, res) {
    res.send("Todavía está en proceso de ejecución...");
});

router.get("/rutaGR5", function (req, res) {
    res.send("Desde la ruta cinco, dejo este mensaje en la web desde el servidor");
});

// Ruta POST para el formulario
router.post("/rutaPOST", function (req, res) {
    console.log("Alguien ha accedido a la ruta POST");
    console.log(req.body.nombre);
    console.log(req.body.apellidos);
    console.log(req.body.email);
    console.log(req.body.fechadenacimiento);
    console.log(req.body.contraseña);
    console.log(req.body.repetircontraseña);

    res.json({
        id: "001",
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        fechadenacimiento: req.body.fechadenacimiento,
        contraseña: req.body.contraseña,
        repetircontraseña: req.body.repetircontraseña,
    });

});

router.post("/rutaPOSTconBody", (req, res) => {
    console.log("Probando con el request");
    res.json({
        saludo: "Hola desde el JSON",
    });
});

router.post("/rutaPOST2conBody", (req, res) => {
    console.log("Hola, usando el request");
    res.json({
        Title: "Creacion de nueva ruta JSON",
    });
});

router.post("/rutaPOST3", (req, res) => {
    console.log("Hola de nuevo");
    res.json({
        Trabajo: "Proyecto Intermodular, probando con rutas POST",
    });
});

router.post("/rutaPOSTult", (req, res) => {
    console.log("Alguien ha accedido a la ruta POST");
    res.send("Haciendo pruebas con POSTMAN");
});

module.exports = router;