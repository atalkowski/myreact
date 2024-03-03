import React from 'react';
import { Link } from 'react-router-dom';
import IUser from './IUser';
import useState from 'react';

import '../App.css';

interface UserListProps {
  users: IUser[];
}

// function UserList {
 // const [searchTerm, setSearchTerm] = useState("");
const UserList: React.FC<UserListProps> = ({ users }) => {
 
  return (
    <>
      <div>
        <div>
          <h3>Users List</h3>
          <div>
            <Link to={"/user-create"}><button className="create">Add User</button></Link></div>
        </div>
        <div>
          <table text-align="center">
            <thead>
              <tr><th>Name</th><th>Email</th><th>Details</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <p>{user.name}</p>
                  </td>
                  <td>
                    <p>{user.email}</p>
                  </td>
                  <td>
                    <Link to={`/users/${user.id}`}>
                      View/Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserList;