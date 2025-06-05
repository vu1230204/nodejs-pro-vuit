import { prisma } from "src/config/client";

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
  const result = await prisma.user.delete({
    where: { id: +id },
  });
  return result;
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
