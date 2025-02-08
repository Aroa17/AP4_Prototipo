const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("port", process.env.PORT || 8080);

//rutas
app.use(require("./routes/index"));
 app-use(morgan("dev"));

//iniciando el servidor
app.listen(app.get("port"), function() {
    console.log("Hola desde el puerto " + app.get("port"));
});


