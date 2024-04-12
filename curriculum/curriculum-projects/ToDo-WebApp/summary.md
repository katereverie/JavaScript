Lessons, Misunderstanding, etc.
1. html dialog element - showModal()
2. preventDefault() stops the browser from refreshing the page after an event happens
3. The findIndex() array method finds and returns the index of the first element in an array that meets the criteria specified by a provided testing function. If no such element is found, the method returns -1. Useful for updating data if already existent, and add data if not existent.
4. Date.now() returns the number of miliseconds elapsed since Jan 1, 1970 00:00:00 UTC(Coordinated Universal Time); giving an id a real time stamp can make the id more unique than without the time stamp. 
5. onclick="functionVariable(this)" refers to the element to which the onclick attribute is added. Keyword "this".
6. .parentElement accesses the parent element of a HTML element.
7. call splice() on an array to modify it. This method takes up to 3 arguments. The first arg is mandatory and targets the starting index to be modified; the second arg specifies the number of items to be modified; the third arg is an optinal replacement element.
8. localStorage offers setItem(), getItem(), removeItem() and clear() methods. Syntax: localStorage.setItem("key", value); 
9. to see the locally stored objects, wrap the data in JSON.stringify(), because everything you save in localStorage needs to be in string format. To view the data you restored in localStorage, you must retrieve it using localStorage.getItem(), pass in the key of the data. To view it in its original form BEFORE saving, use JSON.parse(); 
10. use localStorage.removeItem(itemKey) to remove a specific item or use localStorage.clear() to remove all items in the local storage.
11. About localStorage: storing user-created-data locally makes sure that when the page reloads, users can still access changes they've made before so that users won't lose their own data.