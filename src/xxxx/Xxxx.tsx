import React, { useState } from 'react'
import useFetch from '../useFetch.tsx';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

const Xxxx = () => {
  const { xxxxId } = useParams();
  console.log(`Got xxxxId as ${xxxxId}`);
  const { data: xxxx, isPending, error } = useFetch('http://localhost:8000/xxxxs/' + xxxxId);

  const [ffff, setFfff] = useState("");

  const [savePending, setSavePending]  = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [initDone, setInitDone] = useState(false);

  const navigate = useNavigate();

  const handleCancel= (e) => {
    e.preventDefault();
    navigate("/xxxxs");
  }

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(`Deleting xxxx data ${xxxx}`);
    fetch('http://localhost:8000/xxxxs/' + xxxxId, {method: 'DELETE' })
      .then(() => {
        console.log("Deleted xxxx " + xxxxId);
        setSavePending(false);
        navigate('/xxxxs');
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

  const initialized = (xxxx) => {
    if (!xxxx) return false;
    if (!initDone) {
      setFfff(xxxx.ffff);
      setInitDone(true);
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavePending(true);
    if (initialized(xxxx)) {
      xxxx.ffff = ffff;
    } 
    console.log(`saving this xxxx data ${xxxx}`);
    fetch('http://localhost:8000/xxxxs/' + xxxxId, {
      method: 'PUT', headers: { "Content-Type": "application/json" },
      body: JSON.stringify(xxxx) 
    }).then(() => {
      console.log("Saved xxxx");
      setSavePending(false);
      navigate('/xxxxs');
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
        <h3> Edit Xxxx Detail </h3>
        {error && <p color="red">{error}</p>}
        {saveError && <p color="red">{saveError}</p>}
        {isPending && <p>Loading xxxx...</p>}
        {!isPending && initialized(xxxx) && ( <div>
            <form onSubmit={handleSubmit}> 
              <table className="update" align="center"><tbody>
              <tr><th>Xxxx ID</th><td><div> {xxxx.id} <a href="/" onClick={handleDelete}>Delete this entry</a> </div>  
              </td></tr>
              <tr><th>Ffff</th><td> <input type="text" value={ffff} required onChange={(e) => setFfff(e.target.value)}/>  </td></tr>
              <tr><th>
              { !savePending && !saveError && <div><button type="submit">Update Xxxx</button></div> }
              { savePending  && !saveError && <div><button disabled>Saving Xxxx...</button></div> }
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

export default Xxxx;
