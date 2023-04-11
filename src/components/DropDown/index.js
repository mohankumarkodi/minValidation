import React, { useState } from 'react';
import './index.css'
const states = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
];

function Dropdown() {
  const [selectedState, setSelectedState] = useState('');

  const handleSelect = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div>
      <select  className='set-up' value={selectedState} onChange={handleSelect}>
        <option value="">--Select a state--</option>
        {states.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
