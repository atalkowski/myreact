import { NavLink } from 'react-router-dom';

const MyWiki = () => {
  return (
    <>
    <h3>WIKI page link</h3>
    <p>The wiki page is a collection of mostly static content that will be displayed in a separate page. 
      <ul>
        <li>Click here to  <a href="wiki/index.html" target="_blank">Open WIKI in new page</a></li>
      </ul>
    </p>
    </>
  )
};

export default MyWiki;