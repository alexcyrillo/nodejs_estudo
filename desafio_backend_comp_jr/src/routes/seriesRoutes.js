import express from "express";
import seriesController from "../controllers/seriesControler.js";

const router = express.Router();

router
	.get("/minhasseries", seriesController.listar)
	.post("/minhasseries",seriesController.cadastrar)
	.put("/minhasseries/:id", seriesController.modificar)
	.delete("/minhasseries/:id", seriesController.exluir);

export default router;