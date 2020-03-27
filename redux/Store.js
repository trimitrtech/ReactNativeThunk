import { createStore, applyMiddleware} from 'redux';
import addSubReducer from './reducers/AddSubReducer';
import thunk from 'redux-thunk';

const store = createStore(addSubReducer, applyMiddleware(thunk));

export {
    store
};