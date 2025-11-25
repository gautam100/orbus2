import React from 'react';
import Child from './Child';

const PassFunc = () => {
    const displayName = (name)=>{
        alert(name)
    }
    return (
        <div>
            <Child displayName={displayName} name="Raj" />
            <Child displayName={displayName} name="Rohit" />
            <Child displayName={displayName} name="Ramesh" />

        </div>
    );
};

export default PassFunc;