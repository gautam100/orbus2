import React from 'react';

const Wrapper = ({children}) => {
    return (
        <div style={{"color":"red","border":"1px solid green","height":"30px"}}>
            {children}
        </div>
    );
};

export default Wrapper;