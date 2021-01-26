# Environment Variables

The usage of Environment Variables prevent developers from exposing sensitive information inside the code and build different _Environment Applications_ with different _Environment Variables_.

The choosen library for dealing with _Env Vars_ is [**React Native Dotenv**](https://github.com/goatandsheep/react-native-dotenv).

You can read more about, [configure multiple environments](https://github.com/goatandsheep/react-native-dotenv#multi-env) and so on at the official docs but at the moment the Eryn template is fully functional with the basic implementation and configs.

## Using Env Vars

- Create `.env` file at the root of the project
- Add your env vars such as

```sh
API_URL=https://your.base.api.url
```

- Import them at your files

```js
import {API_URL} from '@env';

get(`${API_URL}/users`);
```

## Create your example file

It is a common practice to create your `.env.example` for new developers knowing what kind of Environment Variables they should have. This file can be something like:

```sh
API_URL=
TOKEN=
ACCESS_SECRET=
```

And you can commit it without **any filled variable** just for guidance. For examples it is possible to check [GitCode](https://github.com/caiangums/gitcode/) project at root [`.env.example` file](https://github.com/caiangums/gitcode/blob/main/.env.example).

### What's next?

- [Interfaces](arch/interfaces)
- [Services](arch/services)
