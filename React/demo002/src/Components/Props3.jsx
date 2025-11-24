import React from 'react';

const Props3 = ({obj}) => {
    obj.graduation = "BBA"
    return (
        <div>
            <h2>Qualification</h2>
            {obj.graduation}
            <br />
            {obj.PG}
        </div>
    );
};

export default Props3;