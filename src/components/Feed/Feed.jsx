import React, { useState, useEffect } from 'react';
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import { Button, TextField } from '@mui/material'
import InputOptions from './InputOptions';
import Post from './Post';
import { db } from '../../db'
import { collection, 
         query, 
         orderBy, 
         onSnapshot,
         addDoc
       } from "firebase/firestore";

function Feed() {

  const [inputVal, setInputVal] = useState('')
  const [posts, setPosts] = useState([])
  
  useEffect(() => {

    const q = query(collection(db, "posts"), orderBy('timestamp', 'desc'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let latestPosts = [];

      querySnapshot.forEach((doc) => {
          const post = {
            id: doc.id,
            data: doc.data()
          }
          latestPosts = [...latestPosts, post]
      });

      setPosts(latestPosts)

    });

    console.log(posts)
    
  }, [])
  
  const sendPost = async e => {
    e.preventDefault()

    const docData = {
      name: 'Shun',
      description: 'Python freelancer',
      message: inputVal,
      photo: `https://avatars.dicebear.com/api/open-peeps/Shun.svg`,
      timestamp: Date.now()
    }
    const docRef = await addDoc(collection(db, "posts"), docData);
    setInputVal('')
  }



  return (
      <div className="feed">
          <div className="feed__inputContainer">
              <div className="feed__input">
                <form onSubmit={ sendPost }>
                    <TextField InputProps={
                                    {
                                        startAdornment: (<CreateIcon style={ {marginRight: '8px'} } />),
                                        endAdornment: (<Button className="post-btn" 
                                                               color="secondary" 
                                                               size="small" 
                                                               variant='contained' 
                                                               type='submit'
                                                               onClick={ sendPost }
                                                        >
                                                          send
                                                       </Button>)
                                    }
                                } 
                              className='text-input'
                              placeholder='Post today'
                              fullWidth
                              value={ inputVal }
                              onChange={ e => setInputVal(e.target.value) }
                      />
                    
                </form>
              </div>

              <div className="feed__inputOptions">
                <InputOptions />
              </div>
          </div>
          
          {
            posts.map(post => <Post key={ post.id}
                                    name={ post.data.name }
                                    description={ post.data.description }
                                    photo={ post.data.photo }
                                    message={ post.data.message }
                                    image='https://images.unsplash.com/photo-1639865120457-abb324ffc8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
                              />)
          }

      </div>
  );
}

export default Feed;
