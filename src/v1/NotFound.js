import { Link } from "react-router-dom";
import "../App.css";

const NotFound = () => {
  return (
      <div className="not-found">
        <h3>Page not found!</h3>
        <Link to="/">Back to the homepage.</Link>
      </div> 
  );
}

export default NotFound;