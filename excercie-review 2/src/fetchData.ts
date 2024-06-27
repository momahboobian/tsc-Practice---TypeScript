import { User } from "./interfaces";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: User[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export async function fetchUserById(userId: number): Promise<User> {
  try {
    const response = await fetch(`${API_URL}/${userId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok!");
    }
    const user: User = await response.json();
    return user;
  } catch (error) {
    console.error("Error fetching User:", error);
    throw error;
  }
}
