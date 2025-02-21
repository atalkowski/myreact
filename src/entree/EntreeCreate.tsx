import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../useFetch.tsx'
import '../App.css';

const EntreeCreate = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [group, setGroup] = useState('');
  
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // Load the groups needed to build the drop down:
  const { data: groups, isPending: pending2, error: error2 } = useFetch('http://localhost:8000/groups');

  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault(); 
    navigate("/entrees");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntree = { title, url, group };

    setIsPending(true);
    fetch('http://localhost:8000/entrees', {
      method: 'POST', headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEntree) 
    }).then(() => {
      console.log("Saved entree");
      setIsPending(false);
      navigate('/entrees');
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
      <h3>Create New Entree</h3>
      <form onSubmit={handleSubmit}> 
        <table className="update"  align="center">
          <tr><th>Title</th><td><input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/></td></tr>
          <tr><th>Url</th><td><input type="text" required value={url} onChange={(e) => setUrl(e.target.value)}/></td></tr>
          <tr><th>Group</th><td>
            { !pending2 && !error2 &&          
              <select id="group-select" value={group} onChange={(e) => setGroup(e.target.value)}>
                <option value="" disabled>Select one</option>
                 {groups.map((grp) => (
                     <option key={grp.id} value={grp.id}>
                      {grp.name}
                    </option>
                 ))}
               </select>  
            }
            </td>
          </tr>
         <tr><th>
          { !pending2 && !isPending && !error && <button>Add Entree</button> }
          { isPending && !error && <button disabled>Saving Entry</button> }
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

export default EntreeCreate;
