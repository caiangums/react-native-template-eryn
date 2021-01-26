# Constants

`Constants` are a very straightforward concept. If you use

- _Magic Number_
- _Configuration_
- _Color_
- _Style_

or anything that can be considered "non-changable" at your Application, **it is almost certainly a constant**.

For maintainability purposes, you can place those values at a single place and with a single change you can make it change at all your project.

**Note:** `Constants` tend to be written all uppercase with 'underscore' separation of words.

```js
// constants/colors.js
export const MAIN_COLOR = '#f4f4f4';

// constants/typography.js
export const FONT_SIZE = 18;

// constants/intervals.js
const SECONDS = 1000;

export const WAIT_TIME = 2 * SECONDS;
```

### Examples

For examples it is possible to check [GitCode](https://github.com/caiangums/gitcode/) project at the [constants directory](https://github.com/caiangums/gitcode/tree/main/src/constants).

### What's next?

- [Utils](arch/utils)
- [Interfaces](arch/Interfaces)
- [Components](arch/components)
