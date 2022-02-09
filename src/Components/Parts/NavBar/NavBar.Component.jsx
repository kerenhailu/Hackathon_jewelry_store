import React from "react";
import { Link } from "react-router-dom";

const NavBar=()=>{
    return(<div>
        <Link to="/Bracelets"> Bracelets</Link>
        <Link to="/Necklaces"> Necklaces</Link>
        <Link to="/Rings"> Rings</Link>
        <Link to="/Watches"> Watches</Link>
    </div>)
}
export default NavBar;