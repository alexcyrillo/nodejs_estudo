import livros from "../models/Livro.js";

class LivroController {
	static listarLivros = async (req, res) => {
		try {
			const livrosResultado = await livros.find().populate("autor"); // populate('autor', 'nome');
			res.status(200).json(livrosResultado);
		} catch (err) {
			res.status(500).json({ erro: err.message });
		}
	};

	static listarLivroId = async (req, res) => {
		try {
			const id = req.params.id;
			let livro = await livros.findById(id);
			res.status(200).json(livro);
		} catch (err) {
			res.status(400).json({
				message: `${err.message} - Id do livro não encontrado`,
			});
		}
	};

	static cadastrarLivro = async (req, res) => {
		try {
			let livro = new livros(req.body);
			await livros.create(livro);
			res.status(201).json({ message: "Livro cadastrado com sucesso" });
		} catch (err) {
			res.status(500).json({ erro: err.message });
		}
	};

	static atualizarLivro = async (req, res) => {
		try {
			const id = req.params.id;
			await livros.findByIdAndUpdate(id, { $set: req.body });
			res.status(200).json({ message: "Livro atualizado com sucesso" });
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	};

	static excluirLivro = async (req, res) => {
		try {
			const id = req.params.id;
			await livros.findByIdAndDelete(id);
			res.status(200).json({ message: "Livro excluído com sucesso" });
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	};

	static listarLivrosPorEditora = async (req, res) => {
		try {
			const editora = req.query.editora;
			let livro = await livros.find({ "editora": editora }).populate("autor");
			res.status(200).json(livro);
		} catch (err) {}
	};
}

export default LivroController;
