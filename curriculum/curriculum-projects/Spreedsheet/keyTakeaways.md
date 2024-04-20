### window.onload
???

### nested function
```
const outer = () => {
  const inner = () => {

  };
};
```

### document.createElement();

### Array(), map(), fill(), range()

`range()` returns an array. 

### decimal index value 
if you enter a decimal value as an index of an array, the deciaml value will be *rounded down*. 
e.g. If you enter 2.9, it will be rounded down to 2. 
So, when calculating the median of an array, since you must determine whether a sorted array length is even or odd in order to get the middle value, this factor must be considered. If the array length is odd, round up the middle value (middle = array.length / 2 - 1). 
e.g. if array X has a length of 9, the middle index will be 3.5 (9/2 - 1), which will be rounded down to 3. The middle index of an array which has a length 9 should be 4. So, remember to use Math.ceil() to round up the calculation of the middle index. 
If an array length is odd, the median will be the average of the two middle numbers. What are their indices? 
Take an array with a length of 10 for example. The two middle numbers would be at index 4 and 5. So, the middle calculation returns 10/2 - 1 = 4. So the median will be the average of number at index 4 and number at index (4 + 1).   

### .includes()

### the concept of currying 
is the concept of returning a function within a function. This approach allows you to create a variable that holds a function to be called later, but with a reference to the parameters of the outer function call. 
A function with an inner function can access all variables declared at their creation. This is called *closure*. 

### calling a function & using a function *reference*
calling a function: functionName();
using a function *reference: functionName;
Calling a function requires adding parentheses to the end of a function which is *referenced* by its declared *name*. 
So, a function reference is just the name of the function without parentheses. Calling a function requires the parentheses. 

### .map(callBackFunction)
the *callBackFunction* can either be declared within the parentheses of the `map` method, or declared outside of the `map` method.
If the callback is declared outside the parentheses, only pass in the *function reference* to the `map` method.
But if you pass in only the *function reference*, you will get a return result of function references instead of the values you are trying to get. Therefore, you still must call the function. How to call the function? Use *function reference* + parentheses, in which you pass parameter(s).

### prefixing an unused parameter with an underscore
For example:
```
function(_parUnused, par1, par2, ...) 
```
Example 2: 
```
function(, par1, par2, ...)
```
It is better practice to use example 1 because it is more readable. 

### some(), every()

### again, the spread prefix "..."
Using the spread syntax (...) before new Set(array) is called "spreading" the elements of the array into the Set constructor. Without the spread syntax, new Set(array) would treat the entire array object as a single element, adding the array itself as an element of the Set, rather than adding each individual element of the array.