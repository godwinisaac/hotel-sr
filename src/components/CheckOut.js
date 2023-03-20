import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { BsCalendar } from 'react-icons/bs';

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false);
  return(
     <div className="relative flex items-center justify-end h-full">
      {/*icon */}
      <div className="absolute z-10 pr-8">
        <div className="">
          <BsCalendar className='text-accent text-base' />
        </div>
      </div>
      <ReactDatePicker
        className='w-full h-full'
        selected={endDate}
        placeholderText="Check out"
        onChange={(date)=> setEndDate(date)}
     />
    </div>
  );
};

export default CheckOut;
