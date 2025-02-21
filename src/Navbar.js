import React from "react";
import { Link } from "react-router-dom";

//       <tr><td><Link to="/">Users</Link></td></tr>

const Navbar = () => {
  return (
    <nav className="navbar">
       <table width="50%">
       <tr>
        <td><Link to="/groups">Groups</Link></td>
        <td><Link to="/entrees">Links</Link></td>
        <td><Link to="/jobs">Jobs</Link></td>
        { false && <td><Link to="/wiki">My Wiki</Link></td> }
      </tr>
      </table>
     </nav>
  );
};

export default Navbar;