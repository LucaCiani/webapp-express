const express = require("express");
const router = express.Router();

// Importazione del controller dei review
const reviewsController = require("../controllers/reviewsController");

// Definizione delle rotte per i review
// GET /reviews - Elenco dei review
router.get("/", reviewsController.index);
// GET /reviews/:id - Dettagli di un review specifico
router.get("/:id", reviewsController.show);

module.exports = router;
