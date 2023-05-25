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
         let livro = await livros.findById(id);
         res.status(200).json(livro);
      } catch (err) {
         next(err);
      }
   };

   static cadastrarLivro = async (req, res, next) => {
      try {
         let livro = new livros(req.body);
         await livros.create(livro);
         res.status(201).json({ message: "Livro cadastrado com sucesso" });
      } catch (err) {
         next(err);
      }
   };

   static atualizarLivro = async (req, res, next) => {
      try {
         const id = req.params.id;
         await livros.findByIdAndUpdate(id, { $set: req.body });
         res.status(200).json({ message: "Livro atualizado com sucesso" });
      } catch (err) {
         next(err);
      }
   };

   static excluirLivro = async (req, res, next) => {
      try {
         const id = req.params.id;
         await livros.findByIdAndDelete(id);
         res.status(200).json({ message: "Livro excluído com sucesso" });
      } catch (err) {
         next(err);
      }
   };

   static listarLivrosPorEditora = async (req, res, next) => {
      try {
         const editora = req.query.editora;
         let livro = await livros.find({ "editora": editora }).populate("autor");
         res.status(200).json(livro);
      } catch (err) {
         next(err);
      }
   };
}

export default LivroController;
