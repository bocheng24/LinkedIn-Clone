import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css'
import background from '../../static/imgs/background.jpg'

function Sidebar() {
  
  const recentItem = topic => {
      return (
          <div className="sidebar__recentItem">
              <span className="sidebar_hash">#</span>
              <p>{ topic }</p>
          </div>
      )
  }
  
  return (
      <div className="sidebar">
        <div className="sidebar__top">
            <img src={ background } alt="background image" />
            <Avatar src="https://avatars.dicebear.com/api/personas/boc.svg" className="sidebar__avatar" />
            <h2>Bocheng Zhang</h2>
            <h4>jeffcgp@hotmail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="stats__number">3,231</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="stats__number">5,281</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            { recentItem('reactjs') }
            { recentItem('python') }
            { recentItem('mongodb') }
        </div>
      </div>
  );
}

export default Sidebar;
