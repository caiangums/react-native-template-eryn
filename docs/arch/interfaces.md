# Interfaces

With the need of create single instances for libraries objects/modules, the `Interfaces` are responsible for doing it with properly configuration.

The most common usage of an `Interface` is the usage of [Axios](https://github.com/axios/axios) for making requests. On dealing with HTTP Requests `Axios` provides us benefits such as:

- Configuring base urls and authentication headers
- Request/Response Interceptors for specific error handlers
- Promises support
- Methods that replicate HTTP API

## Why should I use multiple Instances of an Interface?

This case is specific when dealing with 2 or more kind of usages. For the `Axios` case, a common need is:

- Different Servers for Authentication/Fetch data
- Different Servers for Fecth Different kind of data

### Example

At the [GitCode](https://github.com/caiangums/gitcode) it is possible see a simple usage of `Axios` [here](https://github.com/caiangums/gitcode/blob/main/src/interfaces/http.js)

### What's next?

- [Services](arch/services)
- [Helpers](arch/helpers)
