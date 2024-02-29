const BlogList = ({ blogs, title}) => {
  const handleDelete = (id) => {
    console.log("This handleDelete would be passed as a PROPERTY function from the parent");
    console.log("Nothing to see here - it was decomissioned when we started updating db.json");
  }

  // <button onClick={() => handleDelete(blog.id)}>Delete blog (pretend)</button>

  return (
      <div className="blog-list">
        <h2>{ title }</h2>
        {blogs.map( (blog) => (
          <div className="blog-preview" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>Written by {blog.author}</p>
          </div>
        ) )        
        }
      </div>     
    );
}
export default BlogList;
// Note the handleDelete function is passed down from the parent 
