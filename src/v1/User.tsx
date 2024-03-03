import React, { useState } from 'react'
import useFetch from './useFetch.tsx';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

const User = () => {
  const { userId } = useParams();
  console.log(`Got userId as ${userId}`);
  const { data: user, isPending, error } = useFetch('http://localhost:8000/users/' + userId);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [savePending, setSavePending]  = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [initDone, setInitDone] = useState(false);

  const navigate = useNavigate();

  const handleCancel= (e) => {
    e.preventDefault();
    navigate("/users");
  }

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(`Deleting user data ${user}`);
    fetch('http://localhost:8000/users/' + userId, {method: 'DELETE' })
      .then(() => {
        console.log("Deleted user " + userId);
        setSavePending(false);
        navigate('/users');
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

  const initialized = (user) => {
    if (!user) return false;
    if (!initDone) {
      setName(user.name);
      setEmail(user.email);
      setNumber(user.number);
      setInitDone(true);
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavePending(true);
    if (initialized(user)) {
      user.name = name;
      user.email = email;
      user.number = number;
    } 
    console.log(`saving this user data ${user}`);
    fetch('http://localhost:8000/users/' + userId, {
      method: 'PUT', headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user) 
    }).then(() => {
      console.log("Saved user");
      setSavePending(false);
      navigate('/users');
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
         <h3> Edit User Detail </h3>
        {error && <p color="red">{error}</p>}
        {saveError && <p color="red">{saveError}</p>}
        {isPending && <p>Loading user...</p>}
        {!isPending && initialized(user) && ( <div>
            <form onSubmit={handleSubmit}> 
              <table align="center"><tbody>
              <tr><td>User ID</td><td><div> {user.id} <a href="#" onClick={handleDelete}>Delete this entry</a> </div>  
              </td></tr>
              <tr><td>Name  </td><td> <label><input type="text" value={name} 
                      required onChange={(e) => setName(e.target.value)}/>  </label></td></tr>
              <tr><td>Email </td><td> <label><input type="text" value={email} 
                      required onChange={(e) => setEmail(e.target.value)}/> </label></td></tr>
              <tr><td>Number </td><td> <label> <input type="text" required value={number} 
                   onChange={(e) => setNumber(e.target.value)}/> </label></td></tr>
              <tr><td>
              { !savePending && !saveError && <div><button type="submit">Update User</button></div> }
              { savePending  && !saveError && <div><button disabled>Saving User...</button></div> }
              </td><td>
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

export default User;