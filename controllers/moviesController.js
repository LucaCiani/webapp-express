const connection = require("../data/moviesData.js");

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

// store: Creazione di un nuovo movie
function store(req, res) {
    const newId = movies[movies.length - 1].id + 1;
    const newMovie = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,
    };

    movies.push(newMovie);
    console.log(movies);
    res.status(201).json(newMovie);
}

// update: Aggiornamento di un movie specifico
function update(req, res) {
    const id = parseInt(req.params.id);
    const movie = movies.find((movie) => movie.id === id);
    if (!movie) {
        return res.status(404).json({
            error: "Not Found",
            message: "Movie non trovato",
        });
    }
    movie.title = req.body.title;
    movie.content = req.body.content;
    movie.image = req.body.image;
    movie.tags = req.body.tags;
    console.log(movies);
    res.json(movie);
}

// modify: Modifica parziale di un movie specifico
function modify(req, res) {
    const id = parseInt(req.params.id);
    const movie = movies.find((movie) => movie.id === id);
    if (!movie) {
        return res.status(404).json({
            error: "Not Found",
            message: "Movie non trovato",
        });
    }
    movie.title = req.body.title;
    movie.content = req.body.content;
    movie.image = req.body.image;
    movie.tags = req.body.tags;
    console.log(movies);
    res.json(movie);
}

// destroy: Cancellazione di un movie specifico
function destroy(req, res) {
    const { id } = req.params;
    const sql = "DELETE FROM movies WHERE id = ?";
    connection.query(sql, [id], (err) => {
        if (err)
            return res.status(500).json({ error: "Failed to delete movie" });
        res.sendStatus(204);
    });
}

// Esportazione delle funzioni del controller
// Queste funzioni saranno utilizzate nelle rotte del router dei movie
module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy,
};
