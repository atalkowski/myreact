import React from 'react';
import EntreeList from './EntreeList.tsx';
import useFetch from '../useFetch.tsx';

import sortData from '../sortTool.tsx';

import '../App.css';

function makeSort(fld:string, asc: boolean) {
  return { field: fld, ascending: asc};
}

const Entrees = () => {
    const sort = makeSort("group", true);
    const { data: entrees, isPending: pending1, error } = useFetch('http://localhost:8000/entrees');
    const { data: groups, isPending: pending2, error: error2 } = useFetch('http://localhost:8000/groups');
    return (
      <div>
        {error && <p>{error}</p>}
        {pending1 && <p>Loading entrees...</p>}
        {error2 && <p>{error2}</p>}
        {pending2 && <p>Loading groups...</p>}
        {entrees && groups && <EntreeList entrees={sortData(entrees, sort)} groups={groups} />}
      </div>
    );
};

export default Entrees;
