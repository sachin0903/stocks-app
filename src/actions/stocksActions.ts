import { Action } from 'redux';
import { calculateData } from '../common/helper';
import ExchangeState from '../interfaces/ExchangeState';
import StocksSate from '../interfaces/StocksState';

export interface AddStocksSuccess extends Action {
    type: 'ADD_STOCKS';
    stocks: StocksSate;
}
  
export const addStocksSuccess = (item: StocksSate): AddStocksSuccess => {
    return {
        stocks: Object.assign({}, item),
        type: 'ADD_STOCKS',
    };
};

export const addStocks = (item: StocksSate) => {
    return (dispatch: any, getState: any) => {
        const stocksAction = addStocksSuccess(item);
        dispatch(stocksAction);
    };
};


export interface CalculateStocksSuccess extends Action {
    type: 'CALCULATE_STOCKS';
    exchange: ExchangeState;
}

export const calculateStocksSuccess = (item: ExchangeState): CalculateStocksSuccess => {
    return {
        exchange: Object.assign({}, item),
        type: 'CALCULATE_STOCKS'
    }
}

export const calculateStocks = (item: StocksSate) => {
    return (dispatch: any, getState: any) => {
        const { stocks } = getState();
        const data = calculateData(stocks, item);
        const action = calculateStocksSuccess(data as ExchangeState);
        dispatch(action);
    }
}