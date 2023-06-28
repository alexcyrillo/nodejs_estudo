import series from "../models/Series.js";

class seriesController {
	static listar = async (req, res) => {
		try {
			const lista = await series.find();
			res.status(200).send(lista);
		} catch (err) {
			res.status(500).send({
				message: "Erro interno do servidor",
				erro: err.message,
			});
		}
	};

	static listarPorId = async (req, res) => {
		try {
			const id = req.params.id;

			const serieResultado = await series.findById(id);
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
			await series.create(novaSerie);
			res.status(201).json({ message: "Série cadastrada com sucesso" });
		} catch (err) {
			res.status(500).json({
				message: "Não foi possível cadastrar",
				erro: err.message,
			});
		}
	};

	static modificar = async (req, res) => {
		try {
			const id = req.params.id;

			const livroResultado = await series.findByIdAndUpdate(id, {
				$set: req.body,
			});

			if (livroResultado !== null) {
				res.status(200).send({ message: "Série atualizada com sucesso" });
			} else {
				res.status(400).send("Id da série não localizado");
			}
		} catch (err) {
			res.status(500).json({
				message: "Série não cadastrada",
				erro: err.message,
			});
		}
	};

	static exluir = async (req, res) => {
		try {
			const id = req.params.id;

			const serieResultado = await series.findByIdAndDelete(id);

			if (serieResultado !== null) {
				res.status(200).send({ message: "Série removida com sucesso" });
			} else {
				res.status(500).send("Id da série não localizado");
			}
		} catch (err) {
			res.status(500).json({
				message: "Id da série não localizado",
				erro: err.message,
			});
		}
	};

	// static listarPorNome = async (req, res) => {
	// 	try {
	// 		const busca = { nome }
	// 		busca.nome = req.query.nome;
	// 		if (busca !== null){
	// 			const serieResultado = await series.find(busca);
	// 			res.status(200).send(serieResultado)
	// 		}

	// 	} catch (err) {

	// 	}
	// }
}

export default seriesController;
