const { Router } = require("express");
const router = Router();

//ruta Get

router.get("/rutaGetRouter", function(req, res) {
    res.send("Bienvenido a la web en la que estamos utilizando router desde el servidor");
});

module.exports = router;