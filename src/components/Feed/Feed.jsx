import React from 'react';
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import { Button, TextField } from '@mui/material'
import InputOptions from './InputOptions';

function Feed() {
  return (
      <div className="feed">
          <div className="feed__inputContainer">
              <div className="feed__input">
                <form>
                    <TextField InputProps={
                                    {
                                        startAdornment: (<CreateIcon style={ {marginRight: '8px'} } />),
                                        endAdornment: (<Button className="post-btn" 
                                                               color="secondary" 
                                                               size="small" 
                                                               variant='contained' 
                                                               type='submit'
                                                               onClick={ () => console.log('button clicked')}
                                                        >
                                                          send
                                                       </Button>)
                                    }
                                } 
                              className='text-input'
                              placeholder='Post today'
                              fullWidth
                      />
                    
                </form>
              </div>

              <div className="feed__inputOptions">
                <InputOptions />
              </div>
          </div>
      </div>
  );
}

export default Feed;
