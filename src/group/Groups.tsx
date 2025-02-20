import React from 'react';
import GroupList from './GroupList.tsx';
import useFetch from '../useFetch.tsx';
import './Group.css';

const Groups = () => {
    const { data: groups, isPending, error } = useFetch('http://localhost:8000/groups')

    return (
      <div>
        {error && <p>{error}</p>}
        {isPending && <p>Loading groups...</p>}
        {groups && <GroupList groups={groups} />}
      </div>
    );
};

export default Groups;
