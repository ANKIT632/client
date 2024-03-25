import React, { useCallback, useState } from 'react'

const Lobby = () => {
 const [email,setEmail]=useState("");
 const [room,setRoom]=useState(" ");

 const handleSubmitForm=useCallback((e)=>{
  e.preventDefault();

 },[email,room]);

  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor='email'>Email ID</label> 
        <input type='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter email'/>

        <br/>

        <label htmlFor='room'>room ID</label> 
        <input type='room' id='room' value={room} onChange={(e)=>setRoom(e.target.value)} placeholder='Enter room Id'/>
      </form>
    </div>
  )
}

export default Lobby