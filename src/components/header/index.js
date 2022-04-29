import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby";


import logo from '../../images/logo.svg';
import { motion, useCycle } from "framer-motion";


const Header = ({ siteTitle }) => {

  const sidebarVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
      transition: {
        ease: 'easeIn',
        stiffness: 10
      }
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: 'easeIn',
        stiffness: 10,
        when: 'beforeChildren',
        staggerChildren: 0.4
      }
    }
  }

  const navSidebarItemVariants = {
    hidden: {
      x: '100%',
      y: '50vh',
      opacity: 0,
      transition: {
        ease: 'easeIn',
      }
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeIn',
        type: 'spring',
        mass: 0.4,

      }
    }
  }
  const [openSidebar, setOpenSidebar] = useState(false);
  const [sidebarAnimation, toggleSidebarAnimation] = useCycle('hidden', 'visible');

  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
    toggleSidebarAnimation();
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && openSidebar == true) {
        setOpenSidebar(!openSidebar);
        toggleSidebarAnimation(0);
      }
    })
  },
    []);




  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/"> <img src={logo} alt="logo" /></Link>
        </div>
        <div className="line" />
        <nav className="nav nav--desktop">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav-link">
                <span className="nav-link__index">00</span>
                <span className="nav-link__title">HOME</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/destination" className="nav-link">
                <span className="nav-link__index">01</span>
                <span className="nav-link__title">DESTINATION</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/crew" className="nav-link">
                <span className="nav-link__index">02</span>
                <span className="nav-link__title">CREW</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav-link">
                <span className="nav-link__index">03</span>
                <span className="nav-link__title">TECHNOLOGY</span>
              </Link>
            </li>

          </ul>
        </nav>
        <div className="hamburger-menu" onClick={() => handleToggleSidebar()}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <motion.nav variants={sidebarVariants} initial="hidden" animate={sidebarAnimation} style={{

      }} className="nav nav--sidebar">
        <div className="actions-wrapper">
          <div className="closed-btn" onClick={() => handleToggleSidebar()}>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className="nav__list nav__list--sidebar">
          <motion.li className="nav__item" variants={navSidebarItemVariants}>
            <Link to="/" className="nav-link">
              <span className="nav-link__index">00</span>
              <span className="nav-link__title">HOME</span>
            </Link>
          </motion.li>
          <motion.li className="nav__item" variants={navSidebarItemVariants}>
            <Link to="/destination" className="nav-link" >
              <span className="nav-link__index">01</span>
              <span className="nav-link__title">DESTINATION</span>
            </Link>
          </motion.li>
          <motion.li className="nav__item" variants={navSidebarItemVariants}>
            <Link to="/" className="nav-link">
              <span className="nav-link__index">02</span>
              <span className="nav-link__title">CREW</span>
            </Link>
          </motion.li>
          <motion.li className="nav__item" variants={navSidebarItemVariants}>
            <Link to="/" className="nav-link">
              <span className="nav-link__index">03</span>
              <span className="nav-link__title">TECHNOLOGY</span>
            </Link>
          </motion.li>
        </ul>
      </motion.nav>
    </>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
