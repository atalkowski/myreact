
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserCreate = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault(); 
    navigate("/users");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, number };
    setIsPending(true);
    fetch('http://localhost:8000/users', {
      method: 'POST', headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser) 
    }).then(() => {
      console.log("Saved user");
      setIsPending(false);
      navigate('/users');
    })
    .catch(err => {
      if (err.name === 'AbortError') {
          console.log(`Save aborted: ${error}`);
      } else {
          setIsPending(false);
          setError(err.message);
      }
    });
  }

  return (
    <React.Fragment>
    <div>
      <h3>Create New User</h3>
      <form className="create" onSubmit={handleSubmit}> 
        <label>Name:  
           <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>Email:  
          <input type="text"  required value={email}  onChange={(e) => setEmail(e.target.value)}/>  
        </label>
        <label>Number:
           <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
        </label>
        { !isPending && !error && <button>Add User</button> }
        { isPending && !error && <button disabled>Saving User...</button> }
        { error && <div className="error">{error} </div>}
        <button onClick={handleCancel}>Cancel</button>
        </form>
    </div>
  </React.Fragment>
  );
}

export default UserCreate;