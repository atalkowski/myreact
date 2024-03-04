import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

/*
   I used the NavLink in the first version - as shown below.
   It is better for updating the page without sending a request back to the server.
        <tr>
        <td width="33%"> <NavLink to="/">Home</NavLink></td>
        <td width="33%"> <NavLink to="/blogpage">Blogs</NavLink></td>
        <td width="33%"> <NavLink to="/counter">Counter</NavLink></td>
        </tr>

*/
const wid = "20%";

const Navbar = () => {
  return (
    <nav className="navbar">
      <table width="100%"><tbody>
        <tr>
        <td width={wid}> <Link to="/">Users</Link></td>
        <td width={wid}> <Link to="/blogpage">Blogs</Link></td>
        <td width={wid}> <NavLink to="/counter">Counter</NavLink></td>
        <td width={wid}> <Link to="/wiki">My Wiki</Link></td>
        </tr>
      </tbody></table>
    </nav>
  );
};

export default Navbar;