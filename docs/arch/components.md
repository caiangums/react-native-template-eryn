# Components

Structuring your `React`-based application and how you deal with its `Components` leads us to a very delicated discussion.

> _"How should I structure my components?"_

There are some options and Eryn allows dealing with most of them. And even with some open options, Eryn encourages the usage of [`Atomic Design`](https://danilowoz.com/blog/atomic-design-with-react) for structuring your Components inside the `components/` directory if your project tend to scale.

## Usage of Atomic Design

Better than "no pattern" is the usage of a Pattern with consistency. As Eryn encourage the usage of Atomic Design, some modifications can be made to use it with low effort as possible:

- Creation of `atoms/`, `molecules/` and `organisms/` directories inside the `component/` directory
- Creation of `index.js` files at each of those directories for exporting the components correctly
- Add rules for lint and resolver such as `_atoms`, `_molecules` and `_organisms`

So, imports from components should look like:

```js
import { Label, Input } from "_atoms";
import { LoginCard } from "_organisms";
```

Another important details are:

- `organisms` should use only `atoms` and `molecules` (eventually for special cases, another `organisms`)
- `molecules` should use only `atoms`
- `atoms` should use only native components (`Text`, `TouchableOpacity`)
- `atoms` should have no dependency in another `atoms`

## Other Options

As stated before, each user of Eryn can structure the Components on one pattern that fits better the use case. Another options besides Atomic Design can be Group by Features or Routes. It is possible to read more about it at the [official React docs](https://reactjs.org/docs/faq-structure.html)

## Common Questions

There are some common questions that you could face when using Eryn.

### Question: Should I maintain the Styles at same file with JSX Component?

It is up to you. If you want to split them, consider using a `directory` for each component.

### Q: Should I use directory for each Component?

It is up to you too. If you are splitting `styles`, consider doing it.

### Q: Should I have just One Component per file?

If the "child" Component is internal and used just with the actual Component it is ok maintain at the same file.

If the "child" Component is starting to becomes too large, consider refactoring it to another file inside the same directory from the actual Component. (But remember: it is also ok maintain both of them at the same file.)

### What's next?

- [Navigators](arch/navigators)
- [Screens](arch/screens)
- [Helpers](arch/helpers)
