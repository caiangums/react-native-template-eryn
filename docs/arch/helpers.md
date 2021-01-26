# Helpers

The most common usage of a helper is when you need to parse/change data fecthed from Back-end. The common implementation of Servers tend to be _agnostic_ and most Application-free as possible. This approach tend to scale well and enables multiple Applications with different implementations coexists across multiple platforms.

For those cases when the Servers let Applications fetch data with low or basically "no-meaning" it is up to the Application implementation deal with data and parse it the best way possible. That is a case for a `Helper`.

```js
const parseUserData = () => {};

const buildUserDataToCreation = (data) => {};
```

It is also important to say that the same way a `Helper` can parse the data from Server, it can help prepare the data to be sent to the Server.

## Are Helpers just about Parsing?

No. You can use them to **encapsulate specific Business Logic** from your Application and deal with conversion, changes, filters and much more. And most important: not necessarilly sending them to the `Service` Layer.

One use-case is filtering specific data before sending to `Store` and removing invalid information from being persisted at the `Store`.

### What's next?

- [Store](arch/store)
- [Services](arch/services)
- [Components](arch/components)
