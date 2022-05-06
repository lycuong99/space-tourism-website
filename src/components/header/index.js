import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby";


import logo from '../../images/logo.svg';
import { motion, useCycle } from "framer-motion";

const isBrowser = typeof window !== "undefined"
const routes = [
  {
    path: '/',
    index: '00',
    title: 'HOME'
  },
  {
    path: '/destination',
    index: '01',
    title: 'DESTINATION'
  },
  {
    path: '/crew',
    index: '02',
    title: 'CREW'
  }, {
    path: '/technology',
    index: '03',
    title: 'TECHNOLOGY'
  }
]
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
        staggerChildren: 0.2
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
  const pathName = isBrowser ? window.location.pathname : '/';

  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
    toggleSidebarAnimation();
  }


  useEffect(() => {

    if (isBrowser)
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && openSidebar === true) {
          setOpenSidebar(!openSidebar);
          toggleSidebarAnimation(0);
        }
      });


  },
    []);

  const renderNavLinks = (isDesktop) => {
    if (isDesktop) {
      return (
        <>
          {routes.map(route => (
            <li key={route.path} className={`nav__item ${pathName === route.path ? 'nav__item--active' : ''}`}>
              <Link to={route.path} className="nav-link">
                <span className="nav-link__index">{route.index}</span>
                <span className="nav-link__title">{route.title}</span>
              </Link>
            </li>
          ))
          }</>
      )
    }
    return (
      <>
        {
          routes.map(route => (<motion.li key={route.path} className={`nav__item ${pathName === route.path ? 'nav__item--active' : ''}`}

            variants={navSidebarItemVariants}
            exit={'hidden'}>
            <Link to={route.path} className="nav-link">
              <span className="nav-link__index">{route.index}</span>
              <span className="nav-link__title">{route.title}</span>
            </Link>
          </motion.li>))}</>
    )

  }


  return (
    <>
      <header className="header">
        <motion.div className="logo">
          <Link to="/"> <img src={logo} alt="logo" /></Link>
        </motion.div>
        <motion.div className="line" initial={{ scaleX: 0 }} animate={{
          scaleX: 1, transformOrigin: 'right', transition: {
            duration: 1,
            ease: 'easeIn'
          }
        }} exit={{
          scaleX: 0,
          transformOrigin: 'left',
          transition: {
            duration: 1,
            ease: 'easeIn'
          }
        }} />
        <motion.nav className="nav nav--desktop">
          <ul className="nav__list">
            {routes.map(route => (
              <li key={route.path} className={`nav__item ${pathName === route.path ? 'nav__item--active' : ''}`}>
                <Link to={route.path} className="nav-link">
                  <span className="nav-link__index">{route.index}</span>
                  <span className="nav-link__title">{route.title}</span>
                </Link>
              </li>
            ))
            }

          </ul>
        </motion.nav>
        <div className="hamburger-menu" onClick={() => handleToggleSidebar()}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <motion.nav variants={sidebarVariants} initial="hidden" animate={sidebarAnimation} exit={'hidden'} style={{

      }} className="nav nav--sidebar">
        <div className="actions-wrapper">
          <div className="closed-btn" onClick={() => handleToggleSidebar()}>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className="nav__list nav__list--sidebar">
          <motion.li className={`nav__item ${pathName === "/" ? 'nav__item--active' : ''}`} variants={navSidebarItemVariants}>
            <Link to="/" className="nav-link">
              <span className="nav-link__index">00</span>
              <span className="nav-link__title">HOME</span>
            </Link>
          </motion.li>
          <motion.li className={`nav__item ${pathName === "/destination" ? 'nav__item--active' : ''}`} variants={navSidebarItemVariants}>
            <Link to="/destination" className="nav-link" >
              <span className="nav-link__index">01</span>
              <span className="nav-link__title">DESTINATION</span>
            </Link>
          </motion.li>
          <motion.li className={`nav__item ${pathName === '/crew' ? 'nav__item--active' : ''}`} variants={navSidebarItemVariants}>
            <Link to="/crew" className="nav-link">
              <span className="nav-link__index">02</span>
              <span className="nav-link__title">CREW</span>
            </Link>
          </motion.li>
          <motion.li className={`nav__item ${pathName === '/technology' ? 'nav__item--active' : ''}`} variants={navSidebarItemVariants}>
            <Link to="/technology" className="nav-link">
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
