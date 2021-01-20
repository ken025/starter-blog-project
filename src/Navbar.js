import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h1>AIR FRYER RECIPES BLOG</h1>
        <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/create' id="nav-button">New Article</Link>
        </div>
        </nav>
     );
}
 
export default Navbar;