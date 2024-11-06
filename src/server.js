import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

let app = express();
//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Backend NodeJS is Running in the port: " + port);
});
