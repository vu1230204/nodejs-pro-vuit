import express from "express";
import webRoutes from "./routes/web";
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
//config view egine
app.set("view engine", "ejs");
app.set("views", __dirname + "/view");

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config static files : images/css/js
app.use(express.static("public"));

//config routes
webRoutes(app);

app.listen(8080, () => {
  console.log(`My App is running on port: ${PORT}`);
});
