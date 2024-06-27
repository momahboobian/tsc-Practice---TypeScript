import { User, Todo } from "./interfaces";

const API_URL = "https://jsonplaceholder.typicode.com";

export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: User[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function fetchUserById(userId: number): Promise<User> {
  try {
    const response = await fetch(`${API_URL}/users/${userId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const user: User = await response.json();
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

export async function fetchTodosByUserId(userId: number): Promise<Todo[]> {
  try {
    const response = await fetch(`${API_URL}/todos?userId=${userId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const todos: Todo[] = await response.json();
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
}

export async function fetchCompletedTodos(): Promise<Todo[]> {
  try {
    const response = await fetch(`${API_URL}/todos?completed=true`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const todos: Todo[] = await response.json();
    return todos;
  } catch (error) {
    console.error("Error fetching completed todos:", error);
    throw error;
  }
}
