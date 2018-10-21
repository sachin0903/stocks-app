import * as React from 'react';
import { Field } from 'redux-form';
import { InputField, SelectField } from '../../baseModules';
import * as mockData from '../../common/mockData.json';
import { codeLength, minAmount, mustnumber, required  } from '../../common/validate';

const options = () => {
    const rows = JSON.parse(JSON.stringify(mockData));

    const stockOptions = rows.map((data, index) => (
        <option key={index} value={data.stockSymbol}>{data.stockSymbol}</option>
    ));

    const stocks = new Array();
    stocks.push(<option value='' key=''>{}</option>);
    stocks.push(stockOptions);
    return stocks;
}

export const Trade = () => {
    return (
        <div className="trade-form"> 
            <Field
                name="stockSymbol"
                component={SelectField}
                className="input-box select-box"
                children={options()}
                label="Stock Symbol"
                validate={[required, codeLength]}
            />
            <Field
                name="price"
                type="text"
                className="input-box"
                component={InputField}
                label="Price"
                validate={[required, mustnumber, minAmount]}
            />
            <Field
                name="noOfShares"
                type="text"
                className="input-box"
                component={InputField}
                label="No of shares"
                validate={[required, mustnumber, minAmount]}
            />
        </div>
    )
}