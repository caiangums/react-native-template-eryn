# Store

Maintaining **state** consistent across all Application is important. `Store` is where your **state** should be placed and for this task, Eryn uses [`Redux`](https://redux.js.org/).

## Why use Redux Thunk?

`Redux` is awesome. After some experience and usage, the need for making `async` calls inside `actions` begins to be a constant. The solution was use a middleware for it: [`Redux Thunk`](https://github.com/reduxjs/redux-thunk).

If you make the usage of `async` inside your `actions` straightforward enough and catch errors while doing it your `Store` can still be consistent and your Application will scale with a good and maintanable state management.

## Ducks Pattern

[Strongly recommended](https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks) by the official Redux Docs, Eryn also encourages you to use this pattern.

[Read more at the proposal](https://github.com/erikras/ducks-modular-redux).

## Redux Middlewares

Redux has the concept of Middlewares and at Eryn they have a directory for it. There's just one Middleware implemented Logging Redux actions with some information about it.

If you want, you can use the lib [`Redux Logger`](https://github.com/LogRocket/redux-logger) as a Middleware too for logging purposes.

## Use Selectors for manipulating data before sending to Component

Instead of manipulating your data at `mapStateToProps()` it is suggested to use `selectors`. You can export them with the `actions` and organize them by `reducers` such as:

```
user/
 |- actions.js
 |- index.js
 |- reducers.js
 |- types.js
 |- selectors.js
```

### Example

At the [GitCode](https://github.com/caiangums/gitcode) it is possible see a simple usage of all those concepts [here](https://github.com/caiangums/gitcode/tree/main/src/store)

### What's next?

- [Middlewares](arch/middlewares)
- [Services](arch/services)
- [Components](arch/components)
