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
var names = "Kevin";
var newName = names;
newName = "Felicity";
var newId = 34798;
var age = 101;
{
    // any, void, unknown, never
    var names_1 = "Kevin";
    names_1 = true;
    //   function log(): void {
    function log() {
        console.log("Hello!");
        return 1;
    }
    function doSomethingWIthAge(age) {
        age;
        if (typeof age === "string") {
            age;
        }
    }
    function example(x) {
        if (typeof x === "string") {
            return true;
        }
        else if (typeof x === "number") {
            return false;
        }
        var exhaustiveCheck = x;
        return false;
    }
}
{
    var STATUS_CODE = void 0;
    (function (STATUS_CODE) {
        STATUS_CODE[STATUS_CODE["OK"] = 200] = "OK";
        STATUS_CODE[STATUS_CODE["NOT_FOUND"] = 404] = "NOT_FOUND";
        STATUS_CODE[STATUS_CODE["UNAUTGIRIZED"] = 403] = "UNAUTGIRIZED";
    })(STATUS_CODE || (STATUS_CODE = {}));
    STATUS_CODE.OK;
    var status_1 = 200;
    if (status_1 === STATUS_CODE.OK) {
        console.log("It worked!");
    }
}
