import React from "react";
import "./Navbar.css"

function Navbar(){
    



    return(
        <div className="navbar">
            <div><img
            className="nav__logo"
            src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="NETFLIX"/></div>
           
           <div><ul className="nav__menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Serie TV</a></li>
                <li><a href="#">Nuovi e popolari</a></li>
                <li><a href="#">La mia lista</a></li>
                <li><a href="#">Sfoglia per lingua</a></li>
                <li><a href="#">Film</a></li>
            </ul></div>
            <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="AVATAR"/>
        </div>
    )
}
export default Navbar;