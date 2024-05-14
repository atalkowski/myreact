import React from 'react';
import UserList from './UserList.tsx';
import useFetch from '../useFetch.tsx';
import "../App.css";
const Home = () => {
    const { data: users, isPending, error } = useFetch('http://localhost:8000/users')

    return (
      <div>
        {error && <p>{error}</p>}
        {isPending && <p>Loading users...</p>}
        {users && <UserList users={users} />}
      </div>
    );
};

export default Home;

/*
Version 1:
        {users && 
            <div className="userList">
              {users.map((user) => (
                <div className="userItem" key={user.id}>
                   Title : {user.name}
                </div>
              ))}
            </div>                  
        }

Version 2:
      <React.Fragment>
      <div>
        {error && <p>{error}</p>}
        {isPending && <p>Loading users...</p>}
        {users && <UserList users={users} />}
      </div>
      </React.Fragment>
*/
