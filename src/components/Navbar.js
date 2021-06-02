import React , {useState} from 'react';
import Logo from "../asset/pizzaLogo.png";
import {Link } from 'react-router-dom' ;
import ReorderIcon from '@material-ui/icons/Reorder';
import '../styles/Navbar.css';

function Navbar() {

    const [openLinks , setopenLinks] = useState(false);

    const toggleNavbar = () => {
        setopenLinks(!openLinks);
    }

    return (
        <div className = "navbar">
            <div className = "leftSide" id = {openLinks ? "open" : "close"}>
               <img src = {Logo} />
            </div>
            <div className = "rightside">
                <Link to = "/"> Home </Link>
                <Link to = "/menu"> Menu </Link>
                <Link to = "/about"> About </Link>
                <Link to = "/contact"> Contact </Link>
                 <button onClick = {toggleNavbar}>
                     <ReorderIcon/>
                 </button>
            </div>

        </div>
    )
}

export default Navbar
