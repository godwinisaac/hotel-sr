import React, { createContext, useEffect, useState} from 'react';
// data
import { roomData } from "../data";

// create context
export const RoomContext = createContext ()



const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [guest, setGuest] = useState('1 Guest');
  const [child, setChild] = useState('0 child');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTotal(Number(guest[0]) + Number(child[0]));
  });
  

  const handleClick =(e) => {
    e.preventDefault();
    setLoading(true);
    // filter rooms based on total
    const newRooms = roomData.filter(room =>{
      return total <= room.maxPerson;
    });
    setTimeout(() => {
      setRooms(newRooms);
      setLoading(false);
    }, 3000);
    
  };
  
  
  
  return( 
    <RoomContext.Provider 
      value={{ rooms, guest, setGuest, child, setChild, handleClick, loading }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
