import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import backG from './Activate wallet - merchant.svg';

const TrialDates = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  // console.log(state);

  return (
    <div style={{}}>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => {
          console.log([item.selection]);
          setState([item.selection]);
        }}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </div>
  );
};

export default TrialDates;
