import autores from "../models/Autor.js";

class AutorController {
	static listarAutores = async (req, res) => {
		try {
			const autoresResultado = await autores.find();
			res.status(200).json(autoresResultado);
		} catch (err) {
			res.status(500).json({ erro: err.message });
		}
	};

	static listarAutorId = async (req, res) => {
		try {
			const id = req.params.id;
			let autor = await autores.findById(id);
			res.status(200).json(autor);
		} catch (err) {
			res.status(400).json({
				message: `${err.message} - Id do Autor não encontrado`,
			});
		}
	};

	static cadastrarAutor = async (req, res) => {
		try {
			let autor = new autores(req.body);
			await autores.create(autor);
			res.status(201).json({ message: "Autor cadastrado com sucesso" });
		} catch (err) {
			res.status(500).json({ erro: err.message });
		}
	};

	static atualizarAutor = async (req, res) => {
		try {
			const id = req.params.id;
			await autores.findByIdAndUpdate(id, { $set: req.body });
			res.status(200).json({ message: "Autor atualizado com sucesso" });
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	};

	static excluirAutor = async (req, res) => {
		try {
			const id = req.params.id;
			await autores.findByIdAndDelete(id);
			res.status(200).json({ message: "Autor excluído com sucesso" });
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	};
}

export default AutorController;
