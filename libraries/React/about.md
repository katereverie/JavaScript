# What is React? What is JSX?

Quick Facts about React:

1. a popular JS library for building reusable, component-driven (组件驱动) UIs for web pages or applications.
2. combines HTML with JavaScript functionality into its own markup language called `JSX`. React also makes it easy to manage the flow of data throughout the application.

Quick Facts about JSX:

0. `JSX` is basically HTML elements stored in a variable.
1. `JSX` is syntactially similar to `HTML` with a few differences.
2. Include JavaScript code in `{ }` to have it treated as JavaScript code in `JSX`.
3. `JSX` is not valid JavaScript code. It must be *compiled* into JS.
4. `Babel` is a popular transpiler tool for compiling `JSX` code into `JavaScript` code.
5. nested `JSX` must return a *single* element - a parent element nesting all other children elements. Optionally, you can use `()` to wrap the parent element for readability.

Quick Facts about React's relation to JSX:

1. React renders JSX directly to the HTML DOM using React's rendering API `ReactDOM`: `ReactDOM.render(componentToRender, targetNode)`, where the 1st argument is the React element or component that you want to render, and the 2nd argument is the DOM node that you want to render the component to.
2. `ReactDOM.render()` must be called *after* the JSX element declarations, just as you must declare variables before using them.

Quick Facts about JSX's difference from HTML:

1. In JSX, you cannot use `class` to define HTML classes because `class` is a keyword in JavaScript. Instead, JSX uses `className`.
2. Due to similar reasons, the naming convention for all HTML attributes and event references in JSX become *camelCase*.
3. Self-enclosing tags: In JSX, any JSX element can be written with a self-enclosing tag, and every element must be closed.

Quick Facts about JSX's difference from JavaScript:

1. Function: React requires your function name to begin with a capital letter.

Note：You must include `ReactDOM.render(JSX, document.getElementById('root'))` to place your JSX into React's own representation of the DOM. React then uses snapshots of its own DOM to optimize updating only specific parts of the actual DOM.

Note: The following code uses `JSX`.

## how to use?

### rendering a JSX element to HTML DOM

  ```js

    const JSX = (
      <div>
        <h1>Hello World</h1>
        <p>Render this to the DOM</p>
      </div>
    );

    ReactDOM.render(JSX, document.getElementById("challenge-node"));

  ```

### naming classes in JSX

  ```js

    const JSX = (
      <div className="myDiv"></div>
    )

  ```

### `ParentComponent` & `ChildComponent`: Rendering ES6 style class components

Just take a look at the example code:

```js

  const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };

  const Fruits = () => {
    return (
      <div>
        { /* Change code below this line */ }
        <TypesOfFruit />
        { /* Change code above this line */ }
      </div>
    );
  };

  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
          <Fruits />
          { /* Change code above this line */ }
        </div>
      );
    }
};

```

Output on page:

```md
Types of Food:

Fruits:

    Apples
    Blueberries
    Strawberries
    Bananas

```

### Compose React Componets

Example code: 

```js
  class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          { /* Change code below this line */ }
          <NonCitrus/>
          <Citrus/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };

  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
          <Fruits/>
          { /* Change code above this line */ }
          <Vegetables />
        </div>
      );
    }
  };
```

Output:

```md
  Types of Food:

  Fruits:

  Non-Citrus:

      Apples
      Blueberries
      Strawberries
      Bananas

  Citrus:

      Lemon
      Lime
      Orange
      Grapefruit

  Vegetables:

      Brussel Sprouts
      Broccoli
      Squash
```

### render a class component to the DOM

Syntax: `ReactDOM.render(<ComponentToRender />, targetNode)`

Example:

```js
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div id="challenge-node">
          <h1>Types of Food:</h1>
          {/* Change code below this line */}
          <Fruits/>
          <Vegetables/>
          {/* Change code above this line */}
        </div>
      );
    }
  };

  // Change code below this line
  ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"))
```

### Section Summary

1. Don't forget to write `constructor()` and `render()` inside the class component.

### what are `props`?

It is short for properties.
In React, you can pass props, to build child components.
Return to this section, find multiple resources to *understand* props.

Example:

```js
  const CurrentDate = (props) => {
    return (
      <div>
        { /* Change code below this line */ }
        <p>The current date is: {props.date}</p>
        { /* Change code above this line */ }
      </div>
    );
  };

  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          <CurrentDate date={Date()}/>
        </div>
      );
    }
  };
```
