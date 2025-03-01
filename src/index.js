const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("port", process.env.PORT || 8080);

// middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//rutas
app.use(require("./routes/index"));


//iniciando el servidor
app.listen(app.get("port"), function() {
    console.log("Hola desde el puerto " + app.get("port"));
});


