import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function errManipulator(err, req, res, next) {
	if (err instanceof mongoose.Error.CastError) {
		res.status(400).send({
			message: "Um ou mais dados fornecidos incorretos",
		});
	} else if (err instanceof mongoose.Error.ValidationError) {
		const errMessage = Object.values(err.errors)
			.map((err) => err.message)
			.join("; ");

		res.status(400).send({ message: `Foram encontrados os seguintes erros: ${errMessage}`});
	} else {
		res.status(500).send({ message: "Erro interno do servidor" });
	}
}

export default errManipulator;
