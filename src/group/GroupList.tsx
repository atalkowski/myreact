import React from 'react';
import { Link } from 'react-router-dom';
import IGroup from './IGroup';
import '../App.css';
import '../sortTool.tsx';
import sortData from '../sortTool.tsx';

interface GroupListProps {
  groups: IGroup[];
}

function makeSort(fld:string, asc: boolean) {
  return { field: fld, ascending: asc};
}
/*
 {
  "groups": [ {
     "id": "number",
     "name": string,  
     "span": "string" }
   ]
  }
*/

const GroupList: React.FC<GroupListProps> = ({ groups }) => {
  groups = sortData(groups, makeSort("name", true)) 
  return (
    <>
      <div>
        <div>          
          <h3>Groups List</h3>
          <div><Link to={"/group-create"}><button className="create">Add Group</button></Link></div>
        </div>
        <div>
          <table className="maintab" align="center" text-align="left">
            <thead>
              <tr>
                <th>Name</th>
                <th>Update</th>
              </tr> 
            </thead>
            <tbody>
              {groups.map((group) => (
                <tr key={group.id}>
                  <td>{group.name}</td>
                  <td><Link to={`/groups/${group.id}`}>
                      Edit/Delete
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

export default GroupList;