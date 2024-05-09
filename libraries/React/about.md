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

It is short for properties.</br>
In React, you can pass props, to build child components.</br>§
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

#### pass arrays as props

To pass an array to a JSX element, it must be treated as JavaScript.

Example:

```js
  const List = (props) => {
    { /* Change code below this line */ }
    return <p>{props.tasks.join(", ")}</p>
          
    { /* Change code above this line */ }
  };

  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          { /* Change code below this line */ }
          <List tasks={["walk dog", "workout"]}/>
          <h2>Tomorrow</h2>
          <List tasks={["cook dinner", "clean dishes", "clean apartment"]}/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };
```

Output:

```md
  To Do Lists
  Today

  walk dog, workout
  Tomorrow

  cook dinner, clean dishes, clean apartment
```

#### use default props

Set a default props in case no value for a prop is specified explicitly.</br>
React will assign the default prop if necessary.

Syntax:

```js
  MyComponent.defaultProps = { location: 'San Francisco' }
```

In this case, you have defined a location prop set to the string 'San Francisco'. Unless specified otherwise, this will be assigned as default to the prop.</br>
Also, if there is no default prop set previously, React assigns default props if props are undefined. (to `null`).

#### overriding default props

Basically, explicitly setting the prop values for a component *is* overriding the default props.

Example:

```js
  const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items quantity={10}/>
    { /* Change code above this line */ }
  }
};
```

In this example, `Items` is a childcomponent of `ShoppingCart`, where `quantity={10}` is passed in as a prop, which overrides the default prop set in `Items`.

#### PropTypes define the Props You Expect

Scenario:
Your app makes an API call to get some data that you expect to be of array type, which will then be passed in as a prop.</br>
Since the data you get may not be of array type, you can set `propTypes` on your component to require the data to be of a certain type.</br>
If the data you get does not match the type you set, this will throw a warning.</br>
It is considered best practice to set `propTypes` if you know the type of a prop in advance.

Syntax: `MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }`

In this example, `PropTypes.func` checks that `handleClick` is a *function*.</br>
Adding `isRequired` tells React that `handleClick` is a required property for that component. A warning will be issued if that prop isn't provided.</br>
Note that `func` and `bool` are represented differently in React; the other primitive types are the same as in vanilla JavaScript.

Example:

```js
  const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = {quantity: PropTypes.number.isRequired }
// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
```

In this example, `propTypes` is defined for the `Items` component to require `quantity` as a prop and verify that it is of type `number`.

#### accessing Props using `this.props`

If you refer to a class component within itself, you use `this` keyword.
Syntax: `{this.props.name}`

Example:

```js
  class App extends React.Component {
    constructor(props) {
      super(props);

    }
    render() {
      return (
          <div>
              { /* Change code below this line */ }
              <Welcome name={"Jiantao"}/>
              { /* Change code above this line */ }
          </div>
      );
    }
  };

  class Welcome extends React.Component {
    constructor(props) {
      super(props);

    }
    render() {
      return (
          <div>
            { /* Change code below this line */ }
            <p>Hello, <strong>{this.props.name}</strong>!</p>
            { /* Change code above this line */ }
          </div>
      );
    }
  };
```

#### reusing Props with Stateless Functional Components

What is state?

- A __stateless functional component__ is any function you write which accepts props and returns JSX.
- A __stateless component__, on the other hand, is a class that extends `React.Component`, but does not use internal state.
- A __stateful component__ is a class component that does maintain its own internal state. (Sometimes simply referred to as components or React components).

Why stateless instead of stateful?

- A common pattern is to try to reduce statefulness and create stateless functional components wherever possible, because this helps contain yoru state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.

Example:

```js
  class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
};
// Change code below this line

class Camper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

Camper.propTypes = {name: PropTypes.string.isRequired}

Camper.defaultProps = {
  name: "CamperBot"
}
```

This should output `CamperBot` on the web page.

#### Create a Stateful Component ! Very Important

State consists of any data that changes over time. Your application needs to know about the changes in data because you want to adapt these changes to the UI.</br>
React offers a solution for the state management of modern web applications. (What about mobile? React Native?)

##### Declaring a `state` property

Syntax:

```js
  this.state = {

  }
```

You have access to the state object throught the life of your component:

1. You can update it, render it in your UI, and pass it as props to child components.
2. Note that you must create a *class* component by extending `React.Component` in order to create a state like this.

Example:

```js
  class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state = {
      firstName: "Jiantao"
    }
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};
```

##### Rendering State in the UI

You've defined a component's initial state.

1. Now you can display any part of it in the UI that is rendered.
2. You can access the data with `this.state`; if a component is stateful, it will always have access to the data in `state` in its `render()` method.
3. You can access a state value within `return` of the render method. You must enclose the value in `{ }`.

React uses a virtual DOM to keep track of changes behind the scenes.</br>
When state data changes, it triggers a re-render of the components using that data - including child components that received the data as a prop.</br>
React updates the actual DOM, so you don't have to worry about changing the DOM. You simply declare what the UI should look like.</br>

Note if you make a component stateful, no other components are aware of its `state`. Its `state` is completely encapsulated, or local to that component, unless you pass state data to a child component as `props`.</br>
This notion of encapsulated `state` is cruical because it allows you to write certain logic, then have that logic contained and isolated in one place in your code.

Example:

```js
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      return (
        <div>
          { /* Change code below this line */ }
          <h1>{this.state.name}</h1>
          { /* Change code above this line */ }
        </div>
      );
    }
  };
```

There is also another way of rendering state in the UI</br>

You can actually write JavaScript code inside the render method, just not within the return statement.

Example:

```js
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      // Change code below this line
      const name = this.state.name;
      // Change code above this line
      return (
        <div>
          { /* Change code below this line */ }
          <h1>{name}</h1>
          { /* Change code above this line */ }
        </div>
      );
    }
  };
```

In the example, you access the state data and assign it a const variable called `name` in the render method.

##### Changing State: Set State with `this.setState`

React provides a way to change state: `this.setState()`, passing in an object with key-value pairs, where the key is your state property and the value is your state data.

Syntax:

```js
  this.setState({
    username: 'Lewis'
  });
```
React expects you to never modify `state` directly. Instead always use `this.setState()` when state changes occur.</br>
Caveat: State updates throught `setState` can be asynchronous. To avoid this problem, there is an alternative syntax for `setState`.

Example:

```js
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      // Change code below this line
      this.setState({
        name: "React Rocks!"
      }) 
      // Change code above this line
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };
```

In this example, if a user clicks on the button, the button runs the `handleClick` method defined on `MyComponent`. Within the `handleClick` method, the component `state` is updated.

##### Binding `this` to a Class Method

Example:

```js
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "Hello"
      };
      // Change code below this line
      this.handleClick = this.handleClick.bind(this);
      // Change code above this line
    }
    handleClick() {
      this.setState({
        text: "You clicked!"
      });
    }
    render() {
      return (
        <div>
          { /* Change code below this line */ }
          <button onClick={this.handleClick}>Click Me</button>
          { /* Change code above this line */ }
          <h1>{this.state.text}</h1>
        </div>
      );
    }
  };
```

In this example, you bind `this` to the `handleClick` method inside the `constructor` method.

##### Using State to Toggle an Element

State updates may be asynchronous. It means that React may batch multiple `setState()` calls into a single update and you can't rely on the previous value of `this.state` or `this.props` when calculating the next value. Therefore, avoid syntax as follows:

```js
  this.setState({
    counter: this.state.counter + this.props.increment
  });
```

Instead, pass a function into `stateState` by using this syntax:

```js
    this.setState((state, props) => ({
      counter: state.counter + props.increment
    }));
  ```

  Alternatively, if you use a form without `props`:

  ```js
    this.setState(state => ({
      counter: state.counter + 1
    }));
  ```

  Example:

  ```js
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      // Change code below this line
      this.toggleVisibility = this.toggleVisibility.bind(this);
      // Change code above this line
    }
    // Change code below this line
    toggleVisibility() {
      if (!this.state.visibility) {
        this.setState(state => ({
          visibility: state.visibility = true
        }));
      } else {
        this.setState(state => ({
          visibility: state.visibility = false
        }))
      }
    }
    // Change code above this line
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  }
```

In this example, I struggle to explain how I did it. But there are some key takeaways here.</br>
The `toggleVisibility()` function is written like it would have been written in JavaScript.</br>
The `if` statement checks whether the state component is true. If false, set the state's property ``visibility` to true; if true, set it to false.</br>
The confusing part is that I must wrap `{visibility: state.visibility = true}` in `()` because this is still JavaScriopt code. Or else, it will be seen as a block of code.</br>
The syntax is really a mess.

##### Write a Simple Counter

A more complex design:

```js
  class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      // Change code below this line
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
      // Change code above this line
    }
    // Change code below this line
    increment() {
      this.setState(state => ({
        count: state.count + 1
      }))
    }
    decrement() {
      this.setState(state => ({
        count: state.count - 1
      }))
    }
    reset() {
      this.setState(state => ({
        count: state.count = 0
      }))
    }
    // Change code above this line
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };
```

Just take several looks and let the syntax sink in. I feel explaning it will only confuse me further.

##### Create a Controlled Input

Your app may have more complex interactions between `state` and the rendered UI.</br>
For example, form control elements for text input, such as `input` and `textarea`, maintain their own state in the DOM as the user types.</br>
With React, you can move this mutable state into a React component's `state`. The user's input becomes part of the application `state`. So react controls the value of that input field. Typically, if you have React components with input fields the user can type into, it will be a controlled input form.</br>

Example:

```js
  class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      // Change code below this line
      this.handleChange = this.handleChange.bind(this);
      // Change code above this line
    }
    // Change code below this line
    handleChange(event) {
      this.setState(state => ({
        input: state.input = event.target.value
      }))
    }
    // Change code above this line
    render() {
      return (
        <div>
          { /* Change code below this line */}
          <input value={this.state.input} onChange={this.handleChange}/>
          { /* Change code above this line */}
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };
```

##### Create a Controlled Form

React can also control regular HTML `form` element.

Enjoy

```js
  class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      // Change code below this line
      event.preventDefault();
      this.setState(state => ({
        submit: state.input
      }))
      // Change code above this line
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            {/* Change code below this line */}
            <input value={this.state.input} onChange={this.handleChange} />
            {/* Change code above this line */}
            <button type='submit' onClick={this.handleSubmit}>Submit!</button>
          </form>
          {/* Change code below this line */}
          <h1>{this.state.submit}</h1>
          {/* Change code above this line */}
        </div>
      );
    }
  }
```

##### Pass States as Props to Child Components

