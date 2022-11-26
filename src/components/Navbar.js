import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from '@mui/material/Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            CNU Secure
            {/* <image src='C:\Users\jmadd\OneDrive\Pictures\Screenshots\CPSC_CAPSTONE\Campus-Security\CSPC_Capstone\cnu-security\src\images\cnu_logo.png'/> */}

            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>

            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li>
            <Button 
             style={{
              top: "25px",
              color:"#fff",
              outline: "#fff",
              borderColor: 'white',
              backgroundColor: "transparent",
              padding: "8px 26px",
              fontSize: "14px"
          }}
            variant="outlined" className='btn-signIn'
            boarder href="/signin"
            >
            Sign in
          </Button>
             
            </li>
          </ul>
         

        </div>
      </nav>
    </>
  );
}

export default Navbar;