import getConnection from "../config/database";

const handleCreateUser = (name: string, email: string, address: string) => {
  //insert into database
  //return result
  console.log(">>>insert a new user");
};
const getAllUsers = async () => {
  const connection = await getConnection();
  try {
    const [results, fields] = await connection.query("SELECT * FROM `users`");
    return results;
  } catch (err) {
    console.log(err);
    return [];
  }
};
export { getAllUsers, handleCreateUser };
