import data from "./todos.json";

interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean | "archived" | "pending" | "deleted";
}

const typedTodos: ToDo[] = data.todos as ToDo[];

let todo1: ToDo = typedTodos[0];
let todo2: ToDo = typedTodos[1];

typedTodos.sort((a, b) => a.userId - b.userId); // .toSorted()

console.log(typedTodos);

const userIdToFilter = 1;

// Todos for a specific user
const todosForUser = typedTodos.filter(
  (todo) => todo.userId === userIdToFilter
);

// Uncompleted todos for the user
const uncompletedTodosForUser = todosForUser.filter(
  (todo) => todo.completed === false
);

console.log(todosForUser);
console.log(uncompletedTodosForUser);
