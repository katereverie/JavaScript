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

### These are steps related to other steps. So, they are *ad hoc*

- It's a good idea to see the data being loaded on to the page as we go. So, call `showLatestPosts(data)` (from Step 3) inside the `try` block.

## 3. Load *data* onto the page

If nothing goes wrong in step 2, we move on to step 3, which is loading the data onto the webpage.

- We can create an arrow function `showLatesPosts`, which takes `data` as a single parameter.
- Inside the body, use *destructuring* to get `topic_list` and `users` properties from `data`.
- Since `topic_list` contains a `topics` array which contains the latest topics posted on the forum, we need to destructure the array from `topic_list`.
- Now we have the data of the latest topics posted on the forum, we get to load them on to the page. Since there are a lot of data in there, we can call `map()` on `topics`. For the callback, we use an empty arrow function, which takes `item` as a parameter. The returned result should be assigned to the corresponding HTML element. This assumes that we are familiar with the structure of `topics` array. Take a look, we will see its many properties. We need to destructure these properties inside the callback for `map()`.
- Now we have all properties we want to display, we can build out a `table` element, into which we load these properties. Start with a return statement with ``<tr></tr>`` which will have 5 `<td></td>` inside.
- To avoid having commas on display, we join each item with an empty string.
- For the 1st `<td>`, put a `<p class="post-title">${title}</p>` inside it. We will see the title data displayed.
- For the 3rd `<td>`, put `${posts_count - 1}` in there. We will see under "Replies" the number of replies to this topic.
- For the 4th `<td>`, put `${views}` in there to display the number of views under "Views".
- For the 5th `<td>`, we pass the elapsed time since the last reply. Before we put the relevant data in there, we need to process it first.
  - Create a function `timeAgo` with a parameter `time`;
  - Inside the body, create `const currentTime = new Date();`
  - Below `currentTime`, create `const lastPost = new Date(time);`
  - Calculate the time difference: `const timeDifference = currentTime - lastPost;`
  - Create a const var to store the number of milliseconds in a minute: `const msPerMinute = 1000 * 60;`
  - Get number of minutes ago the post was created: `const minutesAgo = Math.floor(timeDifference / msPerMinute);`
  - Get number of hours agao the post was created: `const hoursAgo = Math.floor(minutesAgo / 60);`
  - Get number of days ago the post was created: `const daysAgo = Math.floor(hoursAgo / 24);`

 Now we have operations to take care of each duration of elapsed time, we need to introduce `if` statements to confirm which duration to display. This code should be self-explanatory.

  ```
    If (minutesAgo < 60) {
      return `${minutesAgo}m ago`;
    }
  ```

```
if (hoursAgo < 24) {
  return `${hoursAgo}h ago`;
}
```

