import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta{
   constructor(err){
      const errMessage = Object.values(err.errors)
			.map((err) => err.message)
			.join("; ");

      super(`Foram encontrados os seguintes erros: ${errMessage}`);
   }
}

export default ErroValidacao;