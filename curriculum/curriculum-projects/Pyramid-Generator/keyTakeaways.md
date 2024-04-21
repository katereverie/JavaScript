## variable declaration
Rules: 
1. No spaces
2. No numbers at the beginning
3. End with a semicolon.

### const vs. let

## Data Types & Data Structures

### primitive data types - String
1. String is a primitive in JS, unlike in C.
2. Strings are *immutable*. Once created, they cannot be changed.

### primitive data types - Number

### undefined
"undefined" is a special data type that represents a value that does not have a definition yet.
1. "undefined" is a data type.
2. This data type represents a value. 
3. What does the value look like then?

## Data Structures & Data
1. We use data structures to manage/organize data. 

### Data Structures - Array 
1. an array is a non-primitive data type that holds a series of values
2. Non-primitive data types differ from primitive data types in that they can hold more complex data.
3. Primitive data types can only hold one value at a time.
4. Arrays are mutable. 

## Method
1. A method in JS is a *function* _associated_ with certain *values* or *objects*.
2. So, every unique object has their own methods. For example, array objects have their own methods, such as `.push()`, `.pop()`; console object has their own methods, such as `.log()`; string objects have their own methods, such as `.repeat()`.
3. So, arrays are a type of data structures, non-primitive data types, and *also* a type of object.
4. So, what are objects in JS? 
5. Crucial: Pay attention to what values a method _returns_! For example, `.pop()` returns the last value removed from an array, while `.pushed()` (without any argument) returns the new length of the array after adding a new value to the end of the array. So, `.pushed()` actually returns a number instead of a certain value in the array. 

## Loops

### for loop
Syntax: 
```
  for (iterator; condition; iteration) {
  logic;
}
```

### for ... of loop
Syntax: 
```
for (const value of iterable) {

}
```
A for ... of loop iterates over each item of an iterable object and *temporarily* assigns it to a variable. 
! Note that you can use *const* because the variable only exists for a single iteration, not during the entire loop.

## Function
A function is a block of code reusable throughout the whole application.
Syntax:
### regular functions
```
function name(parameter) {

}
```

### arrow functions
where parameter is a variable that represents a value that is passed into the function when it is used. Between the curly braces is the function body. 
1. All functions *return* a value.
2. In JS, if there is nothing to execute in the function body, calling the function returns the default value "undefined". Recall that "undefined" is also a value.
3. To return something else, you must use the keyword *return*.
4. If you have a value that is explictly writtin in your code, we call that value _Hard coded_. Hard coding a value into a function may make the function not as reusable as you'd like. Instead, we define paramters for the function. 
5. Parameters are special variables that are given a value when you call the function. They can be used in your function to dynamically change the result of the function's code.  
6. When you pass a *value* to a function call, e.g. functionName(value), that *value* is referred to as an *argument*. 
## Function scope:
1. __Scope__: Where a variable is declared determines where it can be used in your code. 
2. __Global Scope__: Variables that are declared outside of any "block" like a function or for loop are in the globle scope. Any function can access global variables. 
3. __Local/Block Scope__: Variables declared inside a function. If you try to access it *outside* of the function, you will get either `undefined` or an error.
4. Any statement after `return` will not be executed because `return` also stops the execution of your function code. 


