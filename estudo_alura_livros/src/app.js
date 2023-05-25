import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errManipulator from "./middlewares/errorManipulator.js";

db.on("error", console.log.bind(console, "Erro de Conexão"));
db.once("open", () => {
   console.log("Conexão com banco realizada com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

app.use(errManipulator);

export default app;