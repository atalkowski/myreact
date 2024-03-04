import BlogPage from './v1/BlogPage.js';
import Counter from './v1/Counter.jsx';
import Home from './v1/Home.tsx';
import User from './v1/User.tsx';
import NotFound from './v1/NotFound.js';
import Navbar from './Navbar.js';
import MyWiki from './MyWiki.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import UserCreate from './v1/UserCreate.tsx';

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
            <Route path="/counter"  element={<Counter />} ></Route>
            <Route exact path="/users" element={<Home/>}  ></Route>
            <Route exact path="/users/:userId" element={<User />} />
            <Route exact path="/user-create" element={<UserCreate />} />
            <Route exact path="/wiki" element={<MyWiki />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

 
