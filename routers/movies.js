const express = require("express");
const router = express.Router();

// Importazione del controller dei movie
const movieController = require("../controllers/moviesController");

// Definizione delle rotte per i movie
// GET /movies - Elenco dei movie
router.get("/", movieController.index);
// GET /movies/:id - Dettagli di un movie specifico
router.get("/:id", movieController.show);
// POST /movies - Creazione di un nuovo movie
router.post("/", movieController.store);
// PUT /movies/:id - Aggiornamento di un movie specifico
router.put("/:id", movieController.update);
// PATCH /movies/:id - Modifica parziale di un movie specifico
router.patch("/:id", movieController.modify);
// DELETE /movies/:id - Cancellazione di un movie specifico
router.delete("/:id", movieController.destroy);

module.exports = router;
