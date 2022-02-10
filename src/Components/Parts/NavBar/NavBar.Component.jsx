import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
         <Link to="/"> <button type="button">home</button></Link>
        <Link to="/Bracelets"><button type="button">bracelets</button></Link> 
        <Link to="/Rings"> <button type="button">Rings</button></Link>
        <Link to="/Watches"><button type="button">Watches</button></Link>
    </div>
  );
};
export default NavBar;
