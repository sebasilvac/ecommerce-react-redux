import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

//const logger = createLogger();

const enhancer = composeWithDevTools(
    applyMiddleware(
        thunk,
        createLogger()
    )
);

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancer);
};
