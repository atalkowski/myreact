import React from 'react';
import JobList from './JobList.tsx';
import useFetch from '../useFetch.tsx';
import './Job.css';

const Jobs = () => {
    const { data: jobs, isPending, error } = useFetch('http://localhost:8000/jobs')

    return (
      <div>
        {error && <p>{error}</p>}
        {isPending && <p>Loading jobs...</p>}
        {jobs && <JobList jobs={jobs} />}
      </div>
    );
};

export default Jobs;
