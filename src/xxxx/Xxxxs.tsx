import React from 'react';
import XxxxList from './XxxxList.tsx';
import useFetch from '../useFetch.tsx';
import '../App.css';

const Xxxxs = () => {
    const { data: xxxxs, isPending, error } = useFetch('http://localhost:8000/xxxxs')

    return (
      <div>
        {error && <p>{error}</p>}
        {isPending && <p>Loading xxxxs...</p>}
        {xxxxs && <XxxxList xxxxs={xxxxs} />}
      </div>
    );
};

export default Xxxxs;
