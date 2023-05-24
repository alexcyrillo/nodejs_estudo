import express from "express";
import episodiosController from "../controllers/episodiosControler.js";

const router = express.Router();

router
	.get("/meusepisodios")
	.post("/meusepisodios")
	.put("/meusepisodios/:id")
	.delete("/meusepisodios/:id");


export default router;
