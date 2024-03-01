import React from 'react'
import useFetch from './useFetch.tsx';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  console.log(`Got userId as ${userId}`);
  const { data: user, isPending, error } = useFetch('http://localhost:8000/users/' + userId);

  const setName = (value: String) => { 
    console.log(`Setting name = ${value}`);
    user.name = value; 
  }
  const setEmail = (value: String) => { user.email = value; }
  const setNumber = (value: String) => { user.number = value; }

  return (
    <React.Fragment>
    <div>
        {error && <p color="red">{error}</p>}
        {isPending && <p>Loading user...</p>}
        {user && <div>
            <form className="NormalEdit"> 
             { user.id && <label>User ID : {user.id}</label> }
             { !user.id && <label> New User</label>}
             <br/> <label>Name:   <input type="text" value={user.name}   onChange={(e) => setName(e.target.value)}/>   </label>
             <br/> <label>Email:  <input type="text" value={user.email}  onChange={(e) => setEmail(e.target.value)}/>  </label>
             <br/> <label>Number: <input type="text" value={user.number} onChange={(e) => setNumber(e.target.value)}/> </label>
             </form>
            </div>
        }
    </div>
  </React.Fragment>
  );
}

export default User;