1. Declare DOM const variables to get the corresponding elements. 
2. `Fetch API` is a built-in JavaScript interface to make *network requests* to a *server*. It has a `fetch()` method you can use to make `GET`, `POST`, `PUT`, `PATCH` requests. 
  2.1. In this project, you'll make a `GET` request to a URL for a JSON file with information about authors on freeCodeCamp News. Syntax: 
  ```
  fetch("url-goes-here")
  ```
  *Don't forget the double quotations.
  Make a `GET` request to the given URL where author information is stored.
  * The `fetch()` method returns a `Promise`, which is a placeholder *object* that will either be fulfilled if your request is successful, or rejected if your request is unsuccessful. 
  * If the `Promise` is fulfilled, it resolves to a `Response` *object*, you can use the `.then()` method to *access* the `Response` *object*. 
  * You can pass in a callback in `.then()` to make it return the `Reponse` *object* the way you want. 
  * The data you get from a `GET` request is not usable at first (why?). You can use `.json()` method on the `Response` object to *parse* it into JSON. 
  * Now the `Response` object needs processing as *data*. So, we call `.then()` again to make the data of `Response` object show.
  
  2.2. `.catch()` is useful if your request is rejected. It works like catching errors.
  - chain it to the last `.then()`. Pass in a callback with `err` as the parameter, and log possible `err` using `console.error(`There was an error: ${}`)`. 
  - If you are done with fetching and parsing data from the designated source (JSON File), you can end with a semicolon now.   

**To Sum**
To get data from a JSON file, you need to: 
1. request getting data from the file.
2. If request is approved, you get a response object.
3. To get readable data, you need to parse the reponse object. 
4. In case request is rejected, you want to catch possible errors. 

**What NEXT**
We have the data now. But the data is not showing on the web page (UI). 

- to prepare loading data onto the web page, there are several points to heed. 
  1. Don't overcrowd the page in case there is a lot of data. So, you want to consider how to reasonably control the number of data to display on the web page. 
  2. To achieve Step 1, you can create `startingIndex`, `endingIndex`, and assign them the numeric values which would represent the number of author data (for this project) you deem reasonable for displaying on the webpage. Say, you want to display 8 authors at a time. You can then set `startingIndex` to `0`, and `endingIndex` to 8. 
  3. Now you have sorted problem of how many authors you want to display at once. You need to store the actual author data somewhere. Declaring an empty array to store them is a good place to start. `let authorDataArr = [];`.
  4. Now you have declared a mutable array to store author data. You need to actually *populate* the UI/webpage with the author data. You need to create a function `displayAuthors` which takes `authors` as its parameter. Concretely, you need to call the function inside the second `.then()` method. 
  5. What exactly should `displayAuthors` execute inside its body? Remember that you will call `displayAuthors` in `.then()`, and since there are many author-relation information stored in the data, you will need to process each one of those data. So, calling `.forEach()` on each `authors` is a good way to start. 
  6. But how should each `authors`'s information be processed/stored? You know in advance that each author in `authors` have `author`, `image`, `url`, `bio` as their properties. So, it is a convenient to destructure these items/properties together as the first parameter for the callback in `.forEach()`. Since you want an array to be returned from the function, you also index each author's information. So, use `index` as the second parameter for the callback.
  7. Now that the data from JSON is destructued, we can load these data one by one onto the webpage using `+=` and `innerHTML`. The relevant HTML element in this project is `authorContainer`.
  8. For this project, you are instructed to give a specific class name for the *div* element. See in `script.js` (line: ). Additionally, since each div contains the unique information of each author, its id should be unique. One way to make it unique is to assign `index` from `authorDataArr` to each div. 