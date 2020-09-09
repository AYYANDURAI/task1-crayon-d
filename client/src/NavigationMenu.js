import React, { useState } from 'react';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import SpeakerNotesRoundedIcon from '@material-ui/icons/SpeakerNotesRounded';
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded';
import Avatar from '@material-ui/core/Avatar';
import {
    Link
} from "react-router-dom";
import './NavigationMenu.css';



function NavigationMenu() {
    const [navClick, setNavClick] = useState(false);
    const [styleNav, setStyleNav] = useState({});
    const handleClick = () => {
        if (navClick) {
            setNavClick(false);
            setStyleNav({});
        } else {
            setNavClick(true);
            setStyleNav({ display: 'flex' });
        }
    }
    return (
        <div className="navigation-menu">
            <div className="search__container">
                <span className="fa fa-search"></span>
                <input type="search" placeholder="Search" className="search" />
            </div>
            <ul className="nav__icons" style={styleNav}>
                <li>
                    <Link to="/"><SpeakerNotesRoundedIcon className="icon" /></Link>
                    <p>Feed</p>
                </li>
                <li>
                    <Link to="/jobs"><FormatListBulletedRoundedIcon className="icon" /></Link>
                    <p>Jobs</p>
                </li>
                <li>
                    <Link to="/"><NotificationsNoneRoundedIcon className="icon" /></Link>
                    <p>Notifications</p>
                </li>
                <li>
                    <Link to="/"><HomeWorkRoundedIcon className="icon" /></Link>
                    <p>Bearer</p>
                </li>
                <li>
                    <Link><Avatar className="profile__avatar" alt="Ayyandurai" src="" /></Link>
                    <p className="profile">MyProfile</p>
                </li>
            </ul>
            <button className="toggle" onClick={handleClick}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
        </div>
    )
}

export default NavigationMenu;
