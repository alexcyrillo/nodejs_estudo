import express from "express";
import seriesController from "../controllers/seriesControler.js";

const router = express.Router();

router
	.get("/series", seriesController.listar)
	// .get("/series/busca", seriesController.listarPorNome)
	.get("/series/:id", seriesController.listarPorId)
	.post("/series",seriesController.cadastrar)
	.put("/series/:id", seriesController.modificar)
	.delete("/series/:id", seriesController.exluir);

export default router;