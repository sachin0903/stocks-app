import * as React from 'react';
import { NoDataRow } from './NoDataRow';

interface Props {
    rows: any;
}

export const StockExchange = (props: Props) => {

    const { rows } = props;

    return (
        <div className="trade">  
            <h4>Stock Exchange</h4>  
            <table>
                <thead>
                    <tr>
                        <th>
                            Stock Symbol
                        </th>
                        <th>
                            Dividend Yield
                        </th>
                        <th>
                            P/E Ratio
                        </th>
                        <th>
                            Geometric Mean
                        </th>
                        <th>
                            Volume wighted price
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    rows.length > 0
                    ? rows.map((row: any, index: any) => {
                        return (
                                <tr key={index}>
                                    <td>
                                        {row.stockSymbol}
                                    </td>    
                                    <td>
                                        {row.dividend}
                                    </td>  
                                    <td>
                                        {row.peRatio}
                                    </td>  
                                    <td>
                                        {row.geometricMean}
                                    </td>  
                                    <td>
                                        {row.volumeWeightedPrice}
                                    </td>  
                                </tr>
                            )
                        })
                        : <NoDataRow colSpan={5} />
                    }
                </tbody>
            </table>
        </div>
    )
}