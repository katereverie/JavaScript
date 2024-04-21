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