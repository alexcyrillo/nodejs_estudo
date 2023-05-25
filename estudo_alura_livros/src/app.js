import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorErros from "./middlewares/manipuladorErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

db.on("error", console.log.bind(console, "Erro de Conexão"));
db.once("open", () => {
	console.log("Conexão com banco realizada com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

app.use(manipuladorErros);
app.use(manipulador404);

export default app;
