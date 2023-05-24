import mongoose from "mongoose";

const episodioSchema = new mongoose.Schema({
	id: { type: String },
	visto: { type: Number },
	naoVistos: { type: Number },
	totalLancado: { type: Number },
});

const episodios = mongoose.model("episodios", episodioSchema);

export default episodios;
