import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/desafio-backend").
	catch(error => handleError(error))

let db = mongoose.connection;

export default db;