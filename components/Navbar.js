import React from 'react';
import Link from 'next/link'
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
// import { FaGithubSquare, FaLinkedin, FaGithub, FaExternalLinkAlt, FaTwitter, FaInstagram, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import styles from '../styles/Navbar.module.css';

const Navbar = (props) => {
  const [mobileOpenNav, setMobileOpenNav] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(`${styles.NavbarMobile}`);

  const toggleMobileMenu = () => {
    if (mobileOpenNav) {
      setMobileOpenNav(false);
      setIsOpen(`${styles.NavbarMobile}`)
    } else {
      setMobileOpenNav(true);
      setIsOpen(`${styles.NavbarMobile} ${styles.ActiveMenu}`)
    }
  }


  return (
    props.isMobile ?
    <div>
      <nav className={isOpen}>
        <div className={styles.NavLinksMobile}>
          <div className={styles.listLinks}>
            <Link href="#works">
              <a onClick={toggleMobileMenu}>Proyectos</a>
            </Link>
            <Link href="#skills">
              <a onClick={toggleMobileMenu}>Habilidades</a>
            </Link>
            <Link href="#contact">
              <a onClick={toggleMobileMenu}>Contacto</a>
            </Link>
          </div>
          {
            props.theme == "dark" 
            ? 
              <p onClick={props.toggle}><FaSun /></p>
            : 
              <p onClick={props.toggle}><FaMoon /></p>
          }
        </div>

      </nav>
      <div onClick={toggleMobileMenu} className={styles.ToggleButtonMenu}>
        {
          mobileOpenNav 
          ? 
            <FaTimes />
          :
            <FaBars />
        }
      </div>
    </div>
    :
    <nav className={styles.Navbar}>
      <Link href="/">
        <h1>MarsElit</h1>
      </Link>
      <div className={styles.NavLinks}>
        <Link href="#works">
          <a>Proyectos</a>
        </Link>
        <Link href="#skills">
          <a>Habilidades</a>
        </Link>
        <Link href="#contact">
          <a>Contacto</a>
        </Link>
        {
          props.theme == "dark" 
          ? 
            <p onClick={props.toggle}><FaSun /></p>
          : 
            <p onClick={props.toggle}><FaMoon /></p>
        }
        {/* <p onClick={props.toggle}><FaMoon /></p> */}
      </div>
    </nav>
  );
};

export default Navbar;