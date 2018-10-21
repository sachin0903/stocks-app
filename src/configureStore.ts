import * as Redux from 'redux';
// import * as persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import AppState from './interfaces/AppState';
import { rootReducer } from './reducers/rootReducer';

export function configureStore(): Redux.Store<AppState> {
    // tslint:disable-next-line:no-any
    let composeEnhancers: any = Redux.compose;

    if (process.env.NODE_ENV !== 'production') {
        // tslint:disable-next-line:no-any
        composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
    }

    return Redux.createStore<AppState, any, any, any>(
        rootReducer,
        composeEnhancers(
            Redux.applyMiddleware(thunk)
            // persistState(['currentUserState', 'Any Persitance state']))
        ));
}