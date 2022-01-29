import React from 'react';
import './InputOptions.css'

function InputOption({ Icon, title, color }) {

  return (
      <div className="input__option">
          <Icon style={ {color: color } } />
          <p>{ title }</p>
      </div>
  );
}

export default InputOption;
