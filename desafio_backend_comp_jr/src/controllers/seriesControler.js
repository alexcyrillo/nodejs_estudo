import episodios from "../models/Episodios.js";
import series from "../models/Series.js";

class seriesController {
	static listar = async (req, res) => {
		try {
			const lista = await series.find();
			res.status(200).json(lista);
		} catch (err) {
			res.status(500).json({ erro: err.message });
		}
	};

	static cadastrar = async (req, res) => {
		try {
			let novaSerie = new series(req.body);
			await episodios.create(
				
			)
			await series.create(novaSerie);
			res.status(201).json({message: "Série Cadastrada Com Sucesso"})
		} catch (err) {
			res.status(500).json({ erro: err.message });
		}
	};

	static modificar = async (req, res) => {};

	static exluir = async (req, res) => {};
}

export default seriesController;
