import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const livroSchema = new mongoose.Schema({
	id: { type: String },
	titulo: { type: String, required: [true, "Título do livro é obrigatório"] },
	autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O(a) autor(a) é obrigatório"],
      autopopulate: true // propriedade adicionada
    },
	editora: {
		type: String,
		required: [true, "Editora do livro é obrigatório"],
		// enum: {
		// 	values: ["casa do código", " Alura"],
		// 	message: "A editora {VALUE} não é um valor permitido"
		// }
	},
	numeroPaginas: {
		type: Number,
		validate: {
			validator: (valor) => {
				return valor >= 10 && valor <= 3000;
			},
			message: "O número de páginas deve estar entre 10 e 3000. Valor Fornecido: {Value}"
		},
		// min: [10, "O número de páginas deve estar entre 10 e 3000. Valor Fornecido: {Value}"],
		// max: [3000, "O número de páginas deve estar entre 10 e 3000. Valor Fornecido: {Value}"],
	},
});

livroSchema.plugin(autopopulate);

const livros = mongoose.model("livros", livroSchema);

export default livros;
