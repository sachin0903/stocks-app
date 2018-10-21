import * as React from 'react';
import { NoDataRow } from './NoDataRow';

interface Props {
    rows: any;
}

export const StocksTable = (props: Props) => {

    const { rows } = props;

    return (
        <div className="trade">  
            <h4> Trade Table</h4>   
            <table>
                <thead>
                    <tr>
                        <th>
                            Stock Symbol
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            No. of shares
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
                                        {row.price}
                                    </td>  
                                    <td>
                                        {row.noOfShares}
                                    </td>  
                                </tr>
                            )
                        }) 
                        : <NoDataRow colSpan={3} />
                    }
                </tbody>
            </table>
        </div>
    )
}