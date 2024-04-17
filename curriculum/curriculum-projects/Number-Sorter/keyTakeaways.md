### buttons associated with form element
These buttons submit by default. It should be avoided to prevent accidental submission from users. Call `.preventDefault()` on a button can prevent this behavior.

### document.getElementsByClassName("className")
returns an array-like object. Since it is array-like, it is not an array. So, it must be converted into an array to call array methods on it for sorting purposes. Use "..." (the spread operator) to achieve array conversion. Like this:
```
[...arrayLikeVariable]
```
```
[...document.getElementsByClassName("value-dropdowns")]
```
### arrayVariable.map()
Can be used to convert each element in an array to a designed type. For example:
```
const inputValues = [...document.getElementsByClassName("value-dropdowns")].map((dropdown => Number(dropdown.value)));
```
In this example, the value of each element (`dropdown`) in the array (`[...document.getElementsByClassName("value-dropdowns")]`) will be converted to a number, and assigned to the variable `inputValues`.

### fallback value 

When to use fallback values? 
When you are writing an algorithm that won't immediately have a return value. 
A fallback value is useful, so that the algorithm will always return the fallback value, even if no argument is passed in.

Some examples: 
```
Example 1: 

const myFunction = (string = "") => {

}

Example 2: 

const myFunction = (array = []) => {

}

```

### bubble sort
Core mechanism of a bubble sort: 
1. compare elements within an array; 
2. compares (n-1)(n) or (n) times where n is the number of elements in an array. (?)

### selection sort
Basic idea: find the smallest value in an array, and swaps it with the *first* value in the array. Then find the next smallest, and swaps it with the *second* value in the array. 
Crucial factors of a selection sort:
1. index of the smallest value in an array; 
Implementation: use two for loops (outer and inner); compare the outer with the inner.
2. compares 2n times where n is the number of elements in an array. 