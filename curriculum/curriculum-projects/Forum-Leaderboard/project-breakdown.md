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
- For the 1st `<td>`, put a `<p class="post-title">${title}</p>` inside it. We will see the title data displayed. (This element will be switched later)
- For the 2nd `<td>`, we will put a function there to display user avatars. More on that later.
- For the 3rd `<td>`, put `${posts_count - 1}` in there. We will see under "Replies" the number of replies to this topic.
- For the 4th `<td>`, put `${viewCount(views)}` in there to display the number of views under "Views". (The function is provided below at line 67 - 70)
- For the 5th `<td>`, we pass the elapsed time since the last reply. Before we put the relevant data in there, we need to process it first.
  - Create a function `timeAgo` with a parameter `time`;
  - Inside the body, create `const currentTime = new Date();`
  - Below `currentTime`, create `const lastPost = new Date(time);`
  - Calculate the time difference: `const timeDifference = currentTime - lastPost;`
  - Create a const var to store the number of milliseconds in a minute: `const msPerMinute = 1000 * 60;`
  - Get number of minutes ago the post was created: `const minutesAgo = Math.floor(timeDifference / msPerMinute);`
  - Get number of hours agao the post was created: `const hoursAgo = Math.floor(minutesAgo / 60);`
  - Get number of days ago the post was created: `const daysAgo = Math.floor(hoursAgo / 24);`

### Now we have operations to take care of each duration of elapsed time, we need to introduce `if` statements to confirm which duration to display. This code should be self-explanatory

```JS
  if (minutesAgo < 60) {
    return `${minutesAgo}m ago`;
  }

  if (hoursAgo < 24) {
    return `${hoursAgo}h ago`;
  }

  return `${daysAgo}d ago`;
```

- For the 5th (last) `<td>`, call `timeAgo` function and pass in `bumped_at`.

### We also want better readability

- We need a function to convert view counts to a more readable format, which also saves us space where possible, e.g. if the view count is 1000, we display "1k" instead of "1000", which is 2 characaters longer than "1k".
  - Create `viewCount` with `views` as its parameter.
  - Inside the body, create a const var to store view count in the unit of thousands, and add an `if` statement to return the thousand format if view counts are equal to or exceed 1000. If not, simply return `views` as is.
  - Now refer back to adding `views` or `thousands` to the 4th `<td>` element.

### Each of the forum topics can be categorized. So, we need to build out a category object which holds all of the forum categories and `classNames` for styling

- Start by creating a const `allCategories`, assign it an empty object. Since the data structure has been provided for you, simply refer back to it at line 8.
- Now we have the data of categories, we need to determine which topic belongs to which category.
  - Create a function `forumCategory` with `id` as its parameter to retrieve the category name from `allCategories` object.
  - Inside the body, declare a mutable object var `selectedCategory` to store the category name and class name for each category.
  - Add an `if` statement which checks whether `allCategories` has the property of `id`. Refer back to the data structure of `allCategories`. If `true`, destructure `className` and `category` from `allCategories[id]`. Assign the destructured properties to `selectedCategory.className` and `selectedCategory.category` respectively. `Else`, assign string `"general"` and `"General"` to `selectedCategory.className` and `selectedCategory.category` respectively; and assign 1 to `selectedCategory.id`.
- Every category has a URL that points to the category on the forum.
  - Create:
  ```const url = `${forumCategoryUrl}${selectedCategory.className}/${id}`;```
  - Create:
  ```const linkText = selectedCategory.category.value;```
  This will display the name of the category in the anchor element.
  - Create:
  ```const linkClass = `category ${selectedCategory.className}`;```
  - return:
  ```return `<a href="${url}" class="${linkClass}" target="_blank">${linkText}</a>`;```
  - Now refer back to the 1st `<td>`, add: `${forumCategory(category_id)}` below `<p>`. Now we can see the category displayed.

### We also want topic participant avaters to display

- Create an arrow function `avatars` with `posters` and `users` as its two parameters.
- we want to `map` through `posters` with `poster` as the parameter for the map callback to find the correct user using `.find()` with a callback which has `user` as its parameter. Inside the find callback, return implicitly `user.id` which is strictly equal to `poster.user_id`.
- If `user` exists, that is, `user` does not have a falsy value, assign `user.avatar_template.replace(/size/, 30)` to `const avatar`.
- Further, assign `avatar.startsWith("/user_avatar/") ? avatarUrl.concat(avatar) : avatar` to `const userAvatarUrl`.
- Return at the end of the `if` statement: a template literal with `<img src="${userAvatarUrl}" alt="${user.name}"`.
- At the end of the `map`, join the return result with an empty string.
- Now we all need is a function to display the avatars.
- Add `<div class="avatar-container"></div>` to the 2nd `<td>` and call `${avatars(posters, users)}` in there. Now we should see the avatars displayed.

### We want to be directed to the actual post when clicking on a topic

- Switch `<p>` element with `<a>` inside the 1st `<td>`.
- add `target="_blank"` the anchor element so that when clicked on, the browser opens a new tab; add `href="${forumTopicUrl}${slug}/${id}"` to it as well.

<span style="font-size: larger">Now we've officially completed the project.</span>
