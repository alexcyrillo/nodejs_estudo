import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json" assert { type: "json" };

const app = express();

db.on("error", console.log.bind(console, "Erro de Conexão"));
db.once("open", () => {
	console.log("Conexão com banco realizada com sucesso");
});

routes(app);

app.use(express.static("/docs-swagger"), swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());

export default app;
