# What is React? What is JSX?

Quick Facts about React:

1. a popular JS library for building reusable, component-driven (组件驱动) UIs for web pages or applications.
2. combines HTML with JavaScript functionality into its own markup language called `JSX`. React also makes it easy to manage the flow of data throughout the application.

Quick Facts about JSX:

0. `JSX` is basically HTML elements stored in a variable.
1. `JSX` is syntactially similar to `HTML` with a few differences.
2. Include JavaScript code in `{ }` to have it treated as JavaScript code *in* `JSX`.
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

### Render a Class Component to the DOM

Syntax:

```js
  ReactDOM.render(<ComponentToRender />, targetNode)
```

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

### What are `props`?

It is short for properties.</br>
In React, you can pass props, to build child components.</br>
Return to this section, find multiple resources to *understand* props.</br>

Some takeaways returning to understanding `props`

1. `props` are passed from ParentComponent to ChildComponent! It is like a mediating node between the parent and its child(en).
2. When passing a prop to ChildComponent, remember to include JavaScript code in curly brackets, not the variable name!

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

#### Pass Arrays as Props

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

#### Define default props

Set a default props in case no value for a prop is specified explicitly.</br>
React will assign the default prop if necessary.

Syntax:

```js
  MyComponent.defaultProps = { location: 'Düsseldorf' }
```

In this case, you have defined a location prop set to the string 'Düsseldorf'. Unless specified otherwise, this will be assigned as default to the prop. Also, React assigns default props if props are undefined.

#### Overriding default props

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

Syntax:

```js
  MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
```

In this example, `PropTypes.func` checks if `handleClick` is a *function*.</br>
Adding `isRequired` tells React that `handleClick` is a required property for that component. A warning will be issued if that prop isn't provided.</br>
Note that `func` and `bool` are represented differently in React; the other primitive types are the same as in JavaScript.

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

#### Accessing Props using `this.props`

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

#### Reusing Props with Stateless Functional Components

What is state?

- A __stateless functional component__ is any `function` you write which accepts props and returns JSX.
- A __stateless component__, on the other hand, is a `class` that extends `React.Component`, but *does not use* `internal state`.
- A __stateful component__ is a `class` component that *does maintain* `its own internal state`. (Sometimes simply referred to as components or React components).

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

React uses a virtual DOM to keep track of changes behind the scenes. When state data changes, it triggers a re-render of the components using that data - including child components that received the data as a prop.</br>
React updates the actual DOM, so you don't have to worry about changing the DOM. You simply declare what the UI should look like.</br>

Note if you make a component stateful, __no other components__ are aware of its `state`. Its `state` is completely encapsulated, or local to that component, __unless__ you pass state data to a child component as `props`.</br>
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

__You can actually write JavaScript code inside the render method, just not within the return statement.__

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

State updates may be asynchronous. It means that React may batch multiple `setState()` calls into a single update and you can't rely on the previous value of `this.state` or `this.props` when calculating the next value.</br>

Therefore, __avoid__ syntax as follows:

```js
  this.setState({
    counter: this.state.counter + this.props.increment
  });
```

Instead, pass a function into `setState` by using this syntax:

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

In this example, the `toggleVisibility()` function is written like it would have been written in JavaScript.</br>
The `if` statement checks if the state component is true. If false, set the state's property `visibility` to true; if true, set it to false.</br>
The confusing part is that I must wrap `{visibility: state.visibility = true}` in `()` because this is still JavaScriopt code. Or else, it will be seen as a block of code.</br>

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

Just take several looks and let the syntax sink in. I feel explaning it further will only confuse me.

##### Create a Controlled Input

Your app may have more complex interactions between `state` and the rendered UI.</br>
For example, form control elements for text input, such as `input` and `textarea`, maintain their own state in the DOM as the user types.</br>
With React, you can move this mutable state into a React component's `state`. The user's input becomes part of the application `state`. So React controls the value of that input field. Typically, if you have React components with input fields the user can type into, it will be a controlled input form.</br>

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

A common pattern is to have a stateful component containing the `state` important to your app, that then renders child components, because you want these components to have access to some pieces of that `state` passed in as props.</br>

For example, suppose your app's `state` contains a lot of user information, but your `NavBar` component only needs access to the user's username to display it. In this case, you pass *that* piece of `state` to the `NavBar` component as a prop.</br>

This brings us to some important paradigms in React:

1. __unidirectional data flow__: State flows in one direction down the tree of your application's components, from the stateful parent component to child components, where the child components only receive the data needed there.
2. __Separation of State Logic and UI Logic__: Complex stateful apps can be broken down into just a few, or maybe a single, stateful component. The rest of your components simply receive state from the parent as props, and render a UI from that state. It begins to create a separation where __state management__ is handled in one part of code and __UI rendering__ in another.

Example:

```js
  class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'CamperBot'
      }
    }
    render() {
      return (
        <div>
          {/* Change code below this line */}
          <Navbar name={this.state.name}/>
          {/* Change code above this line */}
        </div>
      );
    }
  };

  class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      <div>
        {/* Change code below this line */}
        <h1>Hello, my name is: {this.props.name}</h1>
        {/* Change code above this line */}
      </div>
      );
    }
  };
```

Don't forget `this` in the child component! I know it's confusing. Since props are the connecting point between parent and child component, using `this.props` does not refer to the child component.

##### Pass a Callback as Props

Besides passing `state` data as props to child components, you can also pass handler functions or any method defined on a React component to a child component. This is how you allow child components to interact with their parent components.

Example:

```js
  class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
    render() {
      return (
        <div>
          { /* Change code below this line */ }
          <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
          <RenderInput input={this.state.inputValue}/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };

  class GetInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Get Input:</h3>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      );
    }
  };

  class RenderInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Input Render:</h3>
          <p>{this.props.input}</p>
        </div>
      );
    }
  };
```

Observe how the input gets rendered in real time. This illustrates how data and callbacks can be passed between React components.

#### Use the Lifecycle Method componentWillMount

React components have several special methods taht provide opportunities to perform actions at specific points in the lifecycle of a component. These are called __lifecycle methods__, or __lifecycle hooks__. They allow you to catch components at certain points in time, which can be before they are rendered, before they are updated, before they receive props. before they unmount, and etc.</br>

Here is a list of some of the main lifecycle methods:

`componentWillMount()`, `componentDidMount()`, `shouldComponentUpdate()`, `componentDidUpdate(),` `componentWillUnmount()`.

##### `componentWillMount()`

This method is called before the `render()` method when a component is being mounted to the DOM.

Example:

```js
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
      // Change code below this line
      console.log("hello kitty");
      // Change code above this line
    }
    render() {
      return <div />
    }
  };

```

You will see the output in your console, but not on the web page. That's the point.

##### `componentDidMount()`

Most web developers, at some point, need to call an API endpoint to retrieve data. If you're working with React, it's important to know where to perform this action.</br>
The best practice with React is to place API calls or any calls to your server in the lifecycle method `componentDidMount()`, which is called after a component is mounted to the DOM. Any calls to `setState()` here will trigger a re-rendering of your component. When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once your receive the data.

Example:

```js
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          activeUsers: 1273
        });
      }, 2500);
    }
    render() {
      return (
        <div>
          {/* Change code below this line */}
          <h1>Active Users: {this.state.activeUsers}</h1>
          {/* Change code above this line */}
        </div>
      );
    }
  }
```

##### Add Event Listeners

`componentDidMount()` is also the best place to attach any event listeners you need to add for specific functionality.

Example:

```js
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // Change code below this line
    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress);
    }
    
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress);
    }
    // Change code above this line
    handleEnter() {
      this.setState((state) => ({
        message: state.message + 'You pressed the enter key! '
      }));
    }
    handleKeyPress(event) {
      if (event.keyCode === 13) {
        this.handleEnter();
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  };
```

This example demonstrates an example of good practice: Use lifecycle method to do any clean up on React components before they are unmounted and destroyed. Removing event listeners is one example of one such clean up action.

##### `shouldComponentUpdate`: Optimize Re-Renders

The basic idea is to introduce more control into rendering, in terms of when to render what. Typically, if any component receives new state or new props, it re-renders itself and its children automatically. But React provides this method for you to call when child components receive new state or props, and declares specifically if the components should update or not. This method is a useful way to update performance. For example, even if the props haven't changed, when a component receives new props, it re-renders itself. That would be a waste of energy if nothing actually changes.</br>

This method takes `nextProps` and `nextState` as parameters. You can use `shouldComponentUpdate` to prevent this from happening, by comparing `this.prop` and `nextProps`. The method must return a boolean that tells React whether to update the component.

Example:

```js
  class OnlyEvens extends React.Component {
    constructor(props) {
      super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log('Should I update?');
      // Change code below this line
      if (nextProps.value % 2 === 0) {
        return true;      
      }
      // Change code above this line
    }
    componentDidUpdate() {
      console.log('Component re-rendered.');
    }
    render() {
      return <h1>{this.props.value}</h1>;
    }
  }

  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0
      };
      this.addValue = this.addValue.bind(this);
    }
    addValue() {
      this.setState(state => ({
        value: state.value + 1
      }));
    }
    render() {
      return (
        <div>
          <button onClick={this.addValue}>Add</button>
          <OnlyEvens value={this.state.value} />
        </div>
      );
    }
  }
```

Remember that these lifecycle methods are pre-written, built into React.

#### Syntax of Inline Styles in JSX

Compare Syntax:

HTML:

```HTML
  <div style="color: yellow; font-size: 16px">Mellow Yellow</div>
```

JSX:

```js
  <div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
```

1. The difference is due to how JSX is transpiled: You can't set the attribute value to a string. Set instead to a JavaScript object.
2. Also, camelCase for property names without `-` because React does not accept kebab-case keys in the style object.

Example:

```js
  class Colorful extends React.Component {
    render() {
      return (
        <div style={{color: "red", fontSize: "72px"}}>Big Red</div>
      );
    }
  };
```

Optionally, you can also set the value for `fontSize` to 72 as a number - that is, without quotes.

##### Batch Styles in a Variable

Example:

```js
  const styles = {
    color: "purple",
    fontSize: 40,
    border: "2px solid purple"
  }
  // Change code above this line
  class Colorful extends React.Component {
    render() {
      // Change code below this line
      return (
        <div style={styles}>Style Me!</div>
      );
      // Change code above this line
    }
  };
```

#### Advanced JavaScript in React Render Method

The basic idea is to write JavaScript code inside `render()` right above the `return` statement. You've summarized this before.</br>
The advantage is that you don't need to wrap JS code in curly braces.

Example:

```js
  const inputStyle = {
    width: 235,
    margin: 5
  };

  class MagicEightBall extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput: '',
        randomIndex: ''
      };
      this.ask = this.ask.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    ask() {
      if (this.state.userInput) {
        this.setState({
          randomIndex: Math.floor(Math.random() * 20),
          userInput: ''
        });
      }
    }

    handleChange(event) {
      this.setState({
        userInput: event.target.value
      });
    }

    render() {
      const possibleAnswers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        "Don't count on it",
        'My reply is no',
        'My sources say no',
        'Most likely',
        'Outlook not so good',
        'Very doubtful'
      ];

      const answer = possibleAnswers[this.state.randomIndex]; // Change this line
      return (
        <div>
          <input
            type='text'
            value={this.state.userInput}
            onChange={this.handleChange}
            style={inputStyle}
          />
          <br />
          <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
          <br />
          <h3>Answer:</h3>
          <p>
            {/* Change code below this line */}
            {answer}
            {/* Change code above this line */}
          </p>
        </div>
      );
    }
  }
```

#### Render with If-Else condition

Example:

```js
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState((state) => ({
        display: !state.display
      }));
    }
    render() {
      // Change code below this line
      if (this.state.display) {
        return (
          <div>
            <button onClick={this.toggleDisplay}>Toggle Display</button>
            <h1>Displayed!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleDisplay}>Toggle Display</button>
          </div>
      );
      }
    }
  };
```

#### Use && for a More Concise Conditional

You can add condition inside `return ( JSX goes in here)`. If a condition is true, it returns a markup. If not, nothing is returned</br>

Syntax:

```js
  {condition && <p>markup</p>} 
```

Example:

```js
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState(state => ({
        display: !state.display
      }));
    }
    render() {
      // Change code below this line
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          {this.state.display && <h1>Displayed!</h1>}
        </div>
      );
    }
  };
```

#### Use a Ternary Expression for Conditional Rendering

If/else statements cannot be inserted directly into JSX code due to how it is compiled. So they are always written right above the return statement.</br>
Ternary expressions are an alternative if you want to implement conditional logic *within* your JSX.

Example:

```js
  const inputStyle = {
    width: 235,
    margin: 5
  };

  class CheckUserAge extends React.Component {
    constructor(props) {
      super(props);
      // Change code below this line
      this.state = {
        input: '',
        userAge: ''
      }
      // Change code above this line
      this.submit = this.submit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.setState({
        input: e.target.value,
        userAge: ''
      });
    }

    submit() {
      this.setState(state => ({
        userAge: state.input
      }));
    }

    render() {
      const buttonOne = <button onClick={this.submit}>Submit</button>;
      const buttonTwo = <button>You May Enter</button>;
      const buttonThree = <button>You Shall Not Pass</button>;
      return (
        <div>
          <h3>Enter Your Age to Continue</h3>
          <input
            style={inputStyle}
            type='number'
            value={this.state.input}
            onChange={this.handleChange}
          />
          <br />
          {/* Change code below this line */}
          {!this.state.userAge? buttonOne: (this.state.userAge < 18? buttonThree: buttonTwo)}
          {/* Change code above this line */}
        </div>
      );
    }
  }
```

#### Render Conditionally from Props

Example:

```js
  class Results extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      {/* Change code below this line */}
      return <h1>{this.props.fiftyFifty ? "You Win!": "You Lose!"}</h1>
        ;
      {/* Change code above this line */}
    }
  }

  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState(prevState => {
        // Complete the return statement:
        return {
          counter: prevState.counter + 1
        }
      });
    }

    render() {
      const expression = Math.random() >= .5; // Change this line
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          {/* Change code below this line */}
          <Results fiftyFifty={expression}/>
          {/* Change code above this line */}
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  }
```

In this example, the const variable `expression` has a 50% chance of being assigned `true` and 50% of being assigned `false`.

#### Conditional Rendering of Inline CSS Based on Component State

React differs from jQuert in that you must track when elements change and also handle the actual manipulation *directly* in jQuery, while in React you *indirectly* manipulate element changes using the conditional approach. This is the preferred approach when writing in React.

Example:

```js
  class GateKeeper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({ input: event.target.value })
    }

    render() {
      let inputStyle = {
        border: '1px solid black'
      };
      // Change code below this line
      if (this.state.input.length > 15) {
        inputStyle = {
          border: '3px solid red'
        }
      }
      // Change code above this line
      return (
        <div>
          <h3>Don't Type Too Much:</h3>
          <input
            type="text"
            style={inputStyle}
            value={this.state.input}
            onChange={this.handleChange} />
        </div>
      );
    }
  };
```

##### Use `Array.map()` to Dynamically Render Elements

Conditional rendering inline CSS is useful if a programmer knows what the state of an application. But the truth is that there is no way of knowing the state of the application until runtime because so much depends on a user's interaction with that program. These unknowns must be handled ahead of time.</br>

For example, suppose you create a "To-Do-List" app. You have no way of knowing how many items a user might have on their list. So you need to set up your component to dynamically render the correct number of list elements.

