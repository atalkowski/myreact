import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Job.css';
const JobCreate = () => {
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [applied, setApplied] = useState('');
  const [workat, setWorkat] = useState('');
  const [salary, setSalary] = useState('');
  
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault(); 
    navigate("/jobs");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = { company, title, location, salary, applied, workat };
    setIsPending(true);
    fetch('http://localhost:8000/jobs', {
      method: 'POST', headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob) 
    }).then(() => {
      console.log("Saved job");
      setIsPending(false);
      navigate('/jobs');
    })
    .catch(err => {
      if (err.name === 'AbortError') {
          console.log(`Save aborted: ${error}`);
      } else {
          setIsPending(false);
          setError(err.message);
      }
    });
  }

  return (
    <React.Fragment>
    <div>
      <h3>Create New Job</h3>
      <form onSubmit={handleSubmit}> 
        <table className="update"  align="center">
          <tr><th>Company</th>
          <td><input type="text" required value={company} onChange={(e) => setCompany(e.target.value)}/></td>
          </tr>
        <tr><th>Title</th><td> 
          <input type="text"  required value={title}  onChange={(e) => setTitle(e.target.value)}/>  
        </td></tr>
        <tr><th>Location</th><td>
           <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}/>
        </td></tr>
        <tr><th>Salary</th><td>
           <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)}/>
        </td></tr>
        <tr><th>Applied date</th><td>
           <input type="text" value={applied} onChange={(e) => setApplied(e.target.value)}/>
        </td></tr>
        <tr><th>Work at loc</th><td>
           <input type="text" value={workat} onChange={(e) => setWorkat(e.target.value)}/>
        </td></tr>

        <tr><th>
          { !isPending && !error && <button>Add Job</button> }
          { isPending && !error && <button disabled>Saving User...</button> }
        </th><td>
          { error && <div className="error">{error} </div>}
          <button onClick={handleCancel}>Cancel</button>
        </td></tr>
        </table>
        </form>
    </div>
  </React.Fragment>
  );
}

export default JobCreate;