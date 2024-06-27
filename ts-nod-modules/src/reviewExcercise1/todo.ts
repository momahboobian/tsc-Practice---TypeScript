import data from "./todos.json";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean | "true" | "false" | "archived" | "pending" | "deleted";
}

const typedTodo: Todo[] = data.todos as Todo[];

let todo1: Todo = typedTodo[0];

// sort by User id
const sortedById = typedTodo.sort((a, b) => a.userId - b.userId);
// console.log(sortedById);

// filter
const user1Todos = typedTodo.filter((todo) => todo.userId === 1);
// console.log("Todos for userUd 1: ", user1Todos);

// Filter uncompleted
const uncompletedUser1Todos = user1Todos.filter((todo) => !todo.completed);
console.log("Uncompleted todos by userId 1: ", uncompletedUser1Todos);
