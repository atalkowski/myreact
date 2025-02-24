import React from 'react';
import UserList from './UserList.tsx';
import useFetch from '../useFetch.tsx';
import "../App.css";
const Users = () => {
    const { data: users, isPending, error } = useFetch('http://localhost:8000/users')

    return (
      <div>
        {error && <p>{error}</p>}
        {isPending && <p>Loading users...</p>}
        {users && <UserList users={users} />}
      </div>
    );
};

export default Users;
