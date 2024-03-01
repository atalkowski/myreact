
import React, { useState } from 'react'

const UserCreate = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  
  return (
    <React.Fragment>
    <div>
      <form className="create"> 
        <label>Name:  
           <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>Email:  
          <input type="text"           value={email}  onChange={(e) => setEmail(e.target.value)}/>  
        </label>
        <label>Number:
           <input type="text"          value={number} onChange={(e) => setNumber(e.target.value)}/>
        </label>
        <button>Add User</button>
        </form>
    </div>
  </React.Fragment>
  );
}

export default UserCreate;