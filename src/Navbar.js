import { link } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>TunAng Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create"  >New Blog</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;