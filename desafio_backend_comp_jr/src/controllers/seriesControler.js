import episodios from "../models/Episodios.js";
import series from "../models/Series.js";

class seriesController {
	static listar = async (req, res) => {
		try {
			const lista = await series.find();
			res.status(200).send(lista);
		} catch (err) {
			res.status(500).send({
				message: "Ocorreu algum erro",
				erro: err.message,
			});
		}
	};

	static listarPorId = async (req, res) => {
		try {
			const id = req.params.id;

			const serieResultado = await livros.findById(id);
			if (serieResultado !== null) {
				res.status(200).send(serieResultado);
			} else {
				res.status(500).send({
					message: "Série não encontrada",
				});
			}
		} catch (err) {
			res.status(500).send({
				message: "Série não encontrada",
				erro: err.message,
			});
		}
	};

	static cadastrar = async (req, res) => {
		try {
			let novaSerie = new series(req.body);
			await episodios.create();
			await series.create(novaSerie);
			res.status(201).json({ message: "Série Cadastrada Com Sucesso" });
		} catch (err) {
			res.status(500).json({
				message: "Série não cadastrada",
				erro: err.message,
			});
		}
	};

	static modificar = async (req, res) => {};

	static exluir = async (req, res) => {};
}

export default seriesController;
