import { prisma } from "src/config/client";
import getConnection from "../config/database";

const handleCreateUser = async (
  name: string,
  email: string,
  address: string
) => {
  //insert into database
  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      address: address,
    },
  });
  return newUser;
};
const getAllUsers = async () => {
  const user = await prisma.user.findMany();
  return user;
};
const handleDeleteUser = async (id: string) => {
  try {
    const connection = await getConnection();
    const sql = "DELETE FROM `user` WHERE `id` = ?";
    const values = [id];

    const [result, fields] = await connection.execute(sql, values);

    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};
const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id: +id },
  });
  return user;
};
const UpdateUserById = async (
  id: string,
  email: string,
  address: string,
  name: string
) => {
  const updatedUser = await prisma.user.update({
    where: { id: +id },
    data: {
      name: name,
      email: email,
      address: address,
    },
  });
  return updatedUser;
};

export {
  getAllUsers,
  getUserById,
  handleCreateUser,
  handleDeleteUser,
  UpdateUserById,
};
