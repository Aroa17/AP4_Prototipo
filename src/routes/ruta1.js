const { Router } = require("express");
const router = Router();

router.get("/rutaGetRouter", function(req, res) {
    res.send("Bienvenido a la web en la que estamos utilizando routes desde el servidor");
});

module.exports = router;