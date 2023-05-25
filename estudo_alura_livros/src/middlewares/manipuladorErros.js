import mongoose from "mongoose";
import ErroBase from "../errors/ErroBase.js";
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js";
import ErroValidacao from "../errors/ErroValidacao.js";
import NaoEncontrado from "../errors/NaoEncontrado.js";

// eslint-disable-next-line no-unused-vars
function manipuladorErros(err, req, res, next) {
	if (err instanceof mongoose.Error.CastError) {
		new RequisicaoIncorreta().enviarResposta(res);
	} else if (err instanceof mongoose.Error.ValidationError) {
		new ErroValidacao(err).enviarResposta(res);
	} else if (err instanceof NaoEncontrado) {
		err.enviarResposta(res);
	} else {
		new ErroBase().enviarResposta(res);
	}
}

export default manipuladorErros;
