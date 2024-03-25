import React, { createContext, useContext,useMemo } from "react";
import {io} from 'socket.io-client';


const SocketContext =createContext(null);

// custom hook
export const useSocket=()=>{
const socket=useContext(SocketContext);

return socket;
} 

export const SocketProvider=(props)=>{
    // only call once and return value
    // we use useMemo because if any change in props then SocketProvider are rerender
  const socket =useMemo(()=>io("localhost:8000"),[]);
  console.log("sp render");
  return(
  <SocketContext.Provider value={socket}>
  {props.children}
  </SocketContext.Provider>);
}