import React, { forwardRef } from 'react';

const ForwardReff = (props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    );
};

export default forwardRef(ForwardReff);