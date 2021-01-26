# Navigators

Not so much common at Web but related to the concept of `Routes`, `Navigators` implements Screens transitions and Navigation related code such as

- General configurations for Transitions
- Grouping Flows at the same Navigator
- Bottom Tab Bar configurations

The choosen lib for dealing with Navigation is [`React Navigation`](https://reactnavigation.org/).

The `navigators/` directory is where your Navigators should be placed and exported as one `RootNavigator`, as described at the [`React Navigation` docs](https://reactnavigation.org/docs/getting-started).

## Configuration

All configuration for using the lastest version of `React Navigation` was made and the usage of the `RootNavigator` as a simple `StackNavigator` is implemented as a guide for usage.

## Good Practices

Through the usage of `React Navigation`, some issues may occur. There are some good practices that are encouraged for avoiding thos kind of issues. A more detailed explanation will be available in form of an Article.

#### 1 - Use `navigate()` for navigating between Navigators

When stacking screens between navigators, use `navigate(RouteName)`. This cleans the navigation stack of sceens and navigation state.

#### 2 - Use `push()`/`pop()` for Navigators Simple Internal Flows

With `push()`/`pop()` it is possible to send state and the new Screens will be placed at the top of the navigation stack, even if the screen already exists at the stack.

An example of _simple internal flow_ can be viewing a description from an article before accessing the article itself, or editing the description from a Note and saving it.

#### 3 - Avoid using Navigation State for more than 1 depth `navigate()` call

You should probably not be passing same state values across more than 1 screen. This concept is similar to: _Avoid "bypass" props to child components_.

#### 4 - Use global state (Redux) for navigation state consistency between more than 2 Navigators

On start using big flows, it is common to use more than one Navigator for each flow. It is common to navigate between 3 or more Navigators for those cases and the navigation state will be easily lost.

#### 5 - Use Navigators for "Big Flows" and repeat Screens for "Small Flows"

For a simple flow with a unique `Screen` or a simple 2-3 `Screen` that has no forms/iteration with Backend consider repeating `Screens` at `Navigators`. With this, you could maintain the Stack and State from Navigation and use `push()`/`pop()` for entering that "Small Flow".

Example: Create a `Navigator` for "Login Flow" and another for "Home Flow". Even that "Login Flow" could has the `ResetPasswordScreen`, "Home Flow" can also leads to the `ResetPasswordScreen`.

Both `Navigators` could have the `ResetPasswordScreen`.

### What's next?

- [Components](arch/components)
- [Screens](arch/screens)
