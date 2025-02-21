import React from 'react';
import { Link } from 'react-router-dom';
import IXxxx from './IXxxx';
import '../App.css';

interface XxxxListProps {
  xxxxs: IXxxx[];
}

/*
  Xxxx {
       "id": number;
       "ffff": string;  
     }
*/

const XxxxList: React.FC<XxxxListProps> = ({ xxxxs }) => {
 
  return (
    <>
      <div>
        <div>          
          <h3>Xxxxs List</h3>
          <div><Link to={"/xxxx-create"}><button className="create">Add Xxxx</button></Link></div>
        </div>
        <div>
          <table className="maintab" align="center" text-align="left">
            <thead>
              <tr>
                <th>Xxxx</th>
                <th>Id</th>
              </tr> 
            </thead>
            <tbody>
              {xxxxs.map((xxxx) => (
                <tr key={xxxx.id}>
                  <td>{xxxx.ffff}</td>
                  <td><Link to={`/xxxxs/${xxxx.id}`}>
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

export default XxxxList;
