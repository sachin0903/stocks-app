import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as stocksActions from '../../actions/stocksActions';
import {
    AppState,
    StockExchange,
    StocksTable,
    TradeForm,
    TradeFormData
} from '../../baseModules';

interface Props {
    stocks: any;
    actions: any;
    exchange: any;
}


class StocksContainer extends React.Component<Props, {}> {

    constructor(props: any) {
        super(props);
    }


    onSubmit = (data: TradeFormData) => {
        this.props.actions.addStocks(data);
        this.props.actions.calculateStocks(data);
    }

    render () {
        const {stocks, exchange} = this.props;
        return (
            <div className="container">  
                <TradeForm onSubmit={this.onSubmit}/>           
                <StocksTable rows={stocks} /> 
                <StockExchange rows={exchange} />
            </div>
        )
    }

}

const mapStateToProps = (state: AppState) => ({
    exchange: state.exchange,
    stocks: state.stocks
});
  
const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(stocksActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(StocksContainer as any);