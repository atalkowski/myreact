const BlogList = ({ blogs, title}) => {
  const handleDelete = (id) => {
    console.log("This handleDelete would be passed as a PROPERTY function from the parent");
    console.log("Nothing to see here - it was decomissioned when we started updating db.json");
  }

  // <button onClick={() => handleDelete(blog.id)}>Delete blog (pretend)</button>
  const snippet = (s) => {
    console.log("making snippet " + s);
    if (s.length > 50) {
      return s.substr(1, 48) + "...";
    }
    return s;
  }
  return (
      <div className="blog-list">
        <h3>Blog list</h3>
        {blogs.map( (blog) => (
          <div className="blog-preview" key={blog.id}>
            <h4>{blog.title} : by {blog.author}</h4>
            <p>{snippet(blog.body)}</p>
          </div>
        ) )        
        }
      </div>     
    );
}
export default BlogList;
// Note the handleDelete function is passed down from the parent 
