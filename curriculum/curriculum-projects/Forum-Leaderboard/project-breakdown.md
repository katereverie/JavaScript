# Project Breakdowns

This documents the thought process and logic behind each step of the project, detailing necessary functions and variables to achieve a certain desired result.

This ignores explanation of syntax of certain operations.

Since the names for vars, functions, etc. are provided for in this project, we ignore mentioning them if it does not create confusion. In non-curriculum projects, explicitly stating names should, however, not be omitted.

## 1. Prepare DOM and URLs

- declare vars to store URLs
- declare vars to get HTML elements

## 2. Perform *asynchronous* operation

- use `async` keyword followed by an arrow function to create an asynchronous function, which returns a `promise` object; this is necessary because we want to populate the forum leaderboard with data. To get data, we need to request the desired data from an API. This is called an *asynchronous* operation. Basically, it means that tasks execute *independently* of the main program flow.
- Inside the asynchronous function, use `try ... catch` to handle potential errors.
- Inside the `try` block, declare a const var `res`, assign it `fetch(forumLeader)` using `await` keyword. This waits fro a `promise` to resolve and return the result.
- Once the request has been accepted, it returns a `promise` object, which will need to be parsed into a `JSON object`, using `await res.json()`. Create a const var `data` to store the `JSON object`. Add a log statement and call the function to check the parsed data in the console, in case something is off somewhere.
- The `catch` block should handle errors. Add a log statement, pass in the parsed data.

## 3. Load *data* onto the page

If nothing goes wrong in step 2, we move on to step 3, which is loading the data onto the webpage.

- We can create an arrow function `showLatesPosts`, which takes `data` as a single parameter.
- Inside the body, 
