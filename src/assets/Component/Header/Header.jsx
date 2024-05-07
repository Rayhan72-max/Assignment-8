import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../../public/Logo.png";
import Banner from '../Banner/Banner';

const Header = (props) => {

    
    return (
        <div> 
            <div class="navbar">
                <div class="flex-1">
                    <img src={logo} alt="" />
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal px-1">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/donation">Donation</Link></li>
                        <li><Link to="/statistics">Statistics</Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Header;