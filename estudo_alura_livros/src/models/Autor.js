import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
	{
		id: { type: String },
		nome: {
			type: String,
			required: [true, "Nome do(a) Autor(a) é obrigatório"],
		},
		nacionalidade: { type: String },
	},
	{
		versionKey: false,
	}
);

const autores = mongoose.model("autores", autorSchema);

export default autores;
