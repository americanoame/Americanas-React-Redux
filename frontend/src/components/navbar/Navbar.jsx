import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import img1 from '../../assets/americanas.png';
import './navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const totalCartQuantity = useSelector((state) => state.cart.cartItems.reduce((total, item) => total + item.cartQuantity, 0));

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`e-commerce-header main-nav ${scrolled ? 'sticky-nav' : ''}`}>
      <div className="e-commerce-header-content">
        <div className="e-commerce-header-left">
          <a href="/" className="header-link">
            <img className="e-commerce-logo" src={img1} alt="" />
          </a>
        </div>

        <div className="e-commerce-header-right">
          <a className="header-link" href="/cart">
            <i className="fas fa-shopping-bag cart-icon"></i>
            <div className="cart-quantity">{totalCartQuantity}</div>
          </a>
          <a className="wishlist-link header-link" href="/wishlist">
            <i className="fas fa-heart wishlist-icon"></i>
            <div className="wishlist-quantity">1</div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
