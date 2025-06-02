import express, { Express } from "express";

const router = express.Router();
const webRoutes = (app: Express) => {
  router.get("/", (req, res) => {
    res.render("home.ejs");
  });
  router.get("/tamvuit", (req, res) => {
    res.send("Hello vu web");
  });
  router.get("/abc", (req, res) => {
    res.send("Hello vu");
  });
  app.use("/z", router);
};

export default webRoutes;
