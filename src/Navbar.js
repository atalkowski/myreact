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
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Navigation here</h2>
      <table><tbody>
        <tr>
        <td width="33%"> <Link to="/">Home</Link></td>
        <td width="33%"> <Link to="/blogpage">Blogs</Link></td>
        <td width="33%"> <NavLink to="/counter">Counter</NavLink></td>
        </tr>
      </tbody></table>
    </nav>
  );
};

export default Navbar;