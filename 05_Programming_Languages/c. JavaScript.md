# Javascript

## Table of Content

1. Important concepts related to variables
    1. <a href="#var-let-const">var, let, const variable declaration</a><br>
    2. <a href="#var-let-const">comparing variables with == vs ===</a><br>
    3. <a href="#var-let-const">value & reference variable assignment</a><br>
    4. <a href="#var-let-const">all mutable and immutable data types</a><br>
    5. <a href="#var-let-const">difference b/w shallow vs deep copy</a><br>
2. Various array & objects methods/propertiess
    1. <a href="#var-let-const">array methods - forEach, map, filter, reduce, find, findIndex, indexOf, push, pop, shift, unshift, splice, slice, sort</a><br>
    2. <a href="#var-let-const">object methods - \__proto__, prototype</a><br>
    3. <a href="#var-let-const">destructuring, spread pperator and rest syntaxt</a><br>
3. Various types of functions in javascript
    1. <a href="#var-let-const">normal, arrow, IIFE</a><br>
    2. <a href="#var-let-const">decorator, currying, generator</a><br>
    3. <a href="#var-let-const">pure, pipe, compose, debounce</a><br>
4. Asynchronous javascript
    1. <a href="#var-let-const">callback, setTimeout</a><br>
    2. <a href="#var-let-const">promises, async-await with try-catch</a><br>
5. Working of javascript under the hood
    1. <a href="#var-let-const">Javascript, Execution Context, Hoisting, Closures</a><br>
    2. <a href="#var-let-const">WebApis, Event Loop, Callback Queue</a><br>

## 1. Difference between var, let and const

Difference is based on 3 parameters :-

1. Scope
2. Redeclaration & Reassignment
3. Hoisting

Scope is of 3 types - global, local and block

1. Global scope is when variables are declared outside of any function or block
2. Local scope is when variables are declared directly inside a funcction
3. Block scope is when variables are declared directly inside a block such as if, for, switch etc

Hosting is when javascript goes through the compilation phase, it pulls up all the variables and functions declared to the top of their scope.

<table>
  <tr>
    <th>Variable</th>
    <th>Scope</th>
    <th>Redeclaration & Reassignment</th>
    <th>Hoisting</th>
  </tr>
  <tr>
    <td>var</td>
    <td>global,local</td>
    <td>yes & yes</td>
    <td>yes, with default value undefined</td>
  </tr>
  <tr>
    <td>let</td>
    <td>global,local,block</td>
    <td>no & yes</td>
    <td>yes, without default value</td>
  </tr>
  <tr>
    <td>const</td>
    <td>global,local,block</td>
    <td>no & no</td>
    <td>yes, without default value</td>
  </tr>
</table>

## 2. Equality (==) vs Identity (===) Operator, Value vs Reference Assignment, Mutable vs Immutable Data, Shallow vs Deep Copy

- Javascript has 6 primitive data types - number, boolean, string, bigint, null and undefined
- Javascript has 2 structural data types - objects (object, array, map, set, date, weakmap) and functions (they all point to memory location where actual data is stored)

Primitive data types are assigned with value but structural data types are assigned through reference.
Eg.

```js
let a = 5;
let b = a; // a & b are different variable & changing b won't change a

let a = [1, 2, 3];
let b = a; // a & b are pointing to same location in memory & so changing b will change a
let b = [...a]; // spread operator create a new array so changing b won't a
```

## 3. Closures in Javascript

- Functions in JavaScript form closures.
- A closure is the combination of a function and the lexical environment within which that function was declared.
- This environment consists of any local variables that were in-scope at the time the closure was created.

```js
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}
const myFunc = makeFunc();
myFunc(); // myFunc has access to local variables that were available during its creations
```

## 4. Destructuring, Spread Operator and Rest syntax

- We can pull elements out of arrays and objects using these operators
- We can use spread operator to pass any number of parameters to functions

```js
const obj = {name: "Hritik", age: 22};
const {name, age} = obj; // destructuring
const obj2 = {...obj}; // spread operator

function fun(...args) {
  // rest syntax
  console.log(args);
}
fun(1, 2, 3, 3);
```

## 5. Array methods - forEach, map, filter, reduce, find, findIndex, indexOf, push, pop, shift, unshift, splice, slice, sort

```js
const arr = [1, 2, 3, 4, 5, 6];

// forEach -> iterate on each element
arr.forEach((item, index) => console.log(item, index));

// map -> modify array elements and returns modified elements in a new array
const mapArr = arr.map((item) => item * 2); // [2,4,6,8,10,12]

// filter -> returns the list of elements which satisfy a condition
const filterArr = arr.filter((item) => item % 2 == 0); // [2,4,6]

// reduce -> returns a single value which is result of some operation
const reduceArr = arr.reduce((accumulator, item) => accumulator + item, 0); // 21

// find ->  returns the first element that matches a condition
const findVal = arr.find((item) => item > 3); // 4

// findIndex -> returns the index of first element that matches a condition
const findIndexVal = arr.findIndex((item) => item > 3); // 3

// indexOf -> identical to findIndex but it searchs for a specific value rather than a condition
const indexOfVal = arr.indexOf(4); // 3

// push -> push a value at end of array
arr.push(7); // [1,2,3,4,5,6,7]

// pop -> pop last value in array
arr.pop(); // [1,2,3,4,5]

// shift -> pop first value in array
arr.shift(); // [2,3,4,5,6]

// unshift -> push one or more values in front of array
arr.unshift(0); // [0,1,2,3,4,5,6]

// splice -> used to remove some elements and add some new elements starting from an index
arr.splice(1, 2, 6, 7); // starting from index-1, delete 2 elements and add elements 6 & 7 => [1,6,7,4,5,6]

// slice -> used to take out a subarray in arr
const sliceArr = arr.slice(2, 5); // return subarray [2,5) => [3,4,5]

// sort -> sort arr based on some sorter function
const sorter = (a, b) => b - a; // if value returned is <=0 the order remain same i.e. a then b otherwise the order is reversed
arr.sort(sorter); // [6,5,4,3,2,1]
```

## 6. Generator Functions

- Generator functions return different values every time they are called. See eg. below.

```js
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // undefined
```

## 7. Equality Operator (==) vs Identity Operator (===)

- Equality operator do type conversion before checking values.
- Identity operator don't do any type conversion before checking values.

```js
console.log(0 == "0"); // true
console.log(0 === "0"); // false
```

## 8. Object Comparison

- To deep compare 2 different objects, we can't use == or ===.
- If objects contain only contain key-value pairs in which value is a primitive data type, then we can use shallow equality.
- If objects contain other referential data type such as array or object, then we have to use deep equality.

```js
// Shallow Equality
function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) return false;
  for (let key of keys1) {
    if (object1[key] !== object2[key]) return false;
  }
  return true;
}

// Deep Equality
function isObject(object) {
  return object != null && typeof object === "object";
}
function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) return false;
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    )
      return false;
  }
  return true;
}
```

## 9. Async JS - promises, async-await, try-catch

- Asynchronous code is to do something that can be done in background withought stopping the execution of program

```js
// Promises
const greeting = new Promise((resolve, reject) => {
  // do some stuff
  resolve(result); // if successful
  reject("failure reason"); // if failed
});

greeting()
  .then((result) => console.log(result)) // when successful
  .catch((error) => console.log(error)); // when failed

// Async Await with Try Catch
const runGreeting = async () => {
  try {
    const result = await greeting();
    console.log(result);
  } catch(error) {
    console.log(error)
  }
};
runGreeting();
```

## 10. How javascript work and how it runs asynchronous code?

<table>
  <tr>
    <th>Topic</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Javascript</td>
    <td>
      1. Javascript is a synchronous, single-threaded programming language. <br>
      2. It can only run one code at a time and can not move to next code without completing current code.
    </td>
  </tr>
  <tr>
    <td>Environment</td>
    <td>
      1. It needs an environment (V8 engine) to run in which it has access to - <br>
      2. heap memory (execution context) and stack memory (execution stack)
    </td>
  </tr>
  <tr>
    <td>Hoisting & Execution</td>
    <td>
      1. Javascript runs in 2 phases - hoisting phase and execution phase. <br>
      2. In hoisting phase, it parse the code and find any declaration of vars and functions and put it into a global/local context while In execution phase, it runs the code line by line
    </td>
  </tr>
  <tr>
    <td>Closures</td>
    <td>
      1. Each function when invoked creates a new execution context which has an implicit, permanent link to its lexical environment even after the parent function is closed. This is called closures. <br>
      2. So, even if a function is a stored in a variable and run in future, it will have access to variables in its lexical environment with values which were present when function was created.
    </td>
  </tr>
  <tr>
    <td>WebApis, Event Loop & Callback Queue</td>
    <td>
      1. Javascript doesn't have any implementation of async codes like setTimeout, network calls etc. <br>
      2. Instead, it sends all the async codes to webApis (in browser) or C++ apis (in node.js) to run them which runs them in a completely different thread. <br>
      3. When the apis finish their job, they push the result of the code execution in a queue called callback queue.<br>
      4. Now, to bring those result back into javascript environment, we have a piece of code called Event Loop which constantly checks for any thing inside the callback queue and if there is anything, it pops from it and push into execution stack as soon as it gets free.
    </td>
  </tr>
  <tr>
    <td>Blocking UI Thread</td>
    <td>
      1. When we write a javascript code that is very slow, then it blocks the rendering of UI becuase browser can not re-render the UI until the js code is finished. <br>
      2. In these situations, we must write a async code, so that, the event loop can optimally decide whether to re-render UI or pop an async code result from callback queue.
    </td>
  </tr>
</table>

## 11. \_\_proto\_\_ and prototype

### \_\_proto\_\_

- It is a way to inherit properties from an object in JavaScript.
- It exposes the [[Prototype]] of the object through which it is accessed.
- Use Object.setPrototypeOf and Object.getPrototypeOf instead of \_\_proto\_\_.

```js
// using in classes
// Class is transpiled to functions & they have prototype object
class A {var x = 1;}
/*
  function A(){}
  A.prototype.x = 1;
*/
class B {}
/*
  function B(){}
*/
const a = new A()
const b = new B()
b.__proto__ = a;

// Using in objects
const a = {name: 'hritik'}
const b = {age: 22, __proto__: a}
console.log(b.age, b.name, a.name) // 22 "hritik"
```

## 12. Functions - Decorators, Currying, Pure, Pipe, Compose, IIFE, Debounce

```js
// Decorators - They wrap main function inside another function which adds extra utility to main function
// Decorating a sum function with a callCounter & typeChecker
let sum = (...args) => [...args].reduce((sum, val) => sum + val, 0);
const callCounter = (fn) => {
  let count = 0;
  return (...args) => {
    console.log(`Function called ${(count += 1)} times.`);
    return fn(...args);
  };
};
const typeChecker = (fn) => {
  return (...args) => {
    const isValid = [..args].every(item => Number.isInteger(item))
    if(!isValid) throw new Error("Not valid parameter");
    return fn(...args);
  };
};
sum = callCounter(sum)
sum = typeChecker(sum)
console.log(sum(1, 2, 3)); // prints Function called 1 times. 6
console.log(sum(1, 7, 3)); // prints Function called 2 times. 11
console.log(sum(1, 7, "hello")); // prints error -> Not valid parameter


// Currying - It takes a function that recieves more than one parameter and breaks into a series of unary (single parameter) functions
// Creating a sandwich
const buildSandwich = (ing1) => (ing2) => (ing3) => `${ing1} ${ing2} ${ing3}`;
let mySandwich = buildSandwich("bread")("patty")("cheese");
console.log(mySandwich); // prints bread patty cheese
const pavSandwich = buildSandwich("pav") // now we can use pavSandwich with other 2 ingredients
mySandwich = pavSandwich("patty")("cheese")
console.log(mySandwich) // prints pav patty cheese

// Convert normal function with fixed no. of parameters to curried function 
const sum = (a, b, c) => a+b+c;
const curry = (fn) => {
  return curried = (...args) => {
    if(fn.length == args.length) return fn(...args)
    return curried.bind(null, ...args)
  }
}
const curriedSum = curry(sum)
console.log(curriedSum(1)(2)(3)) // prints 6
```
