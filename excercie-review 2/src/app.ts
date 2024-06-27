import {
  fetchUsers,
  fetchUserById,
  fetchTodosByUserId,
  fetchCompletedTodos,
} from "./fetchData";
import { User, Todo } from "./interfaces";

function createUserCard(user: User): string {
  return `
    <div class="user-card">
      <h2>${user.name}</h2>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
      <p><strong>Company:</strong> ${user.company.name}</p>
    </div>
  `;
}

function createTodoList(todos: Todo[]): string {
  return todos
    .map(
      (todo) => `
    <div class="todo-item">
      <p><strong>${todo.title}</strong> - ${
        todo.completed ? "Completed" : "Pending"
      }</p>
    </div>
  `
    )
    .join("");
}

async function populateUserDropdown() {
  const userSelect = document.getElementById(
    "user-select"
  ) as HTMLSelectElement;
  const userTodos = document.getElementById("user-todos") as HTMLSelectElement;
  try {
    const users = await fetchUsers();
    users.forEach((user) => {
      const option = document.createElement("option");
      option.value = user.id.toString();
      option.textContent = user.name;
      userSelect.appendChild(option);

      const todoOption = document.createElement("option");
      todoOption.value = user.id.toString();
      todoOption.textContent = user.name;
      userTodos.appendChild(todoOption);
    });
  } catch (error) {
    console.error("Error populating user dropdown:", error);
  }
}

async function displayUserDetails(userId: number) {
  const userDetails = document.getElementById("user-details") as HTMLDivElement;
  try {
    const user = await fetchUserById(userId);
    if (userDetails) {
      userDetails.innerHTML = createUserCard(user);
    }
  } catch (error) {
    if (userDetails) {
      userDetails.innerHTML = `<p>Error fetching user details</p>`;
    }
  }
}

async function displayTodos(userId: number) {
  const todosList = document.getElementById("todos-list") as HTMLDivElement;
  try {
    const todos = await fetchTodosByUserId(userId);
    if (todosList) {
      todosList.innerHTML = createTodoList(todos);
    }
  } catch (error) {
    if (todosList) {
      todosList.innerHTML = `<p>Error fetching todos</p>`;
    }
  }
}

async function displayCompletedTodos() {
  const todosList = document.getElementById("todos-list") as HTMLDivElement;
  try {
    const todos = await fetchCompletedTodos();
    if (todosList) {
      todosList.innerHTML = createTodoList(todos);
    }
  } catch (error) {
    if (todosList) {
      todosList.innerHTML = `<p>Error fetching completed todos</p>`;
    }
  }
}

function setupEventListeners() {
  const userSelect = document.getElementById(
    "user-select"
  ) as HTMLSelectElement;
  userSelect.addEventListener("change", (event) => {
    const target = event.target as HTMLSelectElement;
    const userId = Number(target.value);
    if (userId) {
      displayUserDetails(userId);
    }
  });

  const userTodos = document.getElementById("user-todos") as HTMLSelectElement;
  userTodos.addEventListener("change", (event) => {
    const target = event.target as HTMLSelectElement;
    const userId = Number(target.value);
    if (userId) {
      displayTodos(userId);
    }
  });

  const filterCompletedTodosButton = document.getElementById(
    "filter-completed-todos"
  ) as HTMLButtonElement;
  filterCompletedTodosButton.addEventListener("click", () => {
    displayCompletedTodos();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateUserDropdown();
  setupEventListeners();
});
