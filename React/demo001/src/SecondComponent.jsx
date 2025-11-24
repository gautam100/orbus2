import React from 'react';

const SecondComponent = () => {
    return (
        <div>
            <h2>This is Second Component!!!</h2>
            <button className='btn btn-primary' onClick={clickMe}>Click Me!</button>
        </div>
    );
};
function clickMe(){
    alert("Clicked!!")
}
export default SecondComponent;