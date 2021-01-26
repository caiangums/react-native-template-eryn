# Services

Services are in general abstractions for business logic models and communication between Applications.

The most common basic Service is the one that encapsulates one specific Entity from the Back-end such as `User`:

```js
const getUsers = () => {};

const getUser = (id) => {};

const createUser = (userData) => {};

const deleteUser = (userId) => {};
```

A Service create a single communication layer between Applications and can depend on `Interfaces`. React and React Native projects generally have one of the most common _interface_: **HTTP request** interface. So, it is common for Services using that interface be written like:

```js
import api from '_interfaces/api';

const USERS_URL = 'user/';

const getUsers = () => api.get(USERS_URL);
```

One other important note is the need to deal, change, parse or convert the received data from `Service` before saving it at the `Store` (Global State). For those changes it is common the usage of `Helpers` at the time those `Services` calls were made.

## HTTP Requests Library

Personally I preffer using `axios` for dealing with HTTP Requests, but it is totally up to you to use the library that fits better for your needs or familiarity.

### What's next?

- [Interfaces](arch/interfaces)
- [Helpers](arch/helpers)
- [Store](arch/store)
