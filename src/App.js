import Home from './Home.tsx';

import Users from './v1/Users.tsx';
import User from './v1/User.tsx';
import UserCreate from './v1/UserCreate.tsx';

import Jobs from './job/Jobs.tsx';
import Job from './job/Job.tsx';
import JobCreate from './job/JobCreate.tsx';

import Groups from './group/Groups.tsx';
import Group from './group/Group.tsx';
import GroupCreate from './group/GroupCreate.tsx';

import Entrees from './entree/Entrees.tsx';
import Entree from './entree/Entree.tsx';
import EntreeCreate from './entree/EntreeCreate.tsx';

import NotFound from './v1/NotFound.js';
import MyWiki from './MyWiki.jsx';

import MyTabBar from './MyTabBar.tsx'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App2.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My Personal Notes - Demo</h1>
        <table><tbody>
          <tr><td valign="top" width="100%">
            <MyTabBar />
            </td></tr>
          <tr><td>
            <div className="content>">
            <Routes>
              <Route exact path="/" element={<Entrees/>}></Route>
              <Route exact path="/home" element={<Home/>}></Route>

              <Route exact path="/users" element={<Users/>}  ></Route>
              <Route exact path="/users/:userId" element={<User />} />
              <Route exact path="/user-create" element={<UserCreate />} />

              <Route exact path="/groups" element={<Groups/>}  ></Route>
              <Route exact path="/groups/:groupId" element={<Group />} />
              <Route exact path="/group-create" element={<GroupCreate />} />

              <Route exact path="/entrees" element={<Entrees/>}  ></Route>
              <Route exact path="/entrees/:entreeId" element={<Entree />} />
              <Route exact path="/entree-create" element={<EntreeCreate />} />

              <Route exact path="/jobs" element={<Jobs/>}  ></Route>
              <Route exact path="/jobs/:jobId" element={<Job />} />
              <Route exact path="/job-create" element={<JobCreate />} />

              <Route exact path="/wiki" element={<MyWiki />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </div>
            </td>
          </tr>
        </tbody>
        </table>

      </div>
    </Router>
  );
}

export default App;

 
