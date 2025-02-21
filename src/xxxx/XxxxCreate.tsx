import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const XxxxCreate = () => {
  const [ffff, setFfff] = useState('');
  
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault(); 
    navigate("/xxxxs");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newXxxx = { 
      ffff //,
    };
    setIsPending(true);
    fetch('http://localhost:8000/xxxxs', {
      method: 'POST', headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newXxxx) 
    }).then(() => {
      console.log("Saved xxxx");
      setIsPending(false);
      navigate('/xxxxs');
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
      <h3>Create New Xxxx</h3>
      <form onSubmit={handleSubmit}> 
        <table className="update"  align="center">
          <tr><th>Ffff</th><td><input type="text" required value={ffff} onChange={(e) => setFfff(e.target.value)}/></td></tr>
        <tr><th>
          { !isPending && !error && <button>Add Xxxx</button> }
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

export default XxxxCreate;
