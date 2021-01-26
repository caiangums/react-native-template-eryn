# Screens

`Screens` are your Pages. You should be able to compose them with `Components`, use the state from `Store` and link all the Application. Eryn implements simple Start and Welcome Screens.

As described at [`Components`](arch/components) section, it is totally ok maintain "child" Components at the same file from the Screen they are being used. But if they start to become big _chunks_ of code consider refactoring them to `subdirectories` inside the Screen directory. This could happen if you use `TabViews` or `FlatLists` and need some logic inside of the `TabView` Child Components or `Item` Components.

Generally Headers, Texts with custom fonts and Buttons can be imported from the `components/` directory.

Another important note is that you could start using `Helpers` at `Screens` to encapsulate the Business Logic from it, creating _Pure Functions_ and letting them being reusable.

## Common Questions

Structuring `Screens` could leads to some questions using the Eryn structure for `Screens` and `Components`.

### Question: Should I nest Screens per Navigators?

Probably not. You can face conditions where a `Screen` can be used in more than one `Navigator`, and this is totally ok.

### Q: Should I import components from another Screeen?

In this case, consider refactoring it to the `components/` directory. If a Component is used more than once by different Screens, it is possible to use them even more and it is better to import them from `components/` than another `screen/` directory.

### What's next?

- [Components](arch/components)
- [Navigators](arch/navigators)
- [Store](arch/store)
