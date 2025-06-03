import express, { Express } from "express";
import {
  getCreateUserPage,
  getHomePage,
  postCreateUserPage,
} from "../controllers/user.controller";

const router = express.Router();
const webRoutes = (app: Express) => {
  router.get("/", getHomePage);
  router.get("/create-user", getCreateUserPage);
  router.post("/handle-create-user", postCreateUserPage);

  app.use("/", router);
};

export default webRoutes;
