const BlogList = ({blogs, title}) => {
    //destructure props directly
    // const blogs = props.blogs
    // const title = props.title

    return ( 
        <div className="blog-list">
            <h2 id="blog-list-title">All Blogs:</h2>
        {blogs.map(blog => (
            <div className="blog-preview" key={blog.id}>
                <h1>{blog.title}</h1>
                <h3> {blog.body} </h3>
                <p> Written by: {blog.author}</p>
             </div>
        ))}
        </div>
     );
}
 
export default BlogList;