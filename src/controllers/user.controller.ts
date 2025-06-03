import { Request, Response } from "express";
import { getAllUsers, handleCreateUser } from "../services/user.service";
const getHomePage = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  return res.render("home", {
    users: users,
  });
};
const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("create-user");
};
const postCreateUserPage = async (req: Request, res: Response) => {
  const { name, email, address } = req.body;
  //handle create user
  await handleCreateUser(name, email, address);
  return res.redirect("/");
};

export { getCreateUserPage, getHomePage, postCreateUserPage };
