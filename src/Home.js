import { useState } from 'react'

const Home = () => {
const [blogs, setBlogs] = useState([
    { title: 'My Wew Recipes Website', body: 'Hey Queens...', author: 'Ken', id: 1 },
    { title: 'Welcome party!', body: 'Bring your won air fried food...', author: 'Lumie', id: 2 },
    { title: 'Top Air Fryer Tips', body: 'Here are some of the top tips...', author: 'Ken', id: 3 }
  ])

    return ( 
        <div className="home">
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
 
export default Home;