import React from 'react';
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import { Button, TextField } from '@mui/material'
import InputOptions from './InputOptions';
import Post from './Post';

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

          <Post image="https://images.unsplash.com/photo-1639905517737-a994704df20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80" />
      </div>
  );
}

export default Feed;
