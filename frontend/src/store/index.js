import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'
import rootReducer from '../reducers'
export default () => {
    return createStore(rootReducer, {}, applyMiddleware(reduxThunk));
}