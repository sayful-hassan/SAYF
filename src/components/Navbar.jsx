import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ activeTab }) => {
  return (
    <nav className="main-nav">
      <div className="logo"><img src='../assets/images/D4.jpg' alt='logo'/></div>
      <div className="nav-links">
        <Link 
          to="/new" 
          className={activeTab === 'New Arrivals' ? 'active' : ''}
        >
          New Arrivals
        </Link>
        <Link 
          to="/sales" 
          className={activeTab === 'Sales' ? 'active' : ''}
        >
          Sales
        </Link>
        <Link 
          to="/men" 
          className={activeTab === 'Men' ? 'active' : ''}
        >
          Men
        </Link>
        <Link 
          to="/women" 
          className={activeTab === 'Women' ? 'active' : ''}
        >
          Women
        </Link>
        <Link 
          to="/kids" 
          className={activeTab === 'Kids' ? 'active' : ''}
        >
          Kids
        </Link>
      </div>
      <div className="nav-icons">
        <input type="text" placeholder="Search" />
        <button className="wishlist">♥</button>
        <button className="cart">🛒</button>
      </div>
    </nav>
  );
};

export default Navbar;