import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorErros from "./middlewares/manipuladorErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

const app = express();

db.on("error", console.log.bind(console, "Erro de Conexão"));
db.once("open", () => {
	console.log("Conexão com banco realizada com sucesso");
});

routes(app);

app.use(express.json());
app.use(manipuladorErros);
app.use(manipulador404);

export default app;
