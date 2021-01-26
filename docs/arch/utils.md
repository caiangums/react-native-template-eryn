# Utils

`Utils` and `Helpers` are very similar. Generally, `Helpers` are application-specific code. `Utils` are more general and tend to be used on language basic types such as Array, Objects, Strings and Numbers.

```js
// utils/validation.js
export const isArrayEmpty = (arr) => arr.length === 0;

// utils/function.js
export const wait = async (seconds = 1) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
```

### What's next?

- [Helpers](arch/helpers)
- [Services](arch/services)
