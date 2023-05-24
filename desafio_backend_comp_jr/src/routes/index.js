import express from "express";
import episodios from "./episodiosRoutes.js";
import series from "./seriesRoutes.js";

const routes = (app) => {
	app.route("/").get((req, res) => {
		res.status(200).send({
			titulo: "Desafio Back-end",
			objetivo:
				"Meu projeto consiste em um sistema de controle de episódios vistos de series cadastradas pelo usuário",
			desenvolvedor: "Alex Cyrillo",
		});
	});

	app.use(express.json(), series, episodios);
};

export default routes;
