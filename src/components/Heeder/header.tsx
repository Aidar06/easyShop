import React from 'react';
import {FaUserCircle} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const navToAcc = ()=> {
        navigate('/acc')
    }
    const navToHero = ()=> {
        navigate('/')
    }
    return (
        <header id='header'>
            <div className="container">
                <div className="header">
                    <h2 onClick={navToHero}>EasyShop</h2>
                    <div onClick={navToAcc}>
                        <FaUserCircle />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;