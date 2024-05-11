# What are Frameworks? What are libraries?

Particularly, frameworks are pre-built models of designs.
Users have relatively less control. For example, you'd have to use specifically designated names when naming classes for HTML elements, if you want to use a framework to style these elements.

## Core Principles

1. `store`: stores states as one single object.
2. `reducer`: designs, modifies - in short: manages - states, by handling actions and returning a new *copy* of state without modifying the state directly. This is called the state immutability principle.
3. `dispatch()`: `action`s, `action creator`s, `dispatch` actions to `store` via `action creator`s.
4. `Redux Thunk Middleware`: handles asynchronous actions (endpoint API calls)

### `store` object

Declaration:

```js
  const store = Redux.createStore(reducerFunction);
```

#### `store`'s Methods

It allows you to subscribe *listener functions* to the store. These listener functions will be called *whenever* an action is dispatched against the store.

Example:

```js
  const ADD = 'ADD';

  const reducer = (state = 0, action) => {
    switch(action.type) {
      case ADD:
        return state + 1;
      default:
        return state;
    }
  };

  const store = Redux.createStore(reducer);

  // Global count variable:
  let count = 0;

  // this function will be subscribed/registered
  const increment = () =>{
    count++;
  }

  store.subscribe(increment);

  store.dispatch({type: ADD});
  console.log(count);
  store.dispatch({type: ADD});
  console.log(count);
  store.dispatch({type: ADD});
  console.log(count);
```

### `reducer` functions

A `reducer` function's *ONLY* job is to handle actions. It is responsible for the state modifications that take place in response to actions.

#### Define a `reducer` function

Basic Syntax:

```js
  const reducerFunction = (state, action) => {
    // here goes in how to handle actions and always return accordingly updated states
  }
```

Example:

```js
  const defaultState = {
    login: false
  };

  const reducer = (state = defaultState, action) => {
    // Change code below this line
    switch (action.type) {
      case 'LOGIN':
        return { login: true};
      default:
        return state;
    }
    // Change code above this line
  };

  const store = Redux.createStore(reducer);

  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
```

Another Example:

```js
  const defaultState = {
    authenticated: false
  };

  const authReducer = (state = defaultState, action) => {
    // Change code below this line
    switch (action.type) {
      case 'LOGIN':
        return {authenticated: true};
      case 'LOGOUT':
      return {authenticated: false};
      default:
      return state;
    }
    // Change code above this line
  };

  const store = Redux.createStore(authReducer);

  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };

  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };
```

#### Compose multiple `reducer` functions using `Redux.combineReducers()`

Basic Syntax:

```js

  const rootReducer = Redux.combineReducers(objectGoesHere);

```

Example:

```js
  const INCREMENT = 'INCREMENT';
  const DECREMENT = 'DECREMENT';

  const counterReducer = (state = 0, action) => {
    switch(action.type) {
      case INCREMENT:
        return state + 1;
      case DECREMENT:
        return state - 1;
      default:
        return state;
    }
  };

  const LOGIN = 'LOGIN';
  const LOGOUT = 'LOGOUT';

  const authReducer = (state = {authenticated: false}, action) => {
    switch(action.type) {
      case LOGIN:
        return {
          authenticated: true
        }
      case LOGOUT:
        return {
          authenticated: false
        }
      default:
        return state;
    }
  };

  const rootReducer = Redux.combineReducers({
    count: counterReducer,
    auth: authReducer
  })// Define the root reducer here

  const store = Redux.createStore(rootReducer);
```

### `action`

It is like declaring object with a type property. (Why type? Because JS is not statically typed?)

#### Define an `action`

Define actions as object.

```js
// declaring string variables to store the value for a certain action object's key
const LOGIN = "LOGIN";

// Suppose that actionName is "login"
const actionLogin = {
  type: LOGIN
}
```

#### Define an action creator to simplify action creation

Why need action creator? Because we need to send the action to the Redux store so that it can update its state.
An action basically instructs how to update the state.

```js
  const LOGIN = 'LOGIN'

  const actionLogin = {
    type: LOGIN
  }

  // Define an action creator here:
  const actionCreator = () => {
    return action;
  }
```

#### Send `action`s data to the `store`

Example:

```js
  const ADD_NOTE = 'ADD_NOTE';

  const notesReducer = (state = 'Initial State', action) => {
    switch(action.type) {
      // Change code below this line
      case ADD_NOTE:
        return action.text;
      // Change code above this line
      default:
        return state;
    }
  };

  const addNoteText = (note) => {
    // Change code below this line
    return {
      type: ADD_NOTE,
      text: note
    }
    // Change code above this line
  };

  const store = Redux.createStore(notesReducer);

  console.log(store.getState());
  store.dispatch(addNoteText('Hello!'));
  console.log(store.getState());
```

In the example, the `notesReducer` checks the type of an action. If `action.type` matches `ADD_NOTE`, the reducer function returns the action - which in this case is the value of the property `text`. It returns `note`, which is the parameter passed in the action `addNoteText`. So, when we dispatch the action `addNoteText`, passing in `"Hello!"`, the state will change from default `"Initial State"` to `"Hello!"`.

### `dispatch()` method to dispatch action objects

This method is what you use to dispatch actions to the Redux store.
What do we pass in the method? The value returned from an action creator. The value will be the action object. So, eventually, the dispatch method dispatches an action object to the Redux store.
Why is this middle step necessary?

```js
  const store = Redux.createStore(
    (state = {login: false}) => state
  );

  const LOGIN = 'LOGIN';

  const loginAction = () => {
    return {
      type: LOGIN;
    }
  };

  // Dispatch the action here:
  store.dispatch(loginAction());
  // is the same as:
  store.dispatch({ type: LOGIN });
```

### Asynchronous Actions (seperate from `action`s)

#### Create an asynchronous action

You return a function in the action creator that takes `dispatch` as an argument. Within this function, you can dispatch actions and perform asynchronous requests. See example below  basic syntax.

Basic Syntax:

```js
const store = Redux.createStore(
  // arg1
  asyncDataReducer,
  // pass as a second argument to Redux.createStore(arg1, arg2)
  Redux.applyMiddleware(ReduxThunk.default)
);
```

Example:

```js
  const REQUESTING_DATA = 'REQUESTING_DATA'
  const RECEIVED_DATA = 'RECEIVED_DATA'
  
  // actions
  const requestingData = () => { return {type: REQUESTING_DATA} }
  const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

  const handleAsync = () => {
    return function(dispatch) {
      // dispatch action
      dispatch(requestingData());
      setTimeout(function() {
        let data = {
          users: ['Jeff', 'William', 'Alice']
        }
        // Dispatch action
        dispatch(receivedData(data));
      }, 2500);
    }
  };

  const defaultState = {
    fetching: false,
    users: []
  };

  const asyncDataReducer = (state = defaultState, action) => {
    switch(action.type) {
      case REQUESTING_DATA:
        return {
          fetching: true,
          users: []
        }
      case RECEIVED_DATA:
        return {
          fetching: false,
          users: action.users
        }
      default:
        return state;
    }
  };

  const store = Redux.createStore(
    asyncDataReducer,
    Redux.applyMiddleware(ReduxThunk.default)
  );
```

### Some Simple Demonstration

#### Writing a Counter with Redux
  
  ```js
  const INCREMENT = "INCREMENT"; // Define a constant for increment action types
  const DECREMENT = "DECREMENT"; // Define a constant for decrement action types

  const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case INCREMENT:
        return state + 1;
      case DECREMENT:
        return state - 1;
      default:
        return state;
    }
  };

  const incAction = () => {
    return {
      type: INCREMENT
    }
  };

  const decAction = () => {
    return {
      type: DECREMENT
    }
  }

  const store = Redux.createStore(counterReducer);
```

#### State Immutability

In Redux, it is the programmer's job to change the state directly. So, reducers should return a new state based on a copy of the original state without modifying the original state directly.

Example:

```js
  const ADD_TO_DO = 'ADD_TO_DO';

  // A list of strings representing tasks to do:
  const todos = [
    'Go to the store',
    'Clean the house',
    'Cook dinner',
    'Learn to code',
  ];

  const immutableReducer = (state = todos, action) => {
    switch(action.type) {
      case ADD_TO_DO:
        // Don't mutate state here or the tests will fail
        return state.slice().concat(action.todo);
      default:
        return state;
    }
  };

  const addToDo = (todo) => {
    return {
      type: ADD_TO_DO,
      todo: todo
    }
  }

  const store = Redux.createStore(immutableReducer);
```

##### The Spread Operator `[...myArray]` on Arrays

The `...` spreads out the values in `myArray` into a new array.</br>

To add new values, you can write: `[...myArray, "new value"]`, which would return a new array composed of the values in `myArray` and the string `new value` as the *last* value.

Example:

```js
  const immutableReducer = (state = ['Do not mutate state!'], action) => {
    switch(action.type) {
      case 'ADD_TO_DO':
        // Don't mutate state here or the tests will fail
        return [...state, action.todo];
      default:
        return state;
    }
  };

  const addToDo = (todo) => {
    return {
      type: 'ADD_TO_DO',
      todo
    }
  }

  const store = Redux.createStore(immutableReducer);
```

##### Remove an item from an Array

Example:

```js
  const immutableReducer = (state = [0,1,2,3,4,5], action) => {
    switch(action.type) {
      case 'REMOVE_ITEM':
        // Don't mutate state here or the tests will fail
        return state.slice(0, action.index).concat(state.slice(action.index + 1));
      default:
        return state;
    }
  };

  const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM',
      index
    }
  }

  const store = Redux.createStore(immutableReducer);
```

##### Copy an Object with `Object.assign`

`Object.assign()` takes a target object and source objects and maps properties from the source objects to the target object. Any matching properties are overwritten by properties in the source projects. This behavior is commonly used to make shallow copies of objects by passing an empty object as the first argument followed by the object(s) you want to copy.</br>

Syntax:

```js
  const newObject = Object.assign({}, obj1, obj2);
```

This creates `newObject` as a new `object`, which contains the properties that currently exist in `obj1` and `obj2`.

Example:

```js
  const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
  };

  const immutableReducer = (state = defaultState, action) => {
    switch(action.type) {
      case 'ONLINE':
        // Don't mutate state here or the tests will fail
        return Object.assign({}, defaultState, {status: 'online'});
      default:
        return state;
    }
  };

  const wakeUp = () => {
    return {
      type: 'ONLINE'
    }
  };

  const store = Redux.createStore(immutableReducer);
```