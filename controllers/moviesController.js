const connection = require("../data/connectionData.js");

// Funzioni del controller per gestire le operazioni CRUD sui movie

// index: Elenco dei movie
function index(req, res) {
    const sql = "SELECT * FROM movies";
    connection.query(sql, (err, results) => {
        if (err)
            return res.status(500).json({ error: "Database query failed" });
        res.json(results);
    });
}

// show: Dettagli di un movie specifico
function show(req, res) {
    const { id } = req.params;
    const sql = "SELECT * FROM movies WHERE id = ?";
    connection.query(sql, [id], (err, results) => {
        if (err)
            return res.status(500).json({ error: "Database query failed" });
        if (results.length === 0)
            return res.status(404).json({ error: "Movie not found" });
        res.json(results[0]);
    });
}

// Esportazione delle funzioni del controller
// Queste funzioni saranno utilizzate nelle rotte del router dei movie
module.exports = {
    index,
    show,
};
