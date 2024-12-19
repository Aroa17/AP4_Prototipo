const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), leerPuerto());

function leerPuerto() {
    console.log("Saludos desde el puerto " + app.get("port"));
}

//rutas
app.use(require("./routes/ruta1"));