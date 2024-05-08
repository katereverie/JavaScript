# What is SASS?

SASS stands for Syntactically Awesome Stylesheets.</br>
It is a *preprocessor scripting language* or specifically a *CSS preprocessor* that is interpreted or compiled into CSS. So, it is neither a library nor a framework in the traditional sense.
It is rather an *extension tool* that extends the functionality of CSS by adding features like *variables*, *nested rules*, and *mixins*, which help make stylesheets more maintainable and efficient to write.

## Use cases

### Store Data with SASS variables

Basic CSS does not use variables. Compare:
  
  CSS:

  ```css
   h1 {
      font-family: Arial, sans-serif;
      color: red;
    }
  ```
  
  SASS:

  ```scss
    $main-fonts: Arial, san-serif;
    $heading-colors: red;

    h1 {
      font-family: $main-fonts;
      color: $heading-colors;
    }
  ```

Variables become useful when a number of elements need to be of the same property. If that property needs changing, all we need to do is change the variable value.

### Nest CSS with SASS

This becomes useful when a large project needs managing because the CSS file will have many lines and rules.</br>
So, nesting helps organize your code by placing child style rules within respective parent elements. Compare:

  CSS:

  ```css
    article {
      height: 200px;
    }

    article p {
      color: white;
    }

    article ul {
      color: blue;
    }
  ```

  SASS:

  ```scss
    article {
      height: 200px;

      p {
        color: white;
      }

      ul {
        color: blue;
      }
    }
  ```

### mixin

It is a group of CSS declarations that can be reused throughout the style sheet.</br>
Its syntax is similar to functions. Compare:
  JavaScript function syntax
  
  Javascript:

  ```js
    const functionName(parameter) {
      console.log(parameter);
    }
  ```

  SCSS:

  ```scss
    @mixin box-shadow($x, $y, $blur, $c) {
      /* for example */
      -webkit-box-shadow: $x $y $blur $c;
      -moz-box-shadow: $x $y $blur $c;
      -ms-box-shadow: $x $y $blur $c;
      box-shadow: $x $y $blur $c;
    }

    div {
      @include box-shadow(0px, 0px, 4px, #fff);
    }
  ```

  A mixin is called with the `@include` directive.</br>
  Another example:
  
  SCSS:

  ```scss
    @mixin border-radius($radius) {
      -webkit-border-radius: $radius;
      -moz-border-radius: $radius;
      -ms-border-radius: $radius;
      border-radius: $radius;
    }


    #awesome {
      width: 150px;
      height: 150px;
      background-color: green;
      @include border-radius(15px);
    }
  ```

### Use `@if` and `@else` to add logic to your styles

The `@if` directive in SASS is useful to test for a specific case.</br>
It works just like `if` in JavaScript.

Syntax:

  SCSS:

  ```scss
    @mixin make-bold($bool) {
      @if $bool == true {
        font-weight: bold;
      }
    }

    @mixin text-effect($val) {
      @if $val == danger {
        color: red;
      }
      @else if $val == alert {
        color: yellow;
      }
      @else if $val == success {
        color: green;
      }
      @else {
        color: black;
      }
    }
  ```

### use `@for` to add style in a loop

Similar to `for` in JS.

Two ways to use `@for`:

1. "start *through* end": Inclues the last count.
2. "start *to* end": Excludes the last count.

Example:

```HTML
  <style type='text/scss'>
    @for $j from 1 to 6 {
      .text-#{$j} { font-size: 15px*$j};
    }


  </style>

  <p class="text-1">Hello</p>
  <p class="text-2">Hello</p>
  <p class="text-3">Hello</p>
  <p class="text-4">Hello</p>
  <p class="text-5">Hello</p>
```

### use `@each` to map over items in a list

We can also use `@each` to loop through each item in a list or map.</br>
In each iteration, the variable gets assigned to the current value from the list or map.

Syntax:

```HTML
  <style type='text/css'>

    /* loop through lists */
    @each #color in blue, red, green {
      .#{$color}-text {
        color: $color;
        background-color: $color;
      }
    }
    
    /* loop through maps */
    $colors: (color1: blue, color2: red, color3: green); 

    @each $key, $color in $colors {
      .#{$color}-text {color: $color;}
    }

  </style>
```

### use `@while` to apply styles until a condition is met

Syntax:

```HTML
  <style type="text/css">
    $x: 1;
    @while $x < 13 {
      .col-#{$x} {
        width: 100%/12 * $x
      }
      $x: $x + 1;
    }
  </style>
```

### split styles into smaller chuncks with Partials

*Partials* in SASS are separate files that hold segments of CSS code.</br>
They are imported and used in other SASS files.</br>
This is a great way to group similar code into a *module* to keep it organized.

1. Names for partials start with `_`, which tells SASS it is a small segment of CSS and not to convert it into a CSS file.
2. SASS files end with `.scss` extension.
3. To bring the code in the partial into another SASS file, use `@import` directive.

For example, if all your mixins are saved in a partial named `_mixins.scss`, and they are needed in the `main.css`, do this:

```css
  
  @import 'mixins'

```

Note that `_` is not needed in the `import` statement.</br>
Once a partial is imported in a file, all variables, mixins, and other code are available to use.

### extend one set of CSS styles to another element

SASS has a feature called `extend` that makes it easy to borrow the CSS rules from one element and build upon them in another.

Example:

CSS:

```css
  .panel {
    background-color: red;
    height: 70px;
    border: 2px solid green;
  }

  .big-panel {
    @extend .panel;
    width: 150px;
    font-size: 2em;
  }
```
