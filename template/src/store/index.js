import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

// List Project Middlewares
import { logger as loggerMiddleware } from '_middlewares/logger';

// Place your Reducers
import { userReducer } from './user';

// Add Reducers to Root Reducer
const rootReducer = combineReducers({
  user: userReducer,
});

function configureStore(preloadedState) {
  let middlewares = [];

  // Prevent using logger on production build
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(loggerMiddleware);
  }

  // Redux Thunk as Middleware
  middlewares.push(thunkMiddleware);

  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares),
  );
}

const store = configureStore();

// Export the instance of the Store
export default store;
