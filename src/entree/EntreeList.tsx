import React from 'react';
import { Link } from 'react-router-dom';
import IEntree from './IEntree';
import IGroup from '../group/IGroup';

import '../App.css';

interface EntreeListProps {
  entrees: IEntree[];
  groups: IGroup[];
}

/*
  Entree {
       "id": number;
       "title": string;  
       "url": string;  
       "group": string;  
     }
*/

const EntreeList: React.FC<EntreeListProps> = ({ entrees, groups }) => {
   
  const groupsById = new Map(groups.map(obj => [obj.id, obj]));

  function getGroup(id) {
    var group = groupsById.get(id);
    if (group) return group.name;
    return "-";
  }

  function showLink(url: string) {
     if (url.length > 50) {
       url = url.substring(0,47) + "...";
     }
     return encodeURI(url);
  }

  return (
    <>
      <div>
        <div>          
          <h3>My Links List</h3>
          <div><Link to={"/entree-create"}><button className="create">Add New Link</button></Link>
               &nbsp;&nbsp;&nbsp;&nbsp;
               <Link to={"/group-create"}><button className="create">Add New Group</button></Link></div>
        </div>
        <div>
          <table className="maintab" align="center" text-align="left">
            <thead>
              <tr>
                <th>Group</th>
                <th>Title (link name)</th>
                <th>Url</th>
              </tr> 
            </thead>
            <tbody>
              {entrees.map((entree) => (
                <tr key={entree.id}>
                  <td>{getGroup(entree.group)}</td>
                  <td><a href={entree.url} target="_blank" rel="noreferrer">{entree.title}</a>
                  </td>
                  <td>
                    <a href={entree.url} target="_blank" rel="noreferrer">{showLink(entree.url)}</a></td>
                  <td><Link to={`/entrees/${entree.id}`}>
                      Edit
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

export default EntreeList;
