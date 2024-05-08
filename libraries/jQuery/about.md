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

  The code you put inside the function will run as soon as your browser has loaded your page.</br>
  This is crucial because without `document ready function`, your code may run before your HTML is rendered, which could cause bugs.
3. All jQuery functions start with a `$` (referred to as a dollar sign operator or as bling). Try this:

  ```js
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
  });
  ```

  `${}` is a *selector*.</br>
  `button`, `.well`, `#target3` are the targeted element according to their HTML nature, where `button` is an element name, `.well` a class name, and `#target3` an id name.</br>
  Notice that you must surround the selected name with quotation marks.</br>

  `.addClass()` is a jQuery function, which allows you to add classes to elements.
  `animated bounce`, `animated shake`, `animated fadeOut` come from a pre-provided CSS file.
4. Select the parent element by selecting its child element using `.parent()`.

  ```js
  $("#left-well").parent().css("background-color", "blue");
  ```

  `$("#left-well").parent()` selects the parent element of the element IDed `#left-well`.
5. Select the children element of a parent element using `.children()`. The syntax is similar.
6. Select/target the right element using `target:nth-child(n)`:

  ```js
  $(".target:nth-child(3)").addClass("animated bounce");
  ```

  This targets the 3rd child with the class name "target". So, if there are 5 elements with the class name "target", the 3rd will be selected.
7. Target elements based on their positions using `:odd` or `:even` selectors:

  ```js

  ```js

### remove

1. Similar to `.addClass()`, you can use `removeClass()` to rid an element of the selected class; the syntax is the same.
2. Use `remove()` to remove an HTML element entirely.

### clone/copy

1. Use `.clone()` to make a copy of an HTML element.

    ```js
    $("#target2").clone().appendTo("#right-well");
    ```

  Here we chained one jQuery function to another; this is called *function chaining*. It makes things easier/convenient.

### modifying different elements

1. Use `.css()` to modify the CSS proprties of HTML element. The syntax, though, is different from CSS. Compare:

    CSS:

    ```css
    #target1 {
      color: red;
    }
    ```

    JavaScript using jQuery:

    ```js
    $("#target1").css("color, red");
    ```

2. Use `.prop()` to change non-CSS properties of HTML elements:

    ```js
    $("button").prop("disabled", true);
    ```

3. Use `.html()` to add HTML tags and text within an element; any content within that element will be *replaced* with the added ones:

    ```js
    $("h3").html("<em>jQuery Playground</em>");
    ```

4. Use `.text()` to add *content* in an element instead of replacing the existing elements within the element.

5. Use `.appendTo()` to select HTML elements and append them to another element:

    ```js
    $("#target4").appendTo("#left-well");
    ```

## Summary

1. jQuery is *zero*-indexed. This is relevant for using `:odd` or `:even` because `:odd` will be targeting even indexes while `:even` will be targeting odd indexes.
2. Don't forget quotes when targeting an element.
