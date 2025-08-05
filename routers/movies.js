const express = require("express");
const router = express.Router();

// Importazione del controller dei movie
const movieController = require("../controllers/moviesController");

// Importazione del controller dei review
const reviewsController = require("../controllers/reviewsController");

// Definizione delle rotte per i movie
// GET /movies - Elenco dei movie
router.get("/", movieController.index);
// GET /movies/:id - Dettagli di un movie specifico
router.get("/:id", movieController.show);

// Definizione delle rotte per i review
// GET /reviews - Elenco dei review
router.get("/reviews", reviewsController.index);
// GET /reviews/:id - Dettagli di un review specifico
router.get("/reviews/:id", reviewsController.show);
// POST /reviews/:id/review - Inserimento di un nuovo review
router.post("/reviews/:id", reviewsController.store);

module.exports = router;
