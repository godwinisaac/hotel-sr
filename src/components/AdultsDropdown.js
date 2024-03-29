import React, {  useContext } from 'react';
//room context
import { RoomContext} from '../context/RoomContext';
// headless ui menu
import { Menu} from "@headlessui/react";
//icon
import { BsChevronBarDown } from "react-icons/bs";

//list
const lis =[
  
  {name :'1 Guest'},
  {name :'2 Guests'},
  {name :'3 Guests'},
  {name :'4 Guests'},
]

const AdultsDropdown = () => {
  const {guest, setGuest} = useContext(RoomContext);
  return(
    <Menu as='div' className="w-full h-full bg-white relative">
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {guest}
        <BsChevronBarDown className='text-base text-accent-hover' />
      </Menu.Button>

      {/**items */}

      <Menu.Items as='ul' className="bg-white absolute w-full flex flex-col z-40">
        {lis.map((li, index) => {
          return(
            <Menu.Item
              onClick={() => setGuest(li.name)}
              as='li' 
              className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer" 
              key={index}
            >
            {li.name}
          </Menu.Item>)
        })}
      </Menu.Items>
    </Menu>
  );
};

export default AdultsDropdown;
