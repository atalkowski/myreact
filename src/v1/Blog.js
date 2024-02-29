import {useState} from 'react';
// Currently a test class - how do we manage forms.
const Blog = () => {
  const [title, setTitle] = useState("The same old story");
  const [body, setBody] = useState("Lorum ipsum corpus meum in fracto conbobulato et veritas sunt.");
  const [author, setAuthor] = useState("R J Bonfonte");
  const [id, setId] = useState(1);
  const [editMode, setEditMode] = useState("VIEW");
  // let edited = { "id": 0, "title" : "", "author":"", "body":""};
   

  const persistBlog = () => {
    console.log(`Persisting: UPDATE BLOG set title='${title}' etc ... where id = ${id}`);
  }

  const handleMode = (mode) => {
      switch (mode) {
        case "EDIT": 
         // Cannot do this .. edited is not available to populate the data on update 
         //    edited = copyblog(null, edited);
           break;
        case "UPDATE": 
           persistBlog();// save();  and if successful....     
           break;
        default: 
      }
      setEditMode(mode);
  }

  function isin(a, ...args) {
     for (const arg of args) {
      if (a === arg) return true;
     }
     return false;
  }

  return (
      <div>
       { !isin(editMode, "EDIT", "CREATE") && <div className="Blog">
        <h3>{title}</h3>
        <h4> ID: {id} Written by {author}</h4>
        <p>{body}</p>
        <button onClick={() => handleMode("EDIT")}>Edit</button>
        <button onClick={() => handleMode("DELETE")}>Delete</button>
        </div>
       }
       {editMode === "EDIT" &&
          <form className="BlogEdit"> 
           <br/>  <label>ID : {id}</label>
           <br/> <label>Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/></label>
           <br/> <label>Author: <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/></label>
           <br/> <label>Body: <input type="text" value={body} onChange={(e) => setBody(e.target.value)}/></label>
           <br/> <button onClick={() => handleMode("UPDATE")}>Update</button>
           <br/> <button onClick={() => handleMode("QUIT")}>Quit</button>
        </form>
       }
      </div>
  )
}

export default Blog;