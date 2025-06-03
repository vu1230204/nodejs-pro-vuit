import { Request, Response } from "express";
import { handleCreateUser } from "../services/user.service";
const getHomePage = (req: Request, res: Response) => {
  return res.render("home.ejs");
};
const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("create-user");
};
const postCreateUserPage = (req: Request, res: Response) => {
  const { name, email, address } = req.body;
  //handle create user
  handleCreateUser(name, email, address);
  return res.redirect("/");
};

export { getCreateUserPage, getHomePage, postCreateUserPage };
