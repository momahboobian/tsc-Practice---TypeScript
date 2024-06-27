import { User, UserDatabase, database } from "./userModel";

function addUser(username: string, age: number, email: string): User {
  const user: User = {
    id: database.length + 1,
    username,
    age,
    email,
    created: new Date(),
  };
  database.push(user);
  return user;
}

function findUser(username: string): User | null {
  return database.find((user) => user.username === username) || null;
}

function deleteUser(id: number): User | null {
  const index = database.findIndex((user) => user.id === id);
  if (index !== -1) {
    return database.splice(index, 1)[0];
  }
  return null;
}

function listUsers(): UserDatabase {
  return database;
}

export { addUser, findUser, deleteUser, listUsers };
