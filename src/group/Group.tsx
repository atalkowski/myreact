import React, { useState } from 'react'
import useFetch from '../useFetch.tsx';
import { useParams, useNavigate } from 'react-router-dom';
import './Group.css';

const Group = () => {
  const { groupId } = useParams();
  console.log(`Got groupId as ${groupId}`);
  const { data: group, isPending, error } = useFetch('http://localhost:8000/groups/' + groupId);

  const [name, setName] = useState("");
  const [span, setSpan] = useState("");

  const [savePending, setSavePending]  = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [initDone, setInitDone] = useState(false);

  const navigate = useNavigate();

  const handleCancel= (e) => {
    e.preventDefault();
    navigate("/groups");
  }

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(`Deleting group data ${group}`);
    fetch('http://localhost:8000/groups/' + groupId, {method: 'DELETE' })
      .then(() => {
        console.log("Deleted group " + groupId);
        setSavePending(false);
        navigate('/groups');
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

  const initialized = (group) => {
    if (!group) return false;
    if (!initDone) {
      setName(group.name);
      setSpan(group.span);
      setInitDone(true);
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavePending(true);
    if (initialized(group)) {
      group.name = name;
      group.span = span;
    } 
    console.log(`saving this group data ${group}`);
    fetch('http://localhost:8000/groups/' + groupId, {
      method: 'PUT', headers: { "Content-Type": "application/json" },
      body: JSON.stringify(group) 
    }).then(() => {
      console.log("Saved group");
      setSavePending(false);
      navigate('/groups');
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
        <h3> Edit Group Detail </h3>
        {error && <p color="red">{error}</p>}
        {saveError && <p color="red">{saveError}</p>}
        {isPending && <p>Loading group...</p>}
        {!isPending && initialized(group) && ( <div>
            <form onSubmit={handleSubmit}> 
              <table className="update" align="center"><tbody>
              <tr><th>Group ID</th><td><div> {group.id} <a href="/" onClick={handleDelete}>Delete this entry</a> </div>  
              </td></tr>
              <tr><th>Name  </th><td> <input type="text" value={name} 
                      required onChange={(e) => setName(e.target.value)}/>  </td></tr>
              <tr><th>Span  </th><td> <input type="text" value={span} 
                      required onChange={(e) => setSpan(e.target.value)}/>  </td></tr>
              <tr><th>
              { !savePending && !saveError && <div><button type="submit">Update Group</button></div> }
              { savePending  && !saveError && <div><button disabled>Saving Group...</button></div> }
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

export default Group;