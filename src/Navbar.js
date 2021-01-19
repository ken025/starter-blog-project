const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h1>AIR FRYER RECIPES BLOG</h1>
        <div className="links">
        <a href='/'>Home</a>
        <a href='/create' id="nav-button">New Article</a>
        </div>
        </nav>
     );
}
 
export default Navbar;