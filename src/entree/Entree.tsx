import React, { useState } from 'react'
import useFetch from '../useFetch.tsx';

import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';


const Entree = () => {
  const { entreeId } = useParams();
  console.log(`Got entreeId as ${entreeId}`);
  // Load the entree
  const { data: entree, isPending, error } = useFetch('http://localhost:8000/entrees/' + entreeId);
  // Load the groups needed to build the drop down:
  const { data: groups, isPending: pending2, error: error2 } = useFetch('http://localhost:8000/groups');

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [group, setGroup] = useState("");

  const [savePending, setSavePending]  = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [initDone, setInitDone] = useState(false);

  const navigate = useNavigate();

  const handleCancel= (e) => {
    e.preventDefault();
    navigate("/entrees");
  }

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(`Deleting entree data ${entree}`);
    fetch('http://localhost:8000/entrees/' + entreeId, {method: 'DELETE' })
      .then(() => {
        console.log("Deleted entree " + entreeId);
        setSavePending(false);
        navigate('/entrees');
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log(`Save aborted: ${error}`);
        } else {
          setSavePending(false);
          setSaveError(err.message);
        }
      });
  }

  const initialized = (entree) => {
    if (!entree) return false;
    if (!initDone) {
      setTitle(entree.title);
      setUrl(entree.url);
      setGroup(entree.group);
      setInitDone(true);
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavePending(true);
    if (initialized(entree)) {
      entree.title = title;
      entree.url = url;
      entree.group = group;
    } 
    console.log(`saving this entree data ${entree}`);
    fetch('http://localhost:8000/entrees/' + entreeId, {
      method: 'PUT', headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entree) 
    }).then(() => {
      console.log("Saved entree");
      setSavePending(false);
      navigate('/entrees');
    })
    .catch(err => {
      if (err.name === 'AbortError') {
          console.log(`Save aborted: ${error}`);
      } else {
          setSavePending(false);
          setSaveError(err.message);
      }
    });
  }
  
  return (
    <React.Fragment>
    <div>
        <h3> Edit Entree Detail </h3>
        {error && <p color="red">{error}</p>}
        {error2 && <p color="red">{error2}</p>}
        {saveError && <p color="red">{saveError}</p>}
        {isPending && <p>Loading entree...</p>}
        {pending2 && <p>Loading groups...</p>}
        {!isPending && !pending2 && initialized(entree) && ( <div>
            <form onSubmit={handleSubmit}> 
              <table className="update" align="center"><tbody>
              <tr><th>Entree ID</th><td><div> {entree.id} <a href="/" onClick={handleDelete}>Delete this entry</a> </div>  
              </td></tr>
              <tr><th>Title</th><td> <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)}/>  </td></tr>
              <tr><th>Url</th><td> <input type="text" value={url} required onChange={(e) => setUrl(e.target.value)}/>  </td></tr>
              <tr><th>Group</th><td>
                <select id="group-select" value={group} onChange={(e) => setGroup(e.target.value)}>
                <option value="" disabled>Select one</option>
                 {groups.map((grp) => (
                     <option key={grp.id} value={grp.id}>
                      {grp.name}
                    </option>
                 ))}
                 </select>
                </td>
              </tr>
              <tr><th>
              { !savePending && !saveError && <div><button type="submit">Update Entree</button></div> }
              { savePending  && !saveError && <div><button disabled>Saving Entree...</button></div> }
              </th><td>
              <div>&nbsp; <button onClick={handleCancel}>Cancel</button></div></td></tr>
              </tbody>
              </table>
             </form>
            </div> )
        }
    </div>
  </React.Fragment>
  );
}

export default Entree;
