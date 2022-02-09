import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
         <Link to="/">
        <button type="button">home</button></Link>
        <Link to="/Bracelets">
        <button type="button">bracelets</button></Link>
      
    </div>
  );
};
export default NavBar;
