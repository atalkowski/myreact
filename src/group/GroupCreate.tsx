import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Group.css';
const GroupCreate = () => {
  const [name, setName] = useState('');
  const [span, setSpan] = useState('');
  
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault(); 
    navigate("/groups");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGroup = { name, span };
    setIsPending(true);
    fetch('http://localhost:8000/groups', {
      method: 'POST', headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGroup) 
    }).then(() => {
      console.log("Saved group");
      setIsPending(false);
      navigate('/groups');
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
      <h3>Create New Group</h3>
      <form onSubmit={handleSubmit}> 
        <table className="update"  align="center">
          <tr><th>Name</th>
          <td><input type="text" required value={name} onChange={(e) => setName(e.target.value)}/></td>
          </tr>
        <tr><th>Span</th><td> 
          <input type="text" required value={span}  onChange={(e) => setSpan(e.target.value)}/>  
        </td></tr>
        <tr><th>
          { !isPending && !error && <button>Add Group</button> }
          { isPending && !error && <button disabled>Saving User...</button> }
        </th><td>
          { error && <div className="error">{error} </div>}
          <button onClick={handleCancel}>Cancel</button>
        </td></tr>
        </table>
        </form>
    </div>
  </React.Fragment>
  );
}

export default GroupCreate;