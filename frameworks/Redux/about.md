# What is Redux?

Quick facts:

1. `Redux`: A state management *framework* that can be used with a number of different web technologies, including React.
2. `store`: A single state object responsible for the entire `state` of your app: Meaning if you had a React app with 10 components, and each component has its own local state, the entire state of your app would be defined by a *single* state object housed in the Redux `store`.
3. This means that any time any piece of your app wants to update state, it *must* do so through the Redux store. This approach is called unidirectional data flow which makes it easier to track state management in your app.

## `store`

An object which holds and manages application `state`.

### `createStore()`

You can create a `store` using `createStore()`. This method takes a `reducer` function as a *required* argument. (which will be covered later).

```js
  const reducer = (state = 5) => {
    return state;
  }
  
  // Define the store here:
  const store = Redux.createStore(reducer);
```

