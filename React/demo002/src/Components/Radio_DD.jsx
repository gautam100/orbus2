import React, { useState } from 'react';

const Radio_DD = () => {
    const [gender, setGender] = useState("female")
    const [city, setCity] = useState("Banglore")
    return (
        <div>
            <h2>Select Gender</h2>
            <input type="radio" name="gender" id="male" value={"male"} checked= {gender === 'male'} onChange={(e)=>setGender(e.target.value)} />
            <label htmlFor="male">Male</label>
            <br /><br />
            <input type="radio" name="gender" id="female" value={"female"} checked= {gender === 'female'} onChange={(e)=>setGender(e.target.value)} />
            <label htmlFor="female">Female</label>
            <br />
            <strong>Selected Gender is {gender}</strong>
            <h2>DropDown</h2>
            <select defaultValue={"Banglore"} onChange={(e)=>setCity(e.target.value)}>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Banglore">Banglore </option>
            </select>
            <br />
            <strong>Selected city is {city} </strong>
        </div>
    );
};

export default Radio_DD;