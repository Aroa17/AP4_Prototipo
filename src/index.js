const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), leerPuerto());

app.get("/rutaGet", function (req, res) {
    console.log("Probando en la consola de node desde una llamada al servidor");
    res.send("Hola a la primera web que llamo en el servidor de mi pc");
});

function leerPuerto() {
    console.log("Saludos desde el puerto " + app.get("port"));
}