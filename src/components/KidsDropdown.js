import React, { useContext } from 'react';
//room context
import { RoomContext} from '../context/RoomContext';
// headless ui menu
import { Menu} from "@headlessui/react";
//icon
import { BsChevronBarDown } from "react-icons/bs";

//list
const lis =[
  {name :'0 Child'},
  {name :'1 Child'},
  {name :'2 Children'},
  {name :'3 Children'},
  {name :'4 Children'},
]

const KidsDropdown = () => {
  const {child, setChild} = useContext(RoomContext);
  return(
    <Menu as='div' className="w-full h-full bg-white relative">
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {child === '0 child' ? 'No child' : child}
        <BsChevronBarDown className='text-base text-accent-hover' />
      </Menu.Button>

      {/**items */}

      <Menu.Items as='ul' className="bg-white absolute w-full flex flex-col z-40">
        {lis.map((li, index) => {
          return(
            <Menu.Item
              onClick={() => setChild(li.name)}
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

export default KidsDropdown;
