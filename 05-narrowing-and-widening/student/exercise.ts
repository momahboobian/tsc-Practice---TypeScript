// Exercise 1: Basic Type Inference
let a: boolean = true;

let b = 42;

console.log(`a: ${a}, b: ${b}`);
/*
TypeScript can infer the type of `b` because when a value is assigned to a variable without an explicit type annotation,
TypeScript uses the value to infer the type. In this case, `42` is a number, so TypeScript infers the type of `b` as `number`.

For variable `a`, an explicit type annotation is provided as `boolean` to explicitly state the intended type of the variable.
This can be useful for readability, code clarity, and ensuring that the variable adheres to the intended type throughout
the codebase.

By using type inference, TypeScript allows for more concise code while still maintaining type safety. However, explicit type
annotations are useful in cases where the type might not be immediately clear from the context or when it's important to
document the intended type explicitly.
*/

// Exercise 2: Using Type Inference with Complex Objects
interface Book {
  title: string;
  author: {
    firstName: string;
    lastName: string;
  };
  publishedYear: number;
  genres: string[];
}

// Define the book object using the Book interface
let book: Book = {
  title: "To Kill a Mockingbird",
  author: {
    firstName: "Harper",
    lastName: "Lee",
  },
  publishedYear: 1960,
  genres: ["Fiction", "Drama"],
};

console.log(book);

// Exercise 3: Function Return Types
function multiply(numbers: number[]): number[] {
  return numbers.map((number) => number * 2);
}

const nums = [1, 2, 3, 4];
const multipliedNums = multiply(nums);

console.log(multipliedNums);

// Exercise 4: Discriminated Unions

interface SuccessResponse {
  status: "success";
  data: any;
}

interface ErrorResponse {
  status: "error";
  message: string;
}

// Create a type alias ApiResponse
type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse) {
  switch (response.status) {
    case "success":
      console.log("Success! Data:", response.data);
      break;
    case "error":
      console.error("Error! Message:", response.message);
      break;
    default:
      // Handle unexpected response types
      const _exhaustiveCheck: never = response;
      console.error("Unexpected response:", _exhaustiveCheck);
      break;
  }
}

// Test handleResponse function
const successResponse: ApiResponse = {
  status: "success",
  data: { message: "Data retrieved successfully" },
};

const errorResponse: ApiResponse = {
  status: "error",
  message: "Failed to retrieve data",
};

handleResponse(successResponse);
handleResponse(errorResponse);

// Exercise 5: Excess Property Checks

interface Car {
  make: string;
  model: string;
  year: number;
}

let car: Car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};

car.color = "blue";

console.log(car);

// Exercise 6: Type Guards

let value: unknown = "Hello TypeScript";

if (typeof value === "string") {
  console.log("Value is a string:", value);
}

if (typeof value === "number") {
  console.log("Value is a number:", value);
}
