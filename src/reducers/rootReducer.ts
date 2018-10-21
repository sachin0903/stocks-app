import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {AllActions} from '../actions/allActions'
import AppState from '../interfaces/AppState';
import exchangeReducer from './exchangeReducer';
import stocksReducer from './stocksReducer';


const appReducer = combineReducers<AppState>({
    exchange: exchangeReducer,
    form: formReducer,
    stocks: stocksReducer,
})

export const rootReducer = (state: AppState, action: AllActions) => {
    return appReducer(state, action);
};
