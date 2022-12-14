import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const menuList = ['메뉴1', '메뉴2', '메뉴3', '메뉴4'];
  const navigater = useNavigate();
  return (
    <div className="bar">
      <h1 onClick={navigater.bind(null, '/')}>No Leak</h1>
      <ul className="menu-list">
        {menuList.map((menu) => (
          <li key={menu}>{menu}</li> //key={menu}??
        ))}
      </ul>
      <div className="wallet-connect-btn">
        <FontAwesomeIcon icon={faWallet} className="wallet" />
        <div className="wallet">Connect</div>
      </div>
    </div>
  );
};

export default Navbar;
