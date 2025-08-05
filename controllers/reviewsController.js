const connection = require("../data/connectionData.js");

// Funzioni del controller per gestire le operazioni CRUD sui movie

// index: Elenco dei movie
function index(req, res) {
    const sql = "SELECT * FROM reviews";
    connection.query(sql, (err, results) => {
        if (err)
            return res.status(500).json({ error: "Database query failed" });
        res.json(results);
    });
}

// show: Dettagli di un movie specifico
function show(req, res) {
    const { id } = req.params;
    const sql = "SELECT * FROM reviews WHERE movie_id = ?";
    connection.query(sql, [id], (err, results) => {
        if (err)
            return res.status(500).json({ error: "Database query failed" });
        if (results.length === 0)
            return res.status(404).json({ error: "Movie not found" });
        res.json(results);
    });
}

// insert the storeReview function
function store(req, res) {
    const { id } = req.params;
    const { name, vote, text } = req.body;

    const sql =
        "INSERT INTO reviews (movie_id, name, text, vote) VALUES (?, ?, ?, ?)";
    connection.query(sql, [id, name, text, vote], (err, results) => {
        if (err)
            return res.status(500).json({ error: "Database query failed" });
        res.status(201);
    });
}
// Esportazione delle funzioni del controller
module.exports = {
    index,
    show,
    store,
};
