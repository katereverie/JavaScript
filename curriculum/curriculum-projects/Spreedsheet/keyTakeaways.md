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