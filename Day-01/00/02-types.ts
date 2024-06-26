// 7 Primitive
// Number, string, boolean, undefined, null, BigInt, Symbol

// let age: number = 30;
// let price: number = 99.99;

// let name: string = "Alice";
// let greeting: string = `Hello, ${name}!`;

// let isAvailable: boolean = true;
// let hasPermission: boolean = false;

// let uniqueKey: symbol = Symbol("key");

// let emptyValue: null = null;

// let notAssigned: undefined;

// let bigNumber: bigint = 9007199254740991n;
// let anotherBigNumber: bigint = BigInt(9007199254740991);

// Don't type too much
let names = "Kevin";
let newName: string = names;
newName = "Felicity";
let newId = 34798;

let age: number | string = 101;

{
  // any, void, unknown, never
  let names: any = "Kevin";
  names = true;

  //   function log(): void {
  function log() {
    console.log("Hello!");
    return 1;
  }

  function doSomethingWIthAge(age: unknown) {
    age;
    if (typeof age === "string") {
      age;
    }
  }

  function example(x: string | number): boolean {
    if (typeof x === "string") {
      return true;
    } else if (typeof x === "number") {
      return false;
    }
    const exhaustiveCheck: never = x;
    return false;
  }
}

{
  enum STATUS_CODE {
    "OK" = 200,
    "NOT_FOUND" = 404,
    "UNAUTGIRIZED" = 403,
  }
  STATUS_CODE.OK;

  const status = 200;
  if (status === STATUS_CODE.OK) {
    console.log("It worked!");
  }
}
