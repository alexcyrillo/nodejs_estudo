import NaoEncontrado from "../errors/NaoEncontrado.js";
import { autores } from "../models/index.js";

class AutorController {
	static listarAutores = async (req, res, next) => {
		try {
			const autoresResultado = await autores.find();
			req.resultado = autoresResultado;

			next();
		} catch (erro) {
			res.status(500).json({ message: "Erro interno no servidor" });
		}
	};

	static listarAutorId = async (req, res, next) => {
		try {
			const id = req.params.id;
			const autorResultado = await autores.findById(id);
			if (autorResultado !== null) {
				res.status(200).send(autorResultado);
			} else {
				next(new NaoEncontrado("ID do autor não encontrado"));
			}
		} catch (err) {
			next(err);
		}
	};

	static cadastrarAutor = async (req, res, next) => {
		try {
			let autor = new autores(req.body);
			const autorResultado = await autor.save();
			res.status(201).send(autorResultado.toJSON());
		} catch (err) {
			next(err);
		}
	};

	static atualizarAutor = async (req, res, next) => {
		try {
			const id = req.params.id;

			const autorResultado = await autores.findByIdAndUpdate(id, {
				$set: req.body,
			});

			if (autorResultado !== null) {
				res.status(200).send({ message: "Autor atualizado com sucesso" });
			} else {
				next(new NaoEncontrado("Id do Autor não localizado."));
			}
		} catch (err) {
			next(err);
		}
	};

	static excluirAutor = async (req, res, next) => {
		try {
			const id = req.params.id;

			const autorResultado = await autores.findByIdAndDelete(id);

			if (autorResultado !== null) {
				res.status(200).send({ message: "Autor removido com sucesso" });
			} else {
				next(new NaoEncontrado("Id do Autor não localizado."));
			}
		} catch (err) {
			next(err);
		}
	};
}
export default AutorController;
