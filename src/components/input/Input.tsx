import * as React from 'react';

export const InputField = ({ input, meta, ...rest }) => (
    <div className="input-row">
        <label htmlFor={rest.label}>{rest.label}</label>
        <input
            {...input}
            {...rest}
            className={meta.error && meta.touched ? `${rest.className} trade-error` : rest.className}
        />
    </div>
);