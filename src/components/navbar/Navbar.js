import { useState } from 'react'
import "./Navbar.css"
import {
    AiOutlineRocket, AiOutlineBars, AiOutlineArrowRight,
    AiOutlineArrowLeft
} from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
    // Hide mobile menu icon and submenu initially
    const [showMenu, setShowMenu] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    // Use this function to hide menu after a link is clicked
    const hideMenu = () => {
        setShowMenu(false);
        setShowSubmenu(false); // hide submenu as well
    }

    return (
        <nav className='container navbar'>
            {/* Create nice inline logo img */}
            <div className='logo'>
                <AiOutlineRocket color="fff" size={35} />
                <p className='logo-text'>Lucy.<span>com</span></p>
            </div>

            <menu>
                {/* Add a div here so that when user clicks outside of the mobile menu, the menu disappears (black div that takes 50% of screen) */}
                <div className={showMenu ? " nav-wrapper show-nav-wrapper" : "nav-wrapper"} onClick={hideMenu}> </div>

                {/* Use id property to show or hide the mobile menu */}
                {/* When a link is clicked, hide the mobile menu */}
                <ul className='nav-links' id={showMenu ? "mobile-nav-links" : "hide-mobile-nav-links"}>
                    <li onClick={hideMenu}><a href="#">Home</a></li>
                    <li onClick={hideMenu}><a href="#">Features</a></li>
                    <li onClick={hideMenu}><a href="#">Download</a></li>
                    {/* When click settings, we need to show submenu. Must use arrow function, cannot call setter function directly, bc it will run on pageload (or else get an infinite loop errror) */}
                    <li className='submenu-link' onClick={() => setShowSubmenu(true)}>
                        <a href="#">Settings</a>
                        <AiOutlineArrowRight color="fff" size={18} />
                    </li>
                    <li onClick={hideMenu} className='nav-btn'><a className="btn btn-dark" href="#">Get Started</a></li>
                </ul>

                {/* SUBMENU JSX */}
                {/* SUBMENU JSX. Checking if showSubmenu is true and assigning ids to show/hide the menu */}
                <ul className='nav-links submenu' id={showSubmenu ? "submenu-nav-links" : "hide-submenu-nav-links"}>
                    <li className='submenu-link' onClick={() => setShowSubmenu(false)}>
                        <AiOutlineArrowLeft color="fff" size={18} />
                        <a href="#">Back to Menu</a>
                    </li>
                    <li onClick={hideMenu}><a href="#">Profile Settings</a></li>
                    <li onClick={hideMenu}><a href="#">Account Settings</a></li>
                    <li onClick={hideMenu}><a href="#">User Settings</a></li>
                </ul>
            </menu>

            {/* Div to hold hamburger icon and close icon. Use logic to see which icon to display & toggle on click */}
            <div className='menu-icons' onClick={toggleMenu}>
                {showMenu ? (
                    // Add hideMenu function to X icon so that it closes submenu as well
                    <RiCloseLine color="fff" size={27} onClick={hideMenu}/>
                ) : (
                    <AiOutlineBars color="fff" size={27} />
                )}
            </div>
        </nav>
    )
}

export default Navbar
