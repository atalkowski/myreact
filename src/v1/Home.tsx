import React from 'react';
import UserList from './UserList.tsx';
import useFetch from './useFetch.tsx';

const Home = () => {
    const { data: users, isPending, error } = useFetch('http://localhost:8000/users')

    return (
      <React.Fragment>
        <div>
            {error && <p color="red">{error}</p>}
            {isPending && <p>Loading users...</p>}
            {users && <UserList users={users} name={''} />}
        </div>
      </React.Fragment>
    );
};

export default Home