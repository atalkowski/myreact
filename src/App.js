import BlogPage from './v1/BlogPage.js';
import Home from './v1/Home.tsx';
import User from './v1/User.tsx';
import UserCreate from './v1/UserCreate.tsx';
import Jobs from './job/Jobs.tsx';
import Job from './job/Job.tsx';
import JobCreate from './job/JobCreate.tsx';
import NotFound from './v1/NotFound.js';
import Navbar from './Navbar.js';
import MyWiki from './MyWiki.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My react demo app</h1>
        <Navbar />
        <div className="content>">
          <Routes>
            <Route exact path="/" element={<Home/>}       ></Route>
            <Route path="/blogpage" element={<BlogPage />}></Route>
            <Route exact path="/users" element={<Home/>}  ></Route>
            <Route exact path="/users/:userId" element={<User />} />
            <Route exact path="/user-create" element={<UserCreate />} />
            <Route exact path="/jobs" element={<Jobs/>}  ></Route>
            <Route exact path="/jobs/:jobId" element={<Job />} />
            <Route exact path="/job-create" element={<JobCreate />} />
            <Route exact path="/wiki" element={<MyWiki />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

 
