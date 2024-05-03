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
  * 
