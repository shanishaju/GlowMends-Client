import { faBagShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "transparent", boxShadow: "none"}} id="mainNav">
            <div className="container">
            
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="/about-us" style={{color:"#76453f",fontSize:'20px'}}>About</a></li>
                        <li className="nav-item"><a className="nav-link" href="/products" style={{color:"#76453f",fontSize:'20px'}}>Shop</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about" style={{color:"#76453f",fontSize:'20px'}}>Gifts</a></li>
                        <li className="nav-item"><a className="nav-link" href="/contact-us" style={{color:"#76453f",fontSize:'20px'}}>Contact</a></li>
                    </ul>
                </div>
                <ul className="navbar-nav text-uppercase py-4 py-lg-0">
                    <li className="nav-item"><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#76453f", fontSize:'20px'}} /></li>
                    <li className="nav-item"><FontAwesomeIcon icon={faUser} style={{color: "#76453f", fontSize:'20px'}} /></li>
                    <Link to={'/cart'}><li className="nav-item"><FontAwesomeIcon icon={faBagShopping} style={{color: "#76453f",fontSize:'20px'}} /></li></Link>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Header
