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

router.post("/rutaPOST", (req, res) => {
    console.log("Alguien ha accedido a la ruta POST");
    res.send("Haciendo pruebas con la ruta POST");
});

router.post("/rutaPOSTconBody", (req, res) => {
    req.body = "Probando con el request";
    console.log(req.body);
    res.json({
        saludo: "Hola desde el JSON",
    });
});

router.post("/rutaPOST2conBody", (req, res) => {
    req.body = "Hola, usando el request";
    console.log(req.body);
    res.json({
        Title: "Creacion de nueva ruta JSON",
    });
});

router.post("/rutaPOST3", (req, res) => {
    req.body = "Hola de nuevo";
    console.log(req.body);
    res.json({
        Trabajo: "Proyecto Intermodular, probando con rutas POST"
    })
});

router.post("/rutaPOSTult", (req, res) => {
    console.log("Alguien ha accedido a la ruta POST");
    res.send("Haciendo pruebas con POSTMAN");
});
   
module.exports = router;