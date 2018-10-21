// import { orderBy } from '../common/helper';
import ExchangeState from '../interfaces/ExchangeState';

const initialState: ExchangeState[] = [];

export default (exchange = initialState, action: any) => {
    switch (action.type) {
    case 'CALCULATE_STOCKS':
        
        const rows = exchange.filter(data => {
            return data.stockSymbol !== action.exchange.stockSymbol
        });

        const exchangeData =  Object.assign([{}], [...rows, ...action.exchange]);  
        return exchangeData;
     default:
        return exchange

    }
}