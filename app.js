const express = require("express");
const app = express();
const port = 3030;
// Importazione del router dei movie
const moviesRoute = require("./routers/movies");
// Importazione del middleware per la gestione degli errori
const errorHandler = require("./middlewares/errorsHandler");
// Middleware per gestire le richieste non trovate
const notFound = require("./middlewares/notFound");

// Middleware per il parsing del JSON
app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server dei movie in esecuzione!");
});

app.use("/movies", moviesRoute);

app.use(errorHandler);
app.use(notFound);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
