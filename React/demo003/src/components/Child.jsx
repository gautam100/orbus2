import React from 'react';

const Child = ({displayName, name}) => {
    return (
        <div>
            <button onClick={()=>displayName(name)}>Display User!</button>
        </div>
    );
};

export default Child;