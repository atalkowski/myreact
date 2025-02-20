import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
       <table width="50"><tbody>
      <tr><td><Link to="/">Users</Link></td></tr>
      <tr><td><Link to="/groups">Groups</Link></td></tr>
      <tr><td><Link to="/jobs">Jobs</Link></td></tr>
      <tr><td><Link to="/wiki">My Wiki</Link></td></tr>
      </tbody>
      </table>
     </nav>
  );
};

export default Navbar;