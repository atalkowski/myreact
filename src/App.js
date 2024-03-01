import BlogPage from './v1/BlogPage.js';
import Counter from './v1/Counter.jsx';
import Home from './v1/Home.tsx';
import User from './v1/User.tsx';
import Navbar from './Navbar.js';
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
            <Route exact path="/" element={<Home/>}>       </Route>
            <Route path="/blogpage" element={<BlogPage />}></Route>
            <Route path="/counter"  element={<Counter />}> </Route>
            <Route exact path="/users/:userId" element={<User />} />
            <Route exact path="/user-create" element={<UserCreate />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
//}
//export default App;
 
