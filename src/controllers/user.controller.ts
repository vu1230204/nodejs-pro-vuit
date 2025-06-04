import { Request, Response } from "express";
import {
  getAllUsers,
  getUserById,
  handleCreateUser,
  handleDeleteUser,
  UpdateUserById,
} from "services/user.service";
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
  const a = await handleCreateUser(name, email, address);
  return res.redirect("/");
};
const postDeleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  await handleDeleteUser(id);
  return res.redirect("/");
};
const getViewUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const users = await getUserById(id);
  // get user by id
  return res.render("view-user.ejs", {
    id: id,
    users: users,
  });
};
const postUpdateUser = async (req: Request, res: Response) => {
  const { id, email, address, name } = req.body;
  //update user by id
  const a = await UpdateUserById(id, email, address, name);

  return res.redirect("/");
};

export {
  getCreateUserPage,
  getHomePage,
  getViewUser,
  postCreateUserPage,
  postDeleteUser,
  postUpdateUser,
};
