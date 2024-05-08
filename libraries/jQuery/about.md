# What is jQuery?

One of the most widely used JavaScript libraries in the world.
Q: What are the other most widely used JavaScript libraries?
Q: What are the specific use cases for each library? Advantages & Disadvantages?

Q: What is jQuery specifically good for?
A: All major browsers handle JavaScript slightly diferently; jQuery *simplifies* the process of writing *client-side* JavaScript, and ensures that your code works the same way in *all browsers*.

## How to use jQuery?

### select

1. add a `script` element at the *top* of your page. Your browser will run any JS inside a `script` element, including jQuery.
2. Add inside `script`:

  ```js
  $(document).ready(function() {});
  ```

  The code you put inside the function will run as soon as your browser has loaded your page.
  This is crucial because without `document ready function`, your code may run before your HTML is rendered, which could cause bugs.
3. All jQuery functions start with a `$` (referred to as a dollar sign operator or as bling). Try this:

  ```js
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
  });
  ```

  `${}` is a *selector.
  `button`, `.well`, `#target3` are the targeted element according to their HTML nature, where `button` is an element name, `.well` a class name, and `#target3` an id name. 
  Notice that you must surround the selected name with quotation marks.

  `.addClass()` is a jQuery function, which allows you to add classes to elements.
  `animated bounce`, `animated shake`, `animated fadeOut` come from a pre-provided CSS file.
  
### remove

### clone

### modifying different elements
