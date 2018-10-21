import * as React from 'react';

export const SelectField = ({
                              input,
                              meta,
                              children,
                              ...rest
                            }) => (

    <div className="input-row">
        <label htmlFor={rest.label}>{rest.label}</label>
        <select 
            {...input} 
            className={meta.error && meta.touched ? `${rest.className} trade-error` : rest.className}
        >
            {children}
        </select>
    </div>
);