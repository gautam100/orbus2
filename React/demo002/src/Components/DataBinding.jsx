import React, { useState } from 'react';

const DataBinding = () => {
    const [val, setVal] = useState("")
    return (
        <div>
            <h3>Data Binding</h3>
            <input type="text" placeholder="Enter text" value={val} onChange={(event)=>setVal(event.target.value)} />
            <button onClick={()=>setVal('')}>Clear</button>
            <br /><strong>{val}</strong>
        </div>
    );
};

export default DataBinding;