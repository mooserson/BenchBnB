import { createStore } from 'redux';
import RootReducer from './../reducers/root_reducer';
import RootMiddleware from './../middleware/root_middleware';

const configureStore = (preLoadedState = {}) => (
  createStore(
    RootReducer,
    preLoadedState,
    RootMiddleware
  )
);

export default configureStore;
