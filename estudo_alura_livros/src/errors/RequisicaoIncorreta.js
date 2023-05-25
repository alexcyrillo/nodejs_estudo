import ErroBase from "./ErroBase.js";

class RequisicaoIncorreta extends ErroBase{
   constructor(mensagem = "Um ou mais dados fornecidos incorretos"){
      super(mensagem, 400);
   }
}

export default RequisicaoIncorreta;