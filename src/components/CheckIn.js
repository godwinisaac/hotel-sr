import React, { useState } from 'react';
// datepicker
import DatePicker from "react-datepicker";
// datepicker css
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
//icons
import {BsCalendar} from "react-icons/bs"

const CheckIn = () => {
  const [starDate, setStarDate] = useState(false);
  return(
     <div className="relative flex items-center justify-end h-full">
      {/*icon */}
      <div className="absolute z-10 pr-8">
        <div className="">
          <BsCalendar className='text-accent text-base' />
        </div>
      </div>
      <DatePicker
        className='w-full h-full'
        selected={starDate}
        placeholderText="Check in"
        onChange={(date)=> setStarDate(date)}
     />
    </div>
  );
};

export default CheckIn;
