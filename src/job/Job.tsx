import React, { useState } from 'react'
import useFetch from '../useFetch.tsx';
import { useParams, useNavigate } from 'react-router-dom';
import './Job.css';

const Job = () => {
  const { jobId } = useParams();
  console.log(`Got jobId as ${jobId}`);
  const { data: job, isPending, error } = useFetch('http://localhost:8000/jobs/' + jobId);

  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [workat, setWorkat] = useState("");
  const [applied, setApplied] = useState("");
  const [salary, setSalary] = useState("");

  const [savePending, setSavePending]  = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [initDone, setInitDone] = useState(false);

  const navigate = useNavigate();

  const handleCancel= (e) => {
    e.preventDefault();
    navigate("/jobs");
  }

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(`Deleting job data ${job}`);
    fetch('http://localhost:8000/jobs/' + jobId, {method: 'DELETE' })
      .then(() => {
        console.log("Deleted job " + jobId);
        setSavePending(false);
        navigate('/jobs');
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log(`Save aborted: ${error}`);
        } else {
          setSavePending(false);
          setSaveError(err.message);
        }
      });
  }

  const initialized = (job) => {
    if (!job) return false;
    if (!initDone) {
      setCompany(job.company);
      setTitle(job.title);
      setLocation(job.location);
      setSalary(job.salary);
      setWorkat(job.workat);
      setApplied(job.applied);
      setInitDone(true);
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavePending(true);
    if (initialized(job)) {
      job.company = company;
      job.title = title;
      job.location = location;
      job.salary = salary;
      job.applied = applied;
      job.workat = workat;
    } 
    console.log(`saving this job data ${job}`);
    fetch('http://localhost:8000/jobs/' + jobId, {
      method: 'PUT', headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job) 
    }).then(() => {
      console.log("Saved job");
      setSavePending(false);
      navigate('/jobs');
    })
    .catch(err => {
      if (err.name === 'AbortError') {
          console.log(`Save aborted: ${error}`);
      } else {
          setSavePending(false);
          setSaveError(err.message);
      }
    });
  }

  return (
    <React.Fragment>
    <div>
        <h3> Edit Job Detail </h3>
        {error && <p color="red">{error}</p>}
        {saveError && <p color="red">{saveError}</p>}
        {isPending && <p>Loading job...</p>}
        {!isPending && initialized(job) && ( <div>
            <form onSubmit={handleSubmit}> 
              <table className="update" align="center"><tbody>
              <tr><th>User ID</th><td><div> {job.id} <a href="/" onClick={handleDelete}>Delete this entry</a> </div>  
              </td></tr>
              <tr><th>Company  </th><td> <input type="text" value={company} 
                      required onChange={(e) => setCompany(e.target.value)}/>  </td></tr>
              <tr><th>Job Title  </th><td> <input type="text" value={title} 
                      required onChange={(e) => setTitle(e.target.value)}/>  </td></tr>
              <tr><th>Location  </th><td> <input type="text" value={location} 
                      required onChange={(e) => setLocation(e.target.value)}/>  </td></tr>
              <tr><th>Salary  </th><td> <input type="text" value={salary} 
                      required onChange={(e) => setSalary(e.target.value)}/>  </td></tr>
              <tr><th>Work at location</th><td> <input type="text" value={workat} 
                      required onChange={(e) => setWorkat(e.target.value)}/>  </td></tr>
              <tr><th>Applied  </th><td> <input type="text" value={applied} 
                      required onChange={(e) => setApplied(e.target.value)}/>  </td></tr>

              <tr><th>
              { !savePending && !saveError && <div><button type="submit">Update Job</button></div> }
              { savePending  && !saveError && <div><button disabled>Saving Job...</button></div> }
              </th><td>
              <div>&nbsp; <button onClick={handleCancel}>Cancel</button></div></td></tr>
              </tbody>
              </table>
             </form>
            </div> )
        }
    </div>
  </React.Fragment>
  );
}

export default Job;