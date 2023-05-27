import mongoose from "mongoose";

const serieSchema= new mongoose.Schema({
	id: { type: String},
	nome: { type: String, required: true},
	visto: { type: Number },
	naoVistos: { type: Number },
	totalLancado: { type: Number },
	ano: { type: Number},
	status: { type: String},
	ondeAssisto: { type: String}
})

const series = mongoose.model("series", serieSchema);

export default series;