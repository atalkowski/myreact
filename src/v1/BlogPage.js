
import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch.tsx';

const BlogPage = () => {

  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
  return (
    <React.Fragment> 
    <div className="blogpage">
        {error && <p color="red">{error}</p>}
        {isPending && <div>Loading...</div> }
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
     </React.Fragment>); 
  
}
export default BlogPage;