import * as React from 'react';

interface Props {
    colSpan: number
}

export const NoDataRow = (props: Props) => {

    const { colSpan } = props;
    return (
        <tr style={{textAlign: 'left'}}>
            <td colSpan={colSpan}>
                No Data
            </td>
        </tr>
    )
}