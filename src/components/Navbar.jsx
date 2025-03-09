import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="logo"><img src='../assets/images/T E 0 LOGO.png' alt='logo'/></div>
      <div className="nav-links">
        <a href="/new">New Arrivals</a>
        <a href="/sales">Sales</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
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