const express = require("express");
const app = express();
const morgan = require("morgan");


const path = require("path");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "routes", "formulario.html"));
});

app.use(require("./routes/index"));

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log("Hola desde el puerto " + app.get("port"));
});