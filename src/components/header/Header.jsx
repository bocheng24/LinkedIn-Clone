import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import logo from '../../static/imgs/logo.png'

import './Header.css'
import HeaderRouter from './HeaderRouter';

function Header() {
  return (
      <div className="header">
        <div className="container">
            <div className="header__left">
                <img src={ logo } alt="logo" />
                <div className="header__search">
                    <SearchIcon className="search__icon" />
                    <input type="text" placeholder='Search' />
                </div>
            </div>

            <div className="header__right">
                <HeaderRouter Icon={ HomeIcon } title="Home" />
                <HeaderRouter Icon={ PeopleIcon } title="My Network" />
                <HeaderRouter Icon={ BusinessCenterIcon } title="Jobs" />
                <HeaderRouter Icon={ MessageIcon } title="Messages" />
                <HeaderRouter Icon={ NotificationsActiveIcon } title="Notifications" />
                <HeaderRouter avatar='https://avatars.dicebear.com/api/personas/ssShun.svg' title="Me" />
            </div>
        </div>
      </div>
  );
}

export default Header;
