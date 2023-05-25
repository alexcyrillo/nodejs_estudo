import NaoEncontrado from "../errors/NaoEncontrado.js";
import livros from "../models/Livro.js";

class LivroController {
	static listarLivros = async (req, res, next) => {
		try {
			const livrosResultado = await livros.find().populate("autor"); // populate('autor', 'nome');
			res.status(200).json(livrosResultado);
		} catch (err) {
			next(err);
		}
	};

	static listarLivroId = async (req, res, next) => {
		try {
			const id = req.params.id;
			const livroResultado = await livros.findById(id);
			if (livroResultado !== null) {
				res.status(200).json(livroResultado);
			} else {
				next(new NaoEncontrado("ID do livro não encontrado"));
			}
		} catch (err) {
			next(err);
		}
	};

	static cadastrarLivro = async (req, res, next) => {
		try {
			const livro = new livros(req.body);
			await livros.create(livro);
			res.status(201).json({ message: "Livro cadastrado com sucesso" });
		} catch (err) {
			next(err);
		}
	};

	static atualizarLivro = async (req, res, next) => {
		try {
			const id = req.params.id;
			const livroResultado = await livros.findByIdAndUpdate(id, {
				$set: req.body,
			});
			if (livroResultado !== null) {
				res.status(200).json({ message: "Livro atualizado com sucesso" });
			} else {
				next(new NaoEncontrado("ID do livro não encontrado"));
			}
		} catch (err) {
			next(err);
		}
	};

	static excluirLivro = async (req, res, next) => {
		try {
			const id = req.params.id;
			const livroResultado = await livros.findByIdAndDelete(id);
			if (livroResultado !== null) {
				res.status(200).json({ message: "Livro excluído com sucesso" });
			} else {
				next(new NaoEncontrado("ID do livro não encontrado"));
			}
		} catch (err) {
			next(err);
		}
	};

	static listarLivrosPorEditora = async (req, res, next) => {
		try {
			const editora = req.query.editora;
			let livro = await livros.find({ editora: editora }).populate("autor");
			res.status(200).json(livro);
		} catch (err) {
			next(err);
		}
	};
}

export default LivroController;
