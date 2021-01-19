import { useState } from 'react'

const Home = () => {
    const [name, setName] = useState('ken')

    const handleClick = (e) => {
        setName("new");
      }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;