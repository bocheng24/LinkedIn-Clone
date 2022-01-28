import React from 'react';
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import { Button, TextField } from '@mui/material'

function Feed() {
  return (
      <div className="feed">
          <div className="feed__inputContainer">
              <div className="feed__input">
                {/* <div className="create-icon">
                    <CreateIcon />
                </div> */}
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
                              className='text-input' fullWidth/>
                    
                </form>
              </div>
          </div>
      </div>
  );
}

export default Feed;
