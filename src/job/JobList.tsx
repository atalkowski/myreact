import React from 'react';
import { Link } from 'react-router-dom';
import IJob from './IJob';
import './Job.css';

interface JobListProps {
  jobs: IJob[];
}

/*
 {
  "jobs": [ {
     "id": "number",
     "company": string,  
     "title": "string",
     "location": "string",
     "salary": "string",
     "link": "string",
     "lingtype": "string",
     "status": "string",
     "applydate": "string",
     "workat": "string" }
   ]
  }
*/

const JobList: React.FC<JobListProps> = ({ jobs }) => {
 
  return (
    <>
      <div>
        <div>          
          <h3>Jobs List</h3>
          <div><Link to={"/job-create"}><button className="create">Add Job</button></Link></div>
        </div>
        <div>
          <table className="maintab" align="center" text-align="left">
            <thead>
              <tr>
                <th>Company</th>
                <th>Job Title</th>
                <th>Location</th>
                <th>Salary</th>
                <th>Applied</th>
                <th>Work at loc</th>
                <th>Id</th>
              </tr> 
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.company}</td>
                  <td>{job.title}</td>
                  <td>{job.location}</td>
                  <td>{job.salary}</td>
                  <td>{job.applied}</td>
                  <td>{job.workat}</td>
                  <td><Link to={`/jobs/${job.id}`}>
                      Edit
                      </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default JobList;