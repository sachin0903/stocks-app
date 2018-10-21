import { orderBy } from '../common/helper';
import StocksState from '../interfaces/StocksState';

const initialState: StocksState[] = [];

export default (stocks = initialState, action: any) => {
    switch (action.type) {
     case 'ADD_STOCKS':
        return orderBy(Object.assign([{}], [...stocks, {...action.stocks, timestamp:new Date()}])); 
     default:
        return stocks
    }
}