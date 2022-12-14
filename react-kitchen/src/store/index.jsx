import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger'
import ordersReducer from './orders';

const rootReducer = combineReducers({
    orders: ordersReducer
})

let enhancer;

if (process.env.NODE_ENV === 'production'){
    enhancer = applyMiddleware(thunk, logger)
} else {
    // const logger = require('redux-logger').default;
    
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}
const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
}

export default configureStore;
