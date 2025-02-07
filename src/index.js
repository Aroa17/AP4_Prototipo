const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8080);

//rutas
app.use(require("./routes/index"));


//iniciando el servidor
app.listen(app.get("port"), function() {
    console.log("Hola desde el puerto " + app.get("port"));
});


