import React from 'react';
import './HeaderRouter.css'
import { Avatar } from '@mui/material'

function HeaderRouter({ avatar, Icon, title }) {
  return (
      <div className="headerRouter">
        { Icon && <Icon className="headerRouter__icon" /> }
        { avatar && <Avatar style={ {width: '30px', height: '30px', marginTop: '-6px'} } src={ avatar } /> }
        <h5 className='headerRouter__title'>{ title }</h5>
      </div>      
  ) 
}

export default HeaderRouter;
