import NaoEncontrado from "../errors/NaoEncontrado.js";
import autores from "../models/Autor.js";

class AutorController {
	static listarAutores = async (req, res, next) => {
		try {
			const autoresResultado = await autores.find();
			res.status(200).json(autoresResultado);
		} catch (err) {
			next(err);
		}
	};

	static listarAutorId = async (req, res, next) => {
		try {
			const id = req.params.id;
			const autorResultado = await autores.findById(id);
			if (autorResultado !== null) {
				res.status(200).json(autorResultado);
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
			await autores.create(autor);
			res.status(201).json({ message: "Autor cadastrado com sucesso" });
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
				res.status(200).json({ message: "Autor atualizado com sucesso" });
			} else {
				next(new NaoEncontrado("ID do autor não encontrado"));
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
				res.status(200).json({ message: "Autor excluído com sucesso" });
			} else {
				next(new NaoEncontrado("ID do autor não encontrado"));
			}
		} catch (err) {
			next(err);
		}
	};
}

export default AutorController;
