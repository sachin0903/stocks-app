import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { TradeFormData } from '../baseModules';
import { Trade } from '../components/custom/Trade';

class TradeFormDef extends React.Component<InjectedFormProps<TradeFormData> & {}> {

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit}> 
                <div className="trade-box">
                    <Trade />
                    <button 
                        className="trade-button"
                        type="submit"
                    >
                        Add
                    </button>
                </div>
            </form>
        )
    }
}

const TradeForm = reduxForm<TradeFormData, {}>({ form: 'tradeForm'})(TradeFormDef);

export default TradeForm;