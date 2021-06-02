import React from 'react'
import '../styles/Home.css';
import {Link} from "react-router-dom";
import BannerImage from "../asset/pizza.jpeg";

function Home() {
    return (
        <div className = "home"  style = {{background :`url(${BannerImage})`}}>
           <div className = "headerContainer">
               <h1>Pedro's Pizzeria</h1>
               <p>PIZZA TO FIT ANY TASTE</p>
               <Link to="/Menu">
               <button>ORDER NOW</button>
               </Link>
           </div>
        </div>
    )
}

export default Home
